(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
* Grid definition
*------------------------------------------------*/

        $scope.region_grid = u.default_grid("#grdRegion", "#grdRegionPager", "Region List",
          ["Code", " Name", "Description", "Country Code", "Created By", "Created Date", "Status"],
           [
                { name: "REG_CODE", id: true, index: "REG_CODE" },
                { name: "REG_NAME", index: "REG_NAME" },
                { name: "REG_DESC", index: "REG_DESC" },
                { name: "REG_CNT_CODE", index: "REG_CNT_CODE" },
                { name: "REG_CRTE_BY", index: "REG_CRTE_BY" },
                { name: "REG_CRTE_DATE", index: "REG_CRTE_DATE" },
                { name: "REG_STATUS", index: "REG_STATUS" }
           ],
            function (selId) {
                var grid = $scope.region_grid;

                $("form input[name='REG_CODE']").data("update", true);
                u.fill_form({
                    REG_CODE: grid.jqGrid("getCell", selId, "REG_CODE"),
                    REG_NAME: grid.jqGrid("getCell", selId, "REG_NAME"),
                    REG_DESC: grid.jqGrid("getCell", selId, "REG_DESC"),
                    REG_CNT_CODE: grid.jqGrid("getCell", selId, "REG_CNT_CODE"),
                    REG_STATUS: grid.jqGrid("getCell", selId, "REG_STATUS")
                }, "#regionForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  region_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#regionForm")) {

                  if (u.field_empty("input[name='REG_CODE']")) return u.growl_error

                ("You have not entered any information, please enter and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Region to the grid?", function () {

                var rowIds = $scope.region_grid.jqGrid("getDataIDs");

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
                    var cellValue = $scope.region_grid.jqGrid("getCell", currRow, "REG_CODE");

                    code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($("#REG_CODE").val(), code) < 0) {

                    var formData = u.parse_form("#regionForm");
                    formData.REG_STATUS = "U";
                    formData.REG_CRTE_BY = "Admin";
                    formData.REG_CRTE_DATE = u.get_date();
                    $scope.region_grid.addRowData(formData.REG_CODE, formData);
                    u.hide_confirm();
                    u.growl_success("Region successfully added to grid");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                }
          
                });
            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
           
        });


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
                case "btn_country":
                    $scope.lov.call_dialog("Select Country", "get_lov_country", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on("click", function () {
            if (u.grid_empty($scope.region_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.region_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "REG_STATUS");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?",function (e) {

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

                    grid.jqGrid("setCell", rowId, "REG_STATUS", "D");
                    $("#" + rowId, "#grdRegion").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Region successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdRegion").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "REG_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("City successfully restored");

                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.region_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected row?", function () {

            var grid = $scope.region_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var code = grid.jqGrid("getCell", rowId, "REG_CODE");

            if (code === $("#REG_CODE").val()) {
                var data = u.parse_form("#regionForm");
                for(var i in data) grid.jqGrid("setCell", rowId, i, data[i]);
                
                u.hide_confirm();
                u.growl_success("Region successfully updated");
                $("form input[name='REG_CODE']").data("update", false);
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
        $("#btn_Save").on("click", function () {
            if (u.grid_empty($scope.region_grid)) return u.growl_info("The grid is empty");
            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.region_grid));

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_regions(u.get_grid_data($scope.region_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.region_grid;
                            var rowIds = $scope.region_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "REG_STATUS");

                                //Delete cover row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update cover row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "REG_STATUS", "A");
                                }
                            }
                            u.hide_confirm();
                            u.growl_success(responseData.message);

                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function () {
                        u.hide_confirm();
                        u.growl_error("Server Please try again Later");
                    });
                }        

            });

        });


        var message = "";
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
                u.form_reset("#regionForm");
                u.clear_grid_data($scope.region_grid);
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
            u.excel_export($scope.region_grid, ["ID"], "Region_List_Excel");
        });


        /*---------------------------
         * Search
         *-------------------------*/
        $("#btnQueryRegion").click(function () {
            var queryTxt = $("#txtSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_region(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.region_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.region_grid.addRowData(result[i].REG_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.region_grid.jqGrid("clearGridData");

                //fetch all regions
                s.get_regions(function (regions) {
                    for (var i in regions) {
                        $scope.region_grid.addRowData(regions[i].REG_CODE, regions[i]);
                    }
                });
            }

        }); /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='REG_CODE']", "check_region_code");

          /*-----------------------------
        * Country LOV code validation
        *---------------------------*/
        u.lovCodeVal("form input[name='REG_CNT_CODE']", "check_country_lov_code", "form input[name='REG_CNT_CODE_NAME']");

    });

})(window.$, window.service, window.utility, {})