(function ($, s, u, $scope) {
    $(function () {


        $scope.agencycomm_grid = u.default_grid("#grdAgencyComm", "#grdAgencyCommPager", "Agency Commission List",
     ['Code', ' Name', 'Description', 'Percentage', 'Seqnum', 'B-Party Type',
                       'C-Party type', 'Status', 'Created By', 'Created Date'],
     [
         { name: 'COM_CODE', id: true, index: 'COM_CODE' },
        { name: 'COM_NAME', index: 'COM_NAME' },
        { name: 'COM_DESC', index: 'COM_DESC' },
        { name: 'COM_PERC', index: 'COM_PERC' },
        { name: 'COM_SEQNUM', index: 'COM_SEQNUM' },
        { name: 'COM_BPARTY_TYPE', index: 'COM_BPARTY_TYPE' },
        { name: 'COM_CPARTY_TYPE', index: 'COM_CPARTY_TYPE' },
        { name: 'COM_STATUS', index: 'COM_STATUS' },
        { name: 'COM_CRTE_BY', index: 'COM_CRTE_BY' },
        { name: 'COM_CRTE_DATE', index: 'COM_CRTE_DATE' }
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.agencycomm_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='COM_CODE']").data("update", true);
        u.fill_form({
            COM_CODE: grid.jqGrid('getCell', sel_id, 'COM_CODE'),
            COM_NAME: grid.jqGrid('getCell', sel_id, 'COM_NAME'),
            COM_DESC: grid.jqGrid('getCell', sel_id, 'COM_DESC'),
            COM_PERC: grid.jqGrid('getCell', sel_id, 'COM_PERC'),
            COM_SEQNUM: grid.jqGrid('getCell', sel_id, 'COM_SEQNUM'),
            COM_BPARTY_TYPE: grid.jqGrid('getCell', sel_id, 'COM_BPARTY_TYPE'),
            COM_CPARTY_TYPE: grid.jqGrid('getCell', sel_id, 'COM_CPARTY_TYPE'),
            COM_STATUS: grid.jqGrid('getCell', sel_id, 'COM_STATUS')
        }, "#agencycommForm");
    }),
   $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  agencycomm_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.field_empty("input[name='ATY_CODE']")) return u.growl_error

            ("The Form code field is empty, please fill and to add to the grid");

            u.modal_confirmation("Are you sure you want to add Agency Commision to the grid?", function () {
                
                var rowIds = $scope.agencycomm_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.agencycomm_grid.jqGrid('getCell', currRow, 'COM_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#COM_CODE').val(), Code) < 0) {

                    var FormData = u.parse_form("#agencycommForm");
                    FormData.COM_STATUS = "U";
                    FormData.COM_CRTE_BY = "Admin";
                    FormData.COM_CRTE_DATE = u.get_date();
                    $scope.agencycomm_grid.addRowData(FormData.COM_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Agency Commission successfully added to grid");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                }

            });
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {

            if (u.grid_empty($scope.agencycomm_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.agencycomm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'COM_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'COM_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
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

                    grid.jqGrid('setCell', row_id, 'COM_STATUS', 'D');
                    $('#' + row_id, '#grdAgencyComm').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdAgencyComm').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'COM_STATUS', 'A');
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

            if (u.grid_empty($scope.agencycomm_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.agencycomm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'COM_CODE');

            if (Code == $('#COM_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'COM_CODE', $('#COM_CODE').val());
                grid.jqGrid('setCell', row_id, 'COM_NAME', $('#COM_NAME').val());
                grid.jqGrid('setCell', row_id, 'COM_DESC', $('#COM_DESC').val());
                grid.jqGrid('setCell', row_id, 'COM_PERC', $('#COM_PERC').val());
                grid.jqGrid('setCell', row_id, 'COM_SEQNUM', $('#COM_SEQNUM').val());
                grid.jqGrid('setCell', row_id, 'COM_CPARTY_TYPE', $('#COM_CPARTY_TYPE').val());
                grid.jqGrid('setCell', row_id, 'COM_BPARTY_TYPE', $('#COM_BPARTY_TYPE').val());
                u.hide_confirm();
                u.growl_success("Agency Commission successfully updated");
                $("form input[name='COM_CODE']").data("update", false);
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

            if (u.grid_empty($scope.agencycomm_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {        

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.agencycomm_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_agencycomms(u.get_grid_data($scope.agencycomm_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.agencycomm_grid;
                            var rowIds = $scope.agencycomm_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "COM_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "COM_STATUS", "A");
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
                u.form_reset("#agencycommForm");
                u.clear_grid_data($scope.agencycomm_grid);
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
            u.excel_export($scope.agencycomm_grid, ["ID"], "Agency_Commission_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryAgencycomm").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_agencycomm(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.agencycomm_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.agencycomm_grid.addRowData(result[i].COM_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.agencycomm_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_agencycomms(function (agencycommissions) {
                    for (var i in agencycommissions) {
                        $scope.agencycomm_grid.addRowData(agencycommissions[i].COM_CODE, agencycommissions[i]);
                    }
                });
            }

        });

        /*-----------------------------
    * Code validation
     *-----------------------*/
        u.codeVal("form input[name='COM_CODE']", "check_agencycommission_code");


    });

})(window.$, window.service, window.utility, {})