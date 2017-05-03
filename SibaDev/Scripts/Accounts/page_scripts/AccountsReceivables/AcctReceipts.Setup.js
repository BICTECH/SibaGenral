/// <reference path="C:\Users\Administrator.ED\Documents\Visual Studio 2015\SIBAGeneral\SibaDev\Views/AccountHome/frmAccountOrigin.cshtml" />
(function ($, s, u, $scope) {
    $(function () {
        $scope.saving = false;
        $scope.grids = [];
        /*------------------------------
        *Accounts Matching  Grid setup
        *----------------------------*/
        //u.updateGrids($scope.grids);
        $scope.grids["matchingGrid"] = $scope.matchingGrid = u.default_grid("#grdOpenEntryDetails", "#grdOpenEntryDetailsPager", "Open Entry Details lists",
              ["Doc Type", "Doc No.", "Doc Date ", "Customer Code",
                      "Main Act Code", "Sub Acnt Code", "Debit/Credit", "Currency Code", "Currency Rate", "Original Amount FC", "Original Amount BC", "Posted Amount FC",
                      "Posted Amount BC", "Matched Amount FC", "Matched Amount BC", "Oustanding Amount FC", "Oustanding Amount FC", "Exchange Gain Loss","ID"
                      //"Create by", "Create Date", "Modifed By", "Modified Date", "Status", "RV Details SysID", "RV Head SysID"
              ],
              [
                     { name: "OE_DOC_TYPE", index: "OE_DOC_TYPE", width: 150 },
                     { name: "OE_DOC_NO", index: "OE_DOC_NO", hidden: false, width: 150 },
                     { name: "OE_DOC_DATE", index: "OE_DOC_DATE", width: 150 },
                     { name: "OE_CUST_CODE", index: "OE_CUST_CODE", width: 100 },
                     { name: "OE_MAIN_ACCT_CODE", index: "OE_MAIN_ACCT_CODE", hidden: false, width: 100 },
                     { name: "OE_SUB_ACCT_CODE", index: "OE_SUB_ACCT_CODE", width: 100 },
                     { name: "OE_DR_CR", index: "OE_DR_CR", width: 100 },
                     { name: "OE_CURR_CODE", index: "OE_CURR_CODE", width: 100 },
                     { name: "OE_CURR_RATE", index: "OE_CURR_RATE", width: 100 },
                     { name: "OE_ORGNL_FC_AMT", index: "OE_ORGNL_FC_AMT", width: 100 },
                     { name: "OE_ORGNL_BC_AMT", index: "OE_ORGNL_BC_AMT", width: 100 },
                     { name: "OE_ADJ_FC_AMT", index: "OE_ADJ_FC_AMT", width: 100 },
                     { name: "OE_ADJ_BC_AMT", index: "OE_ADJ_BC_AMT", width: 100 },
                     { name: "OE_UNPOST_ADJ_FC_AMT", index: "OE_UNPOST_ADJ_FC_AMT", width: 100 },
                     { name: "OE_UNPOST_ADJ_BC_AMT", index: "OE_UNPOST_ADJ_BC_AMT", width: 100 },
                     { name: "OUSTANDING_FC", index: "OUSTANDING_FC", width: 100 },
                     { name: "OUSTANDING_BC", index: "OUSTANDING_BC", width: 100 },
                     { name: "EXCH_GAIN_L0SS", index: "EXCH_GAIN_L0SS", width: 100 },
                     { name: "OE_SYS_ID", index: "OE_SYS_ID", hidden:false },
              ],
          function (id) {
              /*
               * obtain oustanding amount
               */
              var outstanding = parseFloat($scope.matchingGrid.jqGrid("getCell", id, "OUSTANDING_FC"));
              var paidAmnt = parseFloat($("#PAID_AMNT").val());
              if (outstanding > paidAmnt) {
                  $("#ADJ_AMNT").val(paidAmnt);
              } else {
                  $("#ADJ_AMNT").val(outstanding);
              }

          });
        /*------------------------------
        *Open Entry Matching/Adjusted details  Grid setup
        *----------------------------*/
        //u.updateGrids($scope.grids);
        $scope.MatchedDetlsGrid = u.default_grid("#grdMatchedDetails", "#grdMatchedDetailsPager", "Open Entry Matched Details lists",
              ["Txn Doc Type", "Txn Doc No.", "Ref. Doc Type", "Ref. Doc No.", "Ref. Main Account", "Ref. Sub Account",
                  "Matched Amount FC", "Matched Amount BC", "Currency Code", "Currency Rate", "Ref. Doc Date ", "Debit/Credit", "Create by", "Create Date", "Modifed By", "Modified Date",
                  "Status", "Matched SysID", "Txn SysID", "Ref. Txn SysID"
                  
              ],
              [
                     { name: "MA_TXN_DOC_TYPE", index: "MA_TXN_DOC_TYPE", width: 150 },
                     { name: "MA_TXN_DOC_NO", index: "MA_TXN_DOC_NO", hidden: false, width: 150 },
                     { name: "MA_REF_DOC_TYPE", index: "MA_REF_DOC_TYPE", width: 150 },
                     { name: "MA_REF_DOC_NO", index: "MA_REF_DOC_NO", hidden: false, width: 150 },
                     { name: "MA_MAIN_ACCT", index: "MA_MAIN_ACCT", width: 150 },
                     { name: "MA_SUB_ACCT", index: "MA_SUB_ACCT", width: 100 },
                     { name: "MA_MATCHED_FC_AMT", index: "MA_MATCHED_FC_AMT", width: 100 },
                     { name: "MA_MATCHED_BC_AMT", index: "MA_MATCHED_BC_AMT", width: 100 },
                     { name: "MA_REF_CURRENCY", index: "MA_REF_CURRENCY", width: 150 },
                     { name: "MA_REF_CURR_RATE", index: "MA_REF_CURR_RATE", width: 100 },
                     { name: "MA_REF_DOC_DATE", index: "MA_REF_DOC_DATE", hidden: false, width: 150 },
                     { name: "MA_REF_DR_CR", index: "MA_REF_DR_CR", hidden: false, width: 100 },
                     { name: "MA_CRTE_BY", index: "MA_CRTE_BY", width: 100 },
                     { name: "MA_CRTE_DATE", index: "MA_CRTE_DATE", width: 100 },
                     { name: "MA_MOD_BY", index: "MA_MOD_BY", width: 100 },
                     { name: "MA_MOD_DATE", index: "MA_MOD_DATE", width: 100 },
                     { name: "MA_STATUS", index: "MA_STATUS", width: 100 },
                     { name: "MA_SYS_ID", id: true, index: "MA_SYS_ID",  hidden: false,width: 100 },
                     { name: "MA_TXN_SYS_ID", index: "MA_TXN_SYS_ID", hidden: false, width: 100 },
                     { name: "MA_REF_OE_SYS_ID", index: "MA_REF_OE_SYS_ID", hidden: false,  width: 100 }
              ],
          function (id) {
              /*
               * obtain oustanding amount
               */
           
          });



        $scope.addToMatchedTxnGrid = function () {

            var formData = u.parse_form("#matchedDetlsForm");
            //formData.RAD_STATUS = "U";
            //formData.RAD_CRTE_BY = "Admin";

            $scope.MatchedDetlsGrid.addRowData(formData.ID, formData);
        };


        //MATCHING 

        $("#btnMatch").click(function() {
            //
            var grid = $scope.matchingGrid,
                id = grid.jqGrid("getGridParam", "selrow"),
                paidFxRate = parseFloat($("#ARD_CUR_RATE").val());

            if (id) {
                //Obtain Variables for matching
                var oustandingAmnt = parseFloat(grid.jqGrid("getCell", id, "OUSTANDING_FC")),
                    origAmnt = parseFloat(grid.jqGrid("getCell", id, "OE_ORGNL_FC_AMT")),
                    postdAmnt = parseFloat(grid.jqGrid("getCell", id, "OE_ADJ_FC_AMT") || 0),
                    adjAmnt = parseFloat($("#ADJ_AMNT").val()),
                    origFxRate = parseFloat(grid.jqGrid("getCell", id, "OE_CURR_RATE"));


                if (oustandingAmnt === 0) return u.growl_info("Record is fully matched!!!");

                if (adjAmnt > parseFloat($("#PAID_AMNT").val())) return u.growl_warning("Adjusted amount cannot be more than the paid amount");

                if (adjAmnt > oustandingAmnt) return u.growl_warning("Adjusted Amount cannot be more than the outstanding amount");

                if (parseFloat($("#PAID_AMNT").val()) <= 0) return u.growl_warning("Paid Amount is fully adjusted");

                if (!u.field_empty("#ADJ_AMNT") && adjAmnt > 0) {
                   
                    //exchange gain loss calculation
                    var egl = (adjAmnt * paidFxRate) - (adjAmnt * origFxRate);

                    u.modal_confirmation("Are you sure you want to Match the Record?", function(e) {
                        //Do Matching
                        grid.jqGrid("setCell", id, "OE_UNPOST_ADJ_FC_AMT", adjAmnt);
                        grid.jqGrid("setCell", id, "OE_UNPOST_ADJ_BC_AMT", adjAmnt * paidFxRate);
                        grid.jqGrid("setCell", id, "OUSTANDING_FC", (origAmnt - (postdAmnt + adjAmnt)));
                        grid.jqGrid("setCell", id, "OUSTANDING_BC", (origAmnt - (postdAmnt + adjAmnt)) * paidFxRate);
                        grid.jqGrid("setCell", id, "EXCH_GAIN_L0SS", egl);
                        $("#PAID_AMNT").val(parseFloat($("#PAID_AMNT").val()) - adjAmnt);


//Obtain Variables for Matched Details Grid

                        u.fill_form({
                            MA_TXN_DOC_TYPE: $("#ARH_ATD_CODE").val(),
                            MA_TXN_DOC_NO: $("#ARD_TXN_DOC_NO").val(),
                            MA_TXN_SYS_ID: $("#ARD_SYS_ID").val(),

                            MA_MAIN_ACCT: grid.jqGrid("getCell", id, "OE_MAIN_ACCT_CODE"),
                            MA_SUB_ACCT: grid.jqGrid("getCell", id, "OE_SUB_ACCT_CODE"),

                            MA_REF_SYS_ID: grid.jqGrid("getCell", id, "OE_SYS_ID"),
                            MA_REF_DOC_DATE: grid.jqGrid("getCell", id, "OE_DOC_DATE"),
                            MA_REF_CURRENCY: grid.jqGrid("getCell", id, "OE_CURR_CODE"),
                            MA_REF_CURR_RATE: grid.jqGrid("getCell", id, "OE_CURR_RATE"),
                            MA_MATCHED_FC_AMT: grid.jqGrid("getCell", id, "OE_UNPOST_ADJ_FC_AMT"),
                            MA_MATCHED_BC_AMT: grid.jqGrid("getCell", id, "OE_UNPOST_ADJ_BC_AMT"),
                            MA_REF_DR_CR: grid.jqGrid("getCell", id, "OE_DR_CR"),
                            MA_REF_DOC_TYPE: grid.jqGrid("getCell", id, "OE_DOC_TYPE"),
                            MA_REF_DOC_NO: grid.jqGrid("getCell", id, "OE_DOC_NO")

                        }, "#matchedDetlsForm");

                        //call funxtion Add matched details to Matched Transaction Listing Grid
                        var formData = u.parse_form("#matchedDetlsForm");
                        formData["MA_STATUS"] = "U";
                        $scope.MatchedDetlsGrid.addRowData(formData.ID, formData);

                        u.hide_confirm();
                    });

                } else {
                    u.growl_warning("Adjusment Field is empty")
                }
            } else {
                u.growl_info("Please select appropriate record to match");
            }
        });



        //UnMatching matched trasactions

        $("#btnUnMatch").click(function () {
            
            var grid = $scope.matchingGrid,
                id = grid.jqGrid("getGridParam", "selrow");
            

            if (id) {


               
                    //Obtain Variables for matching
                    var oustandingAmntFC = parseFloat(grid.jqGrid("getCell", id, "OUSTANDING_FC")),
                        oustandingAmntBC = parseFloat(grid.jqGrid("getCell", id, "OUSTANDING_BC")),
                        matchedAmntFC = parseFloat(grid.jqGrid("getCell", id, "OE_UNPOST_ADJ_FC_AMT")),
                        matchedAmntBC = parseFloat(grid.jqGrid("getCell", id, "OE_UNPOST_ADJ_BC_AMT")),
                        paidAmoubtFC = parseFloat($("#PAID_AMNT").val());

                  
                    if (matchedAmntFC === 0) return u.growl_info("There is No Matched Amount to Un-Match!!!");
                    u.modal_confirmation("Are you sure you want to Match the Record?", function (e) {
                    //Do UnMatching
                    grid.jqGrid("setCell", id, "OUSTANDING_FC", ((oustandingAmntFC + matchedAmntFC)));
                    grid.jqGrid("setCell", id, "OUSTANDING_BC", (oustandingAmntBC + matchedAmntBC));
                    grid.jqGrid("setCell", id, "EXCH_GAIN_L0SS", 0);
                    $("#PAID_AMNT").val(paidAmoubtFC + matchedAmntFC);

                    grid.jqGrid("setCell", id, "OE_UNPOST_ADJ_FC_AMT", 0);
                    grid.jqGrid("setCell", id, "OE_UNPOST_ADJ_BC_AMT", 0);

                        //Remove record From Matched Grid after un Matching
                    var mtGrid = $scope.MatchedDetlsGrid;
                    var rowIds = mtGrid.jqGrid("getDataIDs");
                   
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        /*------------------------------------------------
                         * get value of the cell or column in an array
                         *----------------------------------------------*/
                        //
                        var refDocNo = mtGrid.jqGrid("getCell", currRow, "MA_REF_DOC_NO");
                        var mathedDocNo = grid.jqGrid("currRow", id, "OE_DOC_NO");
                       
                        if (refDocNo === mathedDocNo) {

                            grid.jqGrid("delRowData", currRow);
                        }

                    }


                    //Hide confirmation Dialog box
                    u.hide_confirm();
                });
            }
        });

        //Search for Records to Match
        $("#btnOpenEntrySearch").click(function() {
            if (!u.field_empty("#RAD_SUB_ACCT_CODE")) {
                s["customerOpenEntries"]($("#RAD_SUB_ACCT_CODE").val(), function(data) {
                    if (data && data.length && data.length > 0) {
                        u.clear_grid_data($scope.matchingGrid);
                        for (var i in data) {

                            data[i]["OUSTANDING_FC"] = data[i]["OE_ORGNL_FC_AMT"] - data[i]["OE_ADJ_FC_AMT"] - data[i]["OE_UNPOST_ADJ_FC_AMT"];
                            data[i]["OUSTANDING_BC"] = data[i]["OE_ORGNL_BC_AMT"] - data[i]["OE_ADJ_BC_AMT"] - data[i]["OE_UNPOST_ADJ_FC_AMT"];

                            $scope.matchingGrid.addRowData(data[i].ID, data[i]);
                        }
                    } else {
                        u.growl_info("Could not find any Records");
                    }

                });
            } else {
                u.growl_warning("Please Select Sub Account Code");
            }

        });

        $scope.accountDetlsGrid = u.default_grid("#grdAcctsDetails", "#grdAcctsDetailsPager", "Receipt Account Details",
         ["ID", "Debit/Credit", "Currency", "Currency Rate", "Main Account Code", "Main Account Name", "Sub Ledger Code",
             "Sub Ledger Name", "Amount Foreign Cur.", "Amount Base Cur.", "Line Narration", "Created By",
             "Created Date", "Modified By", "Modified Date", "Status"],
         [
             { name: "RAD_SYS_ID", hidden: false, index: "RAD_SYS_ID" },
             { name: "RAD_DR_CR", index: "RAD_DR_CR", width: 100 },
             { name: "RAD_CUR_CODE", index: "RAD_CUR_CODE", width: 100 },
              { name: "ARD_CUR_RATE", index: "ARD_CUR_RATE", width: 100 },
             { name: "RAD_ACCT_CODE", index: "RAD_ACCT_CODE" },
             { name: "ACCT_NAME", index: "ACCT_NAME" },
             { name: "RAD_SUB_ACCT_CODE", index: "RAD_SUB_ACCT_CODE" },
             { name: "SUB_ACCT_NAME", index: "SUB_ACCT_NAME" },
             { name: "RAD_AMNT_FC", index: "RAD_AMNT_FC" },
             { name: "RAD_AMNT_BC", index: "RAD_AMNT_BC" },
             { name: "RAD_DESC", index: "RAD_DESC", width: 550 },
             { name: "RAD_CRTE_BY", index: "RAD_CRTE_BY" },
             { name: "RAD_CRTE_DATE", index: "RAD_CRTE_DATE" },
             { name: "RAD_MOD_BY", index: "RAD_MOD_BY" },
             { name: "RAD_MOD_DATE", index: "RAD_MOD_DATE" },
             { name: "RAD_STATUS", index: "RAD_STATUS" }
         ],
         function (id) {
             var grid = $scope.accountDetlsGrid;

             u.fill_form({
                 RAD_DR_CR: grid.jqGrid("getCell", id, "RAD_DR_CR"),
                 RAD_DR_CR_FLG: grid.jqGrid("getCell", id, "RAD_DR_CR"),
                 RAD_CUR_CODE: grid.jqGrid("getCell", id, "RAD_CUR_CODE"),
                 ARD_CUR_RATE: grid.jqGrid("getCell", id, "ARD_CUR_RATE"),
                 RAD_ACCT_CODE: grid.jqGrid("getCell", id, "RAD_ACCT_CODE"),
                 ACCT_NAME: grid.jqGrid("getCell", id, "ACCT_NAME"),
                 RAD_SUB_ACCT_CODE: grid.jqGrid("getCell", id, "RAD_SUB_ACCT_CODE"),
                 SUB_ACCT_NAME: grid.jqGrid("getCell", id, "SUB_ACCT_NAME"),
                 RAD_DESC: grid.jqGrid("getCell", id, "RAD_DESC"),
                 RAD_AMNT_FC: grid.jqGrid("getCell", id, "RAD_AMNT_FC"),
                 RAD_AMNT_BC: grid.jqGrid("getCell", id, "RAD_AMNT_BC"),
                 RAD_SYS_ID: grid.jqGrid("getCell", id, "RAD_SYS_ID")
             }, "#receiptAccountDetailsForm");
         });

        /*------------------------------------------------------
* Get the Flag of the Debit Credit on Selection
*----------------------------------------------------*/
        var select = document.getElementById("RAD_DR_CR");
        select.onchange = function () {
            var selectedString = select.options[select.selectedIndex].value;
            $("#RAD_DR_CR_FLG").val(selectedString);
        }
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
                        var cellValue = $scope.accountDetlsGrid.jqGrid("getCell", currRow, "RAD_ACCT_CODE");
                        cellValue += $scope.accountDetlsGrid.jqGrid("getCell", currRow, "RAD_SUB_ACCT_CODE");
                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     * $.inArray($("#RAD_ACCT_CODE").val() + $("#RAD_SUB_ACCT_CODE").val(), code) < 0
                     *--------------------------------------*/
                    //
                    if (true) {

                        var formData = u.parse_form("#receiptAccountDetailsForm");
                        formData.RAD_STATUS = "U";
                        formData.RAD_CRTE_BY = "Admin";
                        formData.RAD_CRTE_DATE = u.get_date();
                        $scope.accountDetlsGrid.addRowData(formData.ID, formData);

                        u.growl_success("Account Detail successfully added to grid");
                        u.form_reset("#receiptAccountDetailsForm");
                        $scope.updateTotals();

                    } else {
                        u.growl_warning("Main Account and Sub Ledger combination already exists, can't add account detail: " + $("#RAD_ACCT_CODE").val());
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
                totalDebBc += parseFloat(gridData[i]["RAD_DR_CR"] === "DR" ? gridData[i]["RAD_AMNT_BC"] : 0);
                totalDebFc += parseFloat(gridData[i]["RAD_DR_CR"] === "DR" ? gridData[i]["RAD_AMNT_FC"] : 0);

                totalCredBc += parseFloat(gridData[i]["RAD_DR_CR"] === "CR" ? gridData[i]["RAD_AMNT_BC"] : 0);
                totalCredFc += parseFloat(gridData[i]["RAD_DR_CR"] === "CR" ? gridData[i]["RAD_AMNT_FC"] : 0);
            }


            $("#totalDebitBC").val(totalDebBc);
            $("#totalDebitFC").val(totalDebFc);
            $("#totalCreditBC").val(totalCredBc);
            $("#totalCreditFC").val(totalCredFc);
            $("#diffBC").val(totalCredBc - totalDebBc);
            $("#diffFC").val(totalCredFc - totalDebFc);
        }


        /*------------------------------------------------------
         * Remove Account Detail or Mark for deletion from Grid
         *----------------------------------------------------*/
        $("#btn_remove_acntDetail").on("click", function () {
            if (u.grid_empty($scope.accountDetlsGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.accountDetlsGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var acntDetailStatus = grid.jqGrid("getCell", rowId, "RAD_STATUS");

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

                    grid.jqGrid("setCell", rowId, "RAD_STATUS", "D");
                    $("#" + rowId, "#grdOrigin").css({ color: "red" });

                    u.growl_success("Selected Account Detail successfully marked for deletion, please click on the save button to save changes");
                } else if (acntDetailStatus === "D") {

                    $("#" + rowId, "#grdOrigin").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "RAD_STATUS", "A");

                    u.growl_success("Account Detail successfully restored");
                }

                u.hide_confirm();
                $scope.updateTotals();
            });

        });

        /*------------------------------------------------------
               * Opend  Account Detail form
         *----------------------------------------------------*/
        $("#btn_Accts_Detail").on("click", function () {
            var grid = $scope.receiptDetailsGrid;

            var rowIds = grid.jqGrid('getDataIDs');
           
            var id = grid.jqGrid("getGridParam", "selrow");

            if (rowIds.length > 0) {
                 
                if (id) {
                    //check if there are any account details
                    var acountDetailsString = $scope.receiptDetailsGrid.jqGrid("getCell", id, "MS_ACCT_RCPT_ACNT_DTLS");;
                    var anyAccountDetails = acountDetailsString.length > 0;
                    if (anyAccountDetails) {//
                        var accountDetails = JSON.parse(acountDetailsString);
                        for (var i in accountDetails) $scope.accountDetlsGrid.addRowData(accountDetails[i]["ID"], accountDetails[i]);
                    } 
                    $("#AccountDetailsModal").modal();
                }
                else {
                    u.growl_warning("No Receipt Details selected, Please check and try again");
                }
               
            } 
         else u.growl_warning("No Receipt Details selected, Please check and try again");
         
        });

        $("#acntDetialsClose, #AccountDetailsModal .close").click(function() {
            u.clear_grid_data($scope.accountDetlsGrid);
        }); 

        $("#acntDetialsOk").click(function() {
            //obtain account details from the grid
            var accountDetails = u.get_grid_data($scope.accountDetlsGrid);
            //convert expense data if there is any into a json string
            var accountDetailsString = JSON.stringify(accountDetails);

            var id = $scope.receiptDetailsGrid.jqGrid("getGridParam", "selrow");
            if (id) {
                $scope.receiptDetailsGrid.jqGrid("setCell", id, "MS_ACCT_RCPT_ACNT_DTLS", accountDetailsString);
                $("#MS_ACCT_RCPT_ACNT_DTLS").val("");
                $("#AccountDetailsModal").modal("hide");
                u.clear_grid_data($scope.accountDetlsGrid);
            } else {
                u.growl_warning("No receipt details selected")
            }
            
        })

        /*-------------------------------------
         * Edit/Update Receipt Account Details
         *-----------------------------------*/
        //
        $("#btn_update_acntDetail").on("click", function () {

            if (u.grid_empty($scope.accountDetlsGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.accountDetlsGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "RAD_DR_CR");

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
            u.excel_export($scope.accountDetlsGrid, ["ID", "HEADER_ID"], "Receipts_Account_Details_List_Excel");
        });

        /*---------------------------------
         * REceipt Details List grid setup
         *-------------------------------*/
        $scope.receiptDetailsGrid = u.default_grid("#grdRVHeader", "#grdRVHeaderPager", "Receipt Details ",
         [
             "ID", "HEADER_ID",  "Txn Office Code", "Txn Office Name", "Department Office Name", "Department Office Name",
             "Txn Document No.", "Period", "Payment Mode", "Due Date", "Received From", "Receipt Narration",
            "Create by", "Create Date", "Modifed By", "Modified Date", "Status","Children", "Active"
         ],
         [
             { name: "ARD_SYS_ID", hidden: true, index: "ARD_SYS_ID" },
             { name: "ARD_ARH_SYS_ID", hidden: true, index: "ARD_ARH_SYS_ID", width: 550 },
            // { name: "ARD_RCPT_TYPE", index: "ARD_RCPT_TYPE" },
             { name: "ARD_TXN_OFF_CODE", index: "ARD_TXN_OFF_CODE" }, 
             { name: "TXN_OFF_NAME", index: "TXN_OFF_NAME" },
             { name: "ARD_DEP_OFF_CODE", index: "ARD_DEP_OFF_CODE" },
             { name: "DEP_OFF_NAME", index: "DEP_OFF_NAME" },
             { name: "ARD_TXN_DOC_NO", index: "ARD_TXN_DOC_NO" },
             { name: "ARD_ACNT_PERIOD", index: "ARD_ACNT_PERIOD" },
             { name: "ARD_PM_CODE", index: "ARD_PM_CODE" },
             { name: "ARD_DUE_DATE", index: "ARD_DUE_DATE" },
             { name: "ARD_RCVD_FROM", index: "ARD_RCVD_FROM" },
             { name: "ARD_RCPT_DESC", index: "ARD_RCPT_DESC" },
             { name: "ARD_CRTE_BY", index: "ARD_CRTE_BY" },
             { name: "ARD_CRTE_DATE", index: "ARD_CRTE_DATE" },
             { name: "ARD_MOD_BY", index: "ARD_MOD_BY" },
             { name: "ARD_MOD_DATE", index: "ARD_MOD_DATE" },
             { name: "ARD_STATUS", index: "ARD_STATUS" },
             { name: "MS_ACCT_RCPT_ACNT_DTLS", index: "MS_ACCT_RCPT_ACNT_DTLS", hidden: true },
             { name: "ARD_ACTIVE", index: "ARD_ACTIVE", hidden: true }
         ],
         function (id) {
             var grid = $scope.receiptDetailsGrid;


             u.fill_form({
                 ARD_RCPT_TYPE: grid.jqGrid("getCell", id, "ARD_RCPT_TYPE"),
                 ARD_TXN_OFF_CODE: grid.jqGrid("getCell", id, "ARD_TXN_OFF_CODE"),
                 TXN_OFF_NAME: grid.jqGrid("getCell", id, "TXN_OFF_NAME"),
                 ARD_DEP_OFF_CODE: grid.jqGrid("getCell", id, "ARD_DEP_OFF_CODE"),
                 DEP_OFF_NAME: grid.jqGrid("getCell", id, "DEP_OFF_NAME"),
                 ARD_TXN_DOC_NO: grid.jqGrid("getCell", id, "ARD_TXN_DOC_NO"),
                 ARD_ACNT_PERIOD: grid.jqGrid("getCell", id, "ARD_ACNT_PERIOD"),
                 ARD_CUR_CODE: grid.jqGrid("getCell", id, "ARD_CUR_CODE"),
                 ARD_CUR_RATE: grid.jqGrid("getCell", id, "ARD_CUR_RATE"),
                 ARD_PM_CODE: grid.jqGrid("getCell", id, "ARD_PM_CODE"),
                 ARD_DUE_DATE: grid.jqGrid("getCell", id, "ARD_DUE_DATE"),
                 ARD_RCVD_FROM: grid.jqGrid("getCell", id, "ARD_RCVD_FROM"),
                 ARD_RCPT_DESC: grid.jqGrid("getCell", id, "ARD_RCPT_DESC"),
                 ARD_SYS_ID: grid.jqGrid("getCell", id, "ARD_SYS_ID")
             }, "#receiptDetailsForm");
         },
        function (id) {

            $("#AccountDetailsModal").modal();


        }),


        /*----------------------------------------------
         * add Receipt Details to Receipt Details Grid
         *--------------------------------------------*/
        //
        $("#btn_add_rcptDetail").on("click", function() {

         

            if (u.form_validation("#receiptDetailsForm")) {
                u.modal_confirmation("Are you sure you want to add Receipt Detail to the grid?", function () {


                    var rowIds = $scope.receiptDetailsGrid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.receiptDetailsGrid.jqGrid("getCell", currRow, "ARD_TXN_DOC_NO");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     * $.inArray($("#ARD_RCPT_TYPE").val(), code) < 0
                     *--------------------------------------*/
                    //


                    if (true) {

                        var formData = u.parse_form("#receiptDetailsForm");
                        formData.ARD_STATUS = "U";
                        formData.ARD_CRTE_BY = "Admin";
                        formData.ARD_CRTE_DATE = u.get_date();
                        $scope.receiptDetailsGrid.addRowData(formData.ID, formData);
                        $("#MS_ACCT_RCPT_ACNT_DTLS").val("");
                        u.growl_success("Receipt Detail successfully added to grid");
                        u.form_reset("#receiptDetailsForm");


                    } else {
                        u.growl_warning("The Same Transaction Number exists, you cannot add same Document Number :  " + $("#ARD_TXN_DOC_NO").val());
                    }
                    u.hide_confirm();
                });
            }
            else {
                u.growl_error("Please fill all the fields that are marked red");
            }

        });


        /*------------------------------------------------------
         * Remove Receipt Detail or Mark for deletion from Grid
         *----------------------------------------------------*/

        $("#btn_remove_rcptDetail").on("click", function () {
            if (u.grid_empty($scope.receiptDetailsGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.receiptDetailsGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var rcptDetailStatus = grid.jqGrid("getCell", rowId, "ARD_STATUS");

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
                    u.growl_success("Selected Receipt Detail successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (rcptDetailStatus === "A") {

                    grid.jqGrid("setCell", rowId, "ARD_STATUS", "D");
                    $("#" + rowId, "#grdRVHeader").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Receipt Detail successfully marked for deletion, please click on the save button to save changes");

                } else if (rcptDetailStatus === "D") {

                    $("#" + rowId, "#grdRVHeader").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "ARD_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Receipt Detail successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update receipt details
         *------------------------------*/
        //
        $("#btn_update_rcptDetail").on("click", function () {

            if (u.grid_empty($scope.receiptDetailsGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.receiptDetailsGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "ARD_TXN_DOC_NO");

                //todo: use a more appropriate unique field
                if (code) {
                    var data = u.parse_form("#receiptDetailsForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);
                    
                    u.growl_success("Receipt Detail successfully updated");
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
            u.excel_export($scope.receiptDetailsGrid, ["ID", "HEADER_ID"], "Receipts_Account_Details_List_Excel");
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
                    if ($("#ARD_RCPT_TYPE").val() === "CR" && $("#RAD_DR_CR_FLG").val() === "CR") {
                        $scope.lov.call_dialog("Select Main Account", "customerMainAccoountsLov", $scope.dialog_data);
                    } else $scope.lov.call_dialog("Select Main Account", "getMainAccountLov", $scope.dialog_data);
                    
                    break;
                case "btn_sub_account":

                    if ($("#ARH_RCPT_TYPE").val() === "CR" && $("#RAD_DR_CR_FLG").val() === "CR") {
                        $scope.lov.callSearchDialog("Select Sub Ledger", "mainAccountCustomerLov", $scope.dialog_data, { mainActAcode: $("#RAD_ACCT_CODE").val() });
                    } else $scope.lov.call_dialog("Select Sub Ledger", "getSubAccountLov", $scope.dialog_data);
                    
                    break;
            }
        });

        u.lovDropDown("#ARD_PM_CODE", "getPaymentModeLov");

        u.set_datepicker("form input[name='ARH_TXN_DATE']");
        u.set_datepicker("#ARD_DUE_DATE");

        /*----------------------------------------------------
         *Transaction Matching  Modal   
         *---------------------------------------------------*/
       
        $("#btn_Txn_Matching").on("click", function () {

            var grid = $scope.accountDetlsGrid;

            var rowIds = grid.jqGrid('getDataIDs');

            var id = grid.jqGrid("getGridParam", "selrow");

            var SysID = grid.jqGrid("getCell", id, "RAD_SYS_ID");

            if (rowIds.length > 0) {

                    if (SysID) {
                        $("#PAID_AMNT").val($("#RAD_AMNT_FC").val());
                        $("#txnMatchingModal").modal();
                    }
                    else {
                    u.growl_warning("Please save before Matching, Please Save and try again");
                }
            }
            else {
                u.growl_warning("No Accounts selected for Matching, Please check and try again");
            }          

        });

        /*----------------------------------------------------
      *Matched Txn Details  Modal  
      *---------------------------------------------------*/

        $("#btn_Matched_Txn_detls").on("click", function () {
          
            alert("OK");

            var grid = $scope.MatchedDetlsGrid;

            var id = grid.jqGrid("getGridParam", "selrow");

            var SysID = grid.jqGrid("getCell", id, "RAD_SYS_ID");

            s.matchedOpenEntryDetails($("#RAD_SYS_ID").val(), function (result) {
             
             //clear Grid
                u.clear_grid_data($scope.MatchedDetlsGrid);
                        //populate Matched Details grid 
                        for (var i in result) {

                            $scope.MatchedDetlsGrid.addRowData(result[i].MA_SYS_ID, result[i]);

                            
                        }

                        //show modal
                        $("#MatchedDetailsModal").modal();

                    //if (result) {
                      
                    //   // clear grid before populating
                //    u.clear_grid_data($scope.MatchedDetlsGrid); 

                    //}
                    //else {
                    //    u.growl_info("There are no Matched Details for this record");
                    //}

                });
        });


        $scope.SaveFxn = function() {

            if (!u.form_validation("#receiptHeaderForm")) return u.growl_warning("Fields marked red are required");
            u.modal_confirmation("Are you sure you want to Save Changes?", function(e) {

                /*
                 * receipt header data
                 */
                var receiptHead = u.parse_form("#receiptHeaderForm");

                //receiptHead["MS_ACCT_RCPT_ACNT_DTLS"] = u.get_grid_data($scope.accountDetlsGrid);
                receiptHead["MS_ACCT_RECEIPTS_DTLS"] = u.get_grid_data($scope.receiptDetailsGrid);
                for (var i in receiptHead["MS_ACCT_RECEIPTS_DTLS"]) receiptHead["MS_ACCT_RECEIPTS_DTLS"][i]["MS_ACCT_RCPT_ACNT_DTLS"] = JSON.parse(receiptHead["MS_ACCT_RECEIPTS_DTLS"][i]["MS_ACCT_RCPT_ACNT_DTLS"]);
                var object = {
                    MS_ACT_RECEIPTS_HEAD: receiptHead,
                }

                if (receiptHead["ARH_STATUS"] === "A") {
                    object.ACCT_TXN_OPEN_ENTRY = u.get_grid_data($scope.matchingGrid);
                    object.ACCT_OPEN_ENTRY_MATCH_DETL = u.get_grid_data($scope.MatchedDetlsGrid);
                }
                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(receiptHead);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveReceipt(object, function(responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            s.getReceipt(responseData.data.ARH_SYS_ID, function(data) {
                                $scope.search_fill(data);
                            });
                            u.update_grid_status($scope.accountDetlsGrid, "ARD_STATUS", "MS_ACCT_RCPT_ACNT_DTLS", "RAD_STATUS");
                            // u.update_grid_status($scope.receiptDetailsGrid, "ARD_STATUS");
                            u.update_grid_status($scope.MatchedDetlsGrid, "MA_STATUS");

                            u.fill_form(responseData.data, "#receiptHeaderForm");

                            u.hide_confirm();
                            u.growl_success(responseData.message);
                            $scope.updateTotals();
                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function() {
                        $scope.saving = false;
                        u.hide_confirm();
                        u.growl_error("Server Please try again Later");
                    });
                }
            });
        };

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            /*-------------------------------
               * get Batch SEQ_RCT_BATCH
       *-----------------------------*/
            if (u.field_empty("#ARH_BATCH_NO")) {

                s.deftSequenceNo("SEQ_RCT_BATCH", function (result) {

                    $scope.result = result;

                    //alert((result));
                    
                    if (result) {
                        //Batch Number
                        $("#ARH_BATCH_NO").val(result);

                        $scope.SaveFxn();
                    } else {
                        u.growl_error("The Bach Number is not properly generated, Please check and try again");
                    }
                }, function (error) {

                    alert(error.exception);

                }
                );
            } else {
                $scope.SaveFxn();
            }
           
        });

        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").on("click", function () {
            u.modal_confirmation("Are you sure you want Delete the Record?", function (e) {
                u.modal_confirmation("Wait while the transaction is being deleted..........");
            });
        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#receiptHeaderForm");
                u.clear_grid_data($scope.accountDetlsGrid);
                u.clear_grid_data($scope.receiptDetailsGrid);
                u.hide_confirm();
                u.growl_success("Setup form successfully cleared")
            });

        });


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
                { name: "ARH_ATD_CODE", index: "ARH_ATD_CODE" },
                { name: "ARH_OFF_CODE", index: "ARH_OFF_CODE" },
                { name: "ARH_BATCH_NO", index: "ARH_BATCH_NO" }
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

  //Exchange rate calculation for FC and BC Amounts/

        document.getElementById("RAD_AMNT_FC").addEventListener("focusout", fxnBaseAmountCal);
        document.getElementById("ARD_CUR_CODE").addEventListener("focusout", fxnBaseAmountCal);
        document.getElementById("ARD_CUR_RATE").addEventListener("focusout", fxnBaseAmountCal);


              
            function fxnBaseAmountCal() {
                //alert("Input field lost focus.");
                var CurRate = parseFloat($("#ARD_CUR_RATE").val());
                var AmountFC = parseFloat($("#RAD_AMNT_FC").val());
                

                if (CurRate =="") {
                    u.growl_warning("Currency rate cannot be empty");
                }
                else if (CurRate >0) {
                    
                    var AmountBC = parseFloat(AmountFC*CurRate).toFixed(2);
                    $("#RAD_AMNT_BC").val(AmountBC);
                }
                else {

                }
            }

        /*---------------------------
         * Receipt Search
         *-------------------------*/
        $("#btnQueryReceipt").click(function () {

            if (!u.field_empty("#txtSearch")) {

                s.searchReceipt($("#txtSearch").val(),
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


                                //fill form and grids with the selected Receipt
                                $("#search-ok").click(function () {
                                    $scope.search_fill(result[$scope.selected_index]);
                                    $("#mySearchResultModal").modal("hide");
                                    u.clear_grid_data($scope.searchGrid);
                                });
                            } else if (result.length <= 0) {
                                u.growl_info("The Receipt does not Exist in the database.");
                            }
                        } else {
                            u.growl_info("The Receipt does not Exist in the database.");
                        }

                    });
            } else {
                u.growl_info("Please enter the Receipt code or Receipt name to find a Receipt");
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
                $scope.receiptDetailsGrid.jqGrid("clearGridData");

                /*----------------------------------------------------
                 * populate Receipt header Form with search results
                 *--------------------------------------------------*/
                u.fill_form(result, "#receiptHeaderForm");

                /*-----------------------------------
                 * set claim transactional status
                 *---------------------------------*/
                if (result["ARH_TRANS_STATUS"] === "C") {
                    $scope.setConfirmState();
                } else if (result["ARH_TRANS_STATUS"] === "P") {
                    $scope.setUnconfrimState();
                } else {
                    $("input[name='ClaimStatus']").val("No Status");
                    $scope.setUnconfrimState();
                }

                /*-------------------------------------
                 * populate Receipt currency grid
                 *-----------------------------------*/
                for (var i in result.MS_ACCT_RECEIPTS_DTLS) {
                    //result.MS_ACCT_RECEIPTS_DTLS[i]["ACUR_NAME"] = result.MS_ACCT_RECEIPTS_DTLS[i]["MS_INS_CURRENCY"]["CUR_FULL_NAME"];
                    for (var x in result.MS_ACCT_RECEIPTS_DTLS[i]["MS_ACCT_RCPT_ACNT_DTLS"]) result.MS_ACCT_RECEIPTS_DTLS[i]["MS_ACCT_RCPT_ACNT_DTLS"][x]["MS_ACCT_MAIN_ACCOUNT"] = [];
                    result.MS_ACCT_RECEIPTS_DTLS[i]["MS_ACCT_RCPT_ACNT_DTLS"] = JSON.stringify(result.MS_ACCT_RECEIPTS_DTLS[i]["MS_ACCT_RCPT_ACNT_DTLS"]);
                    console.log(result.MS_ACCT_RECEIPTS_DTLS[i]["MS_ACCT_RCPT_ACNT_DTLS"]);
                    $scope.receiptDetailsGrid.addRowData(result.MS_ACCT_RECEIPTS_DTLS[i]["ID"], result.MS_ACCT_RECEIPTS_DTLS[i]);
                }

                /*-------------------------------------
                 * populate Receipt company grid
                 *-----------------------------------*/
                //for (var i in result.MS_ACCT_RCPT_ACNT_DTLS) {
                //    //result.MS_ACCT_RCPT_ACNT_DTLS[i]["ACOM_NAME"] = result.MS_ACCT_RCPT_ACNT_DTLS[i]["MS_SYS_COMPANY"]["CMP_NAME"];
                //    $scope.accountDetlsGrid.addRowData(result.MS_ACCT_RCPT_ACNT_DTLS[i]["ID"], result.MS_ACCT_RCPT_ACNT_DTLS[i]);
                //}

                $scope.updateTotals();

            } else {
                u.growl_info("The Receipt your are searching for is invalid please try a different Receipt");
            }
        }

        

        $("#btnProposalConfirmation").click(function () {
            if (u.field_empty("#ARH_SYS_ID")) return u.growl_warning("Receipts has not been saved, please save claim registration.");
            $("#claimConfirmationModal").modal();
        });


        $("#btnRcptConfirm").click(function () {
            if (!u.form_validation("#confirmationForm")) return u.growl_warning("Receipts has not been saved, please save claim registration.");
            var log = {
                RCL_NARRATION: $("#NARRATION").val(),
                RCL_ARH_SYS_ID: $("#ARH_SYS_ID").val(),
                RCL_CRTE_BY: "Admin",
                RCL_STATUS: "A"
            };

            log.RCL_ACTION = $scope.isConfirmed() ? "Unconfirm" : "Confirm";
            alert(log.RCL_ACTION);
            s.receiptTransaction(log, function (response) {
                if (response.state) {
                    u.growl_success(response.message);
                    log.RCL_ACTION === "Confirm" ? $scope.setConfirmState() : $scope.setUnconfrimState();
                    $("#claimConfirmationModal").modal("hide");
                } else {
                    u.growl_error(response.message);
                }
            });

        })


        /*-----------------------------------
         * claim transaction status functions
         *----------------------------------*/
        $scope.isConfirmed = function () {
            return $("#ARH_TRANS_STATUS").val() === "C";
        }

        $scope.setConfirmState = function () {
            $("#ARH_TRANS_STATUS").val("C");
            $(".transStatusTxt").text("Unconfirm");
            $("input[name='ClaimStatus']").val("Confirmed");
            $("#claimPolInfoForm").find("input,select,textarea").each(function () {
                $(this).addClass("productConfirmed");
            });
        }

        $scope.setUnconfrimState = function () {
            $("#ARH_TRANS_STATUS").val("P");
            $(".transStatusTxt").text("Confirm");
            $("input[name='ClaimStatus']").val("Pending");
            $("#claimPolInfoForm").find("input,select,textarea").each(function () {
                $(this).removeClass("productConfirmed");
            });
        }


        /*--------------------------------------
         * LOV code validations
         *-------------------------------------*/
        u.lovCodeVal("form input[name='ARH_OFF_CODE']", "check_office_lov_code", "form input[name='OFF_NAME']");
        u.lovCodeVal("form input[name='ARH_ATD_CODE']", "checkTxnDocCode", "form input[name='ATD_NAME']");
        u.lovCodeVal("form input[name='ARD_TXN_OFF_CODE']", "check_office_lov_code", "form input[name='TXN_OFF_NAME']");
        u.lovCodeVal("form input[name='ARD_DEP_OFF_CODE']", "check_office_lov_code", "form input[name='DEP_OFF_NAME']");
        u.lovCodeVal("form input[name='ARD_CUR_CODE']", "check_currency_lov_code", "");
        u.lovCodeVal("form input[name='RAD_ACCT_CODE']", "check_mainAcct_lov_code", "form input[name='ACCT_NAME']");
        u.lovCodeVal("form input[name='RAD_SUB_ACCT_CODE']", "check_subAcct_lov_code", "form input[name='SUB_ACCT_NAME']");

    });//document ready function
})(window.$, window.service, window.utility, {});