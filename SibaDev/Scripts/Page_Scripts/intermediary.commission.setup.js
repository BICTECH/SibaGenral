(function ($, s, u, $scope) {
    $(function () {


        $scope.intermcomm_grid = u.default_grid("#grdIntercomm", "#grdIntercommPager", "Agency Commission List",
     ['Interm Code','Int. Name', 'Product Code','Product Name', 'Default Perc', 'New Perc', 'Renewal Perc', 'Endorse Perc',
                       'From Date', 'To Date', 'Active', 'Created By', 'Created Date', 'Status', 'Sys ID'],
     [      
        { name: 'COM_INT_CODE', index: 'COM_INT_CODE' },
        { name: 'COM_INT_NAME', index: 'COM_INT_NAME' },
        { name: 'COM_PROD_CODE', index: 'COM_PROD_CODE' },
         { name: 'COM_PROD_NAME', index: 'COM_PROD_NAME' },
        { name: 'COM_DFT_PERC', index: 'COM_DFT_PERC' },
        { name: 'COM_NEW_PERC', index: 'COM_NEW_PERC' },
        { name: 'COM_RENEWAL_PERC', index: 'COM_RENEWAL_PERC' },
        { name: 'COM_ENDORSE_PERC', index: 'COM_ENDORSE_PERC' },
        { name: 'COM_FROM_DATE', index: 'COM_FROM_DATE' },
        { name: 'COM_TO_DATE', index: 'COM_TO_DATE' },
        { name: 'COM_ACTIVE_YN', index: 'COM_ACTIVE_YN' },
        { name: 'COM_CRTE_BY', index: 'COM_CRTE_BY' },
        { name: 'COM_CRTE_DATE', index: 'COM_CRTE_DATE' },
        { name: 'COM_STATUS', index: 'COM_STATUS' },     
        { name: 'COM_SYS_ID', index: 'COM_SYS_ID' },
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.intermcomm_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='COM_INT_CODE']").data("update", true);
        u.fill_form({
            COM_INT_CODE: grid.jqGrid('getCell', sel_id, 'COM_INT_CODE'),
            COM_INT_NAME: grid.jqGrid('getCell', sel_id, 'COM_INT_NAME'),
            COM_PROD_CODE: grid.jqGrid('getCell', sel_id, 'COM_PROD_CODE'),
            COM_PROD_NAME: grid.jqGrid('getCell', sel_id, 'COM_PROD_NAME'),
            COM_DFT_PERC: grid.jqGrid('getCell', sel_id, 'COM_DFT_PERC'),
            COM_NEW_PERC: grid.jqGrid('getCell', sel_id, 'COM_NEW_PERC'),
            COM_RENEWAL_PERC: grid.jqGrid('getCell', sel_id, 'COM_RENEWAL_PERC'),
            COM_ENDORSE_PERC: grid.jqGrid('getCell', sel_id, 'COM_ENDORSE_PERC'),
            COM_FROM_DATE: grid.jqGrid('getCell', sel_id, 'COM_FROM_DATE'),
            COM_TO_DATE: grid.jqGrid('getCell', sel_id, 'COM_TO_DATE'),
            COM_ACTIVE_YN: grid.jqGrid('getCell', sel_id, 'COM_ACTIVE_YN')
        }, "#intermcommForm");
    }),

   $scope.saving = false;

        u.percentFieldValidation("#COM_DFT_PERC");
        u.percentFieldValidation("#COM_NEW_PERC");
        u.percentFieldValidation("#COM_ENDORSE_PERC");
        u.percentFieldValidation("#COM_RENEWAL_PERC");

        /*--------------------------------------------------
           * call add function to add records to  intermcomm_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#intermcommForm")) {

                if (u.field_empty("input[name='COM_INT_CODE']")) return u.growl_error("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Intermediary Commision to the grid?", function () {

                    var rowIds = $scope.intermcomm_grid.jqGrid('getDataIDs');

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var Code = [];

                    /*------------------------------------------------------------
                     * iterate through the rows and check duplicate each of them
                     *----------------------------------------------------------*/
                    // 
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        /*------------------------------------------------
                         * get value of the cell or column in an array
                         *----------------------------------------------*/
                        //
                        var cellValue = $scope.intermcomm_grid.jqGrid('getCell', currRow, 'COM_PROD_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#COM_PROD_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#intermcommForm");
                        //var FormData1 = u.parse_form("#intermcommForm");
                        //for (var i in FormData1) {
                        //    FormData[i] = FormData1[i];
                        //}
                        FormData.COM_STATUS = "U";
                     
                        FormData.COM_CRTE_BY = "Admin";
                        FormData.COM_CRTE_DATE = u.get_date();
                        $scope.intermcomm_grid.addRowData(FormData.ID, FormData);
                        u.hide_confirm();
                        u.growl_success("Agency Commission successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


                /*----------------------
         * LOV initialization
         *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOVRegion", "#grdLOVRegionPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function(e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
            case "btn_intermediary":
                $scope.lov.call_dialog("Select Intermediary type", "get_lov_intermediary", $scope.dialog_data);
                break;
            case "btn_product":
                $scope.lov.call_dialog("Select Product", "get_lov_product", $scope.dialog_data);
                break;
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.intermcomm_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.intermcomm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'COM_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'COM_INT_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus == "U") {

                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid('setCell', row_id, 'COM_STATUS', 'D');
                    $('#' + row_id, '#grdIntercomm').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdIntercomm').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'COM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on('click', function () {

            if (u.grid_empty($scope.intermcomm_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.intermcomm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'COM_PROD_CODE');

            if (Code == $('#COM_PROD_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'COM_INT_CODE', $('#COM_INT_CODE').val());
                grid.jqGrid('setCell', row_id, 'COM_PROD_CODE', $('#COM_PROD_CODE').val());
                grid.jqGrid('setCell', row_id, 'COM_DFT_PERC', $('#COM_DFT_PERC').val());
                grid.jqGrid('setCell', row_id, 'COM_NEW_PERC', $('#COM_NEW_PERC').val());
                grid.jqGrid('setCell', row_id, 'COM_RENEWAL_PERC', $('#COM_RENEWAL_PERC').val());
                grid.jqGrid('setCell', row_id, 'COM_FROM_DATE', $('#COM_FROM_DATE').val());
                grid.jqGrid('setCell', row_id, 'COM_ENDORSE_PERC', $('#COM_ENDORSE_PERC').val());
                u.hide_confirm();
                u.growl_success("Agency Commission successfully updated");
                $("form input[name='COM_PROD_CODE']").data("update", false);
            }
            else {
                u.hide_confirm();
                u.growl_info("Please Select a row to edit");
            }

            });
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            if (u.grid_empty($scope.intermcomm_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {        

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.intermcomm_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_intermcomms(u.get_grid_data($scope.intermcomm_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.intermcomm_grid;
                            var rowIds = $scope.intermcomm_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "COM_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "COM_STATUS", "A");
                                }
                            }
                            u.hide_confirm();
                            u.growl_success(responseData.message);

                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function () {
                        u.hide_confirm();
                        u.growl_error("Server Please try again Later");
                    });
                }

            });

        });


        var message = "";
        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").on('click', function () {
            u.modal_warning("Are you sure you want Delete the Record?");

            $('#btnOkWarning').click(function (e) {
                u.modal_warning("Wait while the transaction is being deleted..........");
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#intermcommForm");
                u.clear_grid_data($scope.intermcomm_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared");
            });
        });


        /*------------------------------------------
         * Tabs Layout function call using Jquery 
         *----------------------------------------*/
        //  
        $("#tabs").tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.fail(function () {
                    ui.panel.html(
                      "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                      "If this wouldn't be a demo.");
                });
            }
        });

        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#export-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.intermcomm_grid, ["ID"], "Intermediary_Commission_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryIntermcomm").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_intermcomm(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.intermcomm_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.intermcomm_grid.addRowData(result[i].ID, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.intermcomm_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_intermcomms(function (agencycommissions) {
                    for (var i in agencycommissions) {
                        agencycommissions[i]["COM_INT_NAME"] = agencycommissions[i]["MS_SYS_INTERMEDIARY"]["INT_OFFICIAL_NAME"];
                       agencycommissions[i]["COM_PROD_NAME"] = agencycommissions[i]["MST_UWD_PRODUCT"]["PDT_NAME"];

                        $scope.intermcomm_grid.addRowData(agencycommissions[i].ID, agencycommissions[i]);
                    }
                });
            }

        });


        /*-------------------------------------
    * setting datepicker for date fields
    *------------------------------------*/
        u.set_datepicker("input[name='COM_FROM_DATE']");
        u.set_datepicker("input[name='COM_TO_DATE']");


        // Period days calculations/

        document.getElementById("COM_FROM_DATE").addEventListener("focusout", fxnPeriodDays);
        document.getElementById("COM_TO_DATE").addEventListener("focusout", fxnPeriodDays);


        function fxnPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#COM_FROM_DATE").val();
            var EDate = $("#COM_TO_DATE").val();

            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var PeriodDays = u.get_dateDifference(StartDate, EndDate);

            if (PeriodDays <= 0) {
                u.growl_warning("End date cannot be less than or equal to start date");
                $("#COM_TO_DATE").val('');
            }
            else {

            }
        }


        /*-----------------------------
    * Code validation
     *-----------------------*/
        u.codeVal("form input[name='COM_INT_CODE']", "check_intermcommission_code");


    });

})(window.$, window.service, window.utility, {})