(function ($, s, u, $scope) {
    $(function () {

        $scope.transacstructure_grid = $("#grdTransacStructure").jqGrid({
            data: 'local',
            height: 255,
            colNames: ['Code', ' Name', 'Description','Organization', 'Journal Abbreviation',
                       'Status', 'Created By', 'Created Date'],
            colModel: [
                { name: 'TST_CODE', id: true, index: 'TST_CODE' },
                { name: 'TST_NAME', index: 'TST_NAME' },
                { name: 'TST_DESC', index: 'TST_DESC' },
                { name: 'TST_TRANS_ORG', index: 'TST_TRANS_ORG' },
                { name: 'TST_JRNL_ABBR', index: 'TST_JRNL_ABBR' },
                { name: 'TST_STATUS', index: 'TST_STATUS' },
                { name: 'TST_CRTE_BY', index: 'TST_CRTE_BY' },
                { name: 'TST_CRTE_DATE', index: 'TST_CRTE_DATE' }
            ],
            //Retrive Grid data into form input fields on row click..
            onSelectRow: function (sel_id) {
                var grid = $scope.transacstructure_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                u.fill_form({
                    TST_CODE: grid.jqGrid('getCell', sel_id, 'TST_CODE'),
                    TST_NAME: grid.jqGrid('getCell', sel_id, 'TST_NAME'),
                    TST_DESC: grid.jqGrid('getCell', sel_id, 'TST_DESC'),
                    TST_ABBR: grid.jqGrid('getCell', sel_id, 'TST_ABBR'),
                    TST_TRANS_ORG: grid.jqGrid('getCell', sel_id, 'TST_TRANS_ORG'),
                    TST_JRNL_ABBR: grid.jqGrid('getCell', sel_id, 'TST_JRNL_ABBR'),
                    //TST_STATUS: grid.jqGrid('getCell', sel_id, 'TST_STATUS')
                }, "#transacstructureForm");
            },
            rowNum: 50,
            rowList: [100, 150, 200, 500],
            pager: '#grdTransacStructurePager',
            sortname: 'id',
            viewrecords: true,
            sortorder: "asc",
            loadonce: true,
            ignoreCase: true,
            caption: "Transaction Structure list",
            loadtext: 'Loading, please wait',
            //new added
            width: this.parentElement,
            shrinkToFit: false,
            autowidth: false,
            multiselect: false
        });

        jQuery("#grdTransacStructure").jqGrid('filterToolbar',
           { searchOnEnter: false, stringResult: true, defaultSearch: "cn" });

        jQuery("#grdTransacStructure").jqGrid('bindKeys');


        /*--------------------------------------------------
           * call add function to add records to  transacstructure_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if ($('#TST_CODE').val() == "") {

                /*---------------------------------------------------------------
                 * call warning dialog message  errorMssgeModal errorMssgeModal
                 *-------------------------------------------------------------*/
                //
                u.modal_alert("The code field cannot be null, Please check and try again");

            }
            else {

                var rowIds = $scope.transacstructure_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.transacstructure_grid.jqGrid('getCell', currRow, 'TST_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#TST_CODE').val(), Code) < 0) {

                    var FormData = u.parse_form("#transacstructureForm");
                    FormData.TST_STATUS = "U";
                    FormData.TST_CRTE_BY = "Admin";
                    FormData.TST_CRTE_DATE = "1/4/2016";
                    $scope.transacstructure_grid.addRowData(FormData.TST_CODE, FormData);
                }

                else {
                    u.modal_alert("Code exists, you cannot add same Code :  " + cellValue);
                }
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
                case "btn_region":
                    $scope.lov.call_dialog("Select Region", "get_regions", $scope.dialog_data);
                    break;
            }
        }); /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {
            if (u.grid_empty($scope.transacstructure_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.transacstructure_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'TST_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'TST_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_warning("Are you sure you want to remove the Record?");

            /*-----------------------------
             * if user Clicks on Yes....
             *----------------------------*/
            //
            $('#btnOkWarning').click(function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus == "U") {

                    grid.jqGrid('delRowData', row_id);
                    u.hide_warning();
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid('setCell', row_id, 'TST_STATUS', 'D');
                    $('#' + row_id, '#grdTransacStructure').css({ color: 'red' });

                    u.hide_warning();

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdTransacStructure').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'TST_STATUS', 'A');
                    u.hide_warning();

                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on('click', function () {

            var grid = $scope.transacstructure_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'TST_CODE');

            if (Code == $('#TST_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'TST_CODE', $('#TST_CODE').val());
                grid.jqGrid('setCell', row_id, 'TST_NAME', $('#TST_NAME').val());
                grid.jqGrid('setCell', row_id, 'TST_DESC', $('#TST_DESC').val());
                grid.jqGrid('setCell', row_id, 'TST_ABBR', $('#TST_ABBR').val());
                grid.jqGrid('setCell', row_id, 'TST_TRANS_ORG', $('#TST_TRANS_ORG').val());
                grid.jqGrid('setCell', row_id, 'TST_JRNL_ABBR', $('#TST_JRNL_ABBR').val());
            }

        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {
            if (u.grid_empty($scope.transacstructure_grid)) return u.modal_alert("Grid is empty, please add a Transaction Structure!!!");

            u.modal_confirmation("Are you sure you want to save?", function (e) {
                u.hide_confirm();
                u.modal_alert("Wait while the transaction is being saved...");

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                var data = u.get_grid_data($scope.transacstructure_grid);
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_transactionstructures(data, function (response) {
                        $scope.saving = false;
                        u.hide_alert();
                        if (response.state) {

                            u.modal_success(response.message);
                        } else {
                            u.modal_error(response.message);
                        }
                    }, function (err) {
                        $scope.saving = false;
                        u.hide_alert();
                        u.modal_error("Error Sending Save request please try again");
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
            u.modal_warning("Are you sure you want to clear all data from the form?");

            $('#btnOkWarning').click(function (e) {
                u.form_reset("#transacstructureForm");
                $scope.transacstructure_grid.jqGrid('clearGridData');

                u.hide_warning();
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
            u.excel_export($scope.transacstructure_grid, ["ID"], "Transaction_Structure_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryTransacStructure").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_transactionstructure(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.transacstructure_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.transacstructure_grid.addRowData(result[i].TST_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.transacstructure_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_transactionstructures(function (transactionstructures) {
                    for (var i in transactionstructures) {
                        $scope.transacstructure_grid.addRowData(transactionstructures[i].TST_CODE, transactionstructures[i]);
                    }
                });
            }

        });
    });

})(window.$, window.service, window.utility, {})