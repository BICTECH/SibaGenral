(function ($, s, u, $scope) {
    $(function () {

       /*--------------------------------------------------
        * Grid definition
        *------------------------------------------------*/

        $scope.endorsemain_grid = u.default_grid("#grdEndorsementtype", "#grdEndorsementtypePager", "Main Endorsement List",
           ["Code", " Name", "Description","Endorsement Code","Endorsement Type", "Created By", "Created Date", "Status"],
            [
                { name: "MEM_CODE", id: true, index: "MEM_CODE" },
                { name: "MEM_NAME", index: "MEM_NAME" },
                { name: "MEM_DESC", index: "MEM_DESC" },
                { name: "MEM_MET_CODE", index: "MEM_MET_CODE" },
                { name: "MEM_TYPE", index: "MEM_TYPE"},
                { name: "MEM_CRTE_BY", index: "MEM_CRTE_BY" },
                { name: "MEM_CRTE_DATE", index: "MEM_CRTE_DATE" },
                 { name: "MEM_STATUS", index: "MEM_STATUS" }
            ],
            function (selId) {
                var grid = $scope.endorsemain_grid;

                $("form input[name='MEM_CODE']").data("update", true);
                u.fill_form({
                    MEM_CODE: grid.jqGrid("getCell", selId, "MEM_CODE"),
                    MEM_NAME: grid.jqGrid("getCell", selId, "MEM_NAME"),
                    MEM_DESC: grid.jqGrid("getCell", selId, "MEM_DESC"),
                    MEM_MET_CODE: grid.jqGrid("getCell", selId, "MEM_MET_CODE"),
                    MEM_TYPE: grid.jqGrid("getCell", selId, "MEM_TYPE"),
                }, "#endorsementtypesForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  customertype_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on("click", function () {

            if (!u.form_validation("#endorsementtypesForm")) return u.growl_warning("All field that are marked red are compulsry");

            u.modal_confirmation("Are you sure you want to add Endorsement type to the grid?", function () {

                var rowIds = $scope.endorsemain_grid.jqGrid("getDataIDs");

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
                    var cellValue = $scope.endorsemain_grid.jqGrid("getCell", currRow, "MEM_CODE");

                    code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($("#MEM_CODE").val(), code) < 0) {

                    var formData = u.parse_form("#endorsementtypesForm");
                    formData.MEM_STATUS = "U";
                    formData.MEM_CRTE_BY = "Admin";
                    formData.MEM_CRTE_DATE = u.get_date();
                    $scope.endorsemain_grid.addRowData(formData.MEM_CODE, formData);
                    u.hide_confirm();
                    u.growl_success("Endorsement type successfully added to grid");
                    u.form_reset("#endorsementtypesForm");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code: " + $("#MEM_CODE").val());
                }

            });
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
                case "btn_mem_type":
                    $scope.lov.call_dialog("Select Endorsement Type", "get_type_lov", $scope.dialog_data);
                    break;

            }
        }); 
        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on("click", function () {

            if (u.grid_empty($scope.endorsemain_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.endorsemain_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "MEM_STATUS");

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
                    u.growl_success("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus === "A") {

                    grid.jqGrid("setCell", rowId, "MEM_STATUS", "D");
                    $("#" + rowId, "#grdEndorsementtype").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_success("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus === "D") {

                    $("#" + rowId, "#grdEndorsementtype").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "MEM_STATUS", "A");
                    u.hide_confirm();
                    u.growl_success("Data successfully restored");
                }
                u.form_reset("#endorsementtypesForm");
            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on("click", function () {

            if (u.grid_empty($scope.endorsemain_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.endorsemain_grid;

                var rowId = grid.jqGrid("getGridParam", "selrow");

                var code = grid.jqGrid("getCell", rowId, "MEM_CODE");

                if (code === $("#MEM_CODE").val()) {
                    var data = u.parse_form("#endorsementtypesForm");
                    for (var i in data) grid.jqGrid("setCell", rowId, i, data[i]);

                    u.hide_confirm();
                    u.growl_success("Endorsement type successfully updated");
                    $("form input[name='MEM_CODE']").data("update", false);
                    u.form_reset("#endorsementtypesForm");
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

            if (u.grid_empty($scope.endorsemain_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.endorsemain_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_endorsements(u.get_grid_data($scope.endorsemain_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            u.update_grid_status($scope.endorsemain_grid, "MEM_STATUS");

                            
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
            u.modal_confirmation("Are you sure you want Delete the Record?", function (e) {
                u.hide_confirm();
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#endorsementtypesForm");
                u.clear_grid_data($scope.endorsemain_grid);
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
            u.excel_export($scope.endorsemain_grid, ["ID"], "Endorsement_Types_List_Excel");
        });


        /*---------------------------
         * Search
         *-------------------------*/
        //$("#btnQueryEndorseTypes").click(function () {
        //    var queryTxt = $("#txtSearch").val();
        //    if (queryTxt != null && queryTxt.length > 0) {
        //        s.search_endorsements(queryTxt,
        //            function (result) {
        //                if (result && result.length && result.length > 0) {
        //                    /*
        //                    search_endorsements
        //                     * clear grid before populating
        //                     */
        //                    $scope.endorsemain_grid.jqGrid("clearGridData");
        //                    for (var i in result) {
        //                        $scope.endorsemain_grid.addRowData(result[i].MEM_CODE, result[i]);
        //                    }
        //                } else {
        //                    u.growl_info("Couldn't find a Endorsement for the Code and Name entered");
        //                }
                        
        //            });
        //    } else {

        //        //fetch all Endorsement main
        //        s.get_endorsements(function (endorstype) {
        //            if (endorstype && endorstype.length && endorstype.length > 0) {
        //                /*--------------------------------
        //                 * clear grid before populating
        //                 *------------------------------*/
        //                $scope.endorsemain_grid.jqGrid("clearGridData");
        //                for (var i in endorstype) {
        //                    $scope.endorsemain_grid.addRowData(endorstype[i].MEM_CODE, endorstype[i]);
        //                }
        //            } else {
        //                u.growl_info("There are no Endorsment Types setup at the moment, please setup a Endorsement Type");
        //            }
                    
        //        });
        //    }

        //});

        /*************************
        * SEARCH
        *..........................*/
        $("#btnQueryEndorseTypes").click(function () {
            if (!u.field_empty("#txtSearch")) {
                s.search_endorsements($("#txtSearch").val(),
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.endorsemain_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.endorsemain_grid.addRowData(result[i].MEM_CODE, result[i]);
                        }
                    },
                    function (err) {
                        u.growl_error("Error cant send information");
                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.endorsemain_grid.jqGrid("clearGridData");

                //fetch all 
                s.get_endorsements(function (main) {
                    for (var i in main) {
                        $scope.endorsemain_grid.addRowData(main[i].MEM_CODE, main[i]);
                    }
                });
            }

        });
        /*-------------------
        * Code validation
        *------------------*/
        u.codeVal("form input[name='MEM_CODE']", "check_endorsements_code");

    });

})(window.$, window.service, window.utility, {})
