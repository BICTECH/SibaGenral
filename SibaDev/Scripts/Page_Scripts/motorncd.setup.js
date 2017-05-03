(function ($, s, u, $scope) {
    $(function () {

        // Cover Grid
        $scope.ncdDtls_grid = u.default_grid("#grdNCDDetails", "#grdNCDDetailsPager", "No Claim Discount List",
            ['Product Code', 'From Year', 'To Year', 'Percentage', 'Created by', 'Created Date', 'Status','ID'],
            [
                { name: 'NCD_DTLS_PRD_CODE', index: 'NCD_DTLS_PRD_CODE', width: 150 },
                { name: 'NCD_DTLS_FROM_YEAR', hidden: false, index: 'NCD_DTLS_FROM_YEAR', width: 150 },
                { name: 'NCD_DTLS_TO_YEAR', index: 'NCD_DTLS_TO_YEAR', width: 100 },
                { name: 'NCD_DTLS_PERC', index: 'NCD_DTLS_PERC' },
                { name: 'NCD_DTLS_CRTE_BY', index: 'NCD_DTLS_CRTE_BY'},
                { name: 'NCD_DTLS_CRTE_DATE', index: 'NCD_DTLS_CRTE_DATE'},
                { name: 'NCD_DTLS_STATUS', index: 'NCD_DTLS_STATUS'},
                { name: 'NCD_DTLS_SYS_ID', hidden: true, index: 'NCD_DTLS_SYS_ID' },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.ncdDtls_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='NCD_DTLS_PRD_CODE']").data("update", true);
                u.fill_form({
                    NCD_DTLS_PRD_CODE: grid.jqGrid('getCell', sel_id, 'NCD_DTLS_PRD_CODE'),
                    NCD_DTLS_FROM_YEAR: grid.jqGrid('getCell', sel_id, 'NCD_DTLS_FROM_YEAR'),
                    NCD_DTLS_TO_YEAR: grid.jqGrid('getCell', sel_id, 'NCD_DTLS_TO_YEAR'),
                    NCD_DTLS_PERC: grid.jqGrid('getCell', sel_id, 'NCD_DTLS_PERC'),
                    
                }, "#ncdDetailsForm");
            }),


        // Condition & Clauses Grid
        $scope.clmFreebasis_grid = u.default_grid("#grdClmFreeBasis", "#grdClmFreeBasisPager", "Claim Free Basis List",
            ['Running Basis', 'Years', 'No. Claims', 'Step back Years', 'Created by', 'Created Date', 'Status', 'ID'],
            [
                { name: 'CFB_RUN_BASIS', index: 'CFB_RUN_BASIS', width: 150 },
                { name: 'CFB_RUN_YEAR', hidden: false, index: 'CFB_RUN_YEAR', width: 150 },
                { name: 'CFB_NO_CLMS', index: 'CFB_NO_CLMS', width: 100 },
                { name: 'CFB_STP_BACK', index: 'CFB_STP_BACK' },
                { name: 'CFB_CRTE_BY', index: 'CFB_CRTE_BY' },
                { name: 'CFB_CRTE_DATE', index: 'CFB_CRTE_DATE' },
                { name: 'CFB_STATUS', index: 'CFB_STATUS' },
                { name: 'CFB_SYS_ID', hidden: true, index: 'CFB_SYS_ID' },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.clmFreebasis_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CFB_RUN_BASIS']").data("update", true);
                u.fill_form({
                    CFB_RUN_BASIS: grid.jqGrid('getCell', sel_id, 'CFB_RUN_BASIS'),
                    CFB_RUN_YEAR: grid.jqGrid('getCell', sel_id, 'CFB_RUN_YEAR'),
                    CFB_NO_CLMS: grid.jqGrid('getCell', sel_id, 'CFB_NO_CLMS'),
                    CFB_STP_BACK: grid.jqGrid('getCell', sel_id, 'CFB_STP_BACK'),

                }, "#clmfreeBasisForm");
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
                case "btn_product":
                    $scope.lov.call_dialog("Select Product", "get_lov_product", $scope.dialog_data);
                    break;
              
            }
        });
        $scope.cov_id = 0;
        /*--------------------------------------------------
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_ncd").on('click', function () {

            if (u.form_validation("#ncdDetailsForm")) {
                if ($("input[name='NCD_DTLS_PRD_CODE']").val() === "") return u.modal_alert("Please enter Product Code");

                u.modal_confirmation("Are you sure you want to add the No Claim Discount Details ?", function () {

                    var rowIds = $scope.ncdDtls_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.ncdDtls_grid.jqGrid('getCell', currRow, 'NCD_DTLS_PRD_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($("input[name='NCD_DTLS_PRD_CODE']").val(), Code) < 0) {

                    var FormData = u.parse_form("#ncdDetailsForm");
                    FormData.NCD_DTLS_STATUS = "U"
                    FormData.NCD_DTLS_CRTE_BY = "Admin";
                    FormData.NCD_DTLS_CRTE_DATE = u.get_date();
                    $scope.ncdDtls_grid.addRowData(FormData.NCD_DTLS_PRD_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("No Claim Discount Details successfully added to grid");
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
        $("#btn_remove_ncd").on('click', function () {

            if (u.grid_empty($scope.ncdDtls_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.ncdDtls_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'NCD_DTLS_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'NCD_DTLS_PRD_CODE');

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

                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //

        $("#btn_update_ncd").on('click', function () {

            if (u.grid_empty($scope.ncdDtls_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.ncdDtls_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'NCD_DTLS_PRD_CODE');

                if (Code == $('#NCD_DTLS_PRD_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_PRD_CODE', $('#NCD_DTLS_PRD_CODE').val());
                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_FROM_YEAR', $('#NCD_DTLS_FROM_YEAR').val());
                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_TO_YEAR', $('#NCD_DTLS_TO_YEAR').val());
                    grid.jqGrid('setCell', row_id, 'NCD_DTLS_PERC', $('#NCD_DTLS_PERC').val());

                    u.hide_confirm();
                    u.growl_success(" No Claim Discount Details successfully updated");
                    $("form input[name='NCD_DTLS_PRD_CODE']").data("update", false);
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
        $("#export-ncd-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.ncdDtls_grid, ["ID"], "No_Claim_Discount_List_Excel");
        });


        $scope.ccl_id = 0;
        /*--------------------------------------------------
          * add Condition & Clauses
          *------------------------------------------------*/
        //
        $("#btn_add_cfb").on('click', function () {

            if (u.form_validation("#clmfreeBasisForm")) {

                if ($("input[name='CFB_RUN_YEAR']").val() === "") return u.modal_alert("Please select Claim Free Basis");

                u.modal_confirmation("Are you sure you want to add the Claim Free Basis?", function () {

                    var rowIds = $scope.clmFreebasis_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.clmFreebasis_grid.jqGrid('getCell', currRow, 'CFB_RUN_BASIS');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CFB_RUN_BASIS').val(), Code) < 0) {

                        var FormData = u.parse_form("#clmfreeBasisForm");
                        FormData.Id = ++$scope.ccl_id;
                        FormData.CFB_STATUS = "U";
                        FormData.CFB_CRTE_BY = "Admin";
                        FormData.CFB_CRTE_DATE = u.get_date();
                        $scope.clmFreebasis_grid.addRowData(FormData.Id, FormData);
                        u.hide_confirm();
                        u.growl_success("Claim Free Basis successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Claim Free Basis with code " + cellValue + " Already exists");
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
        $("#btn_remove_cfb").on('click', function () {

            if (u.grid_empty($scope.clmFreebasis_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.clmFreebasis_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CFB_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CFB_RUN_BASIS');

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

                    grid.jqGrid('setCell', row_id, 'CFB_STATUS', 'D');
                    $('#' + row_id, '#grdClauses').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdClauses').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CFB_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Condition & Clauses
        *------------------------------*/
        //
        $("#btn_update_cfb").on('click', function () {

            if (u.grid_empty($scope.clmFreebasis_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.clmFreebasis_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'CFB_RUN_BASIS');

                if (Code == $('#CFB_RUN_BASIS').val()) {

                    grid.jqGrid('setCell', row_id, 'CFB_RUN_YEAR', $('#CFB_RUN_YEAR').val());
                    grid.jqGrid('setCell', row_id, 'CFB_NO_CLMS', $('#CFB_NO_CLMS').val());
                    grid.jqGrid('setCell', row_id, 'CFB_STP_BACK', $('#CFB_STP_BACK').val());

                    u.hide_confirm();
                    u.growl_success(" Claim Free Basis successfully updated");
                    $("form input[name='CFB_RUN_BASIS']").data("update", false);
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
        $("#export-cfb-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.clmFreebasis_grid, ["ID"], "Claim_Free_Basis_List_Excel");
        });


        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#ncdForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.ncdDtls_grid)) {
                return u.growl_warning("Please enter No Claim Discount Details")
            }

            if (u.grid_empty($scope.clmFreebasis_grid)) {
                return u.growl_warning("Please enter Claim Free Basis");
            }
      

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var ncdData = u.parse_form("#ncdForm");
                if (!$scope.searched) ncdData.NCD_STATUS = "U";

                ncdData.MS_NCD_DTLS = u.get_grid_data($scope.ncdDtls_grid);

                ncdData.MS_NCD_BASIS = u.get_grid_data($scope.clmFreebasis_grid);              

                console.log(ncdData);

                    if (!$scope.saving) {
                        $scope.saving = true;
                        s.save_ncd(ncdData, function (responseData) {
                            $scope.saving = false;
                            u.hide_confirm();
                            if (responseData.state) {

                                u.update_grid_status($scope.ncdDtls_grid, "NCD_DTLS_STATUS");

                                u.update_grid_status($scope.clmFreebasis_grid, "CFB_STATUS");

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
                u.form_reset("#ncdForm");
                u.form_reset("#ncdDetailsForm");
                u.form_reset("#clmfreeBasisForm");
         
                $scope.ncdDtls_grid.jqGrid('clearGridData');
                $scope.clmFreebasis_grid.jqGrid('clearGridData');
                u.hide_warning();
                u.growl_success("Form successfully cleared");
            });

        });

        function reset_form () {
            u.form_reset("#ncdForm");
            u.form_reset("#ncdDetailsForm");
            u.form_reset("#clmfreeBasisForm");

            $scope.ncdDtls_grid.jqGrid('clearGridData');
            $scope.clmFreebasis_grid.jqGrid('clearGridData');
        }

        /*-----------------
       * search grid
       *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["Code", "Motor Product No.", "Status", "index"],
            [
                { name: "NCD_CODE", index: "NCD_CODE", hidden: true },
                { name: "NCD_DESC", index: "NCD_DESC" },
                { name: "NCD_STATUS", index: "NCD_STATUS" },
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
        $("#btnQueryNCD").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_ncd(query, function (result) {
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
                        u.growl_info("No Claim Discount not found, please make sure you enter the correct Code");
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

            $scope.clmFreebasis_grid.jqGrid("clearGridData");
            $scope.ncdDtls_grid.jqGrid("clearGridData");

            u.fill_form(product, "#ncdForm");

            //populating child entities
            u.clear_grid_data($scope.clmFreebasis_grid);
            for (var i in product.MS_NCD_BASIS) {
                $scope.clmFreebasis_grid.addRowData(product.MS_NCD_BASIS[i].CFB_RUN_BASIS, product.MS_NCD_BASIS[i]);
            }
            //populating child entities
            u.clear_grid_data($scope.ncdDtls_grid);
            for (var i in product.MS_NCD_DTLS) {
                $scope.ncdDtls_grid.addRowData(product.MS_NCD_DTLS[i].NCD_DTLS_PRD_CODE, product.MS_NCD_DTLS[i]);
            }

        
        };


        /*--------------------
* Motor Tariff button
*------------------*/
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Product?", function () {
                if ($("input[name='NCD_CODE']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var product_data = u.parse_form("#ncdForm");
                        product_data.NCD_STATUS = "D";
                        s.save_ncd(product_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("No Claim Discount Successfully Deleted");
                                    reset_form();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete No Claim Discount at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        /*-----------------------------
* LOV code validation
*---------------------------*/
        u.codeVal("form input[name='PDT_CODE']", "check_product_code");

        u.lovCodeVal("form input[name='NCD_DTLS_PRD_CODE']", "check_cover_code", "form input[name='CVR_NAME']");
        u.lovCodeVal("form input[name='CFB_RUN_BASIS']", "check_conditionsclauses_code", "form input[name='CCL_NAME']");
        u.lovCodeVal("form input[name='PDT_CLASS']", "check_classes_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='PLDI_LDI_CODE']", "check_discload_code", "form input[name='PLDI_LDI_NAME']");
    });

})(window.$, window.service, window.utility, {})