(function ($, s, u, $scope) {
    $(function () {


        $scope.prodriskfee_grid = u.default_grid("#grdProdriskfee", "#grdProdriskfeePager", "Product Risk Fee List",
        ['Code', 'Product Code', 'Amount', 'Created By', 'Created Date', 'Status'],
        [
            { name: 'PRF_FEE_CODE', id: true, index: 'PRF_FEE_CODE' },
            { name: 'PRF_PDT_CODE', index: 'PRF_PDT_CODE' },
            { name: 'PRF_FEE_AMOUNT', index: 'PRF_FEE_AMOUNT' },     
            { name: 'PRF_CRTE_BY', index: 'PRF_CRTE_BY' },
            { name: 'PRF_CRTE_DATE', index: 'PRF_CRTE_DATE' },
            { name: 'PRF_STATUS', index: 'PRF_STATUS' }
        ],
       //Retrive Grid data into form input fields on row click..
       function (sel_id) {
           var grid = $scope.prodriskfee_grid;
           var sel_id = grid.jqGrid('getGridParam', 'selrow');
           $("form input[name='PRF_FEE_CODE']").data("update", true);
           u.fill_form({
               PRF_FEE_CODE: grid.jqGrid('getCell', sel_id, 'PRF_FEE_CODE'),
               PRF_PDT_CODE: grid.jqGrid('getCell', sel_id, 'PRF_PDT_CODE'),
               PRF_FEE_AMOUNT: grid.jqGrid('getCell', sel_id, 'PRF_FEE_AMOUNT'),           

           }, "#productriskfeeForm");
       }),

      $scope.saving = false;


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
                case "btn_motor_risk":
                    $scope.lov.call_dialog("Select Motor Risk", "get_lov_product", $scope.dialog_data);
                    break;
                case "btn_compulsory_fee":
                    $scope.lov.call_dialog("Select Compulsory Fee", "get_lov_compulsory_fee", $scope.dialog_data);
                    break;
            }
        })


        /*--------------------------------------------------
           * call add function to add records to  prodriskfee_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#productriskfeeForm")) {

                if (u.field_empty("input[name='PRF_FEE_CODE']")) return u.growl_error

                   ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Product Risk Fee to the grid?", function () {

                    var rowIds = $scope.prodriskfee_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.prodriskfee_grid.jqGrid('getCell', currRow, 'PRF_FEE_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#PRF_FEE_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#productriskfeeForm");
                        FormData.PRF_STATUS = "U";
                        FormData.PRF_CRTE_BY = "Admin";
                        FormData.PRF_CRTE_DATE = u.get_date();
                        $scope.prodriskfee_grid.addRowData(FormData.PRF_FEE_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Product Risk Fee successfully added to grid");
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



        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.prodriskfee_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.prodriskfee_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PRF_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'PRF_PDT_CODE');

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

                    grid.jqGrid('setCell', row_id, 'PRF_STATUS', 'D');
                    $('#' + row_id, '#grdProdriskfee').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdProdriskfee').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PRF_STATUS', 'A');
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

            if (u.grid_empty($scope.prodriskfee_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.prodriskfee_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'PRF_PDT_CODE');

                if (Code == $('#PRF_PDT_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'PRF_FEE_CODE', $('#PRF_FEE_CODE').val());
                    grid.jqGrid('setCell', row_id, 'PRF_PDT_CODE', $('#PRF_PDT_CODE').val());
                    grid.jqGrid('setCell', row_id, 'PRF_FEE_AMOUNT', $('#PRF_FEE_AMOUNT').val());
                   
                    u.hide_confirm();
                    u.growl_success("Product Fee successfully updated");
                    $("form input[name='PRF_PDT_CODE']").data("update", false);
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
        $("#btn_Save").on('click', function () {

            if (u.grid_empty($scope.prodriskfee_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.prodriskfee_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_productfees(u.get_grid_data($scope.prodriskfee_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.prodriskfee_grid;
                            var rowIds = $scope.prodriskfee_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "PRF_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "PRF_STATUS", "A");
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
                u.form_reset("#productriskfeeForm");
                u.clear_grid_data($scope.prodriskfee_grid);
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
            u.excel_export($scope.prodriskfee_grid, ["ID"], "Motor_Risk_Fees_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryfees").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_productfee(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.prodriskfee_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.prodriskfee_grid.addRowData(result[i].PRF_PDT_CODE, result[i])
                        }
                    },
                    function (err) {

                    })
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.prodriskfee_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_productfees(function (riskfees) {
                    for (var i in riskfees) {
                        $scope.prodriskfee_grid.addRowData(riskfees[i].PRF_PDT_CODE, riskfees[i]);
                    }
                })
            }

        });
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='PRF_FEE_CODE']", "check_risk_fee_code");
    });

})(window.$, window.service, window.utility, {})