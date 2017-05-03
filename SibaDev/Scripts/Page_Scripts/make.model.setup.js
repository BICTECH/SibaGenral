(function ($, s, u, $scope) {
    $(function () {

        $scope.makemodel_grid = u.default_grid("#grdMakeModel", "#grdMakeModelPager", "Make & Model List",
       ['Code', 'Brand', 'Model', ' Description', 'Load Tonnage', 'Cubic Capacity', 'Passengers', 'Usage', 'Chasis No.', 'Fuel type',
                  'Body type', 'Year', 'Status', 'Created By', 'Created Date'],
        [
                { name: 'MMO_CODE', id: true, index: 'MMO_CODE' },
                { name: 'MMO_MAK_CODE', id: false, index: 'MMO_MAK_CODE' },
                { name: 'MMO_NAME', id: false, index: 'MMO_NAME' },
                { name: 'MMO_DESC', index: 'MMO_DESC' },
                { name: 'MMO_LOAD_TONNAGE', index: 'MMO_LOAD_TONNAGE' },
                { name: 'MMO_CUBIC_CAPACITY', index: 'MMO_CUBIC_CAPACITY' },
                { name: 'MMO_PASSENGERS', index: 'MMO_PASSENGERS' },
                { name: 'MMO_USAGE', index: 'MMO_USAGE' },
                { name: 'MMO_CHASSIS_NUM', index: 'MMO_CHASSIS_NUM' },
                { name: 'MMO_FUEL_TYPE', index: 'MMO_FUEL_TYPE' },
                { name: 'MMO_BODY_TYPE', index: 'MMO_BODY_TYPE' },
                { name: 'MMO_YEAR_MFG', index: 'MMO_YEAR_MFG' },
                { name: 'MMO_STATUS', index: 'MMO_STATUS' },
                { name: 'MMO_CRTE_BY', index: 'MMO_CRTE_BY' },
                { name: 'MMO_CRTE_DATE', index: 'MMO_CRTE_DATE' }
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.makemodel_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='MMO_CODE']").data("update", true);
            u.fill_form({
                MMO_CODE: grid.jqGrid('getCell', sel_id, 'MMO_CODE'),
                MMO_MAK_CODE: grid.jqGrid('getCell', sel_id, 'MMO_MAK_CODE'),
                MMO_NAME: grid.jqGrid('getCell', sel_id, 'MMO_NAME'),
                MMO_DESC: grid.jqGrid('getCell', sel_id, 'MMO_DESC'),
                MMO_PASSENGERS: grid.jqGrid('getCell', sel_id, 'MMO_PASSENGERS'),
                MMO_USAGE: grid.jqGrid('getCell', sel_id, 'MMO_USAGE'),
                MMO_LOAD_TONNAGE: grid.jqGrid('getCell', sel_id, 'MMO_LOAD_TONNAGE'),
                MMO_CUBIC_CAPACITY: grid.jqGrid('getCell', sel_id, 'MMO_CUBIC_CAPACITY'),
                MMO_CHASSIS_NUM: grid.jqGrid('getCell', sel_id, 'MMO_CHASSIS_NUM'),
                MMO_FUEL_TYPE: grid.jqGrid('getCell', sel_id, 'MMO_FUEL_TYPE'),
                MMO_YEAR_MFG: grid.jqGrid('getCell', sel_id, 'MMO_YEAR_MFG'),
                MMO_BODY_TYPE: grid.jqGrid('getCell', sel_id, 'MMO_BODY_TYPE'),
                //MMO_STATUS: grid.jqGrid('getCell', sel_id, 'MMO_STATUS')
            }, "#makemodelForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  makemodel_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#makemodelForm")) {

                if (u.field_empty("input[name='MMO_CODE']")) return u.growl_error

            ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.makemodel_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.makemodel_grid.jqGrid('getCell', currRow, 'MMO_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#MMO_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#makemodelForm");
                        FormData.MMO_STATUS = "U";
                        FormData.MMO_CRTE_BY = "Admin";
                        FormData.MMO_CRTE_DATE = u.get_date();
                        $scope.makemodel_grid.addRowData(FormData.MMO_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("Make & Model successfully added to grid");
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
                case "btn_make":
                    $scope.lov.call_dialog("Select Car Brand", "get_lov_make", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.makemodel_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.makemodel_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'MMO_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'MMO_CODE');

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

                    grid.jqGrid('setCell', row_id, 'MMO_STATUS', 'D');
                    $('#' + row_id, '#grdMakeModel').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdMakeModel').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'MMO_STATUS', 'A');
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

            if (u.grid_empty($scope.makemodel_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.makemodel_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'MMO_CODE');

            if (Code == $('#MMO_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'MMO_CODE', $('#MMO_CODE').val());
                grid.jqGrid('setCell', row_id, 'MMO_NAME', $('#MMO_NAME').val());
                grid.jqGrid('setCell', row_id, 'MMO_DESC', $('#MMO_DESC').val());
                grid.jqGrid('setCell', row_id, 'MMO_PASSENGERS', $('#MMO_PASSENGERS').val());
                grid.jqGrid('setCell', row_id, 'MMO_USAGE', $('#MMO_USAGE').val());
                grid.jqGrid('setCell', row_id, 'MMO_LOAD_TONNAGE', $('#MMO_LOAD_TONNAGE').val());
                grid.jqGrid('setCell', row_id, 'MMO_CUBIC_CAPACITY', $('#MMO_CUBIC_CAPACITY').val());
                grid.jqGrid('setCell', row_id, 'MMO_CHASSIS_NUM', $('#MMO_CHASSIS_NUM').val());
                grid.jqGrid('setCell', row_id, 'MMO_FUEL_TYPE', $('#MMO_FUEL_TYPE').val());
                grid.jqGrid('setCell', row_id, 'MMO_YEAR_MFG', $('#MMO_YEAR_MFG').val());
                grid.jqGrid('setCell', row_id, 'LDI_MAX_AMT', $('#LDI_MAX_AMT').val());
                grid.jqGrid('setCell', row_id, 'MMO_BODY_TYPE', $('#MMO_BODY_TYPE').val());
                grid.jqGrid('setCell', row_id, 'MMO_MAK_CODE', $('#MMO_MAK_CODE').val());
                u.hide_confirm();
                u.growl_success("Make & Model successfully updated");
                $("form input[name='MMO_CODE']").data("update", false);
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

            if (u.grid_empty($scope.makemodel_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {
          
                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.makemodel_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_makemodels(u.get_grid_data($scope.makemodel_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.makemodel_grid;
                            var rowIds = $scope.makemodel_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "MMO_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "MMO_STATUS", "A");
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
                u.form_reset("#makemodelForm");
                u.clear_grid_data($scope.makemodel_grid);
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
            u.excel_export($scope.makemodel_grid, ["ID"], "Make_Model_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryDiscountLoading").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_makemodel(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.makemodel_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.makemodel_grid.addRowData(result[i].MMO_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.makemodel_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_makemodels(function (makemodels) {
                    for (var i in makemodels) {
                        $scope.makemodel_grid.addRowData(makemodels[i].MMO_CODE, makemodels[i]);
                    }
                });
            }

        });

        /*-------------------------------------
   * setting datepicker for date fields
   *------------------------------------*/
        //u.set_datepicker("input[name='MMO_YEAR_MFG']");

        /*-----------------------------
   * Code validation
   *-----------------------*/
        u.codeVal("form input[name='MMO_CODE']", "check_makemodel_code");
        u.lovCodeVal("form input[name='MMO_MAK_CODE']", "check_make_code", "form input[name='MAK_NAME']");
    });

})(window.$, window.service, window.utility, {})