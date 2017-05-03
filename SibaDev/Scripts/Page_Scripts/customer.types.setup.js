(function ($, s, u, $scope) {
    $(function () {


        $scope.customertypes_grid = u.default_grid("#grdCustomertypes", "#grdCustomertypesPager", "Customer Types List",
        ['Type', 'Code', ' Name', 'Description', 'Prefix', 'Surfix', 'Status', 'Created By', 'Created Date'],
        [
            { name: 'CTP_CUST_TYPE', index: 'CTP_CUST_TYPE' },
            { name: 'CTP_CODE', id: true, index: 'CTP_CODE' },
            { name: 'CTP_NAME', index: 'CTP_NAME' },
            { name: 'CTP_DESC', index: 'CTP_DESC' },
            { name: 'CTP_PREFIX', index: 'CTP_PREFIX' },
            { name: 'CTP_SURFIX', index: 'CTP_SURFIX' },
            { name: 'CTP_STATUS', index: 'CTP_STATUS' },
            { name: 'CTP_CRTE_BY', index: 'CTP_CRTE_BY' },
            { name: 'CTP_CRTE_DATE', index: 'CTP_CRTE_DATE' }
        ],
       //Retrive Grid data into form input fields on row click..
       function (sel_id) {
           var grid = $scope.customertypes_grid;
           var sel_id = grid.jqGrid('getGridParam', 'selrow');
           $("form input[name='CTP_CODE']").data("update", true);
           u.fill_form({
               CTP_CODE: grid.jqGrid('getCell', sel_id, 'CTP_CODE'),
               CTP_NAME: grid.jqGrid('getCell', sel_id, 'CTP_NAME'),
               CTP_DESC: grid.jqGrid('getCell', sel_id, 'CTP_DESC'),
               CTP_PREFIX: grid.jqGrid('getCell', sel_id, 'CTP_PREFIX'),
               CTP_SURFIX: grid.jqGrid('getCell', sel_id, 'CTP_SURFIX'),
               CTP_CUST_TYPE: grid.jqGrid('getCell', sel_id, 'CTP_CUST_TYPE'),
               //CTP_STATUS: grid.jqGrid('getCell', sel_id, 'CTP_STATUS')
           }, "#customertypeForm");
       }),
      $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  customertypes_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {
           
            if (u.form_validation("#customertypeForm")) {

                if (u.field_empty("input[name='CTP_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Customer Types to the grid?", function () {

                    var rowIds = $scope.customertypes_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.customertypes_grid.jqGrid('getCell', currRow, 'CTP_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CTP_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#customertypeForm");
                        FormData.CTP_STATUS = "U";
                        FormData.CTP_CRTE_BY = "Admin";
                        FormData.CTP_CRTE_DATE = u.get_date();
                        $scope.customertypes_grid.addRowData(FormData.CTP_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Customer Types successfully added to grid");
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
        $("body").delegate(".btn_lov", "click", function (e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
                case "btn_custcat":
                    $scope.lov.call_dialog("Select Customer Category", "get_custcat_lov", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.customertypes_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.customertypes_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CTP_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CTP_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
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

                    grid.jqGrid('setCell', row_id, 'CTP_STATUS', 'D');
                    $('#' + row_id, '#grdCustomertypes').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCustomertypes').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CTP_STATUS', 'A');
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

            if (u.grid_empty($scope.customertypes_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.customertypes_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CTP_CODE');

            if (Code == $('#CTP_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CTP_CODE', $('#CTP_CODE').val());
                grid.jqGrid('setCell', row_id, 'CTP_NAME', $('#CTP_NAME').val());
                grid.jqGrid('setCell', row_id, 'CTP_DESC', $('#CTP_DESC').val());
                grid.jqGrid('setCell', row_id, 'CTP_PREFIX', $('#CTP_PREFIX').val());
                grid.jqGrid('setCell', row_id, 'CTP_SURFIX', $('#CTP_SURFIX').val());
                grid.jqGrid('setCell', row_id, 'CTP_CUST_TYPE', $('#CTP_CUST_TYPE').val());
                u.hide_confirm();
                u.growl_success("Customer Types successfully updated");
                $("form input[name='CTP_CODE']").data("update", false);
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

            if (u.grid_empty($scope.customertypes_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {         

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.customertypes_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_customertypes(u.get_grid_data($scope.customertypes_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.customertypes_grid;
                            var rowIds = $scope.customertypes_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CTP_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CTP_STATUS", "A");
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
                u.form_reset("#customertypeForm");
                u.clear_grid_data($scope.customertypes_grid);
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
            u.excel_export($scope.customertypes_grid, ["ID"], "Customer_Types_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCustomertypes").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_customertype(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.customertypes_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.customertypes_grid.addRowData(result[i].CTP_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.customertypes_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_customertypes(function (customertypes) {
                    for (var i in customertypes) {
                        $scope.customertypes_grid.addRowData(customertypes[i].CTP_CODE, customertypes[i]);
                    }
                });
            }

        });
        /*-----------------------------
        * Code validation
        *-----------------------*/
        //u.codeVal("form input[name='CTP_CUST_TYPE']", "check_customertypes_code");

        u.lovCodeVal("form input[name='CTP_CUST_TYPE']", "check_custcat_code", "form input[name='CUS_CAT_NAME']");

    });

})(window.$, window.service, window.utility, {})