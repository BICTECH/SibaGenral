(function ($, s, u, $scope) {
    $(function () {

        // Motor Risk Grid
        $scope.motor_grid = u.default_grid("#gridVehRisks", "#gridVehRisksPager", "Vehicle Risk",
            [
              "Risk Code", "Risk Name", "Veh Reg. No", "No. Of Seats", "Sum Insured FC", "Sum Insured BC", "Total Premium FC", "Total Premium BC",
                    "Currrency", "Exchange Rate", "Risk Start date", "Risk End date", "Period Days", "UW Year",
                    //
                "Make", "Model", "Body Type",

                "Manufacture Year", "Chassis No.", "Cubic Capacity",
                "Excess", "Excess Percentage", "Min Excess", "Max Excess", "Fix Excess",
                "Additional TPPD", "TP Interest", "TP Details", "Proposal Declined", "Declined Reasons",
                "Policy Cancelled", "Cancelled Reason",

                "Premium Basis", "Risk Premium FC", "Risk Premium BC",
                "RI Applicable", "RI Effective Date", "RI SI FC", "RI SI BC", "RI Premium FC",
                    "RI Premium BC", "Adj Premium FC",
                    "Adj Premium BC", "Discount FC", "Discount BC", "Load FC", "Laod BC",
                "Compulsory Fee FC", "Compulsory Fee BC", "Commossion FC", "Commission BC", "Txn Status", "Risk State",
                //
                "VehID", "Usage code", "Risk No", "PolID", "PolDocNo", "Endorsement No.",

                "Issue Date", "Restrospective Date", "Product code",
                "Cover Code", " Renewal Status", "Endorsement Type", "Approval Date", "Account Date",
                "Create by", "Create Date", "Modified By", "Modified Date", "Status"
            ],
            [
                   // 888
                   { name: "VEH_RISK_CODE", index: "VEH_RISK_CODE", width: 150, sorttype: "int" },
                    { name: "VEH_RISK_NAME", index: "VEH_RISK_NAME", width: 150 },

                    { name: "VEH_VEH_REG_NO", index: "VEH_VEH_REG_NO", width: 150, },
                    { name: "VEH_PASSENGERS", index: "VEH_PASSENGERS", width: 150 },
                    { name: "VEH_SI_FC", index: "VEH_SI_FC", width: 150 },
                    { name: "VEH_SI_BC", index: "VEH_SI_BC", width: 150 },
                    { name: "VEH_TOT_PREM_FC", index: "VEH_TOT_PREM_FC", width: 150 },
                    { name: "VEH_TOT_PREM_BC", index: "VEH_TOT_PREM_BC", width: 150 },
                    { name: "VEH_CURRENCY", index: "VEH_CURRENCY", width: 150 },
                    { name: "VEH_CURR_RATE", index: "VEH_CURR_RATE", width: 150 },
                    { name: "VEH_START_DATE", index: "VEH_START_DATE", width: 150 },
                    { name: "VEH_END_DATE", index: "VEH_END_DATE", width: 150 },
                    { name: "VEH_PERIOD_DAYS", index: "VEH_PERIOD_DAYS", width: 150 },
                    { name: "VEH_UW_YEAR", index: "VEH_UW_YEAR", width: 150 },
                    //
                    { name: "VEH_MAKE", index: "VEH_MAKE", width: 150 },
                    { name: "VEH_MODEL", index: "VEH_MODEL", width: 150 },
                    { name: "VEH_BODY_TYPE", index: "VEH_BODY_TYPE", width: 150 },

                    { name: "VEH_MANUFACTURE_YR", index: "VEH_MANUFACTURE_YR", width: 150 },
                    { name: "VEH_CHASSIS_NO", index: "VEH_CHASSIS_NO", width: 150 },
                    { name: "VEH_CUBIC_CAP", index: "VEH_CUBIC_CAP", width: 150 },

                    { name: "VEH_EXCESS_APP", index: "VEH_EXCESS_APP", width: 150 },
                    { name: "VEH_EXCESS_PERC", index: "VEH_EXCESS_PERC", width: 150 },
                    { name: "VEH_EXCESS_MIN", index: "VEH_EXCESS_MIN", width: 150 },
                    { name: "VEH_EXCESS_MAX", index: "VEH_EXCESS_MAX", width: 150 },
                    { name: "VEH_EXCESS_FIX", index: "VEH_EXCESS_FIX", width: 150 },
                    { name: "VEH_EXTRA_TPPD", index: "VEH_EXTRA_TPPD", width: 150 },
                    { name: "VEH_TP_INTEREST", index: "VEH_TP_INTEREST", width: 150 },
                    { name: "VEH_TP_DETAILS", index: "VEH_TP_DETAILS", width: 150 },
                    { name: "VEH_PROP_DECLINED", index: "VEH_PROP_DECLINED", width: 150 },
                    { name: "VEH_DECLINED_REASON", index: "VEH_DECLINED_REASON", width: 150 },
                    { name: "VEH_POL_CANCELLED", index: "VEH_POL_CANCELLED", width: 150 },
                    { name: "VEH_CANCELLED_REASON", index: "VEH_CANCELLED_REASON", width: 150 },

                    { name: "VEH_PREMIUM_BASIS", index: "VEH_PREMIUM_BASIS", width: 150 },
                    { name: "VEH_RISK_PREM_FC", index: "VEH_RISK_PREM_FC", width: 150 },
                    { name: "VEH_RISK_PREM_BC", index: "VEH_RISK_PREM_BC", width: 150 },

                    { name: "VEH_RI_APPLICABLE", index: "VEH_RI_APPLICABLE", width: 150 },
                    { name: "VEH_RI_EFF_DATE", index: "VEH_RI_EFF_DATE", width: 150 },
                    { name: "VEH_RI_SI_FC", index: "VEH_RI_SI_FC", width: 150 },
                    { name: "VEH_RI_SI_BC", index: "VEH_RI_SI_BC", width: 150 },
                    { name: "VEH_RI_PREM_FC", index: "VEH_RI_PREM_FC", width: 150 },
                    { name: "VEH_RI_PREM_BC", index: "VEH_RI_PREM_BC", width: 150 },

                    { name: "VEH_ADJ_PREM_FC", index: "VEH_ADJ_PREM_FC", width: 150 },
                    { name: "VEH_ADJ_PREM_BC", index: "VEH_ADJ_PREM_BC", width: 150 },
                    { name: "VEH_DISC_FC", index: "VEH_DISC_FC", width: 150 },
                    { name: "VEH_DISC_BC", index: "VEH_DISC_BC", width: 150 },
                    { name: "VEH_LOAD_FC", index: "VEH_LOAD_FC", width: 150 },
                    { name: "VEH_LOAD_BC", index: "VEH_LOAD_BC", width: 150 },
                    { name: "VEH_COMP_FEE_FC", index: "VEH_COMP_FEE_FC", width: 150 },
                    { name: "VEH_COMP_FEE_BC", index: "VEH_COMP_FEE_BC", width: 150 },
                    { name: "VEH_COMMISSION_FC", index: "VEH_COMMISSION_FC", width: 150 },
                    { name: "VEH_COMMISSION_BC", index: "VEH_COMMISSION_BC", width: 150 },

                    { name: "VEH_TXN_STATUS", index: "VEH_TXN_STATUS", width: 150 },
                    { name: "VEH_RISK_STATE", index: "VEH_RISK_STATE", width: 150 },

                    { name: "VEH_SYS_ID", index: "VEH_SYS_ID", width: 150 },


                    { name: "VEH_USAGE_CODE", index: "VEH_USAGE_CODE", width: 150 },

                    { name: "VEH_RISK_NO", index: "VEH_RISK_NO", width: 150, sorttype: "int" },

                    { name: "VEH_POLH_SYS_ID", index: "VEH_POLH_SYS_ID", width: 150 },
                    { name: "VEH_POLH_DOC_NO", index: "VEH_POLH_DOC_NO", width: 150 },
                    { name: "VEH_POLH_END_NO", index: "VEH_POLH_END_NO", width: 150 },

                    { name: "VEH_ISSUE_DATE", index: "VEH_ISSUE_DATE", width: 150 },
                    { name: "VEH_RETROS_DATE", index: "VEH_RETROS_DATE", width: 150 },

                    { name: "VEH_PRODUCT_CODE", index: "VEH_PRODUCT_CODE", width: 150 },
                    { name: "VEH_COVER_CODE", index: "VEH_COVER_CODE", width: 150 },
                    { name: "VEH_RENEWAL_STATUS", index: "VEH_RENEWAL_STATUS", width: 150 },
                    { name: "VEH_END_TYPE", index: "VEH_END_TYPE", width: 150 },
                    { name: "VEH_APPROVE_DATE", index: "VEH_APPROVE_DATE", width: 150 },
                    { name: "VEH_ACCT_DATE", index: "VEH_ACCT_DATE", width: 150 },
                    { name: "VEH_CRTE_BY", index: "VEH_CRTE_BY", width: 150 },
                    { name: "VEH_CRTE_DATE", index: "", width: 150 },
                    { name: "VEH_MOD_BY", index: "VEH_MOD_BY", width: 150 },
                    { name: "VEH_MOD_DATE", index: "VEH_MOD_DATE", width: 150 },
                    { name: "VEH_STATUS", index: "VEH_STATUS", width: 150 }
            ],
            //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.motor_grid;

                $("form input[name='VEH_RISK_CODE']").data("update", true);
                u.fill_form({
                    VEH_SYS_ID: grid.jqGrid("getCell", selId, "VEH_SYS_ID"),
                    VEH_POLH_SYS_ID: grid.jqGrid("getCell", selId, "VEH_POLH_SYS_ID"),
                    VEH_POLH_DOC_NO: grid.jqGrid("getCell", selId, "VEH_POLH_DOC_NO"),
                    VEH_POLH_END_NO: grid.jqGrid("getCell", selId, "VEH_POLH_END_NO"),
                    VEH_RISK_NO: grid.jqGrid("getCell", selId, "VEH_RISK_NO"),
                    VEH_RISK_CODE: grid.jqGrid("getCell", selId, "VEH_RISK_CODE"),
                    VEH_ISSUE_DATE: grid.jqGrid("getCell", selId, "VEH_ISSUE_DATE"),
                    VEH_RETROS_DATE: grid.jqGrid("getCell", selId, "VEH_RETROS_DATE"),

                    VEH_START_DATE: grid.jqGrid("getCell", selId, "VEH_START_DATE"),
                    VEH_END_DATE: grid.jqGrid("getCell", selId, "VEH_END_DATE"),
                    VEH_PERIOD_DAYS: grid.jqGrid("getCell", selId, "VEH_PERIOD_DAYS"),
                    VEH_UW_YEAR: grid.jqGrid("getCell", selId, "VEH_UW_YEAR"),
                    VEH_CURRENCY: grid.jqGrid("getCell", selId, "VEH_CURRENCY"),
                    VEH_CURR_RATE: grid.jqGrid("getCell", selId, "VEH_CURR_RATE"),

                    VEH_PRODUCT_CODE: grid.jqGrid("getCell", selId, "VEH_PRODUCT_CODE"),
                    VEH_COVER_CODE: grid.jqGrid("getCell", selId, "VEH_COVER_CODE"),
                    VEH_USAGE_CODE: grid.jqGrid("getCell", selId, "VEH_USAGE_CODE"),
                    VEH_VEH_REG_NO: grid.jqGrid("getCell", selId, "VEH_VEH_REG_NO"),
                    VEH_MAKE: grid.jqGrid("getCell", selId, "VEH_MAKE"),
                    VEH_MODEL: grid.jqGrid("getCell", selId, "VEH_MODEL"),

                    VEH_BODY_TYPE: grid.jqGrid("getCell", selId, "VEH_BODY_TYPE"),
                    VEH_MANUFACTURE_YR: grid.jqGrid("getCell", selId, "VEH_MANUFACTURE_YR"),
                    VEH_CHASSIS_NO: grid.jqGrid("getCell", selId, "VEH_CHASSIS_NO"),
                    VEH_CUBIC_CAP: grid.jqGrid("getCell", selId, "VEH_CUBIC_CAP"),
                    VEH_PASSENGERS: grid.jqGrid("getCell", selId, "VEH_PASSENGERS"),
                    VEH_EXCESS_APP: grid.jqGrid("getCell", selId, "VEH_EXCESS_APP"),

                    VEH_EXCESS_PERC: grid.jqGrid("getCell", selId, "VEH_EXCESS_PERC"),
                    VEH_EXCESS_MIN: grid.jqGrid("getCell", selId, "VEH_EXCESS_MIN"),
                    VEH_EXCESS_MAX: grid.jqGrid("getCell", selId, "VEH_EXCESS_MAX"),
                    VEH_EXCESS_FIX: grid.jqGrid("getCell", selId, "VEH_EXCESS_FIX"),
                    VEH_EXTRA_TPPD: grid.jqGrid("getCell", selId, "VEH_EXTRA_TPPD"),
                    VEH_TP_INTEREST: grid.jqGrid("getCell", selId, "VEH_TP_INTEREST"),

                    VEH_TP_DETAILS: grid.jqGrid("getCell", selId, "VEH_TP_DETAILS"),
                    VEH_PROP_DECLINED: grid.jqGrid("getCell", selId, "VEH_PROP_DECLINED"),
                    VEH_DECLINED_REASON: grid.jqGrid("getCell", selId, "VEH_DECLINED_REASON"),
                    VEH_POL_CANCELLED: grid.jqGrid("getCell", selId, "VEH_POL_CANCELLED"),
                    VEH_CANCELLED_REASON: grid.jqGrid("getCell", selId, "VEH_CANCELLED_REASON"),
                    VEH_SI_FC: grid.jqGrid("getCell", selId, "VEH_SI_FC"),

                    VEH_SI_BC: grid.jqGrid("getCell", selId, "VEH_SI_BC"),
                    VEH_TOT_PREM_FC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_FC"),
                    VEH_TOT_PREM_BC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_BC"),
                    VEH_RI_APPLICABLE: grid.jqGrid("getCell", selId, "VEH_RI_APPLICABLE"),
                    VEH_RI_EFF_DATE: grid.jqGrid("getCell", selId, "VEH_RI_EFF_DATE"),
                    VEH_RI_SI_FC: grid.jqGrid("getCell", selId, "VEH_RI_SI_FC"),

                    VEH_RI_SI_BC: grid.jqGrid("getCell", selId, "VEH_RI_SI_BC"),
                    VEH_RI_PREM_FC: grid.jqGrid("getCell", selId, "VEH_RI_PREM_FC"),
                    VEH_RI_PREM_BC: grid.jqGrid("getCell", selId, "VEH_RI_PREM_BC"),
                    VEH_RISK_PREM_FC: grid.jqGrid("getCell", selId, "VEH_RISK_PREM_FC"),
                    VEH_TP_PREM_BC: grid.jqGrid("getCell", selId, "VEH_TP_PREM_BC"),
                    VEH_ADJ_PREM_FC: grid.jqGrid("getCell", selId, "VEH_ADJ_PREM_FC"),

                    VEH_ADJ_PREM_BC: grid.jqGrid("getCell", selId, "VEH_ADJ_PREM_BC"),
                    VEH_DISC_FC: grid.jqGrid("getCell", selId, "VEH_DISC_FC"),
                    VEH_DISC_BC: grid.jqGrid("getCell", selId, "VEH_DISC_BC"),
                    VEH_LOAD_FC: grid.jqGrid("getCell", selId, "VEH_LOAD_FC"),
                    VEH_LOAD_BC: grid.jqGrid("getCell", selId, "VEH_LOAD_BC"),
                    VEH_COMP_FEE_FC: grid.jqGrid("getCell", selId, "VEH_COMP_FEE_FC"),

                    VEH_COMP_FEE_BC: grid.jqGrid("getCell", selId, "VEH_COMP_FEE_BC"),
                    VEH_COMMISSION_FC: grid.jqGrid("getCell", selId, "VEH_COMMISSION_FC"),
                    VEH_COMMISSION_BC: grid.jqGrid("getCell", selId, "VEH_COMMISSION_BC"),
                    VEH_TXN_STATUS: grid.jqGrid("getCell", selId, "VEH_TXN_STATUS"),
                    VEH_RISK_STATE: grid.jqGrid("getCell", selId, "VEH_RISK_STATE"),
                    VEH_RENEWAL_STATUS: grid.jqGrid("getCell", selId, "VEH_RENEWAL_STATUS"),

                    VEH_END_TYPE: grid.jqGrid("getCell", selId, "VEH_END_TYPE"),
                    VEH_APPROVE_DATE: grid.jqGrid("getCell", selId, "VEH_APPROVE_DATE"),
                    VEH_ACCT_DATE: grid.jqGrid("getCell", selId, "VEH_ACCT_DATE"),
                    VEH_CRTE_BY: grid.jqGrid("getCell", selId, "VEH_CRTE_BY"),
                    VEH_CRTE_DATE: grid.jqGrid("getCell", selId, "VEH_CRTE_DATE"),
                    VEH_MOD_BY: grid.jqGrid("getCell", selId, "VEH_MOD_BY"),
                    VEH_MOD_DATE: grid.jqGrid("getCell", selId, "VEH_MOD_DATE"),
                    VEH_STATUS: grid.jqGrid("getCell", selId, "VEH_STATUS"),

                }, "#motorRiskForm");
                u.fill_form({

                    RCOV_RISK_NO: grid.jqGrid("getCell", selId, "VEH_RISK_CODE"),
                }, "#coverForm");

                u.fill_form({
                    FINW_ORIG_SI_FC: grid.jqGrid("getCell", selId, "VEH_SI_FC"),
                    FINW_ORIG_SI_BC: grid.jqGrid("getCell", selId, "VEH_SI_BC"),
                    FINW_ORIG_PREM_FC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_FC"),
                    FINW_ORIG_PREM_BC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_BC"),
                }, "#facInwardForm");

                u.fill_form({
                    FOTW_SHARE_SI_FC: grid.jqGrid("getCell", selId, "VEH_SI_FC"),
                    FOTW_SHARE_SI_BC: grid.jqGrid("getCell", selId, "VEH_SI_BC"),
                    FOTW_SHARE_PREM_FC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_FC"),
                    FOTW_SHARE_PREM_BC: grid.jqGrid("getCell", selId, "VEH_TOT_PREM_BC"),

                }, "#CoinsLeaderForm");
            },

             function (id) {

                 var grid = $scope.motor_grid;

                 var selId = grid.jqGrid("getGridParam", "selrow");
                 var vehRiskId = grid.jqGrid("getCell", selId, "VEH_SYS_ID");

                 if (vehRiskId === $("#VEH_SYS_ID").val()) {

                     $("#MotorRiskModal").modal();

                     //$("#RiskCoverModal").modal();
                     //Hide covers not related to selected risk

                 }
                 else {
                     u.growl_warning("No Vehicle Risk selected, Please check and try again");
                 };


             }),

        //Risk Cover Grid
        $scope.cover_grid = u.default_grid("#gridAppCovers", "#gridAppCoversPager", "Cover",
            [
                    "Cover Code", "Cover Name", "Sum Insured FC", "Sum Insured BC", "Rate",
                    "Gross Premium FC", "Gross Premium BC", "Annual Premium FC", "Annual Premium BC", "Net Premium FC", "Net Premium BC",
                    "Discount Applicable",
                    "Discount FC",
                    "Discount BC", "Load Apllicable", "Load FC", "Load BC", "Cover id", "Risk id",
                    "Risk no", "Pol doc no", "End. no", "Cover Type", "RI SI YN", "RI Premium YN",
                    "Rate Change", "SI Change", "Cover Level", "Premium Refund", "RI App", "User Premium",
                    "Txn State", "Create By", "Create Date", "Modified By", "Modified Date",
                    "Record Status"

            ],
            [
                { name: "RCOV_CODE", index: "RCOV_CODE", width: 150 },
                { name: "RCOV_NAME", index: "RCOV_NAME", width: 150 },
                { name: "RCOV_SI_FC", index: "RCOV_SI_FC", width: 150 },
                { name: "RCOV_SI_BC", index: "RCOV_SI_BC", width: 150 },
                { name: "RCOV_RATE", index: "RCOV_RATE", width: 150 },
                { name: "RCOV_GROSS_PREM_FC", index: "RCOV_GROSS_PREM_FC", width: 150 },
                { name: "RCOV_GROSS_PREM_BC", index: "RCOV_GROSS_PREM_BC", width: 150 },
                { name: "RCOV_ANNL_PREM_FC", index: "RCOV_ANNL_PREM_FC", width: 150 },
                { name: "RCOV_ANNL_PREM_BC", index: "RCOV_ANNL_PREM_BC", width: 150 },
                { name: "RCOV_NET_PREM_FC", index: "RCOV_NET_PREM_FC", width: 150 },
                { name: "RCOV_NET_PREM_BC", index: "RCOV_NET_PREM_BC", width: 150 },

                { name: "RCOV_DISC_YN", index: "RCOV_DISC_YN", width: 150 },

                { name: "RCOV_DISC_FC", index: "RCOV_DISC_FC", width: 150 },
                { name: "RCOV_DISC_BC", index: "RCOV_DISC_BC", width: 150 },

                { name: "RCOV_LOAD_YN", index: "RCOV_LOAD_YN", width: 150 },

                { name: "RCOV_LOAD_FC", index: "RCOV_LOAD_FC", width: 150 },
                { name: "RCOV_LOAD_BC", index: "RCOV_LOAD_BC", width: 150 },

                { name: "RCOV_SYS_ID", index: "RCOV_SYS_ID", hidden: false, width: 150, sorttype: "int" },
                { name: "RCOV_RISK_SYS_ID", index: "RCOV_RISK_SYS_ID", hidden: false, width: 150 },
                { name: "RCOV_RISK_NO", index: "RCOV_RISK_NO", hidden: false, width: 150 },
                { name: "RCOV_POLH_DOC_NO", index: "RCOV_POLH_DOC_NO", width: 150 },
                { name: "RPCOV_END_NO", index: "RPCOV_END_NO", width: 150 },
                { name: "COVER_TYPE", index: "COVER_TYPE", width: 150 },
                { name: "RCOV_RI_SI_YN", index: "RCOV_RI_SI_YN", hidden: false, width: 150 },
                { name: "RCOV_RI_PREM_YN", index: "RCOV_RI_PREM_YN", hidden: false, width: 150 },

                { name: "RCOV_RATE_CHANGE", index: "RCOV_RATE_CHANGE", width: 150 },
                { name: "RCOV_SI_CHANGE", index: "RCOV_SI_CHANGE", width: 150 },
                { name: "RCOV_COVER_LEVEL", index: "RCOV_COVER_LEVEL", width: 150 },
                { name: "RCOV_PREM_REFUND", index: "RCOV_PREM_REFUND", width: 150 },
                { name: "RCOV_RI_YN", index: "RCOV_RI_YN", width: 150 },
                { name: "RCOV_USER_PREM", index: "RCOV_USER_PREM", width: 150 },

                //
                { name: "RCOV_TXN_STATE", index: "RCOV_TXN_STATE", width: 150 },
                { name: "RCOV_CRTE_BY", index: "RCOV_CRTE_BY", width: 150 },
                { name: "RCOV_CRTE_DATE", index: "RCOV_CRTE_DATE", width: 150 },
                { name: "RCOV_MOD_BY", index: "RCOV_MOD_BY", width: 150 },
                { name: "RCOV_MOD_DATE", index: "RCOV_MOD_DATE", width: 150 },
                { name: "RCOV_STATUS", index: "RCOV_STATUS", width: 150 },
            ],

           //Retrive Grid data into form input fields on row click..
            function (selId) {

                var grid = $scope.cover_grid;

                $("form input[name='RCOV_SYS_ID']").data("update", true);
                u.fill_form({
                    RCOV_SYS_ID: grid.jqGrid("getCell", selId, "RCOV_SYS_ID"),
                    RCOV_RISK_SYS_ID: grid.jqGrid("getCell", selId, "RCOV_RISK_SYS_ID"),
                    RCOV_RISK_NO: grid.jqGrid("getCell", selId, "RCOV_RISK_NO"),
                    RCOV_POLH_DOC_NO: grid.jqGrid("getCell", selId, "RCOV_POLH_DOC_NO"),
                    RPCOV_END_NO: grid.jqGrid("getCell", selId, "RPCOV_END_NO"),
                    RCOV_CODE: grid.jqGrid("getCell", selId, "RCOV_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", selId, "RCOV_NAME"),
                    RCOV_SI_FC: grid.jqGrid("getCell", selId, "RCOV_SI_FC"),

                    RCOV_SI_BC: grid.jqGrid("getCell", selId, "RCOV_SI_BC"),
                    RCOV_RATE: grid.jqGrid("getCell", selId, "RCOV_RATE"),
                    RCOV_GROSS_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_GROSS_PREM_FC"),
                    RCOV_GROSS_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_GROSS_PREM_BC"),
                    RCOV_NET_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_NET_PREM_FC"),
                    RCOV_NET_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_NET_PREM_BC"),
                    RCOV_RI_SI_YN: grid.jqGrid("getCell", selId, "RCOV_RI_SI_YN"),

                    RCOV_RI_PREM_YN: grid.jqGrid("getCell", selId, "RCOV_RI_PREM_YN"),
                    RCOV_TYPE: grid.jqGrid("getCell", selId, "RCOV_TYPE"),
                    RCOV_DISC_YN: grid.jqGrid("getCell", selId, "RCOV_DISC_YN"),
                    RCOV_DISC_FC: grid.jqGrid("getCell", selId, "RCOV_DISC_FC"),
                    RCOV_DISC_BC: grid.jqGrid("getCell", selId, "RCOV_DISC_BC"),
                    RCOV_LOAD_YN: grid.jqGrid("getCell", selId, "RCOV_LOAD_YN"),
                    RCOV_LOAD_FC: grid.jqGrid("getCell", selId, "RCOV_LOAD_FC"),

                    RCOV_SI_CHANGE: grid.jqGrid("getCell", selId, "RCOV_SI_CHANGE"),
                    RCOV_RATE_CHANGE: grid.jqGrid("getCell", selId, "RCOV_RATE_CHANGE"),

                    RCOV_LOAD_BC: grid.jqGrid("getCell", selId, "RCOV_LOAD_BC"),
                    RCOV_TXN_STATE: grid.jqGrid("getCell", selId, "RCOV_TXN_STATE"),
                    RCOV_CRTE_BY: grid.jqGrid("getCell", selId, "RCOV_CRTE_BY"),
                    RCOV_CRTE_DATE: grid.jqGrid("getCell", selId, "RCOV_CRTE_DATE"),
                    RCOV_MOD_BY: grid.jqGrid("getCell", selId, "RCOV_MOD_BY"),
                    RCOV_MOD_DATE: grid.jqGrid("getCell", selId, "RCOV_MOD_DATE"),
                    RCOV_STATUS: grid.jqGrid("getCell", selId, "RCOV_STATUS"),
                    RCOV_ANNL_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_ANNL_PREM_FC"),
                    RCOV_ANNL_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_ANNL_PREM_BC")
                }, "#coverForm");

            },
            //On double click
        function (id) {

            //alert("am double cliked")
        },
        //On row complete function:
        function (cov) {

            // alert("am double cliked");
            // hideShowCovers();
            // $scope.SumCoverRiskValues();

        }
      ); //end of grid definition


        // Agent/Broker Commission   
        $scope.intermCom_grid = u.default_grid("#grdIntermediaryComm", "#grdIntermediaryCommPager", "Agent/Broker Commission",
            ["Intermediary Code", "Name", "Premium Amt FC", "Premium Amt BC", "Comm Per(%)", "Comm. Amount FC", "Comm. Amount BC", "Status",
             "Pols_sysID", "Pol_end_No", "COB", "Office", "Comm Date", "Created_By", "Created_Date",
             "Mod_date", "Mod_by", "Com_sys_ID"],
            [
                { name: "CMM_INT_CODE", index: "CMM_INT_CODE", width: 150 },
                 { name: "CMM_INT_NAME", index: "CMM_INT_NAME", width: 150 },
                { name: "CMM_PREM_AMT_FC", index: "CMM_PREM_AMT_FC", width: 150 },
                { name: "CMM_PREM_AMT_BC", index: "CMM_PREM_AMT_BC", width: 150 },

                { name: "CMM_COM_PERC", index: "CMM_COM_PERC", width: 150 },
                { name: "CMM_COM_AMT_FC", index: "CMM_COM_AMT_FC", width: 150 },
                { name: "CMM_COM_AMT_BC", index: "CMM_COM_AMT_BC", width: 150 },

                { name: "CMM_STATUS", index: "CMM_STATUS", hidden: false, width: 200 },

                { name: "CMM_POL_SYS_ID", index: "CMM_POL_SYS_ID", hidden: false, width: 200 },
                { name: "CMM_END_NO", index: "CMM_END_NO", hidden: false, width: 200 },
                { name: "CMM_COB_CODE", index: "CMM_COB_CODE", hidden: false, width: 200 },
                { name: "CMM_OFFICE", index: "CMM_OFFICE", hidden: false, width: 200 },
                { name: "CMM_COM_DATE", index: "CMM_COM_DATE", hidden: false, width: 200 },
                { name: "CMM_CRTE_BY", index: "CMM_CRTE_BY", hidden: false, width: 200 },
                { name: "CMM_CRTE_DATE", index: "CMM_CRTE_DATE", hidden: false, width: 200 },
                { name: "CMM_MOD_BY", index: "CMM_MOD_BY", hidden: false, width: 200 },
                { name: "CMM_MOD_DATE", index: "CMM_MOD_DATE", hidden: false, width: 200 },
                { name: "CMM_SYS_ID", index: "CMM_SYS_ID", hidden: false, width: 200 },


            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Policy Header Excess
        $scope.polhexcess_grid = u.default_grid("#grdPolhExcess", "#grdPolhExcessPager", "Policy Excess",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount",
             "Created by", "Created date", "Status"],
            [
                { name: "EXS_CODE", index: "EXS_CODE", width: 150 },
                { name: "EXS_TYPE", index: "EXS_TYPE", width: 150 },
                { name: "EXS_NART", index: "EXS_NART", width: 150 },
                { name: "EXS_RATE", index: "EXS_RATE", hidden: false, width: 200 },
                { name: "EXS_AMOUNT", index: "EXS_AMOUNT", width: 150 },
                { name: "EXS_MIN_AMOUNT", index: "EXS_MIN_AMOUNT", width: 150 },
                { name: "EXS_MAX_AMOUNT", index: "EXS_MAX_AMOUNT", width: 150 },

                { name: "EXS_CRTE_BY", index: "EXS_CRTE_BY", hidden: false, width: 200 },
                { name: "EXS_CRTE_DATE", index: "EXS_CRTE_DATE", hidden: false, width: 200 },
                { name: "EXS_STATUS", index: "EXS_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.polhexcess_grid;

                $("form input[name='EXS_CODE']").data("update", true);
                u.fill_form({
                    EXS_CODE: grid.jqGrid("getCell", selId, "EXS_CODE"),
                    EXS_TYPE: grid.jqGrid("getCell", selId, "EXS_TYPE"),
                    EXS_NART: grid.jqGrid("getCell", selId, "EXS_NART"),
                    EXS_RATE: grid.jqGrid("getCell", selId, "EXS_RATE"),
                    EXS_AMOUNT: grid.jqGrid("getCell", selId, "EXS_AMOUNT"),
                    EXS_MIN_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MIN_AMOUNT"),
                    EXS_MAX_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MAX_AMOUNT"),

                }, "#polhexcessForm");
            }),


        // Risk Excess
        $scope.riskexcess_grid = u.default_grid("#grdRiskExcess", "#grdRiskExcessPager", "Risk Excess",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount",
             "Created by", "Created date", "Status"],
            [
                { name: "EXS_CODE", index: "EXS_CODE", width: 150 },
                { name: "EXS_TYPE", index: "EXS_TYPE", width: 150 },
                { name: "EXS_NART", index: "EXS_NART", width: 150 },
                { name: "EXS_RATE", index: "EXS_RATE", hidden: false, width: 200 },
                { name: "EXS_AMOUNT", index: "EXS_AMOUNT", width: 150 },
                { name: "EXS_MIN_AMOUNT", index: "EXS_MIN_AMOUNT", width: 150 },
                { name: "EXS_MAX_AMOUNT", index: "EXS_MAX_AMOUNT", width: 150 },
                { name: "EXS_CRTE_BY", index: "EXS_CRTE_BY", hidden: false, width: 200 },
                { name: "EXS_CRTE_DATE", index: "EXS_CRTE_DATE", hidden: false, width: 200 },
                { name: "EXS_STATUS", index: "EXS_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.riskexcess_grid;

                $("form input[name='EXS_CODE']").data("update", true);
                u.fill_form({
                    EXS_CODE: grid.jqGrid("getCell", selId, "EXS_CODE"),
                    EXS_TYPE: grid.jqGrid("getCell", selId, "EXS_TYPE"),
                    EXS_NART: grid.jqGrid("getCell", selId, "EXS_NART"),
                    EXS_RATE: grid.jqGrid("getCell", selId, "EXS_RATE"),
                    EXS_AMOUNT: grid.jqGrid("getCell", selId, "EXS_AMOUNT"),
                    EXS_MIN_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MIN_AMOUNT"),
                    EXS_MAX_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MAX_AMOUNT"),

                }, "#riskexcessForm");
            }),


        // Cover Excess
        $scope.coverexcess_grid = u.default_grid("#grdCoverExcess", "#grdCoverExcessPager", "Cover Excess",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount",
             "Created by", "Created date", "Status"],
            [
                { name: "EXS_CODE", index: "EXS_CODE", width: 150 },
                { name: "EXS_TYPE", index: "EXS_TYPE", width: 150 },
                { name: "EXS_NART", index: "EXS_NART", width: 150 },
                { name: "EXS_RATE", index: "EXS_RATE", hidden: false, width: 200 },
                { name: "EXS_AMOUNT", index: "EXS_AMOUNT", width: 150 },
                { name: "EXS_MIN_AMOUNT", index: "EXS_MIN_AMOUNT", width: 150 },
                { name: "EXS_MAX_AMOUNT", index: "EXS_MAX_AMOUNT", width: 150 },
                { name: "EXS_CRTE_BY", index: "EXS_CRTE_BY", hidden: false, width: 200 },
                { name: "EXS_CRTE_DATE", index: "EXS_CRTE_DATE", hidden: false, width: 200 },
                { name: "EXS_STATUS", index: "EXS_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.coverexcess_grid;

                $("form input[name='EXS_CODE']").data("update", true);
                u.fill_form({
                    EXS_CODE: grid.jqGrid("getCell", selId, "EXS_CODE"),
                    EXS_TYPE: grid.jqGrid("getCell", selId, "EXS_TYPE"),
                    EXS_NART: grid.jqGrid("getCell", selId, "EXS_NART"),
                    EXS_RATE: grid.jqGrid("getCell", selId, "EXS_RATE"),
                    EXS_AMOUNT: grid.jqGrid("getCell", selId, "EXS_AMOUNT"),
                    EXS_MIN_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MIN_AMOUNT"),
                    EXS_MAX_AMOUNT: grid.jqGrid("getCell", selId, "EXS_MAX_AMOUNT"),

                }, "#coverexcessForm");
            }),

        // Policy Discount/Loading
        $scope.polhdiscloading_grid = u.default_grid("#grdPolhDiscloading", "#grdPolhDiscloadingPager", "Policy Discount/Loading",
            [" Code", "Name", "Rate", "Deft. Amount", "DL Amount FC", "DL Amount BC", "Premium FC", "Premium BC", "Type", "Created by", "Created date", "Update  by", "Update date", "Status"],
                [
                { name: "DL_CODE", index: "DL_CODE", width: 100 },
                 { name: "DL_NAME", index: "DL_NAME", width: 200 },
                { name: "DL_PERC", index: "DL_PERC", width: 100 },
                 { name: "DL_DEFT_AMT", index: "DL_DEFT_AMT", width: 100 },
                 { name: "DL_AMT_FC", index: "DL_AMT_FC", width: 100 },
                 { name: "DL_AMT_BC", index: "DL_AMT_BC", hidden: false, width: 200 },
                  { name: "DL_PREM_BC", index: "DL_PREM_BC", width: 150 },
                { name: "DL_PREM_FC", index: "DL_PREM_FC", width: 150 },
                 { name: "DL_TYPE", index: "DL_TYPE", width: 150 },
                { name: "DL_CRTE_BY", index: "DL_CRTE_BY", hidden: false, width: 200 },
                { name: "DL_CRTE_DATE", index: "DL_CRTE_DATE", hidden: false, width: 200 },
                { name: "DL_UPD_BY", index: "DL_UPD_BY", hidden: false, width: 200 },
                { name: "DL_UPD_DATE", index: "DL_UPD_DATE", hidden: false, width: 200 },
                { name: "DL_STATUS", index: "DL_STATUS", hidden: false, width: 200 },

                ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.polhdiscloading_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    DL_CODE: grid.jqGrid("getCell", selId, "DL_CODE"),
                    DL_TYPE: grid.jqGrid("getCell", selId, "DL_TYPE"),
                    DL_PERC: grid.jqGrid("getCell", selId, "DL_PERC"),
                    DL_AMT_BC: grid.jqGrid("getCell", selId, "DL_AMT_BC"),
                    DL_AMT_FC: grid.jqGrid("getCell", selId, "DL_AMT_FC"),
                    DL_PREM_BC: grid.jqGrid("getCell", selId, "DL_PREM_BC"),
                    DL_PREM_FC: grid.jqGrid("getCell", selId, "DL_PREM_FC"),

                }, "#polhdiscloadingForm");
            }),


        // Risk Discount/Loading   // Risk Discount/Loading  RiskDiscLoadModal btnRiskDiscLoad gridRiskDiscLoad riskdiscload_grid
        $scope.riskdiscload_grid = u.default_grid("#gridRiskDiscLoad", "#gridRiskDiscLoadPager", "Risk Discount/Loading",
            [" Code", "Name", "Default Perc", "Default Amount", "Type", ],
                [
                { name: "DL_CODE", index: "DL_CODE", width: 100 },
                 { name: "DL_NAME", index: "DL_NAME", width: 250 },
                { name: "DL_PERC", index: "DL_PERC", width: 100 },
                { name: "DL_DEFT_AMT", index: "DL_DEFT_AMT", width: 100 },
                { name: "DL_TYPE", index: "DL_TYPE", width: 100 },
                ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.riskdiscload_grid;
                u.fill_form({
                    DL_CODE: grid.jqGrid("getCell", selId, "DL_CODE"),
                    DL_NAME: grid.jqGrid("getCell", selId, "DL_NAME"),
                    DL_TYPE: grid.jqGrid("getCell", selId, "DL_TYPE"),
                    DL_PERC: grid.jqGrid("getCell", selId, "DL_PERC"),
                    DL_DEFT_AMT: grid.jqGrid("getCell", selId, "DL_DEFT_AMT")
                }, "#riskdiscloadingForm");
            },
                function (selId) {
                    var grid = $scope.riskdiscload_grid;
                    u.fill_form({
                        DL_CODE: grid.jqGrid("getCell", selId, "DL_CODE"),
                        DL_NAME: grid.jqGrid("getCell", selId, "DL_NAME"),
                        DL_TYPE: grid.jqGrid("getCell", selId, "DL_TYPE"),
                        DL_PERC: grid.jqGrid("getCell", selId, "DL_PERC"),
                        DL_DEFT_AMT: grid.jqGrid("getCell", selId, "DL_DEFT_AMT")
                    }, "#riskdiscloadingForm");

                    // hide modal on double click
                    $("#RiskDiscLoadModal").modal("hide");
                }
            ),

        $scope.riskdiscloading_grid = u.default_grid("#grdRiskDiscloading", "#grdRiskDiscloadingPager", "Risk Discount/Loading",
           [" Code", "Name", "Rate", "Deft. Amount", "DL Amount FC", "DL Amount BC", "Premium FC", "Premium BC", "Type", "Created by", "Created date", "Update  by", "Update date", "Status"],
                [
                { name: "DL_CODE", index: "DL_CODE", width: 100 },
                 { name: "DL_NAME", index: "DL_NAME", width: 200 },
                { name: "DL_PERC", index: "DL_PERC", width: 100 },
                 { name: "DL_DEFT_AMT", index: "DL_DEFT_AMT", width: 100 },
                 { name: "DL_AMT_FC", index: "DL_AMT_FC", width: 100 },
                 { name: "DL_AMT_BC", index: "DL_AMT_BC", hidden: false, width: 200 },
                  { name: "DL_PREM_BC", index: "DL_PREM_BC", width: 150 },
                { name: "DL_PREM_FC", index: "DL_PREM_FC", width: 150 },
                 { name: "DL_TYPE", index: "DL_TYPE", width: 150 },
                { name: "DL_CRTE_BY", index: "DL_CRTE_BY", hidden: false, width: 200 },
                { name: "DL_CRTE_DATE", index: "DL_CRTE_DATE", hidden: false, width: 200 },
                { name: "DL_UPD_BY", index: "DL_UPD_BY", hidden: false, width: 200 },
                { name: "DL_UPD_DATE", index: "DL_UPD_DATE", hidden: false, width: 200 },
                { name: "DL_STATUS", index: "DL_STATUS", hidden: false, width: 200 },

                ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.polhdiscloading_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    DL_CODE: grid.jqGrid("getCell", selId, "DL_CODE"),
                    DL_TYPE: grid.jqGrid("getCell", selId, "DL_TYPE"),
                    DL_PERC: grid.jqGrid("getCell", selId, "DL_PERC"),
                    DL_AMT_BC: grid.jqGrid("getCell", selId, "DL_AMT_BC"),
                    DL_AMT_FC: grid.jqGrid("getCell", selId, "DL_AMT_FC"),
                    DL_PREM_BC: grid.jqGrid("getCell", selId, "DL_PREM_BC"),
                    DL_PREM_FC: grid.jqGrid("getCell", selId, "DL_PREM_FC"),

                }, "#polhdiscloadingForm");
            }),



        // Cover Discount/Loading
        $scope.coverdiscloading_grid = u.default_grid("#grdCoverDiscloading", "#grdCoverDiscloadingPager", "Cover Discount/Loading",
            [" Code", "Type", "Narration", "Rate", "Amount", "Min Amount", "Max Amount",
             "Created by", "Created date", "Status"],
            [
                { name: "DL_CODE", index: "DL_CODE" },
                { name: "DL_TYPE", index: "DL_TYPE" },
                { name: "DL_RATE", index: "DL_RATE" },
                { name: "DL_AMT_BC", index: "DL_AMT_BC" },
                { name: "DL_AMT_FC", index: "DL_AMT_FC" },
                { name: "DL_PREM_BC", index: "DL_PREM_BC" },
                { name: "DL_PREM_FC", index: "DL_PREM_FC" },
                { name: "DL_CRTE_BY", index: "DL_CRTE_BY" },
                { name: "DL_CRTE_DATE", index: "DL_CRTE_DATE" },
                { name: "DL_STATUS", index: "DL_STATUS" },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.coverdiscloading_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    DL_CODE: grid.jqGrid("getCell", selId, "DL_CODE"),
                    DL_TYPE: grid.jqGrid("getCell", selId, "DL_TYPE"),
                    DL_RATE: grid.jqGrid("getCell", selId, "DL_RATE"),
                    DL_AMT_BC: grid.jqGrid("getCell", selId, "DL_AMT_BC"),
                    DL_AMT_FC: grid.jqGrid("getCell", selId, "DL_AMT_FC"),
                    DL_PREM_BC: grid.jqGrid("getCell", selId, "DL_PREM_BC"),
                    DL_PREM_FC: grid.jqGrid("getCell", selId, "DL_PREM_FC"),

                }, "#coverdiscloadingForm");
            }),



        // Cover Discount/Loading
        $scope.riskaccessories_grid = u.default_grid("#grdRiskAccessories", "#grdRiskAccessoriesPager", "Risk Accessories",
            [" Code", "Name", "Value", "Rate", "Premium BC", "Premium FC",
             "Created by", "Created date", "Status"],
            [
                { name: "ACC_CODE", index: "ACC_CODE" },
                { name: "ACC_NAME", index: "ACC_NAME" },
                { name: "ACC_VALUE", index: "ACC_VALUE" },
                { name: "ACC_RATE", index: "ACC_RATE" },
                { name: "ACC_PREM_BC", index: "ACC_PREM_BC" },
                { name: "ACC_PREM_FC", index: "ACC_PREM_FC" },
                { name: "ACC_CRTE_BY", index: "ACC_CRTE_BY" },
                { name: "ACC_CRTE_DATE", index: "ACC_CRTE_DATE" },
                { name: "ACC_STATUS", index: "ACC_STATUS" },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.riskaccessories_grid;

                $("form input[name='ACC_CODE']").data("update", true);
                u.fill_form({
                    ACC_CODE: grid.jqGrid("getCell", selId, "ACC_CODE"),
                    ACC_NAME: grid.jqGrid("getCell", selId, "ACC_NAME"),
                    ACC_VALUE: grid.jqGrid("getCell", selId, "ACC_VALUE"),
                    ACC_RATE: grid.jqGrid("getCell", selId, "ACC_RATE"),
                    ACC_PREM_BC: grid.jqGrid("getCell", selId, "ACC_PREM_BC"),
                    ACC_PREM_FC: grid.jqGrid("getCell", selId, "ACC_PREM_FC"),

                }, "#riskaccessoriesForm");
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
            function (selId) {

            }),




        // Applicable Fees Summary
        $scope.polfees_grid = u.default_grid("#gridPolFees", "#gridPolFeesPager", "Policy Fees Summary",
            ["FEE CODE", "FEE NAME", "FC AMOUNT", "BC AMOUNT", "POL SYS id", "END NO.", "STATUS",
                    "CREATED BY", "CREATED DATE", "MOD BY", "MOD DATE", "FEE SYS ID"],
            [
                  { name: "POL_FEE_CODE", index: "POL_FEE_CODE", width: 150 },
                { name: "POL_FEE_NAME", index: "POL_FEE_NAME", width: 200 },
                { name: "POL_FEE_FC_AMOUNT", index: "POL_FEE_FC_AMOUNT", width: 150 },
                { name: "POL_FEE_BC_AMOUNT", index: "POL_FEE_BC_AMOUNT", width: 150 },

                { name: "POL_FEE_POL_SYS_ID", index: "POL_FEE_POL_SYS_ID", width: 150 },

                { name: "POL_FEE_END_NO", index: "POL_FEE_END_NO", width: 150 },
                { name: "POL_FEE_STATUS", index: "POL_FEE_STATUS", width: 150 },


                { name: "POL_FEE_CRTE_BY", index: "POL_FEE_CRTE_BY", width: 150 },
                { name: "POL_FEE_CRTE_DATE", index: "POL_FEE_CRTE_DATE", width: 150 },
                { name: "POL_FEE_MOD_BY", index: "POL_FEE_MOD_BY", width: 150 },
                { name: "POL_FEE_MOD_DATE", index: "POL_FEE_MOD_DATE", width: 150 },
                { name: "POL_FEE_SYS_ID", index: "APP_FEE_SYS_ID", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Premium Payment Summary
        $scope.payment_grid = u.default_grid("#gridPremPmt", "#gridPremPmtPager", "Premium Payment Summary",
            ["Description", "FC_Amount", "BC_Amount"],
            [
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 150 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),



        // Premium Payment Summary
        $scope.RiskPremium_grid = u.default_grid("#gridRiskPremSummary", "#gridRiskPremSummaryPager", "Risk Premium Summary",
            ["Code", "Description", "FC_Amount", "BC_Amount"],
            [
                { name: "CODE", index: "DESCRIPTION", width: 150 },
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 350 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Reinsurance Share Summary
        $scope.coinsurance_grid = u.default_grid("#gridTreatyShare", "#gridTreatySharePager", "Reinsurance Share",
            ["RI Company", "Share %", "Sum Insured Share", "Premium Share"],
            [
                { name: "TTS_RI_COMP", index: "TTS_RI_COMP", width: 150 },
                { name: "TTS_PERC", index: "TTS_PERC", width: 150 },
                { name: "TTS_SI", index: "TTS_SI", width: 150 },
                { name: "TTS_PREM_FC", index: "TTS_PREM_FC", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // FAC In Premium Summary
        $scope.facinpremium_grid = u.default_grid("#gridTreatAppor", "#gridTreatApporPager", "Treaty Apportionment",
            ["Type", "Limit", "Share Amount", "Share %"],
            [
                { name: "RIS_TYPE", index: "RIS_TYPE", width: 150 },
                { name: "RIS_LIMIT", index: "RIS_LIMIT", width: 150 },
                { name: "RIS_SHARE_AMT_FC", index: "RIS_SHARE_AMT_FC", width: 150 },
                { name: "RIS_SHARE_PERC", index: "RIS_SHARE_PERC", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ["Risk ID", "Reg. NO", "Start Date", "End Date", "RI Sum Insured", "RI Premium FC", "RI Premium BC"],
            [
                { name: "RISK_ID", index: "VEH_ID", width: 150 },
                { name: "RISK_REG_NO", index: "RISK_REG_NO", width: 150 },
                { name: "RISK_START_DATE", index: "RISK_START_DATE", width: 150 },
                { name: "RISK_END_DATE", index: "RISK_END_DATE", width: 150 },
                { name: "RISK_RI_SI", index: "RISK_RI_SI", width: 150 },
                { name: "RISK_RI_PREM_FC", index: "RISK_RI_PREM_FC", width: 150 },
                { name: "VEH_RI_PREM_BC", index: "VEH_RI_PREM_BC", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

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
            function (selId) {

            }),

        //

        // Motor Risk Grid ****
        $scope.motorRisks_grid = u.default_grid("#gridMotorRisk", "#gridMotorRiskPager", "Motor Risk",
            ["Code", "Name", "RiskID"],
            [
                { name: "RISK_CODE", index: "RISK_CODE", width: 150 },
                { name: "RISK_NAME", index: "RISK_NAME", width: 500 },
                { name: "RISK_ID", index: "RISK_ID", hidden: true, width: 150 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (selId) {

                var grid = $scope.motorRisks_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    VEH_RISK_CODE: grid.jqGrid("getCell", selId, "RISK_CODE"),
                    VEH_RISK_NAME: grid.jqGrid("getCell", selId, "RISK_NAME"),
                    VEH_RISK_NO: grid.jqGrid("getCell", selId, "RISK_ID")

                }, "#motorRiskForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (selId) {

                var grid = $scope.motorRisks_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    VEH_RISK_CODE: grid.jqGrid("getCell", selId, "RISK_CODE"),
                    VEH_RISK_NAME: grid.jqGrid("getCell", selId, "RISK_NAME"),
                    VEH_RISK_NO: grid.jqGrid("getCell", selId, "RISK_ID")

                }, "#motorRiskForm");

                // hide modal on double click
                $("#motorRiskLovModal").modal("hide");

            }),

        // Risk Covers ****
        $scope.riskCovers_grid = u.default_grid("#gridAddNewCover", "#gridAddNewCoverPager", "Risk Covers",
            ["Code", "Name", "Sum Insured", "Deft Rate", "Deft Premium"],
            [
                { name: "MRC_CVR_CODE", index: "MRC_CVR_CODE", width: 150 },
                { name: "COVER_NAME", index: "COVER_NAME", width: 150 },
                { name: "MRC_DFT_SI", index: "MRC_DFT_SI", width: 150 },
                { name: "MRC_DFT_RATE", index: "MRC_DFT_RATE", width: 150 },
                { name: "MRC_DFT_PREM", index: "MRC_DFT_PREM", width: 150 }
            ],
            //Retrive Grid data into form input fields on row click..
            function (selId) {

                var grid = $scope.riskCovers_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid("getCell", selId, "MRC_CVR_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", selId, "COVER_NAME"),
                    RCOV_RATE: grid.jqGrid("getCell", selId, "MRC_DFT_RATE"),
                    RCOV_SI_BC: grid.jqGrid("getCell", selId, "MRC_DFT_SI"),
                    RCOV_GROSS_PREM_BC: grid.jqGrid("getCell", selId, "MRC_DFT_PREM"),
                    RCOV_NET_PREM_BC: grid.jqGrid("getCell", selId, "MRC_DFT_PREM"),

                }, "#coverForm");
            },
            //Retrive Grid data into form input fields on row double click....
            function (selId) {

                var grid = $scope.riskCovers_grid;
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid("getCell", selId, "MRC_CVR_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", selId, "COVER_NAME"),
                    RCOV_RATE: grid.jqGrid("getCell", selId, "MRC_DFT_RATE"),
                    RCOV_SI_BC: grid.jqGrid("getCell", selId, "MRC_DFT_SI"),
                    RCOV_GROSS_PREM_BC: grid.jqGrid("getCell", selId, "MRC_DFT_PREM"),
                    RCOV_NET_PREM_BC: grid.jqGrid("getCell", selId, "MRC_DFT_PREM")

                }, "#coverForm");

                // hide modal on double click
                $("#AddNewCoverModal").modal("hide");

            }),


        // Risk compulsory Fees ****
        $scope.riskFees_grid = u.default_grid("#gridCompFees", "#gridCompFeesPager", "Risk Compulsory Fees",
            ["Code", "Name", "Amount FC", "Amount BC", "Risk Code", "Veh Sys ID", "Risk ID",
              "Endorsement No", "Created By", "Created Date", "Status"],
            [

                { name: "VEH_FEE_CODE", index: "VEH_FEE_CODE", width: 150 },
                { name: "VEH_FEE_NAME", index: "VEH_FEE_NAME", width: 150 },
                { name: "VEH_FEE_FC_AMOUNT", index: "VEH_FEE_FC_AMOUNT", width: 150 },
                { name: "VEH_FEE_BC_AMOUNT", index: "VEH_FEE_BC_AMOUNT", width: 150 },


                { name: "VEH_FEE_RK_CODE", index: "VEH_FEE_RK_CODE", width: 150 },
                { name: "VEH_FEE_RK_SYS_ID", index: "VEH_FEE_RK_SYS_ID", width: 150 },

                { name: "VEH_FEE_RK_NO", index: "VEH_FEE_RK_NO", width: 150 },

                //{ name: 'VEH_FEE_SYS_ID', index: 'VEH_FEE_SYS_ID', width: 150 },
                //{ name: 'VEH_FEE_POL_SYS_ID', index: 'VEH_FEE_POL_SYS_ID', width: 150 },
                { name: "VEH_FEE_END_NO", index: "VEH_FEE_END_NO", width: 150 },

                { name: "VEH_FEE_CRTE_BY", index: "VEH_FEE_CRTE_BY", width: 150 },
                { name: "VEH_FEE_CRTE_DATE", index: "VEH_FEE_CRTE_DATE", width: 150 },

                { name: "VEH_FEE_STATUS", index: "VEH_FEE_STATUS", width: 150 },

            ],

             //Retrive Grid data into form input fields on row click..
            function (selId) {

            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (selId) {

            }),


        //
        // Claim Summary
        $scope.interComm_grid = u.default_grid("#gridinterComm", "#gridinterCommPager", "Intermediary Commission Perc",
            ["Code", "Name", "Commission %"],
            [
                { name: "COM_INT_CODE", index: "COM_INT_CODE", width: 150 },
                { name: "COM_NAME", index: "COM_NAME", width: 250 },
                { name: "COM_DFT_PERC", index: "COM_DFT_PERC", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
              //Retrive Grid data into form input fields on row click.. motorRisks_grid
            function (selId) {

                var grid = $scope.interComm_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    CMM_INT_CODE: grid.jqGrid("getCell", selId, "COM_INT_CODE"),
                    CMM_INT_NAME: grid.jqGrid("getCell", selId, "COM_NAME"),
                    CMM_COM_PERC: grid.jqGrid("getCell", selId, "COM_DFT_PERC"),

                }, "#agencycommForm");
            },

            function (selId) {
                var grid = $scope.interComm_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    CMM_INT_CODE: grid.jqGrid("getCell", selId, "COM_INT_CODE"),
                    CMM_INT_NAME: grid.jqGrid("getCell", selId, "COM_NAME"),
                    CMM_COM_PERC: grid.jqGrid("getCell", selId, "COM_DFT_PERC")
                }, "#agencycommForm");
                $("#interCommLovModal").modal("hide");
            });


        // Product Risk Grid ****
        $scope.prodRisks_grid = u.default_grid("#gridProdRisk", "#gridProdRiskPager", "Sub Class",
            ["Code", "Name"],
            [
                { name: "RISK_CODE", index: "RISK_CODE", width: 150 },
                { name: "RISK_NAME", index: "RISK_NAME", width: 400 },

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
            ["Code", "Full Name", "Date of Birth", "Address", "Tel no", "Mobile", "Created date", "Created by"],
            [
                { name: "CUS_CODE", index: "CUS_CODE", width: 150 },
                { name: "CUS_OFFICIAL_NAME", index: "CUS_OFFICIAL_NAME", width: 150 },
                { name: "CUS_DOB", index: "CUS_DOB", width: 150 },
                { name: "CUS_ADDRS1", index: "CUS_ADDRS1", width: 150 },
                { name: "CUS_PHONE1", index: "CUS_PHONE1", width: 150 },
                { name: "CUS_MOBILE", index: "CUS_MOBILE", width: 150 },
                { name: "CUS_CRTE_DATE", index: "CUS_CRTE_DATE", width: 150 },
                { name: "CUS_CRTE_BY", index: "CUS_CRTE_BY", width: 150 },
            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid("getCell", sel_id, "CUS_CODE"),
                    CUS_OFFICIAL_NAME: grid.jqGrid("getCell", sel_id, "CUS_OFFICIAL_NAME"),
                    CUS_DOB: grid.jqGrid("getCell", sel_id, "CUS_DOB"),
                    CUS_ADDRS1: grid.jqGrid("getCell", sel_id, "CUS_ADDRS1"),
                    CUS_PHONE1: grid.jqGrid("getCell", sel_id, "CUS_PHONE1"),
                    CUS_MOBILE: grid.jqGrid("getCell", sel_id, "CUS_MOBILE"),
                    CUS_CRTE_DATE: grid.jqGrid("getCell", sel_id, "CUS_CRTE_DATE"),
                    CUS_CRTE_BY: grid.jqGrid("getCell", sel_id, "CUS_CRTE_BY"),
                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid("getCell", sel_id, "CUS_CODE"),
                    CUS_OFFICIAL_NAME: grid.jqGrid("getCell", sel_id, "CUS_OFFICIAL_NAME"),
                    CUS_ADDRS1: grid.jqGrid("getCell", sel_id, "CUS_ADDRS1"),
                    CUS_PHONE1: grid.jqGrid("getCell", sel_id, "CUS_PHONE1"),
                    CUS_MOBILE: grid.jqGrid("getCell", sel_id, "CUS_MOBILE"),
                    CUS_CRTE_DATE: grid.jqGrid("getCell", sel_id, "CUS_CRTE_DATE"),
                    CUS_CRTE_BY: grid.jqGrid("getCell", sel_id, "CUS_CRTE_BY"),
                }, "#polheaderForm");

                // hide modal on double click
                $("#customerLovModal").modal("hide");

            }),


        // Area Grid ****
        $scope.makemodel_grid = u.default_grid("#gridModel", "#gridModelPager", "Vehicle Model",
            ["Code", "Name"],
            [
                { name: "MMO_CODE", index: "MMO_CODE", width: 150 },
                { name: "MMO_NAME", index: "MMO_NAME", width: 600 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.makemodel_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='VEH_MODEL']").data("update", true);
                u.fill_form({
                    VEH_MODEL: grid.jqGrid("getCell", sel_id, "MMO_CODE"),
                    VEH_MODEL_NAME: grid.jqGrid("getCell", sel_id, "MMO_NAME"),

                }, "#motorRiskForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.makemodel_grid;
                var sel_id = grid.jqGrid("getGridParam", "selrow");
                $("form input[name='VEH_MODEL']").data("update", true);
                u.fill_form({
                    VEH_MODEL: grid.jqGrid("getCell", sel_id, "MMO_CODE"),
                    VEH_MODEL_NAME: grid.jqGrid("getCell", sel_id, "MMO_NAME"),

                }, "#motorRiskForm");

                // hide modal on double click
                $("#makemodelLovModal").modal("hide");

            }),


        // Coinsurnace Member or FAC Inward Business Grid
        $scope.grdfacInward_grid = u.default_grid("#grdfacInward", "#grdfacInwardPager", "FAC Inward Details",
            ["Cedant Code", "Cedant Name", "Referential No.", "Acceptance No.", "Comment", "Original SI FC", "Original SI BC",
             "Original Premium FC", "Original Premium BC", "Share %", "Commission %", "FAC Inward SI FC", "FAC Inward SI BC",
             "FAC Inward Premium FC", "FAC Inward Premium BC", "FAC Inward Comm FC", "FAC Inward Comm FC", "Sys ID", "Polh ID", "Created by", "Created date", "Status"],
            [
                { name: "FINW_CEDANT_CODE", index: "FINW_CEDANT_CODE", width: 150 },
                { name: "FINW_CEDANT_NAME", index: "FINW_CEDANT_NAME", width: 150 },
                { name: "FINW_REF_NO", index: "FINW_REF_NO", width: 150 },
                { name: "FINW_ACCPT_NO", index: "FINW_ACCPT_NO", hidden: false, width: 200 },
                { name: "FINW_COMMENT", index: "FINW_COMMENT", width: 150 },
                { name: "FINW_ORIG_SI_FC", index: "FINW_ORIG_SI_FC", width: 150 },
                { name: "FINW_ORIG_SI_BC", index: "FINW_ORIG_SI_BC", width: 150 },

                { name: "FINW_ORIG_PREM_FC", index: "FINW_ORIG_PREM_FC", width: 150 },
                { name: "FINW_ORIG_PREM_BC", index: "FINW_ORIG_PREM_BC", width: 150 },
                { name: "FINW_SHARE_PERC", index: "FINW_SHARE_PERC", hidden: false, width: 200 },
                { name: "FINW_COMM_PERC", index: "FINW_COMM_PERC", width: 150 },
                { name: "FINW_SI_FC", index: "FINW_SI_FC", width: 150 },
                { name: "FINW_SI_BC", index: "FINW_SI_BC", width: 150 },
                { name: "FINW_PREM_FC", index: "FINW_PREM_FC", width: 150 },
                { name: "FINW_PREM_BC", index: "FINW_PREM_BC", width: 150 },
                { name: "FINW_COMM_FC", index: "FINW_COMM_FC", width: 150 },
                { name: "FINW_COMM_BC", index: "FINW_COMM_BC", width: 150 },

                { name: "FINW_SYS_ID", index: "FINW_SYS_ID", hidden: true, width: 150 },
                { name: "FINW_POLH_SYS_ID", index: "FINW_POLH_SYS_ID", hidden: true, width: 150 },

                { name: "FINW_CRTE_BY", index: "FINW_CRTE_BY", hidden: false, width: 200 },
                { name: "FINW_CRTE_DATE", index: "FINW_CRTE_DATE", hidden: false, width: 200 },
                { name: "FINW_STATUS", index: "FINW_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdfacInward_grid;
                $("form input[name='FINW_CEDANT_CODE']").data("update", true);
                u.fill_form({
                    FINW_CEDANT_CODE: grid.jqGrid("getCell", selId, "FINW_CEDANT_CODE"),
                    FINW_CEDANT_NAME: grid.jqGrid("getCell", selId, "FINW_CEDANT_NAME"),
                    FINW_ORIG_SI_FC: grid.jqGrid("getCell", selId, "FINW_ORIG_SI_FC"),

                    FINW_REF_NO: grid.jqGrid("getCell", selId, "FINW_REF_NO"),
                    FINW_ACCPT_NO: grid.jqGrid("getCell", selId, "FINW_ACCPT_NO"),
                    FINW_COMMENT: grid.jqGrid("getCell", selId, "FINW_COMMENT"),

                    FINW_ORIG_SI_BC: grid.jqGrid("getCell", selId, "FINW_ORIG_SI_BC"),
                    FINW_ORIG_PREM_FC: grid.jqGrid("getCell", selId, "FINW_ORIG_PREM_FC"),
                    FINW_ORIG_PREM_BC: grid.jqGrid("getCell", selId, "FINW_ORIG_PREM_BC"),
                    FINW_SHARE_PERC: grid.jqGrid("getCell", selId, "FINW_SHARE_PERC"),

                    FINW_COMM_PERC: grid.jqGrid("getCell", selId, "FINW_COMM_PERC"),
                    FINW_SI_FC: grid.jqGrid("getCell", selId, "FINW_SI_FC"),
                    FINW_SI_BC: grid.jqGrid("getCell", selId, "FINW_SI_BC"),
                    FINW_PREM_BC: grid.jqGrid("getCell", selId, "FINW_PREM_BC"),
                    FINW_PREM_FC: grid.jqGrid("getCell", selId, "FINW_PREM_FC"),
                    FINW_COMM_FC: grid.jqGrid("getCell", selId, "FINW_COMM_FC"),
                    FINW_COMM_BC: grid.jqGrid("getCell", selId, "FINW_COMM_BC"),

                }, "#facInwardForm");

                u.fill_form({

                    FINW_PAP_FINW_SYS_ID: grid.jqGrid("getCell", selId, "FINW_SYS_ID"),

                }, "#InwardParticipantsForm");

            }),


        // Coinsurnace Member or FAC Invward Participants Grid
        $scope.grdInwdParticipant_grid = u.default_grid("#grdInwdParticipants", "#grdInwdParticipantsPager", "FAC Inward Details",
            [" Code", "Name", "Share %", "Share SI", "Share Premium", "Sys ID", "Fac Inward ID", "Created by", "Created date", "Status"],
            [
                { name: "FINW_PAP_CODE", index: "FINW_PAP_CODE", width: 150 },
                { name: "FINW_PAP_NAME", index: "FINW_PAP_NAME", width: 150 },
                { name: "FINW_PAP_SHARE_PERC", index: "FINW_PAP_SHARE_PERC", width: 150 },
                { name: "FINW_PAP_SHARE_SI", index: "FINW_PAP_SHARE_SI", hidden: false, width: 200 },
                { name: "FINW_PAP_SHARE_PREM", index: "FINW_PAP_SHARE_PREM", width: 150 },
                { name: "FINW_PAP_SYS_ID", index: "FINW_PAP_SYS_ID", width: 150 },
                { name: "FINW_PAP_FINW_SYS_ID", index: "FINW_PAP_FINW_SYS_ID", width: 150 },
                { name: "FINW_PAP_CRTE_BY", index: "FINW_PAP_CRTE_BY", hidden: false, width: 200 },
                { name: "FINW_PAP_CRTE_DATE", index: "FINW_PAP_CRTE_DATE", hidden: false, width: 200 },
                { name: "FINW_PAP_STATUS", index: "FINW_PAP_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdInwdParticipant_grid;
                $("form input[name='FINW_PAP_CODE']").data("update", true);
                u.fill_form({
                    FINW_PAP_CODE: grid.jqGrid("getCell", selId, "FINW_PAP_CODE"),
                    FINW_PAP_NAME: grid.jqGrid("getCell", selId, "FINW_PAP_NAME"),
                    FINW_PAP_SHARE_PERC: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_PERC"),
                    FINW_PAP_SHARE_SI: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_SI"),
                    FINW_PAP_SHARE_PREM: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_PREM"),

                }, "#InwardParticipantsForm");
            }),

        // Coinsurance Leader Business Grid
        $scope.grdCoinsLeader_grid = u.default_grid("#grdCoinsLeader", "#grdCoinsLeaderPager", "FAC Inward Details",
            ["Our Share %", "Our Share SI FC", "Our Share SI BC", "Our Share Premium FC", "Our Share Premium BC", "Member Share %", "Member Share SI FC", "Member Share SI BC",
             "Member Share Premium FC", "Member Share Premium BC", "RI Code", "RI Name", "RI Share %", "RI Share Comm", "RI Share SI", "RI Share Premium", "RI Share Comm",
             "Sys ID", "Polh ID", "Risk ID", "Created by", "Created date", "Status"],
            [
                { name: "FOTW_SHARE_PERC", index: "FOTW_SHARE_PERC", width: 150 },
                { name: "FOTW_SHARE_SI_FC", index: "FOTW_SHARE_SI_FC", width: 150 },
                { name: "FOTW_SHARE_SI_BC", index: "FOTW_SHARE_SI_BC", hidden: false, width: 200 },
                { name: "FOTW_SHARE_PREM_FC", index: "FOTW_SHARE_PREM_FC", width: 150 },
                { name: "FOTW_SHARE_PREM_BC", index: "FOTW_SHARE_PREM_BC", width: 150 },
                { name: "FOTW_MEM_SHARE_PERC", index: "FOTW_MEM_SHARE_PERC", width: 150 },
                { name: "FOTW_MEM_SI_FC", index: "FOTW_MEM_SI_FC", width: 150 },
                { name: "FOTW_MEM_SI_BC", index: "FOTW_MEM_SI_BC", width: 150 },
                { name: "FOTW_MEM_PREM_FC", index: "FOTW_MEM_PREM_FC", width: 150 },
                { name: "FOTW_MEM_PREM_BC", index: "FOTW_MEM_PREM_BC", width: 150 },

                { name: "FOTW_RI_MEM_CODE", index: "FOTW_RI_MEM_CODE", width: 150 },
                { name: "FOTW_RI_MEM_NAME", index: "FOTW_RI_MEM_NAME", width: 150 },
                { name: "FOTW_RI_PERC", index: "FOTW_RI_PERC", width: 150 },
                { name: "FOTW_RI_COMM", index: "FOTW_RI_COMM", width: 150 },

                { name: "FOTW_RI_SHARE_SI", index: "FOTW_RI_SHARE_SI", width: 150 },
                { name: "FOTW_RI_SHARE_PREM", index: "FOTW_RI_SHARE_PREM", width: 150 },
                { name: "FOTW_RI_SHARE_COMM", index: "FOTW_RI_SHARE_COMM", width: 150 },

                { name: "FOTW_SYS_ID", index: "FOTW_SYS_ID", width: 150 },
                { name: "FOTW_POLH_SYS_ID", index: "FOTW_POLH_SYS_ID", width: 150 },
                { name: "FOTW_RISK_SYS_ID", index: "FOTW_RISK_SYS_ID", width: 150 },

                { name: "FOTW_CRTE_BY", index: "FOTW_CRTE_BY", hidden: false, width: 200 },
                { name: "FOTW_CRTE_DATE", index: "FOTW_CRTE_DATE", hidden: false, width: 200 },
                { name: "FOTW_STATUS", index: "FOTW_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdCoinsLeader_grid;

                $("form input[name='FOTW_RI_MEM_CODE']").data("update", true);
                u.fill_form({
                    FOTW_SHARE_PERC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PERC"),
                    FOTW_MEM_SHARE_PERC: grid.jqGrid("getCell", selId, "FOTW_MEM_SHARE_PERC"),
                    FOTW_SHARE_SI_FC: grid.jqGrid("getCell", selId, "FOTW_SHARE_SI_FC"),
                    FOTW_SHARE_SI_BC: grid.jqGrid("getCell", selId, "FOTW_SHARE_SI_BC"),
                    FOTW_SHARE_PREM_FC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PREM_FC"),
                    FOTW_SHARE_PREM_BC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PREM_BC"),
                    FOTW_MEM_SI_FC: grid.jqGrid("getCell", selId, "FOTW_MEM_SI_FC"),

                    FOTW_MEM_SI_BC: grid.jqGrid("getCell", selId, "FOTW_MEM_SI_BC"),
                    FOTW_MEM_PREM_FC: grid.jqGrid("getCell", selId, "FOTW_MEM_PREM_FC"),
                    FOTW_MEM_PREM_BC: grid.jqGrid("getCell", selId, "FOTW_MEM_PREM_BC"),
                    FOTW_RI_MEM_CODE: grid.jqGrid("getCell", selId, "FOTW_RI_MEM_CODE"),

                    FOTW_RI_MEM_NAME: grid.jqGrid("getCell", selId, "FOTW_RI_MEM_NAME"),
                    FOTW_RI_PERC: grid.jqGrid("getCell", selId, "FOTW_RI_PERC"),
                    FOTW_RI_COMM: grid.jqGrid("getCell", selId, "FOTW_RI_COMM"),
                    FOTW_RI_SHARE_SI: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_SI"),
                    FOTW_RI_SHARE_PREM: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_PREM"),
                    FOTW_RI_SHARE_COMM: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_COMM"),

                }, "#CoinsLeaderForm");
            }),


        //
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
                case "btn_Intermediary_Type":
                    $scope.lov.call_dialog("Select Intermediary Type", "get_lov_Intermediary_Type", $scope.dialog_data);
                    break;
                    //case "btn_Intermediary_comm":
                    //    $scope.lov.call_dialog("Select Intermediary Commission", "get_lov_Intermediary_Comm", $scope.dialog_data);
                    //    break;

                case "btn_business_source":
                    FacbuttonsDis();
                    $scope.lov.call_dialog("Select Business Source", "get_lov_business_source", $scope.dialog_data);
                    break;

                case "btn_facinw_cedent":
                    $scope.lov.call_dialog("Select Cedent Company", "get_lov_cedent", $scope.dialog_data);
                    break;
                case "btn_pap_com":
                    $scope.lov.call_dialog("Select Participating Company", "get_lov_com", $scope.dialog_data);
                    break;
                case "btn_member_code":
                    $scope.lov.call_dialog("Select RI Company", "get_lov_member_com", $scope.dialog_data);
                    break;

                case "btn_customer":
                    $scope.lov.call_dialog("Select Customer", "get_lov_customer", $scope.dialog_data);
                    break;
                case "btn_base_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_make_model":
                    $scope.lov.call_dialog("Select Vehicle", "get_lov_makemodel", $scope.dialog_data);
                    break;
                case "btn_risk":

                    $scope.lov.call_dialog("Select Risk", "get_lov_motor_risks", $scope.dialog_data);


                    break;
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer type", "get_lov_customertypes", $scope.dialog_data);
                    break;

                    //added by toni 01-03-2017
                case "btn_EndorsementType":
                    $scope.lov.pcolName = ["Description"];
                    $scope.lov.pcolMdls = [{ name: "END_TEXT_DESC", index: "END_TEXT_DESC" }];
                    $scope.lov.call_dialog("Select Endorsement type", "get_lov_endorsements", $scope.dialog_data, null, function (data) {
                        $("#END_TEXT_DESC").val(data.END_TEXT_DESC);
                    });
                    break;

            }
        });


        u.set_datepicker("#ENDORSE_DATE");
        u.set_datepicker("#ENDORSE_EFF_DATE");
        u.set_datepicker("#ENDORSE_TO_DATE");
        u.set_datepicker("#NLB_FROM_DATE");
        u.set_datepicker("#NLB_TO_DATE");


        /*--------------------------------------------------
* add Area base on Region
*------------------------------------------------*/
        //

        $("#btnRiskDLdLOV").on("click", function () {

            $("#RiskDiscLoadModal").modal();

            var grid = $scope.riskdiscload_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get from the database
            s.discountloadingList(function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.riskdiscload_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        $scope.riskdiscload_grid.addRowData(result[i]["MMO_CODE"], result[i]);
                    }
                }
            });

        });



        $("#btnQueryDiscLoadLov").on("click", function () {



        });
        /*--------------------------------------------------
* Make and Model LOV
*------------------------------------------------*/
        //

        $("#btn_Model").on("click", function () {

            if ($("#VEH_MAKE").val() == "") {

                u.growl_warning("Motor Brand is not selected, Please check and try again");
            }
            else {
                $scope.makemodel_grid.jqGrid("clearGridData");
                $("#makemodelLovModal").modal();

            }

        });

        function getModelLov() {
            /*
                obtain parameter for our request
            */
            var modelData = {
                PRD_CODE: $("#VEH_MAKE").val(),
            }; //
            var grid = $scope.makemodel_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get from the database
            s.getModel(modelData, function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.makemodel_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        $scope.makemodel_grid.addRowData(result[i]["MMO_CODE"], result[i]);
                    }
                }
            });
        }


        $("#btnQueryModel").on("click", function () {
            getModelLov();
        });



        /*--------------------------------------------------
* Retrieving customers on calling function
*------------------------------------------------*/

        $("#btnQueryCustomers").on("click", function () {
            getProductRiskLov();
        });


        $("#btn_CustomersLov").on("click", function () {

            $("#customerLovModal").modal();

        });



        $("#VEH_CUBIC_CAP").on("click", function () {

            alert("The text has been changed.");
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
        * FAC Inward Modal
        */

        $("#btnFACInward").on("click", function () {

            $("#MemberIwardModal").modal();
            var message = "FAC Inward Details";

            $("#textCoinsMember").text(message);


        });

        /*--------------------------------------------------
       * FAC Inward Modal
       */

        $("#btn_Participant").on("click", function () {

            $("#PartipantsModal").modal();


        });
        /*--------------------------------------------------
    * FAC Inward Modal
    */

        $("#btnCoInsMember").on("click", function () {

            $("#MemberIwardModal").modal();

            var message = "Co-Insurance Details";

            $("#textCoinsMember").text(message);

        });

        /*--------------------------------------------------
    * Coinsurance Leader Modal
    */

        $("#btnCoInsLeader").on("click", function () {

            $("#CoInsLeaderModal").modal();


        });
        /*--------------------------------------------------
         * Get Agent Broker commission
         */

        $("#btn_Intermediary_comm").on("click", function () {

            $("#interCommLovModal").modal();


        });
        //
        $("#IntermCommLov").on("click", function () {

            // getInterCommLov();
            /*
                obtain parameter for our request
            */
            var interParamData = {
                PROD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
            };

            // gridinterComm 
            var intgrid = $scope.interComm_grid;

            var rowIds = intgrid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.get_lov_Intermediary_Comm(interParamData, function (result) {

                if (result && result.length && result.length > 0) {



                    //clear Grid
                    $scope.interComm_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        result[i]["COM_NAME"] = result[i]["MS_SYS_INTERMEDIARY"]["INT_OFFICIAL_NAME"];
                        $scope.interComm_grid.addRowData(result[i].ID, result[i]);
                    }
                }
            });
        });


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

                        PROD_RISK_SYS_ID: $("#VEH_RISK_NO").val(),
                        PRD_CV_DFT: "Y",
                        PRD_CODE: $("#POLH_CLASS_CODE").val(),
                        RSK_CODE: $("#VEH_RISK_NO").val(),

                        RPCOV_END_NO: $("#POLH_END_NO").val(),

                        RCOV_CODE: $("#RCOV_CODE").val(),
                        POL_DAYS: $("#VEH_PERIOD_DAYS").val(),
                        CUR_RATE: $("#POLH_CURRENCY_RATE").val(), //$("form input[name='VEH_CURR_RATE']").val(),
                        PREM_BASIS: $("#VEH_PREMIUM_BASIS").val(),
                        MANF_YEAR: $("#VEH_MANUFACTURE_YR").val(),
                        BBE_PERC: $("#VEH_EXCESS_APP").prop("checked") ? $("#VEH_EXCESS_PERC").val() : null,
                        TTPD_AMNT: null,
                        SEAT_NO: $("#VEH_PASSENGERS").val(),
                    }; //
                    var grid = $scope.cover_grid;

                    var rowIds = grid.jqGrid("getDataIDs");

                    //declare array to contain the codes to varify
                    var codeArray = [];

                    // iterate through the rows in the grid and add Covers to Array
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        //get value of the cell or column in an array
                        var coverCode = grid.jqGrid("getCell", currRow, "RCOV_CODE");

                        var riskCode = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                        var riskCov = coverCode + riskCode;

                        // alert(riskCov);
                        codeArray.push(riskCov);
                    }

                    //send parameters and get Default covers from the database
                    s.getAddRiskCovers(productRiskData, function (result) {
                        if (result && result.length && result.length > 0) {

                            for (var i in result) {

                                result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                                result[i]["COVER_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                                result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];


                                result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                                result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                                result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                                result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                                result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                                // //     

                                result[i]["RCOV_RISK_SYS_ID"] = $("#VEH_SYS_ID").val();

                                result[i]["RCOV_RISK_NO"] = $("#VEH_RISK_NO").val();
                                result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();
                                // 
                                var deftCoverCode = result[i].RCOV_CODE;
                                var newRiskCode = $("#VEH_SYS_ID").val();

                                var verifyRiskCover = deftCoverCode + newRiskCode;

                                //add if Cover is not found in the Grid//
                                if ($.inArray(verifyRiskCover, codeArray) < 0) {

                                    //fill in default covers if not in the grid

                                    $scope.cover_grid.addRowData(result[i]["ID"], result[i]);


                                    u.growl_success("Motor successfully added to grid");

                                    u.hide_confirm();
                                }
                                else {

                                    u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);

                                    u.hide_confirm();
                                }
                            }
                        }
                        else {
                            u.growl_error("Error occurred, please check and try again");
                        }
                    });
                });

            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*--------------------------------------------------
        *get Motor Risks lists fucnction
        *------------------------------------------------*/
        //

        function getMotorRiskLov() {

            /*
                obtain parameter for our request
            */
            var motorRiskData = {
                //MRF_MPR_SYS_ID: $("#VEH_RISK_NO").val(),
                PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
            }; //
            var grid = $scope.motorRisks_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.getMotorRisk(motorRiskData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.motorRisks_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        if (result.hasOwnProperty(i)) {
                            $scope.motorRisks_grid.addRowData(result[i]["RISK_CODE"], result[i]);
                        }
                    }
                } else {
                    u.growl_warning("No Motor risks found, please check and try again ");
                }
            });


        }

        /*--------------------------------------------------
       *get Risks Cover lists fucnction
       *------------------------------------------------*/
        //

        function getRiskCoversLov() {

            alert($("#VEH_RISK_NO").val());
            /*
                obtain parameter for our request 
            */
            var riskCoverData = {

                PROD_RISK_SYS_ID: $("#VEH_RISK_NO").val(),
            }; //
            var grid = $scope.riskCovers_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.getRiskCoversLOV(riskCoverData, function (result) {
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


        // Get Risk compulsory Fees
        function getRiskComPulsoryFess() {

            /*
                obtain parameter for our request
            */
            var riskFeesData = {

                PRD_CODE: $("#POLH_CLASS_CODE").val(),
                MRF_MPR_SYS_ID: $("#VEH_RISK_NO").val(),
            }; //
            var grid = $scope.riskFees_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.getRiskFees(riskFeesData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    //$scope.riskFees_grid.jqGrid('clearGridData');
                    //fill grid 
                    for (var i in result) {

                        result[i]["VEH_FEE_RK_CODE"] = $("#VEH_RISK_CODE").val();
                        result[i]["VEH_FEE_RK_SYS_ID"] = $("#VEH_SYS_ID").val();
                        result[i]["VEH_FEE_CRTE_BY"] = "Admin";
                        result[i]["VEH_FEE_CRTE_DATE"] = Date.now();
                        result[i]["VEH_FEE_STATUS"] = "U";
                        //
                        // $scope.riskFees_grid.jqGrid('setCell', result[i], 'RISK_CODE', );

                        $scope.riskFees_grid.addRowData(result[i]["MRF_FEE_CODE"], result[i]);
                    }
                }

                var compFeedata = u.get_grid_data($scope.riskFees_grid);
                var linq = Enumerable.From(compFeedata);
                var result =
                    linq.GroupBy(function (x) { return x.VEH_FEE_CODE; })
                        .Select(function (x) {
                            console.log(x);
                            return {
                                POL_FEE_CODE: x.Key(),
                                POL_FEE_NAME: x.source[0]["VEH_FEE_NAME"],
                                POL_FEE_FC_AMOUNT: x.Sum(function (y) { return y.VEH_FEE_FC_AMOUNT | 0; }),
                                POL_FEE_BC_AMOUNT: x.Sum(function (y) { return y.VEH_FEE_BC_AMOUNT | 0; }),
                                POL_FEE_END_NO: 0 //$("#POL_END_NO").val()
                            };
                        }).ToArray();

                $scope.polfees_grid.jqGrid("clearGridData");
                for (var i in result) $scope.polfees_grid.addRowData(result[i].ID, result[i]);
            });
        }

        // get Compulsory 

        $("#btn_GetCompFees").on("click", function () {

            getRiskComPulsoryFess();

        });


        //Query for Motor Riks LOV
        $("#btnQueryMotorRisk").on("click", function () {

            getMotorRiskLov();
        });

        /*--------------------------------
   *Open Motor risk Modal
   *------------------------------*/
        //
        $("#btn_MotorRisks").on("click", function () {

            if ($("#POLH_SUB_CLASS_CODE").val() === "") {

                u.growl_warning("Product Code is empty, Please check and try again");
            }
            else {

                $("#motorRiskLovModal").modal();

                getMotorRiskLov();
            }

        });

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

                //  gridAddNewCover
            }

        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from Cover Grid
         *---------------------------------------------------*/
        //
        $("#btn_remove_cover").on("click", function () {


            if (u.grid_empty($scope.cover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cover_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "VEH_STATUS");

            var code = grid.jqGrid("getCell", rowId, "VEH_RISK_CODE");

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {


                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // ***
                if (recordStatus == "U") {


                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_success("Selected row successfully deleted");
                }


                    /*----------------------------------------
                     * Mark a record for deletion on saving
                     *--------------------------------------*/
                    // 
                else if (recordStatus === "A") {


                    grid.jqGrid("setCell", rowId, "VEH_STATUS", "D");
                    $("#" + rowId, "#grdCover").css({ color: "red" });

                    u.hide_confirm();

                    u.growl_success("Selected row successfully marked for deletion, please click on the save button to save changes");


                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdCover").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "VEH_STATUS", "A");
                    u.hide_confirm();

                    u.growl_success("Data successfully restored");

                }

            });

        });



        /*--------------------------------
         * Cover Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_cover").on("click", function () {


            if (u.grid_empty($scope.cover_grid)) return u.growl_info("Cover grid is empty");

            if (u.form_validation("#coverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    $scope.updateCovers();

                    u.hide_confirm();

                });
            }

        });



        //Edit/Update covers Function
        $scope.updateCovers = function () {

            var grid = $scope.cover_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var coverCode = grid.jqGrid("getCell", rowId, "RCOV_SYS_ID");


            if (coverCode === $("#RCOV_SYS_ID").val()) {


                //
                var currRate = parseFloat($("#POLH_CURRENCY_RATE").val()).toFixed(2);

                if (currRate === "" || currRate === 0) {
                    u.hide_confirm();
                    u.growl_warning("the Currency Rate cannot be zero (0) please check and try again");
                }
                else {



                    //Declare variables and get values
                    var coverSifc = parseFloat($("#RCOV_SI_FC").val()).toFixed(2);
                    var coverSibc = parseFloat(coverSifc / currRate).toFixed(2);


                    var coverGrossPremFc = parseFloat($("#RCOV_GROSS_PREM_FC").val()).toFixed(2);
                    var coverGrossPremBc = parseFloat(coverGrossPremFc / currRate).toFixed(2);

                    var coverNetPremFc = parseFloat($("#RCOV_NET_PREM_FC").val()).toFixed(2);
                    var coverNetPremBc = parseFloat(coverNetPremFc / currRate).toFixed(2);

                    var coverDisFc = 0;
                    coverDisFc = parseFloat($("#RCOV_DISC_FC").val()).toFixed(2);
                    var coverDisBc = 0;
                    coverDisBc = parseFloat(coverDisFc / currRate).toFixed(2);

                    var coverLoadFc = parseFloat($("#RCOV_LOAD_FC").val()).toFixed(2);
                    var coverLoadBc = parseFloat(coverLoadFc / currRate).toFixed(2);
                    //
                    var coverRate = parseFloat($("#RCOV_RATE").val()).toFixed(2);



                    //
                    grid.jqGrid("setCell", rowId, "RCOV_SI_FC", coverSifc);
                    grid.jqGrid("setCell", rowId, "RCOV_SI_BC", coverSibc);

                    grid.jqGrid("setCell", rowId, "RCOV_RATE", coverRate);

                    grid.jqGrid("setCell", rowId, "RCOV_GROSS_PREM_FC", coverGrossPremFc);

                    grid.jqGrid("setCell", rowId, "RCOV_GROSS_PREM_BC", coverGrossPremBc);

                    grid.jqGrid("setCell", rowId, "RCOV_NET_PREM_FC", coverNetPremFc);
                    grid.jqGrid("setCell", rowId, "RCOV_NET_PREM_BC", coverNetPremBc);

                    grid.jqGrid("setCell", rowId, "RCOV_DISC_FC", coverDisFc);
                    grid.jqGrid("setCell", rowId, "RCOV_DISC_BC", coverDisBc);

                    grid.jqGrid("setCell", rowId, "RCOV_LOAD_FC", coverLoadFc);
                    grid.jqGrid("setCell", rowId, "RCOV_LOAD_BC", coverLoadBc);

                    grid.jqGrid("setCell", rowId, "RCOV_ANNL_PREM_FC", $("#RCOV_ANNL_PREM_FC").val());
                    grid.jqGrid("setCell", rowId, "RCOV_ANNL_PREM_BC", $("#RCOV_ANNL_PREM_BC").val());

                    //call
                    $scope.SumCoverRiskValues();


                    u.hide_confirm();
                    u.growl_success("Risk Cover updated");

                }
            }
            else {
                u.hide_confirm();
                u.growl_warning("Please select the correct row to edit");
            }


        }



        /*-----------------------------------
        * exporting of the grid to excel Condition & Clauses
        *----------------------------------*/
        $("#export-cover-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cover_grid, ["ID"], "Cover_List_Excel");
        });



        /*--------------------------------------------------
         * Motor Risk Modal 
         *------------------------------------------------*/
        //
        $("#btn_add_motor_risk").click(function () {

            // ** add complete validation for the Policy Header form before going to the motor risk level
            if ($("#POLH_CLASS_CODE").val() == "") {
                u.growl_warning("Please Select the class of business!!!");
            }
            else {
                $("#MotorRiskModal").modal();

            }

        });
        /*--------------------------------------------------
        * Motor Risk additional information Modal
        *------------------------------------------------*/
        //
        $("#brn_MotorRiskAddInfo").click(function () {

            $("#motorRiskAddInfoModal").modal();

        });

        // Open the modal to Add Risk covers

        $("#btn_risk_cover").click(function () {


            var grid = $scope.motor_grid;

            var selId = grid.jqGrid("getGridParam", "selrow");
            var vehRiskId = grid.jqGrid("getCell", selId, "VEH_SYS_ID");

            if (vehRiskId == $("#VEH_SYS_ID").val()) {

                $("#RiskCoverModal").modal();

                //Hide covers not related to selected risk
                $scope.hideShowCovers();
            }
            else {


                u.growl_warning("No Vehicle Risk selected, Please check and try again");


            };


        });


        /*--------------------------------------------------
          * Adding Motor Risk Details
          *------------------------------------------------*/
        //999
        $("#btn_add_motor_details").on("click", function () {

            if (u.form_validation("#motorRiskForm")) {

                //if ($("input[name='VEH_RISK_NO']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#VEH_SYS_ID").val("");

                if ($("#VEH_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_VEH", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#VEH_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Motor Details?", function () {


                    var rowIds = $scope.motor_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.motor_grid.jqGrid("getCell", currRow, "VEH_SYS_ID");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#VEH_SYS_ID").val(), code) < 0) {

                        var formData = u.parse_form("#motorRiskForm");
                        formData.VEH_POLH_END_NO = $("#POLH_END_NO").val();
                        formData.VEH_CURRENCY = $("#POLH_CURRENCY").val();
                        formData.VEH_CURR_RATE = $("#POLH_CURRENCY_RATE").val();
                        formData.VEH_EXCESS_APP = "N";
                        formData.VEH_TP_INTEREST = "N";
                        formData.VEH_PROP_DECLINED = "N";
                        formData.VEH_STATUS = "U";
                        formData.VEH_CRTE_BY = "Admin";
                        formData.VEH_CRTE_DATE = u.get_date();
                        formData.VEH_EXTRA_TPPD = "N";
                        // $("#VEH_EXCESS_APP").prop("checked") ? $("#VEH_EXTRA_TPPD").val() : null,
                        // **
                        $scope.motor_grid.addRowData(formData.VEH_SYS_ID, formData);

                        //Add defaulf covers afer adding the Risk
                        $scope.getDefaultRiskCovers();
                        // add Fees of the risk
                        getRiskComPulsoryFess();
                        //Get sum of Policy, Risk and Covers Values and 
                        //$scope.SumCoverRiskValues();
                        //
                        u.growl_success("Motor successfully added to grid");
                        //Hide the River Modal
                        u.hide_confirm();
                        $("#MotorRiskModal").modal("hide");


                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Motor with code " + cellValue + " Already exists");
                    }
                });



            }

            else {

                u.growl_error("Please fill out the fields that are marked red");
            }


        });



        /*--------------------------------------------------
        * Copy / Duplicate Motor Risk Details
        *------------------------------------------------*/
        //
        $("#btn_copy_motor_details").on("click", function () {

            if (u.form_validation("#motorRiskForm")) {

                if ($("input[name='VEH_RISK_NO']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#VEH_SYS_ID").val("");

                if ($("#VEH_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_VEH", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#VEH_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Motor Details?", function () {


                    var rowIds = $scope.motor_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.motor_grid.jqGrid("getCell", currRow, "VEH_SYS_ID");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#VEH_SYS_ID").val(), code) < 0) {

                        var formData = u.parse_form("#motorRiskForm");
                        formData.VEH_EXCESS_APP = "N";
                        formData.VEH_TP_INTEREST = "N";
                        formData.VEH_PROP_DECLINED = "N";
                        formData.VEH_STATUS = "U";
                        formData.VEH_CRTE_BY = "Admin";
                        formData.VEH_CRTE_DATE = u.get_date();
                        $scope.motor_grid.addRowData(formData.VEH_SYS_ID, formData);
                        u.hide_confirm();
                        u.growl_success("Motor successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Motor with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Motor Risk
        *---------------------------------------------------*/
        //
        $("#btn_remove_motor_risk").on("click", function () {

            if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.motor_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "VEH_STATUS");

            var riskNo = grid.jqGrid("getCell", rowId, "VEH_RISK_NO");

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

                        var getCovRiskId = covGrid.jqGrid("getCell", covCurrRow, "RCOV_NO");

                        if (getCovRiskId == riskNo) {

                            covGrid.jqGrid("delRowData", covCurrRow);
                        }
                    }

                    grid.jqGrid("delRowData", rowId);
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

                        var getCovRiskId = covGrid.jqGrid("getCell", covCurrRow, "RCOV_NO");


                        if (getCovRiskId == riskNo) {

                            covGrid.jqGrid("setCell", covCurrRow, "RCOV_STATUS", "D");

                            $("#" + covCurrRow, "#gridAppCovers").css({ color: "red" });
                        }
                    }

                    grid.jqGrid("setCell", rowId, "VEH_STATUS", "D");
                    $("#" + rowId, "#gridVehRisks").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskId = covGrid.jqGrid("getCell", covCurrRow, "RCOV_RISK_SYS_ID");

                        if (getCovRiskId == riskNo) {

                            covGrid.jqGrid("setCell", covCurrRow, "RCOV_STATUS", "A");

                            $("#" + covCurrRow, "#gridAppCovers").css({ color: "black" });
                        }
                    }

                    $("#" + rowId, "#gridVehRisks").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "VEH_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Motor Risk Details
        *------------------------------*/
        //
        $("#btn_update_motor_risk").on("click", function () {

            if (u.grid_empty($scope.motor_grid)) return u.growl_info("Motor grid is empty");

            if (u.form_validation("#motorRiskForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Motor?", function () {

                    var grid = $scope.motor_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "VEH_SYS_ID");

                    if (code === $("input[name='VEH_SYS_ID']").val()) {

                        var data = u.parse_form("#motorRiskForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Motor Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*--------------------------------
        * Motor Risk 
        *------------------------------*/
        $("#btn_motor_risk_close").click(function () {

        });


        /*-----------------------------------
         * exporting of the grid to excel Condition & Clauses
         *----------------------------------*/
        $("#export-motor-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.motor_grid, ["ID"], "Motor_List_Excel");
        });


        // opening of Modals

        /*-----------------------------------
        * Agent/Broker Commission
        *----------------------------------*/

        $("#btn_agent_comm").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#agentcommModal").modal();

        });

        $("#btn_polh_excess").click(function () {

            if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#policyheaderExcessModal").modal();
        });

        $("#btn_polh_discloading").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#policyheaderDiscloadingModal").modal();

        });

        $("#btn_risk_discloading").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#riskDiscloadingModal").modal();

        });

        $("#btn_risk_excess").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#riskExcessModal").modal();

        });

        $("#btn_risk_accessories").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#riskAccessoriesModal").modal();

        });

        $("#btn_cover_discloading").click(function () {
            //Open Modal
            $("#coverDiscloadingModal").modal();


        });

        $("#btn_cover_excess").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#coverExcessModal").modal();

        });
        gridTreatAppor;
        $("#btnTreatyAppor").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#treatyApportionmentModal").modal();

            //

        });

        $("#btnTreatyShare").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#treatyShareModal").modal();

        });


        /*-----------------------------
        Save/Update Data
         *---------------------------*/
        //

        $("#btn_Save").on("click", function () {
            //Saving New transaction state
            var Pol_Txn_State = $("#POLH_TXN_STATE").val();
            if (Pol_Txn_State === "C") return u.growl_warning("The Policy is already Confirmed, Please unconfirm before saving");
            if (Pol_Txn_State === "P") return u.growl_warning("The Policy is Approved, You cannot save the Policy");


            // Save policy 


            /*-----------------------------------------------
                 * setup validation before sending save request
                 *---------------------------------------------*/

            if (!u.form_validation("#polheaderForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            if (u.grid_empty($scope.motor_grid)) {
                return u.growl_warning("Please add Motor Details");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {


                var polhData = u.parse_form("#polheaderForm");
                //if (!$scope.searched) polhData.POLH_STATUS = "U";

                //polhData.POLH_STATUS = "U";
                //polhData.POLH_TXN_STATE = "S";
                //polhData.POLH_END_NO = 0;


                polhData.INS_UWD_VEHICLE_RISK = u.get_grid_data($scope.motor_grid);

                var insUwdRiskCovers = u.get_grid_data($scope.cover_grid);

                for (var i in polhData.INS_UWD_VEHICLE_RISK) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = polhData.INS_UWD_VEHICLE_RISK[i]["VEH_SYS_ID"];
                    polhData.INS_UWD_VEHICLE_RISK[i]["INS_UWD_RISK_COVERS"] = [];
                    for (var y in insUwdRiskCovers) {
                        //find covers which have the same the same risk sys_id
                        if (insUwdRiskCovers[y]["RCOV_RISK_SYS_ID"] === id) {
                            polhData.INS_UWD_VEHICLE_RISK[i]["INS_UWD_RISK_COVERS"].push(insUwdRiskCovers[y]);
                        }
                    }

                }

                polhData.INS_RI_FAC_INWARD = u.get_grid_data($scope.grdfacInward_grid);

                var facCompanies = u.get_grid_data($scope.grdInwdParticipant_grid);

                for (var i in polhData.INS_RI_FAC_INWARD) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = polhData.INS_RI_FAC_INWARD[i]["FINW_SYS_ID"];
                    polhData.INS_RI_FAC_INWARD[i]["INS_RI_FAC_INW_COMPANY"] = [];
                    for (var y in facCompanies) {
                        //find covers which have the same the same risk sys_id
                        if (facCompanies[y]["FINW_PAP_FINW_SYS_ID"] === id) {
                            polhData.INS_RI_FAC_INWARD[i]["INS_RI_FAC_INW_COMPANY"].push(facCompanies[y]);
                        }
                    }

                }

                console.log(polhData);
                polhData.INS_UDW_VEHICLE_FEES = u.get_grid_data($scope.riskFees_grid);

                polhData.INS_UWD_INTERMEDIARY_COMM = u.get_grid_data($scope.intermCom_grid);

                polhData.INS_UDW_POL_FEES = u.get_grid_data($scope.polfees_grid);

                polhData.INS_RI_FAC_OUTWARD = u.get_grid_data($scope.grdCoinsLeader_grid);



                console.log(polhData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_motor(polhData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {


                            var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                            var motorRowIds = $scope.motor_grid.jqGrid("getDataIDs");
                            var covRecStatus;
                            /*---------------------------------
                                 * update motor row status
                                 *-------------------------------*/
                            for (var i = 0; i < motorRowIds.length; i++) {
                                covRecStatus = $scope.motor_grid.jqGrid("getCell", motorRowIds[i], "VEH_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.motor_grid.jqGrid("delRowData", motorRowIds[i]);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.motor_grid.jqGrid("setCell", motorRowIds[i], "VEH_STATUS", "A");
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


        //Policy Process Modal
        $("#btnProcessPolicy").on("click", function () {

            if (!u.field_empty("#POLH_SYS_ID")) {
                $("#PolicyProcessingModal").modal();
            } else {
                u.growl_warning("There is no policy to Process, please check and try again");
            }

        });

        //Policy Process Options Modal
        $("#btnProcess").on("click", function () {

            var e = document.getElementById("SelPolicyProcess");
            var polProcess = e.options[e.selectedIndex].value;
            var polTxnState = $("#POLH_TXN_STATE").val();

            if (polProcess === "") {
                u.growl_warning("Nothing selected, Please select to Process");
            }

                //Confirmation Modal
            else if (polProcess === "Confirm") {

                if (!u.field_empty("#POLH_SYS_ID")) {


                    if (polTxnState === "C") return u.growl_warning("The Policy is already Confirmed, You cannot Confirm them again");
                    if (polTxnState === "P") return u.growl_warning("The Policy is Approved, You cannot Confirm again");
                    if (polTxnState === "") return u.growl_warning("The Policy is not saved, You cannot Confirm it");

                    if (polTxnState === "E" || polTxnState === "S") {

                        $("#PolConfirmModal").modal();


                    }

                }
                else {
                    u.modal_warning("There is no Policy to process");
                }
            }


            else if (polProcess === "UnConfirm") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    u.modal_warning("Unconfirm hereeeeeeeeeeeeeeeeeeeee");
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }
                //Endorsement Modal
            else if (polProcess === "Endorse") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    if (polTxnState === "P") {
                        $("#PolicyEndorsementModal").modal();

                        $("#PolicyProcessingModal").modal("hide");

                        var sysId = $("#POLH_SYS_ID").val();
                        var endNo = $("#POL_END_NO").val();
                        var premAmtFc = $("#POLH_POL_PREM_FC").val();
                        var premAmtBc = $("#POLH_POL_PREM_BC").val();
                        $("#APP_POLH_ID").val(sysId);
                        $("#APP_END_NO").val(endNo);
                        $("#APP_PREM_FC").val(premAmtFc);
                        $("#APP_PREM_BC").val(premAmtBc);
                        $("#APPROVE_DATE").val("01/01/2017");
                        //     
                    } else {
                        u.growl_warning("The Policy must be Approved, before endorsement, Please check and try again");
                    }
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }
            else if (polProcess === "UnEndorse") {

                if (!u.field_empty("#POLH_SYS_ID")) {
                    //   btnEndDeletion EndmtDeletionModal


                    if (polTxnState === "E") {


                        $("#EndmtDeletionModal").modal();
                        $("#PolicyProcessingModal").modal("hide");

                        var SYS_ID = $("#POLH_SYS_ID").val();
                        var end_No = $("#POL_END_NO").val();

                        //     
                    } else {
                        u.growl_warning("The Policy must be in endorsement state before Endorsement deletion, Please check and try again");
                    }


                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }


                //Approval Modal
            else if (polProcess === "Approve") {

                if (!u.field_empty("#POLH_SYS_ID")) {



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
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }


        });

        /*------------------------------
     *  Policy Endorsement process
     *----------------------------*/
        //
        $("#btnEndorse").on("click", function () {
            u.modal_confirmation("Are you sure you want to pass an endorsement on the Policy?", function (e) {

                // Reset the Policy header to endorsement state
                var endNo = parseInt($("#POLH_END_NO").val()) + 1;

                $("#POLH_END_NO").val(endNo);
                $("#POLH_TXN_STATE").val("E");


                //

                var motorRowIds = $scope.motor_grid.jqGrid("getDataIDs");
                var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                var intermComIds = $scope.intermCom_grid.jqGrid("getDataIDs");
                var premiumregIds = $scope.premiumreg_grid.jqGrid("getDataIDs");
                var riskFeesIds = $scope.riskFees_grid.jqGrid("getDataIDs");
                var polfeesIds = $scope.polfees_grid.jqGrid("getDataIDs");

                /*---------------------------------
                    $scope.   
                     * update Endorsement No in the Grids
                     *-------------------------------*/
                //Vehicle Risks
                for (var i = 0; i < motorRowIds.length; i++) {

                    $scope.motor_grid.jqGrid("setCell", motorRowIds[i], "VEH_POLH_END_NO", endNo);
                }
                //Risk Covers
                for (var j = 0; j < coverRowIds.length; j++) {

                    $scope.motor_grid.jqGrid("setCell", coverRowIds[j], "RPCOV_END_NO", endNo);
                }
                //Commissions
                for (var k = 0; k < intermComIds.length; k++) {

                    $scope.intermCom_grid.jqGrid("setCell", intermComIds[k], "CMM_END_NO", endNo);
                }
                //Prem Register
                for (var l = 0; l < premiumregIds.length; l++) {

                    $scope.premiumreg_grid.jqGrid("setCell", premiumregIds[l], "PR_END_NO", endNo);
                }
                //Risk Fees
                for (var m = 0; m < riskFeesIds.length; m++) {

                    $scope.riskFees_grid.jqGrid("setCell", riskFeesIds[m], "VEH_FEE_END_NO", endNo);
                }
                //Pol fees summary
                for (var n = 0; n < polfeesIds.length; n++) {

                    $scope.polfees_grid.jqGrid("setCell", polfeesIds[n], "POL_FEE_END_NO", endNo);
                }
                // to do for the rest of the grids

                u.form_text_Gold_color();

                u.growl_success("The Policy is ready for Endorsement, Please SAVE to continue");

                u.hide_confirm();
                $("#PolicyEndorsementModal").modal("hide");
            });
        });


        // policy Confirmation process 

        $("#btnConfirm").click(function () {
            u.modal_confirmation("Are you sure you want to Confirm ?", function () {

                s.confirmMotor($("#POLH_SYS_ID").val(), function (response) {
                    if (response.state) {

                        // Change policy transaction state to Confirmed -  C
                        var txnState = response.POLH_TXN_STATE;

                        //alert(txnState);
                        u.growl_success(response.message);


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

        //Approval Process
        $("#btnApproval").click(function () {
            // if ($("#POLH_STATUS").val() === "" || $("#POL_END_NO").val() == "A")

            if (u.field_empty("#POLH_SYS_ID")) return u.growl_warning("There is no Policy to Approve, please Check and try again");
            if ($("#POLH_SYS_ID").val() === "A") return u.growl_warning("There is no Policy to Approve, please Check and try again");

            if (!u.form_validation("#receiptHeaderForm")) return u.growl_warning("Fields marked red are required");

            u.modal_confirmation("Are you sure you want to Approve ?", function () {
                s.policyApproval({ POL_SYS_ID: $("#POLH_SYS_ID").val(), POL_END_NO: $("#POL_END_NO").val(), TXN_TYPE: 1 }, function (response) {
                    if (response.state) {
                        u.growl_success("Policy successfully Approved");
                        //alert(JSON.stringify(response));

                        //alert(JSON.stringify());

                        var txnState = response.result.POLH_TXN_STATE;

                        $("#POLH_TXN_STATE").val(txnState);

                        $("#POLH_TXN_STATE").val(txnState);
                        if (txnState === ("P")) {

                            u.form_text_Green_color();
                            // u.form_readonly();
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

        /*---------------------------
              *Endorsement Deletion process
        *-------------------------*/
        $("#btnEndDeletion").click(function () {
            u.modal_confirmation("Are you sure you want to delete Endorsement?", function () {
                if (!u.field_empty("#POLH_SYS_ID") && !u.field_empty("#POLH_END_NO")) {


                    //s.search_motor($("#POLH_SYS_ID").val(), function(result) {
                    //    $scope.searched = true;
                    //    $scope.result = result;
                    //    if (result.length > 0) {
                    //        $scope.search_fill(result[0]);
                    //    }
                    //});

                    s.motor_end_deletion($("#POLH_SYS_ID").val(), (parseInt($("#POLH_END_NO").val()) - 1), function (result) {
                        if (result) {

                            s.search_motor($("#POLH_SYS_ID").val(), function (data) {
                                $scope.searched = true;
                                $scope.result = data;
                                if (data.length > 0) {
                                    $scope.search_fill(data[0]);
                                }
                            });

                        } else {
                            u.growl_info("Unable to delete endorsement, please try again");
                        }
                        u.hide_confirm();
                    },
                        function (err) {
                            u.growl_error("Error fetching search results");
                        });
                } else {
                    u.growl_info("Invalid Policy, please check and try again!");
                }
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
                        var policyData = u.parse_form("#polheaderForm");
                        policyData.POLH_STATUS = "D";
                        s.save_motor(policyData,
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
                u.form_reset("#motorRiskForm");
                $scope.cover_grid.jqGrid("clearGridData");
                $scope.motor_grid.jqGrid("clearGridData");
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
         * Policy Search
         *-------------------------*/
        $("#btnQueryPolicy").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_motor(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                result[i].ID = i;
                                $scope.search_grid.addRowData(result[i].ID, result[i]);
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


        //Policy Search function
        $scope.search_fill = function (policy) {
            $scope.motor_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");

            // fill Policy Header
            u.fill_form(policy, "#polheaderForm");

            //filling Vehicle risk
            u.clear_grid_data($scope.motor_grid);
            if (policy.INS_UWD_VEHICLE_RISK) {
                for (var i in policy.INS_UWD_VEHICLE_RISK) {

                    //get Vehicle risk name
                    policy.INS_UWD_VEHICLE_RISK[i]["VEH_RISK_NAME"] = policy.INS_UWD_VEHICLE_RISK[i]["MS_UDW_MOTOR_RISK"]["MRK_NAME"];

                    $scope.motor_grid.addRowData(policy.INS_UWD_VEHICLE_RISK[i].ID, policy.INS_UWD_VEHICLE_RISK[i]);
                }

                if (policy["POLH_TXN_STATE"] === "X") {
                    //canceled
                    // u.form_readonly();
                    u.form_text_Red_color();
                }
                if (policy["POLH_TXN_STATE"] === "C") {

                    //confirmed
                    // u.form_text_Blue_color();
                    //u.form_readonly();
                }
                if (policy["POLH_TXN_STATE"] === "P") {
                    //approved
                    // u.form_readonly();
                    u.form_text_Green_color();
                }

                if (policy["POLH_TXN_STATE"] === "E") {
                    //endorsed
                    // u.formReadWrite();
                    u.form_text_Gold_color();
                }
            }


            //Filling Risk Covers

            for (var x in policy.INS_UWD_VEHICLE_RISK[i].INS_UWD_RISK_COVERS) {

                //get Cover Names
                policy.INS_UWD_VEHICLE_RISK[i].INS_UWD_RISK_COVERS[x]["RCOV_NAME"] = policy.INS_UWD_VEHICLE_RISK[i].INS_UWD_RISK_COVERS[x]["MS_UDW_COVERS"]["CVR_NAME"];
                //Fill Cover Grid
                $scope.cover_grid.addRowData(policy.INS_UWD_VEHICLE_RISK[i].INS_UWD_RISK_COVERS[x].RCOV_RISK_SYS_ID.ID, policy.INS_UWD_VEHICLE_RISK[i].INS_UWD_RISK_COVERS[x]);
            }
        };


        /*-------------------------------------
      * setting datepicker for date fields
      *------------------------------------*/
        u.set_datepicker("input[name='POLH_POL_START_DATE']");
        u.set_datepicker("input[name='POLH_POL_END_DATE']");
        u.set_datepicker("input[name='VEH_ISSUE_DATE']");
        u.set_datepicker("input[name='VEH_RETROS_DATE']");
        u.set_datepicker("input[name='VEH_START_DATE']");
        u.set_datepicker("input[name='VEH_END_DATE']");
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

        u.lovCodeVal("input[name='POLH_CUST_CODE']", "check_customer_code", "input[name='CUS_OFFICIAL_NAME']", function (code) {
            /*fetch customer details after successful validation*/
            s.get_customer(code, function (response) {
                u.fill_form(response, "#polheaderForm");
            });
        });
        u.lovCodeVal("form input[name='CUS_TYPE_CODE']", "check_customertype_code", "form input[name='CUS_TYPE_NAME']");


        //Policy Period days calculations/

        document.getElementById("POLH_POL_START_DATE").addEventListener("focusout", fxnPolPeriodDays);
        document.getElementById("POLH_POL_END_DATE").addEventListener("focusout", fxnPolPeriodDays);


        function fxnPolPeriodDays() {
            //alert("Input field lost focus.");
            var sDate = $("#POLH_POL_START_DATE").val();
            var eDate = $("#POLH_POL_END_DATE").val();

            //set the vehicle start date to same as policy start date
            $("#VEH_START_DATE").val(sDate);
            $("#VEH_END_DATE").val(eDate);

            $("#VEH_ISSUE_DATE").val(sDate);
            $("#VEH_RETROS_DATE").val(sDate);


            var sdte = new Date(sDate);
            var polUWY = sdte.getFullYear();
            $("#POLH_POL_UW_YEAR").val(polUWY);

            $("#VEH_UW_YEAR").val(polUWY);

            var startDate = new Date(sDate);
            var endDate = new Date(eDate);


            var polPeriodDays = u.get_dateDifference(startDate, endDate);


            if (polPeriodDays > 0) {
                $("#POLH_POL_DAYS").val(polPeriodDays);
                $("#VEH_PERIOD_DAYS").val(polPeriodDays);
            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Policy End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#POLH_POL_END_DATE").val("");
                $("#POLH_POL_DAYS").val("");
                // 
                $("#VEH_END_DATE").val("");
                $("#VEH_PERIOD_DAYS").val("");
            }
            else {

            }
        }

        //---//Risk period days
        document.getElementById("VEH_START_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        document.getElementById("VEH_END_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        function fxnRiskPeriodDays() {
            //alert("Input field lost focus.");
            var polStartDate = new Date($("#POLH_POL_START_DATE").val());
            var polEndDate = new Date($("#POLH_POL_END_DATE").val());


            var riskStartDate = new Date($("#VEH_START_DATE").val());
            var riskEndDate = new Date($("#VEH_END_DATE").val());

            var sdte = new Date(riskStartDate);
            var riskUWY = sdte.getFullYear();
            $("#VEH_UW_YEAR").val(riskUWY);

            var riskPeriodDays = u.get_dateDifference(riskStartDate, riskEndDate);

            if (u.get_dateDifference(polStartDate, riskStartDate) < 0) {
                u.growl_warning("Risk Start date cannot be less than Policy start date");
            }
            else if (u.get_dateDifference(polEndDate, riskEndDate) > 0) {
                u.growl_warning("Risk End date cannot be greater than Policy End date");
            }
            else {

                if (riskPeriodDays > 0) {
                    $("#VEH_PERIOD_DAYS").val(riskPeriodDays);
                }
            }


            if ((riskPeriodDays <= 0)) {
                u.growl_warning("Risk End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#VEH_START_DATE").val("");
                $("#VEH_END_DATE").val("");

            }
            else if ((riskPeriodDays > 365)) {
                u.growl_warning("Risk period cannot be greater than 365 days, please check and try again");
            }

        }


        /*-----------------------------
* //Risk Cover Rate Calculation
*---------------------------*/

        $("#RCOV_GROSS_PREM_FC").prop("disabled", true);
        $("#RCOV_NET_PREM_FC").prop("disabled", true);

        // $('#RCOV_GROSS_PREM_FC').css("background", "grey");

        //SI Change
        function siRateChangeFunction() {
            //alert("Input field lost focus.");

            var grossPremFc = "";
            var grossPremBc = "";

            var netPremFc = "";
            var netPremBc = "";
            var exchangeRate = $("#VEH_CURR_RATE").val();

            if ($("#RCOV_SI_FC").val() === "" || $("#RCOV_SI_FC").val() === 0 || $("#RCOV_RATE").val() === "" || $("#RCOV_RATE").val() <= 0 || $("#RCOV_RATE").val() > 100) {
                u.growl_warning("Please Check the RATE or SUM INSURED values");
            }
            else {

                //
                if ($("#RCOV_SI_CHANGE").val() === "Y" || $("#RCOV_RATE_CHANGE").val() === "Y") {
                    var periodRate = 1;
                    if (($("#VEH_PREMIUM_BASIS").val() === "PR")) {
                        periodRate = parseInt($("#VEH_PERIOD_DAYS").val()) / 365;
                    }
                    else if (($("#VEH_PREMIUM_BASIS").val() === "SP")) {

                    }
                    else if (($("#VEH_PREMIUM_BASIS").val() === "FP")) {
                    }

                    //var annualPremiumFc = ($("#RCOV_SI_FC").val() * $("#RCOV_RATE").val() * 0.01);
                    //var annualPremiumBc = parseFloat(annualPremiumFc / exchangeRate).toFixed(2);

                    //-- --//

                    grossPremFc = ($("#RCOV_SI_FC").val() * $("#RCOV_RATE").val() * 0.01);
                    grossPremBc = parseFloat(grossPremFc / exchangeRate).toFixed(2);
                    //
                    //grossPremFc = (annualPremiumFc*periodRate).toFixed(2);
                    //grossPremBc = (annualPremiumBc * periodRate).toFixed(2);

                    //Calculate discounts and loadings if applicable to get the Net Premium
                    netPremFc = grossPremFc;
                    netPremBc = grossPremBc;

                    //$("#RCOV_ANNL_PREM_FC").val(annualPremiumFc);
                    //$("#RCOV_ANNL_PREM_BC").val(annualPremiumBc);

                    //
                    $("#RCOV_GROSS_PREM_FC").val(grossPremFc);
                    $("#RCOV_GROSS_PREM_BC").val(grossPremBc);

                    //
                    $("#RCOV_NET_PREM_FC").val(netPremFc);
                    $("#RCOV_NET_PREM_BC").val(netPremBc);
                }
                else {
                    u.growl_warning("You cannot change Sum insured Or Rate for this Cover, please check and try again");
                }

            }

        }

        document.getElementById("RCOV_RATE").addEventListener("focusout", siRateChangeFunction);
        document.getElementById("RCOV_SI_FC").addEventListener("focusout", siRateChangeFunction);

        /*-----------------------------
* //Add new customer modal dialog form
*---------------------------*/
        $("#customerSetupBtn").click(function () {
            /*obtain the customer code*/
            if (!u.field_empty("input[name='POLH_CUST_CODE']")) {
                s.get_customer($("input[name='POLH_CUST_CODE']").val(),
             function (response) {
                 u.fill_form(response, "#customerForm");
             });
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



        /*--------------------------------------------------
  * Adding Agency/Broker Details
  *------------------------------------------------*/
        //
        $("#btn_add_agencycomm").on("click", function () {

            if (u.form_validation("#agencycommForm")) {

                //if ($("input[name='CMM_INT_CODE']").val() === "") return u.modal_alert("Please Enter Agency/Broker No");

                u.modal_confirmation("Are you sure you want to add the Agency/Broker Details?", function () {


                    var rowIds = $scope.intermCom_grid.jqGrid("getDataIDs");

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

                        var cellValue = $scope.intermCom_grid.jqGrid("getCell", currRow, "CMM_INT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#CMM_INT_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#agencycommForm");
                        formData.CMM_END_NO = 0;
                        formData.CMM_COB_CODE = $("#POLH_CLASS_CODE").val();

                        formData.CMM_OFFICE = $("#POLH_OFF_CODE").val();
                        formData.CMM_INT_NAME = $("#CMM_INT_NAME").val();
                        formData.CMM_STATUS = "U";
                        formData.CMM_CRTE_BY = "Admin";
                        formData.CMM_CRTE_DATE = u.get_date();
                        $scope.intermCom_grid.addRowData(formData.CMM_INT_CODE, formData);

                        //
                        $("#CMM_INT_CODE").val("");
                        $("#CMM_INT_NAME").val("");
                        $("#CMM_COM_PERC").val("");
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
        $("#btn_remove_agencycomm").on("click", function () {

            if (u.grid_empty($scope.intermCom_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.intermCom_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "CMM_STATUS");

            var code = grid.jqGrid("getCell", rowId, "CMM_INT_CODE");

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

                    grid.jqGrid("setCell", rowId, "CMM_STATUS", "D");
                    $("#" + rowId, "#grdAgencyCommission").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdAgencyCommission").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "CMM_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_agencycomm").on("click", function () {

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



        /*--------------------------------------------------
*  Policy Excess 
*------------------------------------------------*/
        //
        $("#btn_add_polhexcess").on("click", function () {

            if (u.form_validation("#polhexcessForm")) {

                //if ($("input[name='EXS_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Policy Excess Details?", function () {


                    var rowIds = $scope.polhexcess_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.polhexcess_grid.jqGrid("getCell", currRow, "EXS_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#EXS_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#polhexcessForm");
                        formData.EXS_STATUS = "U";
                        formData.EXS_CRTE_BY = "Admin";
                        formData.EXS_CRTE_DATE = u.get_date();
                        $scope.polhexcess_grid.addRowData(formData.EXS_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Policy Excess successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Policy Excess with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_polhexcess").on("click", function () {

            if (u.grid_empty($scope.polhexcess_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.polhexcess_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "EXS_STATUS");

            var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

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

                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "D");
                    $("#" + rowId, "#grdPolhExcess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdPolhExcess").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_polhexcess").on("click", function () {

            if (u.grid_empty($scope.polhexcess_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#polhexcessForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.polhexcess_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

                    if (code === $("input[name='EXS_CODE']").val()) {
                        var data = u.parse_form("#polhexcessForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Policy Excess updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*--------------------------------------------------
*  Policy Discount/Loading 
*------------------------------------------------*/
        //
        $("#btn_add_polhdisloading").on("click", function () {

            if (u.form_validation("#polhdiscloadingForm")) {

                //if ($("input[name='DL_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Policy Discount/Loading Details?", function () {


                    var rowIds = $scope.polhdiscloading_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.polhdiscloading_grid.jqGrid("getCell", currRow, "DL_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DL_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#polhdiscloadingForm");
                        formData.DL_STATUS = "U";
                        formData.DL_CRTE_BY = "Admin";
                        formData.DL_CRTE_DATE = u.get_date();
                        $scope.polhdiscloading_grid.addRowData(formData.DL_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Policy Discount/Loading successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Policy Discount/Loading with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_polhdisloadings").on("click", function () {

            if (u.grid_empty($scope.polhdiscloading_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.polhdiscloading_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DL_STATUS");

            var code = grid.jqGrid("getCell", rowId, "DL_CODE");

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

                    grid.jqGrid("setCell", rowId, "DL_STATUS", "D");
                    $("#" + rowId, "#grdPolhDiscloading").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdPolhDiscloading").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DL_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_polhdisloading").on("click", function () {

            if (u.grid_empty($scope.polhdiscloading_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#polhdiscloadingForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Discount/Loading?", function () {

                    var grid = $scope.polhdiscloading_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "DL_CODE");

                    if (code === $("input[name='DL_CODE']").val()) {
                        var data = u.parse_form("#polhdiscloadingForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Policy Discount/Loading updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*--------------------------------------------------
*   Risk Excess 
*------------------------------------------------*/
        //
        $("#btn_add_riskexcess").on("click", function () {

            if (u.form_validation("#riskexcessForm")) {

                //if ($("input[name='EXS_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Risk Excess Details?", function () {


                    var rowIds = $scope.riskexcess_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.riskexcess_grid.jqGrid("getCell", currRow, "EXS_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#EXS_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#riskexcessForm");
                        formData.EXS_STATUS = "U";
                        formData.EXS_CRTE_BY = "Admin";
                        formData.EXS_CRTE_DATE = u.get_date();
                        $scope.riskexcess_grid.addRowData(formData.EXS_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Risk Excess successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Risk Excess with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_riskexcess").on("click", function () {

            if (u.grid_empty($scope.riskexcess_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.riskexcess_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "EXS_STATUS");

            var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

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

                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "D");
                    $("#" + rowId, "#grdRiskExcess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdRiskExcess").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_polhexcess").on("click", function () {

            if (u.grid_empty($scope.riskexcess_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#riskexcessForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.riskexcess_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

                    if (code === $("input[name='EXS_CODE']").val()) {
                        var data = u.parse_form("#riskexcessForm");
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
*  Risk Discount/Loading 
*------------------------------------------------*/
        //
        $("#btn_add_riskdiscloading").on("click", function () {

            if (u.form_validation("#riskdiscloadingForm")) {

                //if ($("input[name='DL_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Risk Discount/Loading Details?", function () {


                    var rowIds = $scope.riskdiscloading_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.riskdiscloading_grid.jqGrid("getCell", currRow, "DL_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DL_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#riskdiscloadingForm");
                        formData.DL_STATUS = "U";
                        formData.DL_CRTE_BY = "Admin";
                        formData.DL_CRTE_DATE = u.get_date();
                        $scope.riskdiscloading_grid.addRowData(formData.ID, formData);
                        u.hide_confirm();
                        u.growl_success("Risk Discount/Loading successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Risk Discount/Loading with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_riskdiscloadings").on("click", function () {

            if (u.grid_empty($scope.riskdiscloading_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.riskdiscloading_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DL_STATUS");

            var code = grid.jqGrid("getCell", rowId, "DL_CODE");

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

                    grid.jqGrid("setCell", rowId, "DL_STATUS", "D");
                    $("#" + rowId, "#grdRiskDiscloading").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdRiskDiscloading").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DL_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_riskdiscloading").on("click", function () {

            if (u.grid_empty($scope.riskdiscloading_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#riskdiscloadingForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Discount/Loading?", function () {

                    var grid = $scope.riskdiscloading_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "DL_CODE");

                    if (code === $("input[name='DL_CODE']").val()) {
                        var data = u.parse_form("#riskdiscloadingForm");
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



        /*--------------------------------------------------
*   Cover Excess 
*------------------------------------------------*/
        //
        $("#btn_add_coverexcess").on("click", function () {

            if (u.form_validation("#coverexcessForm")) {

                //if ($("input[name='EXS_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Cover Excess Details?", function () {


                    var rowIds = $scope.coverexcess_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.coverexcess_grid.jqGrid("getCell", currRow, "EXS_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#EXS_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#coverexcessForm");
                        formData.EXS_STATUS = "U";
                        formData.EXS_CRTE_BY = "Admin";
                        formData.EXS_CRTE_DATE = u.get_date();
                        $scope.coverexcess_grid.addRowData(formData.EXS_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Cover Excess successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Cover Excess with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_coverexcess").on("click", function () {

            if (u.grid_empty($scope.coverexcess_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.coverexcess_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "EXS_STATUS");

            var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

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

                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "D");
                    $("#" + rowId, "#grdCoverExcess").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdCoverExcess").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "EXS_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_coverexcess").on("click", function () {

            if (u.grid_empty($scope.coverexcess_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#coverexcessForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Excess?", function () {

                    var grid = $scope.coverexcess_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EXS_CODE");

                    if (code === $("input[name='EXS_CODE']").val()) {
                        var data = u.parse_form("#coverexcessForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Cover Excess updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*--------------------------------------------------
*  Cover Discount/Loading 
*------------------------------------------------*/
        //
        $("#btn_add_coverdisloading").on("click", function () {

            if (u.form_validation("#coverdiscloadingForm")) {

                //if ($("input[name='DL_CODE']").val() === "") return u.modal_alert("Please Enter Policy Excess No");

                u.modal_confirmation("Are you sure you want to add the Cover Discount/Loading Details?", function () {


                    var rowIds = $scope.coverdiscloading_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.coverdiscloading_grid.jqGrid("getCell", currRow, "DL_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#DL_CODE").val(), code) < 0) {

                        var formData = u.parse_form("#coverdiscloadingForm");
                        formData.DL_STATUS = "U";
                        formData.DL_CRTE_BY = "Admin";
                        formData.DL_CRTE_DATE = u.get_date();
                        $scope.coverdiscloading_grid.addRowData(formData.DL_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Cover Discount/Loading successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Cover Discount/Loading with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_coverdisloadings").on("click", function () {

            if (u.grid_empty($scope.coverdiscloading_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.coverdiscloading_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "DL_STATUS");

            var code = grid.jqGrid("getCell", rowId, "DL_CODE");

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

                    grid.jqGrid("setCell", rowId, "DL_STATUS", "D");
                    $("#" + rowId, "#grdCoverDiscloading").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdCoverDiscloading").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "DL_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_coverdisloading").on("click", function () {

            if (u.grid_empty($scope.coverdiscloading_grid)) return u.growl_info("Excess grid is empty");

            if (u.form_validation("#coverdiscloadingForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Discount/Loading?", function () {

                    var grid = $scope.coverdiscloading_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "DL_CODE");

                    if (code === $("input[name='DL_CODE']").val()) {
                        var data = u.parse_form("#riskdiscloadingForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Cover Discount/Loading updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        $scope.GetRiskCovers = function () {
            var query = $("#VEH_RISK_NO").val();
            if (query != null && query.length > 0) {
                s.search_premiumtariff(query,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.cover_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            result[i].TFF_CODE = i;
                            $scope.cover_grid.addRowData(result[i].TFF_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.cover_grid.jqGrid("clearGridData");

                //fetch all 
                s.get_premiumtariffs(function (premiumtariffs) {
                    for (var i in premiumtariffs) {
                        $scope.cover_grid.addRowData(premiumtariffs[i].TFF_CODE, premiumtariffs[i]);
                    }
                });
            }
        }; /*
        //Hide or show Covers in the Risk Covers (to filter out the covers for particular risk
        */
        $scope.hideShowCovers = function () {


            //get the selected Risk ID
            var vehgrid = $scope.motor_grid;
            var selId = vehgrid.jqGrid("getGridParam", "selrow");
            var vehRiskId = vehgrid.jqGrid("getCell", selId, "VEH_SYS_ID");

            //get the Risk Cover data
            var covgrid = $scope.cover_grid;
            var rowIds = covgrid.jqGrid("getDataIDs");


            // iterate through the risk cover rows to hide or show covers 

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getRiskCovId = covgrid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");


                if (getRiskCovId != vehRiskId) {

                    //hide if covers are not for the selected risk 
                    $("#" + currRow).hide();

                }
                else if (getRiskCovId == vehRiskId) {

                    //Show if covers are for the selected risk 
                    $("#" + currRow).show();

                }
            }
        };
        //u.paymentBasisPolicyDaysUpdate("form input[name='VEH_PREMIUM_BASIS']", "form input[name='VEH_PERIOD_DAYS']", $scope.cover_grid, $scope.motorRisks_grid);


        $("form select[name='VEH_PREMIUM_BASIS']").on("change", function () {

            alert("Change is happening");
            if (!u.grid_empty($scope.cover_grid)) {
                /*
             * obtain the the policy days
             */
                var polDays = parseInt($("#VEH_PERIOD_DAYS").val());

                //obtain the sys_id of the selected risk
                var riskGridId = $scope.motorRisks_grid.jqGrid("getGridParam", "selrow");

                var riskId = $scope.motorRisks_grid.jqGrid("getCell", riskGridId, "VEH_SYS_ID");
                var rowIds = $scope.cover_grid.jqGrid("getDataIDs");
                switch ($("#VEH_PREMIUM_BASIS").val()) {
                    case "PR":
                        for (var i in rowIds) {
                            if ($scope.cover_grid.jqGrid("getCell", rowIds[i], "RCOV_RISK_SYS_ID") === riskId) {

                                $scope.cover_grid.jqGrid("setCell", rowIds[i], "RCOV_GROSS_PREM_BC", $scope.cover_grid.jqGrid("getCell", parseFloat(rowIds[i], "RCOV_ANNL_PREM_BC")) * (polDays / 365.00));
                                $scope.cover_grid.jqGrid("setCell", rowIds[i], "RCOV_GROSS_PREM_FC", $scope.cover_grid.jqGrid("getCell", parseFloat(rowIds[i], "RCOV_ANNL_PREM_FC")) * (polDays / 365.00));
                            }
                        }
                        break;
                    case "SP":

                        break;
                    default:
                }
            }

        });

        /*
        Get default covers for the first time of loading the Risk Covers btn_add_motor_details
        */
        $scope.getDefaultRiskCovers = function () {


            if ($("#VEH_RISK_NO").val() == "") {

                u.growl_warning("The Risk Code cannot be null, Please check and try again");

            }
            else {
                /*
                   obtain parameter for our request
               */
                var productRiskData = {

                    PROD_RISK_SYS_ID: $("#VEH_RISK_NO").val(),
                    PRD_CV_DFT: "Y",
                    PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
                    RSK_CODE: $("#VEH_RISK_NO").val(),
                    //POLH_CLASS_CODE
                    POL_DAYS: $("#VEH_PERIOD_DAYS").val(),
                    CUR_RATE: $("#POLH_CURRENCY_RATE").val(), //$("form input[name='VEH_CURR_RATE']").val(),
                    PREM_BASIS: $("#VEH_PREMIUM_BASIS").val(),
                    MANF_YEAR: $("#VEH_MANUFACTURE_YR").val(),
                    BBE_PERC: $("#VEH_EXCESS_APP").prop("checked") ? $("#VEH_EXCESS_PERC").val() : null,
                    TTPD_AMNT_YN: $("#VEH_EXTRA_TPPD").val(),
                    SEAT_NO: $("#VEH_PASSENGERS").val(),
                }; //


                var grid = $scope.cover_grid;

                var rowIds = grid.jqGrid("getDataIDs");

                //declare array to contain the codes to varify
                var codeArray = [];

                // iterate through the rows in the grid and add Covers to Array
                for (var i = 0, len = rowIds.length; i < len; i++) {
                    var currRow = rowIds[i];

                    //get value of the cell or column in an array
                    var coverCode = grid.jqGrid("getCell", currRow, "RCOV_CODE");

                    var riskCode = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                    var riskCov = coverCode + riskCode;

                    // alert(riskCov);
                    codeArray.push(riskCov);
                }

                //send parameters and get Default covers from the database
                s.getRiskDefaulCovers(productRiskData, function (result) {
                    if (result && result.length && result.length > 0) {

                        for (var i in result) {
                            result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                            result[i]["COVER_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                            result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];


                            result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                            result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                            result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                            result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                            result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                            // //  
                            result[i]["RCOV_RISK_SYS_ID"] = $("#VEH_SYS_ID").val();
                            result[i]["RCOV_RISK_NO"] = $("#VEH_RISK_NO").val();
                            result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                            var deftCoverCode = result[i].RCOV_CODE;
                            var newRiskCode = $("#VEH_SYS_ID").val();

                            var verifyRiskCover = deftCoverCode + newRiskCode;

                            //alert(verifyRiskCover);

                            //add if Cover is not found in the Grid//
                            if ($.inArray(verifyRiskCover, codeArray) < 0) {

                                //fill in default covers if not in the grid

                                $scope.cover_grid.addRowData(result[i].ID, result[i]);
                            }

                            else {

                                u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);

                            }
                        }
                        //



                    }


                });
            }
        }; //Get default Covers if not added
        $("#btn_get_DeftCovers").click(function () {

            $scope.getDefaultRiskCovers();

        });


        //refresh Cover, Risk and policy Values on closing the Risk Cover Modal
        $("#btn_CoverPrem_Onclose").click(function () {

            if (u.grid_empty($scope.cover_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#RiskCoverModal").modal("hide");
                });
            }
            else {
                $scope.SumCoverRiskValues();
                $("#RiskCoverModal").modal("hide");
            }


        });



        // Cover level SI and Premium Calculations:

        $("#btn_get_Cover_Premiums").click(function () {


            //TestSumValues();
            $scope.SumCoverRiskValues();
            calculateIntermediaryComm();
        });


        // calculate sum of cover amounts btn_add_motor_details SumCoverRiskValues
        $scope.SumCoverRiskValues = function () {

            //Declare variables
            var riskSumSifc = 0;
            var riskSumSibc = 0;

            var sumGrossPremFc = 0;
            var sumGrossPremBc = 0;

            var sumNetPremFc = 0;
            var sumNetPremBc = 0;

            var sumLoadFc = 0;
            var sumLoadBc = 0;

            var sumDisFc = 0;
            var sumDisBc = 0;

            //Risk/Vehicle Grid
            var motorRisks_grid = $scope.motor_grid;

            var rowIdRisk = motorRisks_grid.jqGrid("getDataIDs");

            //Cover Grid
            var grid = $scope.cover_grid;

            var rowIds = grid.jqGrid("getDataIDs");

            //Risk/Vehicle Grid
            var motorRisks_grid = $scope.motor_grid;

            var riskRowId = motorRisks_grid.jqGrid("getGridParam", "selrow");

            var riskId = motorRisks_grid.jqGrid("getCell", riskRowId, "VEH_SYS_ID");


            // iterate through the rows and check if it exists
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get the risk sys ID from the covers grid
                var getvehId = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                //get Cover type of the cover
                var coverType = grid.jqGrid("getCell", currRow, "COVER_TYPE");


                // var vehID = $("#VEH_SYS_ID").val();

                if (getvehId != riskId) {
                    $("#" + currRow).hide();
                }
                else {


                    $("#" + currRow).show();
                    if (coverType === "O") {
                        // if the cover type is own damage then the SI is added to to be considered as risk Sum insured
                        riskSumSifc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_SI_FC"));
                        riskSumSibc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_SI_BC"));
                    }


                    sumGrossPremFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_FC"));
                    sumGrossPremBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_BC"));

                    sumNetPremFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_FC"));
                    sumNetPremBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_BC"));

                    sumLoadFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_FC"));
                    sumLoadBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_BC"));

                    sumDisFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_FC"));
                    sumDisBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_BC"));
                }
            }

            grid.jqGrid("footerData", "set", { 'RCOV_SI_FC': riskSumSifc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_SI_BC': riskSumSibc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_FC': sumGrossPremFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_BC': sumGrossPremBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_FC': sumNetPremFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_BC': sumNetPremBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_FC': sumLoadFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_BC': sumLoadBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_DISC_FC': sumDisFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_DISC_BC': sumDisBc.toFixed(2) });


            // set risk SI and Premiums vlues,          

            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_TOT_PREM_FC", sumGrossPremFc.toFixed(2));
            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_TOT_PREM_BC", sumGrossPremBc.toFixed(2));

            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_SI_FC", riskSumSifc.toFixed(2));
            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_SI_BC", riskSumSibc.toFixed(2));

            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_LOAD_FC", sumLoadFc.toFixed(2));
            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_LOAD_BC", sumLoadBc.toFixed(2));

            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_DISC_FC", sumDisFc.toFixed(2));
            motorRisks_grid.jqGrid("setCell", riskRowId, "VEH_DISC_BC", sumDisBc.toFixed(2));


            // Policy Level SI and premium Calculations 
            $scope.SumPolhAmounts();



        };

        // calculate sum of Risk level amounts
        $scope.SumPolhAmounts = function () {

            //Declare variables
            var polGrossPremFc = 0;
            var polGrossPremBc = 0;

            var polNetPremFc = 0;
            var polNetPremBc = 0;

            var polLoadFc = 0;
            var polLoadBc = 0;

            var polDisFc = 0;
            var polDisBc = 0;

            var polSifc = 0;
            var polSibc = 0;

            var polSifc = 0;
            var polSibc = 0;

            var polSifc = 0;
            var polSibc = 0;
            //
            var polgrid = $scope.motor_grid;

            var polrowIds = polgrid.jqGrid("getDataIDs");



            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = polrowIds.length; i < len; i++) {

                var currRow = polrowIds[i];

                // Sum risk level Amounts for Policy Level Amounts

                polSifc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_SI_FC"));
                polSibc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_SI_BC"));

                polGrossPremFc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_TOT_PREM_FC"));
                polGrossPremBc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_TOT_PREM_BC"));

                polLoadFc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_LOAD_FC"));
                polLoadBc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_LOAD_BC"));

                polDisFc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_DISC_FC"));
                polDisBc += parseFloat(polgrid.jqGrid("getCell", currRow, "VEH_DISC_BC"));

            }

            $("#POLH_POL_SI_FC").val(polSifc);
            $("#POLH_POL_SI_BC").val(polSibc);

            $("#POLH_POL_PREM_FC").val(polGrossPremFc);
            $("#POLH_POL_PREM_BC").val(polGrossPremBc);
            //
            $("#POLH_POL_LOAD_FC").val(polLoadFc);
            $("#POLH_POL_LOAD_BC").val(polLoadBc);

            $("#POLH_POL_DISC_FC").val(polDisFc);
            $("#POLH_POL_DISC_BC").val(polDisBc);



        };

        //Commission Calculations
        function calculateIntermediaryComm() {
            //grdIntermediaryComm $scope.intermCom_grid
            var commgrid = $scope.intermCom_grid;

            var commrowIds = commgrid.jqGrid("getDataIDs");

            var polPremFc = parseFloat($("#POLH_POL_PREM_FC").val() | 0);
            var polPremBc = parseFloat($("#POLH_POL_PREM_BC").val() | 0);
            // iterate through the rows 

            if (polPremFc == 0) {

            }
            else if (u.grid_empty($scope.intermCom_grid)) {

            }
            else {


                for (var i = 0, len = commrowIds.length; i < len; i++) {

                    var currRow = commrowIds[i];

                    // Sum risk level Amounts for Policy Level Amounts

                    commgrid.jqGrid("setCell", currRow, "CMM_PREM_AMT_FC", polPremFc.toFixed(2));
                    commgrid.jqGrid("setCell", currRow, "CMM_PREM_AMT_BC", polPremBc.toFixed(2));

                    //
                    comPerc = parseFloat(commgrid.jqGrid("getCell", currRow, "CMM_COM_PERC") | 0);

                    var commAmountFc = parseFloat(polPremFc * comPerc / 100);
                    var commAmountBc = parseFloat(polPremBc * comPerc / 100);

                    //CommAmountFC CommAmountBC
                    commgrid.jqGrid("setCell", currRow, "CMM_COM_AMT_FC", commAmountFc.toFixed(2));
                    commgrid.jqGrid("setCell", currRow, "CMM_COM_AMT_BC", commAmountBc.toFixed(2));
                }

            }
        }


        ////Create new Vehicle function
        //function initializeVehDetailsForm() {
        //    //clear and reset form

        //    $("#txtLoading").val("0.00");
        //    $("#txtDiscount").val("0.00");

        //    //$('#frm-MotorRisk')[0].reset();
        //    //sete Risk state
        //    $("#txtVehRiskState").val("U");

        //    //Delete ****
        //    //$("#txtVehUsageCode").val("101");
        //    //$("#txtProductCode").val("6001");
        //    //$("#txtFxRate").val("1");
        //    //$("#txtSeatNo").val("10");

        //    //get vehicle sysID if it is not generated
        //    if ($("#txtVehSysID").val() == "") {
        //        RetnSequenceNo("SEQ_VEH", getVehSeqNo);

        //        //var VehSeqNo;
        //        function getVehSeqNo(data) {
        //            //VehSeqNo = data;
        //            $("#txtVehSysID").val(data);
        //            $("#txtVehRiskID").val(data);

        //            //generate Policy header sysID  if it is not generated
        //            if ($("#txtPolsysID").val() == "") {
        //                var polHeadSeqNo;
        //                RetnSequenceNo("SEQ_POL_HEADER", getpolHeadSeqNo);


        //                var vehSeqNo;
        //                function getpolHeadSeqNo(data) {
        //                    // VehSeqNo = data;
        //                    $("#txtPolsysID").val(data);
        //                    $("#txtPolDocNo").val(data);

        //                }
        //            }
        //            else {
        //                var poldocNo = $("#txtPolsysID").val();
        //                $("#txtPolDocNo").val(poldocNo);
        //            };

        //            //enable controls
        //            $("#txtVehUsageCode").prop("disabled", false);
        //            $("#txtVehUsageCode").css("background", "antiquewhite");

        //            $("#btnSelUsage").prop("disabled", false);
        //            $("#btnSelUsage").css("background", "white");
        //        }
        //    }
        //    else {

        //    }
        //};




        //Policy Douments Modal
        $("#btnViewDocuments").on("click", function () {

            $("#PolicyDocsModal").modal();

        });


        //View Schedule

        $("#btnRunReports").on("click", function () {

            var e = document.getElementById("Viewpolicyreports");
            var polreports = e.options[e.selectedIndex].value;

            if (polreports === "") {
                u.growl_warning("Nothing selected, Please select to view report");
            }

            else if (polreports === "Debit") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    $("#policyscheduleModal").modal();

                    $("#PolicyDocsModal").modal("hide");

                    $("#POLH_ID").val($("#POLH_SYS_ID").val());

                    $("#btnQuerypolicyschedule").click(function (e) {

                        if (u.field_empty("#POLH_ID")) {
                            u.modal_warning("Policy No is not correct");
                        }
                        else {
                            console.log(policyData);
                            var policyData = u.parse_form("#policyscheduleForm");
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
                    $("#PolicyDocsModal").modal("hide");

                    $("#POLH_ID").val($("#POLH_SYS_ID").val());

                    $("#btnQuerypolicyschedule").click(function (e) {

                        if (u.field_empty("#POLH_ID")) {
                            u.modal_warning("Policy No is not correct");
                        }
                        else {
                            console.log(policyData);
                            var policyData = u.parse_form("#policyscheduleForm");
                            window.open("/PolicySchedules/PolicyMotorSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                        }
                    });
                }
                else {
                    u.modal_warning("There is no Policy to view");
                }

            }

        });


        /*-----------------------------------
        * Fac Buttons Enable/Disable
        *----------------------------------*/
        document.getElementById("POLH_INS_SOURCE").addEventListener("focusout", FacbuttonsDis);
        function FacbuttonsDis() {
            var Polins = $("#POLH_INS_SOURCE").val();

            if (Polins === "") {
                u.growl_warning("Please select the Policy Insurance Source");
            }
            else if (Polins === "Fac-In") {
                document.getElementById("btnFACInward").disabled = false;
                document.getElementById("btnCoInsMember").disabled = true
                document.getElementById("btnCoInsLeader").disabled = true;
            }
            else if (Polins === "Co-M") {
                document.getElementById("btnFACInward").disabled = true;
                document.getElementById("btnCoInsMember").disabled = false;
                document.getElementById("btnCoInsLeader").disabled = true;
            }
            else if (Polins === "Co-L") {
                document.getElementById("btnFACInward").disabled = true;
                document.getElementById("btnCoInsMember").disabled = true;
                document.getElementById("btnCoInsLeader").disabled = false;
            }
        }


        /*-----------------------------------
         * Fac Inward Calculations
         *----------------------------------*/
        document.getElementById("FINW_SHARE_PERC").addEventListener("focusout", FacInwardCal);
        document.getElementById("FINW_COMM_PERC").addEventListener("focusout", FacInwardCal);

        function FacInwardCal() {
            var SharePremFC = "";
            var SharePremBC = "";
            var ShareSIFC = "";
            var ShareSIBC = "";
            var CommPercFC = "";
            var CommPercBC = "";

            if ($('#FINW_SHARE_PERC').val == "" || $('#FINW_COMM_PERC').val == "") {
                u.growl_warning("FAC Share % and Commission % is null! ");
            }
            else {
                ShareSIFC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_SI_FC').val());
                ShareSIBC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_SI_BC').val());

                SharePremFC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_PREM_FC').val());
                SharePremBC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_PREM_BC').val());
                CommPercFC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_FC').val() / 100);
                CommPercBC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_BC').val() / 100);

                $('#FINW_SI_FC').val(ShareSIFC);
                $('#FINW_SI_BC').val(ShareSIBC);
                $('#FINW_PREM_FC').val(SharePremFC);
                $('#FINW_PREM_BC').val(SharePremBC);
                $('#FINW_COMM_FC').val(CommPercFC);
                $('#FINW_COMM_BC').val(CommPercBC);
            }
        };


        /*-----------------------------------
        * Fac Outward Calculations
        *----------------------------------*/
        document.getElementById("FOTW_SHARE_PERC").addEventListener("focusout", FacOutwardCal);
        document.getElementById("FOTW_RI_COMM").addEventListener("focusout", FacOutwardCal);

        function FacOutwardCal() {
            var SharePremFC = "";
            var SharePremBC = "";
            var ShareSIFC = "";
            var ShareSIBC = "";
            var MemberSI = "";
            var MemberPrem = "";
            //var CommPercFC = "";
            //var CommPercBC = "";           

            if ($('#FOTW_SHARE_PERC').val == "" || $('#FOTW_MEM_SHARE_PERC').val == "") {
                u.growl_warning("FAC Share % and Commission % is null! ");
            }
            else {
                $('#FOTW_MEM_SHARE_PERC').val(100 - $('#FOTW_SHARE_PERC').val());

                ShareSIFC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_SI_FC').val());
                ShareSIBC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_SI_BC').val());

                SharePremFC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_PREM_FC').val());
                SharePremBC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_PREM_BC').val());

                MemberSI = ($('#FOTW_RI_PERC').val() / 100 * $('#FOTW_MEM_SI_FC').val());
                MemberPrem = ($('#FOTW_RI_PERC').val() / 100 * $('#FOTW_MEM_PREM_FC').val());

                //CommPercFC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_FC').val() / 100);
                //CommPercBC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_BC').val() / 100);

                $('#FOTW_MEM_SI_FC').val(ShareSIFC);
                $('#FOTW_MEM_SI_BC').val(ShareSIBC);
                $('#FOTW_MEM_PREM_FC').val(SharePremFC);
                $('#FOTW_MEM_PREM_BC').val(SharePremBC);
                $('#FOTW_RI_SHARE_SI').val(MemberSI);
                $('#FOTW_RI_SHARE_PREM').val(MemberPrem);
                //$('#FINW_COMM_FC').val(CommPercFC);
                //$('#FINW_COMM_BC').val(CommPercBC);

                $('#FOTW_RI_SHARE_COMM').val($('#FOTW_RI_COMM').val());
            }
        };


        /*--------------------------------------------------
       * Add function to add records to  FAC Inward
       *------------------------------------------------*/
        //
        $("#btn_add_MemberInward").on("click", function () {

            if (u.form_validation("#facInwardForm")) {

                $("#FINW_SYS_ID").val("");

                if ($("#FINW_SYS_ID").val() == "") {
                    RetnSequenceNo("INS_RI_FAC_INWARD_SEQ", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#FINW_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add RI FAC Inward Details to the grid?", function () {

                    var rowIds = $scope.grdfacInward_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.grdfacInward_grid.jqGrid("getCell", currRow, "FINW_CEDANT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FINW_CEDANT_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#facInwardForm");
                        formData.FINW_STATUS = "U";
                        formData.FINW_CRTE_BY = "Admin";
                        formData.FINW_CRTE_DATE = u.get_date();
                        $scope.grdfacInward_grid.addRowData(formData.FINW_CEDANT_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI FAC Inward Details successfully added to grid");
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
       * FAC Inward Edit/Update Function
       *------------------------------*/
        //
        $("#btn_update_MemberInward").on("click", function () {

            if (u.grid_empty($scope.grdfacInward_grid)) return u.growl_info("FAC Inward grid is empty");

            if (u.form_validation("#facInwardForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Inward?", function () {

                    var grid = $scope.grdfacInward_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FINW_CEDANT_CODE");

                    if (code === $("#FINW_CEDANT_CODE").val()) {
                        var data = u.parse_form("#facInwardForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from FAC Inward Grid
        *---------------------------------------------------*/

        $("#btn_remove_MemberInward").on("click", function () {

            if (u.grid_empty($scope.grdfacInward_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdfacInward_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FINW_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FINW_CEDANT_CODE");

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

                    grid.jqGrid("setCell", rowId, "FINW_STATUS", "D");
                    $("#" + rowId, "#grdfacInward").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdfacInward").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FINW_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
         * Add function to add records to  FAC Inward Companies
         *------------------------------------------------*/
        //
        $("#btn_add_facInwardComp").on("click", function () {

            if (u.form_validation("#InwardParticipantsForm")) {

                u.modal_confirmation("Are you sure you want to add RI FAC Inward Company Details to the grid?", function () {

                    var rowIds = $scope.grdInwdParticipant_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.grdInwdParticipant_grid.jqGrid("getCell", currRow, "FINW_PAP_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FINW_PAP_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#InwardParticipantsForm");
                        formData.FINW_PAP_STATUS = "U";
                        formData.FINW_PAP_CRTE_BY = "Admin";
                        formData.FINW_PAP_CRTE_DATE = u.get_date();
                        $scope.grdInwdParticipant_grid.addRowData(formData.FINW_PAP_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI FAC Inward Company Details successfully added to grid");
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
        * FAC Inward Companies Edit/Update Function
        *------------------------------*/
        //
        $("#btn_update_facInwardComp").on("click", function () {

            if (u.grid_empty($scope.grdInwdParticipant_grid)) return u.growl_info("FAC Inward Company grid is empty");

            if (u.form_validation("#facInwardForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Inward Company?", function () {

                    var grid = $scope.grdInwdParticipant_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FINW_PAP_CODE");

                    if (code === $("#FINW_PAP_CODE").val()) {
                        var data = u.parse_form("#InwardParticipantsForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward Company updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
      * Remove record or Mark for deletion from FAC Inward Company Grid
      *---------------------------------------------------*/

        $("#btn_remove_facInwardComp").on("click", function () {

            if (u.grid_empty($scope.grdInwdParticipant_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdInwdParticipant_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FINW_PAP_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FINW_PAP_CODE");

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

                    grid.jqGrid("setCell", rowId, "FINW_PAP_STATUS", "D");
                    $("#" + rowId, "#grdInwdParticipants").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdInwdParticipants").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FINW_PAP_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
      * Add function to add records to  Co-Insurance Leader
      *------------------------------------------------*/
        //
        $("#btn_add_CoinsLeader").on("click", function () {

            if (u.form_validation("#CoinsLeaderForm")) {

                u.modal_confirmation("Are you sure you want to add RI Co-Insurance Leader to the grid?", function () {

                    var rowIds = $scope.grdCoinsLeader_grid.jqGrid("getDataIDs");

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
                        var cellValue = $scope.grdCoinsLeader_grid.jqGrid("getCell", currRow, "FOTW_RI_MEM_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FOTW_RI_MEM_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#CoinsLeaderForm");
                        formData.FOTW_STATUS = "U";
                        formData.FOTW_CRTE_BY = "Admin";
                        formData.FOTW_CRTE_DATE = u.get_date();
                        $scope.grdCoinsLeader_grid.addRowData(formData.FOTW_RI_MEM_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Co-Insurance Leader Details successfully added to grid");
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
        * Co-Insurance Leader Edit/Update Function
        *------------------------------*/
        //
        $("#btn_update_CoinsLeader").on("click", function () {

            if (u.grid_empty($scope.grdCoinsLeader_grid)) return u.growl_info("Co-Insurance Leader grid is empty");

            if (u.form_validation("#CoinsLeaderForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Co-Insurance Leader?", function () {

                    var grid = $scope.grdCoinsLeader_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FOTW_RI_MEM_CODE");

                    if (code === $("#FOTW_RI_MEM_CODE").val()) {
                        var data = u.parse_form("#CoinsLeaderForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
       * Remove record or Mark for deletion from Co-Insurance Leader Grid
       *---------------------------------------------------*/

        $("#btn_remove_CoinsLeader").on("click", function () {

            if (u.grid_empty($scope.grdCoinsLeader_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdCoinsLeader_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FOTW_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FOTW_RI_MEM_CODE");

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

                    grid.jqGrid("setCell", rowId, "FOTW_STATUS", "D");
                    $("#" + rowId, "#grdCoinsLeader").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdCoinsLeader").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FOTW_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


    });//on document ready

})(window.$, window.service, window.utility, {})