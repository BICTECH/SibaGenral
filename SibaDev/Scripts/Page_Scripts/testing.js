(function ($, s, u, $scope) {
    $(function () {

        // Fire Location Risk Grid
        $scope.location_grid = u.default_grid("#gridPLoc", "#gridPLocPager", "Location Details",
            [
                      "Location Code", "Location Name", "Location Desc", "Location Address", "Loc No.", "Area Code", "Area Name",
                     "Occupancy Code", "Occupancy Name", "Occupancy Section", "Earthquake ", "RI EML", "EML", "Start Date", "End Date",
                     "Currency", "Currency Rate", "UW Year", "Policy Cancelled", "Cancelled Reason",
                     "Sum Insured FC", "Sum Insured BC", "Total Premium FC", "Total Premium BC", "Risk Premium FC", "Risk Premium BC",
                    //                  
                     "Adj Premium FC", "Adj Premium BC", "Discount FC", "Discount BC", "Load FC", "Laod BC",
                    "Compulsory Fee FC", "Compulsory Fee BC", "Commossion FC", "Commission BC", "Terorism Prm FC", "Terorism Prm BC", "Txn Status", "Risk State",
                    //RI
                    "RI_Applicable", "RI Eff Date", "RI SI FC", "RI SI BC", "RI Premium FC", "RI Premium BC",
                     //                
                    "Product code", "Cover Code", " Renewal Status", "Endorsement Type", "Approval Date", "Account Date",
                    "Create by", "Create Date", "Modified By", "Modified Date", "Status",
                    "Sys ID", "Polh Sys ID", "PolDocNo", "Endorsement No.",
            ],
            [
                    { name: "PLOC_LOC_CODE", index: "PLOC_LOC_CODE", width: 150 },
                    { name: "PLOC_LOC_NAME", index: "PLOC_LOC_NAME", width: 150 },
                    { name: "PLOC_LOC_DESC", index: "PLOC_LOC_DESC", width: 150 },
                    { name: "PLOC_LOC_ADDRS", index: "PLOC_LOC_ADDRS", width: 150 },
                    { name: "PLOC_RISK_NO", index: "PLOC_RISK_NO", width: 150 },
                    { name: "PLOC_AREA_CODE", index: "PLOC_AREA_CODE", width: 150 },
                    { name: "PLOC_AREA_NAME", index: "PLOC_AREA_NAME", width: 150 },
                    { name: "PLOC_OCCUP_CODE", index: "PLOC_OCCUP_CODE", width: 150 },
                    { name: "PLOC_OCCUP_NAME", index: "PLOC_OCCUP_NAME", width: 150 },
                    { name: "PLOC_OCCUP_SECTION", index: "PLOC_OCCUP_SECTION", width: 150 },
                    { name: "PLOC_EQZONE", index: "PLOC_EQZONE", width: 150 },
                    { name: "PLOC_RIEML", index: "PLOC_RIEML", width: 150 },
                    { name: "PLOC_EML", index: "PLOC_EML", width: 150 },
                    { name: "PLOC_START_DATE", index: "PLOC_START_DATE", width: 150 },
                    { name: "PLOC_END_DATE", index: "PLOC_END_DATE", width: 150 },
                    { name: "PLOC_CURR_CODE", index: "PLOC_CURR_CODE", width: 150 },
                    { name: "PLOC_CURR_RATE", index: "PLOC_CURR_RATE", width: 150 },
                    { name: "PLOC_UW_YEAR", index: "PLOC_UW_YEAR", width: 150 },
                    { name: "PLOC_POL_CANCELLED", index: "PLOC_POL_CANCELLED", width: 150 },
                    { name: "PLOC_CANCELLED_REASON", index: "PLOC_CANCELLED_REASON", width: 150 },
                    { name: "PLOC_SI_FC", index: "PLOC_SI_FC", width: 150 },
                    { name: "PLOC_SI_BC", index: "PLOC_SI_BC", width: 150 },
                    { name: "PLOC_TOT_PREM_FC", index: "PLOC_TOT_PREM_FC", width: 150 },
                    { name: "PLOC_TOT_PREM_BC", index: "PLOC_TOT_PREM_BC", width: 150 },
                    { name: "PLOC_RISK_PREM_FC", index: "PLOC_RISK_PREM_FC", width: 150 },
                    { name: "PLOC_RISK_PREM_BC", index: "PLOC_RISK_PREM_BC", width: 150 },

                    { name: "PLOC_ADJ_PREM_FC", index: "PLOC_ADJ_PREM_FC", width: 150 },
                    { name: "PLOC_ADJ_PREM_BC", index: "PLOC_ADJ_PREM_BC", width: 150 },
                    { name: "PLOC_DISC_FC", index: "PLOC_DISC_FC", width: 150 },
                    { name: "PLOC_DISC_BC", index: "PLOC_DISC_BC", width: 150 },
                    { name: "PLOC_LOAD_FC", index: "PLOC_LOAD_FC", width: 150 },
                    { name: "PLOC_LOAD_BC", index: "PLOC_LOAD_BC", width: 150 },
                    { name: "PLOC_COMP_FEE_FC", index: "PLOC_COMP_FEE_FC", width: 150 },
                    { name: "PLOC_COMP_FEE_BC", index: "PLOC_COMP_FEE_BC", width: 150 },
                    { name: "PLOC_COMMISSION_FC", index: "PLOC_COMMISSION_FC", width: 150 },
                    { name: "PLOC_COMMISSION_BC", index: "PLOC_COMMISSION_BC", width: 150 },
                    { name: "PLOC_TRISM_PREM_FC", index: "PLOC_TRISM_PREM_FC", width: 150 },
                    { name: "PLOC_TRISM_PREM_BC", index: "PLOC_TRISM_PREM_BC", width: 150 },
                    { name: "PLOC_TXN_STATUS", index: "PLOC_TXN_STATUS", width: 150 },
                    { name: "PLOC_RISK_STATE", index: "PLOC_RISK_STATE", width: 150 },

                    { name: "PLOC_RI_APPLICABLE", index: "PLOC_RI_APPLICABLE", width: 150 },
                    { name: "PLOC_RI_EFF_DATE", index: "PLOC_RI_EFF_DATE", width: 150 },
                    { name: "PLOC_RI_SI_FC", index: "PLOC_RI_SI_FC", width: 150 },
                    { name: "PLOC_RI_SI_BC", index: "PLOC_RI_SI_BC", width: 150 },
                    { name: "PLOC_RI_PREM_FC", index: "PLOC_RI_PREM_FC", width: 150 },
                    { name: "PLOC_RI_PREM_BC", index: "PLOC_RI_PREM_BC", width: 150 },

                    { name: "PLOC_PDT_CODE", index: "PLOC_PDT_CODE", width: 150 },
                    { name: "PLOC_CVR_CODE", index: "PLOC_CVR_CODE", width: 150 },
                    { name: "PLOC_RENEWAL_STATUS", index: "PLOC_RENEWAL_STATUS", width: 150 },
                    { name: "PLOC_END_TYPE", index: "PLOC_END_TYPE", width: 150 },
                    { name: "PLOC_APPROVE_DATE", index: "PLOC_APPROVE_DATE", width: 150 },
                    { name: "PLOC_ACCT_DATE", index: "PLOC_ACCT_DATE", width: 150 },
                    { name: "PLOC_CRTE_BY", index: "PLOC_CRTE_BY", width: 150 },
                    { name: "PLOC_CRTE_DATE", index: "PLOC_CRTE_DATE", width: 150 },
                    { name: "PLOC_MOD_BY", index: "PLOC_MOD_BY", width: 150 },
                    { name: "PLOC_MOD_DATE", index: "PLOC_MOD_DATE", width: 150 },
                    { name: "PLOC_STATUS", index: "PLOC_STATUS", width: 150 },

                    { name: "PLOC_SYS_ID", index: "PLOC_SYS_ID", width: 150 },
                    { name: "PLOC_POLH_SYS_ID", index: "PLOC_POLH_SYS_ID", width: 150 },
                    { name: "PLOC_POLH_DOC_NO", index: "PLOC_POLH_DOC_NO", width: 150 },
                    { name: "PLOC_POLH_END_NO", index: "PLOC_POLH_END_NO", width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.location_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='PLOC_SYS_ID']").data("update", true);
                u.fill_form({
                    PLOC_RISK_NO: grid.jqGrid("getCell", sel_id, "PLOC_RISK_NO"),
                    PLOC_SYS_ID: grid.jqGrid("getCell", sel_id, "PLOC_SYS_ID"),
                    PLOC_POLH_SYS_ID: grid.jqGrid("getCell", sel_id, "PLOC_POLH_SYS_ID"),
                    PLOC_POLH_DOC_NO: grid.jqGrid("getCell", sel_id, "PLOC_POLH_DOC_NO"),
                    PLOC_POLH_END_NO: grid.jqGrid("getCell", sel_id, "PLOC_POLH_END_NO"),
                    PLOC_PDT_CODE: grid.jqGrid("getCell", sel_id, "PLOC_PDT_CODE"),
                    PLOC_CVR_CODE: grid.jqGrid("getCell", sel_id, "PLOC_CVR_CODE"),
                    PLOC_AREA_CODE: grid.jqGrid("getCell", sel_id, "PLOC_AREA_CODE"),
                    PLOC_AREA_NAME: grid.jqGrid("getCell", sel_id, "PLOC_AREA_NAME"),
                    PLOC_LOC_CODE: grid.jqGrid("getCell", sel_id, "PLOC_LOC_CODE"),
                    PLOC_LOC_NAME: grid.jqGrid("getCell", sel_id, "PLOC_LOC_NAME"),
                    PLOC_LOC_DESC: grid.jqGrid("getCell", sel_id, "PLOC_LOC_DESC"),
                    PLOC_LOC_ADDRS: grid.jqGrid("getCell", sel_id, "PLOC_LOC_ADDRS"),
                    PLOC_OCCUP_CODE: grid.jqGrid("getCell", sel_id, "PLOC_OCCUP_CODE"),
                    PLOC_OCCUP_NAME: grid.jqGrid("getCell", sel_id, "PLOC_OCCUP_NAME"),
                    PLOC_OCCUP_SECTION: grid.jqGrid("getCell", sel_id, "PLOC_OCCUP_SECTION"),
                    PLOC_EQZONE: grid.jqGrid("getCell", sel_id, "PLOC_EQZONE"),
                    PLOC_RIEML: grid.jqGrid("getCell", sel_id, "PLOC_RIEML"),
                    PLOC_EML: grid.jqGrid("getCell", sel_id, "PLOC_EML"),

                    PLOC_START_DATE: grid.jqGrid("getCell", sel_id, "PLOC_START_DATE"),
                    PLOC_END_DATE: grid.jqGrid("getCell", sel_id, "PLOC_END_DATE"),
                    PLOC_CURR_CODE: grid.jqGrid("getCell", sel_id, "PLOC_CURR_CODE"),
                    PLOC_CURR_RATE: grid.jqGrid("getCell", sel_id, "PLOC_CURR_RATE"),
                    PLOC_UW_YEAR: grid.jqGrid("getCell", sel_id, "PLOC_UW_YEAR"),
                    PLOC_POL_CANCELLED: grid.jqGrid("getCell", sel_id, "PLOC_POL_CANCELLED"),
                    PLOC_CANCELLED_REASON: grid.jqGrid("getCell", sel_id, "PLOC_CANCELLED_REASON"),

                    PLOC_SI_FC: grid.jqGrid("getCell", sel_id, "PLOC_SI_FC"),
                    PLOC_SI_BC: grid.jqGrid("getCell", sel_id, "PLOC_SI_BC"),
                    PLOC_TOT_PREM_FC: grid.jqGrid("getCell", sel_id, "PLOC_TOT_PREM_FC"),
                    PLOC_TOT_PREM_BC: grid.jqGrid("getCell", sel_id, "PLOC_TOT_PREM_BC"),
                    PLOC_RISK_PREM_FC: grid.jqGrid("getCell", sel_id, "PLOC_RISK_PREM_FC"),

                    PLOC_RISK_PREM_BC: grid.jqGrid("getCell", sel_id, "PLOC_RISK_PREM_BC"),
                    PLOC_ADJ_PREM_FC: grid.jqGrid("getCell", sel_id, "PLOC_ADJ_PREM_FC"),
                    PLOC_ADJ_PREM_BC: grid.jqGrid("getCell", sel_id, "PLOC_ADJ_PREM_BC"),
                    PLOC_DISC_FC: grid.jqGrid("getCell", sel_id, "PLOC_DISC_FC"),
                    PLOC_DISC_BC: grid.jqGrid("getCell", sel_id, "PLOC_DISC_BC"),
                    PLOC_LOAD_FC: grid.jqGrid("getCell", sel_id, "PLOC_LOAD_FC"),
                    PLOC_LOAD_BC: grid.jqGrid("getCell", sel_id, "PLOC_LOAD_BC"),
                    PLOC_COMP_FEE_FC: grid.jqGrid("getCell", sel_id, "PLOC_COMP_FEE_FC"),
                    PLOC_COMP_FEE_BC: grid.jqGrid("getCell", sel_id, "PLOC_COMP_FEE_BC"),
                    PLOC_COMMISSION_FC: grid.jqGrid("getCell", sel_id, "PLOC_COMMISSION_FC"),

                    PLOC_COMMISSION_BC: grid.jqGrid("getCell", sel_id, "PLOC_COMMISSION_BC"),
                    PLOC_RI_APPLICABLE: grid.jqGrid("getCell", sel_id, "PLOC_RI_APPLICABLE"),
                    PLOC_RI_EFF_DATE: grid.jqGrid("getCell", sel_id, "PLOC_RI_EFF_DATE"),
                    PLOC_RI_SI_FC: grid.jqGrid("getCell", sel_id, "PLOC_RI_SI_FC"),
                    PLOC_RI_SI_BC: grid.jqGrid("getCell", sel_id, "PLOC_RI_SI_BC"),

                    PLOC_RI_PREM_FC: grid.jqGrid("getCell", sel_id, "PLOC_RI_PREM_FC"),
                    PLOC_RI_PREM_BC: grid.jqGrid("getCell", sel_id, "PLOC_RI_PREM_BC"),
                    PLOC_PDT_CODE: grid.jqGrid("getCell", sel_id, "PLOC_PDT_CODE"),
                    PLOC_CVR_CODE: grid.jqGrid("getCell", sel_id, "PLOC_CVR_CODE"),
                    PLOC_RENEWAL_STATUS: grid.jqGrid("getCell", sel_id, "PLOC_RENEWAL_STATUS"),

                    PLOC_END_TYPE: grid.jqGrid("getCell", sel_id, "PLOC_END_TYPE"),
                    PLOC_APPROVE_DATE: grid.jqGrid("getCell", sel_id, "PLOC_APPROVE_DATE"),
                    PLOC_ACCT_DATE: grid.jqGrid("getCell", sel_id, "PLOC_ACCT_DATE"),
                    PLOC_CRTE_BY: grid.jqGrid("getCell", sel_id, "PLOC_CRTE_BY"),
                    PLOC_CRTE_DATE: grid.jqGrid("getCell", sel_id, "PLOC_CRTE_DATE"),

                    PLOC_TXN_STATUS: grid.jqGrid("getCell", sel_id, "PLOC_TXN_STATUS"),
                    PLOC_RISK_STATE: grid.jqGrid("getCell", sel_id, "PLOC_RISK_STATE"),
                    PLOC_TRISM_SI_FC: grid.jqGrid("getCell", sel_id, "PLOC_TRISM_SI_FC"),
                    PLOC_TRISM_SI_BC: grid.jqGrid("getCell", sel_id, "PLOC_TRISM_SI_BC"),
                    PLOC_TRISM_PREM_FC: grid.jqGrid("getCell", sel_id, "PLOC_TRISM_PREM_FC"),
                    PLOC_TRISM_PREM_BC: grid.jqGrid("getCell", sel_id, "PLOC_TRISM_PREM_BC"),
                }, "#locationForm");

                u.fill_form({
                    LINT_PLOC_SYS_ID: grid.jqGrid("getCell", sel_id, "PLOC_SYS_ID"),
                }, "#interestForm");
            },
               function (id) {

                   var grid = $scope.location_grid;
                   var sel_id = grid.jqGrid("getGridParam", "selrow");
                   var plocRiskID = grid.jqGrid("getCell", sel_id, "PLOC_SYS_ID");

                   if (plocRiskID == $("#PLOC_SYS_ID").val()) {

                       $("#LocationModal").modal();

                       //Hide covers not related to selected risk

                   }
                   else {

                       u.growl_warning("No Bond Risk selected, Please check and try again");

                   };


               }),



        //Location Interest
                $scope.interest_grid = u.default_grid("#gridInterest", "#gridInterestPager", "Location Interest",
            [
                      "Risk Code", "Risk Name", " Description", " SI FC", "SI BC ", " Premium FC", " Premium BC ", "Sub Const ",
                     "Plinth Found", "Plinth Found Amt", "Escalation", "Escalation Perc",
                      "Sys ID", "Risk No",
                    "Location ID", "Polh Sys ID", "Polh Doc No", "Endorsement No.", "TXN Status", "Int State",
                    "Int Status"

            ],
            [
                    { name: "LINT_RISK_CODE", index: "LINT_RISK_CODE", width: 150 },
                    { name: "LINT_RISK_NAME", index: "LINT_RISK_NAME", width: 150 },
                    //{ name: 'LINT_CURR_CODE', index: 'LINT_CURR_CODE', width: 150 },
                    //{ name: 'LINT_CURR_RATE', index: 'LINT_CURR_RATE', width: 150 },
                    { name: "LINT_DESC", index: "LINT_DESC", width: 150 },
                    { name: "LINT_SI_FC", index: "LINT_SI_FC", width: 150 },
                    { name: "LINT_SI_BC", index: "LINT_SI_BC", width: 150 },
                    { name: "LINT_PRM_FC", index: "LINT_PRM_FC", width: 150 },
                    { name: "LINT_PRM_BC", index: "LINT_PRM_BC", width: 150 },
                    { name: "LINT_SUBCONST", index: "LINT_SUBCONST", width: 150 },
                    { name: "LINT_PLIN_FOUND", index: "LINT_PLIN_FOUND", width: 150 },
                    { name: "LINT_PLIN_FOUND_AMT", index: "LINT_PLIN_FOUND_AMT", width: 150 },
                    { name: "LINT_ESCALATION", index: "LINT_ESCALATION", width: 150 },
                    { name: "LINT_ESC_PERC", index: "LINT_ESC_PERC", width: 150 },
                    { name: "LINT_SYS_ID", index: "LINT_SYS_ID", width: 150 },
                    { name: "LINT_RISK_NO", index: "LINT_RISK_NO", width: 150, sorttype: "int" },
                    { name: "LINT_PLOC_SYS_ID", index: "LINT_PLOC_SYS_ID", width: 150 },
                    { name: "LINT_POLH_SYS_ID", index: "LINT_POLH_SYS_ID", width: 150 },
                    { name: "LINT_POLH_DOC_NO", index: "LINT_POLH_DOC_NO", width: 150 },
                    { name: "LINT_POLH_END_NO", index: "LINT_POLH_END_NO", width: 150 },
                    { name: "LINT_TXN_STATUS", index: "LINT_TXN_STATUS", width: 150 },
                    { name: "LINT_RISK_STATE", index: "LINT_RISK_STATE", width: 150 },
                    { name: "LINT_STATUS", index: "LINT_STATUS", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.interest_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='LINT_RISK_CODE']").data("update", true);
                u.fill_form({
                    LINT_SYS_ID: grid.jqGrid("getCell", sel_id, "LINT_SYS_ID"),
                    LINT_RISK_CODE: grid.jqGrid("getCell", sel_id, "LINT_RISK_CODE"),
                    LINT_RISK_NAME: grid.jqGrid("getCell", sel_id, "LINT_RISK_NAME"),
                    LINT_RISK_NO: grid.jqGrid("getCell", sel_id, "LINT_RISK_NO"),
                    LINT_DESC: grid.jqGrid("getCell", sel_id, "LINT_DESC"),
                    LINT_SI_FC: grid.jqGrid("getCell", sel_id, "LINT_SI_FC"),
                    LINT_SI_BC: grid.jqGrid("getCell", sel_id, "LINT_SI_BC"),
                    LINT_PRM_FC: grid.jqGrid("getCell", sel_id, "LINT_PRM_FC"),
                    LINT_PRM_BC: grid.jqGrid("getCell", sel_id, "LINT_PRM_BC"),
                    LINT_SUBCONST: grid.jqGrid("getCell", sel_id, "LINT_SUBCONST"),
                    LINT_PLIN_FOUND: grid.jqGrid("getCell", sel_id, "LINT_PLIN_FOUND"),
                    LINT_PLIN_FOUND_AMT: grid.jqGrid("getCell", sel_id, "LINT_PLIN_FOUND_AMT"),
                    LINT_ESCALATION: grid.jqGrid("getCell", sel_id, "LINT_ESCALATION"),
                    LINT_ESC_PERC: grid.jqGrid("getCell", sel_id, "LINT_ESC_PERC"),

                }, "#interestForm");
                u.fill_form({
                    RCOV_RISK_SYS_ID: grid.jqGrid("getCell", sel_id, "LINT_SYS_ID"),
                }, "#coverForm");
            },
               function (id) {

                   var grid = $scope.interest_grid;
                   var sel_id = grid.jqGrid("getGridParam", "selrow");
                   var inteRiskID = grid.jqGrid("getCell", sel_id, "LINT_SYS_ID");

                   if (inteRiskID == $("#LINT_SYS_ID").val()) {

                       $("#RiskCoverModal").modal();

                       //Hide covers not related to selected risk

                   }
                   else {

                       u.growl_warning("No Bond Risk selected, Please check and try again");

                   };


               }),


        // Location Excess
        $scope.locationexcess_grid = u.default_grid("#grdLocationExcess", "#grdLocationExcessPager", "Location Excess",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount", "Loc ID", "Loc Risk No.", "Policy ID",
             "Created by", "Created date", "Status"],
            [
                { name: "EXS_CODE", index: "EXS_CODE", width: 150 },
                { name: "EXS_TYPE", index: "EXS_TYPE", width: 150 },
                { name: "EXS_NART", index: "EXS_NART", width: 150 },
                { name: "EXS_RATE", index: "EXS_RATE", hidden: false, width: 200 },
                { name: "EXS_AMOUNT", index: "EXS_AMOUNT", width: 150 },
                { name: "EXS_MIN_AMOUNT", index: "EXS_MIN_AMOUNT", width: 150 },
                { name: "EXS_MAX_AMOUNT", index: "EXS_MAX_AMOUNT", width: 150 },
                { name: "EXS_PLOC_SYS_ID", index: "EXS_PLOC_SYS_ID", width: 150 },
                { name: "EXS_PLOC_RISK_NO", index: "EXS_PLOC_RISK_NO", width: 150 },
                { name: "EXS_POLH_SYS_ID", index: "EXS_POLH_SYS_ID", width: 150 },
                { name: "EXS_CRTE_BY", index: "EXS_CRTE_BY", hidden: false, width: 200 },
                { name: "EXS_CRTE_DATE", index: "EXS_CRTE_DATE", hidden: false, width: 200 },
                { name: "EXS_STATUS", index: "EXS_STATUS", hidden: false, width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.locationexcess_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='EXS_CODE']").data("update", true);
                u.fill_form({
                    EXS_CODE: grid.jqGrid("getCell", sel_id, "EXS_CODE"),
                    EXS_TYPE: grid.jqGrid("getCell", sel_id, "EXS_TYPE"),
                    EXS_NART: grid.jqGrid("getCell", sel_id, "EXS_NART"),
                    EXS_RATE: grid.jqGrid("getCell", sel_id, "EXS_RATE"),
                    EXS_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_AMOUNT"),
                    EXS_MIN_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_MIN_AMOUNT"),
                    EXS_MAX_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_MAX_AMOUNT"),

                }, "#locationexcessForm");
            }),


        // Location Cover
        $scope.locationcover_grid = u.default_grid("#grdLocationCover", "#grdLocationCoverPager", "Location Cover",
            [" Code", "Type", "Rate", "SI FC", "SI BC", "Premium FC", "Premium BC", "Net Premium FC", "Net Premium BC", "Location ID", "Location Risk No.",
                "Policy ID", "Created by", "Created date", "Status"],
            [
                { name: "CVR_CODE", index: "CVR_CODE", width: 150 },
                { name: "CVR_TYPE", index: "CVR_TYPE", width: 150 },
                { name: "CVR_RATE", index: "CVR_RATE", width: 150 },
                { name: "CVR_SI_FC", index: "CVR_SI_FC", hidden: false, width: 200 },
                { name: "CVR_SI_BC", index: "CVR_SI_BC", width: 150 },
                { name: "CVR_GROSS_PREM_FC", index: "CVR_GROSS_PREM_FC", width: 150 },
                { name: "CVR_GROSS_PREM_BC", index: "CVR_GROSS_PREM_BC", width: 150 },
                { name: "CVR_NET_PREM_FC", index: "CVR_NET_PREM_FC", width: 150 },
                { name: "CVR_NET_PREM_BC", index: "CVR_NET_PREM_BC", width: 150 },
                { name: "CVR_PLOC_SYS_ID", index: "CVR_PLOC_SYS_ID", width: 150 },
                { name: "CVR_PLOC_RISK_NO", index: "CVR_PLOC_RISK_NO", width: 150 },
                { name: "CVR_POLH_SYS_ID", index: "CVR_POLH_SYS_ID", width: 150 },
                { name: "CVR_CRTE_BY", index: "CVR_CRTE_BY", hidden: false, width: 200 },
                { name: "CVR_CRTE_DATE", index: "CVR_CRTE_DATE", hidden: false, width: 200 },
                { name: "CVR_STATUS", index: "CVR_STATUS", hidden: false, width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.locationcover_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='CVR_CODE']").data("update", true);
                u.fill_form({
                    CVR_CODE: grid.jqGrid("getCell", sel_id, "CVR_CODE"),
                    CVR_TYPE: grid.jqGrid("getCell", sel_id, "CVR_TYPE"),
                    CVR_RATE: grid.jqGrid("getCell", sel_id, "CVR_RATE"),
                    CVR_SI_FC: grid.jqGrid("getCell", sel_id, "CVR_SI_FC"),
                    CVR_SI_BC: grid.jqGrid("getCell", sel_id, "CVR_SI_BC"),
                    CVR_GROSS_PREM_FC: grid.jqGrid("getCell", sel_id, "CVR_GROSS_PREM_FC"),
                    CVR_GROSS_PREM_BC: grid.jqGrid("getCell", sel_id, "CVR_GROSS_PREM_BC"),
                    CVR_NET_PREM_FC: grid.jqGrid("getCell", sel_id, "CVR_NET_PREM_FC"),
                    CVR_NET_PREM_BC: grid.jqGrid("getCell", sel_id, "CVR_NET_PREM_BC"),
                }, "#locationcoverForm");
            }),



        // Interest Excess
        $scope.interestexcess_grid = u.default_grid("#grdInterestExcess", "#grdInterestExcessPager", "Interest Excess",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount", "Interest ID", "Interest Risk No.", "Location ID",
            "Policy ID", "Created by", "Created date", "Status"],
            [
                { name: "EXS_CODE", index: "EXS_CODE", width: 150 },
                { name: "EXS_TYPE", index: "EXS_TYPE", width: 150 },
                { name: "EXS_NART", index: "EXS_NART", width: 150 },
                { name: "EXS_RATE", index: "EXS_RATE", hidden: false, width: 200 },
                { name: "EXS_AMOUNT", index: "EXS_AMOUNT", width: 150 },
                { name: "EXS_MIN_AMOUNT", index: "EXS_MIN_AMOUNT", width: 150 },
                { name: "EXS_MAX_AMOUNT", index: "EXS_MAX_AMOUNT", width: 150 },
                { name: "EXS_LINT_SYS_ID", index: "EXS_LINT_SYS_ID", width: 150 },
                { name: "EXS_LINT_RISK_NO", index: "EXS_LINT_RISK_NO", width: 150 },
                { name: "EXS_PLOC_SYS_ID", index: "EXS_PLOC_SYS_ID", width: 150 },
                { name: "EXS_POLH_SYS_ID", index: "EXS_POLH_SYS_ID", width: 150 },
                { name: "EXS_CRTE_BY", index: "EXS_CRTE_BY", hidden: false, width: 200 },
                { name: "EXS_CRTE_DATE", index: "EXS_CRTE_DATE", hidden: false, width: 200 },
                { name: "EXS_STATUS", index: "EXS_STATUS", hidden: false, width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.interestexcess_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='EXS_CODE']").data("update", true);
                u.fill_form({
                    EXS_CODE: grid.jqGrid("getCell", sel_id, "EXS_CODE"),
                    EXS_TYPE: grid.jqGrid("getCell", sel_id, "EXS_TYPE"),
                    EXS_NART: grid.jqGrid("getCell", sel_id, "EXS_NART"),
                    EXS_RATE: grid.jqGrid("getCell", sel_id, "EXS_RATE"),
                    EXS_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_AMOUNT"),
                    EXS_MIN_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_MIN_AMOUNT"),
                    EXS_MAX_AMOUNT: grid.jqGrid("getCell", sel_id, "EXS_MAX_AMOUNT"),

                }, "#interestexcessForm");
            }),


        // Interest Discount/Loading
        $scope.interestdiscloading_grid = u.default_grid("#grdInterestDiscloading", "#grdInterestDiscloadingPager", "Interest Discount/Loading",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount", "Interest ID", "Interest Risk No.", "Location ID",
                "Policy ID", "Created by", "Created date", "Status"],
            [
                { name: "DL_CODE", index: "DL_CODE", width: 150 },
                { name: "DL_TYPE", index: "DL_TYPE", width: 150 },
                { name: "DL_RATE", index: "DL_RATE", width: 150 },
                { name: "DL_AMT_BC", index: "DL_AMT_BC", hidden: false, width: 200 },
                { name: "DL_AMT_FC", index: "DL_AMT_FC", width: 150 },
                { name: "DL_PREM_BC", index: "DL_PREM_BC", width: 150 },
                { name: "DL_PREM_FC", index: "DL_PREM_FC", width: 150 },
                { name: "DL_LINT_SYS_ID", index: "DL_LINT_SYS_ID", width: 150 },
                { name: "DL_LINT_RISK_NO", index: "DL_LINT_RISK_NO", width: 150 },
                { name: "DL_PLOC_SYS_ID", index: "DL_PLOC_SYS_ID", width: 150 },
                { name: "DL_POLH_SYS_ID", index: "DL_POLH_SYS_ID", width: 150 },
                { name: "DL_CRTE_BY", index: "DL_CRTE_BY", hidden: false, width: 200 },
                { name: "DL_CRTE_DATE", index: "DL_CRTE_DATE", hidden: false, width: 200 },
                { name: "DL_STATUS", index: "DL_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.interestdiscloading_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    DL_CODE: grid.jqGrid("getCell", sel_id, "DL_CODE"),
                    DL_TYPE: grid.jqGrid("getCell", sel_id, "DL_TYPE"),
                    DL_RATE: grid.jqGrid("getCell", sel_id, "DL_RATE"),
                    DL_AMT_BC: grid.jqGrid("getCell", sel_id, "DL_AMT_BC"),
                    DL_AMT_FC: grid.jqGrid("getCell", sel_id, "DL_AMT_FC"),
                    DL_PREM_BC: grid.jqGrid("getCell", sel_id, "DL_PREM_BC"),
                    DL_PREM_FC: grid.jqGrid("getCell", sel_id, "DL_PREM_FC"),

                }, "#interestdiscloadingForm");
            }),


        // Interest Cover
        $scope.interestcover_grid = u.default_grid("#grdInterestCover", "#grdInterestCoverPager", "Interest Cover",
            [" Code", "Type", "Rate", "SI FC", "SI BC", "Premium FC", "Premium BC", "Net Premium FC", "Net Premium BC", "Interest ID", "Interest Risk No.", "Location ID",
                "Policy ID", "Created by", "Created date", "Status"],
            [
                { name: "CVR_CODE", index: "CVR_CODE", width: 150 },
                { name: "CVR_TYPE", index: "CVR_TYPE", width: 150 },
                { name: "CVR_RATE", index: "CVR_RATE", width: 150 },
                { name: "CVR_SI_FC", index: "CVR_SI_FC", hidden: false, width: 200 },
                { name: "CVR_SI_BC", index: "CVR_SI_BC", width: 150 },
                { name: "CVR_GROSS_PREM_FC", index: "CVR_GROSS_PREM_FC", width: 150 },
                { name: "CVR_GROSS_PREM_BC", index: "CVR_GROSS_PREM_BC", width: 150 },
                { name: "CVR_NET_PREM_FC", index: "CVR_NET_PREM_FC", width: 150 },
                { name: "CVR_NET_PREM_BC", index: "CVR_NET_PREM_BC", width: 150 },
                { name: "CVR_LINT_SYS_ID", index: "CVR_LINT_SYS_ID", width: 150 },
                { name: "CVR_LINT_RISK_NO", index: "CVR_LINT_RISK_NO", width: 150 },
                { name: "CVR_PLOC_SYS_ID", index: "CVR_PLOC_SYS_ID", width: 150 },
                { name: "CVR_POLH_SYS_ID", index: "CVR_POLH_SYS_ID", width: 150 },
                { name: "CVR_CRTE_BY", index: "CVR_CRTE_BY", hidden: false, width: 200 },
                { name: "CVR_CRTE_DATE", index: "CVR_CRTE_DATE", hidden: false, width: 200 },
                { name: "CVR_STATUS", index: "CVR_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.interestcover_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='CVR_CODE']").data("update", true);
                u.fill_form({
                    CVR_CODE: grid.jqGrid("getCell", sel_id, "CVR_CODE"),
                    CVR_TYPE: grid.jqGrid("getCell", sel_id, "CVR_TYPE"),
                    CVR_RATE: grid.jqGrid("getCell", sel_id, "CVR_RATE"),
                    CVR_SI_FC: grid.jqGrid("getCell", sel_id, "CVR_SI_FC"),
                    CVR_SI_BC: grid.jqGrid("getCell", sel_id, "CVR_SI_BC"),
                    CVR_GROSS_PREM_FC: grid.jqGrid("getCell", sel_id, "CVR_GROSS_PREM_FC"),
                    CVR_GROSS_PREM_BC: grid.jqGrid("getCell", sel_id, "CVR_GROSS_PREM_BC"),
                    CVR_NET_PREM_FC: grid.jqGrid("getCell", sel_id, "CVR_NET_PREM_FC"),
                    CVR_NET_PREM_BC: grid.jqGrid("getCell", sel_id, "CVR_NET_PREM_BC"),
                }, "#interestcoverForm");
            }),



        // Cover Grid
        $scope.cover_grid = u.default_grid("#gridAppCovers", "#gridAppCoversPager", "Cover",
            ["Cover Code", "Cover Name",
                "Cover Type", "Sum Insured FC", "Sum Insured BC", "Rate",
                    "Gross Premium FC", "Gross Premium BC", "Net Premium FC", "Net Premium BC",
                    "Discount Applicable", "Discount FC", "Discount BC", "Load Apllicable", "Load FC", "Load BC",
                    "Cover id", "Risk id", "Cover No.",
                    "Risk no", "Pol doc no", "End. no", "RI SI YN", "RI Premium YN",
                    "Rate Change", "SI Change", "Cover Level", "Premium Refund", "User Premium",
                    "RI App",
                    "Txn State", "Create By", "Create Date", "Modified By", "Modified Date",
                    "Record Status"],
            [
                { name: "RCOV_CODE", index: "RCOV_CODE", width: 150 },
                { name: "RCOV_NAME", index: "RCOV_NAME", width: 150 },
                { name: "COVER_TYPE", index: "COVER_TYPE", width: 150 },
                { name: "RCOV_SI_FC", index: "RCOV_SI_FC", width: 150 },
                { name: "RCOV_SI_BC", index: "RCOV_SI_BC", width: 150 },
                { name: "RCOV_RATE", index: "RCOV_RATE", width: 150 },
                { name: "RCOV_GROSS_PREM_FC", index: "RCOV_GROSS_PREM_FC", width: 150 },
                { name: "RCOV_GROSS_PREM_BC", index: "RCOV_GROSS_PREM_BC", width: 150 },
                { name: "RCOV_NET_PREM_FC", index: "RCOV_NET_PREM_FC", width: 150 },
                { name: "RCOV_NET_PREM_BC", index: "RCOV_NET_PREM_BC", width: 150 },

                { name: "RCOV_DISC_YN", index: "RCOV_DISC_YN", width: 150 },

                { name: "RCOV_DISC_FC", index: "RCOV_DISC_FC", width: 150 },
                { name: "RCOV_DISC_BC", index: "RCOV_DISC_BC", width: 150 },

                { name: "RCOV_LOAD_YN", index: "RCOV_LOAD_YN", width: 150 },

                { name: "RCOV_LOAD_FC", index: "RCOV_LOAD_FC", width: 150 },
                { name: "RCOV_LOAD_BC", index: "RCOV_LOAD_BC", width: 150 },

                { name: "RCOV_SYS_ID", index: "RCOV_SYS_ID", hidden: false, width: 150, sorttype: "int" },
                { name: "RCOV_RISK_SYS_ID", index: "RCOV_RISK_SYS_ID", hidden: false, width: 150, sorttype: "int" },
                { name: "RCOV_NO", index: "RCOV_NO", hidden: false, width: 150 },
                { name: "RCOV_RISK_NO", index: "RCOV_RISK_NO", hidden: false, width: 150 },
                { name: "RCOV_POLH_DOC_NO", index: "RCOV_POLH_DOC_NO", width: 150 },
                { name: "RPCOV_END_NO", index: "RPCOV_END_NO", width: 150 },
                { name: "RCOV_RI_SI_YN", index: "RCOV_RI_SI_YN", hidden: false, width: 150 },
                { name: "RCOV_RI_PREM_YN", index: "RCOV_RI_PREM_YN", hidden: false, width: 150 },

                { name: "COVER_RATE_CHANGE", index: "COVER_RATE_CHANGE", width: 150 },
                { name: "COVER_SI_CHANGE", index: "COVER_SI_CHANGE", width: 150 },
                { name: "COVER_LEVEL", index: "COVER_LEVEL", width: 150 },
                { name: "COVER_PREM_REFUND", index: "COVER_PREM_REFUND", width: 150 },
                { name: "COVER_USER_PREM", index: "COVER_USER_PREM", width: 150 },
                { name: "RCOV_RI_YN", index: "RCOV_RI_YN", width: 150 },
                //
                { name: "RCOV_TXN_STATE", index: "RCOV_TXN_STATE", width: 150 },
                { name: "RCOV_CRTE_BY", index: "RCOV_CRTE_BY", width: 150 },
                { name: "RCOV_CRTE_DATE", index: "RCOV_CRTE_DATE", width: 150 },
                { name: "RCOV_MOD_BY", index: "RCOV_MOD_BY", width: 150 },
                { name: "RCOV_MOD_DATE", index: "RCOV_MOD_DATE", width: 150 },
                { name: "RCOV_STATUS", index: "RCOV_STATUS", width: 100 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.cover_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='RCOV_SYS_ID']").data("update", true);
                u.fill_form({
                    RCOV_SYS_ID: grid.jqGrid("getCell", sel_id, "RCOV_SYS_ID"),
                    RCOV_RISK_SYS_ID: grid.jqGrid("getCell", sel_id, "RCOV_RISK_SYS_ID"),
                    RCOV_RISK_NO: grid.jqGrid("getCell", sel_id, "RCOV_RISK_NO"),
                    RCOV_POLH_DOC_NO: grid.jqGrid("getCell", sel_id, "RCOV_POLH_DOC_NO"),
                    RPCOV_END_NO: grid.jqGrid("getCell", sel_id, "RPCOV_END_NO"),
                    RCOV_CODE: grid.jqGrid("getCell", sel_id, "RCOV_CODE"),
                    RCOV_SI_FC: grid.jqGrid("getCell", sel_id, "RCOV_SI_FC"),

                    RCOV_SI_BC: grid.jqGrid("getCell", sel_id, "RCOV_SI_BC"),
                    RCOV_RATE: grid.jqGrid("getCell", sel_id, "RCOV_RATE"),
                    RCOV_GROSS_PREM_FC: grid.jqGrid("getCell", sel_id, "RCOV_GROSS_PREM_FC"),
                    RCOV_GROSS_PREM_BC: grid.jqGrid("getCell", sel_id, "RCOV_GROSS_PREM_BC"),
                    RCOV_NET_PREM_FC: grid.jqGrid("getCell", sel_id, "RCOV_NET_PREM_FC"),
                    RCOV_NET_PREM_BC: grid.jqGrid("getCell", sel_id, "RCOV_NET_PREM_BC"),
                    RCOV_RI_SI_YN: grid.jqGrid("getCell", sel_id, "RCOV_RI_SI_YN"),

                    RCOV_RI_PREM_YN: grid.jqGrid("getCell", sel_id, "RCOV_RI_PREM_YN"),
                    RCOV_TYPE: grid.jqGrid("getCell", sel_id, "RCOV_TYPE"),
                    RCOV_DISC_YN: grid.jqGrid("getCell", sel_id, "RCOV_DISC_YN"),
                    RCOV_DISC_FC: grid.jqGrid("getCell", sel_id, "RCOV_DISC_FC"),
                    RCOV_DISC_BC: grid.jqGrid("getCell", sel_id, "RCOV_DISC_BC"),
                    RCOV_LOAD_YN: grid.jqGrid("getCell", sel_id, "RCOV_LOAD_YN"),
                    RCOV_LOAD_FC: grid.jqGrid("getCell", sel_id, "RCOV_LOAD_FC"),

                    RCOV_LOAD_BC: grid.jqGrid("getCell", sel_id, "RCOV_LOAD_BC"),
                    RCOV_TXN_STATE: grid.jqGrid("getCell", sel_id, "RCOV_TXN_STATE"),
                    RCOV_CRTE_BY: grid.jqGrid("getCell", sel_id, "RCOV_CRTE_BY"),
                    RCOV_CRTE_DATE: grid.jqGrid("getCell", sel_id, "RCOV_CRTE_DATE"),
                    RCOV_MOD_BY: grid.jqGrid("getCell", sel_id, "RCOV_MOD_BY"),
                    RCOV_MOD_DATE: grid.jqGrid("getCell", sel_id, "RCOV_MOD_DATE"),
                    RCOV_STATUS: grid.jqGrid("getCell", sel_id, "RCOV_STATUS"),

                }, "#coverForm");
            }),


        // Risk Covers ****
        $scope.riskCovers_grid = u.default_grid("#gridAddNewCover", "#gridAddNewCoverPager", "Risk Covers",
            ["Code", "Name", "Sum Insured", "Deft Rate", "Deft Premium"],
            [
                { name: "PCV_COV_CODE", index: "PCV_COV_CODE", width: 150 },
                { name: "COVER_NAME", index: "COVER_NAME", width: 150 },
                { name: "PCV_SI", index: "PCV_SI", width: 150 },
                { name: "PCV_DEF_RATE", index: "PCV_DEF_RATE", width: 150 },
                { name: "PCV_DEF_PREM", index: "PCV_DEF_PREM", width: 150 },
            ],


             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid("getCell", sel_id, "PCV_COV_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", sel_id, "COVER_NAME"),
                    RCOV_RATE: grid.jqGrid("getCell", sel_id, "PCV_DEF_RATE"),
                    RCOV_SI_FC: grid.jqGrid("getCell", sel_id, "PCV_SI"),
                    RCOV_GROSS_PREM_FC: grid.jqGrid("getCell", sel_id, "PCV_DEF_PREM"),
                    RCOV_NET_PREM_FC: grid.jqGrid("getCell", sel_id, "PCV_DEF_PREM"),

                }, "#coverForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid("getCell", sel_id, "PCV_COV_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", sel_id, "COVER_NAME"),
                    RCOV_RATE: grid.jqGrid("getCell", sel_id, "PCV_DEF_RATE"),
                    RCOV_SI_FC: grid.jqGrid("getCell", sel_id, "PCV_SI"),
                    RCOV_GROSS_PREM_FC: grid.jqGrid("getCell", sel_id, "PCV_DEF_PREM"),
                    RCOV_NET_PREM_FC: grid.jqGrid("getCell", sel_id, "PCV_DEF_PREM"),

                }, "#coverForm");

                // hide modal on double click
                $("#AddNewCoverModal").modal("hide");

            }),


        // Premium Summary
        $scope.premium_grid = u.default_grid("#gridPremSum", "#gridPremSumPager", "Policy Premium Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Register Summary
        $scope.premiumreg_grid = u.default_grid("#gridPremReg", "#gridPremRegPager", "Policy Premium Register Summary",
            [
            "Pol sys ID", "Pol Doc. No.", "END No.", " COB", "Customer ID", "Office",
            "Insurane Source", "Business Source", "Treatty source", "UW Accounts Type", "Currency", "Rate", "FC Amount", "BC Amount",
            "Reference No.", "Acct Posting",
            "Post Date", "Created by", "Post Date", "Modified by", "Modified Date", "Status", "Customer Acct"
            ],
            [
                { name: "PR_POL_SYS_ID", index: "PR_POL_SYS_ID", width: 200 },
                { name: "PR_POL_DOC_NO", index: "PR_POL_DOC_NO", width: 200 },
                { name: "PR_END_NO", index: "PR_END_NO", width: 200 },
                { name: "PR_COB", index: "PR_COB", width: 200 },
                { name: "PR_CUST_CODE", index: "PR_CUST_CODE", width: 200 },
                { name: "PR_OFFICE", index: "PR_OFFICE", width: 200 },
                { name: "PR_INS_SOURCE", index: "PR_INS_SOURCE", width: 200 },
                { name: "PR_BUS_SOURCE", index: "PR_BUS_SOURCE", width: 200 },
                { name: "PR_TTY_SOURCE", index: "PR_TTY_SOURCE", width: 200 },
                { name: "PR_UWD_ACCT_TYPE", index: "PR_UWD_ACCT_TYPE", width: 200 },
                { name: "PR_CURRENCY", index: "PR_CURRENCY", width: 200 },
                { name: "PR_FX_RATE", index: "PR_FX_RATE", width: 200 },
                { name: "PR_FC_AMOUNT", index: "PR_FC_AMOUNT", width: 200 },
                { name: "PR_BC_AMOUNT", index: "PR_BC_AMOUNT", width: 200 },
                { name: "PR_TXN_REF", index: "PR_TXN_REF", width: 200 },
                { name: "PR_ACCT_YN", index: "PR_ACCT_YN", width: 200 },
                { name: "PR_POST_DATE", index: "PR_POST_DATE", width: 200 },
                { name: "PR_CRTE_BY", index: "PR_CRTE_BY", width: 200 },
                { name: "PR_CRTE_DATE", index: "PR_CRTE_DATE", width: 200 },
                { name: "PR_MOD_BY", index: "PR_MOD_BY", width: 200 },
                { name: "PR_MOD_DATE", index: "PR_MOD_DATE", width: 200 },
                { name: "PR_STATUS", index: "PR_STATUS", width: 200 },
                { name: "PR_CUST_ACCT", index: "PR_CUST_ACCT", width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Fees Summary
        $scope.fees_grid = u.default_grid("#gridPremRegFees", "#gridPremRegFeesPager", "Policy Premium Fees Summary",
            [
            "Pol sys ID", "Pol Doc. No.", "END No.", " COB", "Customer ID", "Office",
            "Insurane Source", "Business Source", "Treatty source", "UW Accounts Type", "Currency", "Rate", "FC Amount", "BC Amount",
            "Reference No.", "Acct Posting",
            "Post Date", "Created by", "Post Date", "Modified by", "Modified Date", "Status", "Customer Acct"
            ],
            [
                { name: "PR_POL_SYS_ID", index: "PR_POL_SYS_ID", width: 200 },
                { name: "PR_POL_DOC_NO", index: "PR_POL_DOC_NO", width: 200 },
                { name: "PR_END_NO", index: "PR_END_NO", width: 200 },
                { name: "PR_COB", index: "PR_COB", width: 200 },
                { name: "PR_CUST_CODE", index: "PR_CUST_CODE", width: 200 },
                { name: "PR_OFFICE", index: "PR_OFFICE", width: 200 },
                { name: "PR_INS_SOURCE", index: "PR_INS_SOURCE", width: 200 },
                { name: "PR_BUS_SOURCE", index: "PR_BUS_SOURCE", width: 200 },
                { name: "PR_TTY_SOURCE", index: "PR_TTY_SOURCE", width: 200 },
                { name: "PR_UWD_ACCT_TYPE", index: "PR_UWD_ACCT_TYPE", width: 200 },
                { name: "PR_CURRENCY", index: "PR_CURRENCY", width: 200 },
                { name: "PR_FX_RATE", index: "PR_FX_RATE", width: 200 },
                { name: "PR_FC_AMOUNT", index: "PR_FC_AMOUNT", width: 200 },
                { name: "PR_BC_AMOUNT", index: "PR_BC_AMOUNT", width: 200 },
                { name: "PR_TXN_REF", index: "PR_TXN_REF", width: 200 },
                { name: "PR_ACCT_YN", index: "PR_ACCT_YN", width: 200 },
                { name: "PR_POST_DATE", index: "PR_POST_DATE", width: 200 },
                { name: "PR_CRTE_BY", index: "PR_CRTE_BY", width: 200 },
                { name: "PR_CRTE_DATE", index: "PR_CRTE_DATE", width: 200 },
                { name: "PR_MOD_BY", index: "PR_MOD_BY", width: 200 },
                { name: "PR_MOD_DATE", index: "PR_MOD_DATE", width: 200 },
                { name: "PR_STATUS", index: "PR_STATUS", width: 200 },
                { name: "PR_CUST_ACCT", index: "PR_CUST_ACCT", width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Applicable Fees Summary
        $scope.appfees_grid = u.default_grid("#gridAppFees", "#gridAppFeesPager", "Applicable Fees Summary",
            ["FEE CODE", "FEE_NAME", "FC AMOUNT", "BC AMOUNT",
                    "POL SYS id", "POL DOC NO", "RISK SYS ID", "RISK DOC NO", "END NO.", "STATUS", "FEE SYS ID"],
            [
                { name: "APP_FEE_CODE", index: "APP_FEE_CODE", width: 150 },
                { name: "FEE_NAME", index: "FEE_NAME", width: 200 },
                { name: "APP_FEE_FC_AMOUNT", index: "APP_FEE_FC_AMOUNT", width: 150 },
                { name: "APP_FEE_BC_AMOUNT", index: "APP_FEE_BC_AMOUNT", width: 150 },

                { name: "APP_FEE_POL_SYS_ID", index: "APP_FEE_POL_SYS_ID", width: 150 },
                { name: "APP_FEE_POL_DOC_NO", index: "APP_FEE_POL_DOC_NO", width: 150 },
                { name: "APP_FEE_RK_SYS_ID", index: "APP_FEE_RK_SYS_ID", width: 150 },
                { name: "APP_FEE_RK_DOC_NO", index: "APP_FEE_RK_DOC_NO", width: 150 },
                { name: "APP_FEE_END_NO", index: "APP_FEE_END_NO", width: 150 },
                { name: "APP_FEE_STATUS", index: "APP_FEE_STATUS", width: 150 },
                { name: "APP_FEE_SYS_ID", index: "APP_FEE_SYS_ID", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Payment Summary
        $scope.payment_grid = u.default_grid("#gridPremPmt", "#gridPremPmtPager", "Policy Premium Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Share Summary
        $scope.coinsurance_grid = u.default_grid("#gridCoIns", "#gridCoInsPager", "Reinsurance Share Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // FAC In Premium Summary
        $scope.facinpremium_grid = u.default_grid("#gridFACINPremSum", "#gridFACINPremSumPager", "Treaty Apportionment Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),

        // Claim Summary
        $scope.cliams_grid = u.default_grid("#gridClaimsSummary", "#gridClaimsSummaryPager", "Policy Claim Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Agent/Broker Commission
        $scope.intermCom_grid = u.default_grid("#grdIntermediaryComm", "#grdIntermediaryCommPager", "Agent/Broker Commission",
            ["Agent-Broker Code", "Premium Amt FC", "Premium Amt BC", "Comm Per(%)", "Comm. Amount FC", "Comm. Amount BC", "Status",
             "Pols_sysID", "Pol_Doc No", "Pol_end_No", "COB", "Office", "Comm Date", "Created_By", "Created_Date",
             "Mod_date", "Mod_by", "Com_sys_ID", "Cust_Type"],
            [
                { name: "CMM_AGB_CODE", index: "CMM_AGB_CODE", width: 150 },
                { name: "CMM_PREM_AMT_FC", index: "CMM_PREM_AMT_FC", width: 150 },
                { name: "CMM_PREM_AMT_BC", index: "CMM_PREM_AMT_BC", width: 150 },

                { name: "CMM_COM_PERC", index: "CMM_COM_PERC", width: 150 },
                { name: "CMM_COM_AMT_FC", index: "CMM_COM_AMT_FC", width: 150 },
                { name: "CMM_COM_AMT_BC", index: "CMM_COM_AMT_BC", width: 150 },

                { name: "CMM_STATUS", index: "CMM_STATUS", hidden: false, width: 200 },

                { name: "CMM_POL_SYS_ID", index: "CMM_POL_SYS_ID", hidden: false, width: 200 },
                { name: "CMM_POL_DOC_NO", index: "CMM_POL_DOC_NO", hidden: false, width: 200 },
                { name: "CMM_END_NO", index: "CMM_END_NO", hidden: false, width: 200 },
                { name: "CMM_COB_CODE", index: "CMM_COB_CODE", hidden: false, width: 200 },
                { name: "CMM_OFFICE", index: "CMM_OFFICE", hidden: false, width: 200 },
                { name: "CMM_COM_DATE", index: "CMM_COM_DATE", hidden: false, width: 200 },
                { name: "CMM_CRTE_BY", index: "CMM_CRTE_BY", hidden: false, width: 200 },
                { name: "CMM_CRTE_DATE", index: "CMM_CRTE_DATE", hidden: false, width: 200 },
                { name: "CMM_MOD_BY", index: "CMM_MOD_BY", hidden: false, width: 200 },
                { name: "CMM_MOD_DATE", index: "CMM_MOD_DATE", hidden: false, width: 200 },
                { name: "CMM_SYS_ID", index: "CMM_SYS_ID", hidden: false, width: 200 },
                { name: "CMM_CUST_TYPE", index: "CMM_CUST_TYPE", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.intermCom_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CMM_AGB_CODE']").data("update", true);
                u.fill_form({
                    CMM_AGB_CODE: grid.jqGrid('getCell', sel_id, 'CMM_AGB_CODE'),
                    CMM_PREM_AMT_FC: grid.jqGrid('getCell', sel_id, 'CMM_PREM_AMT_FC'),
                    CMM_PREM_AMT_BC: grid.jqGrid('getCell', sel_id, 'CMM_PREM_AMT_BC'),
                    CMM_COM_PERC: grid.jqGrid('getCell', sel_id, 'CMM_COM_PERC'),
                    CMM_COM_AMT_FC: grid.jqGrid('getCell', sel_id, 'CMM_COM_AMT_FC'),
                    CMM_COM_AMT_BC: grid.jqGrid('getCell', sel_id, 'CMM_COM_AMT_BC'),

                }, "#agencycommForm");
            }),


        // Product Risk Grid ****
        $scope.prodRisks_grid = u.default_grid("#gridProdRisk", "#gridProdRiskPager", "Motor Risk",
            ["Code", "Name"],
            [
                { name: "RISK_CODE", index: "RISK_CODE", width: 150 },
                { name: "RISK_NAME", index: "RISK_NAME", width: 150 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid("getCell", sel_id, "RISK_CODE"),
                    PDT_NAME: grid.jqGrid("getCell", sel_id, "RISK_NAME"),

                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid("getCell", sel_id, "RISK_CODE"),
                    PDT_NAME: grid.jqGrid("getCell", sel_id, "RISK_NAME"),

                }, "#polheaderForm");

                // hide modal on double click
                $("#prodRiskLovModal").modal("hide");

            }),


        // Customer Dialog
                $scope.customer_grid = u.default_grid("#gridCustomer", "#gridCustomerPager", "Customer",
            ['Code', 'Full Name', 'Date of Birth', 'Address', 'Tel no', 'Mobile', 'Created date', 'Created by'],
            [
                { name: 'CUS_CODE', index: 'CUS_CODE', width: 150 },
                { name: 'CUS_OFFICIAL_NAME', index: 'CUS_OFFICIAL_NAME', width: 150 },
                { name: 'CUS_DOB', index: 'CUS_DOB', width: 150 },
                { name: 'CUS_ADDRS1', index: 'CUS_ADDRS1', width: 150 },
                { name: 'CUS_PHONE1', index: 'CUS_PHONE1', width: 150 },
                { name: 'CUS_MOBILE', index: 'CUS_MOBILE', width: 150 },
                { name: 'CUS_CRTE_DATE', index: 'CUS_CRTE_DATE', width: 150 },
                { name: 'CUS_CRTE_BY', index: 'CUS_CRTE_BY', width: 150 },
            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CUS_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                    CUS_DOB: grid.jqGrid('getCell', sel_id, 'CUS_DOB'),
                    CUS_ADDRS1: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS1'),
                    CUS_PHONE1: grid.jqGrid('getCell', sel_id, 'CUS_PHONE1'),
                    CUS_MOBILE: grid.jqGrid('getCell', sel_id, 'CUS_MOBILE'),
                    CUS_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_DATE'),
                    CUS_CRTE_BY: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_BY'),
                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CUS_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                    CUS_ADDRS1: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS1'),
                    CUS_PHONE1: grid.jqGrid('getCell', sel_id, 'CUS_PHONE1'),
                    CUS_MOBILE: grid.jqGrid('getCell', sel_id, 'CUS_MOBILE'),
                    CUS_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_DATE'),
                    CUS_CRTE_BY: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_BY'),
                }, "#polheaderForm");

                // hide modal on double click
                $("#customerLovModal").modal('hide');

            }),


        $scope.saving = false;


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
        }); /*----------------------
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
                    $scope.lov.call_dialog("Select Company", "get_lov_company", $scope.dialog_data);
                    break;
                case "btn_channel":
                    $scope.lov.call_dialog("Select Channel", "get_lov_channel", $scope.dialog_data);
                    break;
                case "btn_office":
                    $scope.lov.call_dialog("Select Office", "get_lov_office", $scope.dialog_data);
                    break;
                case "btn_product_type":
                    $scope.lov.call_dialog("Select Product Type", "get_lov_product_type", $scope.dialog_data);
                    break;
                case "btn_cover_type":
                    $scope.lov.call_dialog("Select Cover", "get_lov_cover_type", $scope.dialog_data);
                    break;
                case "btn_insurance_source":
                    $scope.lov.call_dialog("Select Insurance Source", "get_lov_ins_source", $scope.dialog_data);
                    break;
                case "btn_broker_agent":
                    $scope.lov.call_dialog("Select Broker/Agent", "get_lov_broker_agent", $scope.dialog_data);
                    break;
                case "btn_business_source":
                    $scope.lov.call_dialog("Select Business Source", "get_lov_business_source", $scope.dialog_data);
                    break;
                case "btn_customer":
                    $scope.lov.call_dialog("Select Customer", "get_lov_customer", $scope.dialog_data);
                    break;
                case "btn_base_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_make_model":
                    $scope.lov.call_dialog("Select Make & Model", "get_lov_makemodel", $scope.dialog_data);
                    break;
                case "btn_risk":
                    $scope.lov.call_dialog("Select Risk", "get_lov_motor_risks", $scope.dialog_data);
                    break;
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer type", "get_lov_customertypes", $scope.dialog_data);
                    break;
                case "btn_area":
                    $scope.lov.call_dialog("Select Area", "get_lov_area", $scope.dialog_data);
                    break;
                case "btn_location":
                    $scope.lov.call_dialog("Select Location", "get_lov_location", $scope.dialog_data);
                    break;
                case "btn_occupancy":
                    $scope.lov.call_dialog("Select Occupancy", "get_lov_occupancy", $scope.dialog_data);
                    break;
            }
        }); /*--------------------------------------------------
        * Retrieving customers on calling function
        *------------------------------------------------*/

        $("#btnQueryCustomers").on('click', function () {
            getProductRiskLov();
        });


        $("#btn_CustomersLov").on('click', function () {

            $("#customerLovModal").modal();

        });


        /*---------------------------
         * Search Customers
         *-------------------------*/
        $("#btnQueryCustomers").click(function () {
            var queryTxt = $("#treatySearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_customer(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.customer_grid.jqGrid("clearGridData");
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
                $scope.customer_grid.jqGrid("clearGridData");

                //fetch all regions
                s.get_customers(function (regions) {
                    for (var i in regions) {
                        $scope.customer_grid.addRowData(regions[i].CUS_CODE, regions[i]);
                    }
                });
            }

        }); /*--------------------------------------------------
        * add product base on class of business
        *------------------------------------------------*/
        //
        function getProductRiskLov() {
            /*
                obtain parameter for our request
            */
            var prodRiskData = {
                PRD_CODE: $("#POLH_CLASS_CODE").val(),
            }; //
            var grid = $scope.prodRisks_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.getProdtRisk(prodRiskData, function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.prodRisks_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        $scope.prodRisks_grid.addRowData(result[i]["RISK_CODE"], result[i]);
                    }
                }
            });
        }

        /*--------------------------------------------------
      * Retrieving products on calling getProductRiskLov function
      *------------------------------------------------*/

        $("#btnQueryProductRisk").on("click", function () {
            getProductRiskLov();
        });

        /*--------------------------------------------------
       * Getting product base on Class of Business
       *------------------------------------------------*/

        $("#btn_ProductRisk").on("click", function () {

            if ($("#POLH_CLASS_CODE").val() == "") {

                u.growl_warning("Product Code is empty, Please check and try again");
            }
            else {

                $("#prodRiskLovModal").modal();

            }

        });


        /*--------------------------------------------------
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_cover").on("click", function () {

            if (u.form_validation("#coverForm")) {

                if ($("input[name='RCOV_CODE']").val() === "") {
                    u.modal_alert("Please Select Risk Cover");
                }

                u.modal_confirmation("Are you sure you want to add the Cover?", function () {

                    /*
                   obtain parameter for our request
                */
                    var productRiskData = {

                        PRD_CODE: $("#POLH_CLASS_CODE").val(),
                        //PRD_CV_DFT: 'Y',              
                        RCOV_CODE: $("#RCOV_CODE").val(),

                    }; //

                    var grid = $scope.cover_grid;

                    var rowIds = grid.jqGrid("getDataIDs");

                    //declare array to contain the codes to varify
                    var CodeArray = [];

                    // iterate through the rows in the grid and add Covers to Array
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        //get value of the cell or column in an array
                        var coverCode = grid.jqGrid("getCell", currRow, "RCOV_CODE");

                        var RiskCode = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                        var riskCov = coverCode + RiskCode;

                        // alert(riskCov);
                        CodeArray.push(riskCov);
                    }

                    //send parameters and get Default covers from the database
                    s.getAddRiskCovers(productRiskData, function (result) {
                        if (result && result.length && result.length > 0) {

                            for (var i in result) {

                                //alert(JSON.stringify(result));

                                result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                                result[i]["RCOV_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                                result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];

                                result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                                result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                                result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                                result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                                result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                                result[i]["RCOV_RISK_SYS_ID"] = $("#LINT_SYS_ID").val();
                                result[i]["RCOV_RISK_NO"] = $("#LINT_RISK_NO").val();
                                //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                                var deftCoverCode = result[i].RCOV_CODE;
                                var newRiskCode = $("#LINT_SYS_ID").val();

                                var verifyRiskCover = deftCoverCode + newRiskCode; //alert(verifyRiskCover);

                                //add if Cover is not found in the Grid//

                                if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                                    //fill in default covers if not in the grid

                                    $scope.cover_grid.addRowData(result[i]["RCOV_CODE"], result[i]);
                                    u.hide_confirm();
                                    u.growl_success("Risk Cover successfully added");
                                }
                                else {
                                    u.hide_confirm();
                                    u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);

                                }
                            }
                            //

                            SumCoverAmounts();

                        }
                        else {
                            u.hide_confirm();
                            u.growl_error("Error occured, please check and try again");
                        }
                    });
                });

            } else {
                u.hide_confirm();
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------------------------
       *get Risks Cover lists fucnction
       *------------------------------------------------*/
        //
        function getRiskCoversLov() {

            /*
                obtain parameter for our request
            */
            var RiskCoverData = {

                PRD_CODE: $("#POLH_CLASS_CODE").val(),
            }; //
            var grid = $scope.riskCovers_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.getRiskCoversLOV(RiskCoverData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.riskCovers_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {

                        $scope.riskCovers_grid.addRowData(result[i]["RCOV_CODE"], result[i]);
                    }
                }
            });
        }


        /*--------------------------------
        *Query Cover Lov
        *------------------------------*/
        //
        $("#btnQueryRiskCoverLov").on("click", function () {

            getRiskCoversLov();
        });


        /*--------------------------------
        *Open Risk Covers LOV Modal
        *------------------------------*/
        //
        $("#btnAddNewCover").on("click", function () {

            if ($("#POLH_CLASS_CODE").val() == "") {

                u.growl_warning("Product Code is empty, Please check and try again");
            }
            else {

                $("#AddNewCoverModal").modal();

            }

        });



        /*----------------------------------------------------
         * Remove record or Mark for deletion from Cover Grid
         *---------------------------------------------------*/
        //
        $("#btn_remove_cover").on("click", function () {

            if (u.grid_empty($scope.cover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "RCOV_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "RCOV_NO");

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

                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "RCOV_STATUS", "D");
                    $("#" + row_id, "#grdCover").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdCover").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "RCOV_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Cover Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_cover").on("click", function () {

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("Products Cover grid is empty");

            if (u.form_validation("#coverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Product Cover?", function () {

                    var grid = $scope.cover_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "RCOV_CODE");

                    if (code === $("input[name='RCOV_CODE']").val()) {
                        var data = u.parse_form("#coverForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Product Cover updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
        * exporting of the grid to excel Condition & Clauses
        *----------------------------------*/
        $("#export-cover-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cover_grid, ["ID"], "Cover_List_Excel");
        });


        /*-----------------------------------
        * Agent/Broker Commission
        *----------------------------------*/

        $("#btn_agent_comm").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#agentcommModal").modal();

        });


        /*--------------------------------------------------
  * Adding Agency/Broker Details
  *------------------------------------------------*/
        //
        $("#btn_add_agencycomm").on('click', function () {

            if (u.form_validation("#agencycommForm")) {

                //if ($("input[name='CMM_AGB_CODE']").val() === "") return u.modal_alert("Please Enter Agency/Broker No");

                u.modal_confirmation("Are you sure you want to add the Agency/Broker Details?", function () {


                    var rowIds = $scope.intermCom_grid.jqGrid('getDataIDs');

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

                        var cellValue = $scope.intermCom_grid.jqGrid('getCell', currRow, 'CMM_AGB_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CMM_AGB_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#agencycommForm");
                        FormData.CMM_END_NO = 0;
                        FormData.CMM_POLH_DOC_NO = 0;
                        FormData.CMM_COB_CODE = $("#POLH_CLASS_CODE").val();
                        FormData.CMM_OFFICE = $("#POLH_OFF_CODE").val();
                        FormData.CMM_STATUS = "U";
                        FormData.CMM_CRTE_BY = "Admin";
                        FormData.CMM_CRTE_DATE = u.get_date();
                        FormData.CMM_COM_DATE = u.get_date();
                        $scope.intermCom_grid.addRowData(FormData.CMM_AGB_CODE, FormData);

                        //
                        $('#CMM_AGB_CODE').val("");
                        $('#CMM_AGB_NAME').val("");
                        $('#CMM_COM_PERC').val("");
                        u.hide_confirm();
                        //get commission Amounts
                        calculateIntermediaryComm();
                        //
                        u.growl_success("Intermediary successfully added to grid");


                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Intermediary with code " + cellValue + " Already exists");
                    }
                });

            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_agencycomm").on('click', function () {

            if (u.grid_empty($scope.intermCom_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.intermCom_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CMM_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CMM_AGB_CODE');

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

                    grid.jqGrid('setCell', row_id, 'CMM_STATUS', 'D');
                    $('#' + row_id, '#grdIntermediaryComm').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdIntermediaryComm').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CMM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_agencycomm").on('click', function () {

            if (u.grid_empty($scope.intermCom_grid)) return u.growl_info("Commission grid is empty");

            if (u.form_validation("#agencycommForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    var grid = $scope.intermCom_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CMM_COB_CODE");

                    if (code === $("input[name='CMM_COB_CODE']").val()) {
                        var data = u.parse_form("#agencycommForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Agency/Broker updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        $("#btn_risk_cover").click(function () {
            var grid = jQuery("#gridInterest");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#RiskCoverModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }

        });


        $("#btn_open_location_details").click(function () {
            if (u.form_validation("#polheaderForm")) {
                $("#LocationModal").modal();
            }
            else {
                u.growl_warning("Please fill the Policy Header form and try again");
            };
            //$("#LocationModal").modal();
        });


        $("#btn_open_location_update").click(function () {
            var grid = jQuery("#gridPLoc");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#LocationModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });



        /*--------------------------------------------------
          * add Location
          *------------------------------------------------*/
        //
        $("#btn_add_location_details").on("click", function () {

            if (u.form_validation("#locationForm")) {

                //if ($("input[name='PLOC_AREA_CODE']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#PLOC_SYS_ID").val("");

                if ($("#PLOC_SYS_ID").val() == "") {
                    RetnSequenceNo("FIRE_LOCRISK_SEQ", getVehSeqNo);
                    function getVehSeqNo(data) {
                        $("#PLOC_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Location Details?", function () {

                    var rowIds = $scope.location_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.location_grid.jqGrid("getCell", currRow, "PLOC_AREA_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#PLOC_AREA_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#locationForm");
                        FormData.PLOC_STATUS = "U";
                        FormData.PLOC_RIEML = "Y";
                        FormData.PLOC_CRTE_BY = "Admin";
                        FormData.PLOC_CRTE_DATE = u.get_date();
                        $scope.location_grid.addRowData(FormData.PLOC_AREA_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Location successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Location with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Location Grid
        *---------------------------------------------------*/
        //
        $("#btn_remove_location_details").on("click", function () {

            if (u.grid_empty($scope.location_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.location_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "PLOC_STATUS");

            var LocRiskNo = grid.jqGrid("getCell", row_id, "PLOC_SYS_ID");

            var covGrid = $scope.cover_grid;

            var covRowIds = covGrid.jqGrid("getDataIDs");

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

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array
                        var InterestRiskId = covGrid.jqGrid("getCell", covCurrRow, "LINT_SYS_ID");

                        var InterestRiskNo = covGrid.jqGrid("getCell", covCurrRow, "LINT_PLOC_SYS_ID");

                        var getCovRiskID = covGrid.jqGrid("getCell", covCurrRow, "RCOV_RISK_SYS_ID");

                        if (LocRiskNo == InterestRiskNo && InterestRiskId == getCovRiskID) {

                            covGrid.jqGrid("delRowData", covCurrRow);
                        }
                    }

                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var InterestRiskId = covGrid.jqGrid("getCell", covCurrRow, "LINT_SYS_ID");

                        var InterestRiskNo = covGrid.jqGrid("getCell", covCurrRow, "LINT_PLOC_SYS_ID");

                        var getCovRiskID = covGrid.jqGrid("getCell", covCurrRow, "RCOV_RISK_SYS_ID");

                        if (LocRiskNo == InterestRiskNo && InterestRiskId == getCovRiskID) {

                            covGrid.jqGrid("setCell", covCurrRow, "RCOV_STATUS", "D");
                            $("#" + covCurrRow, "#gridAppCovers").css({ color: "red" });
                        }
                    }
                    covGrid.jqGrid("setCell", covCurrRow, "RCOV_STATUS", "D");
                    $("#" + covCurrRow, "#gridAppCovers").css({ color: "red" });
                    grid.jqGrid("setCell", row_id, "LINT_STATUS", "D");
                    $("#" + row_id, "#gridInterest").css({ color: "red" });

                    grid.jqGrid("setCell", row_id, "PLOC_STATUS", "D");
                    $("#" + row_id, "#gridPLoc").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#gridPLoc").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "PLOC_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Location Grid
        *------------------------------*/
        //
        $("#btn_update_location_details").on("click", function () {

            if (u.grid_empty($scope.location_grid)) return u.growl_info("Location grid is empty");

            if (u.form_validation("#locationForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Location?", function () {

                    var grid = $scope.location_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "PLOC_RISK_NO");

                    if (code === $("#PLOC_RISK_NO").val()) {
                        var data = u.parse_form("#locationForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Location Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel Location
         *----------------------------------*/
        $("#export-location-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.location_grid, ["ID"], "Fire_Location_List_Excel");
        });


        /*--------------------------------------------------
*   Location Excess 
*------------------------------------------------*/

        $("#btn_open_location_excess").click(function () {
            var grid = jQuery("#gridPLoc");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#locationExcessModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });

        // Adding
        $("#btn_add_loc_excess").on("click", function () {

            if (u.form_validation("#locationexcessForm")) {

                //if ($("input[name='EXS_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Location Excess Details?", function () {

                    var rowIds = $scope.locationexcess_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.locationexcess_grid.jqGrid("getCell", currRow, "EXS_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#EXS_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#locationexcessForm");
                        FormData.EXS_STATUS = "U";
                        FormData.EXS_CRTE_BY = "Admin";
                        FormData.EXS_CRTE_DATE = u.get_date();
                        $scope.locationexcess_grid.addRowData(FormData.EXS_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Location Excess successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Location Excess with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });

        // Deleting
        $("#btn_remove_loc_excess").on("click", function () {

            if (u.grid_empty($scope.locationexcess_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.locationexcess_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "EXS_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "EXS_CODE");

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
                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "EXS_STATUS", "D");
                    $("#" + row_id, "#grdLocationExcess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdLocationExcess").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "EXS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });

        // Updating
        $("#btn_update_loc_excess").on("click", function () {

            if (u.grid_empty($scope.locationexcess_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#locationexcessForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.locationexcess_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

                    if (code === $("input[name='EXS_CODE']").val()) {
                        var data = u.parse_form("#locationexcessForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Risk Excess updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*--------------------------------------------------
*   Location Cover 
*------------------------------------------------*/
        $("#btn_open_location_cover").click(function () {
            var grid = jQuery("#gridPLoc");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#locationCoverModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });

        // Adding
        $("#btn_add_loc_cover").on("click", function () {

            if (u.form_validation("#locationcoverForm")) {

                //if ($("input[name='CVR_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Location Cover Details?", function () {

                    var rowIds = $scope.locationcover_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.locationcover_grid.jqGrid("getCell", currRow, "CVR_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#CVR_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#locationcoverForm");
                        FormData.CVR_STATUS = "U";
                        FormData.CVR_CRTE_BY = "Admin";
                        FormData.CVR_CRTE_DATE = u.get_date();
                        $scope.locationcover_grid.addRowData(FormData.CVR_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Location Cover successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Location Cover with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });

        // Deleting
        $("#btn_remove_loc_cover").on("click", function () {

            if (u.grid_empty($scope.locationcover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.locationcover_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "CVR_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "EXS_CODE");

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
                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "CVR_STATUS", "D");
                    $("#" + row_id, "#grdLocationCover").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdLocationCover").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "CVR_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });

        // Updating
        $("#btn_update_loc_cover").on("click", function () {

            if (u.grid_empty($scope.locationcover_grid)) return u.growl_info("Location Cover grid is empty");

            if (u.form_validation("#locationcoverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.locationcover_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CVR_CODE");

                    if (code === $("input[name='CVR_CODE']").val()) {
                        var data = u.parse_form("#locationcoverForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Location Cover updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });




        /*--------------------------------------------------
* Interest Risk modal dialog
*------------------------------------------------*/
        //
        $("#btn_open_location_interest").click(function () {

            var grid = $scope.location_grid;
            var sel_id = grid.jqGrid("getGridParam", "selrow");
            var RiskID = grid.jqGrid("getCell", sel_id, "PLOC_SYS_ID");

            if (RiskID == $("#PLOC_SYS_ID").val()) {

                $("#LocationInterestModal").modal();
                //Hide covers not related to selected risk
                //$scope.hideShowCovers();
            }
            else {
                u.growl_warning("No Location Risk selected, Please check and try again");
            };

        });

        /*--------------------------------------------------
         * add Interest
         *------------------------------------------------*/
        //
        $("#btn_add_interest").on("click", function () {

            if (u.form_validation("#interestForm")) {

                //if ($("input[name='LINT_RISK_CODE']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#LINT_SYS_ID").val("");

                if ($("#LINT_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_LOCINT", getVehSeqNo);
                    function getVehSeqNo(data) {
                        $("#LINT_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Interest Details?", function () {

                    var rowIds = $scope.interest_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.interest_grid.jqGrid("getCell", currRow, "LINT_RISK_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#LINT_RISK_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#interestForm");
                        FormData.LINT_STATUS = "U";
                        FormData.LINT_SUBCONST = ($("#LINT_SUBCONST").is(':checked')) ? 'Y' : 'N';
                        FormData.LINT_PLIN_FOUND = ($("#LINT_PLIN_FOUND").is(':checked')) ? 'Y' : 'N';
                        FormData.LINT_PLIN_FOUND_AMT = ($("#LINT_PLIN_FOUND_AMT").is(':checked')) ? 'Y' : 'N';
                        $scope.interest_grid.addRowData(FormData.LINT_RISK_CODE, FormData);

                        //Add defaulft covers afer adding the Risk
                        getDefaultRiskCovers();

                        u.hide_confirm();
                        u.growl_success("Interest successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Interest with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
       * Remove record or Mark for deletion from Interest Grid
       *---------------------------------------------------*/
        //
        $("#btn_remove_interest").on("click", function () {

            if (u.grid_empty($scope.interest_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.interest_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "LINT_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "LINT_RISK_CODE");

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

                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "LINT_STATUS", "D");
                    $("#" + row_id, "#gridInterest").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#gridInterest").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "LINT_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Interest Grid
        *------------------------------*/
        //
        $("#btn_update_interest").on("click", function () {

            if (u.grid_empty($scope.interest_grid)) return u.growl_info("Interest grid is empty");

            if (u.form_validation("#interestForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Interest?", function () {

                    var grid = $scope.interest_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "LINT_RISK_CODE");

                    if (code === $("input[name='LINT_RISK_CODE']").val()) {
                        var data = u.parse_form("#interestForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel Location
         *----------------------------------*/
        $("#export-interest-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.interest_grid, ["ID"], "Interest_List_Excel");
        });


        /*--------------------------------------------------
*   Interest Excess 
*------------------------------------------------*/
        $("#btn_open_interest_excess").click(function () {
            var grid = jQuery("#gridInterest");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#interestExcessModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });
        // Adding to Grid
        $("#btn_add_interest_excess").on("click", function () {

            if (u.form_validation("#interestexcessForm")) {

                //if ($("input[name='EXS_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Location Excess Details?", function () {

                    var rowIds = $scope.interestexcess_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.interestexcess_grid.jqGrid("getCell", currRow, "EXS_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#EXS_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#interestexcessForm");
                        FormData.EXS_STATUS = "U";
                        FormData.EXS_CRTE_BY = "Admin";
                        FormData.EXS_CRTE_DATE = u.get_date();
                        $scope.interestexcess_grid.addRowData(FormData.EXS_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Interest Excess successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Interest Excess with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });

        // Deleting
        $("#btn_remove_interest_excess").on("click", function () {

            if (u.grid_empty($scope.interestexcess_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.interestexcess_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "EXS_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "EXS_CODE");

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
                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "EXS_STATUS", "D");
                    $("#" + row_id, "#grdInterestExcess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdInterestExcess").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "EXS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });

        // Updating
        $("#btn_update_loc_excess").on("click", function () {

            if (u.grid_empty($scope.interestexcess_grid)) return u.growl_info("Interest Excess grid is empty");

            if (u.form_validation("#interestexcessForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.interestexcess_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

                    if (code === $("input[name='EXS_CODE']").val()) {
                        var data = u.parse_form("#interestexcessForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Interest Excess updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*--------------------------------------------------
*   Interest Cover 
*------------------------------------------------*/
        $("#btn_open_interest_cover").click(function () {
            var grid = jQuery("#gridInterest");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#interestCoverModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });
        // Adding to Grid
        $("#btn_add_interest_cover").on("click", function () {

            if (u.form_validation("#interestcoverForm")) {

                //if ($("input[name='CVR_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Location Cover Details?", function () {

                    var rowIds = $scope.interestcover_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.interestcover_grid.jqGrid("getCell", currRow, "CVR_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#CVR_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#interestcoverForm");
                        FormData.CVR_STATUS = "U";
                        FormData.CVR_CRTE_BY = "Admin";
                        FormData.CVR_CRTE_DATE = u.get_date();
                        $scope.interestcover_grid.addRowData(FormData.CVR_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Interest Cover successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Interest Cover with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });

        // Deleting
        $("#btn_remove_interest_cover").on("click", function () {

            if (u.grid_empty($scope.interestcover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.interestcover_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "CVR_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "CVR_CODE");

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
                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "CVR_STATUS", "D");
                    $("#" + row_id, "#grdInterestCover").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdInterestCover").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "CVR_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });

        // Updating
        $("#btn_update_interest_cover").on("click", function () {

            if (u.grid_empty($scope.interestcover_grid)) return u.growl_info("Interest Cover grid is empty");

            if (u.form_validation("#interestcoverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.interestcover_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CVR_CODE");

                    if (code === $("input[name='CVR_CODE']").val()) {
                        var data = u.parse_form("#interestcoverForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Interest Cover updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*--------------------------------------------------
*  Interest Discount/Loading 
*------------------------------------------------*/
        $("#btn_open_interest_discloading").click(function () {
            var grid = jQuery("#gridInterest");
            var sel_row = grid.jqGrid("getGridParam", "selrow");
            var count = sel_row.length;
            if (count > 0) {
                $("#interestDiscloadingModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });
        // Adding to Grid
        $("#btn_add_interest_discloading").on("click", function () {

            if (u.form_validation("#interestdiscloadingForm")) {

                //if ($("input[name='DL_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Risk Discount/Loading Details?", function () {


                    var rowIds = $scope.interestdiscloading_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.interestdiscloading_grid.jqGrid("getCell", currRow, "DL_CODE");

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DL_CODE").val(), Code) < 0) {

                        var FormData = u.parse_form("#interestdiscloadingForm");
                        FormData.DL_STATUS = "U";
                        FormData.DL_CRTE_BY = "Admin";
                        FormData.DL_CRTE_DATE = u.get_date();
                        $scope.interestdiscloading_grid.addRowData(FormData.DL_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Interest Discount/Loading successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Interest Discount/Loading with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });

        // Deleting
        $("#btn_remove_interest_discloading").on("click", function () {

            if (u.grid_empty($scope.interestdiscloading_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.interestdiscloading_grid;

            var row_id = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", row_id, "DL_STATUS");

            var Code = grid.jqGrid("getCell", row_id, "DL_CODE");

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
                    grid.jqGrid("delRowData", row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", row_id, "DL_STATUS", "D");
                    $("#" + row_id, "#grdInterestDiscloading").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + row_id, "#grdInterestDiscloading").css({ color: "black" });
                    grid.jqGrid("setCell", row_id, "DL_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });

        // Updating
        $("#btn_update_interest_discloading").on("click", function () {

            if (u.grid_empty($scope.interestdiscloading_grid)) return u.growl_info("DIscount & Loading grid is empty");

            if (u.form_validation("#interestdiscloadingForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Discount/Loading?", function () {

                    var grid = $scope.interestdiscloading_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "DL_CODE");

                    if (code === $("input[name='DL_CODE']").val()) {
                        var data = u.parse_form("#interestdiscloadingForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Risk Discount/Loading updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on("click", function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/
            var Pol_Txn_State = $("#POLH_TXN_STATE").val();
            if (Pol_Txn_State === "C") return u.growl_warning("The Policy is already Confirmed, Please unconfirm before saving");
            if (Pol_Txn_State === "P") return u.growl_warning("The Policy is Approved, You cannot save the Policy");


            if (Pol_Txn_State === "" || Pol_Txn_State === "S") {

                if (!u.form_validation("#polheaderForm")) {
                    return u.growl_warning("Please fill the fields that are marked red");
                }

                if (u.grid_empty($scope.cover_grid)) {
                    return u.growl_warning("Please add Risk Cover");
                }

                if (u.grid_empty($scope.location_grid)) {
                    return u.growl_warning("Please add Location Details");
                }

                if (u.grid_empty($scope.interest_grid)) {
                    return u.growl_warning("Please add Interest Details");
                }

                u.modal_confirmation("Are you sure you want to save?", function (e) {

                    var polhData = u.parse_form("#polheaderForm");

                    polhData.POLH_STATUS = "U";
                    polhData.POLH_TXN_STATE = "S";
                    polhData.POLH_END_NO = 0;

                    polhData.INS_UWD_FIRE_LOCRISK = u.get_grid_data($scope.location_grid);

                    polhData.INS_UWD_FIRE_LOCINT = u.get_grid_data($scope.interest_grid);

                    var INS_UWD_RISK_COVERS = u.get_grid_data($scope.cover_grid);

                    for (var i in polhData.INS_UWD_FIRE_LOCINT) {
                        //loop through every risk and obtain the sys_id of the risk
                        var id = polhData.INS_UWD_FIRE_LOCINT[i]["LINT_SYS_ID"];
                        polhData.INS_UWD_FIRE_LOCINT[i]["INS_UWD_RISK_COVERS"] = [];
                        for (var y in INS_UWD_RISK_COVERS) {
                            //find covers which have the same the same risk sys_id
                            if (INS_UWD_RISK_COVERS[y]["RCOV_RISK_SYS_ID"] === id) {
                                polhData.INS_UWD_FIRE_LOCINT[i]["INS_UWD_RISK_COVERS"].push(INS_UWD_RISK_COVERS[y]);
                            }
                        }

                    }

                    console.log(polhData);

                    polhData.INS_UWD_INTERMEDIARY_COMM = u.get_grid_data($scope.intermCom_grid);

                    if (!$scope.saving) {
                        $scope.saving = true;
                        s.save_policy(polhData, function (responseData) {
                            $scope.saving = false;
                            u.hide_confirm();
                            if (responseData.state) {
                                //if (polhData.POLH_STATUS === "U") {
                                //    respond.POLH_STATUS = "A";
                                //    u.fill_form(respond, "#polheaderForm")
                                //}
                                /*--------------------------------
                                 * update form status
                                 *-------------------------------*/

                                var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                                var locationRowIds = $scope.location_grid.jqGrid("getDataIDs");
                                var interestRowIds = $scope.interest_grid.jqGrid("getDataIDs");

                                var covRecStatus;
                                /*---------------------------------
                                 * update location row status
                                 *-------------------------------*/
                                for (var i = 0; i < locationRowIds.length; i++) {
                                    covRecStatus = $scope.location_grid.jqGrid("getCell", locationRowIds[i], "PLOC_STATUS");

                                    //Delete row if it is marked for deletion
                                    if (covRecStatus === "D") {
                                        $scope.location_grid.jqGrid("delRowData", locationRowIds[i]);
                                    }
                                    //Update row status to Active (A) if it is newly added
                                    if (covRecStatus === "U") {
                                        $scope.location_grid.jqGrid("setCell", locationRowIds[i], "PLOC_STATUS", "A");
                                    }
                                }


                                /*---------------------------------
                                 * update Interest row status
                                 *-------------------------------*/
                                for (var i = 0; i < interestRowIds.length; i++) {
                                    covRecStatus = $scope.interest_grid.jqGrid("getCell", interestRowIds[i], "LINT_STATUS");

                                    //Delete row if it is marked for deletion
                                    if (covRecStatus === "D") {
                                        $scope.interest_grid.jqGrid("delRowData", interestRowIds[i]);
                                    }
                                    //Update row status to Active (A) if it is newly added
                                    if (covRecStatus === "U") {
                                        $scope.interest_grid.jqGrid("setCell", interestRowIds[i], "LINT_STATUS", "A");
                                    }
                                }


                                /*--------------------------------
                                 * update cover row items status
                                 *-------------------------------*/
                                for (var i = 0; i < coverRowIds.length; i++) {

                                    covRecStatus = $scope.cover_grid.jqGrid("getCell", coverRowIds[i], "RCOV_STATUS");

                                    //Delete risk row if it is marked for deletion
                                    if (covRecStatus === "D") {
                                        $scope.cover_grid.jqGrid("delRowData", coverRowIds[i]);
                                    }
                                    //Update risk row status to Active (A) if it is newly added
                                    if (covRecStatus === "U") {
                                        $scope.cover_grid.jqGrid("setCell", coverRowIds[i], "RCOV_STATUS", "A");
                                    }
                                }

                                u.fill_form(responseData.result, "#polheaderForm");

                                alert(JSON.stringify(responseData.result));

                                u.growl_success(responseData.message);

                            } else {
                                u.hide_confirm();
                                u.growl_error(responseData.mesage);
                            }
                        }, function (err) {
                            u.hide_confirm();
                            // $scope.saving = false;
                            u.growl_error("Server Error please try again later.");
                        });
                    }
                    else {
                        u.growl_infor("Server busy, please wait for current process to finish!");
                    }
                });
            }

        });


        // policy Confirmation process Modal
        $("#btnPolConfirm").click(function () {

            var Pol_Txn_State = $("#POLH_TXN_STATE").val();
            if (Pol_Txn_State === "C") return u.growl_warning("The Policy is already Confirmed, You cannot Confirm them again");
            if (Pol_Txn_State === "P") return u.growl_warning("The Policy is Approved, You cannot Confirm again");
            if (Pol_Txn_State === "") return u.growl_warning("The Policy is not saved, You cannot Confirm it");

            if (Pol_Txn_State === "E" || Pol_Txn_State === "S") {

                $("#PolConfirmModal").modal();
            }

        });


        $("#btnConfirm").click(function () {

            u.modal_confirmation("Are you sure you want to Confirm ?", function () {
                s.confirmPolicy($("#POLH_SYS_ID").val(), function (response) {
                    if (response.state) {

                        // Change policy transaction state to Confirmed -  C
                        var txnState = response.state.POLH_TXN_STATE;

                        u.growl_success("Policy successfully confirmed");

                        $("#POLH_TXN_STATE").val(txnState);

                        u.form_text_Blue_color();

                    } else {
                        u.growl_error(response.message);
                    }
                }, function () {
                    u.growl_error("Server Error Confirming Policy");
                });

                u.hide_confirm();
            });

        });
        $("#btnPolApproval").click(function () {

            var polTxnState = $("#POLH_TXN_STATE").val();

            if (polTxnState === "P") return u.growl_warning("The Policy is already Approved");

            if (polTxnState === "C") {

                $("#PolicyApprovalModal").modal();

                var SYS_ID = $("#POLH_SYS_ID").val();
                var end_No = $("#POL_END_NO").val();
                var premAmtFC = $("#POLH_POL_PREM_FC").val();
                var premAmtBC = $("#POLH_POL_PREM_BC").val();
                $("#APP_POLH_ID").val(SYS_ID);
                $("#APP_END_NO").val(end_No);
                $("#APP_PREM_FC").val(premAmtFC);
                $("#APP_PREM_BC").val(premAmtBC);
                $("#APPROVE_DATE").val("01/01/2017");
                //     
            } else {
                u.growl_warning("The Policy must be in a confirmed state before Approval, Please check and try again");
            }

        });


        $("#btnApproval").click(function () {
            if ($("#POLH_STATUS").val() === "" || $("#POL_END_NO").val() == "A")

                if (u.field_empty("#POLH_SYS_ID")) return u.growl_warning("There is no Policy to Approve, please Check and try again");
            if ($("#POLH_SYS_ID").val() === "A") return u.growl_warning("There is no Policy to Approve, please Check and try again");

            if (!u.form_validation("#receiptHeaderForm")) return u.growl_warning("Fields marked red are required");

            u.modal_confirmation("Are you sure you want to Approve ?", function () {
                s.policyApproval({ POL_SYS_ID: $("#POLH_SYS_ID").val(), POL_END_NO: 0, TXN_TYPE: 1 }, function (response) {
                    if (response.state) {
                        u.growl_success("Policy successfully Approved");
                        //alert(JSON.stringify(response));

                        //alert(JSON.stringify());

                        var txnState = response.result.POLH_TXN_STATE;

                        $("#POLH_TXN_STATE").val(txnState);

                        $("#POLH_TXN_STATE").val(txnState);
                        if (txnState === ("P")) {

                            u.form_text_Green_color();
                        }

                    } else {
                        u.growl_error(response.message);
                    }
                }, function () {
                    u.growl_error("Server Error Confirming Policy");
                });
                u.hide_confirm();
            });
        });


        /*--------------------
         * Policy Form delete button
         *------------------*/
        $("#btnDelete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this policy?", function () {
                if ($("input[name='POLH_SYS_ID']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var policy_data = u.parse_form("#polheaderForm");
                        policy_data.POLH_STATUS = "D";
                        s.save_fire(policy_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_error("Policy Successfully Deleted");
                                    $scope.reset_setup();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Policy at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on("click", function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#polheaderForm");
                u.form_reset("#coverForm");
                u.form_reset("#locationForm");
                u.form_reset("#interestForm");
                $scope.cover_grid.jqGrid("clearGridData");
                $scope.location_grid.jqGrid("clearGridData");
                $scope.interest_grid.jqGrid("clearGridData");
                u.hide_warning();
                u.growl_success("Form successfully cleared");
            });

        });


        /*-----------------
 * search grid
 *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["ID", "Policy No.", "Policu Document No.", "Proposal No.", "index"],
            [
                { name: "POLH_SYS_ID", index: "POLH_SYS_ID", hidden: true },
                { name: "POLH_SYS_ID", index: "POLH_SYS_ID" },
                { name: "POLH_DOC_NO", index: "POLH_DOC_NO" },
                { name: "POLH_STATUS", index: "POLH_STATUS" },
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
        $("#btnQueryPolicy").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_policy(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                result[i].index = i;
                                $scope.search_grid.addRowData(result[i].index, result[i]);
                            }
                            $("#mySearchResultModal").modal();
                        } else {
                            $scope.search_fill(result[0]);
                        }
                    } else {
                        u.growl_info("Policy No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Policy No and try again!");
            }
        });


        $scope.search_fill = function (policy) {
            $scope.location_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");
            $scope.interest_grid.jqGrid("clearGridData");

            u.fill_form(policy, "#polheaderForm");

            u.clear_grid_data($scope.location_grid);
            for (var i in policy.INS_UWD_FIRE_LOCRISK) {
                $scope.location_grid.addRowData(policy.INS_UWD_FIRE_LOCRISK[i].PLOC_POLH_SYS_ID, policy.INS_UWD_FIRE_LOCRISK[i]);
            }

            u.clear_grid_data($scope.interest_grid);
            for (var i in policy.INS_UWD_FIRE_LOCINT) {
                $scope.interest_grid.addRowData(policy.INS_UWD_FIRE_LOCINT[i].LINT_POLH_SYS_ID, policy.INS_UWD_FIRE_LOCINT[i]);
            }

            u.clear_grid_data($scope.cover_grid);
            for (var i in policy.INS_UWD_RISK_COVERS) {
                $scope.cover_grid.addRowData(policy.INS_UWD_RISK_COVERS[i].RCOV_POLH_DOC_NO, policy.INS_UWD_RISK_COVERS[i]);
            }
        };


        /*-------------------------------------
      * setting datepicker for date fields
      *------------------------------------*/
        u.set_datepicker("input[name='POLH_POL_START_DATE']");
        u.set_datepicker("input[name='POLH_POL_END_DATE']");
        u.set_datepicker("input[name='PLOC_START_DATE']");
        u.set_datepicker("input[name='PLOC_END_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");

        /*-----------------------------
* LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='POLH_CMP_CODE']", "check_company_code", "form input[name='CMP_NAME']");
        u.lovCodeVal("form input[name='POLH_INTERMIDIARY']", "check_intermediary_code", "form input[name='INT_OFFICIAL_NAME']");
        u.lovCodeVal("form input[name='POLH_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");
        u.lovCodeVal("form input[name='POLH_CLASS_CODE']", "check_product_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='POLH_SUB_CLASS_CODE']", "check_subproduct_code", "form input[name='PDT_NAME']");
        u.lovCodeVal("form input[name='POLH_INS_SOURCE']", "check_insurance_source_code", "form input[name='INS_NAME']");
        u.lovCodeVal("form input[name='POLH_CHANNEL_CODE']", "check_channel_code", "form input[name='MSC_NAME']");
        u.lovCodeVal("form input[name='POLH_BIZ_SOURCE']", "check_business_source_code", "form input[name='SRB_NAME']");
        u.lovCodeVal("form input[name='PLOC_AREA_CODE']", "check_area_code", "form input[name='AREA_NAME']");
        u.lovCodeVal("form input[name='PLOC_LOC_CODE']", "check_location_code", "form input[name='LOC_NAME']");
        u.lovCodeVal("form input[name='PLOC_OCCUP_CODE']", "check_occupancy_code", "form input[name='PLOC_OCCUP_NAME']");

        u.lovCodeVal("input[name='POLH_CUST_CODE']", "check_customer_code", "input[name='CUS_OFFICIAL_NAME']", function (code) {
            /*fetch customer details after successful validation*/
            s.get_customer(code, function (response) {
                u.fill_form(response, "#polheaderForm");
            });
        });
        u.lovCodeVal("form input[name='CUS_TYPE_CODE']", "check_customertype_code", "form input[name='CUS_TYPE_NAME']");


        /*-----------------------------
        * // RIsk Cover Rate Calculation
        *---------------------------*/

        $("#RCOV_GROSS_PREM_FC").prop("disabled", true);
        $("#RCOV_NET_PREM_FC").prop("disabled", true);

        document.getElementById("RCOV_RATE").addEventListener("focusout", rateFunction);
        document.getElementById("RCOV_SI_FC").addEventListener("focusout", rateFunction);

        function rateFunction() {
            //alert("Input field lost focus.");
            var grossPremFC = "";
            var grossPremBC = "";
            var NetPremFC = "";
            var NetPremBC = "";
            var ExchangeRate = $("#PLOC_CURR_RATE").val();

            if ($("#RCOV_SI_FC").val() == "" || $("#RCOV_SI_FC").val() == 0 || $("#RCOV_RATE").val() == "" || $("#RCOV_RATE").val() <= 0 || $("#RCOV_RATE").val() > 100) {
                u.growl_warning("Please Check the RATE or SUM INSURED values");
            }
            else {
                grossPremFC = ($("#RCOV_SI_FC").val() * $("#RCOV_RATE").val() * 0.01).toFixed(2);
                //grossPremBC = parseFloat(grossPremFC / ExchangeRate).toFixed(2);

                NetPremFC = ($("#RCOV_SI_FC").val() * $("#RCOV_RATE").val() * 0.01).toFixed(2);
                //NetPremBC = parseFloat(NetPremFC / ExchangeRate).toFixed(2);

                $("#RCOV_GROSS_PREM_FC").val(grossPremFC);
                $("#RCOV_GROSS_PREM_BC").val(grossPremFC);

                $("#RCOV_NET_PREM_FC").val(NetPremFC);
                $("#RCOV_NET_PREM_BC").val(NetPremFC);

            }

        }


        /*-----------------------------
        * //Add new customer modal dialog form
        *---------------------------*/

        $("#customerSetupBtn").click(function () {
            /*obtain the customer code*/
            var custCode = $("input[name='PH_CUST_CODE']").val();
            if (custCode && custCode.length > 0 && custCode !== " ") {

            }
            /*open the customer setup modal*/
            $("#customerSetupModal").modal();
        });


        /*-----------------------------
         * Save/Update Customer
         *---------------------------*/
        //
        $("#btn_Save_Customer").on("click", function () {

            if (!u.form_validation("#customerForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var customerData = u.parse_form("#customerForm");

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_customers(customerData, function (responseData) {
                        $scope.saving = false;

                        if (responseData.state) {

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



        /*-----------------------------
        *Policy Period days calculations
        *---------------------------*/

        document.getElementById("POLH_POL_START_DATE").addEventListener("focusout", fxnPolPeriodDays);
        document.getElementById("POLH_POL_END_DATE").addEventListener("focusout", fxnPolPeriodDays);


        function fxnPolPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#POLH_POL_START_DATE").val();
            var EDate = $("#POLH_POL_END_DATE").val();

            //set the risk start date to same as policy start date
            $("#PLOC_START_DATE").val(SDate);
            $("#PLOC_END_DATE").val(EDate);

            //VEH_END_DATE
            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var polPeriodDays = u.get_dateDifference(StartDate, EndDate);

            if (polPeriodDays > 0) {
                $("#POLH_POL_DAYS").val(polPeriodDays);
                $("#BOND_PERIOD_DAYS").val(polPeriodDays);
            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Policy End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#POLH_POL_END_DATE").val("");
                $("#POLH_POL_DAYS").val("");
                // 
                $("#PLOC_END_DATE").val("");
                $("#BOND_PERIOD_DAYS").val("");
            }
            else {

            }
        }

        //---//Risk period days
        document.getElementById("PLOC_START_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        document.getElementById("PLOC_END_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        function fxnRiskPeriodDays() {
            //alert("Input field lost focus.");
            var polStartDate = new Date($("#POLH_POL_START_DATE").val());
            var PolEndDate = new Date($("#POLH_POL_END_DATE").val());

            var riskStartDate = new Date($("#PLOC_START_DATE").val());
            var riskEndDate = new Date($("#PLOC_END_DATE").val());

            var riskPeriodDays = u.get_dateDifference(riskStartDate, riskEndDate);

            if (u.get_dateDifference(polStartDate, riskStartDate) < 0) {
                u.growl_warning("Risk Start date cannot be less than Policy start date");
            }
            else if (u.get_dateDifference(PolEndDate, riskEndDate) > 0) {
                u.growl_warning("Risk End date cannot be greater than Policy End date");
            }
            else {

                if (riskPeriodDays > 0) {
                    $("#BOND_PERIOD_DAYS").val(riskPeriodDays);
                }
            }


            if ((riskPeriodDays <= 0)) {
                u.growl_warning("Risk End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#PLOC_START_DATE").val("");
                $("#PLOC_END_DATE").val("");

            }
            else if ((riskPeriodDays > 365)) {
                u.growl_warning("Risk period cannot be greater than 365 days, please check and try again");
            }


            // alert(diffDays(StartDate, EndDate));
        }


        // Cover level SI and Premium Calculations:
        $("#btn_get_Cover_Premiums").click(function () {
            SumCoverAmounts();
        });


        // calculate sum of cover amounts
        function SumCoverAmounts() {

            //Declare variables
            var SumSIFC = 0;
            var SumSIBC = 0;

            var SumGrossPremFC = 0;
            var SumGrossPremBC = 0;

            var SumNetPremFC = 0;
            var SumNetPremBC = 0;

            var SumLoadFC = 0;
            var SumLoadBC = 0;

            var SumDisFC = 0;
            var SumDisBC = 0;

            var grid = $scope.cover_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get the risk sys ID from the covers grid
                var getriskNo = grid.jqGrid("getCell", currRow, "RCOV_RISK_NO");

                //get Cover type of the cover
                var coverType = grid.jqGrid("getCell", currRow, "COVER_TYPE");

                var riskNo = $("#PLOC_RISK_NO").val();

                if (getriskNo != riskNo) {
                    $("#" + currRow).hide();

                }
                else {

                    //
                    $("#" + currRow).show();
                    if (coverType == "OD1") {
                        // if the cover type is own damage then the SI is added to to be considered as risk Sum insured
                        //SumSIFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_FC'));
                        //SumSIBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_BC'));
                    }

                    SumSIFC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_SI_FC"));
                    SumSIBC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_SI_BC"));

                    SumGrossPremFC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_FC"));
                    SumGrossPremBC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_BC"));

                    SumNetPremFC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_FC"));
                    SumNetPremBC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_BC"));

                    SumLoadFC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_FC"));
                    SumLoadBC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_BC"));

                    SumDisFC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_FC"));
                    SumDisBC += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_BC"));
                }
            }

            grid.jqGrid("footerData", "set", { 'RCOV_SI_FC': SumSIFC.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_SI_BC': SumSIFC.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_FC': SumGrossPremFC.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_BC': SumGrossPremFC.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_FC': SumNetPremFC.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_BC': SumNetPremFC.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_FC': SumLoadFC.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_BC': SumLoadBC.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_DISC_FC': SumDisFC.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_DISC_BC': SumDisBC.toFixed(2) });


            // set risk SI and Premiums vlues,

            var Riskgrid = $scope.location_grid;

            var RiskRow_id = Riskgrid.jqGrid("getGridParam", "selrow");

            var riskID = Riskgrid.jqGrid("getCell", RiskRow_id, "PLOC_RISK_NO");

            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_TOT_PREM_FC", SumGrossPremFC.toFixed(2));
            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_TOT_PREM_BC", SumGrossPremFC.toFixed(2));

            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_SI_FC", SumSIFC.toFixed(2));
            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_SI_BC", SumSIFC.toFixed(2));

            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_LOAD_FC", SumLoadFC.toFixed(2));
            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_LOAD_BC", SumLoadBC.toFixed(2));

            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_DISC_FC", SumDisFC.toFixed(2));
            Riskgrid.jqGrid("setCell", RiskRow_id, "PLOC_DISC_BC", SumDisBC.toFixed(2));


            var RiskIntgrid = $scope.interest_grid;

            var RiskRow_id = RiskIntgrid.jqGrid("getGridParam", "selrow");

            var riskID = RiskIntgrid.jqGrid("getCell", RiskRow_id, "LINT_RISK_NO");

            RiskIntgrid.jqGrid("setCell", RiskRow_id, "LINT_PRM_FC", SumGrossPremFC.toFixed(2));
            RiskIntgrid.jqGrid("setCell", RiskRow_id, "LINT_PRM_BC", SumGrossPremBC.toFixed(2));

            RiskIntgrid.jqGrid("setCell", RiskRow_id, "LINT_SI_FC", SumSIFC.toFixed(2));
            RiskIntgrid.jqGrid("setCell", RiskRow_id, "LINT_SI_BC", SumSIBC.toFixed(2));

            // Policy Level SI and premium Calculations 
            SumPolhAmounts();

        };
        //Policy Level SI and premium Calculations

        // calculate sum of Risk level amounts
        function SumPolhAmounts() {

            //Declare variables
            var polGrossPremFC = 0;
            var polGrossPremBC = 0;

            var polNetPremFC = 0;
            var polNetPremBC = 0;

            var polLoadFC = 0;
            var polLoadBC = 0;

            var polDisFC = 0;
            var polDisBC = 0;

            var polSIFC = 0;
            var polSIBC = 0;

            var polSIFC = 0;
            var polSIBC = 0;

            var polSIFC = 0;
            var polSIBC = 0;
            //
            var polgrid = $scope.location_grid;

            var polrowIds = polgrid.jqGrid("getDataIDs");

            //var Locintgrid = $scope.interest_grid;

            //var LocintrowIds = Locintgrid.jqGrid('getDataIDs');

            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = polrowIds.length; i < len; i++) {

                var currRow = polrowIds[i];

                // Sum risk level Amounts for Policy Level Amounts

                polSIFC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_SI_FC"));
                polSIBC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_SI_BC"));

                polGrossPremFC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_TOT_PREM_FC"));
                polGrossPremBC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_TOT_PREM_BC"));

                polLoadFC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_LOAD_FC"));
                polLoadBC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_LOAD_BC"));

                polDisFC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_DISC_FC"));
                polDisBC += parseFloat(polgrid.jqGrid("getCell", currRow, "PLOC_DISC_BC"));

            }

            //for (var i = 0, len = LocintrowIds.length; i < len; i++) {

            //    var currRow = LocintrowIds[i];

            //    // Sum risk level Amounts for Policy Level Amounts

            //    polSIFC += parseFloat(Locintgrid.jqGrid('getCell', currRow, 'LINT_SI_FC'));
            //    polSIFC += parseFloat(Locintgrid.jqGrid('getCell', currRow, 'LINT_SI_BC'));

            //    polGrossPremFC += parseFloat(Locintgrid.jqGrid('getCell', currRow, 'LINT_PRM_FC'));
            //    polGrossPremFC += parseFloat(Locintgrid.jqGrid('getCell', currRow, 'LINT_PRM_BC'));

            //}

            $("#POLH_POL_SI_FC").val(polSIFC);
            $("#POLH_POL_SI_BC").val(polSIFC);

            $("#POLH_POL_PREM_FC").val(polGrossPremFC);
            $("#POLH_POL_PREM_BC").val(polGrossPremBC);
            //
            $("#POLH_POL_LOAD_FC").val(polLoadFC);
            $("#POLH_POL_LOAD_BC").val(polLoadBC);

            $("#POLH_POL_DISC_FC").val(polDisFC);
            $("#POLH_POL_DISC_BC").val(polDisBC);

        };


        //Commission Calculations

        function calculateIntermediaryComm() {
            //grdIntermediaryComm $scope.intermCom_grid
            var commgrid = $scope.intermCom_grid;

            var commrowIds = commgrid.jqGrid('getDataIDs');

            var polPremFC = parseFloat($('#POLH_POL_PREM_FC').val() | 0);
            var polPremBC = parseFloat($('#POLH_POL_PREM_BC').val() | 0);
            // iterate through the rows 

            if (polPremFC == 0) {

            }
            else if (u.grid_empty($scope.intermCom_grid)) {

            }
            else {

                for (var i = 0, len = commrowIds.length; i < len; i++) {

                    var currRow = commrowIds[i];

                    // Sum risk level Amounts for Policy Level Amounts

                    commgrid.jqGrid('setCell', currRow, 'CMM_PREM_AMT_FC', polPremFC.toFixed(2));
                    commgrid.jqGrid('setCell', currRow, 'CMM_PREM_AMT_BC', polPremBC.toFixed(2));

                    //
                    comPerc = parseFloat(commgrid.jqGrid('getCell', currRow, 'CMM_COM_PERC') | 0);

                    var CommAmountFC = parseFloat(polPremFC * comPerc / 100);
                    var CommAmountBC = parseFloat(polPremBC * comPerc / 100);

                    //CommAmountFC CommAmountBC
                    commgrid.jqGrid('setCell', currRow, 'CMM_COM_AMT_FC', CommAmountFC.toFixed(2));
                    commgrid.jqGrid('setCell', currRow, 'CMM_COM_AMT_BC', CommAmountBC.toFixed(2));
                }

            }
        }


        /*
        Get default covers for the first time of loading the Risk Covers btn_add_motor_details
        */
        function getDefaultRiskCovers() {

            if ($("#POLH_CLASS_CODE").val() == "") {

                u.growl_warning("The Risk Code cannot be null, Please check and try again");

            }
            else {
                /*
                   obtain parameter for our request
               */
                var productRiskData = {

                    PRD_CODE: $("#POLH_CLASS_CODE").val(),

                }; //


                var grid = $scope.cover_grid;

                var rowIds = grid.jqGrid("getDataIDs");

                //declare array to contain the codes to varify
                var CodeArray = [];

                // iterate through the rows in the grid and add Covers to Array
                for (var i = 0, len = rowIds.length; i < len; i++) {
                    var currRow = rowIds[i];

                    //get value of the cell or column in an array
                    var coverCode = grid.jqGrid("getCell", currRow, "RCOV_CODE");

                    var RiskCode = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                    var riskCov = coverCode + RiskCode;

                    // alert(riskCov);
                    CodeArray.push(riskCov);
                }

                //send parameters and get Default covers from the database
                s.getRiskDefaulCovers(productRiskData, function (result) {
                    if (result && result.length && result.length > 0) {

                        for (var i in result) {

                            //alert(JSON.stringify(result));

                            result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                            result[i]["RCOV_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                            result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];

                            result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                            result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                            result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                            result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                            result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                            result[i]["RCOV_RISK_SYS_ID"] = $("#LINT_SYS_ID").val();
                            result[i]["RCOV_RISK_NO"] = $("#LINT_RISK_NO").val();
                            //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                            var deftCoverCode = result[i].RCOV_CODE;
                            var newRiskCode = $("#LINT_SYS_ID").val();

                            var verifyRiskCover = deftCoverCode + newRiskCode; //alert(verifyRiskCover);

                            //add if Cover is not found in the Grid//

                            if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                                //fill in default covers if not in the grid

                                $scope.cover_grid.addRowData(result[i]["RCOV_CODE"], result[i]);
                            }
                            else {

                                u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);
                            }
                        }
                        //

                        SumCoverAmounts();

                    }
                });
            }
        }


        //Get default Covers if not added
        $("#btn_get_DeftCovers").click(function () {

            getDefaultRiskCovers();

        });


        //refresh Cover, Risk and policy Values on closing the Risk Cover Modal
        $("#btn_CoverPrem_Onclose").click(function () {

            if (u.grid_empty($scope.cover_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#RiskCoverModal").modal("hide");
                });
            }
            else {
                SumCoverAmounts();
                $("#RiskCoverModal").modal("hide");
            }
        });

        //View Schedule

        $("#btnViewDocument").click(function () {

            var e = document.getElementById("Viewpolicydocuments");
            var polreports = e.options[e.selectedIndex].value;

            if (polreports == "") {
                u.growl_warning("Nothing selected, Please select to view report");
            }

            else if (polreports == "Debit") {

                if (!u.field_empty("#POLH_SYS_ID")) {
                    $("#policyscheduleModal").modal();

                    $("#POLH_ID").val($("#POLH_SYS_ID").val());

                    $("#btnQuerypolicydocument").click(function (e) {

                        if (u.field_empty("#POLH_ID")) {
                            u.modal_warning("Policy No is not correct");
                        }
                        else {
                            console.log(policyData);
                            var policyData = u.parse_form("#policydocumentForm");
                            window.open("/StaticReport/PolicyHeaderSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                        }
                    });
                }
                else {
                    u.modal_warning("There is no Policy to view");
                }
            }

            else if (polreports == "Schedule") {

                if (!u.field_empty("#POLH_SYS_ID")) {
                    $("#policyscheduleModal").modal();

                    $("#POLH_ID").val($("#POLH_SYS_ID").val());

                    $("#btnQuerypolicydocument").click(function (e) {

                        if (u.field_empty("#POLH_ID")) {
                            u.modal_warning("Policy No is not correct");
                        }
                        else {
                            console.log(policyData);
                            var policyData = u.parse_form("#policydocumentForm");
                            window.open("/PolicySchedules/PolicyFireSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                        }
                    });
                }
                else {
                    u.modal_warning("There is no Policy to view");
                }

            }

        });


    });

})(window.$, window.service, window.utility, {})