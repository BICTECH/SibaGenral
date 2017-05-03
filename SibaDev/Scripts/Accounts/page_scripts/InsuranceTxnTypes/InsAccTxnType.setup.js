(function ($, s, u, $scope) {
    $(function () {
       
        /*-----------------------------
         * City grid definition
         *---------------------------*/
        $scope.InsAcctTxnType_grid = u.default_grid("#grdInsAcctTxnType", "#grdBenitsPager", "Benefits List",
            ["Code", "Name", "Description", "Txn Source", "Created By", "Created Date", "Modified By", "Modified Date", "Status"],
            [
                { name: "TXN_CODE", id: true, index: "TXN_CODE" },
                { name: "TXN_NAME", index: "TXN_NAME" },
                { name: "TXN_DESC", index: "TXN_DESC" },
                 { name: "TXN_INS_SRCE", index: "TXN_INS_SRCE" },
                { name: "TXN_CRTE_BY", index: "BEN_CRTE_BY" },
                { name: "TXN_CRTE_DATE", index: "BEN_CRTE_DATE" },
                { name: "TXN_MOD_BY", index: "TXN_MOD_BY" },
                { name: "TXN_MOD_DATE", index: "TXN_MOD_DATE" },
                { name: "TXN_STATUS", index: "TXN_STATUS" }
            ],
            function (selId) {
                var grid = $scope.InsAcctTxnType_grid;

                u.fill_form({
                    TXN_CODE: grid.jqGrid("getCell", selId, "TXN_CODE"),
                    TXN_NAME: grid.jqGrid("getCell", selId, "TXN_NAME"),
                    TXN_DESC: grid.jqGrid("getCell", selId, "TXN_DESC"),
                    TXN_INS_SRCE: grid.jqGrid("getCell", selId, "TXN_INS_SRCE"),
                    TXN_STATUS: grid.jqGrid("getCell", selId, "TXN_STATUS")
                }, "#acctTxnTypeForm");

            });
        
     

        $scope.saving = false;

        /*--------------------------------------------------
         * call add function to add records to  InsAcctTxnType_grid
         *------------------------------------------------*/
        //
        $("#btnAdd").on("click", function () {

            if (u.form_validation("#acctTxnTypeForm")) {
                u.modal_confirmation("Are you sure you want to add the Transaction Type?", function() {
                    var rowIds = $scope.InsAcctTxnType_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.InsAcctTxnType_grid.jqGrid("getCell", currRow, "TXN_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TXN_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctTxnTypeForm");
                        formData.TXN_STATUS = "U";
                        formData.TXN_CRTE_BY = "Admin";
                        formData.TXN_CRTE_DATE = "1/4/2016";
                        formData.TXN_MOD_BY = "Admin";
                        formData.TXN_MOD_DATE = "1/4/2016";
                        $scope.InsAcctTxnType_grid.addRowData(formData.TXN_CODE, formData);
                        u.form_reset("#acctTxnTypeForm");
                        u.growl_success("Transaction type successfully added");
                    }

                    else {
                        u.modal_alert("Code exists, you cannot add same Code :  " + $("#TXN_CODE").val());
                    }
                    u.hide_confirm();
                });
            }
        });

        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/
        
        $("#btnRemove").on("click", function () {

            var grid = $scope.InsAcctTxnType_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TXN_STATUS");


            var code = grid.jqGrid("getCell", rowId, "TXN_CODE");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_warning("Are you sure you want to remove the Record?");


            /*-----------------------------
             * if user Clicks on Yes....
             *----------------------------*/
            //
            $("#btnOkWarning").click(function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_succcess("Transaction Type successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "TXN_STATUS", "D");
                    $("#" + rowId, "#grdInsAcctTxnType").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_succcess("Transaction Type successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdInsAcctTxnType").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TXN_STATUS", "A");
                    u.hide_confirm();
                    u.growl_succcess("Transaction Type successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btnUpdate").on("click", function () {

            var grid = $scope.InsAcctTxnType_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TXN_STATUS");
            var code = grid.jqGrid("getCell", rowId, "TXN_CODE");

            if (code === $("#TXN_CODE").val()) {
                var data = u.parse_form("#acctTxnTypeForm");
                for(var  i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                u.growl_success("Transaction Type successfuly updated");
               
            }else u.growl_warning("Please select the correct transaction type to edit");
            u.hide_confirm();
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btnSave").on("click", function () {
            if (u.grid_empty($scope.InsAcctTxnType_grid)) return u.growl_warning("Transaction type grid is empty");
            u.modal_confirmation("Are you sure you want to Save?", function () {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log($scope.InsAcctTxnType_grid.jqGrid("getRowData"));

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveInsAcctTxn($scope.InsAcctTxnType_grid.jqGrid("getRowData"), function(responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.InsAcctTxnType_grid, "TXN_STATUS");
                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function(err) {
                        $scope.saving = false;

                    });
                    u.hide_confirm();
                } else {
                    u.growl_info("Cant save transaction, setup is busy. Please");
                }


            });


        });


        var message = "";
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


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btnReset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#acctTxnTypeForm");
                u.clear_grid_data($scope.InsAcctTxnType_grid);
                u.hide_confirm();
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

        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#export-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.InsAcctTxnType_grid, ["ID"], "TxnTyepes_Excel");
        });


        /*---------------------------
         * City Search
         *-------------------------*/
        $("#btnSearch").click(function () {
            var queryTxt = $("#txtSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.searchInsAcctTxn(queryTxt,
                    function(result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.InsAcctTxnType_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.InsAcctTxnType_grid.addRowData(result[i].TXN_CODE, result[i]);
                        }
                    },
                    function(err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.InsAcctTxnType_grid.jqGrid("clearGridData");

                //fetch all cities
                s.getInsAcctTxns(function (txnTyepes) {
                    for (var i in txnTyepes) {
                        //cities[i].REG_NAME = cities[i].MS_SYS_REGIONS.REG_NAME;
                        $scope.InsAcctTxnType_grid.addRowData(txnTyepes[i].TXN_CODE, txnTyepes[i]);
                    }
                });
            }
            
        });
    });
})(window.$, window.service, window.utility, {});