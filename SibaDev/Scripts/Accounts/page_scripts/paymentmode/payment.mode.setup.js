(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
         * Grid definition
         *------------------------------------------------*/

        $scope.paymentModeGrid = u.default_grid("#grdPaymentMode", "#grdPaymentModePager", "Area List",
            ["Code", " Name", "Description", "Status", "Created By", "Created Date"],
           [
                { name: "PM_CODE", id: true, index: "PM_CODE" },
                { name: "PM_NAME", index: "PM_NAME" },
                { name: "PM_DESC", index: "PM_DESC" },
                { name: "PM_STATUS", index: "PM_STATUS" },
                { name: "PM_CRTE_BY", index: "PM_CRTE_BY" },
                { name: "PM_CRTE_DATE", index: "PM_CRTE_DATE" }
           ],
            function (id) {
                var grid = $scope.paymentModeGrid;

                $("form input[name='PM_CODE']").data("update", true);
                u.fill_form({
                    PM_CODE: grid.jqGrid("getCell", id, "PM_CODE"),
                    PM_NAME: grid.jqGrid("getCell", id, "PM_NAME"),
                    PM_DESC: grid.jqGrid("getCell", id, "PM_DESC"),
                    PM_STATUS: grid.jqGrid("getCell", id, "PM_STATUS")
                }, "#paymntForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  paymentModeGrid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#paymntForm")) {
                u.modal_confirmation("Are you sure you want to add Payment Mode to the grid?", function () {

                    var rowIds = $scope.paymentModeGrid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.paymentModeGrid.jqGrid("getCell", currRow, "PM_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#PM_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#paymntForm");
                        formData.PM_STATUS = "U";
                        formData.PM_CRTE_BY = "Admin";
                        formData.PM_CRTE_DATE = u.get_date();
                        $scope.paymentModeGrid.addRowData(formData.PM_CODE, formData);
                        
                        u.growl_success("Payment Mode successfully added to grid");
                        u.form_reset("#paymntForm");
                    } else {
                        
                        u.growl_warning("Code exists, you cannot add same Code :  " + $("#PM_CODE").val());
                    }
                    u.hide_confirm();
                });
            } else {
                u.growl_error("Please fill all the fields that are marked red");
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on("click", function () {
            if (u.grid_empty($scope.paymentModeGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.paymentModeGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "PM_STATUS");

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
                    u.growl_success("Selected Payment Mode successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "PM_STATUS", "D");
                    $("#" + rowId, "#grdPaymentMode").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Payment Mode successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdPaymentMode").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "PM_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.paymentModeGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.paymentModeGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "PM_CODE");

                if (code == $("#PM_CODE").val()) {
                    var data = u.parse_form("#paymntForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);


                    u.growl_success("Payment Mode successfully updated");
                    $("form input[name='PM_CODE']").data("update", false);
                    u.form_reset("#paymntForm")
                }
                else {
                    u.growl_info("Please Select a Payment Mode to edit");
                }
                u.hide_confirm();
            });
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            if (u.grid_empty($scope.paymentModeGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.paymentModeGrid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.savePaymentModes(u.get_grid_data($scope.paymentModeGrid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.paymentModeGrid, "PM_STATUS")

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



        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").on("click", function () {
            u.modal_warning("Are you sure you want Delete the Record?");

            $("#btnOkWarning").click(function (e) {
                u.modal_warning("Wait while the transaction is being deleted..........");
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#paymntForm");
                u.clear_grid_data($scope.paymentModeGrid);
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
            u.excel_export($scope.paymentModeGrid, ["ID"], "Payment_Mode_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryPaymentMode").click(function () {
            var queryTxt = $("#txtSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.searchPaymentModes(queryTxt,
                    function (result) {
                        if (result && result.length && result.length > 0) {
                            /*-------------------------------
                             * clear grid before populating
                             *-----------------------------*/
                            $scope.paymentModeGrid.jqGrid("clearGridData");
                            for (var i in result) {
                                $scope.paymentModeGrid.addRowData(result[i].PM_CODE, result[i])
                            }
                        } else {
                            u.growl_info("Couldn't find a Payment Mode for the code or name entered")
                        }

                    })
            } else {

                //fetch all 
                s.getPaymentModes(function (modes) {
                    if (modes && modes.length && modes.length > 0) {
                        /*--------------------------------
                         * clear grid before populating
                         *------------------------------*/
                        $scope.paymentModeGrid.jqGrid("clearGridData");
                        for (var i in modes) {
                            $scope.paymentModeGrid.addRowData(modes[i].PM_CODE, modes[i]);
                        }
                    } else {
                        u.growl_info("There are no Payment Modes at the moment, please setup one")
                    }
                    
                })
            }

        });

        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='PM_CODE']", "checkPaymentModeCode");
    });

})(window.$, window.service, window.utility, {})
