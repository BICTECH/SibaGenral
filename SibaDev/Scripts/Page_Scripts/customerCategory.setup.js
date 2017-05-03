(function ($, s, u, $scope) {
    $(function () {

        $scope.CustCategory_grid = u.default_grid("#grdCustCategory", "#grdCustCategoryPager", "Customer Category List",
       [ 'Code', ' Name', 'Intermediary','Main Account','SubAccount', 'Created By', 'Created Date','Status'],
        [
            { name: 'CUS_CAT_CODE', index: 'CUS_CAT_CODE', width: 100 },
            { name: 'CUS_CAT_NAME', index: 'CUS_CAT_NAME', width: 150 },
            { name: 'CUS_CAT_INTERM_YN', index: 'CUS_CAT_INTERM_YN', width: 150 },
            { name: 'CUS_CAT_MAIN_ACCT', index: 'CUS_CAT_MAIN_ACCT', width: 150 },
            { name: 'CUS_CAT_SUB_ACCT', index: 'CUS_CAT_SUB_ACCT', width: 150 },
            { name: 'CUS_CAT_CRTE_BY', index: 'CUS_CAT_CRTE_BY', width: 100 },
            { name: 'CUS_CAT_CRTE_DATE', index: 'CUS_CAT_CRTE_DATE', width: 100 },
            { name: 'CUS_CAT_STATUS', index: 'CUS_CAT_STATUS', width: 100 },
        ],
        //Retrive Grid data into form input fields on row click..
        function (sel_id) {
            var grid = $scope.CustCategory_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            $("form input[name='CUS_CAT_CODE']").data("update", true);
            u.fill_form({
                CUS_CAT_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CAT_CODE'),
                CUS_CAT_NAME: grid.jqGrid('getCell', sel_id, 'CUS_CAT_NAME'),
                CUS_CAT_INTERM_YN: grid.jqGrid('getCell', sel_id, 'CUS_CAT_INTERM_YN'),
                CUS_CAT_MAIN_ACCT: grid.jqGrid('getCell', sel_id, 'CUS_CAT_MAIN_ACCT'),
                CUS_CAT_SUB_ACCT: grid.jqGrid('getCell', sel_id, 'CUS_CAT_SUB_ACCT'),
            }, "#custcatForm");
        }),
        $scope.saving = false;


        /*--------------------------------------------------
        * call add function to add records to  CustCategory_grid
        *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.field_empty("input[name='CUS_CAT_CODE']")) return u.growl_error

            ("The Form code field is empty, please fill and to add to the grid");

            u.modal_confirmation("Are you sure you want to add Customer Category to the grid?", function () {

                var rowIds = $scope.CustCategory_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.CustCategory_grid.jqGrid('getCell', currRow, 'CUS_CAT_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#CUS_CAT_CODE').val(), Code) < 0) {

                    var FormData = u.parse_form("#custcatForm");
                    FormData.CUS_CAT_STATUS = "U";
                    FormData.CUS_CAT_CRTE_BY = "Admin";
                    FormData.CUS_CAT_CRTE_DATE = u.get_date();
                    $scope.CustCategory_grid.addRowData(FormData.CUS_CAT_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Customer Category successfully added to grid");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                }

            });
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
                case "btn_main_account":
                    $scope.lov.call_dialog("Select Main Account", "get_lov_main_acct", $scope.dialog_data);
                    break;
                case "btn_sub_account":
                    $scope.lov.call_dialog("Select Sub Account", "get_lov_sub_acct", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {
            
            if (u.grid_empty($scope.CustCategory_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.CustCategory_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CUS_CAT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CUS_CAT_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CUS_CAT_STATUS', 'D');
                    $('#' + row_id, '#grdCustCategory').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCustCategory').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CUS_CAT_STATUS', 'A');
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

            if (u.grid_empty($scope.CustCategory_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.CustCategory_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CUS_CAT_CODE');

            if (Code == $('#CUS_CAT_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CUS_CAT_CODE', $('#CUS_CAT_CODE').val());
                grid.jqGrid('setCell', row_id, 'CUS_CAT_NAME', $('#CUS_CAT_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_CAT_INTERM_YN', $('#CUS_CAT_INTERM_YN').val());
                grid.jqGrid('setCell', row_id, 'CUS_CAT_MAIN_ACCT', $('#CUS_CAT_MAIN_ACCT').val());
                grid.jqGrid('setCell', row_id, 'CUS_CAT_SUB_ACCT', $('#CUS_CAT_SUB_ACCT').val());

                u.hide_confirm();
                u.growl_success("Customer Category successfully updated");
                $("form input[name='CUS_CAT_CODE']").data("update", false);
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

            if (u.grid_empty($scope.CustCategory_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.CustCategory_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_custcats(u.get_grid_data($scope.CustCategory_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.CustCategory_grid;
                            var rowIds = $scope.CustCategory_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CUS_CAT_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CUS_CAT_STATUS", "A");
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
                u.form_reset("#custcatForm");
                u.clear_grid_data($scope.CustCategory_grid);
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
            u.excel_export($scope.CustCategory_grid, ["ID"], "Customer_Category_List_Excel");
        });


        /*---------------------------
         * Country Search
         *-------------------------*/
        $("#btnQueryCusCat").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_custcat(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        alert(result);
                        $scope.CustCategory_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.CustCategory_grid.addRowData(result[i].CUS_CAT_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.CustCategory_grid.jqGrid('clearGridData');

                //fetch all countries
                s.get_custcats(function (customerscat) {
                    for (var i in customerscat) {
                        $scope.CustCategory_grid.addRowData(customerscat[i].CUS_CAT_CODE, customerscat[i]);
                    }
                });
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='CUS_CAT_CODE']", "check_customer_code");

        /*-----------------------------
  * Main/Sub Acct LOV code validation
  *---------------------------*/
        u.lovCodeVal("form input[name='CUS_CAT_MAIN_ACCT']", "chceck_main_acct_code", "form input[name='MAIN_ACCT_NAME']");
        u.lovCodeVal("form input[name='CUS_CAT_SUB_ACCT']", "chceck_sub_acct_code", "form input[name='SUB_ACCT_NAME']");

    });
})(window.$, window.service, window.utility, {});


