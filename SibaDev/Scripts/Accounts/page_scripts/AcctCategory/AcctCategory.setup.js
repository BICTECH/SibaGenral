(function ($, s, u, $scope) {
    $(function () {
       
        /*-----------------------------
         * City grid definition
         *---------------------------*/
        $scope.AcctCategory_grid = u.default_grid("#grdAcctCategory", "#grdBenitsPager", "Benefits List",
            ["Code", "Name", "Description",  "Created By", "Created Date", "Modified By", "Modified Date", "Status"],
            [
                { name: "ACAT_CODE", id: true, index: "ACAT_CODE" },
                { name: "ACAT_NAME", index: "ACAT_NAME" },
                { name: "ACAT_DESC", index: "ACAT_DESC" },
                { name: "ACAT_CRTE_BY", index: "BEN_CRTE_BY" },
                { name: "ACAT_CRTE_DATE", index: "BEN_CRTE_DATE" },
                { name: "ACAT_MOD_BY", index: "ACAT_MOD_BY" },
                { name: "ACAT_MOD_DATE", index: "ACAT_MOD_DATE" },
                { name: "ACAT_STATUS", index: "ACAT_STATUS" }
            ],
            function (id) {
                var grid = $scope.AcctCategory_grid;

                u.fill_form({
                    ACAT_CODE: grid.jqGrid("getCell", id, "ACAT_CODE"),
                    ACAT_NAME: grid.jqGrid("getCell", id, "ACAT_NAME"),
                    ACAT_DESC: grid.jqGrid("getCell", id, "ACAT_DESC"),
                    ACAT_STATUS: grid.jqGrid("getCell", id, "ACAT_STATUS")
                }, "#acctCateforyForm");

            });
        
     

        $scope.saving = false;

        /*--------------------------------------------------
         * call add function to add records to  AcctCategory_grid
         *------------------------------------------------*/
        //
        $("#btnAdd").on("click", function () {
            if (u.form_validation("#acctCateforyForm")) {
                u.modal_confirmation("Are you sure you want to add the Account Category to the grid?", function(parameters) {
                    var rowIds = $scope.AcctCategory_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.AcctCategory_grid.jqGrid("getCell", currRow, "ACAT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#ACAT_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#acctCateforyForm");
                        formData.ACAT_STATUS = "U";
                        formData.ACAT_CRTE_BY = "Admin";
                        formData.ACAT_CRTE_DATE = u.get_datetime();

                        $scope.AcctCategory_grid.addRowData(formData.ACAT_CODE, formData);
                        u.growl_success("Account Category Successfully Added to grid");
                        u.form_reset("#acctCateforyForm");
                    }

                    else {
                        u.modal_alert("Code exists, you cannot add same Code :  " + $("#ACAT_CODE").val());
                    }
                    u.hide_confirm();
                })
                
            } else {
                u.growl_warning("All fields marked red are required");
            }

                
        });

        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/
        
        $("#btnRemove").on("click", function () {
            if (u.grid_empty($scope.AcctCategory_grid)) return u.growl_info("Account Category grid is empty");
            var grid = $scope.AcctCategory_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "ACAT_STATUS");


            var code = grid.jqGrid("getCell", rowId, "ACAT_CODE");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the selected Account Category?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.growl_success("Account Category successfully Deleted")
                    
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "ACAT_STATUS", "D");
                    $("#" + rowId, "#grdAcctCategory").css({ color: "red" });

                    u.growl_success("Account Category successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAcctCategory").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "ACAT_STATUS", "A");
                    u.growl_success("Account Category successfully Restored")
                }
                u.hide_confirm();

            });


            

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btnUpdate").on("click", function () {
            if (u.grid_empty($scope.AcctCategory_grid)) return u.growl_info("Account Category grid is empty!!");
            u.modal_confirmation("Are you sure you want to update the slected Account Category?", function(o) {
                var grid = $scope.AcctCategory_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var recordStatus = grid.jqGrid("getCell", rowId, "ACAT_STATUS");
                var code = grid.jqGrid("getCell", rowId, "ACAT_CODE");

                if (code === $("#ACAT_CODE").val()) {

                    $("#btnOkWarning").click(function(e) {
                        var data = u.parse_form("#acctCateforyForm");

                        for (var i in data)grid.jqGrid("setCell", rowId, i, data[i]);

                        u.hide_confirm();
                        u.form_reset("#acctCateforyForm");
                    });

                } else {
                    u.growl_warning("Please select an Account Category to update");
                }
            })
            
            
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btnSave").on("click", function () {
            if (u.grid_empty($scope.AcctCategory_grid)) return u.growl_info("Account Category grid is empty!!");
            u.modal_confirmation("Are you sure you want to Save your changes?",function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.AcctCategory_grid));

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveAcctCategory(u.get_grid_data($scope.AcctCategory_grid), function (response) {
                        $scope.saving = false;
                        if (response.state) {
                            u.update_grid_status($scope.AcctCategory_grid, "ACAT_STATUS")
                            
                            u.growl_success(response.message)

                        }else
                        {
                            u.growl_success(response.message)
                        }
                        u.hide_confirm()
                    }, function () { $scope.saving = false; });

                }
                

            });

        });


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
            u.modal_confirmation("Are you sure you want to clear all data from the form?",function (e) {
                u.form_reset("#acctCateforyForm");
                u.clear_grid_data($scope.AcctCategory_grid);
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
            u.excel_export($scope.AcctCategory_grid, ["ID"], "TxnTyepes_Excel");
        });


        /*---------------------------
         * City Search
         *-------------------------*/
        $("#btnSearch").click(function () {
            if (!u.field_empty("#txtSearch")) {
                s.searchAcctCategory($("#txtSearch").val(),
                    function (result) {
                        if (result && result.length && result.length > 0) {
                            /*-------------------------------
                             * clear grid before populating
                             *-----------------------------*/
                            $scope.AcctCategory_grid.jqGrid("clearGridData");
                            for (var i in result) {
                                $scope.AcctCategory_grid.addRowData(result[i].ACAT_CODE, result[i])
                            }
                        } else {
                            u.growl_info("Couldn't find a match for the code or name entered")
                        }
                        
                    })
            } else {
                //fetch all Account Categories
                s.getAcctCategory(function (txnTypes) {
                    if (txnTypes && txnTypes.length && txnTypes.length > 0) {
                        /*--------------------------------
                         * clear grid before populating
                         *------------------------------*/
                        $scope.AcctCategory_grid.jqGrid("clearGridData");
                        for (var i in txnTypes) {
                            $scope.AcctCategory_grid.addRowData(txnTypes[i].ACAT_CODE, txnTypes[i]);
                        }
                    } else {
                        u.growl_info("There are no Account Categories at the moment, please setup one")
                    }
                    
                });
            }
            
        })
    });
})(window.$, window.service, window.utility, {});