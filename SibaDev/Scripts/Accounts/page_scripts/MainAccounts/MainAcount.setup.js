(function ($, s, u, $scope) {
    $(function () {
       
        /*---------------------
         * grid definitions
         *-------------------*/
        $scope.saving = false;
        $scope.searched = false;

        /*-----------------------------
         * Main Account grid definition
         *---------------------------*/
        $scope.MainAccount_grid = u.default_grid("#grdMainAccount", "#grdBenitsPager", "Main Accounts List",
            ["Code", "Name", "Description", "Account Category", "Category Name",
                "Acct Main", "Accoun Open", "Account Type","Created By", "Created Date", "Modified By", "Modified Date", "Status"],
            [
                { name: "ACCT_CODE", id: true, index: "ACCT_CODE" },
                { name: "ACCT_NAME", index: "ACCT_NAME" },
                { name: "ACCT_DESC", index: "ACCT_DESC" },
                { name: "ACCT_CATEGORY", index: "ACCT_CATEGORY" },
                { name: "ACCT_CAT_NAME", index: "ACCT_CAT_NAME" },
                { name: "ACCT_MAIN", index: "ACCT_MAIN" },
                { name: "ACCT_OPEN", index: "ACCT_OPEN" },
                { name: "ACCT_TYPE", index: "ACCT_TYPE" },
                { name: "ACCT_CRTE_BY", index: "ACCT_CRTE_BY" },
                { name: "ACCT_CRTE_DATE", index: "ACCT_CRTE_DATE" },
                { name: "ACCT_MOD_BY", index: "ACCT_MOD_BY" },
                { name: "ACCT_MOD_DATE", index: "ACCT_MOD_DATE" },
                { name: "ACCT_STATUS", index: "ACCT_STATUS" }
            ],

            function (id) {
                var grid = $scope.MainAccount_grid;

                u.fill_form({
                    ACCT_CODE: grid.jqGrid("getCell", id, "ACCT_CODE"),
                    ACCT_NAME: grid.jqGrid("getCell", id, "ACCT_NAME"),
                    ACCT_DESC: grid.jqGrid("getCell", id, "ACCT_DESC"),
                    ACCT_INS_SRCE: grid.jqGrid("getCell", id, "ACCT_INS_SRCE"),
                    ACCT_STATUS: grid.jqGrid("getCell", id, "ACCT_STATUS")
                }, "#mainAcctForm");

            });
        
        /*----------------------------- 
        * Main Account currency grid definition
        *---------------------------*/
        $scope.AcctCurrency_grid = u.default_grid("#grdAcctCurrency", "#grdBenitsPager", "Main Accounts List",
            ["Code", "Name", "Created By", "Created Date", "Modified By", "Modified Date", "Status","ID"],
            [
                { name: "ACUR_CODE", id: true, index: "ACUR_CODE" },
                { name: "ACUR_NAME", index: "ACUR_NAME", width: 400 },
                { name: "ACUR_CRTE_BY", index: "ACUR_CRTE_BY" },
                { name: "ACUR_CRTE_DATE", index: "ACUR_CRTE_DATE" },
                { name: "ACUR_MOD_BY", index: "ACUR_MOD_BY" },
                { name: "ACUR_MOD_DATE", index: "ACUR_MOD_DATE" },
                { name: "ACUR_STATUS", index: "ACUR_STATUS" },
                { name: "ACUR_SYS_ID", index: "ACUR_SYS_ID", hidden: true },
            ],

            function (id) {
                var grid = $scope.AcctCurrency_grid;

                u.fill_form({
                    ACUR_CODE: grid.jqGrid("getCell", id, "ACUR_CODE"),
                    ACUR_NAME: grid.jqGrid("getCell", id, "ACUR_NAME"),
                    ACUR_DESC: grid.jqGrid("getCell", id, "ACUR_DESC"),
                    ACUR_INS_SRCE: grid.jqGrid("getCell", id, "ACUR_INS_SRCE"),
                    ACUR_STATUS: grid.jqGrid("getCell", id, "ACUR_STATUS")
                }, "#acctCurrencyForm");

            });

        /*-----------------------------------------------------------------
         * call add function to add records to  main account currency grid
         *---------------------------------------------------------------*/
        //
        $("#btnAddAcctCurrency").on("click", function () {

            if (u.form_validation("#acctCurrencyForm")) {
                u.modal_confirmation("Are you sure you want to add Main Account to the grid?", function() {
                    var rowIds = $scope.AcctCurrency_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];
                    /*------------------------------------------------------------
                     * iterate through the rows and check duplicate each of them
                     *----------------------------------------------------------*/
                    // 
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        /*------------------------------------------------
                         * get value of the cell or column in an array
                         *----------------------------------------------*/

                        code.push($scope.AcctCurrency_grid.jqGrid("getCell", currRow, "ACUR_CODE"));

                    }



                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#ACUR_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctCurrencyForm");
                        formData.ACUR_STATUS = "U";
                        formData.ACUR_CRTE_BY = "Admin";
                        formData.ACUR_CRTE_DATE = u.get_datetime();
                        $scope.AcctCurrency_grid.addRowData(formData.ACUR_CODE, formData);
                        u.form_reset("#acctCurrencyForm");
                    } else {
                        u.modal_alert("currency Code exists for this Account, you cannot add same Code :  " + $("#ACUR_CODE").val());
                    }
                    u.hide_confirm();
                })
            }
            else {
                u.growl_warning("All fields that are marked red are required, please fill them");

            }
        });

        /*---------------------------------------------------------------------
         * Remove record or Mark for deletion from main account currency grid
         *-------------------------------------------------------------------*/

        $("#btnRemoveAcctCurrency").on("click", function () {
            if (u.grid_empty($scope.AcctCurrency_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.AcctCurrency_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "ACUR_STATUS");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_success("Selected Currency successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "ACUR_STATUS", "D");
                    $("#" + rowId, "#grdAcctCurrency").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Currency successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAcctCurrency").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "ACUR_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Currency successfully restored");
                }

            });

        });

        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#exportCurrency").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.AcctCurrency_grid, ["ID"], "Main_Account_Currency_List_Excel");
        });
       
        /*-----------------------------
        * Main Account company grid definition
        *---------------------------*/
        $scope.AcctCompany_grid = u.default_grid("#grdAcctCompany", "#grdBenitsPager", "Main Accounts List",
            ["Code", "Name", "Created By", "Created Date", "Modified By", "Modified Date", "Status","ID"],
            [
                { name: "ACOM_CODE", id: true, index: "ACOM_CODE" },
                { name: "ACOM_NAME", index: "ACOM_NAME", width: 400 },
                { name: "ACOM_CRTE_BY", index: "ACOM_CRTE_BY" },
                { name: "ACOM_CRTE_DATE", index: "ACOM_CRTE_DATE" },
                { name: "ACOM_MOD_BY", index: "ACOM_MOD_BY" },
                { name: "ACOM_MOD_DATE", index: "ACOM_MOD_DATE" },
                { name: "ACOM_STATUS", index: "ACOM_STATUS" },
                { name: "ACOM_SYS_ID", index: "ACOM_SYS_ID", hidden: true }
            ],

            function (id) {
                var grid = $scope.AcctCompany_grid;

                u.fill_form({
                    ACOM_CODE: grid.jqGrid("getCell", id, "ACOM_CODE"),
                    ACOM_NAME: grid.jqGrid("getCell", id, "ACOM_NAME"),
                    ACOM_DESC: grid.jqGrid("getCell", id, "ACOM_DESC"),
                    ACOM_INS_SRCE: grid.jqGrid("getCell", id, "ACOM_INS_SRCE"),
                    ACOM_STATUS: grid.jqGrid("getCell", id, "ACOM_STATUS")
                }, "#acctCompanyForm");

            });

        /*------------------------------------------------------------
     * call add function to add records to main account company grid
     *--------------------------------------------------------------*/
        //
        $("#btnAddAcctCompany").on("click", function () {

            if (u.form_validation("#acctCompanyForm")) {
                u.modal_confirmation("Are you sure you want to add Company to the grid?", function() {
                    var rowIds = $scope.AcctCompany_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

                    /*------------------------------------------------------------
                     * iterate through the rows and check duplicate each of them
                     *----------------------------------------------------------*/
                    // 
                    for (var i = 0, len = rowIds.length; i < len; i++)  code.push($scope.AcctCompany_grid.jqGrid("getCell", rowIds[i], "ACOM_CODE"));

                    
                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#ACOM_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctCompanyForm");

                        formData.ACOM_STATUS = "U";
                        formData.ACOM_CRTE_BY = "Admin";
                        formData.ACOM_CRTE_DATE = u.get_datetime();
                        $scope.AcctCompany_grid.addRowData(formData.ACOM_CODE, formData);
                        u.form_reset("#acctCompanyForm");
                    }

                    else {
                        u.modal_alert("Code exists, you cannot add same Code :  " + $("#ACOM_CODE").val());
                    }
                    u.hide_confirm()
                })

            }
            else {
                u.growl_warning("The fields marked red are required, please fill them.")
            }
        });


        /*--------------------------------------------------------------------
         * Remove record or Mark for deletion from main account company grid
         *-----------------------------------------------------------------*/
        $("#btnRemoveAcctCompany").on("click", function () {
            if (u.grid_empty($scope.AcctCompany_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.AcctCompany_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "ACOM_STATUS");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_success("Selected Company successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "ACOM_STATUS", "D");
                    $("#" + rowId, "#grdAcctCompany").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Company successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAcctCompany").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "ACOM_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Company successfully restored");
                }

            });

        });

        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#exportCompany").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.AcctCompany_grid, ["ID"], "Main_Account_Company_List_Excel");
        });

        /*-----------------------------
        * Save/Update Data
        *---------------------------*/

        $("#btnSave").on("click", function () {
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-------------------------
                 * obtain Main Account data
                 *-----------------------*/
                //
                var mainAcctData = u.parse_form("#mainAcctForm");

                /*-------------------------
                 * Main Account Currency data
                 *-----------------------*/
                //
                mainAcctData.MS_MAIN_ACCT_CURRENCY = u.get_grid_data($scope.AcctCurrency_grid);

                /*-------------------------   
                 * Main Account Company
                 *-----------------------*/
                //
                mainAcctData.MS_MAIN_ACCT_COMPANY = u.get_grid_data($scope.AcctCompany_grid);

                console.log(mainAcctData);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.SaveMainAccount(mainAcctData, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {

                            /*-------------------------------------------
                             * main account currency grid atatus update
                             *-----------------------------------------*/
                            u.update_grid_status($scope.AcctCurrency_grid, "ACUR_STATUS")

                            /*-------------------------------------------
                             * main account company grid atatus update
                             *-----------------------------------------*/
                            u.update_grid_status($scope.AcctCompany_grid, "ACOM_STATUS")

                            $("#ACCT_STATUS").val("A");

                            u.growl_success(responseData.message);
                        } else {
                            u.growl_error(responseData.message);
                        }
                        u.hide_confirm();
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
            // u.modal_confirmation("Are you sure you want to clear all data from the form?");

            u.modal_confirmation("Are you sure you want to Remove the record ?", function (e) {

                u.form_reset("#mainAcctForm");
                u.form_reset("#acctCurrencyForm");
                u.form_reset("#acctCompanyForm");
                u.clear_grid_data($scope.MainAccount_grid);
                u.clear_grid_data($scope.AcctCurrency_grid);
                u.clear_grid_data($scope.AcctCompany_grid);
                u.hide_confirm();
            });

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

                case "btnAcctCat":
                    $scope.lov.call_dialog("Select Account Category", "getLovAcctCategory", $scope.dialog_data);
                    break;

                case "btnAcctCurr":
                    $scope.lov.call_dialog("Select Currency", "getLovAcctCurrency", $scope.dialog_data);
                    break;

                case "btnAcctCompany":
                    $scope.lov.call_dialog("Select Currency", "getLovAcctCompany", $scope.dialog_data);
                    break;
                }
        });

       
        //search grid
        $scope.searchGrid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["Index", "Txn Document Code", "Txn Document Name"],
            [
                { name: "index", id: true, index: "index", hidden: true },
                { name: "ATD_CODE", index: "ATD_CODE" },
                { name: "ATD_NAME", index: "ATD_NAME", wdith: 500 }
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

        /*---------------------------
         * Main Account Search
         *-------------------------*/
        $("#btnQueryMainAcct").click(function () {

            if (!u.field_empty("#txtSearch")) {

                s.searchMainAccount($("#txtSearch").val(),
                    function (result) {
                        $scope.result = result;
                        /*-------------------------------
                         * clear grid before populating
                         *-----------------------------*/
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


                                //fill form and grids with the selected Main Account
                                $("#search-ok").click(function () {
                                    $scope.search_fill(result[$scope.selected_index]);
                                    $("#mySearchResultModal").modal("hide");
                                    u.clear_grid_data($scope.searchGrid);
                                });
                            } else if (result.length <= 0) {
                                u.growl_info("The Main Account does not Exist in the database.");
                            }
                        } else {
                            u.growl_info("The Main Account does not Exist in the database.");
                        }

                    });
            } else {
                u.growl_info("Please enter the Main Account code or Main Account name to find a Main Account");
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
                $scope.AcctCompany_grid.jqGrid("clearGridData");
                $scope.AcctCurrency_grid.jqGrid("clearGridData");

                /*----------------------------------------------------
                 * populate Main Account header Form with search results
                 *--------------------------------------------------*/
                u.fill_form(result, "#mainAcctForm");



                /*-------------------------------------
                 * populate Main Account currency grid
                 *-----------------------------------*/
                for (var i in result.MS_MAIN_ACCT_CURRENCY) {
                    result.MS_MAIN_ACCT_CURRENCY[i]["ACUR_NAME"] = result.MS_MAIN_ACCT_CURRENCY[i]["MS_INS_CURRENCY"]["CUR_FULL_NAME"];
                    $scope.AcctCurrency_grid.addRowData(result.MS_MAIN_ACCT_CURRENCY[i]["ACUR_CODE"], result.MS_MAIN_ACCT_CURRENCY[i]);
                }

                /*-------------------------------------
                 * populate Main Account company grid
                 *-----------------------------------*/
                for (var i in result.MS_MAIN_ACCT_COMPANY) {
                    result.MS_MAIN_ACCT_COMPANY[i]["ACOM_NAME"] = result.MS_MAIN_ACCT_COMPANY[i]["MS_SYS_COMPANY"]["CMP_NAME"];
                    $scope.AcctCompany_grid.addRowData(result.MS_MAIN_ACCT_COMPANY[i]["ACOM_CODE"], result.MS_MAIN_ACCT_COMPANY[i]);
                }

            } else {
                u.growl_info("The Main Account your are searching for is invalid please try a different Main Account");
            }
        }

        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btnDelete").on("click", function () {
            u.modal_warning("Are you sure you want Delete the Record?");

            $("#btnOkWarning").click(function (e) {
                u.modal_warning("Wait while the transaction is being deleted..........");
            });

        });


        /*------------------------------------------
        * LOV code validation 
        *----------------------------------------*/
        // Currecny
        u.lovCodeVal("#ACUR_CODE", "check_currency_lov_code", "#ACUR_NAME");
        
        //Company
        u.lovCodeVal("#ACOM_CODE", "check_company_lov_code", "#ACOM_NAME");


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

        


    });
})(window.jQuery, window.service, window.utility, {});