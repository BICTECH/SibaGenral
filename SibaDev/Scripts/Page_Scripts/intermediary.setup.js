(function ($, s, u, $scope) {
    $(function () {

        $scope.intermediary_grid = u.default_grid("#grdIntermediary", "#grdIntermediaryPager", "Intermediary List",
           ['Code', 'Company Code', 'Office Code', 'Official Name', 'Postal Address', 'Home Address', 'Phone No',
                'Mobile No', 'Area Name', 'Contact Person', 'Email Address', 'Fax', 'Bank Number',
                'Bank Name', 'Bank Branch', 'City Name', 'Gender', 'ID Type', 'ID No.', 'Other ID Type',
                'ID No', 'Tin No', 'Registration No', 'Created by', 'Created Date', 'Status'],
           [
                { name: 'INT_CODE', id: true, index: 'INT_CODE' },
                { name: 'INT_CMP_CODE', index: 'INT_CMP_CODE' },
                { name: 'INT_OFF_CODE', index: 'INT_OFF_CODE' },
                { name: 'INT_OFFICIAL_NAME', index: 'INT_OFFICIAL_NAME' },
                { name: 'INT_POSTAL_ADDRS', index: 'INT_POSTAL_ADDRS' },
                { name: 'INT_HOME_ADDRS', index: 'INT_HOME_ADDRS' },
                { name: 'INT_PHONE1', index: 'INT_PHONE1' },
                { name: 'INT_MOBILE', index: 'INT_MOBILE' },
                { name: 'INT_AREA_NAME', index: 'INT_AREA_NAME' },
                { name: 'INT_CONTACT_PERS', index: 'INT_CONTACT_PERS' },
                { name: 'INT_EMAIL', index: 'INT_EMAIL' },
                { name: 'INT_FAX', index: 'INT_FAX' },
                { name: 'INT_BANK_NUMBER', index: 'INT_BANK_NUMBER' },
                { name: 'INT_BANK_NAME', index: 'INT_BANK_NAME' },
                { name: 'INT_BANK_BRANCH', index: 'INT_BANK_BRANCH' },
                { name: 'INT_CITY_NAME', index: 'INT_CITY_NAME' },
                { name: 'INT_GENDER', index: 'INT_GENDER' },
                { name: 'INT_ID1_TYPE', index: 'INT_ID1_TYPE' },
                { name: 'INT_ID1_NO', index: 'INT_ID1_NO' },
                { name: 'INT_ID2_TYPE', index: 'INT_ID2_TYPE' },
                { name: 'INT_ID2_NO', index: 'INT_ID2_NO' },
                { name: 'INT_TIN_NO', index: 'INT_TIN_NO' },
                { name: 'INT_REG_NO', index: 'INT_REG_NO' },
                { name: 'INT_CRTE_BY', index: 'INT_CRTE_BY' },
                { name: 'INT_CRTE_DATE', index: 'INT_CRTE_DATE' },
                 { name: 'INT_STATUS', index: 'INT_STATUS' }
           ],
            function (sel_id) {
                var grid = $scope.intermediary_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='INT_CODE']").data("update", true);
                u.fill_form({
                    INT_CODE: grid.jqGrid('getCell', sel_id, 'INT_CODE'),
                    INT_CMP_CODE: grid.jqGrid('getCell', sel_id, 'INT_CMP_CODE'),
                    INT_OFF_CODE: grid.jqGrid('getCell', sel_id, 'INT_OFF_CODE'),
                    INT_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'INT_OFFICIAL_NAME'),
                    INT_POSTAL_ADDRS: grid.jqGrid('getCell', sel_id, 'INT_POSTAL_ADDRS'),
                    INT_HOME_ADDRS: grid.jqGrid('getCell', sel_id, 'INT_HOME_ADDRS'),
                    INT_PHONE1: grid.jqGrid('getCell', sel_id, 'INT_PHONE1'),
                    INT_MOBILE: grid.jqGrid('getCell', sel_id, 'INT_MOBILE'),
                    INT_AREA_NAME: grid.jqGrid('getCell', sel_id, 'INT_AREA_NAME'),
                    INT_CONTACT_PERS: grid.jqGrid('getCell', sel_id, 'INT_CONTACT_PERS'),
                    INT_PHONE: grid.jqGrid('getCell', sel_id, 'INT_PHONE'),
                    INT_EMAIL: grid.jqGrid('getCell', sel_id, 'INT_EMAIL'),
                    INT_FAX: grid.jqGrid('getCell', sel_id, 'INT_FAX'),
                    INT_BANK_NUMBER: grid.jqGrid('getCell', sel_id, 'INT_BANK_NUMBER'),
                    INT_BANK_NAME: grid.jqGrid('getCell', sel_id, 'INT_BANK_NAME'),
                    INT_BANK_BRANCH: grid.jqGrid('getCell', sel_id, 'INT_BANK_BRANCH'),
                    INT_CITY_NAME: grid.jqGrid('getCell', sel_id, 'INT_CITY_NAME'),
                    INT_GENDER: grid.jqGrid('getCell', sel_id, 'INT_GENDER'),
                    INT_ID1_TYPE: grid.jqGrid('getCell', sel_id, 'INT_ID1_TYPE'),
                    INT_ID1_NO: grid.jqGrid('getCell', sel_id, 'INT_ID1_NO'),
                    INT_ID2_TYPE: grid.jqGrid('getCell', sel_id, 'INT_ID2_TYPE'),
                    INT_ID2_NO: grid.jqGrid('getCell', sel_id, 'INT_ID2_NO'),
                    INT_TIN_NO: grid.jqGrid('getCell', sel_id, 'INT_TIN_NO'),
                    INT_REG_NO: grid.jqGrid('getCell', sel_id, 'INT_REG_NO'),
                    //INT_STATUS: grid.jqGrid('getCell', sel_id, 'INT_STATUS')
                }, "#intermediaryForm");
            });
        $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  intermediary_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#intermediaryForm")) {

                if (u.field_empty("input[name='INT_PARTY_CODE']")) return u.growl_error

           ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Intermediary to the grid?", function () {

                    var rowIds = $scope.intermediary_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.intermediary_grid.jqGrid('getCell', currRow, 'INT_PARTY_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#INT_PARTY_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#intermediaryForm");
                        FormData.INT_STATUS = "U";
                        FormData.INT_CRTE_BY = "Admin";
                        FormData.INT_CRTE_DATE = u.get_date();
                        $scope.intermediary_grid.addRowData(FormData.INT_PARTY_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Intermediary successfully added to grid");
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
                case "btn_company":
                    $scope.lov.call_dialog("Select Company", "get_lov_companies", $scope.dialog_data);
                    break;
                case "btn_office":
                    $scope.lov.call_dialog("Select Branch", "get_lov_offices", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.intermediary_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.intermediary_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'INT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'INT_PARTY_CODE');

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

                    grid.jqGrid('setCell', row_id, 'INT_STATUS', 'D');
                    $('#' + row_id, '#grdIntermediary').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdIntermediary').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'INT_STATUS', 'A');
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

            if (u.grid_empty($scope.intermediary_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.intermediary_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'INT_CODE');

            if (Code == $('#INT_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'INT_CODE', $('#INT_CODE').val());
                grid.jqGrid('setCell', row_id, 'INT_CMP_CODE', $('#INT_CMP_CODE').val());
                grid.jqGrid('setCell', row_id, 'INT_OFF_CODE', $('#INT_OFF_CODE').val());
                grid.jqGrid('setCell', row_id, 'INT_OFFICIAL_NAME', $('#INT_OFFICIAL_NAME').val());
                grid.jqGrid('setCell', row_id, 'INT_POSTAL_ADDRS', $('#INT_POSTAL_ADDRS').val());
                grid.jqGrid('setCell', row_id, 'INT_HOME_ADDRS', $('#INT_HOME_ADDRS').val());
                grid.jqGrid('setCell', row_id, 'INT_PHONE1', $('#INT_PHONE1').val());
                grid.jqGrid('setCell', row_id, 'INT_MOBILE', $('#INT_MOBILE').val());
                grid.jqGrid('setCell', row_id, 'INT_AREA_NAME', $('#INT_AREA_NAME').val());
                grid.jqGrid('setCell', row_id, 'INT_CONTACT_PERS', $('#INT_CONTACT_PERS').val());
                grid.jqGrid('setCell', row_id, 'INT_PHONE', $('#INT_PHONE').val());
                grid.jqGrid('setCell', row_id, 'INT_EMAIL', $('#INT_EMAIL').val());
                grid.jqGrid('setCell', row_id, 'INT_FAX', $('#INT_FAX').val());
                grid.jqGrid('setCell', row_id, 'INT_BANK_BRANCH', $('#INT_BANK_BRANCH').val());
                grid.jqGrid('setCell', row_id, 'INT_BANK_NUMBER', $('#INT_BANK_NUMBER').val());
                grid.jqGrid('setCell', row_id, 'INT_BANK_NAME', $('#INT_BANK_NAME').val());
                grid.jqGrid('setCell', row_id, 'INT_CITY_NAME', $('#INT_CITY_NAME').val());
                grid.jqGrid('setCell', row_id, 'INT_GENDER', $('#INT_GENDER').val());

                grid.jqGrid('setCell', row_id, 'INT_ID1_TYPE', $('#INT_ID1_TYPE').val());
                grid.jqGrid('setCell', row_id, 'INT_ID1_NO', $('#INT_ID1_NO').val());              
               
                grid.jqGrid('setCell', row_id, 'INT_ID2_NO', $('#INT_ID2_NO').val());
                grid.jqGrid('setCell', row_id, 'INT_ID2_TYPE', $('#INT_ID2_TYPE').val());
                grid.jqGrid('setCell', row_id, 'INT_TIN_NO', $('#INT_TIN_NO').val());
              
                grid.jqGrid('setCell', row_id, 'INT_REG_NO', $('#INT_REG_NO').val());
                grid.jqGrid('setCell', row_id, 'INT_CTP_CODE', $('#INT_CTP_CODE').val());
              
                u.hide_confirm();
                u.growl_success("Intermediary successfully updated");
                $("form input[name='INT_CODE']").data("update", false);
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

            if (u.grid_empty($scope.intermediary_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                 console.log(u.get_grid_data($scope.intermediary_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                 if (!$scope.saving) {
                     $scope.saving = true;
                     s.save_intermediaries(u.get_grid_data($scope.intermediary_grid), function (responseData) {
                         $scope.saving = false;
                         if (responseData.state) {
                             var formgrid = $scope.intermediary_grid;
                             var rowIds = $scope.intermediary_grid.jqGrid("getDataIDs");

                             // iterate through the rows in Cover Grid and update Status
                             for (var i = 0, len = rowIds.length; i < len; i++) {
                                 var covCurrRow = rowIds[i];

                                 var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "INT_STATUS");

                                 //Delete row if it is marked for deletion
                                 if (covRecStatus === "D") {
                                     formgrid.jqGrid("delRowData", covCurrRow);
                                 }
                                 //Update row status to Active (A) if it is newly added
                                 if (covRecStatus === "U") {
                                     formgrid.jqGrid("setCell", covCurrRow, "INT_STATUS", "A");
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
                u.form_reset("#intermediaryForm");
                u.clear_grid_data($scope.intermediary_grid);
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
            u.excel_export($scope.intermediary_grid, ["ID"], "Intermediary_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryIntermediary").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_intermediary(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.intermediary_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.intermediary_grid.addRowData(result[i].INT_PARTY_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.intermediary_grid.jqGrid('clearGridData');

                //fetch all areas
                s.get_intermediaries(function (intermediaries) {
                    for (var i in intermediaries) {
                        $scope.intermediary_grid.addRowData(intermediaries[i].INT_PARTY_CODE, intermediaries[i]);
                    }
                });
            }

        });
              
        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='INT_PARTY_CODE']", "check_intermediary_code");

        /*-----------------------------
* Company LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='INT_CMP_CODE']", "check_company_code", "form input[name='CMP_NAME']");

        /*-----------------------------
 * City LOV code validation
 *---------------------------*/
        u.lovCodeVal("form input[name='INT_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");

    });

})(window.$, window.service, window.utility, {})