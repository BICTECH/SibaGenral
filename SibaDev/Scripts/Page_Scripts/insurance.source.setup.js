(function ($, s, u, $scope) {
    $(function () {

        $scope.insource_grid = u.default_grid("#grdInsource", "#grdInsourcePager", "Insurance Source List",
       ['Code', ' Name', 'Description', 'Created By', 'Created Date', 'Status'],
        [
            { name: 'INSUR_CODE', index: 'INSUR_CODE', width: 150 },
            { name: 'INSUR_NAME', index: 'INSUR_NAME', width: 200 },
            { name: 'INSUR_DESC', index: 'INSUR_DESC', width: 300 },
            { name: 'INSUR_CRTE_BY', index: 'INSUR_CRTE_BY', width: 300 },
            { name: 'INSUR_CRTE_DATE', index: 'INSUR_CRTE_DATE', width: 200 },
            { name: 'INSUR_STATUS', index: 'INSUR_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.insource_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='INSUR_CODE']").data("update", true);
            u.fill_form({
                INSUR_CODE: grid.jqGrid('getCell', sel_id, 'INSUR_CODE'),
                INSUR_NAME: grid.jqGrid('getCell', sel_id, 'INSUR_NAME'),
                INSUR_DESC: grid.jqGrid('getCell', sel_id, 'INSUR_DESC'),
            }, "#insuranceForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
               * call add function to add records to  insource_grid
               *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#insuranceForm")) {

                if (u.field_empty("input[name='INSUR_CODE']")) return u.growl_error

                  ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Insurance Source to the grid?", function () {

                    var rowIds = $scope.insource_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.insource_grid.jqGrid('getCell', currRow, 'INSUR_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#INSUR_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#insuranceForm");
                        FormData.INSUR_STATUS = "U";
                        FormData.INSUR_CRTE_BY = "Admin";
                        FormData.INSUR_CRTE_DATE = u.get_date();
                        $scope.insource_grid.addRowData(FormData.INSUR_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Insurance Source  successfully added to grid");
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

            if (u.grid_empty($scope.insource_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.insource_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'INSUR_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'INSUR_CODE');

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

                    grid.jqGrid('setCell', row_id, 'INSUR_STATUS', 'D');
                    $('#' + row_id, '#grdInsource').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdInsource').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'INSUR_STATUS', 'A');
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

            if (u.grid_empty($scope.insource_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.insource_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'INSUR_CODE');

                if (Code == $('#INSUR_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'INSUR_CODE', $('#INSUR_CODE').val());
                    grid.jqGrid('setCell', row_id, 'INSUR_NAME', $('#INSUR_NAME').val());
                    grid.jqGrid('setCell', row_id, 'INSUR_DESC', $('#INSUR_DESC').val());
                    u.hide_confirm();
                    u.growl_success("Insurance Source  successfully updated");
                    $("form input[name='INSUR_CODE']").data("update", false);
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

            if (u.grid_empty($scope.insource_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.insource_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_insource(u.get_grid_data($scope.insource_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.insource_grid;
                            var rowIds = $scope.insource_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "INSUR_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "INSUR_STATUS", "A");
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
                u.form_reset("#insuranceForm");
                u.clear_grid_data($scope.insource_grid);
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
            u.excel_export($scope.insource_grid, ["ID"], "Insurance_Source_List_Excel");
        });


        /*---------------------------
         * Country Search
         *-------------------------*/
        $("#btnQueryInsource").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_insource(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.insource_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.insource_grid.addRowData(result[i].INSUR_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.insource_grid.jqGrid('clearGridData');

                //fetch all countries
                s.get_insources(function (countries) {
                    for (var i in countries) {
                        $scope.insource_grid.addRowData(countries[i].INSUR_CODE, countries[i]);
                    }
                });
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='INSUR_CODE']", "check_country_code");



    });
})(window.$, window.service, window.utility, {});


