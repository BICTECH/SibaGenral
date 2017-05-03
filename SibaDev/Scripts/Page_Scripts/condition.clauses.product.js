(function ($, s, u, $scope) {
    $(function () {

        $scope.clauses_grid = $("#grdClauses").jqGrid({
            data: 'local',
            height: 255,
            colNames: ['SysID', 'Product Code', 'Created by', 'Create Date', 'Status'],

            colModel: [
                { name: 'PCC_ID', index: 'PCC_ID', width: 150 },
                { name: 'PCC_PDT_CODE', index: 'PCC_PDT_CODE', width: 150 },
                { name: 'PCC_CRTE_BY', index: 'PCC_CRTE_BY', width: 150 },
                { name: 'PCC_CRTE_DATE', index: 'PCC_CRTE_DATE', width: 150 },              
                { name: 'PCC_STATUS', index: 'PCC_STATUS', width: 150 }
               
            ],
            //Retrive Code and description and return on row click..
            onSelectRow: function (sel_id) {
                var grid = $scope.clauses_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                u.fill_form({
                    PCC_ID: grid.jqGrid('getCell', sel_id, 'PCC_ID'),
                    PCC_PDT_CODE: grid.jqGrid('getCell', sel_id, 'PCC_PDT_CODE'),
                    PCC_STATUS: grid.jqGrid('getCell', sel_id, 'PCC_STATUS'),
                }, "#clausesForm");
            },

            rowNum: 50,
            rowList: [100, 150, 200, 500],
            pager: '#grdClausesPager',
            sortname: 'id',
            viewrecords: true,
            sortorder: "asc",
            loadonce: true,
            ignoreCase: true,
            caption: "Condition & Clauses list",
            loadtext: 'Loading, please wait',
            //new added
            width: this.parentElement,
            shrinkToFit: false,
            autowidth: false,
            multiselect: false
        });
        $("#grdClauses").jqGrid('navGrid', '#grdPager',
        { search: true, edit: false, add: false, del: false });

        $("#grdClauses").jqGrid('filterToolbar',
        { searchOnEnter: false, stringResult: true, defaultSearch: "cn" });


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
        }); /*--------------------------------------------------
        * call add function to add records to  clauses_grid
        *------------------------------------------------*/
        //
        $("#btn_add_clauses").on('click', function () {

            if ($('#PCC_PDT_CODE').val() == "") {

                /*---------------------------------------------------------------
                 * call warning dialog message  errorMssgeModal errorMssgeModal
                 *-------------------------------------------------------------*/
                //
                u.modal_alert("The code field cannot be null, Please check and try again");

                clausesForm.PCC_PDT_CODE.focus();

            }

            else {
                RetnSequenceNo("SEQ_PROD_CLAUSE", "#PCC_ID");

                var rowIds = $scope.clauses_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.clauses_grid.jqGrid('getCell', currRow, 'PCC_PDT_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#PCC_PDT_CODE').val(), Code) < 0) {
                    RetnSequenceNo("SEQ_PROD_CLAUSE", "#PCC_ID");

                    CovSysID = $('#PCC_ID').val();
                    var FormData = u.parse_form("#clausesForm");
                    FormData.PCC_ID = $('#PCC_ID').val();

                    FormData.PCC_STATUS = "U";
                    FormData.PCC_CRTE_BY = "Admin";
                    FormData.PCC_CRTE_DATE = "1/4/2016";
                    $scope.clauses_grid.addRowData(FormData.PCC_PDT_CODE, FormData);
                }

                else {
                    u.modal_alert("Code exists, you cannot add same Code :  " + cellValue);
                }
            }
        });

        /*--------------------------------
        * Edit/Update Function
        *------------------------------*/
        //
        $("#btn_update_clauses").on('click', function () {

            var grid = $scope.clauses_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'PCC_ID');

            if (Code == $('#PCC_ID').val()) {

                grid.jqGrid('setCell', row_id, 'PCC_ID', $('#PCC_ID').val());
                grid.jqGrid('setCell', row_id, 'PCC_PDT_CODE', $('#PCC_PDT_CODE').val());           

            }

        });

        /*----------------------------------------------------
      * Remove record or Mark for deletion from City Grid
      *---------------------------------------------------*/

        $("#btn_remove_clauses").on('click', function () {
            if (u.grid_empty($scope.clauses_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.clauses_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PCC_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'PCC_ID');

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

                    grid.jqGrid('setCell', row_id, 'PCC_STATUS', 'D');
                    $('#' + row_id, '#grdClauses').css({ color: 'red' });

                    u.hide_warning();

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdClauses').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PCC_STATUS', 'A');
                    u.hide_warning();

                }

            });

        });

        $("#btn_Reset").on('click', function () {
            u.modal_warning("Are you sure you want to clear all data from the form?");

            $('#btnOkWarning').click(function (e) {
                u.form_reset("#clausesForm");
                $scope.clauses_grid.jqGrid('clearGridData');

                u.hide_warning();
            });

        });

    });
})(window.$, window.service, window.utility, {});