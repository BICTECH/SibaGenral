(function ($, s, u, $scope) {
    $(function () {

        $scope.motorrisk_grid = u.default_grid("#grdMotorRisk", "#grdMotorRiskPager", "Compay List",
    ['Code', ' Name', 'Description', 'Entitile to Drive', 'Limit use', 'Does not cover',
                        'Own Damage Expense', 'Status', 'Created By', 'Created Date'],
    [
        { name: 'MRK_CODE', id: true, index: 'MRK_CODE' },
        { name: 'MRK_NAME', index: 'MRK_NAME' },
        { name: 'MRK_DESCRIPTION', index: 'MRK_DESCRIPTION' },
        { name: 'MRK_ENT_TO_DRIVE', index: 'MRK_ENT_TO_DRIVE' },
        { name: 'MRK_LIMT_USE', index: 'MRK_LIMT_USE' },
        { name: 'MRK_DOES_NOT_COV', index: 'MRK_DOES_NOT_COV' },
        { name: 'MRK_O_D_E', index: 'MRK_O_D_E' },
        { name: 'MRK_STATUS', index: 'MRK_STATUS' },
        { name: 'MRK_CRTE_BY', index: 'MRK_CRTE_BY' },
        { name: 'MRK_CRTE_DATE', index: 'MRK_CRTE_DATE' }
    ],
   //Retrive Grid data into form input fields on row click..
   function (sel_id) {
       var grid = $scope.motorrisk_grid;
       var sel_id = grid.jqGrid('getGridParam', 'selrow');
       $("form input[name='MRK_CODE']").data("update", true);
       u.fill_form({
           MRK_CODE: grid.jqGrid('getCell', sel_id, 'MRK_CODE'),
           MRK_NAME: grid.jqGrid('getCell', sel_id, 'MRK_NAME'),
           MRK_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'MRK_DESCRIPTION'),
           MRK_ENT_TO_DRIVE: grid.jqGrid('getCell', sel_id, 'MRK_ENT_TO_DRIVE'),
           MRK_LIMT_USE: grid.jqGrid('getCell', sel_id, 'MRK_LIMT_USE'),
           MRK_O_D_E: grid.jqGrid('getCell', sel_id, 'MRK_O_D_E'),
           MRK_DOES_NOT_COV: grid.jqGrid('getCell', sel_id, 'MRK_DOES_NOT_COV'),
           MRK_STATUS: grid.jqGrid('getCell', sel_id, 'MRK_STATUS')
       }, "#motoriskForm");
   }),
  $scope.saving = false;

       
        /*--------------------------------------------------
           * call add function to add records to  motorrisk_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#motoriskForm")) {

                if (u.field_empty("input[name='MRK_CODE']")) return u.growl_error

                    ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Motor Risk to the grid?", function () {

                    var rowIds = $scope.motorrisk_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.motorrisk_grid.jqGrid('getCell', currRow, 'MRK_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#MRK_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#motoriskForm");
                        FormData.MRK_STATUS = "U";
                        FormData.MRK_CRTE_BY = "Admin";
                        FormData.MRK_CRTE_DATE = "1/4/2016";
                        $scope.motorrisk_grid.addRowData(FormData.MRK_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Motor Risk successfully added to grid");
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

            if (u.grid_empty($scope.motorrisk_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.motorrisk_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'MRK_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'MRK_CODE');

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

                    grid.jqGrid('setCell', row_id, 'MRK_STATUS', 'D');
                    $('#' + row_id, '#grdMotorRisk').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdMotorRisk').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'MRK_STATUS', 'A');
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

            if (u.grid_empty($scope.motorrisk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.motorrisk_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'MRK_CODE');

            if (Code == $('#MRK_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'MRK_CODE', $('#MRK_CODE').val());
                grid.jqGrid('setCell', row_id, 'MRK_NAME', $('#MRK_NAME').val());
                grid.jqGrid('setCell', row_id, 'MRK_DESCRIPTION', $('#MRK_DESCRIPTION').val());
                grid.jqGrid('setCell', row_id, 'MRK_ENT_TO_DRIVE', $('#MRK_ENT_TO_DRIVE').val());
                grid.jqGrid('setCell', row_id, 'MRK_LIMT_USE', $('#MRK_LIMT_USE').val());
                grid.jqGrid('setCell', row_id, 'MRK_DOES_NOT_COV', $('#MRK_DOES_NOT_COV').val());
                grid.jqGrid('setCell', row_id, 'MRK_O_D_E', $('#MRK_O_D_E').val());
                u.hide_confirm();
                u.growl_success("Motor Risk successfully updated");
                $("form input[name='MRK_CODE']").data("update", false);

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

            if (u.grid_empty($scope.motorrisk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.motorrisk_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_motorrisks(u.get_grid_data($scope.motorrisk_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.motorrisk_grid;
                            var rowIds = $scope.motorrisk_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "MRK_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "MRK_STATUS", "A");
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
                 u.form_reset("#motoriskForm");
                 u.clear_grid_data($scope.motorrisk_grid);
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
            u.excel_export($scope.motorrisk_grid, ["ID"], "Motor_Risk_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryMotorRisk").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_motorrisk(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.motorrisk_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.motorrisk_grid.addRowData(result[i].MRK_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.motorrisk_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_motorrisks(function (motorrisks) {
                    for (var i in motorrisks) {
                        $scope.motorrisk_grid.addRowData(motorrisks[i].MRK_CODE, motorrisks[i]);
                    }
                });
            }

        });
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='MRK_CODE']", "check_motorrisk_code");
    });

})(window.$, window.service, window.utility, {})