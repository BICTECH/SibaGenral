(function ($, s, u, $scope) {
    $(function () {

        $scope.saving = false;

        /*-----------------------------
         * Account Integration grid definition
         *---------------------------*/
        $scope.AcctsIntegration_grid = u.default_grid("#grdAcctsIntegration", "#grdAcctsIntegrationPager", "Main Accounts List",
            [
                "ID","Txn Sournce", "Customer Type", "Customer Type Ref ", "Insurance Txn Type", "Business Sournce", "Insurnace Sournce", "Office",
                "Product", "Forward DR Account", "Forward DR Narration", "Forward DR. DocType", "Forward CR Account", "Forward CR Narration", "Forward  CR DocType",
                "Reverse DR Acct", "Reverse DR Narration", "Reverse DR DocType", "Reverse CR Acct", "Reverse CR Narration", "Reverse CR DocType",
                "Foward SubAccount", "Forward SubAcct Narration", "Forward SubAcct DocType", "Reverse SubAccount", "Reverse SubAcct Narration", "Reverse SubAcct DocType",
                "Created By", "Created Date", "Modified By", "Modified Date", "Status", "Active YN"
            ],

            [
               
                { name: "INT_SYS_ID", index: "INT_SYS_ID", hidden:true },
                { name: "INT_TXN_SOURCE", index: "INT_TXN_SOURCE" },
                { name: "INT_CUST_TYPE", index: "INT_CUST_TYPE" },
                { name: "INT_CUST_TYPE_REF", index: "INT_CUST_TYPE_REF" },
                { name: "INT_INS_TXN_TYPE", index: "INT_INS_TXN_TYPE" },
                { name: "INT_BIZ_SOURCE", index: "INT_BIZ_SOURCE" },
                { name: "INT_INS_SOURCE", index: "INT_INS_SOURCE" },
                { name: "INT_OFFICE", index: "INT_OFFICE" },
                { name: "INT_PRODUCT", index: "INT_PRODUCT" },
                { name: "INT_FWD_DEBTT_ACCT", index: "INT_FWD_DEBTT_ACCT" },
                { name: "INT_FWD_DEBIT_NARRATION", index: "INT_FWD_DEBIT_NARRATION" },
                { name: "INT_FWD_DEBIT_DOC_TYPE", index: "INT_FWD_DEBIT_DOC_TYPE" },
                { name: "INT_FWD_CREDIT_ACCT", index: "INT_FWD_CREDIT_ACCT" },
                { name: "INT_FWD_CREDIT_NARRATION", index: "INT_FWD_CREDIT_NARRATION" },
                { name: "INT_FWD_CREDIT_DOC_TYPE", index: "INT_FWD_CREDIT_DOC_TYPE" },
                { name: "INT_RVSE_DEBTT_ACCT", index: "INT_RVSE_DEBTT_ACCT" },
                { name: "INT_RVSE_DEBIT_NARRATION", index: "INT_RVSE_DEBIT_NARRATION" },
                { name: "INT_RVSE_DEBIT_DOC_TYPE", index: "INT_RVSE_DEBIT_DOC_TYPE" },
                { name: "INT_RVSE_CREDIT_ACCT", index: "INT_RVSE_CREDIT_ACCT" },
                { name: "INT_RVSE_CREDIT_NARRATION", index: "INT_RVSE_CREDIT_NARRATION" },
                { name: "INT_RVSE_CREDIT_DOC_TYPE", index: "INT_RVSE_CREDIT_DOC_TYPE" },

                { name: "INT_FWD_SUB_ACCOUNT", index: "INT_FWD_SUB_ACCOUNT" },
                { name: "INT_FWD_SUB_ACCT_NARRATION", index: "INT_FWD_SUB_ACCT_NARRATION" },
                { name: "INT_FWD_SUB_ACCT_DOC_TYPE", index: "INT_FWD_SUB_ACCT_DOC_TYPE" },
                { name: "INT_RVSE_SUB_ACCOUNT", index: "INT_RVSE_SUB_ACCOUNT" },
                { name: "INT_RVSE_SUB_ACCT_NARRATION", index: "INT_RVSE_SUB_ACCT_NARRATION" },
                { name: "INT_RVSE_SUB_ACCT_DOC_TYPE", index: "INT_RVSE_SUB_ACCT_DOC_TYPE" },

                { name: "INT_CRTE_BY", index: "INT_CRTE_BY" },
                { name: "INT_CRTE_DATE", index: "INT_CRTE_DATE" },
                { name: "INT_MOD_BY", index: "INT_MOD_BY" },
                { name: "INT_MOD_DATE", index: "INT_MOD_DATE" },
                { name: "INT_STATUS", index: "INT_STATUS" },
                { name: "INT_ACTIVE_YN", index: "INT_ACTIVE_YN" }
            ],

            function (id) {
                var grid = $scope.AcctsIntegration_grid;

                u.fill_form({
                    INT_TXN_SOURCE: grid.jqGrid("getCell", id, "INT_TXN_SOURCE"),
                    INT_CUST_TYPE: grid.jqGrid("getCell", id, "INT_CUST_TYPE"),
                    INT_CUST_TYPE_REF: grid.jqGrid("getCell", id, "INT_CUST_TYPE_REF"),
                    INT_INS_TXN_TYPE: grid.jqGrid("getCell", id, "INT_INS_TXN_TYPE"),
                    INT_BIZ_SOURCE: grid.jqGrid("getCell", id, "INT_BIZ_SOURCE"),
                    INT_INS_SOURCE: grid.jqGrid("getCell", id, "INT_INS_SOURCE"),
                    INT_OFFICE: grid.jqGrid("getCell", id, "INT_OFFICE"),
                    INT_PRODUCT: grid.jqGrid("getCell", id, "INT_PRODUCT"),
                    INT_FWD_DEBTT_ACCT: grid.jqGrid("getCell", id, "INT_FWD_DEBTT_ACCT"),
                    INT_FWD_DEBIT_NARRATION: grid.jqGrid("getCell", id, "INT_FWD_DEBIT_NARRATION"),
                    INT_FWD_DEBIT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_FWD_DEBIT_DOC_TYPE"),
                    INT_FWD_CREDIT_ACCT: grid.jqGrid("getCell", id, "INT_FWD_CREDIT_ACCT"),
                    INT_FWD_CREDIT_NARRATION: grid.jqGrid("getCell", id, "INT_FWD_CREDIT_NARRATION"),
                    INT_FWD_CREDIT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_FWD_CREDIT_DOC_TYPE"),
                    INT_RVSE_DEBTT_ACCT: grid.jqGrid("getCell", id, "INT_RVSE_DEBTT_ACCT"),
                    INT_RVSE_DEBIT_NARRATION: grid.jqGrid("getCell", id, "INT_RVSE_DEBIT_NARRATION"),
                    INT_RVSE_DEBIT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_RVSE_DEBIT_DOC_TYPE"),
                    INT_RVSE_CREDIT_ACCT: grid.jqGrid("getCell", id, "INT_RVSE_CREDIT_ACCT"),
                    INT_RVSE_CREDIT_NARRATION: grid.jqGrid("getCell", id, "INT_RVSE_CREDIT_NARRATION"),
                    INT_RVSE_CREDIT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_RVSE_CREDIT_DOC_TYPE"),
                    INT_FWD_SUB_ACCOUNT: grid.jqGrid("getCell", id, "INT_FWD_SUB_ACCOUNT"),
                    INT_FWD_SUB_ACCT_NARRATION: grid.jqGrid("getCell", id, "INT_FWD_SUB_ACCT_NARRATION"),
                    INT_FWD_SUB_ACCT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_FWD_SUB_ACCT_DOC_TYPE"),
                    INT_RVSE_SUB_ACCOUNT: grid.jqGrid("getCell", id, "INT_RVSE_SUB_ACCOUNT"),
                    INT_RVSE_SUB_ACCT_NARRATION: grid.jqGrid("getCell", id, "INT_RVSE_SUB_ACCT_NARRATION"),
                    INT_RVSE_SUB_ACCT_DOC_TYPE: grid.jqGrid("getCell", id, "INT_RVSE_SUB_ACCT_DOC_TYPE"),
                    INT_ACTIVE_YN: grid.jqGrid("getCell", id, "INT_ACTIVE_YN")

                }, "#acctIntForm");

            });

        /*--------------------------------------------------
     * call add function to add records to  AcctsIntegration_grid
     *------------------------------------------------*/
        //
        $("#btnAddNew").on("click", function () {

            if (u.form_validation("#acctIntForm")) {

                /*---------------------------------------------------------------
                 * call warning dialog message  errorMssgeModal errorMssgeModal
                 *-------------------------------------------------------------*/
                //
                u.modal_confirmation("Are you sure you want to add the Record to the grid?", function() {
                    var rowIds = $scope.AcctsIntegration_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];
                    var cellValue1;
                    var cellValue2;
                    var cellValue3;
                    var cellValue4;
                    var cellValue5;
                    var cellValue6;
                    var cellValue7;

                    var validateCode;

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

                        cellValue1 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_TXN_SOURCE");
                        cellValue2 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_INS_SOURCE");
                        cellValue3 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_INS_TXN_TYPE");
                        cellValue4 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_CUST_TYPE");
                        cellValue5 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_BIZ_SOURCE");
                        cellValue6 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_OFFICE");
                        cellValue7 = $scope.AcctsIntegration_grid.jqGrid("getCell", currRow, "INT_PRODUCT");


                        validateCode = cellValue1 + cellValue2 + cellValue3 + cellValue4 + cellValue5 + cellValue6 + cellValue7;


                        code.push(validateCode);

                    }


                    var checkCode = $("#INT_TXN_SOURCE").val() + $("#INT_INS_SOURCE").val() + $("#INT_INS_TXN_TYPE").val() + $("#INT_CUST_TYPE").val() + $("#INT_BIZ_SOURCE").val() + $("#INT_OFFICE").val() + $("#INT_PRODUCT").val();

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray(checkCode, code) < 0) {

                        var formData = u.parse_form("#acctIntForm");

                        formData.INT_STATUS = "U";
                        formData.INT_CRTE_BY = "Admin";
                        formData.INT_CRTE_DATE = u.get_datetime();

                        $scope.AcctsIntegration_grid.addRowData(formData.ID, formData);
                        u.form_reset("#acctIntForm");
                    }

                    else {
                        u.modal_alert("This Accounts Transaction Combination exist , you cannot add same, Please Check");
                    }
                });

            }
            else {
                u.growl_warning("All fields marked red are required");
            }
        });

        /*-----------------------------
         * Delete or Remove Main Account Record
         *---------------------------*/
        //
        $("#btnRemove").on("click", function () {
            if (u.grid_empty($scope.AcctsIntegration_grid))return u.growl_info("Account Integration grid is empty");
            var grid = $scope.AcctsIntegration_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "INT_STATUS");


            var code = grid.jqGrid("getCell", rowId, "INT_TXN_SOURCE");

            /*---------------------------------
             * Display modal message
             *------------------------------*/



            /*-----------------------------
             Cheek if record is selected...........
            *----------------------------*/
            //
            if (code === "") {
                u.modal_alert("No record selected to be removed");
            }

            else {

                u.modal_confirmation("Are you sure you want to Remove the record ?", function (e) {

                    /*--------------------------------------------
                     * Remove newly added record before saving
                     *------------------------------------------*/
                    // 
                    if (recordStatus === "U") {

                        grid.jqGrid("delRowData", rowId);
                        u.growl_success("Selected Account Integration successfully deleted");
                    }

                    /*----------------------------------------
                     * Mark a record for deletion on saving
                     *--------------------------------------*/
                    // 
                    if (recordStatus === "A") {
                        grid.jqGrid("setCell", rowId, "INT_STATUS", "D");
                        $("#" + rowId, "#grdAcctsIntegration").css({ color: "red" });

                        u.growl_success("Selected Account Integration successfully marked for deletion, please click on the save button to save changes");
                    } else if (recordStatus === "D") {

                        $("#" + rowId, "#grdAcctsIntegration").css({ color: "black" });
                        grid.jqGrid("setCell", rowId, "INT_STATUS", "A");
                        u.growl_success("Account Integration successfully restored");
                    }
                    u.hide_confirm();

                });
            }


        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btnUpdate").on("click", function () {

            if (u.grid_empty($scope.AcctsIntegration_grid)) return u.growl_info("Account Integration grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.AcctsIntegration_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "INT_TXN_SOURCE");

                if (code) {
                    var data = u.parse_form("#acctIntForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.growl_success("Account Integration successfully updated");
                    u.form_reset("#acctIntForm");
                }
                else {
                    u.growl_info("Please Select a row to edit");
                }

                u.hide_confirm();
            });


        });


        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#exportAccInt").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.AcctsIntegration_grid, ["ID"], "Account_Integration_List_Excel");
        });

       
        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //

        $("#btnSave").on("click", function () {
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-------------------------
                 * obtain Account Integration data
                 *-----------------------*/
                //
                var acctIntData = u.get_grid_data($scope.AcctsIntegration_grid);

                console.log(acctIntData);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveAcctIntegration(acctIntData, function (responseData) {
                        $scope.saving = false;
                       
                        if (responseData.state) {
                            u.update_grid_status($scope.AcctsIntegration_grid, "INT_STATUS");
                           
                            u.growl_success(responseData.message);
                        }
                        else {
                            $scope.saving = false;
                            
                            u.modal_error(responseData.message);
                        }
                        u.hide_confirm();
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
            u.modal_confirmation("Are you sure you want Delete the Record?", function(parameters) {
                
            });
        });

        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //

        $("#btnReset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#acctIntForm");
                u.clear_grid_data($scope.AcctsIntegration_grid);

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

                case "btn_ins_source":
                    $scope.lov.call_dialog("Select Insurance Source", "get_insurancesource_lov", $scope.dialog_data);
                    break;
                case "btn_txn_type":
                    $scope.lov.call_dialog("Select Transaction Type", "getInsAcctTxnLov", $scope.dialog_data);
                    break;
                case "btn_cust_type":
                    $scope.lov.call_dialog("Select Customer Type", "get_customertypes_lov", $scope.dialog_data);
                    break;
                case "btn_business_source":
                    $scope.lov.call_dialog("Select Source Of Business", "get_sourcebusiness_lov", $scope.dialog_data);
                    break;
                case "btn_office":
                    $scope.lov.call_dialog("Select Office", "get_office_lov", $scope.dialog_data);
                    break;
                case "btn_product":
                    $scope.lov.call_dialog("Select Product ", "get_product_lov", $scope.dialog_data);
                    break;

                //Forward Transactions
                case "btnFwdDebitAcct":
                    $scope.lov.call_dialog("Select Main Account", "getLovMainAcct", $scope.dialog_data);
                    break;
                    
                case "btnFwdDebitDocType":
                    $scope.lov.call_dialog("Select Document Type", "getTxnDocLov", $scope.dialog_data);
                    break;

                case "btnFwdCreditAcct":
                    $scope.lov.call_dialog("Select Main Account", "getLovMainAcct", $scope.dialog_data);
                    break;

                case "btnFwdCreditDocType":
                    $scope.lov.call_dialog("Select Document Type", "getTxnDocLov", $scope.dialog_data);
                    break;

                  // Reverse Transactions
                case "btnRvseDebitAcct":
                    $scope.lov.call_dialog("Select Main Account", "getLovMainAcct", $scope.dialog_data);
                    break;

                case "btnRvseDebitDocType":
                    $scope.lov.call_dialog("Select Document Type", "getTxnDocLov", $scope.dialog_data);
                    break;

                case "btnRvseCreditAcct":
                    $scope.lov.call_dialog("Select Main Account", "getLovMainAcct", $scope.dialog_data);
                    break;

                case "btnRvseCreditDocType":
                    $scope.lov.call_dialog("Select Document Type", "getTxnDocLov", $scope.dialog_data);
                    break;

                 //Subb Account
                case "btnFwdSubAcct":
                    $scope.lov.call_dialog("Select Main Account", "getLovSubAcct", $scope.dialog_data);
                    break;
            }
        });

        /*------------------------------------------
        * LOV code validation 
        *----------------------------------------*/
        // Check Forward Main Account
        u.lovCodeVal("#INT_FWD_DEBTT_ACCT", "check_mainAcct_lov_code");
        u.lovCodeVal("#INT_FWD_CREDIT_ACCT", "check_mainAcct_lov_code", "");

        u.lovCodeVal("#INT_RVSE_DEBTT_ACCT", "check_mainAcct_lov_code", "");
        u.lovCodeVal("#INT_RVSE_CREDIT_ACCT", "check_mainAcct_lov_code", "");


        //Main Account

        //u.lovCodeVal("#SUB_MAIN_ACCT_CODE", "check_mainAcct_lov_code", "#SUB_MAIN_ACCT_NAME");

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

        

        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryIntegration").click(function () {
            if (!u.field_empty("#txtSearch")) {
                s.searchAcctIntegration($("#txtSearch").val(),
                    function(result) {
                        if (result && result.length && result.length > 0) {
                            /*-------------------------------
                             * clear grid before populating
                             *-----------------------------*/
                            $scope.AcctsIntegration_grid.jqGrid("clearGridData");
                            for (var i in result) {
                                $scope.AcctsIntegration_grid.addRowData(result[i].ICH_CODE, result[i]);
                            }
                        } else {
                            u.growl_info("Coudlnt find any account intergration");
                        }

                    });
            } else {
                //fetch all 
                s.getAcctIntegrations(function (integrations) {
                    if (integrations && integrations.length && integrations.length > 0) {
                        /*--------------------------------
                         * clear grid before populating
                         *------------------------------*/
                        $scope.AcctsIntegration_grid.jqGrid("clearGridData");
                        for (var i in integrations) {
                            $scope.AcctsIntegration_grid.addRowData(integrations[i].ICH_CODE, integrations[i]);
                        }
                    } else {
                        u.growl_info("coudlnt find any account intergration");
                    }
                    
                })
            }

        });


    });
})(window.jQuery, window.service, window.utility, {});