(function ($, s, u, $scope) {
    $(function () {

        $scope.risk_grid = u.default_grid("#grdFireRisk", "#grdFireRiskPager", "Fire Interest Risk List",
       ['Code', ' Name', 'Description', 'Created By', 'Created Date', 'Status'],
        [
            { name: 'FRK_CODE', index: 'FRK_CODE', width: 100 },
            { name: 'FRK_NAME', index: 'FRK_NAME', width: 200 },
            { name: 'FRK_DESC', index: 'FRK_DESC', width: 300 },
            { name: 'FRK_CRTE_BY', index: 'FRK_CRTE_BY', width: 100 },
            { name: 'FRK_CRTE_DATE', index: 'FRK_CRTE_DATE', width: 100 },
            { name: 'FRK_STATUS', index: 'FRK_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.risk_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='FRK_CODE']").data("update", true);
            u.fill_form({
                FRK_CODE: grid.jqGrid('getCell', sel_id, 'FRK_CODE'),
                FRK_NAME: grid.jqGrid('getCell', sel_id, 'FRK_NAME'),
                FRK_DESC: grid.jqGrid('getCell', sel_id, 'FRK_DESC'),
            }, "#riskForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
               * call add function to add records to  risk_grid
               *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#riskForm")) {

                if (u.field_empty("input[name='FRK_CODE']")) return u.growl_error

                  ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Risk to the grid?", function () {

                    var rowIds = $scope.risk_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.risk_grid.jqGrid('getCell', currRow, 'FRK_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#FRK_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#riskForm");
                        FormData.FRK_STATUS = "U";
                        FormData.FRK_CRTE_BY = "Admin";
                        FormData.FRK_CRTE_DATE = u.get_date();
                        $scope.risk_grid.addRowData(FormData.FRK_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Risk successfully added to grid");
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
         * Remove record or Mark for deletion from Risk Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.risk_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.risk_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'FRK_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'FRK_CODE');

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

                    grid.jqGrid('setCell', row_id, 'FRK_STATUS', 'D');
                    $('#' + row_id, '#grdFireRisk').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdFireRisk').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'FRK_STATUS', 'A');
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

            if (u.grid_empty($scope.risk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.risk_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'FRK_CODE');

                if (Code == $('#FRK_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'FRK_CODE', $('#FRK_CODE').val());
                    grid.jqGrid('setCell', row_id, 'FRK_NAME', $('#FRK_NAME').val());
                    grid.jqGrid('setCell', row_id, 'FRK_DESC', $('#FRK_DESC').val());
                    u.hide_confirm();
                    u.growl_success("Risk successfully updated");
                    $("form input[name='FRK_CODE']").data("update", false);
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

            if (u.grid_empty($scope.risk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.risk_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_risks(u.get_grid_data($scope.risk_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.risk_grid;
                            var rowIds = $scope.risk_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "FRK_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "FRK_STATUS", "A");
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
                u.form_reset("#riskForm");
                u.clear_grid_data($scope.risk_grid);
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
            u.excel_export($scope.risk_grid, ["ID"], "Country_List_Excel");
        });


        /*---------------------------
         * Risk Search
         *-------------------------*/
        $("#btnQueryRisk").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_country(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.risk_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.risk_grid.addRowData(result[i].FRK_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.risk_grid.jqGrid('clearGridData');

                //fetch all risks
                s.get_risks(function (countries) {
                    for (var i in countries) {
                        $scope.risk_grid.addRowData(countries[i].FRK_CODE, countries[i]);
                    }
                });
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='FRK_CODE']", "check_risk_code");


    });

})(window.$, window.service, window.utility, {});


