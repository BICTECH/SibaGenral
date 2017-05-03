(function ($, s, u, $scope) {
    $(function () {

        //Risk Excess
        $scope.treaty_grid = u.default_grid("#grdTreatyType", "#grdTreatyTypePager", "Treaty Proportional Details",
            ["Code", "Seq", "Type", "Excess", "Limit", "Lines", "Treaty Limit",
                "Profit Comm", "Ratio", "Premium Reserve Ratio", "Claim Ratio",
                "Deposit Premium", "Est Prem", "Cash call Limit",
                "Advice limit", "Loss Years",
             "Created by", "Created date", "Status", "ID", "PT ID","COMPANIES","SUBCLASSES"],
            [
                { name: "TD_TTY_CODE", index: "TD_TTY_CODE", width: 150 },
                { name: "TD_SEQ", index: "TD_SEQ", width: 150 },
                { name: "TD_TTY_TYPE", index: "TD_TTY_TYPE", width: 150 },
                { name: "TD_CESS_TYPE", index: "TD_CESS_TYPE", hidden: false, width: 200 },
                { name: "TD_OR_LIMIT", index: "TD_OR_LIMIT", width: 150 },
                { name: "TD_NO_LINES", index: "TD_NO_LINES", width: 150 },
                { name: "TD_TTY_LIMIT", index: "TD_TTY_LIMIT", width: 150 },
                { name: "TD_PROFIT_COMM", index: "TD_PROFIT_COMM", width: 150 },
                { name: "TD_MGT_EXP_RATIO", index: "TD_MGT_EXP_RATIO", width: 150 },
                { name: "TD_PREM_RSVE_RATIO", index: "TD_PREM_RSVE_RATIO", width: 150 },
                { name: "TD_OS_CLM_RSVE_RATIO", index: "TD_OS_CLM_RSVE_RATIO", hidden: false, width: 200 },
                { name: "TD_DEPOSIT_PREM", index: "TD_DEPOSIT_PREM", width: 150 },
                { name: "TD_EST_PREM", index: "TD_EST_PREM", width: 150 },
                { name: "TD_CASH_CALL_LIMIT", index: "TD_CASH_CALL_LIMIT", width: 150 },
                { name: "TD_CLM_ADVICE_LIMIT", index: "TD_CLM_ADVICE_LIMIT", width: 150 },
                { name: "TD_LOSS_CFWD_YEARS", index: "TD_LOSS_CFWD_YEARS", width: 150 },
                { name: "TD_CRTE_BY", index: "TD_CRTE_BY", hidden: false, width: 200 },
                { name: "TD_CRTE_DATE", index: "TD_CRTE_DATE", hidden: false, width: 200 },
                { name: "TD_STATUS", index: "TD_STATUS", hidden: false, width: 200 },
                { name: "TD_SYS_ID", index: "TD_SYS_ID", hidden: false, width: 200 },
                { name: "TD_TH_SYS_ID", index: "TD_TH_SYS_ID", hidden: false, width: 200 },
                { name: "MS_RI_PTTY_COMPANY", index: "MS_RI_PTTY_COMPANY", hidden: false, width: 200 },
                { name: "MS_RI_PTTY_SUBCLASS", index: "MS_RI_PTTY_SUBCLASS", hidden: false, width: 200 }

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.treaty_grid;
                $("form input[name='TD_TTY_CODE']").data("update", true);
                u.fill_form({
                    TD_SYS_ID: grid.jqGrid("getCell", selId, "TD_SYS_ID"),
                    TD_TTY_CODE: grid.jqGrid("getCell", selId, "TD_TTY_CODE"),
                    TD_SEQ: grid.jqGrid("getCell", selId, "TD_SEQ"),
                    TD_TTY_TYPE: grid.jqGrid("getCell", selId, "TD_TTY_TYPE"),
                    TD_CESS_TYPE: grid.jqGrid("getCell", selId, "TD_CESS_TYPE"),
                    TD_OR_LIMIT: grid.jqGrid("getCell", selId, "TD_OR_LIMIT"),
                    TD_NO_LINES: grid.jqGrid("getCell", selId, "TD_NO_LINES"),
                    TD_TTY_LIMIT: grid.jqGrid("getCell", selId, "TD_TTY_LIMIT"),
                    TD_PROFIT_COMM: grid.jqGrid("getCell", selId, "TD_PROFIT_COMM"),
                    TD_MGT_EXP_RATIO: grid.jqGrid("getCell", selId, "TD_MGT_EXP_RATIO"),
                    TD_PREM_RSVE_RATIO: grid.jqGrid("getCell", selId, "TD_PREM_RSVE_RATIO"),
                    TD_OS_CLM_RSVE_RATIO: grid.jqGrid("getCell", selId, "TD_OS_CLM_RSVE_RATIO"),
                    TD_DEPOSIT_PREM: grid.jqGrid("getCell", selId, "TD_DEPOSIT_PREM"),
                    TD_EST_PREM: grid.jqGrid("getCell", selId, "TD_EST_PREM"),
                    TD_CASH_CALL_LIMIT: grid.jqGrid("getCell", selId, "TD_CASH_CALL_LIMIT"),
                    TD_LOSS_CFWD_YEARS: grid.jqGrid("getCell", selId, "TD_LOSS_CFWD_YEARS"),

                }, "#treatypropForm");
                u.fill_form({
                    TSC_TD_SYS_ID: grid.jqGrid("getCell", selId, "TD_SYS_ID"),
                }, "#subclassForm");
                u.fill_form({
                    TCP_TD_SYS_ID: grid.jqGrid("getCell", selId, "TD_SYS_ID"),
                }, "#companyForm");
            }),


        
        // Risk Excess
        $scope.subClass_grid = u.default_grid("#grdSubClass", "#grdgrdSubClassPager", "Proportional Subclass",
            [" Code", "PML Perc", "EML Y/N",
             "Created by", "Created date", "Status"],
            [
                { name: "TSC_SCLASS_CODE", index: "TSC_SCLASS_CODE", width: 150 },
                { name: "TSC_TTY_LIMIT_FC", index: "TSC_TTY_LIMIT_FC", width: 150 },
                { name: "TSC_EML_YN", index: "TSC_EML_YN", width: 150 },
                { name: "TSC_CRTE_BY", index: "TSC_CRTE_BY", hidden: false, width: 200 },
                { name: "TSC_CRTE_DATE", index: "TSC_CRTE_DATE", hidden: false, width: 200 },
                { name: "TSC_STATUS", index: "TSC_STATUS", hidden: false, width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.subClass_grid;
                $("form input[name='TSC_SCLASS_CODE']").data("update", true);
                u.fill_form({
                    TSC_SCLASS_CODE: grid.jqGrid("getCell", selId, "TSC_SCLASS_CODE"),
                    TSC_TTY_LIMIT_FC: grid.jqGrid("getCell", selId, "TSC_TTY_LIMIT_FC"),
                    TSC_TTY_LIMIT_BC: grid.jqGrid("getCell", selId, "TSC_TTY_LIMIT_BC"),
                    TSC_STATUS: grid.jqGrid("getCell", selId, "TSC_STATUS"),
                    //TSC_TD_SYS_ID: grid.jqGrid("getCell", sel_id, "TSC_TD_SYS_ID"),
                }, "#subclassForm");
            }),



        // Risk Excess
        $scope.riCompany_grid = u.default_grid("#grdRICompany", "#grdRICompanyPager", "Companies",
            [" Code", "Share", "Commission", "Leader YN", "Tax",
             "Created by", "Created date", "Status", "TD", "ID"],
            [
                { name: "TCP_COMP_CODE", index: "TCP_COMP_CODE", width: 150 },
                { name: "TCP_TTY_SHARE", index: "TCP_TTY_SHARE", width: 150 },
                { name: "TCP_TTY_COMM", index: "TCP_TTY_COMM", width: 150 },
                { name: "TCP_LEADER_YN", index: "TCP_LEADER_YN", hidden: false, width: 200 },
                { name: "TCP_TTY_TAX", index: "TCP_TTY_TAX", width: 150 },              
                { name: "TCP_CRTE_BY", index: "TCP_CRTE_BY", hidden: false, width: 200 },
                { name: "TCP_CRTE_DATE", index: "TCP_CRTE_DATE", hidden: false, width: 200 },
                { name: "TCP_STATUS", index: "TCP_STATUS", hidden: false, width: 200 },
                { name: "TCP_TD_SYS_ID", index: "TCP_TD_SYS_ID", width: 150 },
                { name: "TCP_SYS_ID", index: "TCP_SYS_ID", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.riCompany_grid;

                $("form input[name='TCP_COMP_CODE']").data("update", true);
                u.fill_form({
                    TCP_COMP_CODE: grid.jqGrid("getCell", selId, "TCP_COMP_CODE"),
                    TCP_TTY_SHARE: grid.jqGrid("getCell", selId, "TCP_TTY_SHARE"),
                    TCP_TTY_COMM: grid.jqGrid("getCell", selId, "TCP_TTY_COMM"),
                    TCP_LEADER_YN: grid.jqGrid("getCell", selId, "TCP_LEADER_YN"),
                    TCP_TTY_TAX: grid.jqGrid("getCell", selId, "TCP_TTY_TAX"),
                    TCP_TD_SYS_ID: grid.jqGrid("getCell", selId, "TCP_TD_SYS_ID"),
                }, "#companyForm");
            }),


        // Treaty Group Grid ****
        $scope.treatygrp_grid = u.default_grid("#gridtreatygrp", "#gridtreatygrpPager", "Treaty Group",
            ["ID","Code", "Name"],
            [
                { name: "GP_SYS_ID", index: "GP_SYS_ID", width: 150 },
                { name: "GP_CODE", index: "GP_CODE", width: 150 },
                { name: "GP_NAME", index: "GP_NAME", width: 150 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (selId) {

                var grid = $scope.treatygrp_grid;
                var selId = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    TH_TTY_ID: grid.jqGrid("getCell", selId, "GP_SYS_ID"),
                    TH_TTY_CODE: grid.jqGrid("getCell", selId, "GP_CODE"),
                    GP_NAME: grid.jqGrid("getCell", selId, "GP_NAME"),
                }, "#proptreatyForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (selId) {

                var grid = $scope.treatygrp_grid;
                var selId = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    TH_TTY_ID: grid.jqGrid("getCell", selId, "GP_SYS_ID"),
                    TH_TTY_CODE: grid.jqGrid("getCell", selId, "GP_CODE"),
                    GP_NAME: grid.jqGrid("getCell", selId, "GP_NAME"),
                }, "#proptreatyForm");

                // hide modal on double click
                $("#treatygroupModal").modal("hide");

            }),

          
        /*--------------------------------------------------
        * treaty Group Modal 
        *------------------------------------------------*/
        $("#btn_treatygrp").click(function () {
            //alert("iii");
            $("#treatygroupModal").modal();

        });

        /*---------------------------
         * Search
         *-------------------------*/
        $("#btnQueryTreaty").click(function () {
            var queryTxt = $("#treatySearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_treatygrp(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.treatygrp_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.treatygrp_grid.addRowData(result[i].GP_SYS_ID, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.treatygrp_grid.jqGrid("clearGridData");

                //fetch all regions
                s.get_treatygrps(function (regions) {
                    for (var i in regions) {
                        $scope.treatygrp_grid.addRowData(regions[i].GP_SYS_ID, regions[i]);
                    }
                });
            }

        });

        function getProductRiskLov() {
            /*
                obtain parameter for our request
            */
            var subclassData = {
                TT_SUB_CLASS: $("#TH_TTY_ID").val(),
            }; //
            var grid = $scope.subClass_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //declare array to contain the codes to varify
            var CodeArray = [];

            // iterate through the rows in the grid and add sub class/product to Array
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get value of the cell or column in an array
                
                var cellCode = grid.jqGrid("getCell", currRow, "TSC_SCLASS_CODE");

                //alert(cellCode);
                CodeArray.push(cellCode);
            }

            //send parameters and get motor Risks from the database
            s.getProdtRisk(subclassData, function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.subClass_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {

                        result[i]["TSC_SCLASS_CODE"] = result[i]["TSC_SCLASS_CODE"];
                        result[i]["TSC_TTY_LIMIT_FC"] = result[i]["TSC_TTY_LIMIT_FC"];
                        result[i]["TSC_STATUS"] = result[i]["TSC_STATUS"];
                        result[i]["TSC_CRTE_BY"] = result[i]["TSC_CRTE_BY"];
                        result[i]["TSC_CRET_DATE"] = result[i]["TSC_CRET_DATE"];
                        result[i]["TSC_EML_YN"] = result[i]["TSC_EML_YN"];
                        if ($.inArray(CodeArray) < 0) {

                            //fill TSC_CRTE_BY in default covers if not in the grid

                            $scope.subClass_grid.addRowData(result[i].ID, result[i]);
                        }
                        else {

                            u.growl_warning("Sub class exists for Treaty Group " + CodeArray);
                        }

                        //$scope.subClass_grid.addRowData(result[i]["TSC_SCLASS_CODE"], result[i]);
                    }
                }
            });
        }

        /*--------------------------------------------------
        * treaty Tyep Details Modal 
        *------------------------------------------------*/
        //
        $("#btn_treaty_type_Detail").click(function () {
            if (u.form_validation("#proptreatyForm")) {
                //getProductRiskLov();
                $("#TreatyTypeDetailskModal").modal();
            }
            else {
                u.growl_warning("Please fill the Treaty Proporional form above and try again");
            };          
            //$("#TreatyTypeDetailskModal").modal();          
        });
        /*--

        
        /*--------------------------------------------------
        * SubclassDetails Modal 
        *------------------------------------------------*/
        //
        $("#btn_treaty_subclass").click(function () {

            var grid = $scope.treaty_grid;
            var selRow = grid.jqGrid("getGridParam", "selrow");
            var count = selRow.length;
            if (count > 0) {
                getProductRiskLov();
                $("#SubclassModal").modal();
            }
            else {
                u.growl_warning("No Treaty Detail selected, Please check and try again");
            };

        });
        /*--

        
        /*--------------------------------------------------
        * treaty Tyep Details Modal 
        *------------------------------------------------*/
        //
        $("#btn_ri_company").click(function () {

            //obthain the id of the selected treaty details
            var grid = $scope.treaty_grid;
            var selRow = $scope.selectedTreaty = grid.jqGrid("getGridParam", "selrow");

            if (selRow) {
                //obtain the companies that have been assigned to selected treaty details
                var companiesString = grid.jqGrid("getCell", selRow, "MS_RI_PTTY_COMPANY") || "[]";

                console.log(companiesString)

                var companyJson = [];
                if (companiesString.length <= 0) {
                }
                companyJson = JSON.parse(companiesString);
                console.log(companyJson);

                for (var i in companyJson) {
                    $scope.riCompany_grid.addRowData(companyJson[i].ID, companyJson[i]);
                }

                $("#RICompanyModal").modal();
            }
            else {
                u.growl_warning("No Treaty Detail selected, Please check and try again");
            }

        });

        $("#companyOk").click(function () {

            if ($scope.selectedTreaty) {
                //obtain the compnaies that have been selected
                var companies = u.get_grid_data($scope.riCompany_grid);
                console.log(companies);
                alert(JSON.stringify(companies))
                //assign the set companies to the selected treaty detials
                $scope.treaty_grid.jqGrid("setCell", $scope.selectedTreaty, "MS_RI_PTTY_COMPANY", JSON.stringify(companies));

            } else {
                u.growl_info("No selected treaty to update");
            }
            $("#RICompanyModal").modal("hide");
            u.clear_grid_data($scope.riCompany_grid);
        });

        $("#RICompanyModal .close, #companyClose").click(function () {
            u.clear_grid_data($scope.riCompany_grid);
        });

        //$("#companyOk").click(function() {

        //    if ($scope.selectedTreaty) {
        //        //obtain the compnaies that have been selected
        //        var companies = u.get_grid_data($scope.riCompany_grid);
        //        console.log(companies);
        //        alert(JSON.stringify(companies))
        //        //assign the set companies to the selected treaty detials
        //        $scope.treaty_grid.jqGrid("setCell", $scope.selectedTreaty, "MS_RI_PTTY_COMPANY", JSON.stringify(companies));

        //    } else {
        //        u.growl_info("No selected treaty to update");
        //    }
        //    $("#RICompanyModal").modal("hide");
        //    u.clear_grid_data($scope.riCompany_grid);
        //});

        //$("#RICompanyModal .close, #companyClose").click(function() {
        //    u.clear_grid_data($scope.riCompany_grid);
        //});


        /*----------------------
         * LOV initialization
         *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOVRegion", "#grdLOVRegionPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function (e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
                case "btn_group":
                    $scope.lov.call_dialog("Select Group", "get_lov_treatygroup", $scope.dialog_data);
                    break;
                case "btn_product":
                    $scope.lov.call_dialog("Select Product", "get_lov_product", $scope.dialog_data);
                    break;
                case "btn_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_company":
                    $scope.lov.call_dialog("Select Company", "get_lov_company", $scope.dialog_data);
                    break;
            }
        }); /*------------------------------------------
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


        /*-------------------------------------
        * setting datepicker for date fields
        *------------------------------------*/
        u.set_datepicker("input[name='TH_SART_DATE']");
        u.set_datepicker("input[name='TH_END_DATE']");


        /*--------------------------------------------------
        * Treaty Details Modal close
        *------------------------------------------------*/
        $("#btn_ttyDetails_OnClose").click(function () {

            if (u.grid_empty($scope.treaty_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#TreatyTypeDetailskModal").modal("hide");
                    u.hide_confirm();
                });
            } 
            else {
                $("#TreatyTypeDetailskModal").modal("hide");
            }
        });

           /*--------------------------------------------------
           * call add function to add records to  treaty_grid
           *------------------------------------------------*/
        //
        $("#btn_add_prop_details").on("click", function () {

            if (u.form_validation("#treatypropForm")) {

                //$("#TD_SYS_ID").val("");

                //if ($("#TD_SYS_ID").val() == "") {
                //    RetnSequenceNo("RI_PTTY_DETL_SEQ", getVehSeqNo);

                //    function getVehSeqNo(data) {
                //        $("#TD_SYS_ID").val(data);
                //    }
                //}

                u.modal_confirmation("Are you sure you want to add RI Proportional Details to the grid?", function () {

                    var rowIds = $scope.treaty_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.treaty_grid.jqGrid("getCell", currRow, "TD_TTY_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TD_TTY_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#treatypropForm");

                        formData.TD_STATUS = "U";
                        formData.TD_CRTE_BY = "Admin";
                        formData.TD_CRTE_DATE = u.get_date();
                        $scope.treaty_grid.addRowData(formData.TD_TTY_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI Proportional Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }


        });


        /*--------------------------------
         * Treaty Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_prop_details").on("click", function () {

            if (u.grid_empty($scope.treaty_grid)) return u.growl_info("Cover grid is empty");

            if (u.form_validation("#treatypropForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    var grid = $scope.treaty_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "TD_TTY_CODE");

                    if (code === $("#TD_TTY_CODE").val()) {
                        var data = u.parse_form("#treatypropForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Treaty Cover updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from Treaty Grid
         *---------------------------------------------------*/

        $("#btn_remove_prop_details").on("click", function () {

            if (u.grid_empty($scope.treaty_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.treatygrp_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TD_STATUS");

            var code = grid.jqGrid("getCell", rowId, "TD_TTY_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "TD_STATUS", "D");
                    $("#" + rowId, "#grdTreatyType").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdTreatyType").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TD_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
        * Treaty Details Modal close
        *------------------------------------------------*/
        $("#btn_Subclass_Onclose").click(function () {

            if (u.grid_empty($scope.subClass_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#SubclassModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#SubclassModal").modal("hide");
            }
        });

        /*--------------------------------------------------
        * call add function to add records to  subClass_grid
        *------------------------------------------------*/
        //
        $("#btn_add_subclass").on("click", function () {

            if (u.form_validation("#subclassForm")) {

                u.modal_confirmation("Are you sure you want to add RI Sub class Details to the grid?", function () {

                    var rowIds = $scope.subClass_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.subClass_grid.jqGrid("getCell", currRow, "TSC_SCLASS_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TSC_SCLASS_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#subclassForm");

                        formData.TSC_STATUS = "U";
                        formData.TSC_CRTE_BY = "Admin";
                        formData.TSC_CRTE_DATE = u.get_date();
                        $scope.subClass_grid.addRowData(formData.TSC_SCLASS_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI Sub class Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }


        });


        /*--------------------------------
         * Sub class Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_subclass").on("click", function () {

            if (u.grid_empty($scope.subClass_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Subclass?", function () {

                var grid = $scope.subClass_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "TSC_SCLASS_CODE");

                if (code == $("#TSC_SCLASS_CODE").val()) {

                    grid.jqGrid("setCell", rowId, "TSC_SCLASS_CODE", $("#TSC_SCLASS_CODE").val());
                    grid.jqGrid("setCell", rowId, "TSC_TTY_LIMIT_FC", $("#TSC_TTY_LIMIT_FC").val());
                    grid.jqGrid("setCell", rowId, "TSC_TTY_LIMIT_FC", $("#TSC_TTY_LIMIT_FC").val());
                    grid.jqGrid("setCell", rowId, "TSC_TD_SYS_ID", $("#TD_SYS_ID").val());
                    //grid.jqGrid('setCell', row_id, 'TSC_STATUS', $('#TSC_STATUS').val("U"));
                    u.hide_confirm();
                    u.growl_success("Sub class successfully updated");
                    $("form input[name='TSC_SCLASS_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Sub class Grid
        *---------------------------------------------------*/

        $("#btn_remove_subclass").on("click", function () {

            if (u.grid_empty($scope.subClass_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.subClass_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TSC_STATUS");

            var code = grid.jqGrid("getCell", rowId, "TSC_SCLASS_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "TSC_STATUS", "D");
                    $("#" + rowId, "#grdSubClass").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdSubClass").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TSC_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------------------------
       * Treaty Details Modal close
       *------------------------------------------------*/
        $("#btn_TtyCompany_Onclose").click(function () {

            if (u.grid_empty($scope.riCompany_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#RICompanyModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#RICompanyModal").modal("hide");
            }
        });

        /*--------------------------------------------------
        * call add function to add records to  subClass_grid
        *------------------------------------------------*/
        //
        $("#btn_add_treatycomp").on("click", function () {

            if (u.form_validation("#companyForm")) {

                u.modal_confirmation("Are you sure you want to add RI Company Details to the grid?", function () {

                    var rowIds = $scope.riCompany_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.riCompany_grid.jqGrid("getCell", currRow, "TCP_COMP_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TCP_COMP_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#companyForm");

                        formData.TCP_STATUS = "U";
                        formData.TCP_CRTE_BY = "Admin";
                        formData.TCP_CRTE_DATE = u.get_date();
                        $scope.riCompany_grid.addRowData(formData.TCP_COMP_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI Sub class Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }


        });


        /*--------------------------------
         * Company Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_treatycomp").on("click", function () {

            if (u.grid_empty($scope.riCompany_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Subclass?", function () {

                var grid = $scope.riCompany_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "TCP_COMP_CODE");

                if (code == $("#TCP_COMP_CODE").val()) {

                    grid.jqGrid("setCell", rowId, "TCP_COMP_CODE", $("#TCP_COMP_CODE").val());
                    grid.jqGrid("setCell", rowId, "TCP_TTY_SHARE", $("#TCP_TTY_SHARE").val());
                    grid.jqGrid("setCell", rowId, "TCP_TTY_COMM", $("#TCP_TTY_COMM").val());
                    grid.jqGrid("setCell", rowId, "TCP_LEADER_YN", $("#TCP_LEADER_YN").val());
                    grid.jqGrid("setCell", rowId, "TCP_TTY_TAX", $("#TCP_TTY_TAX").val());
                    u.hide_confirm();
                    u.growl_success("Treaty Companies successfully updated");
                    $("form input[name='TCP_COMP_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Sub class Grid
        *---------------------------------------------------*/

        $("#btn_remove_treatycomp").on("click", function () {

            if (u.grid_empty($scope.riCompany_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.riCompany_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TCP_STATUS");

            var code = grid.jqGrid("getCell", rowId, "TCP_COMP_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "TCP_STATUS", "D");
                    $("#" + rowId, "#grdRICompany").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdRICompany").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TCP_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#proptreatyForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.treaty_grid)) {
                return u.growl_warning("Please add RI Details");
            }

            //if (u.grid_empty($scope.subClass_grid)) {
            //    return u.growl_warning("Please add Sub Class");
            //}

            if (u.grid_empty($scope.riCompany_grid)) {
                return u.growl_warning("Please add Participating companies")
            }


            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var treatyData = u.parse_form("#proptreatyForm");
                if (!$scope.searched) treatyData.TH_STATUS = "U";
                //treatyData.TH_STATUS = "U";

                treatyData.MS_RI_PTTY_DETL = u.get_grid_data($scope.treaty_grid);

                for (var i in treatyData.MS_RI_PTTY_DETL) {
                    
                    treatyData.MS_RI_PTTY_DETL[i]["MS_RI_PTTY_COMPANY"] = JSON.parse(treatyData.MS_RI_PTTY_DETL[i]["MS_RI_PTTY_COMPANY"]);

                }

                console.log(treatyData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_treatyprop(treatyData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.treaty_grid, "TD_STATUS");

                            u.update_grid_status($scope.subClass_grid, "TSC_STATUS");

                            u.update_grid_status($scope.riCompany_grid, "TCP_STATUS");

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


        /*-----------------
        * search grid
        *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Treaty Proportional Search Results",
            ["ID", "Proportional Code", "Year", "Currency", "Status", "index"],
            [
                { name: "TH_TTY_CODE", index: "TH_TTY_CODE", hidden: true },
                { name: "TH_TTY_CODE", index: "TH_TTY_CODE" },
                { name: "TH_UWYR", index: "TH_UWYR" },
                { name: "TH_CURRENCY", index: "TH_CURRENCY" },
                { name: "TH_STATUS", index: "TH_STATUS" },
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
        $("#btnQueryTreatyprop").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_treaty(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        u.clear_grid_data($scope.search_grid);
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
                        u.growl_info("Treaty not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Treaty Code and try again!");
            }
        });


        $scope.search_fill = function (motortariff) {

            $scope.treaty_grid.jqGrid("clearGridData");
            $scope.subClass_grid.jqGrid("clearGridData");
            $scope.riCompany_grid.jqGrid("clearGridData");

            u.fill_form(motortariff, "#proptreatyForm");

            //populating child entities
            u.clear_grid_data($scope.treaty_grid);
            for (var i in motortariff.MS_RI_PTTY_DETL) {
                //motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_SUBCLASS = JSON.stringify(motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_SUBCLASS)
                motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_COMPANY = JSON.stringify(motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_COMPANY)
                $scope.treaty_grid.addRowData(motortariff.MS_RI_PTTY_DETL[i].TD_SYS_ID, motortariff.MS_RI_PTTY_DETL[i]);

                //u.clear_grid_data($scope.subClass_grid);
                for (var x in motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_SUBCLASS) {
                    $scope.subClass_grid.addRowData(motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_SUBCLASS[x].TSC_TD_SYS_ID, motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_SUBCLASS[x]);
                }

                //u.clear_grid_data($scope.riCompany_grid);
                for (var y in motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_COMPANY) {
                    $scope.riCompany_grid.addRowData(motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_COMPANY[y].TCP_TD_SYS_ID, motortariff.MS_RI_PTTY_DETL[i].MS_RI_PTTY_COMPANY[y]);
                }
            }

        };


                //Treaty Proportional date/

        document.getElementById("TH_SART_DATE").addEventListener("focusout", $scope.fcntreatydate);
        document.getElementById("TH_END_DATE").addEventListener("focusout", $scope.fcntreatydate);

        $scope.fcntreatydate =function () {
            //alert("Input field lost focus.");
            var sDate = $("#TH_SART_DATE").val();
            var eDate = $("#TH_END_DATE").val();

            var startDate = new Date(sDate);
            var endDate = new Date(eDate);

            var treatyPeriodDays = u.get_dateDifference(startDate, endDate);

            if (treatyPeriodDays <= 0) {
                u.growl_warning("Treaty End date cannot be less than or equal to start date");
                //reset end date 
                $("#TH_END_DATE").val("");
            }
            else if ((treatyPeriodDays > 0)) {
               
            }
        }


        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.lovCodeVal("form input[name='TH_CURRENCY']", "check_exrates_code", "form input[name='TH_CUR_RATE']");

    });

})(window.$, window.service, window.utility, {})