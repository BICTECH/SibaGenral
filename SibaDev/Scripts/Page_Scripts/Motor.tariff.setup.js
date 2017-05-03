(function ($, s, u, $scope) {
    $(function () {

        $scope.MotorRisk_grid = u.default_grid("#grdMotorRisk", "#grdMotorRiskPager", "Motor Risk List",
           ['ID', 'Risk Code', 'Name', 'Product', 'Created By', 'Created Date', 'Modified By', 'Modified Date', 'Status'],
            [
                { name: 'MPR_SYS_ID', hidden: false, id: true, index: 'MPR_SYS_ID' },
                { name: 'MPR_RISK_CODE', hidden: false, index: 'MPR_RISK_CODE' },
                { name: 'MPR_NAME', index: 'MPR_NAME' },
                { name: 'MPR_MTP_PRD_CODE', index: 'MPR_MTP_PRD_CODE' },
                { name: 'MPR_CRTE_BY', index: 'MPR_CRTE_BY' },
                { name: 'MPR_CRTE_DATE', index: 'MPR_CRTE_DATE' },
                { name: 'MPR_MOD_BY', index: 'MPR_MOD_BY' },
                { name: 'MPR_MOD_DATE', index: 'MPR_MOD_DATE' },
                { name: 'MPR_STATUS', index: 'MPR_STATUS' },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.MotorRisk_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='MPR_SYS_ID']").data("update", true);
                u.fill_form({
                    MPR_RISK_CODE: grid.jqGrid('getCell', sel_id, 'MPR_RISK_CODE'),
                    MPR_NAME: grid.jqGrid('getCell', sel_id, 'MPR_NAME'),
                    MPR_MTP_PRD_CODE: grid.jqGrid('getCell', sel_id, 'MPR_MTP_PRD_CODE'),
                    MPR_SYS_ID: grid.jqGrid('getCell', sel_id, 'MPR_SYS_ID'),
                }, "#motorriskForm");
                u.fill_form({
                    MRC_MPR_SYS_ID: grid.jqGrid('getCell', sel_id, 'MPR_SYS_ID'),
                }, "#coverForm");
            }),

            $scope.saving = false;


        $scope.Covers_grid = u.default_grid("#gridCovers", "#gridCoversPager", "Motor Risk List",
           ['Cover Code', 'Motor Risk ID', 'Default SI', 'Default Rate', 'NCD Applicable', 'Min Rate', 'Max Rate',
               'Default Y/N', 'Default Premium', 'Min Seats', 'Seat load', 'Min Age', 'Age Load', 'Excess load', 'Created by', 'Created Date', 'Status','ID'],
            [
                { name: 'MRC_CVR_CODE', hidden: false, id: true, index: 'MRC_CVR_CODE' },
                { name: 'MRC_MPR_SYS_ID', index: 'MRC_MPR_SYS_ID' },
                { name: 'MRC_DFT_SI', index: 'MRC_DFT_SI' },
                { name: 'MRC_DFT_RATE', index: 'MRC_DFT_RATE' },
                 { name: 'MRC_NCD_YN', index: 'MRC_NCD_YN' },
                { name: 'MRC_MIN_RATE', index: 'MRC_MIN_RATE' },
                { name: 'MRC_MAX_RATE', index: 'MRC_MAX_RATE' },
                { name: 'MRC_DFT_YN', index: 'MRC_DFT_YN' },
                { name: 'MRC_DFT_PREM', index: 'MRC_DFT_PREM' },
                { name: 'MRC_MIN_SEATS', index: 'MRC_MIN_SEATS' },
                { name: 'MRC_SEAT_LOAD', index: 'MRC_SEAT_LOAD' },
                { name: 'MRC_MIN_AGE', index: 'MRC_MIN_AGE' },
                { name: 'MRC_AGE_LOAD', index: 'MRC_AGE_LOAD' },
                { name: 'MRC_EXCESS_LOAD', index: 'MRC_EXCESS_LOAD' },
                { name: 'MRC_CRTE_BY', index: 'MRC_CRTE_BY' },
                { name: 'MRC_CRTE_DATE', index: 'MRC_CRTE_DATE' },
                { name: 'MRC_STATUS', index: 'MRC_STATUS' },
                { name: 'MRC_RK_CVR_SYS_ID', index: 'MRC_RK_CVR_SYS_ID' },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.Covers_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='MRC_CVR_CODE']").data("update", true);
                u.fill_form({
                    MRC_CVR_CODE: grid.jqGrid('getCell', sel_id, 'MRC_CVR_CODE'),
                    MRC_DFT_SI: grid.jqGrid('getCell', sel_id, 'MRC_DFT_SI'),
                    MRC_DFT_RATE: grid.jqGrid('getCell', sel_id, 'MRC_DFT_RATE'),
                    MRC_NCD_YN: grid.jqGrid('getCell', sel_id, 'MRC_NCD_YN'),
                    MRC_MIN_RATE: grid.jqGrid('getCell', sel_id, 'MRC_MIN_RATE'),
                    MRC_MAX_RATE: grid.jqGrid('getCell', sel_id, 'MRC_MAX_RATE'),
                    MRC_DFT_PREM: grid.jqGrid('getCell', sel_id, 'MRC_DFT_PREM'),
                    MRC_DFT_YN: grid.jqGrid('getCell', sel_id, 'MRC_DFT_YN'),
                    MRC_MIN_SEATS: grid.jqGrid('getCell', sel_id, 'MRC_MIN_SEATS'),
                    MRC_SEAT_LOAD: grid.jqGrid('getCell', sel_id, 'MRC_SEAT_LOAD'),
                    MRC_MIN_AGE: grid.jqGrid('getCell', sel_id, 'MRC_MIN_AGE'),
                    MRC_AGE_LOAD: grid.jqGrid('getCell', sel_id, 'MRC_AGE_LOAD'),
                    MRC_EXCESS_LOAD: grid.jqGrid('getCell', sel_id, 'MRC_EXCESS_LOAD'),
                    MRC_STATUS: grid.jqGrid('getCell', sel_id, 'MRC_STATUS')
                }, "#coverForm");
            }),


        /*--------------------------------------------------
           * call add function to add records to  MotorRisk_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.form_validation("#motorriskForm")) {

                $("#MPR_SYS_ID").val("");

                if ($("#MPR_SYS_ID").val() == "") {
                    RetnSequenceNo("MOTOR_TARIFF_SEQ", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#MPR_SYS_ID").val(data);
                    }               
                }
              
                u.modal_confirmation("Are you sure you want to add Product & Motor risk to the grid?", function () {

                    var rowIds = $scope.MotorRisk_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.MotorRisk_grid.jqGrid('getCell', currRow, 'MPR_RISK_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#MPR_RISK_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#motorriskForm");

                        FormData.MPR_STATUS = "U";
                        FormData.MPR_CRTE_BY = "Admin";
                        FormData.MPR_CRTE_DATE = u.get_date();
                        $scope.MotorRisk_grid.addRowData(FormData.MPR_RISK_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Motor Risk successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
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

        $("#btn_remove_motor_risk").on('click', function () {

            if (u.grid_empty($scope.MotorRisk_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.MotorRisk_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'MPR_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'MPR_RISK_CODE');

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

                    grid.jqGrid('setCell', row_id, 'MPR_STATUS', 'D');
                    $('#' + row_id, '#grdMotorRisk').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdMotorRisk').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'MPR_STATUS', 'A');
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

            if (u.grid_empty($scope.MotorRisk_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.MotorRisk_grid;

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

            if (!u.field_empty("#MTP_PRD_CODE")) {
                $("#productRiskModal").modal();
                $("#MPR_MTP_PRD_CODE").val($("#MTP_PRD_CODE").val());
            }
            else {
                u.modal_warning("Motor Product is not selected!");
            }
        });

        /*-----------------------------
      * Product Risk Modal
      *---------------------------*/
        //
        $("#btn_risk_cover").on('click', function () {

            var grid = $scope.MotorRisk_grid;
            var selId = grid.jqGrid("getGridParam", "selrow");
            var vehRiskId = grid.jqGrid("getCell", selId, "MPR_SYS_ID");

            var motorriks = $("#MPR_SYS_ID").val();

            if (vehRiskId == motorriks  ) {

                $("#riskCoversModal").modal();
               
                //Hide covers not related to selected risk
                $scope.hideShowCovers();
            }
            else {

                u.growl_warning("No Risk selected, Please check and try again");
            
            };
        });

        $("#riskCoverOk").click(function () {

        }); //$("#riskCoverCancel, .close").click(function () {
        //    u.clear_grid_data($scope.Covers_grid)
        //})


                /*
        //Hide or show Covers in the Risk Covers (to filter out the covers for particular risk
        */       
        $scope.hideShowCovers = function () {


            //get the selected Risk ID
            var vehgrid = $scope.MotorRisk_grid;
            var selId = vehgrid.jqGrid("getGridParam", "selrow");
            var vehRiskId = vehgrid.jqGrid("getCell", selId, "MPR_SYS_ID");

            //get the Risk Cover data
            var covgrid = $scope.Covers_grid;
            var rowIds = covgrid.jqGrid("getDataIDs");

            bt
            // iterate through the risk cover rows to hide or show covers 

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getRiskCovId = covgrid.jqGrid("getCell", currRow, "MRC_MPR_SYS_ID");

                if (getRiskCovId != vehRiskId) {

                    //hide if covers are not for the selected risk 
                    $("#" + currRow, '#gridCovers').hide();

                }
                else if (getRiskCovId == vehRiskId) {

                    //Show if covers are for the selected risk 
                    $("#" + currRow, '#gridCovers').show();

                }
            }
        };



        /*--------------------------------------------------
          * call add function to add records to  Covers_grid
          *------------------------------------------------*/
        //
        $("#btn_add_cover").on('click', function () {

            if (u.field_empty("input[name='MRC_CVR_CODE']")) return u.growl_error

           ("The Form code field is empty, please fill and to add to the grid");
         
            u.modal_confirmation("Are you sure you want to add Motor Risk Cover to the grid?", function () {

                var covgrid = $scope.Covers_grid;
                var rowIds = covgrid.jqGrid("getDataIDs");

                //var rowIds = $scope.Covers_grid.jqGrid('getDataIDs');

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
                    var covValue = covgrid.jqGrid('getCell', currRow, 'MRC_CVR_CODE');

                    var riskValue = covgrid.jqGrid('getCell', currRow, 'MRC_MPR_SYS_ID');

                    var cellValue = covValue + riskValue;

                    Code.push(cellValue);

                }
                var CoverCode = $("#MRC_CVR_CODE").val();
                
                var RiskCode = $("#MPR_SYS_ID").val();

                var verifyRiskCover = CoverCode + RiskCode;

                //alert(verifyRiskCover);
                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
              
                if ($.inArray(verifyRiskCover, Code) < 0)
                {

                    var FormData = u.parse_form("#coverForm");
                    FormData.MRC_STATUS = "U";
                   
                    FormData.MRC_NCD_YN = ($("#MRC_NCD_YN").is(':checked')) ? 'Y' : 'N';
                    FormData.MRC_DFT_YN = ($("#MRC_DFT_YN").is(':checked')) ? 'Y' : 'N';
                    FormData.MRC_CRTE_BY = "Admin";
                    FormData.MRC_CRTE_DATE = u.get_date();
                    $scope.Covers_grid.addRowData(FormData.ID, FormData);
                    u.hide_confirm();
                    u.growl_success("Motor Risk Cover successfully added to grid");
                }

                else {
                    u.hide_confirm();
                    u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                }

            });
        });


        /*----------------------------------------------------
      * Remove record or Mark for deletion from Cover Grid
      *---------------------------------------------------*/

        $("#btn_remove_cover").on('click', function () {

            if (u.grid_empty($scope.Covers_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.Covers_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'MRC_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'MRC_RK_CVR_SYS_ID');

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

                    grid.jqGrid('setCell', row_id, 'MRC_STATUS', 'D');
                    $('#' + row_id, '#gridCovers').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#gridCovers').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'MRC_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
       * Edit/Update Function
       *------------------------------*/
        //
        $("#btn_update_cover").on('click', function () {

            if (u.grid_empty($scope.Covers_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.Covers_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'MRC_MPR_SYS_ID');

                if (Code === $('#MRC_MPR_SYS_ID').val()) {
                    
                    grid.jqGrid('setCell', row_id, 'MRC_CVR_CODE', $('#MRC_CVR_CODE').val());
                    grid.jqGrid('setCell', row_id, 'MRC_DFT_YN', ($("#MRC_DFT_YN").is(':checked')) ? 'Y' : 'N');
                    grid.jqGrid('setCell', row_id, 'MRC_DFT_RATE', $('#MRC_DFT_RATE').val());
                    grid.jqGrid('setCell', row_id, 'MRC_NCD_YN', ($("#MRC_NCD_YN").is(':checked')) ? 'Y' : 'N');
                    grid.jqGrid('setCell', row_id, 'MRC_MIN_RATE', $('#MRC_MIN_RATE').val());
                    grid.jqGrid('setCell', row_id, 'MRC_MAX_RATE', $('#MRC_MAX_RATE').val());
                    grid.jqGrid('setCell', row_id, 'MRC_DFT_PREM', $('#MRC_DFT_PREM').val());
                    //grid.jqGrid('setCell', row_id, 'MRC_DFT_YN', $('#MRC_DFT_YN').val());
                    grid.jqGrid('setCell', row_id, 'MRC_MIN_SEATS', $('#MRC_MIN_SEATS').val());
                    grid.jqGrid('setCell', row_id, 'MRC_SEAT_LOAD', $('#MRC_SEAT_LOAD').val());
                    grid.jqGrid('setCell', row_id, 'MRC_MIN_AGE', $('#MRC_MIN_AGE').val());
                    grid.jqGrid('setCell', row_id, 'MRC_AGE_LOAD', $('#MRC_AGE_LOAD').val());
                    grid.jqGrid('setCell', row_id, 'MRC_EXCESS_LOAD', $('#MRC_EXCESS_LOAD').val());

                    u.hide_confirm();
                    u.growl_success("Risk Cover successfully updated");
                    $("form input[name='MRC_MPR_SYS_ID']").data("update", false);
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

        $("#btn_Save_Motor").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#premiumtariffForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.MotorRisk_grid)) {
                return u.growl_warning("Please enter Motor Risk");
            }

            if (u.grid_empty($scope.Covers_grid)) {
                return u.growl_warning("Please enter Motor Risk Cover");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#premiumtariffForm");
                if (!$scope.searched) productData.MTP_STATUS = "U";

                productData.MS_MOTOR_PROD_RISK = u.get_grid_data($scope.MotorRisk_grid);

                var MS_MOTOR_RISK_COVER = u.get_grid_data($scope.Covers_grid);

                for (var i in productData.MS_MOTOR_PROD_RISK) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = productData.MS_MOTOR_PROD_RISK[i]["MPR_SYS_ID"];

                    productData.MS_MOTOR_PROD_RISK[i]["MS_MOTOR_RISK_COVER"] = [];

                    for(var y in MS_MOTOR_RISK_COVER) {
                        //find covers which have the same the same risk sys_id
                        if (MS_MOTOR_RISK_COVER[y]["MRC_MPR_SYS_ID"] === id) {
                            productData.MS_MOTOR_PROD_RISK[i]["MS_MOTOR_RISK_COVER"].push(MS_MOTOR_RISK_COVER[y]);
                        }
                    }
                }

                console.log(productData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_motortariff(productData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.MotorRisk_grid, "MPR_STATUS");

                            u.update_grid_status($scope.Covers_grid, "MRC_STATUS");

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

            });
        });

        $("#").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (u.grid_empty($scope.Covers_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            if (u.grid_empty($scope.MotorRisk_grid)) {
                return u.growl_warning("Please add Motor Details");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var motorData = u.parse_form("#premiumtariffForm");
                if (!$scope.searched) motorData.MTP_STATUS = "U";

                motorData.MS_MOTOR_PROD_RISK = u.get_grid_data($scope.MotorRisk_grid);

                motorData.MS_MOTOR_RISK_COVER = u.get_grid_data($scope.Covers_grid);

                console.log(motorData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_motortariff(motorData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.Covers_grid, "MRC_STATUS");

                            u.update_grid_status($scope.MotorRisk_grid, "MPR_STATUS");

                            u.growl_success(responseData.message);

                        } else {
                            u.hide_confirm();
                            u.growl_error(responseData.mesage);
                        }
                    }, function () {
                        u.growl_error("Server Error please try again later.");
                    });
                }

            });
        });


        var message = "";
        /*--------------------------
         * Delete/Update Data
         *------------------------*/


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //

        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#premiumtariffForm");            
                u.clear_grid_data($scope.MotorRisk_grid);
                u.clear_grid_data($scope.Covers_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared");
            });
        });

        function reset() {
            u.form_reset("#premiumtariffForm");
            u.form_reset("#productRiskModal");
            u.form_reset("#coverForm");
            u.clear_grid_data($scope.MotorRisk_grid);
            u.clear_grid_data($scope.Covers_grid);
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
            u.excel_export($scope.MotorRisk_grid, ["ID"], "Discount_Loading_List_Excel");
        });

        /*-----------------
        * search grid
        *----------------*/

            $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["ID", "Motor Product No.", "Status", "index"],
            [
                { name: "MTP_PRD_CODE", index: "MTP_PRD_CODE", hidden: true },
                { name: "MTP_PRD_CODE", index: "MTP_PRD_CODE" },
                { name: "MTP_STATUS", index: "MTP_STATUS" },
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
        $("#btnQueryMotorTariff").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_motortariff(query, function (result) {
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
                        u.growl_info("Motor Tariff No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Motor Tariff No and try again!");
            }
        });


        $scope.search_fill = function (motortariff) {

            $scope.MotorRisk_grid.jqGrid("clearGridData");
            $scope.Covers_grid.jqGrid("clearGridData");
            
            u.fill_form(motortariff, "#premiumtariffForm");

            //populating child entities
            u.clear_grid_data($scope.MotorRisk_grid);
            for (var i in motortariff.MS_MOTOR_PROD_RISK) {
                $scope.MotorRisk_grid.addRowData(motortariff.MS_MOTOR_PROD_RISK[i].ID, motortariff.MS_MOTOR_PROD_RISK[i]);

                //populating child entities
              
                for (var X in motortariff.MS_MOTOR_PROD_RISK[i].MS_MOTOR_RISK_COVER) {


                    $scope.Covers_grid.addRowData(motortariff.MS_MOTOR_PROD_RISK[i].MS_MOTOR_RISK_COVER[X].MRC_RK_CVR_SYS_ID, motortariff.MS_MOTOR_PROD_RISK[i].MS_MOTOR_RISK_COVER[X]);
                }
            }
                
            
        };


        /*--------------------
        * Motor Tariff button
        *------------------*/
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Tariff?", function () {
                if ($("input[name='MTP_PRD_CODE']").val().length <= 0) {
                    //$scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var tariff_data = u.parse_form("#premiumtariffForm");
                        tariff_data.MTP_STATUS = "D";
                        s.save_motortariff(tariff_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Tariff Successfully Deleted");
                                    reset();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Tariiff at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='MTP_PRD_CODE']", "check_tariff_class");
        /*-----------------------------
* Cover LOV code validation
*---------------------------*/
        //u.lovCodeVal("form input[name='MTP_PRD_CODE']", "check_tariff_class", "form input[name='PDT_NAME']");

        /*-----------------------------
 * Product LOV code validation
 *---------------------------*/
        u.lovCodeVal("form input[name='MPR_RISK_CODE']", "check_motor_risk", "form input[name='MPR_NAME']");

        /*-----------------------------
* Motor Risk LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='MRC_CVR_CODE']", "check_cover_code", "form input[name='MRC_CVR_NAME']");

    });

})(window.$, window.service, window.utility, {})