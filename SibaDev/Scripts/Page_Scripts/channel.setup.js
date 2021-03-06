﻿(function ($, s, u, $scope) {
    $(function () {

        $scope.channel_grid = u.default_grid("#grdChannel", "#grdChannelPager", "Class of Business List",
        ['Code', 'Name', ' Description', 'Status', 'Created By', 'Created Date'],
       [
          { name: 'MSC_CODE', id: true, index: 'MSC_CODE' },
          { name: 'MSC_NAME', id: true, index: 'MSC_NAME', width: 150 },
          { name: 'MSC_DESC', index: 'MSC_DESC', width: 200 },
          { name: 'MSC_STATUS', index: 'MSC_STATUS' },
          { name: 'MSC_CRTE_BY', index: 'MSC_CRTE_BY' },
          { name: 'MSC_CRTE_DATE', index: 'MSC_CRTE_DATE' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {
          var grid = $scope.channel_grid;
          var sel_id = grid.jqGrid('getGridParam', 'selrow');
          $("form input[name='MSC_CODE']").data("update", true);
          u.fill_form({
              MSC_NAME: grid.jqGrid('getCell', sel_id, 'MSC_NAME'),
              MSC_DESC: grid.jqGrid('getCell', sel_id, 'MSC_DESC'),
              MSC_CODE: grid.jqGrid('getCell', sel_id, 'MSC_CODE'),
          }, "#channelForm");
      }),
     $scope.saving = false;



        /*--------------------------------------------------
           * call add function to add records to  channel_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#channelForm")) {

                if (u.field_empty("input[name='MSC_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Class of Business to the grid?", function () {

                    var rowIds = $scope.channel_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.channel_grid.jqGrid('getCell', currRow, 'MSC_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#MSC_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#channelForm");
                        FormData.MSC_STATUS = "U";
                        FormData.MSC_CRTE_BY = "Admin";
                        FormData.MSC_CRTE_DATE = u.get_date();
                        $scope.channel_grid.addRowData(FormData.MSC_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("Class of Business successfully added to grid");
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
                    $scope.lov.call_dialog("Select Region", "get_regions", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.channel_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.channel_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'MSC_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'MSC_CODE');

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

                    grid.jqGrid('setCell', row_id, 'MSC_STATUS', 'D');
                    $('#' + row_id, '#grdChannel').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdChannel').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'MSC_STATUS', 'A');
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

            if (u.grid_empty($scope.channel_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.channel_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'MSC_CODE');

                if (Code == $('#MSC_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'MSC_CODE', $('#MSC_CODE').val());
                    grid.jqGrid('setCell', row_id, 'MSC_NAME', $('#MSC_NAME').val());
                    grid.jqGrid('setCell', row_id, 'MSC_DESC', $('#MSC_DESC').val());
                    u.hide_confirm();
                    u.growl_success("Class of Business successfully updated");
                    $("form input[name='MSC_CODE']").data("update", false);
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

            if (u.grid_empty($scope.channel_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.channel_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_channel(u.get_grid_data($scope.channel_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.channel_grid;
                            var rowIds = $scope.channel_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "MSC_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "MSC_STATUS", "A");
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
                u.form_reset("#channelForm");
                u.clear_grid_data($scope.channel_grid);
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
            u.excel_export($scope.channel_grid, ["ID"], "Class_Business_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryChannel").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_channel(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.channel_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.channel_grid.addRowData(result[i].MSC_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.channel_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_channels(function (classes) {
                    for (var i in classes) {
                        $scope.channel_grid.addRowData(classes[i].MSC_CODE, classes[i]);
                    }
                });
            }

        });

        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='MSC_CODE']", "check_channel_code");

    });

})(window.$, window.service, window.utility, {})