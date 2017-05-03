(function ($, s, u, $scope) {
    $(function () {

        $scope.exrate_grid = u.default_grid("#grdExrate", "#grdExratePager", "Exchange Rate List",
        ['Code', 'Base currency', ' Base rate', 'Fx currency', 'Fx rate', 'From date', 'To date', 'Status', 'Created By', 'Created Date'],
        [
            { name: 'EXR_CODE', id: true, index: 'EXR_CODE' },
            { name: 'EXR_BASE_CURRENCY', id: true, index: 'EXR_BASE_CURRENCY' },
            { name: 'EXR_BASE_RATE', index: 'EXR_BASE_RATE' },
            { name: 'EXR_FX_CURRENCY', index: 'EXR_FX_CURRENCY' },
            { name: 'EXR_FX_RATE', index: 'EXR_FX_RATE' },
            { name: 'EXR_FROM_DATE', index: 'EXR_FROM_DATE' },
            { name: 'EXR_TO_DATE', index: 'EXR_TO_DATE' },
            { name: 'EXR_STATUS', index: 'EXR_STATUS' },
            { name: 'EXR_CRTE_BY', index: 'EXR_CRTE_BY' },
            { name: 'EXR_CRTE_DATE', index: 'EXR_CRTE_DATE' }
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.exrate_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='EXR_CODE']").data("update", true);
            u.fill_form({
                EXR_CODE: grid.jqGrid('getCell', sel_id, 'EXR_CODE'),
                EXR_BASE_CURRENCY: grid.jqGrid('getCell', sel_id, 'EXR_BASE_CURRENCY'),
                EXR_BASE_RATE: grid.jqGrid('getCell', sel_id, 'EXR_BASE_RATE'),
                EXR_EXCHANGE_RATE: grid.jqGrid('getCell', sel_id, 'EXR_EXCHANGE_RATE'),
                EXR_FX_CURRENCY: grid.jqGrid('getCell', sel_id, 'EXR_FX_CURRENCY'),
                EXR_FX_RATE: grid.jqGrid('getCell', sel_id, 'EXR_FX_RATE'),
                EXR_FROM_DATE: grid.jqGrid('getCell', sel_id, 'EXR_FROM_DATE'),
                EXR_TO_DATE: grid.jqGrid('getCell', sel_id, 'EXR_TO_DATE'),
                //EXR_STATUS: grid.jqGrid('getCell', sel_id, 'EXR_STATUS')
            }, "#exrateForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  exrate_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#exrateForm")) {

                if (u.field_empty("input[name='EXR_CODE']")) return u.growl_error

           ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.exrate_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.exrate_grid.jqGrid('getCell', currRow, 'EXR_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#EXR_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#exrateForm");
                        FormData.EXR_STATUS = "U";
                        FormData.EXR_CRTE_BY = "Admin";
                        FormData.EXR_CRTE_DATE = "1/4/2016";
                        $scope.exrate_grid.addRowData(FormData.EXR_BASE_CURRENCY, FormData);
                        u.hide_confirm();
                        u.growl_success("Exchage Rate successfully added to grid");
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
                case "btn_base_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currencys", $scope.dialog_data);
                    break;              
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.exrate_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.exrate_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'EXR_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'EXR_CODE');

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

                    grid.jqGrid('setCell', row_id, 'EXR_STATUS', 'D');
                    $('#' + row_id, '#grdExrate').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdExrate').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'EXR_STATUS', 'A');
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

            if (u.grid_empty($scope.exrate_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.exrate_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'EXR_CODE');

            if (Code == $('#EXR_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'EXR_BASE_CURRENCY', $('#EXR_BASE_CURRENCY').val());
                grid.jqGrid('setCell', row_id, 'EXR_BASE_RATE', $('#EXR_BASE_RATE').val());
                grid.jqGrid('setCell', row_id, 'EXR_CODE', $('#EXR_CODE').val());
                grid.jqGrid('setCell', row_id, 'EXR_FX_CURRENCY', $('#EXR_FX_CURRENCY').val());
                grid.jqGrid('setCell', row_id, 'EXR_FX_RATE', $('#EXR_FX_RATE').val());
                grid.jqGrid('setCell', row_id, 'EXR_FROM_DATE', $('#EXR_FROM_DATE').val());
                grid.jqGrid('setCell', row_id, 'EXR_TO_DATE', $('#EXR_TO_DATE').val());
                u.hide_confirm();
                u.growl_success("Exchange Rate successfully updated");
                $("form input[name='EXR_CODE']").data("update", false);
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

            if (u.grid_empty($scope.exrate_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.exrate_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                  if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_exchangerates(u.get_grid_data($scope.exrate_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.exrate_grid;
                            var rowIds = $scope.exrate_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "EXR_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "EXR_STATUS", "A");
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
                u.form_reset("#exrateForm");
                u.clear_grid_data($scope.exrate_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared");
               });
        });

        /*-------------------------------------
       * setting datepicker for date fields
       *------------------------------------*/
        u.set_datepicker("input[name='EXR_FROM_DATE']");
        u.set_datepicker("input[name='EXR_TO_DATE']");


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
            u.excel_export($scope.exrate_grid, ["ID"], "Exchange_Rate_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryExrate").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_exchangerate(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.exrate_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.exrate_grid.addRowData(result[i].EXR_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.exrate_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_exchangerates(function (exrates) {
                    for (var i in exrates) {
                        $scope.exrate_grid.addRowData(exrates[i].EXR_CODE, exrates[i]);
                    }
                });
            }

        });

             /*-----------------------------
   * Code validation
   *-----------------------*/
        u.codeVal("form input[name='EXR_CODE']", "check_exrates_code");

    });

})(window.$, window.service, window.utility, {})