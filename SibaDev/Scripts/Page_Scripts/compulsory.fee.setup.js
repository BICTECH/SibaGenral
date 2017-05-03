(function ($, s, u, $scope) {
    $(function () {


        $scope.compulsoryfee_grid = u.default_grid("#grdCompulsoryfee", "#grdCompulsoryfeePager", "Compulsory Fee List",
        ['Code', ' Name', 'Description', 'Amount', 'Modify', 'Refund', 'Main Account', 'Sub Account', 'From Date', 'To Date', 'Status', 'Created By', 'Created Date'],
        [           
            { name: 'FEE_CODE', id: true, index: 'FEE_CODE' },
            { name: 'FEE_NAME', index: 'FEE_NAME' },
            { name: 'FEE_DESC', index: 'FEE_DESC' },
            { name: 'FEE_AMOUNT', index: 'FEE_AMOUNT' },
            { name: 'FEE_MODIFY_YN', index: 'FEE_MODIFY_YN' },
            { name: 'FEE_REFUND_YN', index: 'FEE_REFUND_YN' },
            { name: 'FEE_MAIN_ACCOUNT', index: 'FEE_MAIN_ACCOUNT' },
            { name: 'FEE_SUB_ACCOUNT', index: 'FEE_SUB_ACCOUNT' },
            { name: 'FEE_FROM_DATE', index: 'FEE_FROM_DATE' },
            { name: 'FEE_TO_DATE', index: 'FEE_TO_DATE' },
            { name: 'FEE_STATUS', index: 'FEE_STATUS' },
            { name: 'FEE_CRTE_BY', index: 'FEE_CRTE_BY' },
            { name: 'FEE_CRTE_DATE', index: 'FEE_CRTE_DATE' }
        ],
       //Retrive Grid data into form input fields on row click..
       function (sel_id) {
           var grid = $scope.compulsoryfee_grid;
           var sel_id = grid.jqGrid('getGridParam', 'selrow');
           $("form input[name='FEE_CODE']").data("update", true);
           u.fill_form({
               FEE_CODE: grid.jqGrid('getCell', sel_id, 'FEE_CODE'),
               FEE_NAME: grid.jqGrid('getCell', sel_id, 'FEE_NAME'),
               FEE_DESC: grid.jqGrid('getCell', sel_id, 'FEE_DESC'),
               FEE_AMOUNT: grid.jqGrid('getCell', sel_id, 'FEE_AMOUNT'),
               FEE_MODIFY_YN: grid.jqGrid('getCell', sel_id, 'FEE_MODIFY_YN'),
               FEE_REFUND_YN: grid.jqGrid('getCell', sel_id, 'FEE_REFUND_YN'),
               FEE_MAIN_ACCOUNT: grid.jqGrid('getCell', sel_id, 'FEE_MAIN_ACCOUNT'),
               FEE_SUB_ACCOUNT: grid.jqGrid('getCell', sel_id, 'FEE_SUB_ACCOUNT'),
               FEE_FROM_DATE: grid.jqGrid('getCell', sel_id, 'FEE_FROM_DATE'),
               FEE_TO_DATE: grid.jqGrid('getCell', sel_id, 'FEE_TO_DATE')
               
           }, "#compulsoryfeeForm");
       }),
      $scope.saving = false;


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
                case "btn_main_account":
                    $scope.lov.call_dialog("Select Main Account", "get_lov_main_account", $scope.dialog_data);
                    break;
                case "btn_sub_account":
                    $scope.lov.call_dialog("Select Sub Account", "get_lov_sub_account", $scope.dialog_data);
                    break;
            }
        }); /*--------------------------------------------------
           * call add function to add records to  compulsoryfee_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#compulsoryfeeForm")) {

                if (u.field_empty("input[name='FEE_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Compulsory Fee to the grid?", function () {

                    var rowIds = $scope.compulsoryfee_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.compulsoryfee_grid.jqGrid('getCell', currRow, 'FEE_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#FEE_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#compulsoryfeeForm");
                        FormData.FEE_STATUS = "U";
                        FormData.FEE_CRTE_BY = "Admin";
                        FormData.FEE_CRTE_DATE = u.get_date();
                        $scope.compulsoryfee_grid.addRowData(FormData.FEE_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Compulsory Fee successfully added to grid");
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



        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.compulsoryfee_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.compulsoryfee_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'FEE_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'FEE_CODE');

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

                    grid.jqGrid('setCell', row_id, 'FEE_STATUS', 'D');
                    $('#' + row_id, '#grdCompulsoryfee').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCompulsoryfee').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'FEE_STATUS', 'A');
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

            if (u.grid_empty($scope.compulsoryfee_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.compulsoryfee_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'FEE_CODE');

                if (Code == $('#FEE_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'FEE_CODE', $('#FEE_CODE').val());
                    grid.jqGrid('setCell', row_id, 'FEE_NAME', $('#FEE_NAME').val());
                    grid.jqGrid('setCell', row_id, 'FEE_DESC', $('#FEE_DESC').val());
                    grid.jqGrid('setCell', row_id, 'FEE_AMOUNT', $('#FEE_AMOUNT').val());
                    grid.jqGrid('setCell', row_id, 'FEE_MODIFY_YN', $('#FEE_MODIFY_YN').val());
                    grid.jqGrid('setCell', row_id, 'FEE_REFUND_YN', $('#FEE_REFUND_YN').val());
                    grid.jqGrid('setCell', row_id, 'FEE_MAIN_ACCOUNT', $('#FEE_MAIN_ACCOUNT').val());
                    grid.jqGrid('setCell', row_id, 'FEE_SUB_ACCOUNT', $('#FEE_SUB_ACCOUNT').val());
                    grid.jqGrid('setCell', row_id, 'FEE_FROM_DATE', $('#FEE_FROM_DATE').val());
                    grid.jqGrid('setCell', row_id, 'FEE_TO_DATE', $('#FEE_TO_DATE').val());
                    u.hide_confirm();
                    u.growl_success(" successfully updated");
                    $("form input[name='FEE_CODE']").data("update", false);
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

            if (u.grid_empty($scope.compulsoryfee_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.compulsoryfee_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_compulsoryfees(u.get_grid_data($scope.compulsoryfee_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.compulsoryfee_grid;
                            var rowIds = $scope.compulsoryfee_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "FEE_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "FEE_STATUS", "A");
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
                u.form_reset("#compulsoryfeeForm");
                u.clear_grid_data($scope.compulsoryfee_grid);
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
            u.excel_export($scope.compulsoryfee_grid, ["ID"], "Compulsory_Fees_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCompulsoryfees").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_compulsoryfee(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.compulsoryfee_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.compulsoryfee_grid.addRowData(result[i].FEE_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.compulsoryfee_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_compulsoryfees(function (compulsoryfees) {
                    for (var i in compulsoryfees) {
                        $scope.compulsoryfee_grid.addRowData(compulsoryfees[i].FEE_CODE, compulsoryfees[i]);
                    }
                });
            }

        });
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='FEE_CODE']", "check_compulsoryfee_code");
    });

})(window.$, window.service, window.utility, {})