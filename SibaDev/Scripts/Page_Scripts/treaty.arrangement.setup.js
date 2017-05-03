(function ($, s, u, $scope) {
    $(function () {

        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ["Treaty ID", "Reference ID", "Risk ID", "Policy NO", "Endorsement No", "Class", "Sub Class", "Polh No.", "Insurace Source", "UW Year",
               "Total SI FC", "Total SI BC", "Total Premium FC", "Total Premium BC", "Account SI FC", "Account SI BC",
                "Adjust YN", "EML Percentage", "RI Account YN", "Start Date", "End Date", "Status"],
            [
                { name: "TTH_SYS_ID", index: "TTH_SYS_ID", width: 150 },
                { name: "TTH_REF_ID", index: "TTH_REF_ID", width: 150 },
                { name: "TTH_RISK_SYS_ID", index: "TTH_RISK_SYS_ID", width: 150 },
                { name: "TTH_POLH_SYS_ID", index: "TTH_POLH_SYS_ID", width: 150 },
                { name: "TTH_POLH_END_NO", index: "TTH_POLH_END_NO", width: 150 },

                { name: "TTH_CLASS_CODE", index: "TTH_CLASS_CODE", width: 150 },
                { name: "TTH_SC_CODE", index: "TTH_SC_CODE", width: 150 },
                { name: "TTH_POLNUM", index: "TTH_POLNUM", width: 150 },
                { name: "TTH_INS_SRCE", index: "TTH_INS_SRCE", width: 150 },

                { name: "TTH_UW_YEAR", index: "TTH_UW_YEAR", width: 150 },
                
                { name: "TTH_TOTAL_SI_FC", index: "TTH_TOTAL_SI_FC", width: 150 },
                { name: "TTH_TOTAL_SI_BC", index: "TTH_TOTAL_SI_BC", width: 150 },
                { name: "TTH_TOTAL_PREM_FC", index: "TTH_TOTAL_PREM_FC", width: 150 },
                { name: "TTH_TOTAL_PREM_BC", index: "TTH_TOTAL_PREM_BC", width: 150 },

                { name: "TTH_ACC_SI_FC", index: "TTH_ACC_SI_FC", width: 150 },
                { name: "TTH_ACC_SI_BC", index: "TTH_ACC_SI_BC", width: 150 },

                { name: "TTH_ADJ_YN", index: "TTH_ADJ_YN", width: 150 },
                { name: "TTH_EML_PERC", index: "TTH_EML_PERC", width: 150 },
                { name: "TTH_RI_ACC_YN", index: "TTH_RI_ACC_YN", width: 150 },

                { name: "TTH_FROM_DATE", index: "TTH_FROM_DATE", width: 150 },
                { name: "TTH_TO_DATE", index: "TTH_TO_DATE", width: 150 },
                { name: "TTH_STATUS", index: "TTH_STATUS", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.reinsurance_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='TTH_SYS_ID']").data("update", true);
                u.fill_form({
                    TTH_SYS_ID: grid.jqGrid('getCell', sel_id, 'TTH_SYS_ID'),
                    TTH_TOTAL_SI_FC: grid.jqGrid('getCell', sel_id, 'TTH_TOTAL_SI_FC'),
                    TTH_TOTAL_SI_BC: grid.jqGrid('getCell', sel_id, 'TTH_TOTAL_SI_BC'),
                    TTH_TOTAL_PREM_FC: grid.jqGrid('getCell', sel_id, 'TTH_TOTAL_PREM_FC'),
                    TTH_TOTAL_PREM_BC: grid.jqGrid('getCell', sel_id, 'TTH_TOTAL_PREM_BC'),
                    TTH_STATUS: grid.jqGrid('getCell', sel_id, 'TTH_STATUS'),

                }, "#risummaryForm");
            }),

 
        // FAC Apportionment
        $scope.treatyAppor_grid = u.default_grid("#gridTreatyAppor", "#gridTreatyApporPager", "Treaty Apportionment",
            ["Treaty Code", "Treaty Type", "UW Year", "Limit FC", "Limit BC", " Sum Insured FC",
            " Sum Insured BC", "Premium FC.", "Premium BC", "Allocation Perc", "Commission FC", "Commission FC", "slip No.", "Seq No.", "Close Flag",
            "ID", "Header ID", "Polh ID", "Polh End No.", "Created By", "Created Date", "Status"],
            [
                { name: "TTA_TTY_CODE", index: "TTA_TTY_CODE", hidden: false, width: 150 },
                { name: "TTA_TTY_TYPE", index: "TTA_TTY_TYPE", width: 150 },
                { name: "TTA_UW_YEAR", index: "TTA_UW_YEAR", width: 150 },
               
                  { name: "TTA_TTY_LIMIT_FC", index: "TTA_TTY_LIMIT_FC", width: 150 },
                { name: "TTA_TTY_LIMIT_BC", index: "TTA_TTY_LIMIT_BC", width: 150 },
                { name: "TTA_TTY_SI_FC", index: "TTA_TTY_SI_FC", width: 150 },
                { name: "TTA_TTY_SI_BC", index: "TTA_TTY_SI_BC", width: 150 },
                { name: "TTA_TTY_PREM_FC", index: "TTA_TTY_PREM_FC", width: 150 },
                { name: "TTA_TTY_PREM_BC", index: "TTA_TTY_PREM_BC", width: 150 },
             
                { name: "TTA_ALLOC_PERC", index: "TTA_ALLOC_PERC", width: 150 },
                   { name: "TTA_TTY_COMM_FC", index: "TTA_TTY_COMM_FC", width: 150 },
                { name: "TTA_TTY_COMM_BC", index: "TTA_TTY_COMM_BC", width: 150 },
                { name: "TTA_SLIPNO", index: "TTA_SLIPNO", hidden: false, width: 150 },
                { name: "TTA_SEQ_NO", index: "TTA_SEQ_NO", width: 150 },

                { name: "TTA_CLOSE_FLAG", index: "TTA_CLOSE_FLAG", width: 150 },
              
             

                { name: "TTA_SYS_ID", index: "TTA_SYS_ID", width: 150 },
                { name: "TTA_TTH_SYS_ID", index: "TTA_TTH_SYS_ID", width: 150 },
                { name: "TTA_POLH_SYS_ID", index: "TTA_POLH_SYS_ID", width: 150 },
                { name: "TTA_POLH_END_NO", index: "TTA_POLH_END_NO", width: 150 },

                { name: "TTA_CRTE_BY", index: "TTA_CRTE_BY", width: 150 },
                { name: "TTA_CRTE_DATE", index: "TTA_CRTE_DATE", width: 150 },
                { name: "TTA_STATUS", index: "TTA_STATUS", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
                function (selId) {
                    var grid = $scope.treatyAppor_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='TTA_SYS_ID']").data("update", true);
                    u.fill_form({
                        TTA_SYS_ID: grid.jqGrid('getCell', sel_id, 'TTA_SYS_ID'),
                        TTA_TTY_LIMIT_FC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_LIMIT_FC'),
                        TTA_TTY_LIMIT_BC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_LIMIT_BC'),
                        TTA_TTY_SI_FC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_SI_FC'),
                        TTA_TTY_SI_BC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_SI_BC'),
                        TTA_TTY_PREM_FC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_PREM_FC'),
                        TTA_TTY_PREM_BC: grid.jqGrid('getCell', sel_id, 'TTA_TTY_PREM_BC'),
                        TTA_ALLOC_PERC: grid.jqGrid('getCell', sel_id, 'TTA_ALLOC_PERC'),
                    }, "#treatyApporForm");
                }),

        // FAC In Premium Summary
        $scope.share_grid = u.default_grid("#gridRICompaniesShare", "#gridRICompaniesSharePager", "RI Companies Share",
            ["ID", "Apportionment ID", "Seq No.", "Treaty Type", "Treaty RI Companies", "Share Perc", "Share SI FC", "Share SI BC",
                "Share Premium FC", "Share Premium FC", "Commission Perc", "Commission FC", "Commission BC", "Tax Perc", "Tax FC", "Tax BC", "Created By", "Created Date", "Statuse"],
            [
                { name: "TTS_SYS_ID", index: "TTS_SYS_ID", width: 150 },
                { name: "TTS_TTA_SYS_ID", index: "TTS_TTA_SYS_ID", width: 150 },
                { name: "TTS_TTA_SEQ_NO", index: "TTS_TTA_SEQ_NO", width: 150 },
                { name: "TTS_TTY_TYPE", index: "TTS_TTY_TYPE", width: 150 },
                { name: "TTS_RI_COMP", index: "TTS_RI_COMP", width: 150 },
                { name: "TTS_SHARE_PERC", index: "TTS_SHARE_PERC", width: 150 },
                { name: "TTS_SHARE_SI_FC", index: "TTS_SHARE_SI_FC", width: 150 },
                { name: "TTS_SHARE_SI_BC", index: "TTS_SHARE_SI_BC", width: 150 },
                { name: "TTS_SHARE_PREM_FC", index: "TTS_SHARE_PREM_FC", width: 150 },
                { name: "TTS_SHARE_PREM_BC", index: "TTS_SHARE_PREM_BC", width: 150 },

                { name: "TTS_RI_COMM_PERC", index: "TTS_RI_COMM_PERC", width: 150 },
                { name: "TTS_RI_COMM_FC", index: "TTS_RI_COMM_FC", width: 150 },
                { name: "TTS_RI_COMM_BC", index: "TTS_RI_COMM_BC", width: 150 },
                { name: "TTS_RI_TAX_PERC", index: "TTS_RI_TAX_PERC", width: 150 },
                { name: "TTS_TAX_FC", index: "TTS_TAX_FC", width: 150 },
                { name: "TTS_TAX_BC", index: "TTS_TAX_BC", width: 150 },
                { name: "TTS_CRTE_BY", index: "TTS_CRTE_BY", width: 150 },
                { name: "TTS_CRTE_DATE", index: "TTS_CRTE_DATE", width: 150 },
                { name: "TTS_STATUS", index: "TTS_STATUS", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            });

        $("#btnTreatyAppor").click(function () {


            //obthain the id of the selected FAC details
            var grid = $scope.reinsurance_grid;
            var selRow = $scope.selectedFac = grid.jqGrid("getGridParam", "selrow");

            if (selRow) {
                //obtain the allocations that have been assigned to selected fac head details
                var apportionmentString = grid.jqGrid("getCell", selRow, "INS_RI_TTY_ALLOCATION") || "[]";

                console.log(apportionmentString)

                var apportiomentJson = [];
                if (apportionmentString.length <= 0) {
                }
                apportiomentJson = JSON.parse(apportionmentString);
                console.log(apportiomentJson);

                for (var i in apportiomentJson) {
                    $scope.treatyAppor_grid.addRowData(apportiomentJson[i].ID, apportiomentJson[i]);
                }

                $scope.hideShowApport();
                $("#treatyApportionmentModal").modal();
            }
            else {
                u.growl_warning("No Treaty Detail selected, Please check and try again");
            }    

        });

        $("#btnTreatyShare").click(function () {

            $scope.hideShowShare();
            $("#treatyShareModal").modal();

        });


       /*
      Hide or show Treaty Apportionment (to filter out the covers for particular risk
      */
        $scope.hideShowApport = function () {

            //get the selected Treaty Summary ID
            var ttygrid = $('#gridRISummary');
            var selId = ttygrid.jqGrid("getGridParam", "selrow");
            var ttyRiskId = ttygrid.jqGrid("getCell", selId, "TTH_SYS_ID");

            //get the Treaty Apportionment
            var apporgrid = $('#gridTreatyAppor');
            var rowIds = apporgrid.jqGrid("getDataIDs");

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getApporId = apporgrid.jqGrid("getCell", currRow, "TTA_TTH_SYS_ID");

                if (ttyRiskId != getApporId) {

                    $("#" + currRow, '#gridTreatyAppor').hide();

                }
                else if (ttyRiskId == getApporId) {
 
                    $("#" + currRow, '#gridTreatyAppor').show();
                    
                }
            }
        };


        /*
        Hide or show Treaty Share (to filter out the covers for particular risk
        */
        $scope.hideShowShare = function () {

            //get the selected Treaty Summary ID
            var apporgrid = $('#gridTreatyAppor');
            var selId = apporgrid.jqGrid("getGridParam", "selrow");
            var getApporId = apporgrid.jqGrid("getCell", selId, "TTA_SYS_ID");

            //get the Treaty Apportionment
            var sharegrid = $('#gridRICompaniesShare');
            var rowIds = sharegrid.jqGrid("getDataIDs");

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getShareId = sharegrid.jqGrid("getCell", currRow, "TTS_TTA_SYS_ID");

                if (getApporId != getShareId) {

                    $("#" + currRow, '#gridRICompaniesShare').hide();

                }
                else if (getApporId == getShareId) {

                    $("#" + currRow, '#gridRICompaniesShare').show();

                }
            }
        };


        $scope.UpdateAppor = function () {

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.treatyAppor_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'TTA_SYS_ID');

                if (Code == $('#TTA_SYS_ID').val()) {

                    grid.jqGrid('setCell', row_id, 'TTA_SYS_ID', $('#TTA_SYS_ID').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_LIMIT_FC', $('#TTA_TTY_LIMIT_FC').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_LIMIT_BC', $('#TTA_TTY_LIMIT_BC').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_SI_FC', $('#TTA_TTY_SI_FC').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_SI_BC', $('#TTA_TTY_SI_BC').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_PREM_FC', $('#TTA_TTY_PREM_FC').val());
                    grid.jqGrid('setCell', row_id, 'TTA_TTY_PREM_BC', $('#TTA_TTY_PREM_BC').val());
                    u.hide_confirm();
                    u.growl_success("Apportionment successfully updated");
                    $("form input[name='TTA_SYS_ID']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });
        };

        $("#btn_update_appor").click(function () {

            $scope.UpdateAppor();

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

        
        /*-----------------
        * search grid
        *----------------*/

        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "RI Treaty Arrangement Search Results",
        ["ID", "Polh No.", "Status", "index"],
        [
            { name: "TTH_POLH_SYS_ID", index: "TTH_POLH_SYS_ID", hidden: true },
            { name: "TTH_POLH_SYS_ID", index: "TTH_POLH_SYS_ID" },
            { name: "TTH_STATUS", index: "TTH_STATUS" },
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
         * Search 
         *-------------------------*/

        $("#btnQueryPolh").click(function () {
            var query = $("#txtSearch").val();
            if (!u.field_empty("#txtSearch")) {
                s.search_ttyHead(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    $scope.search_fill(result);
                })
            } else {
                u.growl_info("Please check Treaty No and try again!");
            }
        });

        $scope.search_fill = function (product) {

            $scope.reinsurance_grid.jqGrid("clearGridData");
            $scope.treatyAppor_grid.jqGrid("clearGridData");
            $scope.share_grid.jqGrid("clearGridData");
            
            //u.fill_form(product, "#risummaryForm");

            u.clear_grid_data($scope.reinsurance_grid);
            for (var i in product) {
                $scope.reinsurance_grid.addRowData(product[i].TTH_SYS_ID, product[i]);

                // u.clear_grid_data($scope.Covers_grid);
                for (var X in product[i].INS_RI_TTY_ALLOCATION) {
                    $scope.treatyAppor_grid.addRowData(product[i].INS_RI_TTY_ALLOCATION[X].TTA_SYS_ID, product[i].INS_RI_TTY_ALLOCATION[X])

                    for (var y in product[i].INS_RI_TTY_ALLOCATION[X].INS_RI_TTY_SHARE) {
                        $scope.share_grid.addRowData(product[i].INS_RI_TTY_ALLOCATION[X].INS_RI_TTY_SHARE[y].TTS_SYS_ID, product[i].INS_RI_TTY_ALLOCATION[X].INS_RI_TTY_SHARE[y])
                    }
                }
              
            }

        };


        /*-----------------------------
 * Save/Update Data
 *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (u.grid_empty($scope.reinsurance_grid)) {
                return u.growl_warning("Please enter RI Treaty Head")
            }

            if (u.grid_empty($scope.treatyAppor_grid)) {
                return u.growl_warning("Please enter RI Treaty Apportionment")
            }

            if (u.grid_empty($scope.share_grid)) {
                return u.growl_warning("Please enter RI Treaty Share Companies")
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                //var productData = u.get_grid_data($scope.reinsurance_grid);
                var productData = u.parse_form("#risummaryForm");
               
                if (!$scope.searched) productData.TTH_STATUS = "U";

                productData.INS_RI_TTY_ALLOCATION = u.get_grid_data($scope.treatyAppor_grid);

                var INS_RI_TTY_SHARE = u.get_grid_data($scope.share_grid);

                for (var i in productData.INS_RI_TTY_ALLOCATION) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = productData.INS_RI_TTY_ALLOCATION[i]["TTA_SYS_ID"];

                    productData.INS_RI_TTY_ALLOCATION[i]["INS_RI_TTY_SHARE"] = [];

                    for (var y in INS_RI_TTY_SHARE) {
                        //find covers which have the same the same risk sys_id
                        if (INS_RI_TTY_SHARE[y]["TTS_TTA_SYS_ID"] === id) {
                            productData.INS_RI_TTY_ALLOCATION[i]["INS_RI_TTY_SHARE"].push(INS_RI_TTY_SHARE[y]);

                        }
                    }
                }

                console.log(productData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_treaty(productData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.treatyAppor_grid, "TTA_STATUS");

                            u.update_grid_status($scope.share_grid, "TTS_STATUS");
                         
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


    });

})(window.$, window.service, window.utility, {});