(function ($, s, u, $scope) {
    $(function () {

        $scope.cover_grid = u.default_grid("#grdCover", "#grdCoverPager", "Cover List",
          ['Code', 'Name', ' Description', 'Type', 'Basic cover', 'Rated', 'Rate change', 'SI Change.', 'User Premium',
                  'Premium Refund', 'Cover levels', 'RI Applicable', 'Status', 'Created By', 'Created Date'],
          [
              { name: 'CVR_CODE', id: true, index: 'CVR_CODE' },
                { name: 'CVR_NAME', id: true, index: 'CVR_NAME' },
                { name: 'CVR_DESCRIPTION', index: 'CVR_DESCRIPTION' },
                { name: 'CVR_TYPE', index: 'CVR_TYPE' },
                { name: 'CVR_BASIC_COVER', index: 'CVR_BASIC_COVER' },
                { name: 'CVR_RATED', index: 'CVR_RATED' },
                { name: 'CVR_RATE_CHANGE', index: 'CVR_RATE_CHANGE' },
                { name: 'CVR_SI_CHANGE', index: 'CVR_SI_CHANGE' },
                { name: 'CVR_USER_PREMIUM', index: 'CVR_USER_PREMIUM' },
                { name: 'CVR_PREM_REFUND', index: 'CVR_PREM_REFUND' },
                { name: 'CVR_LEVELS', index: 'CVR_LEVELS' },
                { name: 'CVR_RI_APPLICABLE', index: 'CVR_RI_APPLICABLE' },
                { name: 'CVR_STATUS', index: 'CVR_STATUS' },
                { name: 'CVR_CRTE_BY', index: 'CVR_CRTE_BY' },
                { name: 'CVR_CRTE_DATE', index: 'CVR_CRTE_DATE' }
          ],
         //Retrive Grid data into form input fields on row click..
         function (sel_id) {
             var grid = $scope.cover_grid;
             var sel_id = grid.jqGrid('getGridParam', 'selrow');
             $("form input[name='CVR_CODE']").data("update", true);
             u.fill_form({
                 CVR_CODE: grid.jqGrid('getCell', sel_id, 'CVR_CODE'),
                 CVR_NAME: grid.jqGrid('getCell', sel_id, 'CVR_NAME'),
                 CVR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CVR_DESCRIPTION'),
                 CVR_RATED: grid.jqGrid('getCell', sel_id, 'CVR_RATED'),
                 CVR_TYPE: grid.jqGrid('getCell', sel_id, 'CVR_TYPE'),
                 CVR_BASIC_COVER: grid.jqGrid('getCell', sel_id, 'CVR_BASIC_COVER'),
                 CVR_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'CVR_RATE_CHANGE'),
                 CVR_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'CVR_SI_CHANGE'),
                 CVR_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'CVR_PREM_REFUND'),
                 CVR_USER_PREMIUM: grid.jqGrid('getCell', sel_id, 'CVR_USER_PREMIUM'),
                 CVR_LEVELS: grid.jqGrid('getCell', sel_id, 'CVR_LEVELS'),
                 CVR_RI_APPLICABLE: grid.jqGrid('getCell', sel_id, 'CVR_RI_APPLICABLE'),
                 //CVR_STATUS: grid.jqGrid('getCell', sel_id, 'CVR_STATUS')
             }, "#coverForm");
         }),
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  cover_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#coverForm")) {

                if (u.field_empty("input[name='CVR_CODE']")) return u.growl_error

              ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.cover_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.cover_grid.jqGrid('getCell', currRow, 'CVR_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CVR_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#coverForm");
                        FormData.CVR_STATUS = "U";
                        FormData.CVR_CRTE_BY = "Admin";
                        FormData.CVR_BASIC_COVER = ($("#CVR_BASIC_COVER").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_RATED = ($("#CVR_RATED").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_RATE_CHANGE = ($("#CVR_RATE_CHANGE").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_SI_CHANGE = ($("#CVR_SI_CHANGE").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_USER_PREMIUM = ($("#CVR_USER_PREMIUM").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_PREM_REFUND = ($("#CVR_PREM_REFUND").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_LEVELS = ($("#CVR_LEVELS").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_RI_APPLICABLE = ($("#CVR_RI_APPLICABLE").is(':checked')) ? 'Y' : 'N';
                        FormData.CVR_CRTE_DATE = u.get_date();
                        $scope.cover_grid.addRowData(FormData.CVR_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("Cover successfully added to grid");
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
         
            if (u.grid_empty($scope.cover_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CVR_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CVR_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CVR_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CVR_STATUS', 'A');
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

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CVR_CODE');

            if (Code == $('#CVR_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CVR_CODE', $('#CVR_CODE').val());
                grid.jqGrid('setCell', row_id, 'CVR_NAME', $('#CVR_NAME').val());
                grid.jqGrid('setCell', row_id, 'CVR_DESCRIPTION', $('#CVR_DESCRIPTION').val());
                grid.jqGrid('setCell', row_id, 'CVR_RATED', $('#CVR_RATED').val());
                grid.jqGrid('setCell', row_id, 'CVR_TYPE', $('#CVR_TYPE').val());
                grid.jqGrid('setCell', row_id, 'CVR_BASIC_COVER', $('#CVR_BASIC_COVER').val());
                grid.jqGrid('setCell', row_id, 'CVR_RATE_CHANGE', $('#CVR_RATE_CHANGE').val());
                grid.jqGrid('setCell', row_id, 'CVR_SI_CHANGE', $('#CVR_SI_CHANGE').val());
                grid.jqGrid('setCell', row_id, 'CVR_PREM_REFUND', $('#CVR_PREM_REFUND').val());
                grid.jqGrid('setCell', row_id, 'CVR_LEVELS', $('#CVR_LEVELS').val());
                grid.jqGrid('setCell', row_id, 'CVR_RI_APPLICABLE', $('#CVR_RI_APPLICABLE').val());
                grid.jqGrid('setCell', row_id, 'CVR_USER_PREMIUM', $('#CVR_USER_PREMIUM').val());
                u.hide_confirm();
                u.growl_success("Cover successfully updated");
                $("form input[name='CVR_CODE']").data("update", false);
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

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.cover_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_covers(u.get_grid_data($scope.cover_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.cover_grid;
                            var rowIds = $scope.cover_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CVR_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CVR_STATUS", "A");
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
                u.form_reset("#coverForm");
                u.clear_grid_data($scope.cover_grid);
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
            u.excel_export($scope.cover_grid, ["ID"], "Discount_Loading_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCover").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_cover(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.cover_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.cover_grid.addRowData(result[i].CVR_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.cover_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_covers(function (covers) {
                    for (var i in covers) {
                        $scope.cover_grid.addRowData(covers[i].CVR_CODE, covers[i]);
                    }
                });
            }

        });

        /*-----------------------------
  * Code validation
  *-----------------------*/
        u.codeVal("form input[name='CVR_CODE']", "check_cover_code");
    });

})(window.$, window.service, window.utility, {})