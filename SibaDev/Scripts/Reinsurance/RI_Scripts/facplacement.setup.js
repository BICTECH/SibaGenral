(function ($, s, u, $scope) {
    $(function () {

        /*--------------------------------------------------
        * Grid definition
        *------------------------------------------------*/

        // FAC Summary
        $scope.facplment_grid = u.default_grid("#grdFacPlacement", "#grdFacPlacementPager", "FAC Summary",
            ["ID", "Apportionment ID", "Polh ID", "Polh End No.", "Risk ID", "Risk End No", "UW Year", "Sum Insured FC", "Sum Insured BC", "Premium FC.", "Premium BC", "Allocation Perc",
              "Accumulative SI", "FAC Excess SI FC", "FAC Excess SI BC", "FAC Excess Premium FC", "FAC Excess Premium BC", "FAC Excess Percentage", "Comments", "Slip No.", "Ref ID",
              "Close Flag", "From Date", "To Date", "Region", "Area", "Location", "Comb Loc ID", "Created By", "Created Date", "Status",
             // "TTY ALLOCATION"
            ],
            [ 
                { name: "FAC_SYS_ID", index: "FAC_SYS_ID", hidden: true, width: 150 },
                { name: "FAC_TTA_SYS_ID", index: "FAC_TTA_SYS_ID", width: 150 },
                { name: "FAC_POLH_SYS_ID", index: "FAC_POLH_SYS_ID", width: 150 },
                { name: "FAC_POLH_END_NO", index: "FAC_POLH_END_NO", width: 150 },

                { name: "FAC_RISK_SYS_ID", index: "FAC_RISK_SYS_ID", width: 150 },
                { name: "FAC_RISK_END_NO", index: "FAC_RISK_END_NO", width: 150 },
                { name: "FAC_UWYR", index: "FAC_UWYR", width: 150 },

                { name: "FAC_SI_FC", index: "FAC_SI_FC", width: 150 },
                { name: "FAC_SI_BC", index: "FAC_SI_BC", width: 150 },
                { name: "FAC_PREM_FC", index: "FAC_PREM_FC", width: 150 },
                { name: "FAC_PREM_BC", index: "FAC_PREM_BC", width: 150 },
                { name: "FAC_PERC", index: "FAC_PERC", width: 150 },

                { name: "FAC_ACCUM_SI", index: "FAC_ACCUM_SI", width: 150 },
                { name: "FAC_EXCESS_SI_FC", index: "FAC_EXCESS_SI_FC", width: 150 },
                { name: "FAC_EXCESS_SI_BC", index: "FAC_EXCESS_SI_BC", width: 150 },
                { name: "FAC_EXCESS_PREM_FC", index: "FAC_EXCESS_PREM_FC", width: 150 },
                { name: "FAC_EXCESS_PREM_BC", index: "FAC_EXCESS_PREM_BC", width: 150 },
                { name: "FAC_EXCESS_PERC", index: "FAC_EXCESS_PERC", width: 150 },

                { name: "FAC_COMMENTS", index: "FAC_COMMENTS", width: 150 },
                { name: "FAC_SLIP_NO", index: "FAC_SLIP_NO", width: 150 },
                { name: "FAC_REF_ID", index: "FAC_REF_ID", width: 150 },
                { name: "FAC_CLOSE", index: "FAC_CLOSE", width: 150 },

                { name: "FAC_FROM_DATE", index: "FAC_FROM_DATE", width: 150 },
                { name: "FAC_TO_DATE", index: "FAC_TO_DATE", width: 150 },
                { name: "FAC_REG", index: "FAC_REG", width: 150 },
                { name: "FAC_AREA", index: "FAC_AREA", width: 150 },
                { name: "FAC_LOC", index: "FAC_LOC", width: 150 },
                { name: "FAC_COMB_LOC_ID", index: "FAC_COMB_LOC_ID", width: 150 },

                { name: "FAC_CRTE_BY", index: "FAC_CRTE_BY", width: 150 },
                { name: "FAC_CRTE_DATE", index: "FAC_CRTE_DATE", width: 150 },
                { name: "FAC_STATUS", index: "FAC_STATUS", width: 150 },
                 //{ name: "INS_RI_TTY_ALLOCATION", index: "INS_RI_TTY_ALLOCATION", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
                function (selId) {
                    var grid = $scope.facplment_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='TTA_SYS_ID']").data("update", true);
                    u.fill_form({
                        FAC_SI_FC: grid.jqGrid('getCell', sel_id, 'FAC_SI_FC'),
                        FAC_SI_BC: grid.jqGrid('getCell', sel_id, 'FAC_SI_BC'),
                        FAC_PREM_FC: grid.jqGrid('getCell', sel_id, 'FAC_PREM_FC'),
                        FAC_PREM_BC: grid.jqGrid('getCell', sel_id, 'FAC_PREM_BC'),
                        FAC_PERC: grid.jqGrid('getCell', sel_id, 'FAC_PERC'),
                        FAC_EXCESS_SI_FC: grid.jqGrid('getCell', sel_id, 'FAC_EXCESS_SI_FC'),
                        FAC_EXCESS_SI_BC: grid.jqGrid('getCell', sel_id, 'FAC_EXCESS_SI_BC'),
                        FAC_EXCESS_PREM_FC: grid.jqGrid('getCell', sel_id, 'FAC_EXCESS_PREM_FC'),
                        FAC_EXCESS_PREM_BC: grid.jqGrid('getCell', sel_id, 'FAC_EXCESS_PREM_BC'),
                        FAC_EXCESS_PERC: grid.jqGrid('getCell', sel_id, 'FAC_EXCESS_PERC'),

                        TTA_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'FAC_POLH_SYS_ID'),
                        TTA_POLH_END_NO: grid.jqGrid('getCell', sel_id, 'FAC_POLH_END_NO'),
                        TTA_UW_YEAR: grid.jqGrid('getCell', sel_id, 'FAC_UWYR'),

                        FAC_FROM_DATE: grid.jqGrid('getCell', sel_id, 'FAC_FROM_DATE'),
                        FAC_TO_DATE: grid.jqGrid('getCell', sel_id, 'FAC_TO_DATE'),

                    }, "#FACApportionmentForm");
                    u.fill_form({
                     
                        FAC_FROM_DATE: grid.jqGrid('getCell', sel_id, 'FAC_FROM_DATE'),
                        FAC_TO_DATE: grid.jqGrid('getCell', sel_id, 'FAC_TO_DATE'),

                    }, "#FACShareForm");
                    u.fill_form({

                        TTA_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'TTA_POLH_SYS_ID'),
                        FAC_TTA_SYS_ID: grid.jqGrid('getCell', sel_id, 'FAC_TTA_SYS_ID'),

                    }, "#facheaderForm");
                }),


        // FAC In Premium Summary
        $scope.facAppor_grid = u.default_grid("#gridFACAppor", "#gridFACApporPager", "FAC Apportionment",
            ["Treaty Code", "Treaty Type", "UW Year", "slip No.", "Seq No.", "Close Flag", "Limit FC", "Limit BC", " Sum Insured FC",
            "Sum Insured BC", "Premium FC.", "Premium BC", "Commission FC", "Commission FC", "Allocation Perc", "FAC Excess %",
            "ID", "Header ID", "Polh ID", "Polh End No.", "Created By", "Created Date", "Status",
            "SHARE"
            ],
            [
                { name: "TTA_TTY_CODE", index: "TTA_TTY_CODE", width: 150 },
                { name: "TTA_TTY_TYPE", index: "TTA_TTY_TYPE", width: 150 },
                { name: "TTA_UW_YEAR", index: "TTA_UW_YEAR", width: 150 },

                { name: "TTA_SLIPNO", index: "TTA_SLIPNO", width: 150 },
                { name: "TTA_SEQ_NO", index: "TTA_SEQ_NO", width: 150 },
                { name: "TTA_CLOSE_FLAG", index: "TTA_CLOSE_FLAG", width: 150 },

                { name: "TTA_TTY_LIMIT_FC", index: "TTA_TTY_LIMIT_FC", width: 150 },
                { name: "TTA_TTY_LIMIT_BC", index: "TTA_TTY_LIMIT_BC", width: 150 },
                { name: "TTA_TTY_SI_FC", index: "TTA_TTY_SI_FC", width: 150 },
                { name: "TTA_TTY_SI_BC", index: "TTA_TTY_SI_BC", width: 150 },
                { name: "TTA_TTY_PREM_FC", index: "TTA_TTY_PREM_FC", width: 150 },
                { name: "TTA_TTY_PREM_BC", index: "TTA_TTY_PREM_BC", width: 150 },
                { name: "TTA_TTY_COMM_FC", index: "TTA_TTY_COMM_FC", width: 150 },
                { name: "TTA_TTY_COMM_BC", index: "TTA_TTY_COMM_BC", width: 150 },
                { name: "TTA_ALLOC_PERC", index: "TTA_ALLOC_PERC", width: 150 },
                { name: "TTA_FAC_EXCESS_PERC", index: "TTA_FAC_EXCESS_PERC", width: 150 },
                { name: "TTA_SYS_ID", index: "TTA_SYS_ID", width: 150 },
                { name: "TTA_TTH_SYS_ID", index: "TTA_TTH_SYS_ID", width: 150 },
                { name: "TTA_POLH_SYS_ID", index: "TTA_POLH_SYS_ID", width: 150 },
                { name: "TTA_POLH_END_NO", index: "TTA_POLH_END_NO", width: 150 },

                { name: "TTA_CRTE_BY", index: "TTA_CRTE_BY", width: 150 },
                { name: "TTA_CRTE_DATE", index: "TTA_CRTE_DATE", width: 150 },
                { name: "TTA_STATUS", index: "TTA_STATUS", width: 150 },
                { name: "INS_RI_TTY_SHARE", index: "INS_RI_TTY_SHARE", hidden: false, width: 200 },
             ],
           //Retrive Grid data into form input fields on row click..
                function (selId) {
                    var grid = $scope.facAppor_grid;
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
                    }, "#FACApportionmentForm");
                }),

       
        // FAC In Premium Summary
        $scope.facshare_grid = u.default_grid("#gridFACCompShare", "#gridFACCompSharePager", "FAC Companies Share",
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

        $("#btnFACCompShare").click(function () {
          
            //obthain the id of the selected FAC details
            var grid = $scope.facAppor_grid;
            var selRow = $scope.selectedShare = grid.jqGrid("getGridParam", "selrow");

            if (selRow) {
                //obtain the allocations that have been assigned to selected fac head details
                var shareString = grid.jqGrid("getCell", selRow, "INS_RI_TTY_SHARE") || "[]";

                console.log(shareString)

                var shareJson = [];
                if (shareString.length <= 0) {
                }
                shareJson = JSON.parse(shareString);
                console.log(shareJson);

                for (var i in shareJson) {
                    $scope.facshare_grid.addRowData(shareJson[i].ID, shareJson[i]);
                }

                $('#TTS_SHARE_PERC1').val($('#TTA_FAC_EXCESS_PERC').val());
                $("#FACShareModal").modal();
               
            }
            else {
                u.growl_warning("No Apportionment Detail selected, Please check and try again");
            }

          //

        });

        $("#btnShareOk").click(function () {

            if ($scope.selectedShare) {
                //obtain the compnaies that have been selected
                var shares = u.get_grid_data($scope.facshare_grid);
                console.log(shares);
                alert(JSON.stringify(shares))
                //assign the set shares to the selected fac detials
                $scope.facAppor_grid.jqGrid("setCell", $scope.selectedShare, "INS_RI_TTY_SHARE", JSON.stringify(shares));

            } else {
                u.growl_info("No selected treaty to update");
            }
            $("#FACShareModal").modal("hide");
            u.clear_grid_data($scope.facshare_grid);
        });

        $("#FACShareModal .close, #btnShareClose").click(function () {
            u.clear_grid_data($scope.facshare_grid);
        });



        $("#btnFACAppor").click(function () {

            //obthain the id of the selected FAC details
            var grid = $scope.facplment_grid;
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
                    $scope.facAppor_grid.addRowData(apportiomentJson[i].ID, apportiomentJson[i]);
                }

                $("#FACApportionmentModal").modal();
                apporCal();
            }
            else {
                u.growl_warning("No FAC Detail selected, Please check and try again");
            }          
          
        });


        $("#apporOk").click(function () {

            if ($scope.selectedFac) {
                //obtain the compnaies that have been selected
                var apportionments = u.get_grid_data($scope.facAppor_grid);
                console.log(apportionments);
                alert(JSON.stringify(apportionments))
                //assign the set apportionments to the selected fac detials
                $scope.facplment_grid.jqGrid("setCell", $scope.selectedFac, "INS_RI_TTY_ALLOCATION", JSON.stringify(apportionments));

            } else {
                u.growl_info("No selected treaty to update");
            }
            $("#FACApportionmentModal").modal("hide");
            u.clear_grid_data($scope.facAppor_grid);
        });


        $("#FACApportionmentModal .close, #apporClose").click(function () {
            u.clear_grid_data($scope.facAppor_grid);
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
                case "btn_ri_comp":
                    $scope.lov.call_dialog("Select RI Share Company", "get_lov_ricust", $scope.dialog_data);
                    break;  
            }
        });



        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#btnExptFAC_Share").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.facshare_grid, ["ID"], "FAC_Share_List_Excel");
        });

        $("#facHead-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.facplment_grid, ["ID"], "FAC_Head_List_Excel");
        });

        $("#facAppor-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.facAppor_grid, ["ID"], "FAC_Apportionment_List_Excel");
        });


        $("#btnQueryFac").click(function () {

            getTreatyAlloc();

        });

        /*-----------------------------------
         * Getting Treaty Allocation data for FAC 
         *----------------------------------*/
        function getTreatyAlloc() {

            /*
                obtain parameter for our request
            */
               var TreatyAlloc = {

                   TTA_POLH: $("#txtSearch").val(),
            }

               var grid = $scope.facplment_grid;

               var rowIds = grid.jqGrid('getDataIDs');

               //declare array to contain the codes to varify
               var CodeArray = [];

               // iterate through the rows in the grid and add Covers to Array
               for (var i = 0, len = rowIds.length; i < len; i++) {
                   var currRow = rowIds[i];

                   //get value of the cell or column in an array
                   var apporCode = grid.jqGrid("getCell", currRow, "FAC_TTA_SYS_ID");

                   var polhCode = grid.jqGrid("getCell", currRow, "FAC_POLH_SYS_ID");

                   var riskCov = apporCode + polhCode;

                   //alert(riskCov);
                   CodeArray.push(riskCov);
               }

            //send parameters and get motor Risks from the database
               s.getTreatyAllocLOV(TreatyAlloc, function (result) {
                if (result && result.length && result.length > 0) {
                      
                    for (var i in result) {
                        //result[i]["FAC_POLH_SYS_ID"] = result[i]["INS_RI_TTY_ALLOCATION"]["TTA_POLH_SYS_ID"];
                        result[i]["FAC_POLH_SYS_ID"] = result[i]["TTA_POLH_SYS_ID"];
                        result[i]["FAC_TTA_SYS_ID"] = result[i]["TTA_SYS_ID"];
                        result[i]["FAC_POLH_END_NO"] = result[i]["TTA_POLH_END_NO"];

                        result[i]["FAC_POLH_SYS_ID"] = result[i]["TTA_POLH_SYS_ID"];
                        result[i]["FAC_RISK_SYS_ID"] = result[i]["TTH_RISK_SYS_ID"];
                        result[i]["FAC_RISK_END_NO"] = result[i]["TTH_RISK_END_NO"];

                        result[i]["FAC_LOC_SYS_ID"] = result[i]["TTH_LOC_SYS_ID"];
                        result[i]["FAC_LOC_END_NO"] = result[i]["TTH_LOC_END_NO"];
                        result[i]["FAC_REF_ID"] = result[i]["TTH_REF_ID"];
                        result[i]["FAC_COMB_LOC_ID"] = result[i]["TTH_COMB_LOC_ID"];

                        result[i]["FAC_UWYR"] = result[i]["TTA_UW_YEAR"];
                        result[i]["FAC_SLIP_NO"] = result[i]["TTA_SYS_ID"];
                        result[i]["FAC_FROM_DATE"] = result[i]["TTH_FROM_DATE"];
                        result[i]["FAC_TO_DATE"] = result[i]["TTH_TO_DATE"];

                        result[i]["FAC_EXCESS_SI_FC"] = result[i]["TTA_TTY_SI_FC"];
                        result[i]["FAC_EXCESS_SI_BC"] = result[i]["TTA_TTY_SI_BC"];
                        result[i]["FAC_EXCESS_PREM_FC"] = result[i]["TTA_TTY_PREM_FC"];
                        result[i]["FAC_EXCESS_PREM_BC"] = result[i]["TTA_TTY_PREM_BC"];
                        result[i]["FAC_EXCESS_PERC"] = result[i]["TTA_ALLOC_PERC"];

                        result[i]["FAC_SI_FC"] = result[i]["TTH_TOTAL_SI_FC"];
                        result[i]["FAC_SI_BC"] = result[i]["TTH_TOTAL_SI_BC"];
                        result[i]["FAC_PREM_FC"] = result[i]["TTH_TOTAL_PREM_FC"];
                        result[i]["FAC_PREM_BC"] = result[i]["TTH_TOTAL_PREM_BC"];
                        result[i]["FAC_PERC"] = result[i]["TTA_ALLOC_PERC"];

                        result[i]["FAC_SLIP_NO"] = result[i]["TTA_SLIPNO"];
                        result[i]["FAC_CLOSE"] = result[i]["TTA_CLOSE_FLAG"];

                        var deftCoverCode = result[i].FAC_TTA_SYS_ID;

                        var verifyRiskCover = deftCoverCode;
                         
                        //add if Treaty Excess is not found in the Grid//

                        if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                            //fill in default covers if not in the grid

                            $scope.facplment_grid.addRowData(result[i].ID, result[i]);
                        }
                        else {

                            u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);
                        }
                    }
                }
            });
        }

        /*-----------------------------------
         * Treaty Allocation Calculation
         *----------------------------------*/
        function apporCal() {
            var AllocPremFC = "";
            var AllocPremBC = "";
            var AllocSIFC = "";
            var AllocSIBC = "";
            var AllocPerc = "";

            if ($('#FAC_SI_FC').val == "" || $('#FAC_EXCESS_SI_FC').val == "") {
                u.growl_warning("Treaty Sum Insured and Excess is null! ");
            }
            else {
                AllocSIFC = ($('#FAC_SI_FC').val() - $('#FAC_EXCESS_SI_FC').val());
                AllocSIBC = ($('#FAC_SI_BC').val() - $('#FAC_EXCESS_SI_BC').val());

                AllocPremFC = ($('#FAC_PREM_FC').val() - $('#FAC_EXCESS_PREM_FC').val());
                AllocPremBC = ($('#FAC_PREM_BC').val() - $('#FAC_EXCESS_PREM_BC').val());
                AllocPerc = (100 - $('#FAC_EXCESS_PERC').val());

                $('#TTA_TTY_SI_FC').val(AllocSIFC);
                $('#TTA_TTY_SI_BC').val(AllocSIBC);
                $('#TTA_TTY_PREM_FC').val(AllocPremFC);
                $('#TTA_TTY_PREM_BC').val(AllocPremBC);
                $('#TTA_ALLOC_PERC').val(AllocPerc);
            }
        };


        document.getElementById("TTA_FAC_EXCESS_PERC").addEventListener("focusout", getseq);

        function getseq() {
            var ttype = $("#TTA_TTY_TYPE").val("F");
            var seqcode = $("#TTA_TTY_CODE").val();
            var seq1 = +1; 
            
            $("#TTA_TTY_CODE").val('F' + seq1);
        }


         /*-----------------------------------
         * Treaty Share Calculation
         *----------------------------------*/
        document.getElementById("TTS_SHARE_PERC").addEventListener("focusout", shareCal);
        document.getElementById("TTS_RI_COMM_PERC").addEventListener("focusout", shareCal);

        function shareCal() {
            if ($('#TTS_SHARE_PERC').val() > $('#TTS_SHARE_PERC1').val()) {

                $('#TTS_SHARE_PERC').val("");
                return u.growl_error("RI Share % cannot be greater that Share %");
              
            }         
            
            else {

                var SharePremFC = "";
                var SharePremBC = "";
                var ShareSIFC = "";
                var ShareSIBC = "";
                var CommPercFC = "";
                var CommPercBC = "";

             ShareSIFC = ($('#TTS_SHARE_PERC').val() / 100 * $('#FAC_EXCESS_SI_FC').val());
            ShareSIBC = ($('#TTS_SHARE_PERC').val() / 100 * $('#FAC_EXCESS_SI_BC').val());

            SharePremFC = ($('#TTS_SHARE_PERC').val() / 100 * $('#FAC_EXCESS_PREM_FC').val());
            SharePremBC = ($('#TTS_SHARE_PERC').val() / 100 * $('#FAC_EXCESS_PREM_BC').val());

            CommPercFC = ($('#TTS_RI_COMM_PERC').val() * $('#FAC_EXCESS_PREM_FC').val() / 100);
            CommPercBC = ($('#TTS_RI_COMM_PERC').val() * $('#FAC_EXCESS_PREM_BC').val() / 100);

            $('#TTS_SHARE_SI_FC').val(ShareSIFC);
            $('#TTS_SHARE_SI_BC').val(ShareSIBC);
            $('#TTS_SHARE_PREM_FC').val(SharePremFC);
            $('#TTS_SHARE_PREM_BC').val(SharePremBC);
            $('#TTS_RI_COMM_FC').val(CommPercFC);
            $('#TTS_RI_COMM_BC').val(CommPercBC);
        }
        };


        /*--------------------------------------------------
        * call add function to add records to  facAppor_grid
        *------------------------------------------------*/
        //
        $("#btn_add_appor").on("click", function () {

            if (u.form_validation("#FACApportionmentForm")) {
              
                u.modal_confirmation("Are you sure you want to add RI FAC Apportionments Details to the grid?", function () {

                    var rowIds = $scope.facAppor_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

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
                        var cellValue = $scope.facAppor_grid.jqGrid("getCell", currRow, "TTA_TTY_TYPE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TTA_TTY_TYPE").val(), code) < 0) {
                        var formData = u.parse_form("#FACApportionmentForm");
                        formData.TTA_STATUS = "U";
                        formData.TTA_CRTE_BY = "Admin";
                        formData.TTA_CRTE_DATE = u.get_date();
                        $scope.facAppor_grid.addRowData(formData.TTA_TTY_TYPE, formData);
                        u.hide_confirm();
                        u.growl_success("RI FAC Apportionments  Details successfully added to grid");
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


        /*--------------------------------
         * Treaty Apportionment Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_appor").on("click", function () {

            if (u.grid_empty($scope.facAppor_grid)) return u.growl_info("FAC Apportionment grid is empty");

            if (u.form_validation("#FACApportionmentForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Apportionment?", function () {

                    var grid = $scope.facAppor_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "TTA_TTY_TYPE");

                    if (code === $("#TTA_TTY_TYPE").val()) {
                        var data = u.parse_form("#FACApportionmentForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Treaty Apportionment updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from Apportionment Grid
         *---------------------------------------------------*/

        $("#btn_remove_appor").on("click", function () {

            if (u.grid_empty($scope.facAppor_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.facAppor_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TTA_STATUS");

            var code = grid.jqGrid("getCell", rowId, "TTA_TTY_TYPE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "TTA_STATUS", "D");
                    $("#" + rowId, "#gridFACAppor").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#gridFACAppor").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TTA_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
       * call add function to add records to  Share grid
       *------------------------------------------------*/
        //
        $("#btn_add_share").on("click", function () {

            if (u.form_validation("#FACShareForm")) {

                u.modal_confirmation("Are you sure you want to add RI FAC Apportionments Details to the grid?", function () {

                    var rowIds = $scope.facshare_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

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
                        var cellValue = $scope.facshare_grid.jqGrid("getCell", currRow, "TTS_RI_COMP");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#TTS_RI_COMP").val(), code) < 0) {
                        var formData = u.parse_form("#FACShareForm");
                        formData.TTS_STATUS = "U";
                        formData.TTS_CRTE_BY = "Admin";
                        formData.TTS_CRTE_DATE = u.get_date();
                        $scope.facshare_grid.addRowData(formData.TTS_RI_COMP, formData);
                        u.hide_confirm(); 
                        u.growl_success("RI Company Share Details successfully added to grid");
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


        /*--------------------------------------
        * RI Company Share Edit/Update Function
        *--------------------------------------*/
        //
        $("#btn_update_share").on("click", function () {

            if (u.grid_empty($scope.facshare_grid)) return u.growl_info("FAC Company Share grid is empty");

            if (u.form_validation("#FACShareForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Company Share?", function () {

                    var grid = $scope.facshare_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "TTS_RI_COMP");

                    if (code === $("#TTS_RI_COMP").val()) {
                        var data = u.parse_form("#FACShareForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Treaty Company Share updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Share Grid
        *---------------------------------------------------*/

        $("#btn_remove_share").on("click", function () {

            if (u.grid_empty($scope.facshare_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.facshare_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "TTS_STATUS");

            var code = grid.jqGrid("getCell", rowId, "TTS_RI_COMP");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "TTS_STATUS", "D");
                    $("#" + rowId, "#gridFACCompShare").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#gridFACCompShare").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "TTS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/
         
            if (u.grid_empty($scope.facplment_grid)) {
                return u.growl_warning("Please add RI Details");
            }

            //if (u.grid_empty($scope.facshare_grid)) {
            //    return u.growl_warning("Please add Sub Class");
            //}

            if (u.grid_empty($scope.facAppor_grid)) {
                return u.growl_warning("Please add Participating companies")
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var treatyData = u.parse_form("#facheaderForm");
                if (!$scope.searched) treatyData.FAC_STATUS = "U";
               
                //var treatyData = u.get_grid_data($scope.facAppor_grid);

                //for (var i in treatyData) {

                //    treatyData[i]["INS_RI_TTY_SHARE"] = JSON.parse(treatyData[i]["INS_RI_TTY_SHARE"]);

                //}
                //headerData["INS_RI_TTY_ALLOCATION"] = treatyData;

                treatyData.INS_RI_TTY_ALLOCATION = u.get_grid_data($scope.facAppor_grid);

                for (var i in treatyData.INS_RI_TTY_ALLOCATION) {

                    treatyData.INS_RI_TTY_ALLOCATION[i]["INS_RI_TTY_SHARE"] = JSON.parse(treatyData.INS_RI_TTY_ALLOCATION[i]["INS_RI_TTY_SHARE"]);

                }

                console.log(treatyData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_treaty(treatyData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                           //$scope.edited = false;
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


    });

})(window.$, window.service, window.utility, {})