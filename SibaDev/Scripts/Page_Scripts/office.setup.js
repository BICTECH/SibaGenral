(function ($, s, u, $scope) {
    $(function () {


        $scope.office_grid = u.default_grid("#grdOffice", "#grdOfficePager", "Office List",
      ['Code', 'Name', 'Description', 'Channel', 'Address', 'Location', 'Phone',
            'Mobile', 'Fax', 'Email', 'Manager', 'Company Code', 'Created by', 'Created date', 'Status'],
        [
                { name: 'OFF_CODE', index: 'OFF_CODE', width: 100 },
                { name: 'OFF_NAME', index: 'OFF_NAME', width: 300 },
                { name: 'OFF_DESC', index: 'OFF_DESC', width: 300 },
                { name: 'OFF_CHANEL', index: 'OFF_CHANEL', width: 300 },
                { name: 'OFF_ADDRESS1', index: 'OFF_ADDRESS1', width: 300 },
                { name: 'OFF_PHYSICAL_LOCAT', index: 'OFF_PHYSICAL_LOCAT', width: 300 },
                { name: 'OFF_PHONE', index: 'OFF_PHONE', width: 200 },
                { name: 'OFF_MOBILE', index: 'OFF_MOBILE', width: 200 },
                { name: 'OFF_FAX', index: 'OFF_FAX', width: 100 },
                { name: 'OFF_EMAIL', index: 'OFF_EMAIL', width: 200 },
                { name: 'OFF_MANAGER', index: 'OFF_MANAGER', width: 200 },
                { name: 'OFF_CMP_CODE', index: 'OFF_CMP_CODE', width: 100 },
                { name: 'OFF_CRTE_BY', index: 'OFF_CRTE_BY', width: 200 },
                { name: 'OFF_CRTE_DATE', index: 'OFF_CRTE_DATE', width: 100 },
                { name: 'OFF_STATUS', index: 'OFF_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.office_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='OFF_CODE']").data("update", true);
            u.fill_form({
                OFF_CODE: grid.jqGrid('getCell', sel_id, 'OFF_CODE'),
                OFF_NAME: grid.jqGrid('getCell', sel_id, 'OFF_NAME'),
                OFF_DESC: grid.jqGrid('getCell', sel_id, 'OFF_DESC'),
                OFF_CHANEL: grid.jqGrid('getCell', sel_id, 'OFF_CHANEL'),
                OFF_ADDRESS1: grid.jqGrid('getCell', sel_id, 'OFF_ADDRESS1'),
                OFF_PHYSICAL_LOCAT: grid.jqGrid('getCell', sel_id, 'OFF_PHYSICAL_LOCAT'),
                OFF_PHONE: grid.jqGrid('getCell', sel_id, 'OFF_PHONE'),
                OFF_MOBILE: grid.jqGrid('getCell', sel_id, 'OFF_MOBILE'),
                OFF_FAX: grid.jqGrid('getCell', sel_id, 'OFF_FAX'),
                OFF_EMAIL: grid.jqGrid('getCell', sel_id, 'OFF_EMAIL'),
                OFF_MANAGER: grid.jqGrid('getCell', sel_id, 'OFF_MANAGER'),
                OFF_CMP_CODE: grid.jqGrid('getCell', sel_id, 'OFF_CMP_CODE'),
                //OFF_STATUS: grid.jqGrid('getCell', sel_id, 'OFF_STATUS'),
            }, "#officeForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
                 * call add function to add records to  office_grid
                 *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {
            if (u.form_validation("#officeForm")) {

                if (u.field_empty("input[name='OFF_CODE']")) return u.growl_error

                    ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Office to the grid?", function () {

                    var rowIds = $scope.office_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.office_grid.jqGrid('getCell', currRow, 'OFF_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#OFF_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#officeForm");
                        FormData.OFF_STATUS = "U";
                        FormData.OFF_CRTE_BY = "Admin";
                        FormData.OFF_CRTE_DATE = u.get_date();
                        $scope.office_grid.addRowData(FormData.OFF_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Office successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            } else {
                u.growl_error("Please fill out the fields that are marked red!");
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
                case "btn_company":
                    $scope.lov.call_dialog("Select Company", "get_lov_companies", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.office_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.office_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'OFF_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'OFF_CODE');

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

                    grid.jqGrid('setCell', row_id, 'OFF_STATUS', 'D');
                    $('#' + row_id, '#grdOffice').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdOffice').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'OFF_STATUS', 'A');
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

            if (u.grid_empty($scope.office_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.office_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'OFF_CODE');

            if (Code == $('#OFF_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'OFF_CODE', $('#OFF_CODE').val());
                grid.jqGrid('setCell', row_id, 'OFF_NAME', $('#OFF_NAME').val());
                grid.jqGrid('setCell', row_id, 'OFF_DESC', $('#OFF_DESC').val());
                grid.jqGrid('setCell', row_id, 'OFF_CHANEL', $('#OFF_CHANEL').val());
                grid.jqGrid('setCell', row_id, 'OFF_ADDRESS1', $('#OFF_ADDRESS1').val());
                grid.jqGrid('setCell', row_id, 'OFF_PHYSICAL_LOCAT', $('#OFF_PHYSICAL_LOCAT').val());
                grid.jqGrid('setCell', row_id, 'OFF_PHONE', $('#OFF_PHONE').val());
                grid.jqGrid('setCell', row_id, 'OFF_MOBILE', $('#OFF_MOBILE').val());
                grid.jqGrid('setCell', row_id, 'OFF_FAX', $('#OFF_FAX').val());
                grid.jqGrid('setCell', row_id, 'OFF_EMAIL', $('#OFF_EMAIL').val());
                grid.jqGrid('setCell', row_id, 'OFF_MANAGER', $('#OFF_MANAGER').val());
                grid.jqGrid('setCell', row_id, 'OFF_CMP_CODE', $('#OFF_CMP_CODE').val());
                u.hide_confirm();
                u.growl_success("Office successfully updated");
                $("form input[name='OFF_CODE']").data("update", false);
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

            if (u.grid_empty($scope.office_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.office_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_offices(u.get_grid_data($scope.office_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.office_grid;
                            var rowIds = $scope.office_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "OFF_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "OFF_STATUS", "A");
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
                u.form_reset("#officeForm");
                u.clear_grid_data($scope.office_grid);
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
            u.excel_export($scope.office_grid, ["ID"], "Office_List_Excel");
        });


        /*---------------------------
         * Office Search
         *-------------------------*/
        $("#btnQueryOffice").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_office(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.office_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.office_grid.addRowData(result[i].OFF_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.office_grid.jqGrid('clearGridData');

                //fetch all offices
                s.get_offices(function (offices) {
                    for (var i in offices) {
                        $scope.office_grid.addRowData(offices[i].OFF_CODE, offices[i]);
                    }
                });
            }

        });
             
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='OFF_CODE']", "check_office_code");
    });
})(window.$, window.service, window.utility, {});