(function ($, s, u, $scope) {
    $(function () {

                /*--------------------------------------------------
  * Grid definition
  *------------------------------------------------*/

        $scope.location_grid = u.default_grid("#grdLocation", "#grdLocationPager", "Location List",
          ['Code', 'Name', 'Description', 'Area Code', 'Loc Address', 'Postal Address',
            'Created by', 'Created date', 'Status'],
          [
                { name: 'LOC_CODE', index: 'LOC_CODE', width: 100 },
                { name: 'LOC_NAME', index: 'LOC_NAME', width: 200 },
                { name: 'LOC_DESC', index: 'LOC_DESC', width: 300 },
                { name: 'LOC_ARE_CODE', index: 'LOC_ARE_CODE', width: 100 },
                { name: 'LOC_ADDR1', index: 'LOC_ADDR1', width: 200 },
                { name: 'LOC_ADDR2', index: 'LOC_ADDR2', width: 200 },
                { name: 'LOC_STATUS', index: 'LOC_STATUS', width: 100 },
                { name: 'LOC_CRTE_BY', index: 'LOC_CRTE_BY', width: 100 },
                { name: 'LOC_CRTE_DATE', index: 'LOC_CRTE_DATE', width: 100 },
          ],
            function (sel_id) {
                var grid = $scope.location_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='LOC_CODE']").data("update", true);
                u.fill_form({
                    LOC_CODE: grid.jqGrid('getCell', sel_id, 'LOC_CODE'),
                    LOC_NAME: grid.jqGrid('getCell', sel_id, 'LOC_NAME'),
                    LOC_DESC: grid.jqGrid('getCell', sel_id, 'LOC_DESC'),
                    LOC_ARE_CODE: grid.jqGrid('getCell', sel_id, 'LOC_ARE_CODE'),
                    LOC_ADDR1: grid.jqGrid('getCell', sel_id, 'LOC_ADDR1'),
                    LOC_ADDR2: grid.jqGrid('getCell', sel_id, 'LOC_ADDR2'),
                    LOC_STATUS: grid.jqGrid('getCell', sel_id, 'LOC_STATUS')
                }, "#locationForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
               * call add function to add records to  location_grid
               *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#locationForm")) {

                if (u.field_empty("input[name='LOC_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Location to the grid?", function () {

                    var rowIds = $scope.location_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.location_grid.jqGrid('getCell', currRow, 'LOC_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#LOC_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#locationForm");
                        FormData.LOC_STATUS = "U";
                        FormData.LOC_CRTE_BY = "Admin";
                        FormData.LOC_CRTE_DATE = u.get_date();
                        $scope.location_grid.addRowData(FormData.LOC_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Location successfully added to grid");
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
                case "btn_area":
                    $scope.lov.call_dialog("Select Area", "get_lov_areas", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {
            if (u.grid_empty($scope.location_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.location_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'LOC_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'LOC_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?",function (e) {

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

                    grid.jqGrid('setCell', row_id, 'LOC_STATUS', 'D');
                    $('#' + row_id, '#grdLocation').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Location successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdLocation').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'LOC_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Location successfully restored");

                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on('click', function () {

            if (u.grid_empty($scope.location_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Country?", function () {

            var grid = $scope.location_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'LOC_CODE');

            if (Code == $('#LOC_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'LOC_CODE', $('#LOC_CODE').val());
                grid.jqGrid('setCell', row_id, 'LOC_NAME', $('#LOC_NAME').val());
                grid.jqGrid('setCell', row_id, 'LOC_DESC', $('#LOC_DESC').val());
                grid.jqGrid('setCell', row_id, 'LOC_ARE_CODE', $('#LOC_ARE_CODE').val());
                grid.jqGrid('setCell', row_id, 'LOC_ADDR1', $('#LOC_ADDR1').val());
                grid.jqGrid('setCell', row_id, 'LOC_ADDR2', $('#LOC_ADDR2').val());
                u.hide_confirm();
                u.growl_success("Location successfully updated");
                $("form input[name='LOC_CODE']").data("update", false);
            } else {
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

            if (u.grid_empty($scope.location_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.location_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_locations(u.get_grid_data($scope.location_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.location_grid;
                            var rowIds = $scope.location_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "LOC_STATUS");

                                //Delete cover row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update cover row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "LOC_STATUS", "A");
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
                u.form_reset("#locationForm");
                u.clear_grid_data($scope.location_grid);
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
            u.excel_export($scope.location_grid, ["ID"], "Location_List_Excel");
        });


        /*---------------------------
         * Location Search
         *-------------------------*/
        $("#btnQueryLocation").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_location(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.location_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.location_grid.addRowData(result[i].LOC_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.location_grid.jqGrid('clearGridData');

                //fetch all countries
                s.get_locations(function (locations) {
                    for (var i in locations) {
                        $scope.location_grid.addRowData(locations[i].LOC_CODE, locations[i]);
                    }
                });
            }

        });

        /*-----------------------------
    * Code validation
    *-----------------------*/
        u.codeVal("form input[name='LOC_CODE']", "check_location_code");

        /*-----------------------------
    * Area LOV code validation
    *---------------------------*/
        u.lovCodeVal("form input[name='LOC_ARE_CODE']", "check_area_code", "form input[name='LOC_ARE_NAME']");

    });

})(window.$, window.service, window.utility, {})