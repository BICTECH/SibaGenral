(function ($, s, u, $scope) {
    $(function () {

        $scope.premiumtariff_grid = u.default_grid("#grdPremiumtariff", "#grdPremiumtariffPager", "Premium Tariff List",
           ['Sys ID','Cover Code', 'Product Code', 'Motor Risk Code', 'Default Rate', 'Min Rate', 'Max Rate', 'Default Amount',
                  'Min Amount', 'Max Amount', 'Status', 'Created By', 'Created Date'],
            [
                { name: 'TFF_CODE', hidden: true, id: true, index: 'TFF_CODE' },
                { name: 'TFF_CVR_CODE', id: true, index: 'TFF_CVR_CODE' },
                { name: 'TFF_PRD_CODE', id: true, index: 'TFF_PRD_CODE' },
                { name: 'TFF_MRK_CODE', index: 'TFF_MRK_CODE' },
                { name: 'TFF_DEFAULT_RATE', index: 'TFF_DEFAULT_RATE' },
                { name: 'TFF_MIN_RATE', index: 'TFF_MIN_RATE' },
                { name: 'TFF_MAX_RATE', index: 'TFF_MAX_RATE' },
                { name: 'TFF_DEFAULT_AMT', index: 'TFF_DEFAULT_AMT' },
                { name: 'TFF_MIN_AMT', index: 'TFF_MIN_AMT' },
                { name: 'TFF_PP_AMT', index: 'TFF_PP_AMT' },
                { name: 'TFF_STATUS', index: 'TFF_STATUS' },
                { name: 'TFF_CRTE_BY', index: 'TFF_CRTE_BY' },
                { name: 'TFF_CRTE_DATE', index: 'TFF_CRTE_DATE' }
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.premiumtariff_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='TFF_CVR_CODE']").data("update", true);
                u.fill_form({
                    TFF_CVR_CODE: grid.jqGrid('getCell', sel_id, 'TFF_CVR_CODE'),
                    TFF_PRD_CODE: grid.jqGrid('getCell', sel_id, 'TFF_PRD_CODE'),
                    TFF_MRK_CODE: grid.jqGrid('getCell', sel_id, 'TFF_MRK_CODE'),
                    TFF_DEFAULT_RATE: grid.jqGrid('getCell', sel_id, 'TFF_DEFAULT_RATE'),
                    TFF_MIN_RATE: grid.jqGrid('getCell', sel_id, 'TFF_MIN_RATE'),
                    TFF_MAX_RATE: grid.jqGrid('getCell', sel_id, 'TFF_MAX_RATE'),
                    TFF_MIN_AMT: grid.jqGrid('getCell', sel_id, 'TFF_MIN_AMT'),
                    TFF_PP_AMT: grid.jqGrid('getCell', sel_id, 'TFF_PP_AMT'),
                    TFF_DEFAULT_AMT: grid.jqGrid('getCell', sel_id, 'TFF_DEFAULT_AMT'),
                    TFF_STATUS: grid.jqGrid('getCell', sel_id, 'TFF_STATUS')
                }, "#premiumtariffForm");
            }),
            $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  premiumtariff_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.field_empty("input[name='TFF_CVR_CODE']")) return u.growl_error

           ("The Form code field is empty, please fill and to add to the grid");

            u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                var rowIds = $scope.premiumtariff_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.premiumtariff_grid.jqGrid('getCell', currRow, 'TFF_CVR_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#TFF_CVR_CODE').val(), Code) < 0) {

                    var FormData = u.parse_form("#premiumtariffForm");
                    FormData.TFF_STATUS = "U";
                    FormData.TFF_CRTE_BY = "Admin";
                    FormData.TFF_CRTE_DATE = u.get_date();
                    $scope.premiumtariff_grid.addRowData(FormData.TFF_PRD_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Company successfully added to grid");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                }

            });
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
                case "btn_cover":
                    $scope.lov.call_dialog("Select Cover", "get_lov_covers", $scope.dialog_data);
                    break;
                case "btn_product":
                    $scope.lov.call_dialog("Select Product", "get_lov_products", $scope.dialog_data);
                    break;
                case "btn_motor_risk":
                    $scope.lov.call_dialog("Select Motor Risk", "get_lov_motor_risks", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.premiumtariff_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.premiumtariff_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'TFF_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'TFF_CVR_CODE');

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

                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid('setCell', row_id, 'TFF_STATUS', 'D');
                    $('#' + row_id, '#grdPremiumtariff').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdPremiumtariff').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'TFF_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on('click', function () {

            if (u.grid_empty($scope.premiumtariff_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.premiumtariff_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'TFF_CVR_CODE');

            if (Code == $('#TFF_CVR_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'TFF_CVR_CODE', $('#TFF_CVR_CODE').val());
                grid.jqGrid('setCell', row_id, 'TFF_PRD_CODE', $('#TFF_PRD_CODE').val());
                grid.jqGrid('setCell', row_id, 'TFF_MRK_CODE', $('#TFF_MRK_CODE').val());
                grid.jqGrid('setCell', row_id, 'TFF_DEFAULT_RATE', $('#TFF_DEFAULT_RATE').val());
                grid.jqGrid('setCell', row_id, 'TFF_MIN_RATE', $('#TFF_MIN_RATE').val());
                grid.jqGrid('setCell', row_id, 'TFF_MAX_RATE', $('#TFF_MAX_RATE').val());
                grid.jqGrid('setCell', row_id, 'TFF_MIN_AMT', $('#TFF_MIN_AMT').val());
                grid.jqGrid('setCell', row_id, 'TFF_PP_AMT', $('#TFF_PP_AMT').val());
                grid.jqGrid('setCell', row_id, 'TFF_DEFAULT_AMT', $('#TFF_DEFAULT_AMT').val());
                u.hide_confirm();
                u.growl_success("Premium Tariff successfully updated");
                $("form input[name='TFF_CODE']").data("update", false);
            }
            else {
                u.hide_confirm();
                u.growl_info("Please Select a row to edit");
            }

            });
        });


        /*-----------------------------
         * Product Risk Modal
         *---------------------------*/
        //
        $("#btn_add_motor_risk").on('click', function () {


            $("#productRiskModal").modal();
        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            if (u.grid_empty($scope.premiumtariff_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.premiumtariff_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_premiumtariffs(u.get_grid_data($scope.premiumtariff_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.premiumtariff_grid;
                            var rowIds = $scope.premiumtariff_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "TFF_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "TFF_STATUS", "A");
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
        $("#btn_Delete").on('click', function () {
            u.modal_warning("Are you sure you want Delete the Record?");

            $('#btnOkWarning').click(function (e) {
                u.modal_warning("Wait while the transaction is being deleted..........");
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#premiumtariffForm");
                u.clear_grid_data($scope.premiumtariff_grid);
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
            u.excel_export($scope.premiumtariff_grid, ["ID"], "Discount_Loading_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryPremiumTariff").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_premiumtariff(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.premiumtariff_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.premiumtariff_grid.addRowData(result[i].TFF_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.premiumtariff_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_premiumtariffs(function (premiumtariffs) {
                    for (var i in premiumtariffs) {
                        $scope.premiumtariff_grid.addRowData(premiumtariffs[i].TFF_CODE, premiumtariffs[i]);
                    }
                });
            }

        });
              
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='CMP_CODE']", "check_premiumtariff_code");

        /*-----------------------------
* Cover LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='TFF_CVR_CODE']", "check_cover_code", "form input[name='TFF_CVR__NAME']");

        /*-----------------------------
 * Product LOV code validation
 *---------------------------*/
        u.lovCodeVal("form input[name='TFF_PRD_CODE']", "check_product_code", "form input[name='TFF_PRD_NAME']");

        /*-----------------------------
* Motor Risk LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='TFF_MRK_CODE']", "check_motorrisk_code", "form input[name='TFF_MRK_NAME']");

    });

})(window.$, window.service, window.utility, {})