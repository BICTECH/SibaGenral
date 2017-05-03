(function ($, s, u, $scope) {
    $(function () {
       
        $scope.saving = false;


        /*---------------------------------------------
         * ducument number generation grid defenition
         *-------------------------------------------*/
        $scope.docNoGrid = u.default_grid("#grdDocNo", "#grdDocNoPager", "Document Number Generation List",
            [
                "ID", "Year", "From Date", "To Date", "Current No.", "Start No.", "Next Number", "End No.",
                "Separator", "Prefix", "Suffix", "Append Country?", "Append Region?", "Append Office?", "Append Department?",
                "foreign", "Created By", "Created Date", "Status"
            ],

            [
                { name: "DNG_SYS_ID", index: "DNG_SYS_ID", hidden:true },
                { name: "DNG_ACNT_YEAR", index: "DNG_ACNT_YEAR" },
                { name: "DNG_FROM_DATE", index: "DNG_FROM_DATE" },
                { name: "DNG_TO_DATE", index: "DNG_TO_DATE" },
                { name: "DNG_CUR_NO", index: "DNG_CUR_NO" },
                { name: "DNG_STRT_NO", index: "DNG_STRT_NO" },
                { name: "DNG_NXT_NO", index: "DNG_NXT_NO" },
                { name: "DNG_END_NO", index: "DNG_END_NO" },
                { name: "DNG_SEPARATOR", index: "DNG_SEPARATOR" },
                { name: "DNG_PREF", index: "DNG_PREF" },
                { name: "DNG_SUFX", index: "DNG_SUFX" },
                { name: "DNG_APND_CNTRY_YN", index: "DNG_APND_CNTRY_YN" },
                { name: "DNG_APND_REG_YN", index: "DNG_APND_REG_YN" },
                { name: "DNG_APND_OFF_YN", index: "DNG_APND_OFF_YN" },
                { name: "DNG_APND_DEP_YN", index: "DNG_APND_DEP_YN" },
                { name: "DNG_ATD_CODE", index: "DNG_ATD_CODE", hidden: true },
                { name: "DNG_CRTE_BY", index: "DNG_CRTE_BY" },
                { name: "DNG_CRTE_DATE", index: "DNG_CRTE_DATE" },
                { name: "DNG_STATUS", index: "DNG_STATUS" }
            ],
            
            function (id) {
                var grid = $scope.docNoGrid;

                u.fill_form({
                    DNG_ACNT_YEAR: grid.jqGrid("getCell", id, "DNG_ACNT_YEAR"),
                    DNG_FROM_DATE: grid.jqGrid("getCell", id, "DNG_FROM_DATE"),
                    DNG_TO_DATE: grid.jqGrid("getCell", id, "DNG_TO_DATE"),
                    DNG_CUR_NO: grid.jqGrid("getCell", id, "DNG_CUR_NO"),
                    DNG_STRT_NO: grid.jqGrid("getCell", id, "DNG_STRT_NO"),
                    DNG_NXT_NO: grid.jqGrid("getCell", id, "DNG_NXT_NO"),
                    DNG_END_NO: grid.jqGrid("getCell", id, "DNG_END_NO"),
                    DNG_SEPARATOR: grid.jqGrid("getCell", id, "DNG_SEPARATOR"),
                    DNG_PREF: grid.jqGrid("getCell", id, "DNG_PREF"),
                    DNG_SUFX: grid.jqGrid("getCell", id, "DNG_SUFX"),
                    DNG_APND_CNTRY_YN: grid.jqGrid("getCell", id, "DNG_APND_CNTRY_YN"),
                    DNG_APND_REG_YN: grid.jqGrid("getCell", id, "DNG_APND_REG_YN"),
                    DNG_APND_OFF_YN: grid.jqGrid("getCell", id, "DNG_APND_OFF_YN"),
                    DNG_APND_DEP_YN: grid.jqGrid("getCell", id, "DNG_APND_DEP_YN")
                   
                }, "#docNoForm");

            });

        /*----------------------------
         * add document no generation
         *---------------------------*/
        $("#btn_add_docNo").on("click", function () {
            if (u.form_validation("#docNoForm")) {
                u.modal_confirmation("Are you sure you want to add Document No. Generation to the grid?", function() {

                    var rowIds = $scope.docNoGrid.jqGrid("getDataIDs");

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

                        /*---------------------------------------------
                         * get value of the cell or column in an array
                         *-------------------------------------------*/
                        //
                        var cellValue = $scope.docNoGrid.jqGrid("getCell", currRow, "DNG_ACNT_YEAR");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DNG_ACNT_YEAR").val(), code) < 0) {
                        var formData = u.parse_form("#docNoForm");
                        formData.DNG_STATUS = "U";
                        formData.DNG_CRTE_BY = "Admin";
                        formData.DNG_CRTE_DATE = u.get_date();
                        $scope.docNoGrid.addRowData(formData.DNG_ACNT_YEAR, formData);
                        u.form_reset("#docNoForm");
                        u.hide_confirm();
                        u.growl_success("Setup successfully added to grid");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Year exists, you cannot add the same Year: " + cellValue);
                    }
                });
            } else {
                u.growl_warning("Please fill all fields that are marked red");
            }



        });


        /*----------------------------
         * remove document no generation
         *---------------------------*/
        $("#btn_delete_docNo").on("click", function () {
            if (u.grid_empty($scope.docNoGrid)) return u.growl_info("The Document No. Generation grid is empty");
            var grid = $scope.docNoGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DNG_STATUS");


            var code = grid.jqGrid("getCell", rowId, "DNG_ACNT_YEAR");

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
                    u.growl_success("Document No. Generation successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "DNG_STATUS", "D");
                    $("#" + rowId, "grdDocNo").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Document No. Generation successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "grdDocNo").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DNG_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Document No. Generation successfully restored");
                }

            });

        });


        /*----------------------------
         * update document no generation
         *---------------------------*/
        $("#btn_update_docNo").on("click", function () {
            if (u.grid_empty($scope.docNoGrid)) return u.growl_info("The Document No. Generation grid is empty");
            u.modal_confirmation("Are you sure you want to update the selected Document No. Generation?", function () {
                var grid = $scope.docNoGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "DNG_ACNT_YEAR");

                if (code === $("#DNG_ACNT_YEAR").val()) {

                    var data = u.parse_form("#docNoForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.hide_confirm();
                    u.growl_success("Document No. Generation successfully updated");
                    u.form_reset("#docNoForm");
                    $("form input[name='DNG_ACNT_YEAR']").data("update", false);
                } else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });


        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#docNo-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.docNoGrid, ["ID","foreign"], "Document_No_List_Excel");
        });


        /*------------------------------------
         * default ducuments grid defenition
         *----------------------------------*/
        $scope.defAccntGrid = u.default_grid("#grdDeftAccount", "#grdDeftAccountPager", "Default Account List",
            [
                "ID", "Account Code", "Account Name", "Minimum Amount",
                "Maximum Amount", "foreign", "Created By", "Created Date", "Status"
            ],

            [
                { name: "DA_SYS_ID", index: "DA_SYS_ID", hidden: true },
                { name: "DA_ACNT_CODE", index: "DA_ACNT_CODE" },
                { name: "ACNT_NAME", index: "ACNT_NAME" },
                { name: "DA_MIN_AMNT", index: "DA_MIN_AMNT" },
                { name: "DA_MAX_AMNT", index: "DA_MAX_AMNT" },
                { name: "DA_ATD_CODE", index: "DA_ATD_CODE", hidden: true },
                { name: "DA_CRTE_BY", index: "DA_CRTE_BY" },
                { name: "DA_CRTE_DATE", index: "DA_CRTE_DATE" },
                { name: "DA_STATUS", index: "DA_STATUS" }
            ],
            
            function (id) {
                var grid = $scope.defAccntGrid;

                u.fill_form({
                    DA_ACNT_CODE: grid.jqGrid("getCell", id, "DA_ACNT_CODE"),
                    ACNT_NAME: grid.jqGrid("getCell", id, "ACNT_NAME"),
                    DA_MIN_AMNT: grid.jqGrid("getCell", id, "DA_MIN_AMNT"),
                    DA_MAX_AMNT: grid.jqGrid("getCell", id, "DA_MAX_AMNT")
                }, "#defAcntForm");

            });


        /*----------------------
         * add default account
         *--------------------*/
        $("#btn_add_defAcnt").on("click", function () {
            if (u.form_validation("#defAcntForm")) {
                u.modal_confirmation("Are you sure you want to add Default Account to the grid?", function () {

                    var rowIds = $scope.defAccntGrid.jqGrid("getDataIDs");

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

                        /*---------------------------------------------
                         * get value of the cell or column in an array
                         *-------------------------------------------*/
                        //
                        var cellValue = $scope.defAccntGrid.jqGrid("getCell", currRow, "DA_ACNT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DA_ACNT_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#defAcntForm");
                        formData.DA_STATUS = "U";
                        formData.DA_CRTE_BY = "Admin";
                        formData.DA_CRTE_DATE = u.get_date();
                        $scope.defAccntGrid.addRowData(formData.ID, formData);
                        u.form_reset("#defAcntForm");
                        u.hide_confirm();
                        u.growl_success("Setup successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add the same Code: " + $("#DA_ACNT_CODE").val());
                    }
                })
            } else {
                u.growl_warning("Please fill all fields that are marked red");
            }



        });


        /*------------------------
         * delete default account
         *-----------------------*/
        $("#btn_delete_defAcnt").on("click", function () {
            if (u.grid_empty($scope.defAccntGrid)) return u.growl_info("The Default Account grid is empty");
            var grid = $scope.defAccntGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DA_STATUS");


            var code = grid.jqGrid("getCell", rowId, "DA_ACNT_CODE");

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
                    u.growl_success("Default Account successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "DA_STATUS", "D");
                    $("#" + rowId, "#grdDeftAccount").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Default Account successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdDeftAccount").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DA_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Default Account successfully restored");
                }

            });

        });


        /*------------------------
         * update default account
         *-----------------------*/
        $("#btn_update_defAcnt").on("click", function () {
            if (u.grid_empty($scope.defAccntGrid)) return u.growl_info("The Default Account grid is empty");
            u.modal_confirmation("Are you sure you want to update the selected Default Account?", function () {
                var grid = $scope.defAccntGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "DA_ACNT_CODE");

                if (code === $("#DA_ACNT_CODE").val()) {

                    var data = u.parse_form("#defAcntForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.hide_confirm();
                    u.growl_success("Default Account successfully updated");
                    u.form_reset("#defAcntForm");
                    $("form input[name='DA_ACNT_CODE']").data("update", false);
                } else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });


        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#defAcnt-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.defAccntGrid, ["ID", "foreign"], "Default_Account_List_Excel");
        });

        /*------------------------------------
         * access rights grid defenition
         *----------------------------------*/
        $scope.accessRghtGrid = u.default_grid("#grdUserAccess", "#grdUserAccessPager", "USer Access Rights List",
            [
                "ID", "User Code", "User Full Name", "Minimum Amount", "Maximum Amount", "Post Txn?", "Ammend?", "Reverse?",
                "Print Before Post?", "Print After Post?", "foreign", "Created By", "Created Date", "Status"
            ],

            [
                { name: "TDAR_SYS_ID", index: "TDAR_SYS_ID", hidden:true },
                { name: "TDAR_USR_CODE", index: "TDAR_USR_CODE" },
                { name: "USR_FULL_NAME", index: "USR_FULL_NAME" },
                { name: "TDAR_MIN_AMNT", index: "TDAR_MIN_AMNT" },
                { name: "TDAR_MAX_AMNT", index: "TDAR_MAX_AMNT" },
                { name: "TDAR_POST_TXN_YN", index: "TDAR_POST_TXN_YN" },
                { name: "TDAR_AMMEND_YN", index: "TDAR_AMMEND_YN" },
                { name: "TDAR_REVERSE_YN", index: "TDAR_REVERSE_YN" },
                { name: "TDAR_PRNT_BFR_PST_YN", index: "TDAR_PRNT_BFR_PST_YN" },
                { name: "TDAR_PRNT_AFTR_PST_YN", index: "TDAR_PRNT_AFTR_PST_YN" },
                { name: "TDAR_ATD_CODE", index: "TDAR_ATD_CODE", hidden:true },
                { name: "TDAR_CRTE_DATE", index: "TDAR_CRTE_DATE" },
                { name: "TDAR_CRTE_BY", index: "TDAR_CRTE_BY" },
                { name: "TDAR_STATUS", index: "TDAR_STATUS" }
            ],
            
            function (id) {
                var grid = $scope.accessRghtGrid;

                u.fill_form({
                    TDAR_USR_CODE: grid.jqGrid("getCell", id, "TDAR_USR_CODE"),
                    USR_FULL_NAME: grid.jqGrid("getCell", id, "USR_FULL_NAME"),
                    TDAR_MIN_AMNT: grid.jqGrid("getCell", id, "TDAR_MIN_AMNT"),
                    TDAR_MAX_AMNT: grid.jqGrid("getCell", id, "TDAR_MAX_AMNT"),
                    TDAR_POST_TXN_YN: grid.jqGrid("getCell", id, "TDAR_POST_TXN_YN"),
                    TDAR_AMMEND_YN: grid.jqGrid("getCell", id, "TDAR_AMMEND_YN"),
                    TDAR_REVERSE_YN: grid.jqGrid("getCell", id, "TDAR_REVERSE_YN"),
                    TDAR_PRNT_BFR_PST_YN: grid.jqGrid("getCell", id, "TDAR_PRNT_BFR_PST_YN"),
                    TDAR_PRNT_AFTR_PST_YN: grid.jqGrid("getCell", id, "TDAR_PRNT_AFTR_PST_YN")
                }, "#accsRghtForm");

            });

        /*------------------------
         * add user access right
         *-----------------------*/
        $("#btn_add_rght").on("click", function () {
            if (u.form_validation("#accsRghtForm")) {
                u.modal_confirmation("Are you sure you want to add Access Right to the grid?", function () {

                    var rowIds = $scope.accessRghtGrid.jqGrid("getDataIDs");

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

                        /*---------------------------------------------
                         * get value of the cell or column in an array
                         *-------------------------------------------*/
                        //
                        var cellValue = $scope.accessRghtGrid.jqGrid("getCell", currRow, "TDAR_USR_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TDAR_USR_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#accsRghtForm");
                        formData.TDAR_STATUS = "U";
                        formData.TDAR_CRTE_BY = "Admin";
                        formData.TDAR_CRTE_DATE = u.get_date();
                        $scope.accessRghtGrid.addRowData(formData.ID, formData);
                        u.form_reset("#accsRghtForm");
                        u.hide_confirm();
                        u.growl_success("Setup successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add the same Code: " + $("#TDAR_USR_CODE").val());
                    }
                })
            } else {
                u.growl_warning("Please fill all fields that are marked red");
            }



        });


        /*------------------------
         * delete user access right
         *-----------------------*/
        $("#btn_delete_rght").on("click", function () {
            if (u.grid_empty($scope.accessRghtGrid)) return u.growl_info("The Access Right grid is empty");
            var grid = $scope.accessRghtGrid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TDAR_STATUS");

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
                    u.growl_success("Access Right successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "TDAR_STATUS", "D");
                    $("#" + rowId, "#grdUserAccess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Access Right successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdUserAccess").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TDAR_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Access Right successfully restored");
                }

            });

        });


        /*------------------------
         * update user access right
         *-----------------------*/
        $("#btn_update_rght").on("click", function () {
            if (u.grid_empty($scope.accessRghtGrid)) return u.growl_info("The Access Right grid is empty");
            u.modal_confirmation("Are you sure you want to update the selected Access Right?", function () {
                var grid = $scope.accessRghtGrid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "TDAR_USR_CODE");

                if (code === $("#TDAR_USR_CODE").val()) {

                    var data = u.parse_form("#accsRghtForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.hide_confirm();
                    u.growl_success("Access Right successfully updated");
                    u.form_reset("#accsRghtForm");
                    $("form input[name='TDAR_USR_CODE']").data("update", false);
                } else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });

        });


        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#rght-export-btn").click(function () {
            /*-----------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.accessRghtGrid, ["ID", "foreign"], "User_Access_Rights_List_Excel");
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
                
                case "btn_user":
                    $scope.lov.call_dialog("Select User", "get_user_lov", $scope.dialog_data);
                    break;

                case "btnAccount":
                    $scope.lov.call_dialog("Select Account", "getMainAccountLov", $scope.dialog_data);
                    break;

                case "btnTxnOrigin":
                    $scope.lov.call_dialog("Select Transaction Origin", "getAccountOriginLov", $scope.dialog_data);
                    break;
            }
        });

        u.lovDropDown("#ATD_TXN_CODE", "getInsAcctTxnLov");


        /*---------------------------
         * main form setup
         *-------------------------*/
        $("#btnSave").on("click", function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/
            if (!u.form_validation("#txnDocForm")) return u.growl_warning("Please fill all fields that are marked red");

            if (!u.form_validation("#advPropsForm")) return u.growl_warning("Please setup Advanced Properties");

            if (u.grid_empty($scope.defAccntGrid)) return u.growl_warning("Please enter at least one Default Accountt");

            //if (u.grid_empty($scope.accessRghtGrid)) return u.growl_warning("Please enter at least one User Access Right");


            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------
                 * obtain product data
                 *---------------------*/
                //
                var txnDocData = u.parse_form("#txnDocForm");
                if (!$scope.searched) txnDocData.ATD_STATUS = "U";

                /*-------------------------
                 * product properties data
                 *-----------------------*/
                //
                var advPropsData = u.parse_form("#advPropsForm");
                if (!advPropsData.DAP_STATUS) advPropsData.DAP_STATUS = "U";
                txnDocData.MS_ACT_TXN_DOC_ADV_PROPS = [advPropsData];

                /*------------------------------
                 * TXN Document No. Generation
                 *----------------------------*/
                //
                txnDocData.MS_ACT_DOC_NO_GEN = u.get_grid_data($scope.docNoGrid);

                /*--------------------------------
                 * txn Document Default Accounts
                 *------------------------------*/
                //
                txnDocData.MS_ACT_DEF_ACNTS = u.get_grid_data($scope.defAccntGrid);


                /*----------------------------------
                 * txn Document User Access Rights
                 *--------------------------------*/
                //
                txnDocData.MS_ACT_TXN_DOC_ACCS_RGHTS = u.get_grid_data($scope.accessRghtGrid);

                

                console.log(txnDocData);

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {

                    $scope.saving = true;
                    s.saveTxnDoc(txnDocData, function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            /*------------------------------------
                             * update advanced properties status
                             *-----------------------------------*/
                            $("#DAP_STATUS").val("A");


                            /*--------------------------------------------------
                             * update docuemtn no. generation row items status
                             *------------------------------------------------*/
                            u.update_grid_status($scope.docNoGrid, "DNG_STATUS");


                            /*-----------------------------------------
                             * update default account row items status
                             *---------------------------------------*/
                            u.update_grid_status($scope.defAccntGrid, "DA_STATUS");


                            /*---------------------------------------------
                             * update user access rights row items status
                             *-------------------------------------------*/
                            u.update_grid_status($scope.accessRghtGrid, "TDAR_STATUS");

                           

                            if (!$scope.searched) {
                                $("form input[name='ATD_STATUS']").val("A");
                            }

                            $scope.edited = false;
                            u.growl_success(responseData.message);
                        } else {
                            $scope.saving = false;
                            u.growl_error("Error Saving product");
                        }
                        u.hide_confirm();
                    }, function () {
                        $scope.saving = false;
                        u.hide_confirm();
                    });
                }


            });



        });


        /*---------------
         * Reset Form
         *-------------*/
        //
        $("#btnReset").click(function () {
            u.modal_confirmation("Are you sure you want to clear all data from the setup?", function (e) {
                $scope.setup_reset();
                u.hide_confirm();
            });
        });


        /*---------------------
         * delete txn document
         *-------------------*/
        //
        $("#btnDelete").click(function () {
            var txnDocData = u.parse_form("#txnDocForm");
            u.modal_confirmation("Are you sure you want to delete " + txnDocData.ATD_NAME + "?", function () {

                if (txnDocData.ATD_STATUS === "A") {
                    txnDocData.ATD_STATUS = "D";
                    s.saveTxnDoc(txnDocData, function (response) {
                        u.hide_confirm();
                        if (response.state) {
                            u.modal_success(response.message);
                            $scope.setup_reset();
                        } else {
                            u.modal_error(response.message);
                        }

                    },
                    function (err) {
                        u.hide_confirm();
                    });
                } else {
                    /*----------------
                     * reset the form
                     *---------------*/
                    $scope.setup_reset();
                }
            });

        });

        $scope.setup_reset = function () {
            u.form_reset("#txnDocForm");
            u.form_reset("#docNoForm");
            u.form_reset("#defAcntForm");
            u.form_reset("#accsRghtForm");

            u.clear_grid_data($scope.accessRghtGrid);
            u.clear_grid_data($scope.defAccntGrid);
            u.clear_grid_data($scope.docNoGrid);

            /*reset states to default*/
            $scope.searched = false;
            $scope.fresh = true;
            $scope.edited = false;
        };

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
         * Product Search
         *-------------------------*/
        $("#btnQuerytXNdOC").click(function () {

            if (!u.field_empty("#txtSearch")) {

                s.searchTxnDoc($("#txtSearch").val(),
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


                                //fill form and grids with the selected product
                                $("#search-ok").click(function () {
                                    $scope.search_fill(result[$scope.selected_index]);
                                    $("#mySearchResultModal").modal("hide");
                                    u.clear_grid_data($scope.searchGrid);
                                });
                            } else if (result.length <= 0) {
                                u.growl_info("The product does not Exist in the database.");
                            }
                        } else {
                            u.growl_info("The product does not Exist in the database.");
                        }

                    });
            } else {
                u.growl_info("Please enter the product code or product name to find a product");
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
                $scope.accessRghtGrid.jqGrid("clearGridData");
                $scope.defAccntGrid.jqGrid("clearGridData");
                $scope.docNoGrid.jqGrid("clearGridData");

                /*----------------------------------------------------
                 * populate product header Form with search results
                 *--------------------------------------------------*/
                u.fill_form(result, "#txnDocForm");


                /*------------------------------------------------------
                 * populate product Properties Form with search results
                 *----------------------------------------------------*/
                u.fill_form(result.MS_ACT_TXN_DOC_ADV_PROPS[0], "#advPropsForm");

                /*---------------------------------------------------
                 * populate product limits grid with search results
                 *-------------------------------------------------*/
                for (var i in result.MS_ACT_TXN_DOC_ACCS_RGHTS) {
                    result.MS_ACT_TXN_DOC_ACCS_RGHTS[i]["USR_FULL_NAME"] = result.MS_ACT_TXN_DOC_ACCS_RGHTS[i]["MS_SYS_USERS"]["USR_FULL_NAME"];
                    $scope.accessRghtGrid.addRowData(result.MS_ACT_TXN_DOC_ACCS_RGHTS[i].ID, result.MS_ACT_TXN_DOC_ACCS_RGHTS[i]);
                }

                /*-------------------------------------------------------------------
                 * populate product conditions and clauses grid with search results
                 *-----------------------------------------------------------------*/
                for (var i in result.MS_ACT_DEF_ACNTS) {
                    //result.MS_ACT_DEF_ACNTS[i][""] = result.MS_ACT_DEF_ACNTS[i][""][""];
                    $scope.defAccntGrid.addRowData(result.MS_ACT_DEF_ACNTS[i].ID, result.MS_ACT_DEF_ACNTS[i]);
                }

                /*------------------------------------------------
                 * populate product fees grid with search results
                 *-----------------------------------------------*/
                for (var i in result.MS_ACT_DOC_NO_GEN) {
                    $scope.docNoGrid.addRowData(result.MS_ACT_DOC_NO_GEN[i].PFEE_FES_CODE, result.MS_ACT_DOC_NO_GEN[i]);
                }

            } else {
                u.growl_info("The Product your are searching for is invalid please try a different Product");
            }
        }

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

        /*---------------------------------
         * exporting of the grid to excel
         *-------------------------------*/
        $("#export-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.SubAccount_grid, ["ID"], "ACCTTyepes_Excel");
        });

        u.set_datepicker("#DNG_FROM_DATE");
        u.set_datepicker("#DNG_TO_DATE");


    });
})(window.jQuery, window.service, window.utility, {});