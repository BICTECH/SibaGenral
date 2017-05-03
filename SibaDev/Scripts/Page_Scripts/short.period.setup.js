(function ($, s, u, $scope) {
    $(function () {

      $scope.shortperiod_grid = u.default_grid("#grdShortPeriod", "#grdShortPeriodPager", "Class of Business List",
      ['Id', 'Code', 'No. Days', 'Rate', 'Status', 'Created By', 'Created Date'],
     [
        { name: 'SPD_SYS_ID', id: true, index: 'SPD_SYS_ID' },
        { name: 'SPD_PRD_CODE', id: true, index: 'SPD_PRD_CODE' },
        { name: 'SPD_NO_OF_DAYS', index: 'SPD_NO_OF_DAYS', width: 150 },
        { name: 'SPD_RATE_PERC', index: 'SPD_RATE_PERC', width: 200 },
        { name: 'SPD_STATUS', index: 'SPD_STATUS' },
        { name: 'SPD_CRTE_BY', index: 'SPD_CRTE_BY' },
        { name: 'SPD_CRTE_DATE', index: 'SPD_CRTE_DATE' }
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.shortperiod_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='SPD_PRD_CODE']").data("update", true);
        u.fill_form({
            SPD_NO_OF_DAYS: grid.jqGrid('getCell', sel_id, 'SPD_NO_OF_DAYS'),
            SPD_RATE_PERC: grid.jqGrid('getCell', sel_id, 'SPD_RATE_PERC'),
            SPD_PRD_CODE: grid.jqGrid('getCell', sel_id, 'SPD_PRD_CODE'),
            //SPD_STATUS: grid.jqGrid('getCell', sel_id, 'SPD_STATUS')
        }, "#shortperiodForm");
    }),
   $scope.saving = false;



        /*--------------------------------------------------
           * call add function to add records to  shortperiod_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#shortperiodForm")) {

                if (u.field_empty("input[name='SPD_PRD_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Short Period to the grid?", function () {

                    var rowIds = $scope.shortperiod_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.shortperiod_grid.jqGrid('getCell', currRow, 'SPD_PRD_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#SPD_PRD_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#shortperiodForm");
                        FormData.SPD_STATUS = "U";
                        FormData.SPD_CRTE_BY = "Admin";
                        FormData.SPD_CRTE_DATE = u.get_date();
                        $scope.shortperiod_grid.addRowData(FormData.SPD_NO_OF_DAYS, FormData);
                        u.hide_confirm();
                        u.growl_success("Short Period successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            } else{
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
                case "btn_class":
                    $scope.lov.call_dialog("Select Class of Business", "get_class_business", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.shortperiod_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.shortperiod_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'SPD_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'SPD_PRD_CODE');

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

                    grid.jqGrid('setCell', row_id, 'SPD_STATUS', 'D');
                    $('#' + row_id, '#grdShortPeriod').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdShortPeriod').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'SPD_STATUS', 'A');
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

            if (u.grid_empty($scope.shortperiod_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.shortperiod_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'SPD_PRD_CODE');

            if (Code == $('#SPD_PRD_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'SPD_PRD_CODE', $('#SPD_PRD_CODE').val());
                grid.jqGrid('setCell', row_id, 'SPD_NO_OF_DAYS', $('#SPD_NO_OF_DAYS').val());               
                grid.jqGrid('setCell', row_id, 'SPD_RATE_PERC', $('#SPD_RATE_PERC').val());
                u.hide_confirm();
                u.growl_success("Class of Business successfully updated");
                $("form input[name='SPD_PRD_CODE']").data("update", false);
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

            if (u.grid_empty($scope.shortperiod_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.shortperiod_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_short_period(u.get_grid_data($scope.shortperiod_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.shortperiod_grid;
                            var rowIds = $scope.shortperiod_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "SPD_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "SPD_STATUS", "A");
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
                  u.form_reset("#shortperiodForm");
                  u.clear_grid_data($scope.shortperiod_grid);
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
            u.excel_export($scope.shortperiod_grid, ["ID"], "Class_Business_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryClassBusiness").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_short_period(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.shortperiod_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.shortperiod_grid.addRowData(result[i].SPD_PRD_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.shortperiod_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_short_periods(function (classes) {
                    for (var i in classes) {
                        $scope.shortperiod_grid.addRowData(classes[i].SPD_PRD_CODE, classes[i]);
                    }
                });
            }

        });

        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='SPD_PRD_CODE']", "check_short_period_code");

    });

})(window.$, window.service, window.utility, {})