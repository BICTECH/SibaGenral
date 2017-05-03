(function ($, s, u, $scope) {
    $(function () {

        $scope.conditionclause_grid = u.default_grid("#grdConditionClauses", "#grdConditionClausesPager", "Conditions & Clauses List",
           ['Code', ' Name', 'Type', 'Description', 'Status', 'Created By', 'Created Date'],
            [
                { name: 'CCL_CODE', id: true, index: 'CCL_CODE' },
                { name: 'CCL_NAME', index: 'CCL_NAME' },
                { name: 'CCL_TYPE', index: 'CCL_TYPE' },
                { name: 'CCL_DESCRIPTION', index: 'CCL_DESCRIPTION' },
                { name: 'CCL_STATUS', index: 'CCL_STATUS' },
                { name: 'CCL_CRTE_BY', index: 'CCL_CRTE_BY' },
                { name: 'CCL_CRTE_DATE', index: 'CCL_CRTE_DATE' }
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.conditionclause_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CCL_CODE']").data("update", true);
                u.fill_form({
                    CCL_CODE: grid.jqGrid('getCell', sel_id, 'CCL_CODE'),
                    CCL_NAME: grid.jqGrid('getCell', sel_id, 'CCL_NAME'),
                    CCL_TYPE: grid.jqGrid('getCell', sel_id, 'CCL_TYPE'),
                    CCL_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CCL_DESCRIPTION'),
                    //CCL_STATUS: grid.jqGrid('getCell', sel_id, 'CCL_STATUS')
                }, "#conditionclauseForm");
            }),
            $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  conditionclause_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#conditionclauseForm")) {

                if (u.field_empty("input[name='CCL_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.conditionclause_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.conditionclause_grid.jqGrid('getCell', currRow, 'CCL_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CCL_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#conditionclauseForm");
                        FormData.CCL_STATUS = "U";
                        FormData.CCL_CRTE_BY = "Admin";
                        FormData.CCL_CRTE_DATE = u.get_date();
                        $scope.conditionclause_grid.addRowData(FormData.CCL_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Conditions & Clauses successfully added to grid");
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
           
            if (u.grid_empty($scope.conditionclause_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.conditionclause_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CCL_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CCL_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CCL_STATUS', 'D');
                    $('#' + row_id, '#grdConditionClauses').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdConditionClauses').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CCL_STATUS', 'A');
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
            
            if (u.grid_empty($scope.conditionclause_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.conditionclause_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CCL_CODE');

            if (Code == $('#CCL_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CCL_CODE', $('#CCL_CODE').val());
                grid.jqGrid('setCell', row_id, 'CCL_NAME', $('#CCL_NAME').val());
                grid.jqGrid('setCell', row_id, 'CCL_TYPE', $('#CCL_TYPE').val());
                grid.jqGrid('setCell', row_id, 'CCL_DESCRIPTION', $('#CCL_DESCRIPTION').val());
                u.hide_confirm();
                u.growl_success("Conditions & Clauses successfully updated");
                $("form input[name='CCL_CODE']").data("update", false);
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

            if (u.grid_empty($scope.conditionclause_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.conditionclause_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_conditionclauses(u.get_grid_data($scope.conditionclause_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.conditionclause_grid;
                            var rowIds = $scope.conditionclause_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CCL_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CCL_STATUS", "A");
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
                u.form_reset("#conditionclauseForm");
                u.clear_grid_data($scope.conditionclause_grid);
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
            u.excel_export($scope.conditionclause_grid, ["ID"], "Conditions_Clauses_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCondsClauses").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_conditionclause(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.conditionclause_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.conditionclause_grid.addRowData(result[i].CCL_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.conditionclause_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_conditionclauses(function (conditionclause) {
                    for (var i in conditionclause) {
                        $scope.conditionclause_grid.addRowData(conditionclause[i].CCL_CODE, conditionclause[i]);
                    }
                });
            }

        });
          
        /*-----------------------------
 * Code validation
 *-----------------------*/
        u.codeVal("form input[name='CCL_CODE']", "check_conditionsclause_code");

    });

})(window.$, window.service, window.utility, {})