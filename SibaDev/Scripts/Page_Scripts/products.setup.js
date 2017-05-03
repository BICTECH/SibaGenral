(function ($, s, u, $scope) {
    $(function () {

        // Cover Grid
        $scope.cover_grid = u.default_grid("#grdCover", "#grdCoverPager", "Cover List",
            ['Cover Code', 'Product Code', 'Cover SI', 'Rate', 'Premium', ' Defaulted', 'Discount', 'Loading', 'Created by', 'Created Date', 'Status','ID'],
            [
                { name: 'PCV_COV_CODE', index: 'PCV_COV_CODE', width: 150 },
                { name: 'PCV_PDT_CODE', hidden: true, index: 'PCV_PDT_CODE', width: 150 },
                { name: 'PCV_SI', index: 'PCV_SI', width: 100 },
                { name: 'PCV_DEF_RATE', index: 'PCV_DEF_RATE', width: 150 },
                { name: 'PCV_DEF_PREM', index: 'PCV_DEF_PREM', width: 150 },
                { name: 'PCV_DFT', index: 'PCV_DFT', width: 150 },
                { name: 'PCV_DISC', index: 'PCV_DISC', width: 150 },
                { name: 'PCV_LOAD', index: 'PCV_LOAD', width: 150 },
                { name: 'PCV_CRTE_BY', index: 'PCV_CRTE_BY', width: 150 },
                { name: 'PCV_CRTE_DATE', index: 'PCV_CRTE_DATE', width: 150 },
                { name: 'PCV_STATUS', index: 'PCV_STATUS', width: 150 },
                { name: 'PCV_SYS_ID', hidden: true, index: 'PCV_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.cover_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='PCV_COV_CODE']").data("update", true);
                u.fill_form({
                    PCV_COV_CODE: grid.jqGrid('getCell', sel_id, 'PCV_COV_CODE'),
                    PCV_SI: grid.jqGrid('getCell', sel_id, 'PCV_SI'),
                    PCV_DEF_RATE: grid.jqGrid('getCell', sel_id, 'PCV_DEF_RATE'),
                    PCV_DFT: grid.jqGrid('getCell', sel_id, 'PCV_DFT'),
                    PCV_DISC: grid.jqGrid('getCell', sel_id, 'PCV_DISC'),
                    PCV_LOAD: grid.jqGrid('getCell', sel_id, 'PCV_LOAD'),
                    PCV_STATUS: grid.jqGrid('getCell', sel_id, 'PCV_STATUS'),
                    PCV_DEF_PREM: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),
                }, "#coverForm");
            }),


        // Condition & Clauses Grid
        $scope.clauses_grid = u.default_grid("#grdClauses", "#grdClausesPager", "Conditions & Clauses List",
            ['Clause Code', 'Create By', 'Create Date', 'Status', 'Product Code','ID'],
            [
                { name: 'PCC_CLAU_CODE', index: 'PCC_CLAU_CODE', width: 150 },
                { name: 'PCC_CRTE_BY', index: 'PCC_CRTE_BY', width: 150 },
                { name: 'PCC_CRTE_DATE', index: 'PCC_CRTE_DATE', width: 150 },
                { name: 'PCC_STATUS', index: 'PCC_STATUS', width: 150 },
                { name: 'PCC_PDT_CODE', hidden: true, index: 'PCC_PDT_CODE', width: 150 },
                { name: 'PCC_SYS_ID', hidden: true, index: 'PCC_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.clauses_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='PCC_PDT_CODE']").data("update", true);
                u.fill_form({
                    PCC_CLAU_CODE: grid.jqGrid('getCell', sel_id, 'PCC_CLAU_CODE'),
                    //PCC_PDT_CODE: grid.jqGrid('getCell', sel_id, 'PCC_PDT_CODE'),
                    PCC_PDT_NAME: grid.jqGrid('getCell', sel_id, 'PCC_PDT_NAME'),
                    PCC_STATUS: grid.jqGrid('getCell', sel_id, 'PCC_STATUS'),
                }, "#clausesForm");
            }),


        // Discount & Loading Grid
        $scope.discload_grid = u.default_grid("#grddiscload", "#grddiscloadPager", "Discount & Loading List",
            ['Code', 'Name', 'Create By', 'Create Date', 'Status','Product Code','ID'],
            [               
                { name: 'PLDI_LDI_CODE', index: 'PLDI_LDI_CODE', width: 150 },
                { name: 'PLDI_LDI_NAME', index: 'PLDI_LDI_NAME', width: 150 },
                { name: 'PLDI_CRTE_BY', index: 'PLDI_CRTE_BY', width: 150 },
                { name: 'PLDI_CRTE_DATE', index: 'PLDI_CRTE_DATE', width: 150 },
                { name: 'PLDI_STATUS', index: 'PLDI_STATUS', width: 150 },
                { name: 'PLDI_PDT_CODE', hidden: true, index: 'PLDI_PDT_CODE', width: 150 },
                { name: 'PLDI_SYS_ID', hidden: true, index: 'PLDI_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.discload_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='PLDI_LDI_CODE']").data("update", true);
                u.fill_form({
                    PLDI_LDI_CODE: grid.jqGrid('getCell', sel_id, 'PLDI_LDI_CODE'),
                    PLDI_LDI_NAME: grid.jqGrid('getCell', sel_id, 'PLDI_LDI_NAME'),
                }, "#discloadForm");
            }),


        //Search grid
        $scope.searchGrid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Result",
            ["Index", "Product Code", "Product Name"],
            [
                { name: 'Index', id: true, index: 'Index', width: 150 },
                { name: 'PCC_CODE', index: 'PCC_CODE', width: 150 },
                { name: 'PCC_NAME', index: 'PCC_NAME', width: 150 },
            ],
              function (index) {
                  $scope.selected_index = index;
                  $scope.search_fill($scope.result[index]);
              },
                function (index) {
                    $scope.search_fill($scope.result[index]);
                    u.clear_grid_data($scope.searchGrid);
                    $("#mySearchResultModal").modal("hide");
        });

            $scope.saving = false;


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
        }); /*----------------------
 * LOV initialization
 *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOVRegion", "#grdLOVRegionPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function (e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
                case "btn_cover":
                    $scope.lov.call_dialog("Select Cover", "get_lov_covers", $scope.dialog_data);
                    break;
                case "btn_clauses":
                    $scope.lov.call_dialog("Select Condition & Clause", "get_lov_conditionsclausescovers", $scope.dialog_data);
                    break;
                case "btn_class":
                    $scope.lov.call_dialog("Select Product", "get_lov_classes", $scope.dialog_data);
                    break;
                case "btn_discload":
                    $scope.lov.call_dialog("Select Discount & Loading", "get_lov_discload", $scope.dialog_data);
                    break;
            }
        });
        $scope.cov_id = 0;
        /*--------------------------------------------------
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_cover").on('click', function () {

            if (u.form_validation("#coverForm")) {
                if ($("input[name='PCV_COV_CODE']").val() === "") return u.modal_alert("Please Select Condition Clause");

                u.modal_confirmation("Are you sure you want to add the Cover?", function() {

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
                    var cellValue = $scope.cover_grid.jqGrid('getCell', currRow, 'PCV_COV_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($("input[name='PCV_COV_CODE']").val(), Code) < 0) {

                    var FormData = u.parse_form("#coverForm");
                    FormData.PCV_STATUS = "U";
                    FormData.PCV_DFT = ($("#PCV_DFT").is(':checked')) ? 'Y' : 'N';
                    FormData.PCV_DISC = ($("#PCV_DISC").is(':checked')) ? 'Y' : 'N';
                    FormData.PCV_LOAD = ($("#PCV_LOAD").is(':checked')) ? 'Y' : 'N';
                    FormData.PCV_CRTE_BY = "Admin";
                    FormData.PCV_CRTE_DATE = u.get_date();
                    $scope.cover_grid.addRowData(FormData.PCV_COV_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Cover successfully added to grid");
                }
                else {
                    u.hide_confirm();
                    u.growl_warning("Cover with code " + cellValue + " Already exists");
                }
                });

        } else {
            u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from Cover Grid
         *---------------------------------------------------*/
        //
        $("#btn_remove_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PCV_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'PCV_COV_CODE');

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

                    grid.jqGrid('setCell', row_id, 'PCV_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PCV_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //

        $("#btn_update_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.cover_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'PCV_COV_CODE');

                if (Code == $('#PCV_COV_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'PCV_DFT', $('#PCV_DFT').is(':checked')) ? 'Y' : 'N';
                    grid.jqGrid('setCell', row_id, 'PCV_COV_CODE', $('#PCV_COV_CODE').val());
                    grid.jqGrid('setCell', row_id, 'PCV_SI', $('#PCV_SI').val());
                    grid.jqGrid('setCell', row_id, 'PCV_DEF_RATE', $('#PCV_DEF_RATE').val());
                    grid.jqGrid('setCell', row_id, 'PCV_DEF_PREM', $('#PCV_DEF_PREM').val());
                    grid.jqGrid('setCell', row_id, 'MRC_DFT_PREM', $('#MRC_DFT_PREM').val());

                    u.hide_confirm();
                    u.growl_success(" Cover successfully updated");
                    $("form input[name='PCV_COV_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });
        });


        /*-----------------------------------
        * exporting of the grid to excel Condition & Clauses
        *----------------------------------*/
        $("#export-cover-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cover_grid, ["ID"], "Cover_List_Excel");
        });


        $scope.ccl_id = 0;
        /*--------------------------------------------------
          * add Condition & Clauses
          *------------------------------------------------*/
        //
        $("#btn_add_ccl").on('click', function () {

            if (u.form_validation("#clausesForm")) {

                if ($("input[name='PCC_CLAU_CODE']").val() === "") return u.modal_alert("Please Enter Condition Clause");

                u.modal_confirmation("Are you sure you want to add the Condition & Clause?", function () {

                    var rowIds = $scope.clauses_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.clauses_grid.jqGrid('getCell', currRow, 'PCC_CLAU_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#PCC_CLAU_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#clausesForm");
                        FormData.Id = ++$scope.ccl_id;
                        FormData.PCC_STATUS = "U";
                        FormData.PCC_CRTE_BY = "Admin";
                        FormData.PCC_CRTE_DATE = u.get_date();
                        $scope.clauses_grid.addRowData(FormData.Id, FormData);
                        u.hide_confirm();
                        u.growl_success("Condition & Clause successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Condition & Clause with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Condition & Clauses Grid
        *---------------------------------------------------*/
        //
        $("#btn_remove_ccl").on('click', function () {

            if (u.grid_empty($scope.clauses_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.clauses_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PCC_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'PCC_CLAU_CODE');

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

                    grid.jqGrid('setCell', row_id, 'PCC_STATUS', 'D');
                    $('#' + row_id, '#grdClauses').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdClauses').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PCC_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Condition & Clauses
        *------------------------------*/
        //
        $("#btn_update_ccl").on('click', function () {

            if (u.grid_empty($scope.clauses_grid)) return u.growl_info("Products Condition & Clauses grid is empty");

            if (u.form_validation("#clausesForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Product Condition & Clauses?", function () {

                    var grid = $scope.clauses_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "PCC_CLAU_CODE");

                    if (code === $("input[name='PCC_CLAU_CODE']").val()) {
                        var data = u.parse_form("#clausesForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Product Condition & Clauses updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel Condition & Clauses
         *----------------------------------*/
        $("#export-ccl-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.clauses_grid, ["ID"], "Conditions_Clauses_List_Excel");
        });



        /*--------------------------------------------------
          * add Discount & Loading
          *------------------------------------------------*/
        //
        $("#btn_add_discload").on('click', function () {

            if (u.form_validation("#discloadForm")) {

                if ($("input[name='PLDI_LDI_CODE']").val() === "") return u.modal_alert("Please Select Discount & Loading");

                u.modal_confirmation("Are you sure you want to add the Discount & Loading?", function () {

                    var rowIds = $scope.discload_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.discload_grid.jqGrid('getCell', currRow, 'PLDI_LDI_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#PLDI_LDI_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#discloadForm");
                        FormData.Id = ++$scope.ccl_id;
                        FormData.PLDI_STATUS = "U";
                        FormData.PLDI_CRTE_BY = "Admin";
                        FormData.PLDI_CRTE_DATE = u.get_date();
                        $scope.discload_grid.addRowData(FormData.Id, FormData);
                        u.hide_confirm();
                        u.growl_success("Discount & Loading successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Discount & Loading with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Discount & Loading Grid
        *---------------------------------------------------*/
        //
        $("#btn_remove_discload").on('click', function () {

            if (u.grid_empty($scope.discload_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.discload_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PLDI_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'PLDI_LDI_CODE');

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

                    grid.jqGrid('setCell', row_id, 'PLDI_STATUS', 'D');
                    $('#' + row_id, '#grddiscload').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grddiscload').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PLDI_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Discount & Loading
        *------------------------------*/
        //
        $("#btn_update_discload").on('click', function () {

            if (u.grid_empty($scope.discload_grid)) return u.growl_info("Products Discount & Loading grid is empty");

            if (u.form_validation("#discloadForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Product Discount & Loading?", function () {

                    var grid = $scope.discload_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "PLDI_LDI_CODE");

                    if (code === $("input[name='PLDI_LDI_CODE']").val()) {
                        var data = u.parse_form("#discloadForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Product Discount & Loading updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel Condition & Clauses
         *----------------------------------*/
        $("#export-discload-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.discload_grid, ["ID"], "Discount_Loading_List_Excel");
        });


        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#productForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            //if (u.grid_empty($scope.cover_grid)) {
            //    return u.growl_warning("Please enter Product Cover")
            //}

            if (u.grid_empty($scope.clauses_grid)) {
                return u.growl_warning("Please enter Product Condition & Clauses");
            }

            if (u.grid_empty($scope.discload_grid)) {
                return u.growl_warning("Please enter Product Discount & Loading");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#productForm");
                if (!$scope.searched) productData.PDT_STATUS = "U";

                productData.MST_UWD_PRODUCT_COVERS = u.get_grid_data($scope.cover_grid);

                productData.MST_UWD_PRODUCT_COND_CLAUSES = u.get_grid_data($scope.clauses_grid);

                productData.MST_UWD_PRODUCT_LOAD_DISCOUNT = u.get_grid_data($scope.discload_grid);

                console.log(productData);

                    if (!$scope.saving) {
                        $scope.saving = true;
                        s.save_product(productData, function (responseData) {
                            $scope.saving = false;
                            u.hide_confirm();
                            if (responseData.state) {

                                u.update_grid_status($scope.cover_grid, "PCV_STATUS");

                                u.update_grid_status($scope.clauses_grid, "PCC_STATUS");

                                $scope.edited = false;
                                u.growl_success(responseData.message);

                            } else {
                                u.hide_confirm();
                                u.growl_error(responseData.mesage);
                            }
                        }, function () {
                            u.growl_error("Server Error please try again later.");
                        });
                    }

            });
        });



        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#productForm");
                u.form_reset("#coverForm");
                u.form_reset("#clausesForm");
                u.form_reset("#discloadForm");
                $scope.cover_grid.jqGrid('clearGridData');
                $scope.clauses_grid.jqGrid('clearGridData');
                $scope.discload_grid.jqGrid('clearGridData');
                u.hide_warning();
                u.growl_success("Form successfully cleared");
            });

        });

        function reset_form () {
            u.form_reset("#productForm");
            u.form_reset("#coverForm");
            u.form_reset("#clausesForm");
            u.form_reset("#discloadForm");
            $scope.cover_grid.jqGrid('clearGridData');
            $scope.clauses_grid.jqGrid('clearGridData');
            $scope.discload_grid.jqGrid('clearGridData');
        }

        /*-----------------
       * search grid
       *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["Code", "Motor Product No.", "Status", "index"],
            [
                { name: "PDT_CODE", index: "PDT_CODE", hidden: true },
                { name: "PDT_NAME", index: "PDT_NAME" },
                { name: "PDT_STATUS", index: "PDT_STATUS" },
                { name: "index", id: true, index: "index", hidden: true }
            ],
            function (index) {
                $scope.selected_index = index;
                $scope.search_fill($scope.result[index]);
            },
            function (index) {
                $scope.search_fill($scope.result[index]);
                u.clear_grid_data($scope.search_grid);
                $("#mySearchResultModal").modal("hide");
            });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryProduct").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_product(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                result[i].index = i;
                                $scope.search_grid.addRowData(result[i].index, result[i]);
                            }
                            $("#mySearchResultModal").modal();
                        } else {

                            $scope.search_fill(result[0]);
                        }
                    } else {
                        u.growl_info("Motor Tariff No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Motor Tariff No and try again!");
            }
        });

        $scope.search_fill = function (product) {

            $scope.clauses_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");
            $scope.discload_grid.jqGrid("clearGridData");

            u.fill_form(product, "#productForm");

            //populating child entities
            u.clear_grid_data($scope.clauses_grid);
            for (var i in product.MST_UWD_PRODUCT_COND_CLAUSES) {
                $scope.clauses_grid.addRowData(product.MST_UWD_PRODUCT_COND_CLAUSES[i].PCC_PDT_CODE, product.MST_UWD_PRODUCT_COND_CLAUSES[i]);
            }
            //populating child entities
            u.clear_grid_data($scope.cover_grid);
            for (var i in product.MST_UWD_PRODUCT_COVERS) {
                $scope.cover_grid.addRowData(product.MST_UWD_PRODUCT_COVERS[i].PCV_PDT_CODE, product.MST_UWD_PRODUCT_COVERS[i]);
            }

            //populating child entities
            u.clear_grid_data($scope.discload_grid);
            for (var i in product.MST_UWD_PRODUCT_LOAD_DISCOUNT) {
                $scope.discload_grid.addRowData(product.MST_UWD_PRODUCT_COVERS[i].PLDI_LDI_CODE, product.MST_UWD_PRODUCT_LOAD_DISCOUNT[i]);
            }

        };


        /*--------------------
* Motor Tariff button
*------------------*/
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Product?", function () {
                if ($("input[name='PDT_CLASS']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var product_data = u.parse_form("#productForm");
                        product_data.PDT_STATUS = "D";
                        s.save_product(product_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Product Successfully Deleted");
                                    reset_form();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Tariiff at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        $('#PCV_DEF_PREM').prop('disabled', true);

        $('#PCV_DEF_PREM').css("background", "silver");

        document.getElementById("PCV_DEF_RATE").addEventListener("focusout", rateFunction);
        document.getElementById("PCV_SI").addEventListener("focusout", rateFunction);

        function rateFunction() {
            //alert("Input field lost focus.");
            var defPrem = "";

            defPrem = ($('#PCV_SI').val() * $('#PCV_DEF_RATE').val() * 0.01).toFixed(2);

            $('#PCV_DEF_PREM').val(defPrem);
        }


        /*-----------------------------
* LOV code validation
*---------------------------*/
        u.codeVal("form input[name='PDT_CODE']", "check_product_code");

        u.lovCodeVal("form input[name='PCV_COV_CODE']", "check_cover_code", "form input[name='CVR_NAME']");
        u.lovCodeVal("form input[name='PCC_CLAU_CODE']", "check_conditionsclauses_code", "form input[name='CCL_NAME']");
        u.lovCodeVal("form input[name='PDT_CLASS']", "check_classes_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='PLDI_LDI_CODE']", "check_discload_code", "form input[name='PLDI_LDI_NAME']");
    });

})(window.$, window.service, window.utility, {})