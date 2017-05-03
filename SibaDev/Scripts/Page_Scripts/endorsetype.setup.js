(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
* Grid definition
*------------------------------------------------*/

        $scope.type_grid = u.default_grid("#grdType", "#grdTypePager", "Area List",
            ["Code", " Name", "Description", "Status", "Created By", "Created Date"],
           [
                { name: "MET_CODE", id: true, index: "MET_CODE" },
                { name: "MET_NAME", index: "MET_NAME" },
                { name: "MET_DESC", index: "MET_DESC" },
                { name: "MET_STATUS", index: "MET_STATUS" },
                { name: "MET_CRTE_BY", index: "MET_CRTE_BY" },
                { name: "MET_CRTE_DATE", index: "MET_CRTE_DATE" }
           ],
            function (id) {
                var grid = $scope.type_grid;

                $("form input[name='MET_CODE']").data("update", true);
                u.fill_form({
                    MET_CODE: grid.jqGrid("getCell", id, "MET_CODE"),
                    MET_NAME: grid.jqGrid("getCell", id, "MET_NAME"),
                    MET_DESC: grid.jqGrid("getCell", id, "MET_DESC"),
                    MET_STATUS: grid.jqGrid("getCell", id, "MET_STATUS")
                }, "#typeForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  type_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#typeForm")) {
                u.modal_confirmation("Are you sure you want to add a type to the grid?", function() {

                    var rowIds = $scope.type_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var Code = [];

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
                        var cellValue = $scope.type_grid.jqGrid("getCell", currRow, "MET_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#MET_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#typeForm");
                        FormData.MET_STATUS = "U";
                        FormData.MET_CRTE_BY = "Admin";
                        FormData.MET_CRTE_DATE = u.get_date();
                        $scope.type_grid.addRowData(FormData.MET_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Type successfully added to grid");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }
                });
            } else {
                u.growl_error("Please fill all the fields that are marked red");
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on("click", function () {
            if (u.grid_empty($scope.type_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.type_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "MET_STATUS");

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

                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_success("Selected TYPE successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", row_id, "MET_STATUS", "D");
                    $("#" + row_id, "#grdType").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Type successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + row_id, "#grdType").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "MET_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Data successfully restored");
                }
                u.form_reset("#typeForm");
            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.type_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.type_grid;

                var row_id = grid.jqGrid("getGridParam", "selrow");

                var Code = grid.jqGrid("getCell", row_id, "MET_CODE");

                if (Code == $("#MET_CODE").val()) {
                    var data = u.parse_form("#typeForm");
                    for (var i in data) grid.jqGrid("setCell", row_id, i, data[i]);

                    
                    u.growl_success("Type successfully updated");
                    $("form input[name='MET_CODE']").data("update", false);
                }
                else {
                    u.growl_info("Please Select a Type to edit");
                }
                u.hide_confirm();
            });
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            if (u.grid_empty($scope.type_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.type_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_types(u.get_grid_data($scope.type_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.type_grid, "MET_STATUS");
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
            u.modal_confirmation("Are sure you want to Delete this Record?", function(e){
                u.hide_confirm();
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#typeForm");
                u.clear_grid_data($scope.type_grid);
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
            u.excel_export($scope.type_grid, ["ID"], "Type_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryType").click(function() {
            if (!u.field_empty("#txtSearch")) {
                s.search_types($("#txtSearch").val(),
                    function(result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.type_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.type_grid.addRowData(result[i].MET_CODE, result[i]);
                        }
                    },
                    function(err) {
                        u.growl_error("Error cant send information");
                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.type_grid.jqGrid("clearGridData");

                //fetch all 
                s.get_types(function(types) {
                    for (var i in types) {
                        $scope.type_grid.addRowData(types[i].MET_CODE, types[i]);
                    }
                });
            }

        });

        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='MET_CODE']", "check_type_code");
    });

})(window.$, window.service, window.utility, {})
