(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
* Grid definition
*------------------------------------------------*/

        $scope.origin_grid = u.default_grid("#grdOrigin", "#grdOriginPager", "Document Origin List",
            ["Code", " Name", "Description", "Status", "Created By", "Created Date"],
           [
                { name: "DOC_ORIGN_CODE", id: true, index: "DOC_ORIGN_CODE" },
                { name: "DOC_ORIGN_NAME", index: "DOC_ORIGN_NAME" },
                { name: "DOC_ORIGN_DESC", index: "DOC_ORIGN_DESC" },
                { name: "DOC_ORIGN_STATUS", index: "DOC_ORIGN_STATUS" },
                { name: "DOC_ORIGN_CRTE_BY", index: "DOC_ORIGN_CRTE_BY" },
                { name: "DOC_ORIGN_CRTE_DATE", index: "DOC_ORIGN_CRTE_DATE" }
           ],
            function (id) {
                var grid = $scope.origin_grid;

                $("form input[name='DOC_ORIGN_CODE']").data("update", true);
                u.fill_form({
                    DOC_ORIGN_CODE: grid.jqGrid("getCell", id, "DOC_ORIGN_CODE"),
                    DOC_ORIGN_NAME: grid.jqGrid("getCell", id, "DOC_ORIGN_NAME"),
                    DOC_ORIGN_DESC: grid.jqGrid("getCell", id, "DOC_ORIGN_DESC")
                }, "#docOriginForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  origin_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#docOriginForm")) {
                u.modal_confirmation("Are you sure you want to add Origin to the grid?", function () {

                    var rowIds = $scope.origin_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.origin_grid.jqGrid("getCell", currRow, "DOC_ORIGN_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DOC_ORIGN_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#docOriginForm");
                        formData.DOC_ORIGN_STATUS = "U";
                        formData.DOC_ORIGN_CRTE_BY = "Admin";
                        formData.DOC_ORIGN_CRTE_DATE = u.get_date();
                        $scope.origin_grid.addRowData(formData.DOC_ORIGN_CODE, formData);

                        u.growl_success("Origin successfully added to grid");
                        u.form_reset("#docOriginForm");
                    } else {
                        u.growl_warning("Code exists, you cannot add same Code :  " + $("#DOC_ORIGN_CODE").val());
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
            if (u.grid_empty($scope.origin_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.origin_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DOC_ORIGN_STATUS");

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
                    u.growl_success("Selected Origin successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "DOC_ORIGN_STATUS", "D");
                    $("#" + rowId, "#grdOrigin").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected Origin successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdOrigin").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DOC_ORIGN_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Origin successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.origin_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.origin_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "DOC_ORIGN_CODE");

                if (code === $("#DOC_ORIGN_CODE").val()) {
                    var data = parse_form("#docOriginForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);
                    
                    u.growl_success("Origin successfully updated");
                }
                else {
                    u.growl_info("Please Select a row to edit");
                }
                u.hide_confirm();
            });
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {
            if (u.grid_empty($scope.origin_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.origin_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.saveAccountOrigin(u.get_grid_data($scope.origin_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.origin_grid, "DOC_ORIGN_STATUS");
                            

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
                u.form_reset("#docOriginForm");
                u.clear_grid_data($scope.origin_grid);
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
            u.excel_export($scope.origin_grid, ["ID"], "Origin_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryOrigin").click(function () {
            if (!u.field_empty("#txtSearch")) {
                s.searchAccountOrigin($("#txtSearch").val(),
                    function(result) {
                        if (result && result.length && result.length > 0) {
                            /*------------------------------
                             * clear grid before populating
                             *-----------------------------*/
                            $scope.origin_grid.jqGrid("clearGridData");
                            for (var i in result) {
                                $scope.origin_grid.addRowData(result[i].DOC_ORIGN_CODE, result[i]);
                            }
                        } else {
                            u.growl_info("Couldn't find a match for the code or name entered");
                        }

                    },
                    function(err) {
                        u.growl_error("Error cant send information");
                    });
            } else {
                //fetch all 
                s.getAccountOrigins(function (origins) {
                    if (origins && origins.length && origins.length > 0) {
                        /*--------------------------------
                         * clear grid before populating
                         *------------------------------*/
                        $scope.origin_grid.jqGrid("clearGridData");
                        for (var i in origins) {
                            $scope.origin_grid.addRowData(origins[i].DOC_ORIGN_CODE, origins[i]);
                        }
                    } else {
                        u.growl_info("There are no Account Origins at the moment, please setup one");
                    }
                    
                });
            }

        });

        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='DOC_ORIGN_CODE']", "checkAccountOriginCode");
    });

})(window.$, window.service, window.utility, {})
