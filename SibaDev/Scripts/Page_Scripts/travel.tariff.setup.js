(function ($, s, u, $scope) {
    $(function () {

        $scope.traveltariff_grid = u.default_grid("#grdTraveltariff", "#grdTraveltariffPager", "Travel Tariff List",
      ['Code', 'Premium', 'Days From', 'Days To', 'Status', 'Created By', 'Created Date'],
     [
        { name: 'TRT_PRD_CODE', id: true, index: 'TRT_PRD_CODE' },
        { name: 'TRT_PRM', index: 'TRT_PRM', width: 150 },
        { name: 'TRT_DAYS_FROM', index: 'TRT_DAYS_FROM', width: 200 },
        { name: 'TRT_DAYS_TO', index: 'TRT_DAYS_TO', width: 200 },
        { name: 'TRT_STATUS', index: 'TRT_STATUS' },
        { name: 'TRT_CRTE_BY', index: 'TRT_CRTE_BY' },
        { name: 'TRT_CRTE_DATE', index: 'TRT_CRTE_DATE' }
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.traveltariff_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='TRT_PRD_CODE']").data("update", true);
        u.fill_form({
            TRT_PRM: grid.jqGrid('getCell', sel_id, 'TRT_PRM'),
            TRT_DAYS_FROM: grid.jqGrid('getCell', sel_id, 'TRT_DAYS_FROM'),
            TRT_DAYS_TO: grid.jqGrid('getCell', sel_id, 'TRT_DAYS_TO'),
            TRT_PRD_CODE: grid.jqGrid('getCell', sel_id, 'TRT_PRD_CODE'),
            //TRT_STATUS: grid.jqGrid('getCell', sel_id, 'TRT_STATUS')
        }, "#traveltariffForm");
    }),
   $scope.saving = false;



        /*--------------------------------------------------
           * call add function to add records to  traveltariff_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#traveltariffForm")) {

                if (u.field_empty("input[name='TRT_PRD_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add the Travel Tariff to the grid?", function () {

                    var rowIds = $scope.traveltariff_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.traveltariff_grid.jqGrid('getCell', currRow, 'TRT_PRD_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#TRT_PRD_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#traveltariffForm");
                        FormData.TRT_STATUS = "U";
                        FormData.TRT_CRTE_BY = "Admin";
                        FormData.TRT_CRTE_DATE = u.get_date();
                        $scope.traveltariff_grid.addRowData(FormData.TRT_PRM, FormData);
                        u.hide_confirm();
                        u.growl_success("Travel Tariff successfully added to grid");
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
                case "btn_product":
                    $scope.lov.call_dialog("Select Product", "get_product", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.traveltariff_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.traveltariff_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'TRT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'TRT_PRD_CODE');

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

                    grid.jqGrid('setCell', row_id, 'TRT_STATUS', 'D');
                    $('#' + row_id, '#grdTraveltariff').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdTraveltariff').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'TRT_STATUS', 'A');
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

            if (u.grid_empty($scope.traveltariff_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.traveltariff_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'TRT_PRD_CODE');

            if (Code == $('#TRT_PRD_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'TRT_PRD_CODE', $('#TRT_PRD_CODE').val());
                grid.jqGrid('setCell', row_id, 'TRT_PRM', $('#TRT_PRM').val());               
                grid.jqGrid('setCell', row_id, 'TRT_DAYS_FROM', $('#TRT_DAYS_FROM').val());
                grid.jqGrid('setCell', row_id, 'TRT_DAYS_TO', $('#TRT_DAYS_TO').val());
                u.hide_confirm();
                u.growl_success("Travel Tariff successfully updated");
                $("form input[name='TRT_PRD_CODE']").data("update", false);
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

            if (u.grid_empty($scope.traveltariff_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.traveltariff_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_travel_tariff(u.get_grid_data($scope.traveltariff_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.traveltariff_grid;
                            var rowIds = $scope.traveltariff_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "TRT_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "TRT_STATUS", "A");
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
                  u.form_reset("#traveltariffForm");
                  u.clear_grid_data($scope.traveltariff_grid);
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
            u.excel_export($scope.traveltariff_grid, ["ID"], "Travel_Tariff_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryTraveltariff").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_travel_tariff(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.traveltariff_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.traveltariff_grid.addRowData(result[i].TRT_PRD_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.traveltariff_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_travel_tariffs(function (tariffs) {
                    for (var i in tariffs) {
                        $scope.traveltariff_grid.addRowData(tariffs[i].TRT_PRD_CODE, tariffs[i]);
                    }
                });
            }

        });

        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='TRT_PRD_CODE']", "check_travel_tariff_code");

    });

})(window.$, window.service, window.utility, {})