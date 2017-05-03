(function ($, s, u, $scope) {
    $(function () {
       
        $scope.saving = false;
        
        /*-----------------------------
        *subAccount - Main Account  grid definition
        *---------------------------*/
        $scope.SubAcctMain_grid = u.default_grid("#grdAcctMain", "#grdAcctMainPager", "Main Accounts List",
            ["Code", "Name", "Sub Account Code", "Created By", "Created Date", "Modified By", "Modified Date", "Status"],
            [
                { name: "SUB_MAIN_ACCT_CODE", id: true, index: "SUB_MAIN_ACCT_CODE" },
                { name: "SUB_MAIN_ACCT_NAME", index: "SUB_MAIN_ACCT_NAME" },
                { name: "SUB_MAIN_SUB_ACCT_CODE", hidden:true, index: "SUB_MAIN_SUB_ACCT_CODE" },
                { name: "SUB_MAIN_ACCT_CRTE_BY", index: "SUB_MAIN_ACCT_CRTE_BY" },
                { name: "SUB_MAIN_ACCT_CRTE_DATE", index: "SUB_MAIN_ACCT_CRTE_DATE" },
                { name: "SUB_MAIN_ACCT_MOD_BY", index: "SUB_MAIN_ACCT_MOD_BY" },
                { name: "SUB_MAIN_ACCT_MOD_DATE", index: "SUB_MAIN_ACCT_MOD_DATE" },
                { name: "SUB_MAIN_ACCT_STATUS", index: "SUB_MAIN_ACCT_STATUS" }
            ],
                 
            function (id) {
                var grid = $scope.SubAcctMain_grid;

                u.fill_form({
                    SUB_MAIN_ACCT_CODE: grid.jqGrid("getCell", id, "SUB_MAIN_ACCT_CODE"),
                    SUB_MAIN_ACCT_NAME: grid.jqGrid("getCell", id, "SUB_MAIN_ACCT_NAME")
                }, "#acctSubMainForm");

            });


       /*--------------------------------------------------
        * call add function to add records to  SubAcctMain_grid
        *------------------------------------------------*/
        //
        $("#btnAddAcctMain").on("click", function () {

            if (u.form_validation("#acctSubMainForm")) {
                u.modal_confirmation("Are you sure you want to add the Main Account to the grid?", function() {
                    var rowIds = $scope.SubAcctMain_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];
                    var cellValue;

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
                        cellValue = $scope.SubAcctMain_grid.jqGrid("getCell", currRow, "SUB_MAIN_ACCT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#SUB_MAIN_ACCT_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctSubMainForm");

                        formData.SUB_MAIN_ACCT_STATUS = "U";
                        formData.SUB_MAIN_ACCT_CRTE_BY = "Admin";
                        formData.SUB_MAIN_ACCT_CRTE_DATE = u.get_datetime();
                        $scope.SubAcctMain_grid.addRowData(formData.SUB_MAIN_ACCT_CODE, formData);

                        u.growl_success("Main Account successfully added to grid");
                        u.form_reset("#acctSubMainForm");

                    } else {
                        u.modal_alert("Code exists, you cannot add same Code :  " + $("#SUB_MAIN_ACCT_CODE").val());
                    }
                    u.hide_confirm()
                })

            } else {
                u.growl_warning("All fields marked red are required, please fill them");
            }
        });
       
        /*---------------------------------------
         * Delete or Remove Main Account Record
         *-------------------------------------*/
        //
        $("#btnRemoveAcctMain").on("click", function () {

            var grid = $scope.SubAcctMain_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "SUB_MAIN_ACCT_STATUS");


            u.modal_confirmation("Are you sure you want to remove the selected Main Account?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.growl_success("Selected Main Account successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "SUB_MAIN_ACCT_STATUS", "D");
                    $("#" + rowId, "#grdAcctMain").css({ color: "red" });

                    u.growl_success("Selected Main Account successfully marked for deletion, please click on the save button to save changes");

                }
                /*-----------------------------------------------
                 * REstore a record that is marked for deletion
                 *---------------------------------------------*/
                // 
                else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAcctMain").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "SUB_MAIN_ACCT_STATUS", "A");
                    
                    u.growl_success("Selected Main Account successfully restored");
                }
                u.hide_confirm();
            });
           
        });

        /*-----------------------------------------
         * exporting of Main Account grid to excel
         *---------------------------------------*/
        $("#mainAcnt-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.SubAcctMain_grid, ["ID", "HEADER_ID"], "Sub_Account_Main_Account_List_Excel");
        });
       
        /*-----------------------------
       *subAccount - Currecency  grid definition
       *---------------------------*/
        $scope.SubAcctCurr_grid = u.default_grid("#grdAcctCurrency", "#grdAcctCurrencyPager", "Currency List",
            ["Code", "Name", "Sub Account Code", "Created By", "Created Date", "Modified By", "Modified Date", "Status"],
            [
                { name: "SUB_CURR_CODE", id: true, index: "SUB_CURR_CODE" },
                { name: "SUB_CURR_NAME", index: "SUB_CURR_NAME" },
                { name: "SUB_CURR_SUB_CODE", hidden: true, index: "SUB_CURR_SUB_CODE" },
                { name: "SUB_CURR_CRTE_BY", index: "SUB_CURR_CRTE_BY" },
                { name: "SUB_CURR_CRTE_DATE", index: "SUB_CURR_CRTE_DATE" },
                { name: "SUB_CURR_MOD_BY", index: "SUB_CURR_MOD_BY" },
                { name: "SUB_CURR_MOD_DATE", index: "SUB_CURR_MOD_DATE" },
                { name: "SUB_CURR_STATUS", index: "SUB_CURR_STATUS" }
            ],

            function (selId) {
                var grid = $scope.SubAcctCurr_grid;

                u.fill_form({
                    SUB_CURR_CODE: grid.jqGrid("getCell", selId, "SUB_CURR_CODE"),
                    SUB_CURR_NAME: grid.jqGrid("getCell", selId, "SUB_CURR_NAME")
                }, "#acctCurrencyForm");

            });





        /*--------------------------------------------------
         * call add function to add records to  Currency Grid
         *------------------------------------------------*/
        //
        $("#btnAddAcctCurrency").on("click", function () {

            if (u.form_validation("#acctCurrencyForm")) {

                u.modal_confirmation("Are you sure you want to add the Currency to the grid?", function() {
                    var rowIds = $scope.SubAcctCurr_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];
                    var cellValue;

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

                        cellValue = $scope.SubAcctCurr_grid.jqGrid("getCell", currRow, "SUB_CURR_CODE");

                        code.push(cellValue);

                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#SUB_CURR_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctCurrencyForm");

                        formData.SUB_CURR_STATUS = "U";
                        formData.SUB_CURR_CRTE_BY = "Admin";
                        formData.SUB_CURR_CRTE_DATE = u.get_datetime();
                        $scope.SubAcctCurr_grid.addRowData(formData.SUB_CURR_CODE, formData);

                        u.growl_success("Currency successfully added to grid")
                        u.form_reset("#acctCurrencyForm")
                    }

                    else {
                        u.modal_alert("Code exists, you cannot add same Code : " + $("#SUB_CURR_CODE").val());
                    }
                    u.hide_confirm();
                });

            }
            else {
                u.growl_warning("All the fields marked red are required, please fill them")
            }
        });

        /*----------------------------------------------
         * Delete or Remove Sub Account Currency Record
         *--------------------------------------------*/
        //
        $("#btnRemoveAcctCurrency").on("click", function () {

            var grid = $scope.SubAcctCurr_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "SUB_CURR_STATUS");



            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the selected Currency?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.growl_success("Selected Currency successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "SUB_CURR_STATUS", "D");
                    $("#" + rowId, "#grdAcctMain").css({ color: "red" });

                    u.growl_success("Selected Currency successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAcctMain").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "SUB_CURR_STATUS", "A");
                    
                    u.growl_success("Selected Currency successfully deleted");
                }
                u.hide_confirm();
            });


        });


        /*--------------------------------
         * exporting of the grid to excel
         *------------------------------*/
        $("#acntDetail-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.SubAcctCurr_grid, ["ID", "HEADER_ID"], "Sub_Account_Currency_List_Excel");
        });

        /*----------------------
        * LOV initialization
        *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOV", "#grdLOVPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function (e) {
            $scope.dialog_data = $(this).data("dialog");

            switch ($scope.dialog_data.type) {

                case "btnSubAcctCurrLov":
                    $scope.lov.call_dialog("Select Currency", "getLovAcctCurrency", $scope.dialog_data);
                    break;

                case "btnSubAcctMainLov":
                    $scope.lov.call_dialog("Select Main Account", "getLovMainAcct", $scope.dialog_data);
                    break;
            }
        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            if (!u.form_validation("#subAcctForm")) return u.growl_warning("Fields marked red are required");
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*
                 * sub account header data
                 */
                var subAccount = u.parse_form("#subAcctForm");

                subAccount["MS_ACCT_SUB_CURRERNCY"] = u.get_grid_data($scope.SubAcctCurr_grid);
                subAccount["MS_ACCT_SUB_MAIN_ACCOUNT"] = u.get_grid_data($scope.SubAcctMain_grid);


                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(subAccount);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveSubAccount(subAccount, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {

                            u.update_grid_status($scope.SubAcctCurr_grid, "SUB_CURR_STATUS");
                            u.update_grid_status($scope.SubAcctMain_grid, "SUB_MAIN_ACCT_STATUS");

                            $("#SUB_ACCT_STATUS").val("A");

                            u.hide_confirm();
                            u.growl_success(responseData.message);
                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function () {
                        $scope.saving = false;
                        u.hide_confirm();
                    });
                }
            });
        });




        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btnDelete").on("click", function () {
            u.modal_confirmation("Are you sure you want Delete the Record?", function () {
                var subAccount = u.parse_form("#subAcctForm");
                subAccount["SUB_ACCT_STATUS"] = "D";
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveSubAccount(subAccount, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            $scope.reset();
                            u.hide_confirm();
                            u.growl_success("Sub Account Successfully deleted");
                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function () {
                        $scope.saving = false;
                        u.hide_confirm();
                    });
                }
            });

        });
        

        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btnReset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", $scope.reset);
        });

        $scope.reset = function() {
            u.form_reset("#subAcctForm");
            u.clear_grid_data($scope.SubAcctCurr_grid);
            u.clear_grid_data($scope.SubAcctMain_grid);
            u.hide_confirm();
        };

        /*------------------------------------------
        * LOV code validation 
        *----------------------------------------*/
        // Currecny
        u.lovCodeVal("#SUB_CURR_CODE", "check_currency_lov_code", "#SUB_CURR_NAME");

        //Main Account

        u.lovCodeVal("#SUB_MAIN_ACCT_CODE", "check_mainAcct_lov_code", "#SUB_MAIN_ACCT_NAME");
    
        //Sub Account

        u.codeVal("#SUB_ACCT_CODE", "chceck_SubAcct_code", "#SUB_ACCT_CODE_NAME");


        /*------------------------------------------
         * Tabs Layout function call using jQuery 
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

        //search grid
        $scope.searchGrid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["Index", "Sub Account Code", "Sub Account Nmae"],
            [
                { name: "index", id: true, index: "index", hidden: true },
                { name: "SUB_ACCT_CODE", index: "SUB_ACCT_CODE" },
                { name: "SUB_ACCT_NAME", index: "SUB_ACCT_NAME" }
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

        /*---------------------
         * Sub Account Search
         *-------------------*/
        $("#btnQuerySubAccount").click(function () {

            if (!u.field_empty("#txtSearch")) {

                s.searchSubAccount($("#txtSearch").val(),
                    function (result) {
                        $scope.result = result;
                        $scope.searched = true;

                        if (result && result.length) {

                            if (result.length === 1) {
                                $scope.search_fill(result[0]);
                            } else if (result.length > 1) {
                                /*---------------------------------------------------------------------
                                 * display multiple results in the search modal for the user to choose
                                 *-------------------------------------------------------------------*/
                                //populate search modal grid
                                for (var i in result) {
                                    result[i].index = i;
                                    $scope.searchGrid.addRowData(result[i].index, result[i]);
                                }
                                //show modal
                                $("#mySearchResultModal").modal();


                                //fill form and grids with the selected Payment
                                $("#search-ok").click(function () {
                                    $scope.search_fill(result[$scope.selected_index]);
                                    $("#mySearchResultModal").modal("hide");
                                    u.clear_grid_data($scope.searchGrid);
                                });
                            } else if (result.length <= 0) {
                                u.growl_info("The Payment does not Exist in the database.");
                            }
                        } else {
                            u.growl_info("The Payment does not Exist in the database.");
                        }

                    });
            } else {
                u.growl_info("Please enter the Payment code or Payment name to find a Payment");
            }
        });

        //clear grid after the grid is closed
        $("#mySearchResultModal .close, #search-close").click(function () {
            u.clear_grid_data($scope.searchGrid);
        });


        $scope.search_fill = function (result) {
            if (result) {
                /*change state*/
                $scope.searched = true;
                $scope.fresh = false;
                $scope.edited = false;

                /*------------------------
                 * clear data from grids
                 *-----------------------*/
                $scope.SubAcctCurr_grid.jqGrid("clearGridData");
                $scope.SubAcctMain_grid.jqGrid("clearGridData");

                /*----------------------------------------------------
                 * populate Sub Account header Form with search results
                 *--------------------------------------------------*/
                u.fill_form(result, "#subAcctForm");


                /*-------------------------------------
                 * populate Sub Account Main Account grid
                 *-----------------------------------*/
                for (var i in result.MS_ACCT_SUB_MAIN_ACCOUNT) {
                    result.MS_ACCT_SUB_MAIN_ACCOUNT[i]["SUB_MAIN_ACCT_NAME"] = result.MS_ACCT_SUB_MAIN_ACCOUNT[i]["MS_ACCT_MAIN_ACCOUNT"]["ACCT_NAME"];
                    $scope.SubAcctMain_grid.addRowData(result.MS_ACCT_SUB_MAIN_ACCOUNT[i]["SUB_MAIN_ACCT_CODE"], result.MS_ACCT_SUB_MAIN_ACCOUNT[i]);
                }

                /*-------------------------------------
                 * populate Sub Account currency grid
                 *-----------------------------------*/
                for (var i in result.MS_ACCT_SUB_CURRERNCY) {
                    result.MS_ACCT_SUB_CURRERNCY[i]["SUB_CURR_NAME"] = result.MS_ACCT_SUB_CURRERNCY[i]["MS_INS_CURRENCY"]["CUR_FULL_NAME"];
                    $scope.SubAcctCurr_grid.addRowData(result.MS_ACCT_SUB_CURRERNCY[i]["SUB_CURR_CODE"], result.MS_ACCT_SUB_CURRERNCY[i]);
                }

            } else {
                u.growl_info("The Sub Account your are searching for is invalid please try a different Sub Account");
            }
        }

    });
})(window.jQuery, window.service, window.utility, {});