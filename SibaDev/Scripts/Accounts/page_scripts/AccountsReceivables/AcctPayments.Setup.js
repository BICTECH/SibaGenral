(function ($, s, u, $scope) {
    $(function () {
        $scope.saving = false;

        /*------------------------------
        *Accounts Matching  Grid setup
        *----------------------------*/
        $scope.matcingGrid = u.default_grid("#grdAcctsDeta", "#grdAcctsDetaPager", "Accounts",
              ["Payment", "Subledger", "Currency ", "Exchange Rate",
                      "FC Amount", "BC Amount", "Debit Credit", "Control Flag", "Txn Narration", "Bank Name", "Bank Branch", "Cheque No", "Cheque Date", "Paid To", "Cheque Type",
                      "Create by", "Create Date", "Modifed By", "Modified Date", "Status", "RV Details SysID", "RV Head SysID"
              ],
              [      
                     { name: "RVD_MAIN_ACCT", index: "RVD_MAIN_ACCT", width: 150 },
                     { name: "RVD_SUBLEDGER", index: "RVD_SUBLEDGER", hidden: false, width: 150 },
                     { name: "RVD_CURR_CODE", index: "RVD_CURR_CODE", width: 150 },
                     { name: "RVD_CURR_RATE", index: "RVD_CURR_RATE", width: 100 },
                     { name: "RVD_FC_AMOUNT", index: "RVD_FC_AMOUNT", hidden: false, width: 100 },
                     { name: "RVD_BC_AMOUNT", index: "RVD_BC_AMOUNT", width: 100 },
                     { name: "RVD_DR_CR", index: "RVD_DR_CR", width: 100 },
                     { name: "RVD_TXN_CTRL_FLAG", index: "RVD_TXN_CTRL_FLAG", width: 100 },
                     { name: "RVD_TXN_NARRATION", index: "RVD_TXN_NARRATION", width: 100 },
                     { name: "RVD_CHQ_BANK_NAME", index: "RVD_CHQ_BANK_NAME", width: 100 },
                     { name: "RVD_CHQ_BANK_BRANCH", index: "RVD_CHQ_BANK_BRANCH", width: 100 },
                     { name: "RVD_CHQ_NO", index: "RVD_CHQ_NO", width: 100 },
                     { name: "RVD_CHQ_DT", index: "RVD_CHQ_DT", width: 100 },
                     { name: "RVD_CHQ_PAID_TO", index: "RVD_CHQ_PAID_TO", width: 100 },
                     { name: "RVD_CHQ_TYPE", index: "RVD_CHQ_TYPE", width: 100 },

                     { name: "RVD_CRTE_BY", index: "RVD_CRTE_BY", hidden: false, width: 100 },
                     { name: "RVD_CRTE_DATE", index: "RVD_CRTE_DATE", hidden: false, width: 100 },
                     { name: "RVD_MOD_BY", index: "RVD_MOD_BY", hidden: false, width: 100 },
                     { name: "RVD_MOD_DATE", index: "RVD_MOD_DATE", hidden: false, width: 100 },
                     { name: "RVD_STATUS", index: "RVD_STATUS", hidden: false, width: 100 },

                     { name: "RVD_SYS_ID", index: "RVD_SYS_ID", hidden: false, width: 100 },
                     { name: "RVD_RVH_SYS_ID", index: "RVD_RVH_SYS_ID", hidden: false, width: 100 },
              ],
          function (id) {
              /*
               * obtain the selected questionnaire data
               */
              var grid = $scope.acctsDetails_grid;
          });

        $scope.accountDetlsGrid = u.default_grid("#grdAcctsDetails", "#grdAcctsDetailsPager", "Payment Account Details",
         ["ID", "Debit/Credit", "Main Account Code", "Main Account Name", "Sub Ledger Code",
             "Sub Ledger Name", "Amount Foreign Cur.", "Amount Base Cur.", "Line Narration", "Created By",
             "Created Date", "Modified By", "Modified Date", "Status"],
         [
             { name: "PAD_SYS_ID", hidden: true, index: "PAD_SYS_ID" },
             { name: "PAD_DR_CR", index: "PAD_DR_CR", width: 100 },
             { name: "PAD_ACCT_CODE", index: "PAD_ACCT_CODE" },
             { name: "ACCT_NAME", index: "ACCT_NAME" },
             { name: "PAD_SUB_ACCT_CODE", index: "PAD_SUB_ACCT_CODE" },
             { name: "SUB_ACCT_NAME", index: "SUB_ACCT_NAME" },
             { name: "PAD_AMNT_FC", index: "PAD_AMNT_FC" },
             { name: "PAD_AMNT_BC", index: "PAD_AMNT_BC" },
             { name: "PAD_DESC", index: "PAD_DESC", width: 550 },
             { name: "PAD_CRTE_BY", index: "PAD_CRTE_BY" },
             { name: "PAD_CRTE_DATE", index: "PAD_CRTE_DATE" },
             { name: "PAD_MOD_BY", index: "PAD_MOD_BY" },
             { name: "PAD_MOD_DATE", index: "PAD_MOD_DATE" },
             { name: "PAD_STATUS", index: "PAD_STATUS" }
         ],
         function (id) {
             var grid = $scope.accountDetlsGrid;

             u.fill_form({
                 PAD_DR_CR: grid.jqGrid("getCell", id, "PAD_DR_CR"),
                 PAD_ACCT_CODE: grid.jqGrid("getCell", id, "PAD_ACCT_CODE"),
                 ACCT_NAME: grid.jqGrid("getCell", id, "ACCT_NAME"),
                 PAD_SUB_ACCT_CODE: grid.jqGrid("getCell", id, "PAD_SUB_ACCT_CODE"),
                 SUB_ACCT_NAME: grid.jqGrid("getCell", id, "SUB_ACCT_NAME"),
                 PAD_AMNT_FC: grid.jqGrid("getCell", id, "PAD_AMNT_FC"),
                 PAD_AMNT_BC: grid.jqGrid("getCell", id, "PAD_AMNT_BC"),
                 PAD_DESC: grid.jqGrid("getCell", id, "PAD_DESC")
             }, "#receiptAccountDetailsForm");
         });


        /*----------------------------------------------------------
         * call add function to add a record to  Account Details Grid
         *-------------------------------------------------------*/
        //
        $("#btn_add_acntDetail").on("click", function () {

            if (u.form_validation("#receiptAccountDetailsForm")) {
                u.modal_confirmation("Are you sure you want to add Account Detail to the grid?", function () {

                    var rowIds = $scope.accountDetlsGrid.jqGrid("getDataIDs");

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
                        //
                        var cellValue = $scope.accountDetlsGrid.jqGrid("getCell", currRow, "PAD_ACCT_CODE");
                        cellValue += $scope.accountDetlsGrid.jqGrid("getCell", currRow, "PAD_SUB_ACCT_CODE");
                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     * $.inArray($("#PAD_ACCT_CODE").val() + $("#PAD_SUB_ACCT_CODE").val(), code) < 0
                     *--------------------------------------*/
                    //
                    if (true) {

                        var formData = u.parse_form("#receiptAccountDetailsForm");
                        formData.PAD_STATUS = "U";
                        formData.PAD_CRTE_BY = "Admin";
                        formData.PAD_CRTE_DATE = u.get_date();
                        $scope.accountDetlsGrid.addRowData(formData.ID, formData);

                        u.growl_success("Account Detail successfully added to grid");
                        u.form_reset("#receiptAccountDetailsForm");
                        $scope.updateTotals();

                    } else {
                        u.growl_warning("Main Account and Sub Ledger combination already exists, can't add account detail: " + $("#PAD_ACCT_CODE").val());
                    }
                    u.hide_confirm();
                });
            } else {
                u.growl_error("Please fill all the fields that are marked red");
            }
        });

        $scope.updateTotals = function () {
            /*-----------------------------------
                         * calc totals for debit and credit
                         *---------------------------------*/
            var gridData = u.get_grid_data($scope.accountDetlsGrid);
            var totalDebBc = 0;
            var totalDebFc = 0;
            var totalCredBc = 0;
            var totalCredFc = 0;
            for (var i in gridData) {
                totalDebBc += parseFloat(gridData[i]["PAD_DR_CR"] === "DR" ? gridData[i]["PAD_AMNT_BC"] : 0);
                totalDebFc += parseFloat(gridData[i]["PAD_DR_CR"] === "DR" ? gridData[i]["PAD_AMNT_FC"] : 0);


                totalCredBc += parseFloat(gridData[i]["PAD_DR_CR"] === "CR" ? gridData[i]["PAD_AMNT_BC"] : 0);
                totalCredFc += parseFloat(gridData[i]["PAD_DR_CR"] === "CR" ? gridData[i]["PAD_AMNT_FC"] : 0);
            }


            $("#totalDebitBC").val(totalDebBc);
            $("#totalDebitFC").val(totalDebFc);
            $("#totalCreditBC").val(totalCredBc);
            $("#totalCreditFC").val(totalCredFc);
            $("#diffBC").val(totalCredBc - totalDebBc);
            $("#diffFC").val(totalCredFc - totalDebFc);
        }

        $scope.clearTotals = function () {
            $("#totalDebitBC").val("");
            $("#totalDebitFC").val("");
            $("#totalCreditBC").val("");
            $("#totalCreditFC").val("");
            $("#diffBC").val("");
            $("#diffFC").val("");
        }


        /*------------------------------------------------------
         * Remove Account Detail or Mark for deletion from Grid
         *----------------------------------------------------*/
        $("#btn_remove_acntDetail").on("click", function () {
            if (u.grid_empty($scope.accountDetlsGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.accountDetlsGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var acntDetailStatus = grid.jqGrid("getCell", rowId, "PAD_STATUS");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added acntDetail before saving
                 *------------------------------------------*/
                // 
                if (acntDetailStatus === "U") {

                    grid.jqGrid("delRowData", rowId);

                    u.growl_success("Selected Account Detail successfully deleted");
                }

                /*------------------------------------------
                 * Mark a acntDetail for deletion on saving
                 *----------------------------------------*/
                // 
                if (acntDetailStatus === "A") {

                    grid.jqGrid("setCell", rowId, "PAD_STATUS", "D");
                    $("#" + rowId, "#grdOrigin").css({ color: "red" });

                    u.growl_success("Selected Account Detail successfully marked for deletion, please click on the save button to save changes");
                } else if (acntDetailStatus === "D") {

                    $("#" + rowId, "#grdOrigin").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "PAD_STATUS", "A");

                    u.growl_success("Account Detail successfully restored");
                }

                u.hide_confirm();
                $scope.updateTotals();
            });

        });


        /*-------------------------------------
         * Edit/Update Payment Account Details
         *-----------------------------------*/
        //
        $("#btn_update_acntDetail").on("click", function () {

            if (u.grid_empty($scope.accountDetlsGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.accountDetlsGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "PAD_DR_CR");

                if (code) {
                    var data = u.parse_form("#receiptAccountDetailsForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.growl_success("Account Details successfully updated");
                    $scope.updateTotals();
                    u.form_reset("#receiptAccountDetailsForm");
                }
                else {
                    u.growl_info("Please Select a row to edit");
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
            u.excel_export($scope.accountDetlsGrid, ["ID", "HEADER_ID"], "Payment_Account_Details_List_Excel");
        });

        /*---------------------------------
         * REceipt Details List grid setup
         *-------------------------------*/
        $scope.paymentDetailsGrid = u.default_grid("#grdRVHeader", "#grdRVHeaderPager", "Payment Details ",
         [
             "ID", "HEADER_ID", "Payment Type ", "Txn Office Code", "Txn Office Name", "Department Office Name", "Department Office Name",
             "Txn Document No.", "Period", "Currency Code", "Currency Rate", "Payment Mode", "Due Date", "Received From", "Payment Narration",
            "Create by", "Create Date", "Modifed By", "Modified Date", "Status", "Active"
         ],
         [
             { name: "APD_SYS_ID", hidden: true, index: "APD_SYS_ID" },
             { name: "APD_APH_SYS_ID", hidden: true, index: "APD_APH_SYS_ID", width: 550 },
             { name: "APD_PAYMNT_TYPE", index: "APD_PAYMNT_TYPE" },
             { name: "APD_TXN_OFF_CODE", index: "APD_TXN_OFF_CODE" },
             { name: "TXN_OFF_NAME", index: "TXN_OFF_NAME" },
             { name: "APD_DEP_OFF_CODE", index: "APD_DEP_OFF_CODE" },
             { name: "DEP_OFF_NAME", index: "DEP_OFF_NAME" },
             { name: "APD_TXN_DOC_NO", index: "APD_TXN_DOC_NO" },
             { name: "APD_ACNT_PERIOD", index: "APD_ACNT_PERIOD" },
             { name: "APD_CUR_CODE", index: "APD_CUR_CODE" },
             { name: "CUR_RATE", index: "CUR_RATE" },
             { name: "APD_PM_CODE", index: "APD_PM_CODE" },
             { name: "APD_DUE_DATE", index: "APD_DUE_DATE" },
             { name: "APD_RCVD_FROM", index: "APD_RCVD_FROM" },
             { name: "APD_PAYMNT_DESC", index: "APD_RCPT_DESC" },
             { name: "APD_CRTE_BY", index: "APD_CRTE_BY" },
             { name: "APD_CRTE_DATE", index: "APD_CRTE_DATE" },
             { name: "APD_MOD_BY", index: "APD_MOD_BY" },
             { name: "APD_MOD_DATE", index: "APD_MOD_DATE" },
             { name: "APD_STATUS", index: "APD_STATUS" },
             { name: "APD_ACTIVE", index: "APD_ACTIVE", hidden: true }
         ],
         function (id) {
             var grid = $scope.paymentDetailsGrid;


             u.fill_form({
                 APD_PAYMNT_TYPE: grid.jqGrid("getCell", id, "APD_PAYMNT_TYPE"),
                 APD_TXN_OFF_CODE: grid.jqGrid("getCell", id, "APD_TXN_OFF_CODE"),
                 TXN_OFF_NAME: grid.jqGrid("getCell", id, "TXN_OFF_NAME"),
                 APD_DEP_OFF_CODE: grid.jqGrid("getCell", id, "APD_DEP_OFF_CODE"),
                 DEP_OFF_NAME: grid.jqGrid("getCell", id, "DEP_OFF_NAME"),
                 APD_TXN_DOC_NO: grid.jqGrid("getCell", id, "APD_TXN_DOC_NO"),
                 APD_ACNT_PERIOD: grid.jqGrid("getCell", id, "APD_ACNT_PERIOD"),
                 APD_CUR_CODE: grid.jqGrid("getCell", id, "APD_CUR_CODE"),
                 CUR_RATE: grid.jqGrid("getCell", id, "CUR_RATE"),
                 APD_PM_CODE: grid.jqGrid("getCell", id, "APD_PM_CODE"),
                 APD_DUE_DATE: grid.jqGrid("getCell", id, "APD_DUE_DATE"),
                 APD_RCVD_FROM: grid.jqGrid("getCell", id, "APD_RCVD_FROM"),
                 APD_PAYMNT_DESC: grid.jqGrid("getCell", id, "APD_PAYMNT_DESC")
             }, "#receiptDetailsForm");
         });


        //Exchange rate calculation for FC and BC Amounts/

        document.getElementById("PAD_AMNT_FC").addEventListener("focusout", $scope.fxnBaseAmountCal);
        document.getElementById("APD_CUR_CODE").addEventListener("focusout", $scope.fxnBaseAmountCal);
        document.getElementById("CUR_RATE").addEventListener("focusout", $scope.fxnBaseAmountCal);



        $scope.fxnBaseAmountCal = function () {
            //alert("Input field lost focus.");
            var CurRate = parseFloat($("#PRD_CUR_RATE").val());
            var AmountFC = parseFloat($("#PAD_AMNT_FC").val());


            if (CurRate === "") {
                u.growl_warning("Currency rate cannot be empty");
            }
            else if (CurRate > 0) {

                var AmountBC = parseFloat(AmountFC * CurRate).toFixed(2);
                $("#RAD_AMNT_BC").val(AmountBC);
            }
            else {

            }
        }
        /*----------------------------------------------
         * add Payment Details to Payment Details Grid
         *--------------------------------------------*/
        //
        $("#btn_add_rcptDetail").on("click", function () {

            if (u.form_validation("#receiptDetailsForm")) {
                u.modal_confirmation("Are you sure you want to add Payment Detail to the grid?", function () {

                    var rowIds = $scope.paymentDetailsGrid.jqGrid("getDataIDs");

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
                        //
                        var cellValue = $scope.paymentDetailsGrid.jqGrid("getCell", currRow, "APD_PAYMNT_TYPE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     * $.inArray($("#APD_PAYMNT_TYPE").val(), code) < 0
                     *--------------------------------------*/
                    //
                    if (true) {

                        var formData = u.parse_form("#receiptDetailsForm");
                        formData.APD_STATUS = "U";
                        formData.APD_CRTE_BY = "Admin";
                        formData.APD_CRTE_DATE = u.get_date();
                        $scope.paymentDetailsGrid.addRowData(formData.ID, formData);

                        u.growl_success("Payment Detail successfully added to grid");
                        u.form_reset("#receiptDetailsForm");
                    } else {
                        u.growl_warning("Type exists, you cannot add same Type :  " + $("#APD_PAYMNT_TYPE").val());
                    }
                    u.hide_confirm();
                });
            } else {
                u.growl_error("Please fill all the fields that are marked red");
            }
        });


        /*------------------------------------------------------
         * Remove Payment Detail or Mark for deletion from Grid
         *----------------------------------------------------*/

        $("#btn_remove_rcptDetail").on("click", function () {
            if (u.grid_empty($scope.paymentDetailsGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.paymentDetailsGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var rcptDetailStatus = grid.jqGrid("getCell", rowId, "APD_STATUS");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (rcptDetailStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_success("Selected Payment Detail successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (rcptDetailStatus === "A") {

                    grid.jqGrid("setCell", rowId, "APD_STATUS", "D");
                    $("#" + rowId, "#grdRVHeader").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Payment Detail successfully marked for deletion, please click on the save button to save changes");

                } else if (rcptDetailStatus === "D") {

                    $("#" + rowId, "#grdRVHeader").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "APD_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Payment Detail successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update receipt details
         *------------------------------*/
        //
        $("#btn_update_rcptDetail").on("click", function () {

            if (u.grid_empty($scope.paymentDetailsGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.paymentDetailsGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "APD_PAYMNT_TYPE");

                //todo: use a more appropriate unique field
                if (code) {
                    var data = u.parse_form("#receiptDetailsForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.growl_success("Payment Detail successfully updated");
                    u.form_reset("#receiptDetailsForm");
                }
                else {
                    u.growl_info("Please Select a row to edit");
                }
                u.hide_confirm();
            });
        });

        /*--------------------------------
         * exporting of the grid to excel
         *------------------------------*/
        $("#rcptDetail-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.paymentDetailsGrid, ["ID", "HEADER_ID"], "Payment_Account_Details_List_Excel");
        });







        /*----------------------
         * LOV initialization
         *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOV", "#grdLOVPager");

        /*----------------------------
         * lov button click handling
         *---------------------------*/
        $("body").delegate(".btn_lov", "click", function () {

            $scope.dialog_data = $(this).data("dialog");

            switch ($scope.dialog_data.type) {
                case "btn_doc_type":
                    $scope.lov.call_dialog("Select Transaction Document", "getTxnDocLov", $scope.dialog_data);
                    break;
                case "btn_issue_office":
                    $scope.lov.call_dialog("Select Department/Unit Office", "get_lov_office", $scope.dialog_data);
                    break;
                case "btn_dep_office":
                    $scope.lov.call_dialog("Select Department/Unit Office", "get_lov_office", $scope.dialog_data);
                    break;
                case "btn_txn_office":
                    $scope.lov.call_dialog("Select Transaction Branch", "get_lov_office", $scope.dialog_data);
                    break;
                case "btn_currency":
                    $scope.lov.pcolName = ["Rate"];
                    $scope.lov.pcolMdls = [{ name: "RATE", index: "RATE" }];
                    $scope.lov.call_dialog("Select Currency", "get_currency_lov", $scope.dialog_data, null, function (data) {
                        $("#CUR_RATE").val(data["RATE"]);
                    });
                    break;
                case "btn_main_account":

                    $scope.lov.call_dialog("Select Main Account", "getMainAccountLov", $scope.dialog_data);
                    break;
                case "btn_sub_account":
                    $scope.lov.call_dialog("Select Sub Ledger", "getSubAccountLov", $scope.dialog_data);
                    break;
            }
        });

        u.lovDropDown("#APD_PM_CODE", "getPaymentModeLov");

        u.set_datepicker("form input[name='APH_TXN_DATE']");
        u.set_datepicker("#APD_DUE_DATE");

        /*----------------------------------------------------
         *Transaction Matching  Modal   
         *---------------------------------------------------*/
        $("#btn_Txn_Matching").on("click", function () {

            $("#txnMatchingModal").modal();

        });

        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btnApproveClaim").on("click", function () {

            alert("xxxxx");
        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            if (!u.form_validation("#paymentHeaderForm")) return u.growl_warning("Fields marked red are required");
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*
                 * receipt header data
                 */
                var receiptHead = u.parse_form("#paymentHeaderForm");

                receiptHead["MS_ACCT_PAYMNT_ACNT_DTLS"] = u.get_grid_data($scope.accountDetlsGrid);
                receiptHead["MS_ACCT_PAYMNT_DTLS"] = u.get_grid_data($scope.paymentDetailsGrid);


                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(receiptHead);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.savePayment(receiptHead, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {

                            u.update_grid_status($scope.accountDetlsGrid, "PAD_STATUS");
                            u.update_grid_status($scope.paymentDetailsGrid, "APD_STATUS");

                            u.fill_form(responseData.data, "#paymentHeaderForm");

                            u.hide_confirm();
                            u.growl_success(responseData.message);
                            $scope.updateTotals();
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
        $("#btn_Delete").on("click", function () {
            u.modal_confirmation("Are you sure you want Delete the Record?", function (e) {
                var receiptHead = u.parse_form("#paymentHeaderForm");
                receiptHead["ARH_STATUS"] = "D";
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.savePayment(receiptHead, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.hide_confirm();
                            u.growl_success("Account Payment Successfully deleted");
                            $scope.reset();
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
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (parameters) {
                $scope.reset();
                u.growl_success("Setup form successfully cleared");
            });

        });

        $scope.reset = function (e) {
            u.form_reset("#paymentHeaderForm");
            u.clear_grid_data($scope.accountDetlsGrid);
            u.clear_grid_data($scope.paymentDetailsGrid);
            u.hide_confirm();
            $scope.clearTotals();
        }


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
            ["Index", "Txn Document Code", "Issuing Office", "Batch No."],
            [
                { name: "index", id: true, index: "index", hidden: true },
                { name: "APH_ATD_CODE", index: "APH_ATD_CODE" },
                { name: "APH_OFF_CODE", index: "APH_OFF_CODE" },
                { name: "APH_BATCH_NO", index: "APH_BATCH_NO" }
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
         * Payment Search
         *-------------------------*/
        $("#btnQueryPayment").click(function () {

            if (!u.field_empty("#txtSearch")) {

                s.searchPayment($("#txtSearch").val(),
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
                $scope.accountDetlsGrid.jqGrid("clearGridData");
                $scope.paymentDetailsGrid.jqGrid("clearGridData");

                /*----------------------------------------------------
                 * populate Payment header Form with search results
                 *--------------------------------------------------*/
                u.fill_form(result, "#paymentHeaderForm");

                /*-----------------------------------
                 * set claim transactional status
                 *---------------------------------*/
                if (result["APH_TRANS_STATUS"] === "C") {
                    $scope.setConfirmState();
                } else if (result["APH_TRANS_STATUS"] === "P") {
                    $scope.setUnconfrimState();
                } else {
                    $("input[name='ClaimStatus']").val("No Status");
                    $scope.setUnconfrimState();
                }

                /*-------------------------------------
                 * populate Payment currency grid
                 *-----------------------------------*/
                for (var i in result.MS_ACCT_PAYMNT_DTLS) {
                    //result.MS_ACCT_PAYMNT_DTLS[i]["ACUR_NAME"] = result.MS_ACCT_PAYMNT_DTLS[i]["MS_INS_CURRENCY"]["CUR_FULL_NAME"];
                    $scope.paymentDetailsGrid.addRowData(result.MS_ACCT_PAYMNT_DTLS[i]["ID"], result.MS_ACCT_PAYMNT_DTLS[i]);
                }

                /*-------------------------------------
                 * populate Payment company grid
                 *-----------------------------------*/
                for (var i in result.MS_ACCT_PAYMNT_ACNT_DTLS) {
                    //result.MS_ACCT_PAYMNT_ACNT_DTLS[i]["ACOM_NAME"] = result.MS_ACCT_PAYMNT_ACNT_DTLS[i]["MS_SYS_COMPANY"]["CMP_NAME"];
                    $scope.accountDetlsGrid.addRowData(result.MS_ACCT_PAYMNT_ACNT_DTLS[i]["ID"], result.MS_ACCT_PAYMNT_ACNT_DTLS[i]);
                }

                $scope.updateTotals();

            } else {
                u.growl_info("The Payment your are searching for is invalid please try a different Payment");
            }
        }



        $("#btnProposalConfirmation").click(function () {
            if (u.field_empty("#APH_SYS_ID")) return u.growl_warning("Payments has not been saved, please save claim registration.");
            $("#claimConfirmationModal").modal();
        });


        $("#btnRcptConfirm").click(function () {
            if (!u.form_validation("#confirmationForm")) return u.growl_warning("Payments has not been saved, please save claim registration.");
            var log = {
                PCL_NARRATION: $("#NARRATION").val(),
                PCL_APH_SYS_ID: $("#APH_SYS_ID").val(),
                PCL_CRTE_BY: "Admin",
                PCL_STATUS: "A"
            };

            log.PCL_ACTION = $scope.isConfirmed() ? "Unconfirm" : "Confirm";

            s.paymentTransaction(log, function (response) {
                if (response.state) {
                    u.growl_success(response.message);
                    log.PCL_ACTION === "Confirm" ? $scope.setConfirmState() : $scope.setUnconfrimState();
                    $("#claimConfirmationModal").modal("hide");
                } else {
                    u.growl_error(response.message);
                }
            });

        });


        /*-----------------------------------
         * claim transaction status functions
         *----------------------------------*/
        $scope.isConfirmed = function () {
            return $("#APH_TRANS_STATUS").val() === "C";
        }

        $scope.setConfirmState = function () {
            $("#APH_TRANS_STATUS").val("C");
            $(".transStatusTxt").text("Unconfirm");
            $("input[name='ClaimStatus']").val("Confirmed");
            $("#claimPolInfoForm").find("input,select,textarea").each(function () {
                $(this).addClass("productConfirmed");
            });
        }

        $scope.setUnconfrimState = function () {
            $("#APH_TRANS_STATUS").val("P");
            $(".transStatusTxt").text("Confirm");
            $("input[name='ClaimStatus']").val("Pending");
            $("#claimPolInfoForm").find("input,select,textarea").each(function () {
                $(this).removeClass("productConfirmed");
            });
        }


        /*--------------------------------------
         * LOV code validations
         *-------------------------------------*/
        u.lovCodeVal("form input[name='APH_OFF_CODE']", "check_office_lov_code", "form input[name='OFF_NAME']");
        u.lovCodeVal("form input[name='APH_ATD_CODE']", "checkTxnDocCode", "form input[name='ATD_NAME']");
        u.lovCodeVal("form input[name='APD_TXN_OFF_CODE']", "check_office_lov_code", "form input[name='TXN_OFF_NAME']");
        u.lovCodeVal("form input[name='APD_DEP_OFF_CODE']", "check_office_lov_code", "form input[name='DEP_OFF_NAME']");
        u.lovCodeVal("form input[name='APD_CUR_CODE']", "check_currency_lov_code", "");
        u.lovCodeVal("form input[name='PAD_ACCT_CODE']", "check_mainAcct_lov_code", "form input[name='ACCT_NAME']");
        u.lovCodeVal("form input[name='PAD_SUB_ACCT_CODE']", "check_subAcct_lov_code", "form input[name='SUB_ACCT_NAME']");
        //u.lovCodeVal("form input[name='CIT_REG_CODE']", "check_region_lov_code", "form input[name='REG_NAME']");

    });//document ready function
})(window.$, window.service, window.utility, {});