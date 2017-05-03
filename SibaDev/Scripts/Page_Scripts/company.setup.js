(function ($, s, u, $scope) {
    $(function () {

        $scope.company_grid = u.default_grid("#grdCompany", "#grdCompanyPager", "Company List",
    ['Code', 'Name', 'Phone', 'Email', 'Address', 'Website', 'Country Code', 'Created by', 'Created date', 'Status'],
    [
        { name: 'CMP_CODE', index: 'CMP_CODE', width: 150 },
        { name: 'CMP_NAME', index: 'CMP_NAME', width: 300 },
        { name: 'CMP_PHONE', index: 'CMP_PHONE', width: 150 },
        { name: 'CMP_EMAIL', index: 'CMP_EMAIL', width: 200 },       
        { name: 'CMP_HEAD_OFFICE_ADD', index: 'CMP_HEAD_OFFICE_ADD', width: 400 },
        { name: 'CMP_WEBSITE', index: 'CMP_WEBSITE', width: 200 },
        { name: 'CMP_CNT_CODE', index: 'CMP_CNT_CODE', width: 100 },
        { name: 'CMP_CRTE_BY', index: 'CMP_CRTE_BY', width: 100 },
        { name: 'CMP_CRTE_DATE', index: 'CMP_CRTE_DATE', width: 100 },
        { name: 'CMP_STATUS', index: 'CMP_STATUS', width: 100 },
    ],
   //Retrive Grid data into form input fields on row click..
   function (sel_id) {
       var grid = $scope.company_grid;
       var sel_id = grid.jqGrid('getGridParam', 'selrow');
       $("form input[name='CMP_CODE']").data("update", true);
       u.fill_form({
           CMP_CODE: grid.jqGrid('getCell', sel_id, 'CMP_CODE'),
           CMP_NAME: grid.jqGrid('getCell', sel_id, 'CMP_NAME'),
           CMP_PHONE: grid.jqGrid('getCell', sel_id, 'CMP_PHONE'),
           CMP_EMAIL: grid.jqGrid('getCell', sel_id, 'CMP_EMAIL'),
           CMP_WEBSITE: grid.jqGrid('getCell', sel_id, 'CMP_WEBSITE'),
           CMP_HEAD_OFFICE_ADD: grid.jqGrid('getCell', sel_id, 'CMP_HEAD_OFFICE_ADD'),
           CMP_CNT_CODE: grid.jqGrid('getCell', sel_id, 'CMP_CNT_CODE'),
           //CMP_STATUS: grid.jqGrid('getCell', sel_id, 'CMP_STATUS'),
       }, "#companyForm");
   }),
  $scope.saving = false;

       
        /*--------------------------------------------------
                 * call add function to add records to  company_grid
                 *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#companyForm")) {

                if (u.field_empty("input[name='CMP_CODE']")) return u.growl_error

                  ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Acceptance type to the grid?", function () {

                    var rowIds = $scope.company_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.company_grid.jqGrid('getCell', currRow, 'CMP_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CMP_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#companyForm");
                        FormData.CMP_STATUS = "U";
                        FormData.CMP_CRTE_BY = "Admin";
                        FormData.CMP_CRTE_DATE = u.get_date();
                        $scope.company_grid.addRowData(FormData.CMP_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Company successfully added to grid");
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

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.company_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.company_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CMP_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CMP_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CMP_STATUS', 'D');
                    $('#' + row_id, '#grdCompany').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCompany').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CMP_STATUS', 'A');
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

            if (u.grid_empty($scope.company_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.company_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CMP_CODE');

            if (Code == $('#CMP_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CMP_CODE', $('#CMP_CODE').val());
                grid.jqGrid('setCell', row_id, 'CMP_NAME', $('#CMP_NAME').val());
                grid.jqGrid('setCell', row_id, 'CMP_PHONE', $('#CMP_PHONE').val());
                grid.jqGrid('setCell', row_id, 'CMP_EMAIL', $('#CMP_EMAIL').val());
                grid.jqGrid('setCell', row_id, 'CMP_WEBSITE', $('#CMP_WEBSITE').val());
                grid.jqGrid('setCell', row_id, 'CMP_CNT_CODE', $('#CMP_CNT_CODE').val());
                grid.jqGrid('setCell', row_id, 'CMP_HEAD_OFFICE_ADD', $('#CMP_HEAD_OFFICE_ADD').val());
                u.hide_confirm();
                u.growl_success("Company successfully updated");
                $("form input[name='CMP_CODE']").data("update", false);
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

            if (u.grid_empty($scope.company_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.company_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_companies(u.get_grid_data($scope.company_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.company_grid;
                            var rowIds = $scope.company_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CMP_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CMP_STATUS", "A");
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
                u.form_reset("#companyForm");
                u.clear_grid_data($scope.company_grid);
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
            u.excel_export($scope.company_grid, ["ID"], "Company_List_Excel");
        });


        /*---------------------------
         * Company Search
         *-------------------------*/
        $("#btnQueryCompany").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_company(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.company_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.company_grid.addRowData(result[i].CMP_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            }
            else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.company_grid.jqGrid('clearGridData');

                //fetch all companies
                s.get_companies(function (companies) {
                    for (var i in companies) {
                        $scope.company_grid.addRowData(companies[i].CMP_CODE, companies[i]);
                    }
                });
            }

        });

        /*-----------------------------
   * Code validation
   *-----------------------*/
        u.codeVal("form input[name='CMP_CODE']", "check_company_code");

        /*-----------------------------
   * Country LOV code validation
   *---------------------------*/
        u.lovCodeVal("form input[name='CMP_CNT_CODE']", "check_country_code", "form input[name='CMP_CNT_NAME']");

    });
})(window.$, window.service, window.utility, {});