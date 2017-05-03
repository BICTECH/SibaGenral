(function ($, s, u, $scope) {
    $(function () {

        $scope.cat_grid = u.default_grid("#grdCatevent", "#grdCateventPager", "Catastrophic List",
       ['Code', ' Name', 'Description', 'Created By', 'Created Date', 'Status'],
        [
            { name: 'CLM_CAT_CODE', index: 'CLM_CAT_CODE', width: 100 },
            { name: 'CLM_CAT_NAME', index: 'CLM_CAT_NAME', width: 200 },
            { name: 'CLM_CAT_DESC', index: 'CLM_CAT_DESC', width: 200 },
            { name: 'CLM_CAT_CRTE_BY', index: 'CLM_CAT_CRTE_BY', width: 100 },
            { name: 'CLM_CAT_CRTE_DATE', index: 'CLM_CAT_CRTE_DATE', width: 200 },
            { name: 'CLM_CAT_STATUS', index: 'CLM_CAT_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.cat_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='CLM_CAT_CODE']").data("update", true);
            u.fill_form({
                CLM_CAT_CODE: grid.jqGrid('getCell', sel_id, 'CLM_CAT_CODE'),
                CLM_CAT_NAME: grid.jqGrid('getCell', sel_id, 'CLM_CAT_NAME'),
                CLM_CAT_DESC: grid.jqGrid('getCell', sel_id, 'CLM_CAT_DESC'),
            }, "#catForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
               * call add function to add records to  cat_grid
               *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#catForm")) {

                if (u.field_empty("input[name='CLM_CAT_CODE']")) return u.growl_error

                  ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Catastrophic Event to the grid?", function () {

                    var rowIds = $scope.cat_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.cat_grid.jqGrid('getCell', currRow, 'CLM_CAT_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CLM_CAT_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#catForm");
                        FormData.CLM_CAT_STATUS = "U";
                        FormData.CLM_CAT_CRTE_BY = "Admin";
                        FormData.CLM_CAT_CRTE_DATE = u.get_date();
                        $scope.cat_grid.addRowData(FormData.CLM_CAT_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Catastrophic Event successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                })
            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.cat_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.cat_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CLM_CAT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CLM_CAT_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CLM_CAT_STATUS', 'D');
                    $('#' + row_id, '#grdCatevent').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCatevent').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CLM_CAT_STATUS', 'A');
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

            if (u.grid_empty($scope.cat_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.cat_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'CLM_CAT_CODE');

                if (Code == $('#CLM_CAT_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'CLM_CAT_CODE', $('#CLM_CAT_CODE').val());
                    grid.jqGrid('setCell', row_id, 'CLM_CAT_NAME', $('#CLM_CAT_NAME').val());
                    grid.jqGrid('setCell', row_id, 'CLM_CAT_DESC', $('#CLM_CAT_DESC').val());
                    u.hide_confirm();
                    u.growl_success("Catastrophic Event successfully updated");
                    $("form input[name='CLM_CAT_CODE']").data("update", false);
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

            if (u.grid_empty($scope.cat_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.cat_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_cat(u.get_grid_data($scope.cat_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.cat_grid;
                            var rowIds = $scope.cat_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CLM_CAT_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CLM_CAT_STATUS", "A");
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
                u.form_reset("#catForm");
                u.clear_grid_data($scope.cat_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared")
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
            u.excel_export($scope.cat_grid, ["ID"], "Catastropic_Event_List_Excel");
        });


        /*---------------------------
         * Search
         *-------------------------*/
        $("#btnQueryCat").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_cat(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.cat_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.cat_grid.addRowData(result[i].CLM_CAT_CODE, result[i])
                        }
                    },
                    function (err) {

                    })
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.cat_grid.jqGrid('clearGridData');

                //fetch all
                s.get_cats(function (cats) {
                    for (var i in cats) {
                        $scope.cat_grid.addRowData(cats[i].CLM_CAT_CODE, cats[i]);
                    }
                })
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='CLM_CAT_CODE']", "check_cat_code");



    });
})(window.$, window.service, window.utility, {});


