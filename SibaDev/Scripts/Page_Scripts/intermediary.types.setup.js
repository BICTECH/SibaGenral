(function ($, s, u, $scope) {
    $(function () {


        $scope.intermtypes_grid = u.default_grid("#grdIntermtypes", "#grdIntermtypesPager", "Intermediary Types List",
        ['Type', 'Code', ' Name', 'Description', 'Prefix', 'Surfix', 'Status', 'Created By', 'Created Date'],
        [
            { name: 'ITP_CUST_TYPE', index: 'ITP_CUST_TYPE' },
            { name: 'ITP_CODE', id: true, index: 'ITP_CODE' },
            { name: 'ITP_NAME', index: 'ITP_NAME' },
            { name: 'ITP_DESC', index: 'ITP_DESC' },
            { name: 'ITP_PREFIX', index: 'ITP_PREFIX' },
            { name: 'ITP_SURFIX', index: 'ITP_SURFIX' },
            { name: 'ITP_STATUS', index: 'ITP_STATUS' },
            { name: 'ITP_CRTE_BY', index: 'ITP_CRTE_BY' },
            { name: 'ITP_CRTE_DATE', index: 'ITP_CRTE_DATE' }
        ],
       //Retrive Grid data into form input fields on row click..
       function (sel_id) {
           var grid = $scope.intermtypes_grid;
           var sel_id = grid.jqGrid('getGridParam', 'selrow');
           $("form input[name='ITP_CODE']").data("update", true);
           u.fill_form({
               ITP_CODE: grid.jqGrid('getCell', sel_id, 'ITP_CODE'),
               ITP_NAME: grid.jqGrid('getCell', sel_id, 'ITP_NAME'),
               ITP_DESC: grid.jqGrid('getCell', sel_id, 'ITP_DESC'),
               ITP_PREFIX: grid.jqGrid('getCell', sel_id, 'ITP_PREFIX'),
               ITP_SURFIX: grid.jqGrid('getCell', sel_id, 'ITP_SURFIX'),
               ITP_CUST_TYPE: grid.jqGrid('getCell', sel_id, 'ITP_CUST_TYPE'),
               //ITP_STATUS: grid.jqGrid('getCell', sel_id, 'ITP_STATUS')
           }, "#intermtypeForm");
       }),
      $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  intermtypes_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#intermtypeForm")) {

                if (u.field_empty("input[name='ITP_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Intermediary Types to the grid?", function () {

                    var rowIds = $scope.intermtypes_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.intermtypes_grid.jqGrid('getCell', currRow, 'ITP_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#ITP_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#intermtypeForm");
                        FormData.ITP_STATUS = "U";
                        FormData.ITP_CRTE_BY = "Admin";
                        FormData.ITP_CRTE_DATE = u.get_date();
                        $scope.intermtypes_grid.addRowData(FormData.ITP_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Intermediary Types successfully added to grid");
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
                case "btn_custcat":
                    $scope.lov.call_dialog("Select Intermediary Category", "get_custcat_lov", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.intermtypes_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.intermtypes_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'ITP_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'ITP_CODE');

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

                    grid.jqGrid('setCell', row_id, 'ITP_STATUS', 'D');
                    $('#' + row_id, '#grdIntermtypes').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdIntermtypes').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'ITP_STATUS', 'A');
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

            if (u.grid_empty($scope.intermtypes_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.intermtypes_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'ITP_CODE');

                if (Code == $('#ITP_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'ITP_CODE', $('#ITP_CODE').val());
                    grid.jqGrid('setCell', row_id, 'ITP_NAME', $('#ITP_NAME').val());
                    grid.jqGrid('setCell', row_id, 'ITP_DESC', $('#ITP_DESC').val());
                    grid.jqGrid('setCell', row_id, 'ITP_PREFIX', $('#ITP_PREFIX').val());
                    grid.jqGrid('setCell', row_id, 'ITP_SURFIX', $('#ITP_SURFIX').val());
                    grid.jqGrid('setCell', row_id, 'ITP_CUST_TYPE', $('#ITP_CUST_TYPE').val());
                    u.hide_confirm();
                    u.growl_success("Intermediary Types successfully updated");
                    $("form input[name='ITP_CODE']").data("update", false);
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

            if (u.grid_empty($scope.intermtypes_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.intermtypes_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_intermtypes(u.get_grid_data($scope.intermtypes_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.intermtypes_grid;
                            var rowIds = $scope.intermtypes_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "ITP_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "ITP_STATUS", "A");
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
                u.form_reset("#intermtypeForm");
                u.clear_grid_data($scope.intermtypes_grid);
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
            u.excel_export($scope.intermtypes_grid, ["ID"], "Intermediary_Types_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryIntermediarytypes").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_intermtype(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.intermtypes_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.intermtypes_grid.addRowData(result[i].ITP_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.intermtypes_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_intermtypes(function (intermtypes) {
                    for (var i in intermtypes) {
                        $scope.intermtypes_grid.addRowData(intermtypes[i].ITP_CODE, intermtypes[i]);
                    }
                });
            }

        });
        /*-----------------------------
        * Code validation
        *-----------------------*/
        //u.codeVal("form input[name='ITP_CUST_TYPE']", "check_intermtype_code");

        u.lovCodeVal("form input[name='ITP_CUST_TYPE']", "check_custcat_code", "form input[name='CUS_CAT_NAME']");

    });

})(window.$, window.service, window.utility, {})