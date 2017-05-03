(function ($, s, u, $scope) {
    $(function () {

        $scope.customer_grid = u.default_grid("#grdCustomer", "#grdCustomerPager", "Customer List",
            ['Code', 'Customer Type', 'Title', 'First Name', 'Last Name', 'Other Name', 'Official Name',
                'Home Address', 'Postal Address', 'Gender', 'DOB', 'Email Address',
                'Profession', 'Pin No.', 'Phone No', 'Mobile No', 'Bank Name', 'Account Number', 'Branch', 'Status', 'Created by', 'Created Date'],
            [
                { name: 'CUS_CODE', id: true, index: 'CUS_CODE' },
                { name: 'CUS_TYPE_CODE', index: 'CUS_TYPE_CODE' },
                { name: 'CUS_TITLE', index: 'CUS_TITLE' },
                { name: 'CUS_FIRST_NAME', index: 'CUS_FIRST_NAME' },
                { name: 'CUS_LAST_NAME', index: 'CUS_LAST_NAME' },
                { name: 'CUS_OTHER_NAME', index: 'CUS_OTHER_NAME' },
                { name: 'CUS_OFFICIAL_NAME', index: 'CUS_OFFICIAL_NAME'},
                { name: 'CUS_ADDRS1', index: 'CUS_ADDRS1' },
                { name: 'CUS_ADDRS2', index: 'CUS_ADDRS2' },
                { name: 'CUS_GENDER', index: 'CUS_GENDER' },
                { name: 'CUS_DOB', index: 'CUS_DOB' },
                { name: 'CUS_EMAIL', index: 'CUS_EMAIL' },
                { name: 'CUS_PROFESSION', index: 'CUS_PROFESSION' },
                { name: 'CUS_PIN_NO', index: 'CUS_PIN_NO' },
                { name: 'CUS_PHONE1', index: 'CUS_PHONE1' },
                { name: 'CUS_MOBILE', index: 'CUS_MOBILE' },
                { name: 'CUS_BANK_NAME', index: 'CUS_BANK_NAME' },
                { name: 'CUS_ACC_NUM', index: 'CUS_ACC_NUM' },
                { name: 'CUS_BANK_BRANCH', index: 'CUS_BANK_BRANCH' },
                { name: 'CUS_STATUS', index: 'CUS_STATUS' },
                { name: 'CUS_CRTE_BY', index: 'CUS_CRTE_BY' },
                { name: 'CUS_CRTE_DATE', index: 'CUS_CRTE_DATE' }
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    CUS_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CUS_TYPE_CODE: grid.jqGrid('getCell', sel_id, 'CUS_TYPE_CODE'),
                    CUS_TITLE: grid.jqGrid('getCell', sel_id, 'CUS_TITLE'),
                    CUS_FIRST_NAME: grid.jqGrid('getCell', sel_id, 'CUS_FIRST_NAME'),
                    CUS_LAST_NAME: grid.jqGrid('getCell', sel_id, 'CUS_LAST_NAME'),
                    CUS_OTHER_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OTHER_NAME'),
                    CUS_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                    CUS_ADDRS1: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS1'),
                    CUS_ADDRS2: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS2'),
                    CUS_BANK_NAME: grid.jqGrid('getCell', sel_id, 'CUS_BANK_NAME'),
                    CUS_ACC_NUM: grid.jqGrid('getCell', sel_id, 'CUS_ACC_NUM'),
                    CUS_PHONE1: grid.jqGrid('getCell', sel_id, 'CUS_PHONE1'),
                    CUS_MOBILE: grid.jqGrid('getCell', sel_id, 'CUS_MOBILE'),
                    CUS_EMAIL: grid.jqGrid('getCell', sel_id, 'CUS_EMAIL'),
                    CUS_PROFESSION: grid.jqGrid('getCell', sel_id, 'CUS_PROFESSION'),
                    CUS_GENDER: grid.jqGrid('getCell', sel_id, 'CUS_GENDER'),
                    CUS_DOB: grid.jqGrid('getCell', sel_id, 'CUS_DOB'),
                    CUS_PIN_NO: grid.jqGrid('getCell', sel_id, 'CUS_PIN_NO'),
                    CUS_BANK_BRANCH: grid.jqGrid('getCell', sel_id, 'CUS_BANK_BRANCH'),
                    //CUS_STATUS: grid.jqGrid('getCell', sel_id, 'CUS_STATUS')
                }, "#customerForm");
            }),
            $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  customer_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {
               
            if (u.form_validation("#customerForm")) {

                if (u.field_empty("input[name='CUS_CODE']")) return u.growl_error

                ("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Customer to the grid?", function () {

                    var rowIds = $scope.customer_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.customer_grid.jqGrid('getCell', currRow, 'CUS_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CUS_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#customerForm");
                        FormData.CUS_STATUS = "U";
                        FormData.CUS_CRTE_BY = "Admin";
                        FormData.CUS_CRTE_DATE = u.get_date();
                        $scope.customer_grid.addRowData(FormData.CUS_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Country successfully added to grid");
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
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer type", "get_lov_customertypes", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.customer_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.customer_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CUS_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CUS_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CUS_STATUS', 'D');
                    $('#' + row_id, '#grdCustomer').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCustomer').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CUS_STATUS', 'A');
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

            if (u.grid_empty($scope.customer_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.customer_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'CUS_CODE');

            if (Code == $('#CUS_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'CUS_CODE', $('#CUS_CODE').val());
                grid.jqGrid('setCell', row_id, 'CUS_TYPE_CODE', $('#CUS_TYPE_CODE').val());
                grid.jqGrid('setCell', row_id, 'CUS_TITLE', $('#CUS_TITLE').val());
                grid.jqGrid('setCell', row_id, 'CUS_FIRST_NAME', $('#CUS_FIRST_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_LAST_NAME', $('#CUS_LAST_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_OTHER_NAME', $('#CUS_OTHER_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_OFFICIAL_NAME', $('#CUS_OFFICIAL_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_ADDRS1', $('#CUS_ADDRS1').val());
                grid.jqGrid('setCell', row_id, 'CUS_ADDRS2', $('#CUS_ADDRS2').val());             
                grid.jqGrid('setCell', row_id, 'CUS_GENDER', $('#CUS_GENDER').val());
                grid.jqGrid('setCell', row_id, 'CUS_DOB', $('#CUS_DOB').val());
                grid.jqGrid('setCell', row_id, 'CUS_EMAIL', $('#CUS_EMAIL').val());
                grid.jqGrid('setCell', row_id, 'CUS_PROFESSION', $('#CUS_PROFESSION').val());
                grid.jqGrid('setCell', row_id, 'CUS_MOBILE', $('#CUS_MOBILE').val());
                grid.jqGrid('setCell', row_id, 'CUS_PHONE1', $('#CUS_PHONE1').val());
                grid.jqGrid('setCell', row_id, 'CUS_BANK_NAME', $('#CUS_BANK_NAME').val());
                grid.jqGrid('setCell', row_id, 'CUS_ACC_NUM', $('#CUS_ACC_NUM').val());
                grid.jqGrid('setCell', row_id, 'CUS_BANK_BRANCH', $('#CUS_BANK_BRANCH').val());              

                u.hide_confirm();
                u.growl_success("Customer successfully updated");
                $("form input[name='CUS_CODE']").data("update", false);
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

            if (u.grid_empty($scope.customer_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.customer_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_customers(u.get_grid_data($scope.customer_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.customer_grid;
                            var rowIds = $scope.customer_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CUS_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CUS_STATUS", "A");
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
                u.form_reset("#customerForm");
                u.clear_grid_data($scope.customer_grid);
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
            u.excel_export($scope.customer_grid, ["ID"], "Customers_List_Excel");
        });

        /*-------------------------------------
     * setting datepicker for date fields
     *------------------------------------*/
        u.set_datepicker("input[name='CUS_DOB']");


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryCustomer").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_customer(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.customer_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.customer_grid.addRowData(result[i].CUS_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.customer_grid.jqGrid('clearGridData');

                //fetch all areas
                s.get_customers(function (customers) {
                    for (var i in customers) {
                        $scope.customer_grid.addRowData(customers[i].CUS_CODE, customers[i]);
                    }
                });
            }

        });


        document.getElementById("CUS_FIRST_NAME").addEventListener("focusout", cusnames);
        document.getElementById("CUS_OTHER_NAME").addEventListener("focusout", cusnames);
        document.getElementById("CUS_LAST_NAME").addEventListener("focusout", cusnames);

        function cusnames() {
            var firstname = $("#CUS_FIRST_NAME").val();
            var othername = $("#CUS_OTHER_NAME").val();
            var lastname = $("#CUS_LAST_NAME").val();

            $("#CUS_OFFICIAL_NAME").val(firstname + " " + othername + " " + lastname);

        }

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='CUS_CODE']", "check_customer_code");
        u.lovCodeVal("form input[name='CUS_TYPE_CODE']", "check_customertype_code", "form input[name='CUS_TYPE_NAME']");
    });

})(window.$, window.service, window.utility, {})