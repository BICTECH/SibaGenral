(function ($, s, u, $scope) {
    $(function () {

        $scope.riskdtls_grid = u.default_grid("#grdRiskDtls", "#grdRiskDtlsPager", "Claim Risk List",
        ['Vehicle Reg No.', 'Chasis No', 'Engine No.', 'Vehicle No.', ' Vehicle Type', 'Model', 'Status', 'Created By', 'Created Date', 'ID', 'Claim ID'],
       [
          { name: 'CLM_RISK_VEH_REG_NO', id: false, index: 'CLM_RISK_VEH_REG_NO' },
          { name: 'CLM_RISK_CHASIS_NO', id: false, index: 'CLM_RISK_CHASIS_NO' },
          { name: 'CLM_RISK_ENG_NO', id: false, index: 'CLM_RISK_ENG_NO', width: 150 },
          { name: 'CLM_RISK_VEH_NO', index: 'CLM_RISK_VEH_NO', width: 200 },
          { name: 'CLM_RISK_VEH_TYPE', index: 'CLM_RISK_VEH_TYPE' },
          { name: 'CLM_RISK_MAKE_MODEL', index: 'CLM_RISK_MAKE_MODEL' },
          { name: 'CLM_RISK_STATUS', index: 'CLM_RISK_STATUS' },
          { name: 'CLM_RISK_CRTE_BY', index: 'CLM_RISK_CRTE_BY' },
          { name: 'CLM_RISK_CRTE_DATE', index: 'CLM_RISK_CRTE_DATE' },
          { name: 'CLM_RISK_SYS_ID', id: true, hidden: true, index: 'CLM_RISK_SYS_ID' },
          { name: 'CLM_RISK_CLM_SYS_ID', id: true, hidden: true, index: 'CLM_RISK_CLM_SYS_ID' },
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {

      }),


                $scope.vehrisk_grid = u.default_grid("#grdVehRisk", "#grdVehRiskPager", "Claim Risk List",
        ['ID', 'Vehicle Reg No.', 'Engine No.', 'Vehicle No.', ' Vehicle Type', 'Model', 'Status', 'Created By', 'Created Date'],
       [
          { name: 'CLM_RISK_SYS_ID', id: true, index: 'CLM_RISK_SYS_ID' },
          { name: 'CLM_RISK_VEH_REG_NO', id: false, index: 'CLM_RISK_VEH_REG_NO' },
          { name: 'CLM_RISK_ENG_NO', id: false, index: 'CLM_RISK_ENG_NO', width: 150 },
          { name: 'CLM_RISK_VEH_NO', index: 'CLM_RISK_VEH_NO', width: 200 },
          { name: 'CLM_RISK_VEH_TYPE', index: 'CLM_RISK_VEH_TYPE' },
          { name: 'CLM_RISK_MAKE_MODEL', index: 'CLM_RISK_MAKE_MODEL' },
          { name: 'CLM_RISK_STATUS', index: 'CLM_RISK_STATUS' },
          { name: 'CLM_RISK_CRTE_BY', index: 'CLM_RISK_CRTE_BY' },
          { name: 'CLM_RISK_CRTE_DATE', index: 'CLM_RISK_CRTE_DATE' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {

      }),


              $scope.estDtls_grid = u.default_grid("#grdEstimatesDtls", "#grdEstimatesDtlsPager", "Claim Estimate Details List",
        ['Code', 'Name', 'Amount', ' OS Amount', 'Status', 'Created By', 'Created Date', 'ID', 'Claim ID'],
       [
          { name: 'CLM_EST_TYPE', id: true, index: 'CLM_EST_TYPE' },
          { name: 'CLM_EST_NAME', index: 'CLM_EST_NAME', width: 200 },
          { name: 'CLM_EST_AMT', index: 'CLM_EST_AMT', width: 150 },
          { name: 'CLM_EST_OS_AMT', index: 'CLM_EST_OS_AMT', width: 150 },
          { name: 'CLM_EST_STATUS', index: 'CLM_EST_STATUS' },
          { name: 'CLM_EST_CRTE_BY', index: 'CLM_EST_CRTE_BY' },
          { name: 'CLM_EST_CRTE_DATE', index: 'CLM_EST_CRTE_DATE' },
          { name: 'CLM_EST_SYS_ID', id: false, hidden: true, index: 'CLM_EST_SYS_ID' },
          { name: 'CLM_EST_CLM_SYS_ID', id: false, hidden: true, index: 'CLM_EST_CLM_SYS_ID' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {
          var grid = $scope.estDtls_grid;
          var sel_id = grid.jqGrid('getGridParam', 'selrow');
          $("form input[name='CLM_EST_TYPE']").data("update", true);
          u.fill_form({
              CLM_EST_TYPE: grid.jqGrid('getCell', sel_id, 'CLM_EST_TYPE'),
              CLM_EST_NAME: grid.jqGrid('getCell', sel_id, 'CLM_EST_NAME'),
              CLM_EST_AMT: grid.jqGrid('getCell', sel_id, 'CLM_EST_AMT'),
              CLM_EST_OS_AMT: grid.jqGrid('getCell', sel_id, 'CLM_EST_OS_AMT'),
          }, "#clmEstDtlsForm");
          u.fill_form({
              CLM_EXP_CLM_EST_TYPE: grid.jqGrid('getCell', sel_id, 'CLM_EST_TYPE'),
          }, "#clmExpenseForm");
      });


          $scope.clmExpense_grid = u.default_grid("#grdClmExpense", "#grdClmExpensePager", "Claim Expense Details List",
        ['Code', 'Estimate Type', 'Amount', 'Status', 'Created By', 'Created Date', 'ID', 'Est ID'],
       [      
          { name: 'CLM_EXP_CODE', id: true, index: 'CLM_EXP_CODE', width: 150 },
          { name: 'CLM_EXP_CLM_EST_TYPE', index: 'CLM_EXP_CLM_EST_TYPE' },
          { name: 'CLM_EXP_COST', index: 'CLM_EXP_COST', width: 150 },
          { name: 'CLM_EXP_STATUS', index: 'CLM_EXP_STATUS' },
          { name: 'CLM_EXP_CRTE_BY', index: 'CLM_EXP_CRTE_BY' },
          { name: 'CLM_EXP_CRTE_DATE', index: 'CLM_EXP_CRTE_DATE' },
          { name: 'CLM_EXP_SYS_ID', id: false, index: 'CLM_EXP_SYS_ID' },
          { name: 'CLM_EXP_CLM_EST_SYS_ID', id: false, index: 'CLM_EXP_CLM_EST_SYS_ID' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {
          var grid = $scope.clmExpense_grid;
          var sel_id = grid.jqGrid('getGridParam', 'selrow');
          $("form input[name='CLM_EST_TYPE']").data("update", true);
          u.fill_form({
              CLM_EXP_CODE: grid.jqGrid('getCell', sel_id, 'CLM_EXP_CODE'),            
              CLM_EXP_COST: grid.jqGrid('getCell', sel_id, 'CLM_EXP_COST'),
          }, "#clmExpenseForm");
      }),


        // Policy Dialog
                $scope.polh_grid = u.default_grid("#gridPolh", "#gridPolhPager", "Policies",
            ['Policy ID', 'Policy Display No', 'Class of Business', 'Sub class', 'Cust Code'],
            [
                { name: 'POLH_SYS_ID', index: 'POLH_SYS_ID', width: 150 },
                { name: 'POLH_DISPLAY_NO', index: 'POLH_DISPLAY_NO', width: 150 },              
                { name: 'POLH_CLASS_CODE', index: 'POLH_CLASS_CODE', width: 150 },
                { name: 'POLH_SUB_CLASS_CODE', index: 'POLH_SUB_CLASS_CODE', width: 150 },
                { name: 'POLH_CUST_CODE', index: 'POLH_CUST_CODE', width: 150 },
            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.polh_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='POLH_SYS_ID']").data("update", true);
                u.fill_form({
                    CLM_CLT_CODE: grid.jqGrid('getCell', sel_id, 'POLH_CUST_CODE'),
                    CLM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'POLH_SYS_ID'),
                }, "#clmEstimateForm");
               
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.polh_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='POLH_SYS_ID']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid('getCell', sel_id, 'POLH_CUST_CODE'),
                    CLM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'POLH_SYS_ID'),
                }, "#clmEstimateForm");

                // hide modal on double click
                $("#policyLovModal").modal('hide');
                $scope.getClientLov();
          
            }),

     $scope.saving = false;


        $("#btn_Polh_lov").on('click', function () {

            $("#policyLovModal").modal();

        });


        /*---------------------------
         * Search Estimation
         *-------------------------*/
        $("#btnQueryPolh").click(function () {
            var queryTxt = $("#txtPolhSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_policys_est(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.polh_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.polh_grid.addRowData(result[i].POLH_SYS_ID, result[i])
                        }
                    },
                    function (err) {

                    })
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.polh_grid.jqGrid("clearGridData");

                //fetch all
                s.get_policys_est(function (polhs) {
                    for (var i in polhs) {
                        $scope.polh_grid.addRowData(polhs[i].POLH_SYS_ID, polhs[i]);
                    }
                })
            }

        })


        /*--------------------------------------------------
        *get Risks lists fucnction
        *------------------------------------------------*/
        //
        function getRiskLov() {

            /*
                obtain parameter for our request
            */
            var RisksData = {

                CLM_EST_RISK: $("#CLM_POLH_SYS_ID").val(),
            }

            //
            var grid = $scope.vehrisk_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getRisksLOV(RisksData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.vehrisk_grid.jqGrid('clearGridData');
                    //fill grid
                    for (var i in result) {

                        $scope.vehrisk_grid.addRowData(result[i]["VEH_SYS_ID"], result[i]);
                    }
                }
            });
        }


        $scope.getClientLov = function () {

            /*
                obtain parameter for our request
            */
            var ClientsData = {

                CUST_CODE: $("#POLH_CUST_CODE").val(),
            }

           
            //send parameters and get motor Risks from the database
            s.getClientsLOV(ClientsData, function (result) {
                if (result && result.length && result.length > 0) {

                    for (var i in result) {
                        $("#CLM_CLT_NAME").val(result[i]["CUS_OFFICIAL_NAME"], result[i]);                     
                    }
                }
            });
        }

  
        /*--------------------------------------------------
           * call add function to add records to  estDtls_grid
           *------------------------------------------------*/
        //
        $("#btn_Risk_Detail").click(function () {
            if (u.form_validation("#clmEstimateForm")) {
               u.clear_grid_data($scope.vehrisk_grid);
               getRiskLov();
               $("#ClaimRiskDetailskModal").modal();
            }
            else {
                u.growl_warning("Please fill the Claim Header form and try again");
            };
            //u.clear_grid_data($scope.vehrisk_grid);
            //getRiskLov();
            //getClientLov();
            //$("#ClaimRiskDetailskModal").modal();
        });



        $("#btn_Risk_Onclose").click(function () {

            if (u.grid_empty($scope.riskdtls_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#ClaimRiskDetailskModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#ClaimRiskDetailskModal").modal("hide");
            }
        });


        $("#btn_add_est").on('click', function () {

            if (u.form_validation("#clmEstDtlsForm")) {

                //if (u.field_empty("input[name='CLM_EST_TYPE']")) return u.growl_error

                //("The Form code field is empty, please fill and to add to the grid");

                u.modal_confirmation("Are you sure you want to add Class of Business to the grid?", function () {

                    var rowIds = $scope.estDtls_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.estDtls_grid.jqGrid('getCell', currRow, 'CLM_EST_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CLM_EST_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#clmEstDtlsForm");
                        FormData.CLM_EST_STATUS = "U";
                        FormData.CLM_EST_CRTE_BY = "Admin";
                        FormData.CLM_EST_CRTE_DATE = u.get_date();
                        $scope.estDtls_grid.addRowData(FormData.CLM_EST_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("Claim Estimate Details successfully added to grid");
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
                case "btn_office":
                    $scope.lov.call_dialog("Select Office", "get_office_lov", $scope.dialog_data);
                    break;
                case "btn_region":
                    $scope.lov.call_dialog("Select Region", "get_polh_lov", $scope.dialog_data);
                    break;
                case "btn_expense":
                    $scope.lov.call_dialog("Select Customer Category", "get_expense_lov", $scope.dialog_data);
                    break;
                case "btn_catastrophy":
                    $scope.lov.call_dialog("Select Claim Catastrophy", "get_catastrophy_lov", $scope.dialog_data);
                    break;
                case "btn_loss":
                    $scope.lov.call_dialog("Select Claim Cause of Loss", "get_loss_lov", $scope.dialog_data);
                    break;
                case "btn_est_type":
                    $scope.lov.call_dialog("Select Claim Estimate Type", "get_estimation_lov", $scope.dialog_data);
                    break;

            }
        })

        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_est").on('click', function () {

            if (u.grid_empty($scope.estDtls_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.estDtls_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CLM_EST_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CLM_EST_TYPE');

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

                    grid.jqGrid('setCell', row_id, 'CLM_EST_STATUS', 'D');
                    $('#' + row_id, '#grdEstimatesDtls').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdEstimatesDtls').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CLM_EST_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_est").on('click', function () {

            if (u.grid_empty($scope.estDtls_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.estDtls_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'CLM_EST_TYPE');

                if (Code == $('#CLM_EST_TYPE').val()) {

                    grid.jqGrid('setCell', row_id, 'CLM_EST_SYS_ID', $('#CLM_EST_SYS_ID').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EST_TYPE', $('#CLM_EST_TYPE').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EST_NAME', $('#CLM_EST_NAME').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EST_AMT', $('#CLM_EST_AMT').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EST_OS_AMT', $('#CLM_EST_OS_AMT').val());
                    u.hide_confirm();
                    u.growl_success("Claim Estimate Details successfully updated");
                    $("form input[name='CLM_EST_TYPE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });
        });




        /*--------------------------------------------------
           * call add function to add records to Claim Expense
           *------------------------------------------------*/
        //
        $("#btn_clm_expense").click(function () {

            $scope.hideShowCovers();
            $("#ClaimExpDetailskModal").modal();       

        });


        /*
      //Hide or show Expense in the Risk Covers (to filter out the covers for particular risk
      */
        $scope.hideShowCovers = function () {

            //get the selected Risk ID
            var estimgrid = $('#grdEstimatesDtls');
            var selId = estimgrid.jqGrid("getGridParam", "selrow");
            var estimRiskId = estimgrid.jqGrid("getCell", selId, "CLM_EST_TYPE");

            //get the Expense data
            var expgrid = $('#grdClmExpense');
            var rowIds = expgrid.jqGrid("getDataIDs");

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getExpId = expgrid.jqGrid("getCell", currRow, "CLM_EXP_CLM_EST_TYPE");

                if (estimRiskId != getExpId) {

                    $("#" + currRow, '#grdClmExpense').hide();

                }
                else if (estimRiskId == getExpId) {
 
                    $("#" + currRow, '#grdClmExpense').show();
                    
                }
            }

        };




        $("#btn_Exp_Onclose").click(function () {

            if (u.grid_empty($scope.clmExpense_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#ClaimExpDetailskModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#ClaimExpDetailskModal").modal("hide");
            }
        });


        /*--------------------------------
         * Expense Functions
         *------------------------------*/
        //
        $("#btn_add_expense").on('click', function () {

            if (u.form_validation("#clmExpenseForm")) {
             
                u.modal_confirmation("Are you sure you want to add Claim Expense Details to the grid?", function () {

                    var rowIds = $scope.clmExpense_grid.jqGrid('getDataIDs');

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
                        var expCode = $scope.clmExpense_grid.jqGrid('getCell', currRow, 'CLM_EXP_CODE');
                        var exptype = $scope.clmExpense_grid.jqGrid('getCell', currRow, 'CLM_EXP_CLM_EST_TYPE');
                        var cellValue = expCode + exptype;
                        Code.push(cellValue);
                    }
                    var expenCode = $("#CLM_EXP_CODE").val();

                    var estCode = $("#CLM_EST_TYPE").val();

                    var verifyEstExp = expenCode + estCode;
                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray(verifyEstExp, Code) < 0) {

                        var FormData = u.parse_form("#clmExpenseForm");
                        FormData.CLM_EXP_STATUS = "U";
                        FormData.CLM_EXP_CRTE_BY = "Admin";
                        FormData.CLM_EXP_CRTE_DATE = u.get_date();
                        $scope.clmExpense_grid.addRowData(FormData.CLM_EXP_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Claim Expense Details successfully added to grid");
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


        $("#btn_update_expense").on('click', function () {

            if (u.grid_empty($scope.clmExpense_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.clmExpense_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'CLM_EXP_CODE');

                if (Code == $('#CLM_EXP_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'CLM_EXP_NAME', $('#CLM_EXP_NAME').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EXP_COST', $('#CLM_EXP_COST').val());
                    grid.jqGrid('setCell', row_id, 'CLM_EXP_CODE', $('#CLM_EXP_CODE').val());
                    u.hide_confirm();
                    u.growl_success("Claim Expense Details successfully updated");
                    $("form input[name='CLM_EXP_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });
        });


        /*--------------------------------
         * Risk Funtions
         *------------------------------*/
        //
        $("#btn_add_veh_risk").on('click', function () {

            if (u.grid_empty($scope.vehrisk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                //var grid = $scope.riskdtls_grid;
                var rowIds = $scope.riskdtls_grid.jqGrid('getDataIDs');
                var CodeArray = [];

                for (var i = 0, len = rowIds.length; i < len; i++) {
                    var currRow = rowIds[i];

                    var cellValue = $scope.riskdtls_grid.jqGrid('getCell', currRow, 'CLM_RISK_VEH_NO');

                    CodeArray.push(cellValue);

                }
              
                //get value of the cell or column in an array
                //var coverCode = $scope.riskdtls_grid.jqGrid("getCell", currRow, "CLM_RISK_VEH_REG_NO");

                var RiskCode = $scope.riskdtls_grid.jqGrid("getCell", currRow, "CLM_RISK_VEH_NO");

                //var riskCov = coverCode + RiskCode;

                //alert(riskCov);

                var vehgrid = $scope.vehrisk_grid;
                var selRowId = vehgrid.jqGrid("getGridParam", "selrow");
                var selId = vehgrid.jqGrid("getGridParam", "selrow");
                var rowData = vehgrid.jqGrid("getRowData", selRowId);
                var vehRiskId = vehgrid.jqGrid("getCell", selId, "CLM_RISK_VEH_NO");

                if ($.inArray(vehRiskId, CodeArray) < 0) {
                    $scope.riskdtls_grid.addRowData("getRowData", rowData);
                    u.hide_confirm();
                   
                }
                else if (cellValue == vehRiskId) {
                    //alert("code exits");
                    u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + cellValue);
                    u.hide_confirm();
                }
                
            });
        });


        $("#btn_remove_veh_risk").on('click', function () {

            if (u.grid_empty($scope.riskdtls_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.riskdtls_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CLM_RISK_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CLM_RISK_VEH_NO');

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
                if (recordStatus == "A") {

                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");

                } 

            });

        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#clmEstimateForm")) {
                return u.growl_warning("Please fill the fields that are marked red")
            }

            if (u.grid_empty($scope.estDtls_grid)) {
                return u.growl_warning("Please enter Estimation Type")
            }

            if (u.grid_empty($scope.riskdtls_grid)) {
                return u.growl_warning("Please Select Risk")
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#clmEstimateForm");
                productData.CLM_TIME_BRD = ($("#CLM_TIME_BRD").is(':checked')) ? 'Y' : 'N';
                productData.CLM_WART_BRCH = ($("#CLM_WART_BRCH").is(':checked')) ? 'Y' : 'N';
                productData.CLM_RPDT = ($("#CLM_RPDT").is(':checked')) ? 'Y' : 'N';
                productData.CLM_CAT = ($("#CLM_CAT").is(':checked')) ? 'Y' : 'N';
                if (!$scope.searched) productData.CLM_STATUS = "U";

                productData.CLM_EST_RISK_DTLS = u.get_grid_data($scope.riskdtls_grid);

                productData.CLM_EST_DTLS = u.get_grid_data($scope.estDtls_grid);
               
                var CLM_EST_EXPENSE = u.get_grid_data($scope.clmExpense_grid);

                for (var i in productData.CLM_EST_DTLS) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = productData.CLM_EST_DTLS[i]["CLM_EST_TYPE"];

                    productData.CLM_EST_DTLS[i]["CLM_EST_EXPENSE"] = [];

                    for (var y in CLM_EST_EXPENSE) {
                        //find covers which have the same the same risk sys_id
                        if (CLM_EST_EXPENSE[y]["CLM_EXP_CLM_EST_TYPE"] === id) {
                            productData.CLM_EST_DTLS[i]["CLM_EST_EXPENSE"].push(CLM_EST_EXPENSE[y]);

                        }
                    }
                }

                console.log(productData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_estimation(productData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.riskdtls_grid, "CLM_RISK_STATUS");

                            u.update_grid_status($scope.estDtls_grid, "CLM_EST_STATUS");

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

            })
        });


        var message = "";
        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Claim?", function () {
                if ($("input[name='CLM_SYS_ID']").val().length <= 0) {
                    //$scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var claim_data = u.parse_form("#clmEstimateForm");
                        claim_data.CLM_STATUS = "D";
                        s.save_estimation(claim_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Claim Estimation Successfully Deleted");
                                    reset_form();
                                } else {
                                    u.growl_error("Error deleting Policy")
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Claim Estimation at the moment please try again later")
                            })
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish")
                    }
                }

            })

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#clmEstimateForm");
                u.form_reset("#clmEstDtlsForm");
                u.form_reset("#clmExpenseForm");
                u.clear_grid_data($scope.estDtls_grid);
                u.clear_grid_data($scope.riskdtls_grid);
                u.clear_grid_data($scope.clmExpense_grid);
                u.clear_grid_data($scope.vehrisk_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared")
            });
        });

        function reset_form() {
            u.form_reset("#productForm");
            u.form_reset("#coverForm");
            u.form_reset("#clausesForm");
            u.form_reset("#discloadForm");
            $scope.cover_grid.jqGrid('clearGridData');
            $scope.clauses_grid.jqGrid('clearGridData');
            $scope.discload_grid.jqGrid('clearGridData');
        }


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
            u.excel_export($scope.estDtls_grid, ["ID"], "Class_Business_List_Excel");
        });


        /*-------------------------------------
         * setting datepicker for date fields
         *------------------------------------*/
        u.set_datepicker("input[name='CLM_LOSS_DATE']");
        u.set_datepicker("input[name='CLM_DISC_DATE']");
        u.set_datepicker("input[name='CLM_REP_DATE']");
        u.set_datepicker("input[name='CLM_TXN_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");

        /*---------------------------
         *  Search
         *-------------------------*/
        
       /*-----------------
       * search grid
       *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Claim Search Results",
            ["ID", "Claim No", "Status", "index"],
            [
                { name: "CLM_N0", index: "CLM_N0", hidden: true },
                { name: "CLM_N0", index: "CLM_N0" },
                { name: "CLM_STATUS", index: "CLM_STATUS" },
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
        $("#btnQueryClaim").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_estimation(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            u.clear_grid_data($scope.search_grid);
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                //u.clear_grid_data($scope.search_grid);
                                result[i].index = i;
                                $scope.search_grid.addRowData(result[i].index, result[i]);
                            }
                            $("#mySearchResultModal").modal();
                        } else {

                            $scope.search_fill(result[0]);
                        }
                    } else {
                        u.growl_info("Claim No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    })
            } else {
                u.growl_info("Please check Motor Tariff No and try again!");
            }
        });

        $scope.search_fill = function (product) {

            $scope.riskdtls_grid.jqGrid("clearGridData");
            $scope.estDtls_grid.jqGrid("clearGridData");
            $scope.clmExpense_grid.jqGrid("clearGridData");

            u.fill_form(product, "#clmEstimateForm");

            //populating child entities
            u.clear_grid_data($scope.riskdtls_grid);
            for (var i in product.CLM_EST_RISK_DTLS) {
                $scope.riskdtls_grid.addRowData(product.CLM_EST_RISK_DTLS[i].CLM_RISK_SYS_ID, product.CLM_EST_RISK_DTLS[i]);
            }
            //populating child entities
            u.clear_grid_data($scope.estDtls_grid);
            for (var i in product.CLM_EST_DTLS) {
                $scope.estDtls_grid.addRowData(product.CLM_EST_DTLS[i].CLM_EST_SYS_ID, product.CLM_EST_DTLS[i]);

                               // u.clear_grid_data($scope.Covers_grid);
                for (var X in product.CLM_EST_DTLS[i].CLM_EST_EXPENSE) {
                    $scope.clmExpense_grid.addRowData(product.CLM_EST_DTLS[i].CLM_EST_EXPENSE[X].CLM_EXP_SYS_ID, product.CLM_EST_DTLS[i].CLM_EST_EXPENSE[X])
                }
            }

        };


        /*-----------------------------
     * Code validation
     *-----------------------*/
        u.codeVal("form input[name='CLM_EST_SYS_ID']", "check_channel_code");

        u.lovCodeVal("form input[name='CLM_EST_TYPE']", "check_estimation_code", "form input[name='CLM_EST_NAME']");
        u.lovCodeVal("form input[name='CLM_CAT_EVNT_CODE']", "check_cat_code", "form input[name='CLM_CAT_NAME']");
        u.lovCodeVal("form input[name='CLM_LOSS_CODE']", "check_loss_code", "form input[name='CLM_CAUSE_NAME']");
        u.lovCodeVal("form input[name='CLM_EXP_CODE']", "check_loss_code", "form input[name='CLM_EXP_NAME']");
        u.lovCodeVal("form input[name='CLM_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");

        document.getElementById('CLM_CAT').onchange = function () {
            document.getElementById('CLM_CAT_EVNT_CODE').disabled = !this.checked;
            document.getElementById('CLM_CAT_NAME').disabled = !this.checked;
        };
        
        function getCust() {
            u.lovCodeVal("form input[name='CLM_CLT']", "check_cust_code", "form input[name='CLM_CLT_NAME']");
        }

        

    });

})(window.$, window.service, window.utility, {})