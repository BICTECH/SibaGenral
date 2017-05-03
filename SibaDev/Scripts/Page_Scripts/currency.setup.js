(function ($, s, u, $scope) {
    $(function () {

      $scope.currency_grid = u.default_grid("#grdCurrency", "#grdCurrencyPager", "Currency List",
       ['Code', 'Base', ' Name', 'Country', 'Decimal Symbol', 'Sub Unit', 'Symbol', 'Status', 'Created By', 'Created Date'],
       [
            { name: 'CUR_CODE', id: true, index: 'CUR_CODE' },
            { name: 'CUR_BASE', id: true, index: 'CUR_BASE' },
            { name: 'CUR_FULL_NAME', index: 'CUR_FULL_NAME' },
            { name: 'CUR_ORIG_COUNTRY', index: 'CUR_ORIG_COUNTRY' },
            { name: 'CUR_DEC_SYMBOL', index: 'CUR_DEC_SYMBOL' },
            { name: 'CUR_SUB_UNIT', index: 'CUR_SUB_UNIT' },
            { name: 'CUR_SYMBOL', index: 'CUR_SYMBOL' },
            { name: 'CUR_STATUS', index: 'CUR_STATUS' },
            { name: 'CUR_CRTE_BY', index: 'CUR_CRTE_BY' },
            { name: 'CUR_CRTE_DATE', index: 'CUR_CRTE_DATE' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {
          var grid = $scope.currency_grid;
          var sel_id = grid.jqGrid('getGridParam', 'selrow');
          $("form input[name='CUR_CODE']").data("update", true);
          u.fill_form({
              CUR_CODE: grid.jqGrid('getCell', sel_id, 'CUR_CODE'),
              CUR_FULL_NAME: grid.jqGrid('getCell', sel_id, 'CUR_FULL_NAME'),
              CUR_ORIG_COUNTRY: grid.jqGrid('getCell', sel_id, 'CUR_ORIG_COUNTRY'),
              CUR_DEC_SYMBOL: grid.jqGrid('getCell', sel_id, 'CUR_DEC_SYMBOL'),
              CUR_SUB_UNIT: grid.jqGrid('getCell', sel_id, 'CUR_SUB_UNIT'),
              CUR_SYMBOL: grid.jqGrid('getCell', sel_id, 'CUR_SYMBOL'),
              //CUR_STATUS: grid.jqGrid('getCell', sel_id, 'CUR_STATUS')
          }, "#currencyForm");
      }),
     $scope.saving = false;

        /*--------------------------------------------------
           * call add function to add records to  currency_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {
                
            if (u.form_validation("#currencyForm")) {

                if (u.field_empty("input[name='CUR_CODE']")) return u.growl_error

                 ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.currency_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.currency_grid.jqGrid('getCell', currRow, 'CUR_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CUR_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#currencyForm");
                        FormData.CUR_STATUS = "U";
                        FormData.CUR_BASE = ($("#CUR_BASE").is(':checked')) ? 'Y' : 'N';
                        FormData.CUR_CRTE_BY = "Admin";
                        FormData.CUR_CRTE_DATE = u.get_date();
                        $scope.currency_grid.addRowData(FormData.CUR_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Currency successfully added to grid");
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
            
            if (u.grid_empty($scope.currency_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.currency_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CUR_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CUR_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CUR_STATUS', 'D');
                    $('#' + row_id, '#grdCurrency').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCurrency').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CUR_STATUS', 'A');
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

            
            if (u.grid_empty($scope.currency_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.currency_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CUR_CODE');

            if (Code == $('#CUR_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CUR_CODE', $('#CUR_CODE').val());
                grid.jqGrid('setCell', row_id, 'CUR_FULL_NAME', $('#CUR_FULL_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUR_ORIG_COUNTRY', $('#CUR_ORIG_COUNTRY').val());
                grid.jqGrid('setCell', row_id, 'CUR_DEC_SYMBOL', $('#CUR_DEC_SYMBOL').val());
                grid.jqGrid('setCell', row_id, 'CUR_SUB_UNIT', $('#CUR_SUB_UNIT').val());
                grid.jqGrid('setCell', row_id, 'CUR_SYMBOL', $('#CUR_SYMBOL').val());
                u.hide_confirm();
                u.growl_success("Currency successfully updated");
                $("form input[name='CUR_CODE']").data("update", false);
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

            if (u.grid_empty($scope.currency_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.currency_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_currencys(u.get_grid_data($scope.currency_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.currency_grid;
                            var rowIds = $scope.currency_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CUR_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CUR_STATUS", "A");
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
                u.form_reset("#currencyForm");
                u.clear_grid_data($scope.currency_grid);
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
            u.excel_export($scope.currency_grid, ["ID"], "Currency_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCurrency").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_currency(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.currency_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.currency_grid.addRowData(result[i].CUR_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.currency_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_currencys(function (currencys) {
                    for (var i in currencys) {
                        $scope.currency_grid.addRowData(currencys[i].CUR_CODE, currencys[i]);
                    }
                });
            }

        });
        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='CUR_CODE']", "check_currency_code");
    });

})(window.$, window.service, window.utility, {})