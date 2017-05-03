(function ($, s, u, $scope) {

    $(function () {
        $scope.user_grid = u.default_grid("#grdUsers", "#grdUsersPager","User List",
            [ "Code","First Name","Last Name","Middle Name","Full Name","Gender","Residential Address","Postal Address","Zip Code","DOB","Country","Location","Position","Grade","Role","Join Date","Reports To","Profile IMG","Email","Password","Phone No. 1","Phone No. 2","Created By","Status" ],
            [
                { name: "USR_CODE", id: true, index: "USR_CODE" },
                { name: "USR_F_NAME", index: "USR_F_NAME" },
                { name: "USR_L_NAME", index: "USR_L_NAME" },
                { name: "USR_M_NAME", index: "USR_M_NAME" },
                { name: "USR_FULL_NAME", index: "USR_FULL_NAME" },
                { name: "USR_GENDER", index: "USR_GENDER" },
                { name: "USR_RESID_ADD", index: "USR_RESID_ADD" },
                { name: "USR_POST_ADD", index: "USR_POST_ADD" },
                { name: "USR_ZIP_CODE", index: "USR_ZIP_CODE" },
                { name: "USR_BIRTH_DATE", index: "USR_BIRTH_DATE" },
                { name: "USR_COUNTRY", index: "USR_COUNTRY" },
                { name: "USR_LOCATION", index: "USR_LOCATION" },
                { name: "USR_POSITION", index: "USR_POSITION" },
                { name: "USR_GRADE", index: "USR_GRADE" },
                { name: "USR_ROLE", index: "USR_ROLE" },
                { name: "USR_JOIN_DATE", index: "USR_JOIN_DATE" },
                { name: "USR_REPORTS_TO", index: "USR_REPORTS_TO" },
                { name: "USR_PROFILE_IMG", index: "USR_PROFILE_IMG" },
                { name: "USR_EMAIL", index: "USR_EMAIL" },
                { name: "USR_PASSWD1", hidden: true, index: "USR_PASSWD1" },
                { name: "USR_PHONE_NUMBER1", index: "USR_PHONE_NUMBER1" },
                { name: "USR_PHONE_NUMBER2", index: "USR_PHONE_NUMBER2" },
                { name: "USR_CRTE_BY", index: "USR_CRTE_BY" },
                { name: "USR_STATUS", index: "USR_STATUS" }
            ],
            function(rowid) {
                var grid = $scope.user_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");

                u.fill_form({
                    USR_CODE: grid.jqGrid("getCell", sel_id, "USR_CODE"),
                    USR_F_NAME: grid.jqGrid("getCell", sel_id, "USR_F_NAME"),
                    USR_L_NAME: grid.jqGrid("getCell", sel_id, "USR_L_NAME"),
                    USR_M_NAME: grid.jqGrid("getCell", sel_id, "USR_M_NAME"),
                    USR_FULL_NAME: grid.jqGrid("getCell", sel_id, "USR_FULL_NAME"),
                    USR_GENDER: grid.jqGrid("getCell", sel_id, "USR_GENDER"),
                    USR_RESID_ADD: grid.jqGrid("getCell", sel_id, "USR_RESID_ADD"),
                    USR_POST_ADD: grid.jqGrid("getCell", sel_id, "USR_POST_ADD"),
                    USR_ZIP_CODE: grid.jqGrid("getCell", sel_id, "USR_ZIP_CODE"),
                    USR_BIRTH_DATE: grid.jqGrid("getCell", sel_id, "USR_BIRTH_DATE"),
                    USR_COUNTRY: grid.jqGrid("getCell", sel_id, "USR_COUNTRY"),
                    USR_LOCATION: grid.jqGrid("getCell", sel_id, "USR_LOCATION"),
                    USR_POSITION: grid.jqGrid("getCell", sel_id, "USR_POSITION"),
                    USR_GRADE: grid.jqGrid("getCell", sel_id, "USR_GRADE"),
                    USR_JOIN_DATE: grid.jqGrid("getCell", sel_id, "USR_JOIN_DATE"),
                    USR_ROLE: grid.jqGrid("getCell", sel_id, "USR_ROLE"),
                    USR_REPORTS_TO: grid.jqGrid("getCell", sel_id, "USR_REPORTS_TO"),
                    USR_PROFILE_IMG: grid.jqGrid("getCell", sel_id, "USR_PROFILE_IMG"),
                    USR_EMAIL: grid.jqGrid("getCell", sel_id, "USR_EMAIL"),
                    USR_PASSWD1: grid.jqGrid("getCell", sel_id, "USR_PASSWD1"),
                    USR_PHONE_NUMBER1: grid.jqGrid("getCell", sel_id, "USR_PHONE_NUMBER1"),
                    USR_PHONE_NUMBER2: grid.jqGrid("getCell", sel_id, "USR_PHONE_NUMBER2"),
                    USR_CRTE_BY: grid.jqGrid("getCell", sel_id, "USR_CRTE_BY"),
                    USR_STATUS: grid.jqGrid("getCell", sel_id, "USR_STATUS")
                }, "#userForm");
            });

        //Taps Layout function call 
        $("#tabs").tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.fail(function () {
                    ui.panel.html(
                      "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                      "If this wouldn't be a demo.");
                });
            }
        });

        /*setting datepicker for date fields*/
        u.set_datepicker("input[name='USR_BIRTH_DATE']");
        u.set_datepicker("input[name='USR_JOIN_DATE']");

        /*----------------------------
         * form header button events
         *--------------------------*/

        /*--------------
         * save button
         *------------*/
        $("#btn_Save").click(function () {
            if (u.grid_empty($scope.user_grid))return u.modal_alert("Grid is empty, please add a User!!!");
            u.modal_confirmation("Are you sure you want to save your changes?", function (e) {

                /*-----------------------------
                 * obtain users from the grid
                 *---------------------------*/
                var data = u.get_grid_data($scope.user_grid);
                
                
                for (var i in data) {//hash the password fields of users
                    if (data[i].USR_PASSWD1.length && data[i].USR_PASSWD1.length > 0) data[i].USR_PASSWD1 = u.hexMD5w(data[i].USR_PASSWD1);
                }

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_users(data, function(response) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (response.state) {
                            u.update_grid_status($scope.user_grid, "USR_STATUS");
                            u.growl_success(response.message);
                        } else {
                            u.hide_confirm();
                            u.growl_error(response.message);
                        }
                    }, function (err) {
                        u.hide_confirm();
                        u.growl_error("Error Sending Save request please try again");
                    });
                }
            });
            return false;
        });


        /*----------------
         * delete button
         *--------------*/
        $("#btn_Delete").click(function() {
            
        });


        /*---------------
         * reset button
         *-------------*/
        $("#btn_Reset").click(function() {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function(e) {
                u.form_reset("#userForm");
                u.clear_grid_data($scope.user_grid);
                u.hide_confirm();
            });
        });


        /*---------------------
         * grid button events
         *-------------------*/
        //
        /*-------------
         * add button
         *------------*/
        $("#btn_add_record").click(function () {
            if ($("input[name='USR_CODE']").val() === "" || $("input[name='USR_CODE']").val() === " ") {
                return u.modal_alert("The User code field cannot be Empty, Please check and try again");
            }
            u.modal_confirmation("Are you sure you want to add this record?", function() {

                    var rowIds = $scope.user_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.user_grid.jqGrid("getCell", currRow, "USR_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("input[name='USR_CODE']").val(), code) < 0) {

                        var formData = u.parse_form("#userForm");
                        formData.USR_STATUS = "U";
                        formData.USR_CRTE_BY = "Admin";
                        $scope.user_grid.addRowData(formData.USR_CODE, formData);
                        u.hide_confirm();
                    } else {
                        u.hide_confirm();
                        u.modal_alert("Code exists, you cannot add same Code :  " + cellValue);
                    }
            });
        });

        /*-------------
         * update button
         *------------*/
        $("#btn_update_record").click(function () {
            if (u.grid_empty($scope.user_grid)) return u.modal_alert("Grid is empty!!!");
            u.modal_confirmation("Are you sure you want to Update the Record?", function() {
                var grid = $scope.user_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "USR_CODE");

                if (code === $("input[name='USR_CODE']").val()) {
                    var formData = u.parse_form("#userForm");
                    for (var i in formData) {
                        grid.jqGrid("setCell", rowId, i, formData[i]);
                    }
                }
                u.hide_confirm();
            });
        });


        /*-------------
         * remove button
         *------------*/
        $("#btn_remove_record").click(function () {
            if (u.grid_empty($scope.user_grid))return u.modal_alert("Grid is empty!!!");
            var grid = $scope.user_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "USR_STATUS");

            /*------------------------------------
             * Display confirmation modal message
             *----------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function(e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus === "U") {

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "USR_STATUS", "D");
                    $("#" + rowId, "#grdUsers").css({ color: "red" });

                    u.hide_confirm();

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdUsers").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "USR_STATUS", "A");
                    u.hide_confirm();

                }

            });

        });


        /*--------------------------
         * grid excel export button
         *------------------------*/
        $("#export-btn").click(function() {
            /*------------------------------------------
             * function to export grid data into excel
             *----------------------------------------*/
            u.excel_export($scope.user_grid, ["ID"], "User_List_Excel");
        });


        /*---------------------------
         * City Search
         *-------------------------*/
        $("#btnQueryUser").click(function () {
            var queryTxt = $("#txtSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_users(queryTxt,
                    function (result) {
                        /*-------------------------------
                         * clear grid before populating
                         *------------------------------*/
                        if (result.length > 0) {
                            $scope.user_grid.jqGrid("clearGridData");
                            for (var i in result) {
                                $scope.user_grid.addRowData(result[i].USR_CODE, result[i]);
                            }
                        } else {
                            u.modal_alert("No users where found");
                        }
                        
                    },
                    function (err) {
                        u.growl_error("Error Searching for Users, please try again later");
                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.user_grid.jqGrid("clearGridData");

                //fetch all cities
                s.get_users(function (users) {
                    for (var i in users) {
                        $scope.user_grid.addRowData(users[i].USR_CODE, users[i]);
                    }
                });
            }

        });


        $("#pass-check").click(function() {
            if ($("input[name='USR_PASSWD1']").attr("type") === "password") {
                $("input[name='USR_PASSWD1']").attr("type", "text");
            } else {
                $("input[name='USR_PASSWD1']").attr("type", "password");
            }
        });

    });//document ready

})(window.jQuery, window.service, window.utility, {})