(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
  * Grid definition
  *------------------------------------------------*/

        $scope.area_grid = u.default_grid("#grdArea", "#grdAreaPager", "Area List",
           ['Code', ' Name', 'Description', 'Region Code', 'Created By', 'Created Date', 'Status'],
            [
                { name: 'ARE_CODE', id: true, index: 'ARE_CODE' },
                { name: 'ARE_NAME', index: 'ARE_NAME' },
                { name: 'ARE_DESC', index: 'ARE_DESC' },
                { name: 'ARE_REG_CODE', index: 'ARE_REG_CODE' },
                { name: 'ARE_CRTE_BY', index: 'ARE_CRTE_BY' },
                { name: 'ARE_CRTE_DATE', index: 'ARE_CRTE_DATE' },
                { name: 'ARE_STATUS', index: 'ARE_STATUS' },
            ],
            function (sel_id) {
                var grid = $scope.area_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='ARE_CODE']").data("update", true);
                u.fill_form({
                    ARE_CODE: grid.jqGrid('getCell', sel_id, 'ARE_CODE'),
                    ARE_NAME: grid.jqGrid('getCell', sel_id, 'ARE_NAME'),
                    ARE_DESC: grid.jqGrid('getCell', sel_id, 'ARE_DESC'),
                    ARE_REG_CODE: grid.jqGrid('getCell', sel_id, 'ARE_REG_CODE'),
                    //ARE_STATUS: grid.jqGrid('getCell', sel_id, 'ARE_STATUS')
                }, "#areaForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  area_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#areaForm")) {

                if (u.field_empty("input[name='ARE_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Area to the grid?", function () {

                    var rowIds = $scope.area_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.area_grid.jqGrid('getCell', currRow, 'ARE_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#ARE_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#areaForm");
                        FormData.ARE_STATUS = "U";
                        FormData.ARE_CRTE_BY = "Admin";
                        FormData.ARE_CRTE_DATE = u.get_date();
                        $scope.area_grid.addRowData(FormData.ARE_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Area successfully added to grid");
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
                case "btn_region":
                    $scope.lov.call_dialog("Select Region", "get_lov_regions", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.area_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.area_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'ARE_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'ARE_CODE');

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

                    grid.jqGrid('setCell', row_id, 'ARE_STATUS', 'D');
                    $('#' + row_id, '#grdArea').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdArea').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'ARE_STATUS', 'A');
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

            if (u.grid_empty($scope.area_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Country?", function () {

                var grid = $scope.area_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'ARE_CODE');

                if (Code == $('#ARE_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'ARE_CODE', $('#ARE_CODE').val());
                    grid.jqGrid('setCell', row_id, 'ARE_NAME', $('#ARE_NAME').val());
                    grid.jqGrid('setCell', row_id, 'ARE_DESC', $('#ARE_DESC').val());
                    grid.jqGrid('setCell', row_id, 'ARE_REG_CODE', $('#ARE_REG_CODE').val());
                    u.hide_confirm();
                    u.growl_success("Area successfully updated");
                    $("form input[name='ARE_CODE']").data("update", false);
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

            if (u.grid_empty($scope.area_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.area_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_areas(u.get_grid_data($scope.area_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.area_grid;
                            var rowIds = $scope.area_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "ARE_STATUS");

                                //Delete cover row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update cover row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "ARE_STATUS", "A");
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
                u.form_reset("#areaForm");
                u.clear_grid_data($scope.area_grid);
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
            u.excel_export($scope.area_grid, ["ID"], "Area_List_Excel");
        });


        /*---------------------------
         * City Search
         *-------------------------*/
        $("#btnQueryArea").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_area(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.area_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.area_grid.addRowData(result[i].ARE_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.area_grid.jqGrid('clearGridData');

                //fetch all areas
                s.get_areas(function (areas) {
                    for (var i in areas) {
                        $scope.area_grid.addRowData(areas[i].ARE_CODE, areas[i]);
                    }
                });
            }

        });

        /*-----------------------------
      * Code validation
      *-----------------------*/
        u.codeVal("form input[name='ARE_CODE']", "check_area_code");

        /*-----------------------------
    * City LOV code validation
    *---------------------------*/
        u.lovCodeVal("form input[name='ARE_REG_CODE']", "check_region_code", "form input[name='REG_NAME']");

    });

})(window.$, window.service, window.utility, {})
