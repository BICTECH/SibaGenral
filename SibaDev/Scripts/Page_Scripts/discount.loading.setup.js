(function ($, s, u, $scope) {
    $(function () {

        $scope.discountloading_grid = u.default_grid("#grdDiscountLoading", "#grdDiscountLoadingPager", "Discount & Loading List",
           ['Code', 'Type', ' Name', 'Description', 'Category', 'Default Perc', 'Min Perc', 'Max Perc', 'Default Amount',
                  'Min Amount', 'Max Amount', 'Created By', 'Created Date', 'Status'],
            [
                { name: 'LDI_CODE', id: true, index: 'LDI_CODE' },
                { name: 'LDI_TYPE', id: true, index: 'LDI_TYPE' },
                { name: 'LDI_NAME', index: 'LDI_NAME' },
                { name: 'LDI_DESC', index: 'LDI_DESC' },
                { name: 'LDI_CATG', index: 'LDI_CATG' },
                { name: 'LDI_DEFAULT_PERC', index: 'LDI_DEFAULT_PERC' },
                { name: 'LDI_MIN_PERC', index: 'LDI_MIN_PERC' },
                { name: 'LDI_MAX_PERC', index: 'LDI_MAX_PERC' },
                { name: 'LDI_DEFAULT_AMT', index: 'LDI_DEFAULT_AMT' },
                { name: 'LDI_MIN_AMT', index: 'LDI_MIN_AMT' },
                { name: 'LDI_MAX_AMT', index: 'LDI_MAX_AMT' },             
                { name: 'LDI_CRTE_BY', index: 'LDI_CRTE_BY' },
                { name: 'LDI_CRTE_DATE', index: 'LDI_CRTE_DATE' },
                { name: 'LDI_STATUS', index: 'LDI_STATUS' }
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.discountloading_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='LDI_CODE']").data("update", true);
                u.fill_form({
                    LDI_CODE: grid.jqGrid('getCell', sel_id, 'LDI_CODE'),
                    LDI_TYPE: grid.jqGrid('getCell', sel_id, 'LDI_TYPE'),
                    LDI_NAME: grid.jqGrid('getCell', sel_id, 'LDI_NAME'),
                    LDI_DEFAULT_PERC: grid.jqGrid('getCell', sel_id, 'LDI_DEFAULT_PERC'),
                    LDI_DESC: grid.jqGrid('getCell', sel_id, 'LDI_DESC'),
                    LDI_CATG: grid.jqGrid('getCell', sel_id, 'LDI_CATG'),
                    LDI_MIN_PERC: grid.jqGrid('getCell', sel_id, 'LDI_MIN_PERC'),
                    LDI_MAX_PERC: grid.jqGrid('getCell', sel_id, 'LDI_MAX_PERC'),
                    LDI_MIN_AMT: grid.jqGrid('getCell', sel_id, 'LDI_MIN_AMT'),
                    LDI_MAX_AMT: grid.jqGrid('getCell', sel_id, 'LDI_MAX_AMT'),
                    LDI_DEFAULT_AMT: grid.jqGrid('getCell', sel_id, 'LDI_DEFAULT_AMT'),
                    //LDI_STATUS: grid.jqGrid('getCell', sel_id, 'LDI_STATUS')
                }, "#discountloadingForm");
            }),
            $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  discountloading_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#discountloadingForm")) {

                if (u.field_empty("input[name='LDI_CODE']")) return u.growl_error

         ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Discount & Loading to the grid?", function () {

                    var rowIds = $scope.discountloading_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.discountloading_grid.jqGrid('getCell', currRow, 'LDI_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#LDI_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#discountloadingForm");
                        FormData.LDI_STATUS = "U";
                        FormData.LDI_CRTE_BY = "Admin";
                        FormData.LDI_CRTE_DATE = u.get_date();
                        $scope.discountloading_grid.addRowData(FormData.LDI_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Discount & Loading successfully added to grid");
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
                case "btn_region":
                    $scope.lov.call_dialog("Select Region", "get_regions", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.discountloading_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.discountloading_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'LDI_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'LDI_CODE');

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

                    grid.jqGrid('setCell', row_id, 'LDI_STATUS', 'D');
                    $('#' + row_id, '#grdDiscountLoading').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdDiscountLoading').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'LDI_STATUS', 'A');
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

            if (u.grid_empty($scope.discountloading_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.discountloading_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'LDI_CODE');

            if (Code == $('#LDI_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'LDI_CODE', $('#LDI_CODE').val());
                grid.jqGrid('setCell', row_id, 'LDI_TYPE', $('#LDI_TYPE').val());
                grid.jqGrid('setCell', row_id, 'LDI_NAME', $('#LDI_NAME').val());
                grid.jqGrid('setCell', row_id, 'LDI_DEFAULT_PERC', $('#LDI_DEFAULT_PERC').val());
                grid.jqGrid('setCell', row_id, 'LDI_DESC', $('#LDI_DESC').val());
                grid.jqGrid('setCell', row_id, 'LDI_CATG', $('#LDI_CATG').val());
                grid.jqGrid('setCell', row_id, 'LDI_MIN_PERC', $('#LDI_MIN_PERC').val());
                grid.jqGrid('setCell', row_id, 'LDI_MAX_PERC', $('#LDI_MAX_PERC').val());
                grid.jqGrid('setCell', row_id, 'LDI_MIN_AMT', $('#LDI_MIN_AMT').val());
                grid.jqGrid('setCell', row_id, 'LDI_MAX_AMT', $('#LDI_MAX_AMT').val());
                grid.jqGrid('setCell', row_id, 'LDI_DEFAULT_AMT', $('#LDI_DEFAULT_AMT').val());
                u.hide_confirm();
                u.growl_success("Discount & Loading successfully updated");
                $("form input[name='LDI_CODE']").data("update", false);
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

            if (u.grid_empty($scope.discountloading_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.discountloading_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_discountloadings(u.get_grid_data($scope.discountloading_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.discountloading_grid;
                            var rowIds = $scope.discountloading_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "LDI_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "LDI_STATUS", "A");
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
                u.form_reset("#discountloadingForm");
                u.clear_grid_data($scope.discountloading_grid);
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
            u.excel_export($scope.discountloading_grid, ["ID"], "Discount_Loading_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryDiscountLoading").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_discountloading(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.discountloading_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.discountloading_grid.addRowData(result[i].LDI_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.discountloading_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_discountloadings(function (currencys) {
                    for (var i in currencys) {
                        $scope.discountloading_grid.addRowData(currencys[i].LDI_CODE, currencys[i]);
                    }
                });
            }

        });

        /*-----------------------------
   * Code validation
   *-----------------------*/
        u.codeVal("form input[name='LDI_CODE']", "check_discountloading_code");
    });

})(window.$, window.service, window.utility, {})