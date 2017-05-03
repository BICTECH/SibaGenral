(function ($, s, u, $scope) {
    $(function () {

        $scope.country_grid = u.default_grid("#grdCountry", "#grdCountryPager", "Country List",
       [ 'Code', ' Name', 'Zip', 'Created By', 'Created Date', 'Status'],
        [
            { name: 'CNT_CODE', index: 'CNT_CODE', width: 100 },
            { name: 'CNT_NAME', index: 'CNT_NAME', width: 300 },
            { name: 'CNT_ZIP', index: 'CNT_ZIP', width: 100 },
            { name: 'CNT_CRTE_BY', index: 'CNT_CRTE_BY', width: 300 },
            { name: 'CNT_CRTE_DATE', index: 'CNT_CRTE_DATE', width: 200 },
            { name: 'CNT_STATUS', index: 'CNT_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.country_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='CNT_CODE']").data("update", true);
            u.fill_form({
                CNT_CODE: grid.jqGrid('getCell', sel_id, 'CNT_CODE'),
                CNT_NAME: grid.jqGrid('getCell', sel_id, 'CNT_NAME'),
                CNT_ZIP: grid.jqGrid('getCell', sel_id, 'CNT_ZIP'),
            }, "#countryForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
               * call add function to add records to  country_grid
               *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#countryForm")) {

                if (u.field_empty("input[name='CNT_CODE']")) return u.growl_error

                  ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Country to the grid?", function () {

                    var rowIds = $scope.country_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.country_grid.jqGrid('getCell', currRow, 'CNT_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CNT_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#countryForm");
                        FormData.CNT_STATUS = "U";
                        FormData.CNT_CRTE_BY = "Admin";
                        FormData.CNT_CRTE_DATE = u.get_date();
                        $scope.country_grid.addRowData(FormData.CNT_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Country successfully added to grid");
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
            
            if (u.grid_empty($scope.country_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.country_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CNT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CNT_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CNT_STATUS', 'D');
                    $('#' + row_id, '#grdCountry').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCountry').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CNT_STATUS', 'A');
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

            if (u.grid_empty($scope.country_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.country_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CNT_CODE');

            if (Code == $('#CNT_CODE').val()) {
                
                grid.jqGrid('setCell', row_id, 'CNT_CODE', $('#CNT_CODE').val());
                grid.jqGrid('setCell', row_id, 'CNT_NAME', $('#CNT_NAME').val());
                grid.jqGrid('setCell', row_id, 'CNT_ZIP', $('#CNT_ZIP').val());
                u.hide_confirm();
                u.growl_success("Country successfully updated");
                $("form input[name='CNT_CODE']").data("update", false);
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

            if (u.grid_empty($scope.country_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.country_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_countries(u.get_grid_data($scope.country_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.country_grid;
                            var rowIds = $scope.country_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CNT_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CNT_STATUS", "A");
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
                u.form_reset("#countryForm");
                u.clear_grid_data($scope.country_grid);
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
            u.excel_export($scope.country_grid, ["ID"], "Country_List_Excel");
        });


        /*---------------------------
         * Country Search
         *-------------------------*/
        $("#btnQueryCountry").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_country(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.country_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.country_grid.addRowData(result[i].CNT_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.country_grid.jqGrid('clearGridData');

                //fetch all countries
                s.get_countries(function (countries) {
                    for (var i in countries) {
                        $scope.country_grid.addRowData(countries[i].CNT_CODE, countries[i]);
                    }
                });
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='CNT_CODE']", "check_country_code");



    });
})(window.$, window.service, window.utility, {});


