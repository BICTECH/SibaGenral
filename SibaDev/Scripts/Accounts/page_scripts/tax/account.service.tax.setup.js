(function ($, s, u, $scope) {
    $(function () {

       /*------------------
        * Grid definition
        *-----------------*/

        $scope.ServiceTaxGrid = u.default_grid("#grdAccountServiceTax", "#grdAccountServiceTaxPager", "Service Tax List",
          ["Code", " Name", "Tax Perc", "Customer Type Code", "Min Tax Applicable", "From Date", "To Date", "Main Account Code", "Sub Account Code", "Created By", "Created Date", "Status","ID"],
           [
                { name: "TX_TAX_CODE", id: true, index: "TX_TAX_CODE" },
                { name: "TX_TAX_NAME", index: "TX_TAX_NAME" },
                { name: "TX_TAX_PERC", index: "TX_TAX_PERC" },
                { name: "TX_CUST_CAT_CODE", index: "TX_CUST_CAT_CODE" },
                { name: "TX_MIN_TAX_APP", index: "TX_MIN_TAX_APP" },
                { name: "TX_FROM_DATE", index: "TX_FROM_DATE" },
                { name: "TX_TO_DATE", index: "TX_TO_DATE" },
                { name: "TX_MAIN_ACCT_CODE", index: "TX_MAIN_ACCT_CODE" },
                { name: "TX_SUB_ACCT_CODE", index: "TX_SUB_ACCT_CODE" },
                { name: "TX_CRTE_BY", index: "TX_CRTE_BY" },
                { name: "TX_CRTE_DATE", index: "TX_CRTE_DATE" },
                { name: "TX_STATUS", index: "TX_STATUS" },
                { name: "TX_SYS_ID", index: "TX_SYS_ID", hidden:true }
           ],
            function (selId) {
                var grid = $scope.ServiceTaxGrid;

                $("form input[name='TX_TAX_CODE']").data("update", true);
                u.fill_form({
                    TX_TAX_CODE: grid.jqGrid("getCell", selId, "TX_TAX_CODE"),
                    TX_TAX_NAME: grid.jqGrid("getCell", selId, "TX_TAX_NAME"),
                    TX_TAX_PERC: grid.jqGrid("getCell", selId, "TX_TAX_PERC"),
                    TX_CUST_CAT_CODE: grid.jqGrid("getCell", selId, "TX_CUST_CAT_CODE"),
                    TX_MIN_TAX_APP: grid.jqGrid("getCell", selId, "TX_MIN_TAX_APP"),
                    TX_FROM_DATE: grid.jqGrid("getCell", selId, "TX_FROM_DATE"),
                    TX_TO_DATE: grid.jqGrid("getCell", selId, "TX_TO_DATE"),
                    TX_MAIN_ACCT_CODE: grid.jqGrid("getCell", selId, "TX_MAIN_ACCT_CODE"),
                    TX_SUB_ACCT_CODE: grid.jqGrid("getCell", selId, "TX_SUB_ACCT_CODE")
                }, "#taxForm");
            });
        $scope.saving = false;

        u.set_datepicker("#TX_FROM_DATE");
        u.set_datepicker("#TX_TO_DATE");
        /*--------------------------------------------------
           * call add function to add records to  ServiceTaxGrid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#taxForm")) {

                if (u.field_empty("input[name='TX_TAX_CODE']")) return u.growl_error

              ("You have not entered any information, please enter and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Service Tax to the grid?", function () {

                    var rowIds = $scope.ServiceTaxGrid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.ServiceTaxGrid.jqGrid("getCell", currRow, "TX_TAX_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TX_TAX_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#taxForm");
                        formData.TX_STATUS = "U";
                        formData.TX_CRTE_BY = "Admin";
                        formData.TX_CRTE_DATE = u.get_date();
                        $scope.ServiceTaxGrid.addRowData(formData.TX_TAX_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Service Tax successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                })

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }

        });


        /*----------------------
         * LOV initialization
         *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOV", "#grdLOVPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function(e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer Category", "get_custcat_lov", $scope.dialog_data);
                    break;
                case "btn_main_account":
                    $scope.lov.call_dialog("Select Main Account", "getMainAccountLov", $scope.dialog_data);
                    break;
                case "btn_sub_account":
                    $scope.lov.call_dialog("Select Sub Account", "getSubAccountLov", $scope.dialog_data);
                    break;
            }
        });

        /*----------------------------------------------------
         * Remove record or Mark for deletion from Service Tax Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on("click", function () {
            if (u.grid_empty($scope.ServiceTaxGrid)) return u.growl_info("The grid is empty");

            var grid = $scope.ServiceTaxGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TX_STATUS");

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
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "TX_STATUS", "D");
                    $("#" + rowId, "#grdAccountServiceTax").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Service Tax successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdAccountServiceTax").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TX_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Service Tax successfully restored");

                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.ServiceTaxGrid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected row?", function () {

                var grid = $scope.ServiceTaxGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "TX_TAX_CODE");

                if (code === $("#TX_TAX_CODE").val()) {
                    var data = u.parse_form("#taxForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.hide_confirm();
                    u.growl_success("Service Tax successfully updated");
                    $("form input[name='TX_TAX_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btnSave").on("click", function () {
            if (u.grid_empty($scope.ServiceTaxGrid)) return u.growl_info("The grid is empty");
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.ServiceTaxGrid));

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveServiceTax(u.get_grid_data($scope.ServiceTaxGrid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.ServiceTaxGrid, "TX_STATUS");
                            
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
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#taxForm");
                u.clear_grid_data($scope.ServiceTaxGrid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared")
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
            u.excel_export($scope.ServiceTaxGrid, ["ID"], "Service Tax_List_Excel");
        });


        /*---------------------------
         * Search
         *-------------------------*/
        $("#btnQueryTax").click(function () {
            var queryTxt = $("#txtSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.searchServiceTax(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.ServiceTaxGrid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.ServiceTaxGrid.addRowData(result[i].TX_TAX_CODE, result[i])
                        }
                    },
                    function (err) {

                    })
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.ServiceTaxGrid.jqGrid("clearGridData");

                //fetch all regions
                s.getServiceTaxs(function (regions) {
                    for (var i in regions) {
                        $scope.ServiceTaxGrid.addRowData(regions[i].TX_TAX_CODE, regions[i]);
                    }
                })
            }

        })

        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='TX_TAX_CODE']", "checkServiceTaxCode");

        /*-----------------------------
      * Country LOV code validation
      *---------------------------*/
        u.lovCodeVal("form input[name='TX_CUST_CAT_CODE']", "check_country_lov_code", "form input[name='TX_CUST_TYPE_CODE_NAME']");
        u.lovCodeVal("form input[name='TX_MAIN_ACCT_CODE']", "check_mainAcct_lov_code", "form input[name='ACCT_NAME']");
        u.lovCodeVal("form input[name='TX_SUB_ACCT_CODE']", "check_subAcct_lov_code", "form input[name='SUB_ACCT_NAME']");

    });

})(window.$, window.service, window.utility, {})