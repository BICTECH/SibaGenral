(function ($, s, u, $scope) {
    $(function () {

        $scope.treatygrp_grid = u.default_grid("#grdTreatGrp", "#grdTreatGrpPager", "Motor Risk List",
           ["Sub Class", "EML YN", "Percentage", "Created By", "Created Date", "Status", "Group Detail ID", "Group ID"],
            [             
                { name: "GD_SUB_CLASS", index: "GD_SUB_CLASS" },
                { name: "GD_EML_YN", index: "GD_EML_YN" },
                { name: "GD_PML_PERC", index: "GD_PML_PERC"},
                { name: "GD_CRTE_BY", index: "GD_CRTE_BY" },
                { name: "GD_CRTE_DATE", index: "GD_CRTE_DATE" },
                { name: "GD_STATUS", index: "GD_STATUS" },
                { name: "GD_SYS_ID", hidden: false, id: true, index: "GD_SYS_ID" },
                { name: "GD_GP_CODE", hidden: false, id: true, index: "GD_GP_CODE" },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.treatygrp_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='GD_SUB_CLASS']").data("update", true);
                u.fill_form({
                    GD_PML_PERC: grid.jqGrid("getCell", sel_id, "GD_PML_PERC"),
                    GD_SUB_CLASS: grid.jqGrid("getCell", sel_id, "GD_SUB_CLASS"),
                    GD_EML_YN: grid.jqGrid("getCell", sel_id, "GD_EML_YN"),
                }, "#subclassform");
               
            }),

            $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  treatygrp_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (u.form_validation("#subclassform")) {

                u.modal_confirmation("Are you sure you want to add RI Group Details to the grid?", function () {

                    var rowIds = $scope.treatygrp_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.treatygrp_grid.jqGrid("getCell", currRow, "GD_SUB_CLASS");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#GD_SUB_CLASS").val(), Code) < 0) {

                        var FormData = u.parse_form("#subclassform");

                        FormData.GD_STATUS = "U";
                        FormData.GD_CRTE_BY = "Admin";
                        FormData.GD_CRTE_DATE = u.get_date();
                        $scope.treatygrp_grid.addRowData(FormData.GD_SUB_CLASS, FormData);
                        u.hide_confirm();
                        u.growl_success("RI Group Details successfully added to grid");
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
                case "btn_product":
                    $scope.lov.call_dialog("Select Cover", "get_lov_products", $scope.dialog_data);
                    break;
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.treatygrp_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.treatygrp_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "GD_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "GD_SUB_CLASS");

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

                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "GD_STATUS", "D");
                    $("#" + row_id, "#grdTreatGrp").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdTreatGrp").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "GD_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.treatygrp_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.treatygrp_grid;

                var row_id = grid.jqGrid("getGridParam", "selrow");

                var Code = grid.jqGrid("getCell", row_id, "GD_SUB_CLASS");

                if (Code == $("#GD_SUB_CLASS").val()) {

                    grid.jqGrid("setCell", row_id, "GD_SUB_CLASS", $("#GD_SUB_CLASS").val());
                    grid.jqGrid("setCell", row_id, "GD_PML_PERC", $("#GD_PML_PERC").val());
                 
                    u.hide_confirm();
                    u.growl_success("RI Sub class successfully updated");
                    $("form input[name='GD_SUB_CLASS']").data("update", false);
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

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#treatygrpForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.treatygrp_grid)) {
                return u.growl_warning("Please enter Motor Risk");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#treatygrpForm");
                if (!$scope.searched) productData.GP_STATUS = "U";

                productData.MS_RI_GROUP_DETL = u.get_grid_data($scope.treatygrp_grid);

                console.log(productData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_treaty(productData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.treatygrp_grid, "GD_STATUS");

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


        var message = "";
        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Treaty Group?", function () {
                if ($("input[name='GP_SYS_ID']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var treaty_data = u.parse_form("#treatygrpForm");
                        treaty_data.GP_STATUS = "D";
                        s.save_treaty(treaty_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Treaty Group Successfully Deleted");
                                    //$scope.reset_setup();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Tariiff at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#treatygrpForm");
                u.clear_grid_data($scope.treatygrp_grid);
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
            u.excel_export($scope.treatygrp_grid, ["ID"], "Sub_Class_Excel");
        });


        /*-----------------
        * search grid
        *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["Code", "Type", "Status","index"],
            [
                { name: "GP_CODE", index: "GP_CODE" },
                { name: "GP_TTY_TYPE", index: "GP_TTY_TYPE" },               
                { name: "GP_STATUS", index: "GP_STATUS" },
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
        $("#btnQueryTreaty").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_treaty(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
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
                        u.growl_info("RI Treaty. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Motor Tariff No and try again!");
            }
        });


        $scope.search_fill = function (treaty) {

            $scope.treatygrp_grid.jqGrid("clearGridData");

            u.fill_form(treaty, "#treatygrpForm");

                //populating child entities
            u.clear_grid_data($scope.treatygrp_grid);
                for (var i in treaty.MS_RI_GROUP_DETL) {
                    $scope.treatygrp_grid.addRowData(treaty.MS_RI_GROUP_DETL[i].GD_GP_SYS_ID, treaty.MS_RI_GROUP_DETL[i]);
            }


        };


        /*-----------------------------
* Treaty code validation
*---------------------------*/
        //u.lovCodeVal("form input[name='GP_CODE']", "check_treaty_code", "form input[name='GP_NAME']");

    });

})(window.$, window.service, window.utility, {})