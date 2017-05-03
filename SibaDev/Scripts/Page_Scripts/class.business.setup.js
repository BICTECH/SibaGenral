(function ($, s, u, $scope) {
    $(function () {

      $scope.classbusiness_grid = u.default_grid("#grdClassBusiness", "#grdClassBusinessPager", "Class of Business List",
      ['Code', 'Name', ' Description', 'Status', 'Created By', 'Created Date'],
     [
        { name: 'COB_CODE', id: true, index: 'COB_CODE' },
        { name: 'COB_NAME', id: true, index: 'COB_NAME', width: 150 },
        { name: 'COB_DESC', index: 'COB_DESC', width: 200 },
        { name: 'COB_STATUS', index: 'COB_STATUS' },
        { name: 'COB_CRTE_BY', index: 'COB_CRTE_BY' },
        { name: 'COB_CRTE_DATE', index: 'COB_CRTE_DATE' } 
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.classbusiness_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='COB_CODE']").data("update", true);
        u.fill_form({
            COB_NAME: grid.jqGrid('getCell', sel_id, 'COB_NAME'),
            COB_DESC: grid.jqGrid('getCell', sel_id, 'COB_DESC'),
            COB_CODE: grid.jqGrid('getCell', sel_id, 'COB_CODE'),
            //COB_STATUS: grid.jqGrid('getCell', sel_id, 'COB_STATUS')
        }, "#classbusinessForm");
    }),
   $scope.saving = false;



        /*--------------------------------------------------
           * call add function to add records to  classbusiness_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#classbusinessForm")) {

                if (u.field_empty("input[name='COB_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Class of Business to the grid?", function () {

                    var rowIds = $scope.classbusiness_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.classbusiness_grid.jqGrid('getCell', currRow, 'COB_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#COB_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#classbusinessForm");
                        FormData.COB_STATUS = "U";
                        FormData.COB_CRTE_BY = "Admin";
                        FormData.COB_CRTE_DATE = u.get_date();
                        $scope.classbusiness_grid.addRowData(FormData.COB_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("Class of Business successfully added to grid");
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
                case "btn_region":
                    $scope.lov.call_dialog("Select Region", "get_regions", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.classbusiness_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.classbusiness_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'COB_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'COB_CODE');

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

                    grid.jqGrid('setCell', row_id, 'COB_STATUS', 'D');
                    $('#' + row_id, '#grdClassBusiness').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdClassBusiness').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'COB_STATUS', 'A');
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

            if (u.grid_empty($scope.classbusiness_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.classbusiness_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'COB_CODE');

            if (Code == $('#COB_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'COB_CODE', $('#COB_CODE').val());
                grid.jqGrid('setCell', row_id, 'COB_NAME', $('#COB_NAME').val());               
                grid.jqGrid('setCell', row_id, 'COB_DESC', $('#COB_DESC').val());
                u.hide_confirm();
                u.growl_success("Class of Business successfully updated");
                $("form input[name='COB_CODE']").data("update", false);
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

            if (u.grid_empty($scope.classbusiness_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.classbusiness_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_class(u.get_grid_data($scope.classbusiness_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.classbusiness_grid;
                            var rowIds = $scope.classbusiness_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "COB_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "COB_STATUS", "A");
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
                  u.form_reset("#classbusinessForm");
                  u.clear_grid_data($scope.classbusiness_grid);
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
            u.excel_export($scope.classbusiness_grid, ["ID"], "Class_Business_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryClassBusiness").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_class(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.classbusiness_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.classbusiness_grid.addRowData(result[i].COB_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.classbusiness_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_classes(function (classes) {
                    for (var i in classes) {
                        $scope.classbusiness_grid.addRowData(classes[i].COB_CODE, classes[i]);
                    }
                });
            }

        });

        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='COB_CODE']", "check_classbusiness_code");

    });

})(window.$, window.service, window.utility, {})