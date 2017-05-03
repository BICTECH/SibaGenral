(function ($, s, u, $scope) {
    $(function () {


                // PA Grouped Named Risk Header
        $scope.pa_group_grid = u.default_grid("#gridPaGroup", "#gridPaGroupPager", " PA Group Named Risk Header",
            [
            'Risk Code', 'Risk Name', 'Group ID', 'Group Name', 'Insured Name', ' Date of Birth', 'Age', 'Gender',
            'Nominee', 'Relation', 'Earning', 'Monthly Income', 'Job Type', 'Rate', 'Weeks', 'Weekly Benefit', 'Description',
            'Exclusions.', 'Created By', 'Created Date', 'Status', ' Sys ID', 'Risk No', 'PA Sys ID', 'Policy ID', 'Policy Doc NO', 'Policy End No'
            ],
            [
                { name: 'PA_GRP_RISK_CLASSCODE', index: 'PA_GRP_RISK_CLASSCODE', width: 200 },
                { name: 'PA_GRP_RISK_CLASSNAME', index: 'PA_GRP_RISK_CLASSNAME', width: 200 },
                { name: 'PA_GRP_ID', index: 'PA_GRP_ID', width: 200 },
                { name: 'PA_GRP_NAME', index: 'PA_GRP_NAME', width: 200 },
                { name: 'PA_GRP_NAME_INSURED', index: 'PA_GRP_NAME_INSURED', width: 200 },
                { name: 'PA_GRP_DOB', index: 'PA_GRP_DOB', width: 200 },
                { name: 'PA_GRP_AGE', index: 'PA_GRP_AGE', width: 200 },
                { name: 'PA_GRP_GENDER', index: 'PA_GRP_GENDER', width: 200 },
                { name: 'PA_GRP_NAME_NOMINEE', index: 'PA_GRP_NAME_NOMINEE', width: 200 },
                { name: 'PA_GRP_RELATION', index: 'PA_GRP_RELATION', width: 200 },
                { name: 'PA_GRP_EARNING', index: 'PA_GRP_EARNING', width: 200 },
                { name: 'PA_GRP_MONTHLY_INCOME', index: 'PA_GRP_MONTHLY_INCOME', width: 200 },
                { name: 'PA_GRP_JOB_TYPE', index: 'PA_IND_JOB_TYPE', width: 200 },
                { name: 'PA_GRP_RATE', index: 'PA_GRP_RATE', width: 200 },
                { name: 'PA_GRP_WEEKS', index: 'PA_GRP_WEEKS', width: 200 },
                { name: 'PA_GRP_WEEKLY_BENEFIT', index: 'PA_GRP_WEEKLY_BENEFIT', width: 200 },
                { name: 'PA_GRP_DESCRIPTION', index: 'PA_GRP_DESCRIPTION', width: 200 },
                { name: 'PA_GRP_EXCLUSIONS', index: 'PA_GRP_EXCLUSIONS', width: 200 },
                { name: 'PA_GRP_CRTE_BY', index: 'PA_GRP_CRTE_BY', width: 200 },
                { name: 'PA_GRP_CRTE_DATE', index: 'PA_GRP_CRTE_DATE', width: 200 },
                { name: 'PA_GRP_STATUS', index: 'PA_GRP_STATUS', width: 200 },
                { name: 'PA_GRP_SYS_ID', index: 'PA_GRP_SYS_ID', width: 200 },
                { name: 'PA_GRP_RISK_NO', index: 'PA_GRP_RISK_NO', width: 200 },
                { name: 'PA_GRP_PA_SYS_ID', index: 'PA_GRP_PA_SYS_ID', width: 200 },
                { name: 'PA_GRP_POLH_SYS_ID', index: 'PA_GRP_POLH_SYS_ID', width: 200 },
                { name: 'PA_GRP_POLH_DOC_NO', index: 'PA_GRP_POLH_DOC_NO', width: 200 },
                { name: 'PA_GRP_POLH_END_NO', index: 'PA_GRP_POLH_END_NO', width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
                   function (sel_id) {
                       var grid = $scope.pa_grouped_grid;
                       var sel_id = grid.jqGrid('getGridParam', 'selrow');
                       $("form input[name='PA_GRP_RISK_NO']").data("update", true);
                       u.fill_form({
                           PA_GRP_RISK_CLASSCODE: grid.jqGrid('getCell', sel_id, 'PA_GRP_RISK_CLASSCODE'),
                           PA_GRP_RISK_CLASSNAME: grid.jqGrid('getCell', sel_id, 'PA_GRP_RISK_CLASSNAME'),
                           PA_GRP_RISK_NO: grid.jqGrid('getCell', sel_id, 'PA_GRP_RISK_NO'),
                           PA_GRP_ID: grid.jqGrid('getCell', sel_id, 'PA_GRP_ID'),
                           PA_GRP_NAME: grid.jqGrid('getCell', sel_id, 'PA_GRP_NAME'),
                           PA_GRP_NAME_INSURED: grid.jqGrid('getCell', sel_id, 'PA_GRP_NAME_INSURED'),
                           PA_GRP_DOB: grid.jqGrid('getCell', sel_id, 'PA_GRP_DOB'),
                           PA_GRP_AGE: grid.jqGrid('getCell', sel_id, 'PA_GRP_AGE'),
                           PA_GRP_GENDER: grid.jqGrid('getCell', sel_id, 'PA_GRP_GENDER'),
                           PA_GRP_NAME_NOMINEE: grid.jqGrid('getCell', sel_id, 'PA_GRP_NAME_NOMINEE'),
                           PA_GRP_RELATION: grid.jqGrid('getCell', sel_id, 'PA_GRP_RELATION'),
                           PA_GRP_EARNING: grid.jqGrid('getCell', sel_id, 'PA_GRP_EARNING'),
                           PA_GRP_MONTHLY_INCOME: grid.jqGrid('getCell', sel_id, 'PA_GRP_MONTHLY_INCOME'),
                           PA_GRP_JOB_TYPE: grid.jqGrid('getCell', sel_id, 'PA_GRP_JOB_TYPE'),
                           PA_GRP_RATE: grid.jqGrid('getCell', sel_id, 'PA_GRP_RATE'),
                           PA_GRP_EXCLUSIONS: grid.jqGrid('getCell', sel_id, 'PA_GRP_EXCLUSIONS'),
                           PA_GRP_WEEKS: grid.jqGrid('getCell', sel_id, 'PA_GRP_WEEKS'),
                           PA_GRP_WEEKLY_BENEFIT: grid.jqGrid('getCell', sel_id, 'PA_GRP_WEEKLY_BENEFIT'),
                           PA_GRP_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'PA_GRP_DESCRIPTION'),
                       }, "#PAgroupForm");
                   }),



        // Cover Grid
        $scope.cover_grid = u.default_grid("#gridAppCovers", "#gridAppCoversPager", "Cover",
            ['Cover Code', 'Cover Name',
                'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable', 'Discount FC', 'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC',
                    'Cover id', 'Risk id', 'Cover No.',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'User Premium',
                    'RI App',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status'],
            [
                { name: 'RCOV_CODE', index: 'RCOV_CODE', width: 150 },
                { name: 'RCOV_NAME', index: 'RCOV_NAME', width: 150 },
                { name: 'COVER_TYPE', index: 'COVER_TYPE', width: 150 },
                { name: 'RCOV_SI_FC', index: 'RCOV_SI_FC', width: 150 },
                { name: 'RCOV_SI_BC', index: 'RCOV_SI_BC', width: 150 },
                { name: 'RCOV_RATE', index: 'RCOV_RATE', width: 150 },
                { name: 'RCOV_GROSS_PREM_FC', index: 'RCOV_GROSS_PREM_FC', width: 150 },
                { name: 'RCOV_GROSS_PREM_BC', index: 'RCOV_GROSS_PREM_BC', width: 150 },
                { name: 'RCOV_NET_PREM_FC', index: 'RCOV_NET_PREM_FC', width: 150 },
                { name: 'RCOV_NET_PREM_BC', index: 'RCOV_NET_PREM_BC', width: 150 },

                { name: 'RCOV_DISC_YN', index: 'RCOV_DISC_YN', width: 150 },

                { name: 'RCOV_DISC_FC', index: 'RCOV_DISC_FC', width: 150 },
                { name: 'RCOV_DISC_BC', index: 'RCOV_DISC_BC', width: 150 },

                { name: 'RCOV_LOAD_YN', index: 'RCOV_LOAD_YN', width: 150 },

                { name: 'RCOV_LOAD_FC', index: 'RCOV_LOAD_FC', width: 150 },
                { name: 'RCOV_LOAD_BC', index: 'RCOV_LOAD_BC', width: 150 },

                { name: 'RCOV_SYS_ID', index: 'RCOV_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                { name: 'RCOV_RISK_SYS_ID', index: 'RCOV_RISK_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                { name: 'RCOV_NO', index: 'RCOV_NO', hidden: false, width: 150 },
                { name: 'RCOV_RISK_NO', index: 'RCOV_RISK_NO', hidden: false, width: 150 },
                { name: 'RCOV_POLH_DOC_NO', index: 'RCOV_POLH_DOC_NO', width: 150 },
                { name: 'RPCOV_END_NO', index: 'RPCOV_END_NO', width: 150 },
                { name: 'RCOV_RI_SI_YN', index: 'RCOV_RI_SI_YN', hidden: false, width: 150 },
                { name: 'RCOV_RI_PREM_YN', index: 'RCOV_RI_PREM_YN', hidden: false, width: 150 },

                { name: 'COVER_RATE_CHANGE', index: 'COVER_RATE_CHANGE', width: 150 },
                { name: 'COVER_SI_CHANGE', index: 'COVER_SI_CHANGE', width: 150 },
                { name: 'COVER_LEVEL', index: 'COVER_LEVEL', width: 150 },
                { name: 'COVER_PREM_REFUND', index: 'COVER_PREM_REFUND', width: 150 },
                { name: 'COVER_USER_PREM', index: 'COVER_USER_PREM', width: 150 },
                { name: 'RCOV_RI_YN', index: 'RCOV_RI_YN', width: 150 },
                //
                { name: 'RCOV_TXN_STATE', index: 'RCOV_TXN_STATE', width: 150 },
                { name: 'RCOV_CRTE_BY', index: 'RCOV_CRTE_BY', width: 150 },
                { name: 'RCOV_CRTE_DATE', index: 'RCOV_CRTE_DATE', width: 150 },
                { name: 'RCOV_MOD_BY', index: 'RCOV_MOD_BY', width: 150 },
                { name: 'RCOV_MOD_DATE', index: 'RCOV_MOD_DATE', width: 150 },
                { name: 'RCOV_STATUS', index: 'RCOV_STATUS', width: 100 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.cover_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='RCOV_SYS_ID']").data("update", true);
                u.fill_form({
                    RCOV_SYS_ID: grid.jqGrid('getCell', sel_id, 'RCOV_SYS_ID'),
                    RCOV_RISK_SYS_ID: grid.jqGrid('getCell', sel_id, 'RCOV_RISK_SYS_ID'),
                    RCOV_RISK_NO: grid.jqGrid('getCell', sel_id, 'RCOV_RISK_NO'),
                    RCOV_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'RCOV_POLH_DOC_NO'),
                    RPCOV_END_NO: grid.jqGrid('getCell', sel_id, 'RPCOV_END_NO'),
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'RCOV_CODE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'RCOV_SI_FC'),

                    RCOV_SI_BC: grid.jqGrid('getCell', sel_id, 'RCOV_SI_BC'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'RCOV_RATE'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'RCOV_GROSS_PREM_FC'),
                    RCOV_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'RCOV_GROSS_PREM_BC'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'RCOV_NET_PREM_FC'),
                    RCOV_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'RCOV_NET_PREM_BC'),
                    RCOV_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'RCOV_RI_SI_YN'),

                    RCOV_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'RCOV_RI_PREM_YN'),
                    RCOV_TYPE: grid.jqGrid('getCell', sel_id, 'RCOV_TYPE'),
                    RCOV_DISC_YN: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_YN'),
                    RCOV_DISC_FC: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_FC'),
                    RCOV_DISC_BC: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_BC'),
                    RCOV_LOAD_YN: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_YN'),
                    RCOV_LOAD_FC: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_FC'),

                    RCOV_LOAD_BC: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_BC'),
                    RCOV_TXN_STATE: grid.jqGrid('getCell', sel_id, 'RCOV_TXN_STATE'),
                    RCOV_CRTE_BY: grid.jqGrid('getCell', sel_id, 'RCOV_CRTE_BY'),
                    RCOV_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'RCOV_CRTE_DATE'),
                    RCOV_MOD_BY: grid.jqGrid('getCell', sel_id, 'RCOV_MOD_BY'),
                    RCOV_MOD_DATE: grid.jqGrid('getCell', sel_id, 'RCOV_MOD_DATE'),
                    RCOV_STATUS: grid.jqGrid('getCell', sel_id, 'RCOV_STATUS'),

                }, "#coverForm");
            }),



        // Risk Covers ****
        $scope.riskCovers_grid = u.default_grid("#gridAddNewCover", "#gridAddNewCoverPager", "Risk Covers",
            ['Code', 'Name', 'Sum Insured', 'Deft Rate', 'Deft Premium'],
            [
                { name: 'PCV_COV_CODE', index: 'PCV_COV_CODE', width: 150 },
                { name: 'COVER_NAME', index: 'COVER_NAME', width: 150 },
                { name: 'PCV_SI', index: 'PCV_SI', width: 150 },
                { name: 'PCV_DEF_RATE', index: 'PCV_DEF_RATE', width: 150 },
                { name: 'PCV_DEF_PREM', index: 'PCV_DEF_PREM', width: 150 },
            ],


             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'PCV_COV_CODE'),
                    RCOV_NAME: grid.jqGrid('getCell', sel_id, 'COVER_NAME'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'PCV_DEF_RATE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'PCV_SI'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),

                }, "#coverForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'PCV_COV_CODE'),
                    RCOV_NAME: grid.jqGrid('getCell', sel_id, 'COVER_NAME'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'PCV_DEF_RATE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'PCV_SI'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),

                }, "#coverForm");

                // hide modal on double click
                $("#AddNewCoverModal").modal('hide');

            }),



        // Premium Summary
        $scope.premium_grid = u.default_grid("#gridPremSum", "#gridPremSumPager", "Policy Premium Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Register Summary
        $scope.premiumreg_grid = u.default_grid("#gridPremReg", "#gridPremRegPager", "Policy Premium Register Summary",
            [
            'Pol sys ID', 'Pol Doc. No.', 'END No.', ' COB', 'Customer ID', 'Office',
            'Insurane Source', 'Business Source', 'Treatty source', 'UW Accounts Type', 'Currency', 'Rate', 'FC Amount', 'BC Amount',
            'Reference No.', 'Acct Posting',
            'Post Date', 'Created by', 'Post Date', 'Modified by', 'Modified Date', 'Status', 'Customer Acct'
            ],
            [
                { name: 'PR_POL_SYS_ID', index: 'PR_POL_SYS_ID', width: 200 },
                { name: 'PR_POL_DOC_NO', index: 'PR_POL_DOC_NO', width: 200 },
                { name: 'PR_END_NO', index: 'PR_END_NO', width: 200 },
                { name: 'PR_COB', index: 'PR_COB', width: 200 },
                { name: 'PR_CUST_CODE', index: 'PR_CUST_CODE', width: 200 },
                { name: 'PR_OFFICE', index: 'PR_OFFICE', width: 200 },
                { name: 'PR_INS_SOURCE', index: 'PR_INS_SOURCE', width: 200 },
                { name: 'PR_BUS_SOURCE', index: 'PR_BUS_SOURCE', width: 200 },
                { name: 'PR_TTY_SOURCE', index: 'PR_TTY_SOURCE', width: 200 },
                { name: 'PR_UWD_ACCT_TYPE', index: 'PR_UWD_ACCT_TYPE', width: 200 },
                { name: 'PR_CURRENCY', index: 'PR_CURRENCY', width: 200 },
                { name: 'PR_FX_RATE', index: 'PR_FX_RATE', width: 200 },
                { name: 'PR_FC_AMOUNT', index: 'PR_FC_AMOUNT', width: 200 },
                { name: 'PR_BC_AMOUNT', index: 'PR_BC_AMOUNT', width: 200 },
                { name: 'PR_TXN_REF', index: 'PR_TXN_REF', width: 200 },
                { name: 'PR_ACCT_YN', index: 'PR_ACCT_YN', width: 200 },
                { name: 'PR_POST_DATE', index: 'PR_POST_DATE', width: 200 },
                { name: 'PR_CRTE_BY', index: 'PR_CRTE_BY', width: 200 },
                { name: 'PR_CRTE_DATE', index: 'PR_CRTE_DATE', width: 200 },
                { name: 'PR_MOD_BY', index: 'PR_MOD_BY', width: 200 },
                { name: 'PR_MOD_DATE', index: 'PR_MOD_DATE', width: 200 },
                { name: 'PR_STATUS', index: 'PR_STATUS', width: 200 },
                { name: 'PR_CUST_ACCT', index: 'PR_CUST_ACCT', width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Fees Summary
        $scope.fees_grid = u.default_grid("#gridPremRegFees", "#gridPremRegFeesPager", "Policy Premium Fees Summary",
            [
            'Pol sys ID', 'Pol Doc. No.', 'END No.', ' COB', 'Customer ID', 'Office',
            'Insurane Source', 'Business Source', 'Treatty source', 'UW Accounts Type', 'Currency', 'Rate', 'FC Amount', 'BC Amount',
            'Reference No.', 'Acct Posting',
            'Post Date', 'Created by', 'Post Date', 'Modified by', 'Modified Date', 'Status', 'Customer Acct'
            ],
            [
                { name: 'PR_POL_SYS_ID', index: 'PR_POL_SYS_ID', width: 200 },
                { name: 'PR_POL_DOC_NO', index: 'PR_POL_DOC_NO', width: 200 },
                { name: 'PR_END_NO', index: 'PR_END_NO', width: 200 },
                { name: 'PR_COB', index: 'PR_COB', width: 200 },
                { name: 'PR_CUST_CODE', index: 'PR_CUST_CODE', width: 200 },
                { name: 'PR_OFFICE', index: 'PR_OFFICE', width: 200 },
                { name: 'PR_INS_SOURCE', index: 'PR_INS_SOURCE', width: 200 },
                { name: 'PR_BUS_SOURCE', index: 'PR_BUS_SOURCE', width: 200 },
                { name: 'PR_TTY_SOURCE', index: 'PR_TTY_SOURCE', width: 200 },
                { name: 'PR_UWD_ACCT_TYPE', index: 'PR_UWD_ACCT_TYPE', width: 200 },
                { name: 'PR_CURRENCY', index: 'PR_CURRENCY', width: 200 },
                { name: 'PR_FX_RATE', index: 'PR_FX_RATE', width: 200 },
                { name: 'PR_FC_AMOUNT', index: 'PR_FC_AMOUNT', width: 200 },
                { name: 'PR_BC_AMOUNT', index: 'PR_BC_AMOUNT', width: 200 },
                { name: 'PR_TXN_REF', index: 'PR_TXN_REF', width: 200 },
                { name: 'PR_ACCT_YN', index: 'PR_ACCT_YN', width: 200 },
                { name: 'PR_POST_DATE', index: 'PR_POST_DATE', width: 200 },
                { name: 'PR_CRTE_BY', index: 'PR_CRTE_BY', width: 200 },
                { name: 'PR_CRTE_DATE', index: 'PR_CRTE_DATE', width: 200 },
                { name: 'PR_MOD_BY', index: 'PR_MOD_BY', width: 200 },
                { name: 'PR_MOD_DATE', index: 'PR_MOD_DATE', width: 200 },
                { name: 'PR_STATUS', index: 'PR_STATUS', width: 200 },
                { name: 'PR_CUST_ACCT', index: 'PR_CUST_ACCT', width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Applicable Fees Summary
        $scope.appfees_grid = u.default_grid("#gridAppFees", "#gridAppFeesPager", "Applicable Fees Summary",
            ['FEE CODE', 'FEE_NAME', 'FC AMOUNT', 'BC AMOUNT',
                    'POL SYS id', 'POL DOC NO', 'RISK SYS ID', 'RISK DOC NO', 'END NO.', 'STATUS', 'FEE SYS ID'],
            [
                { name: 'APP_FEE_CODE', index: 'APP_FEE_CODE', width: 150 },
                { name: 'FEE_NAME', index: 'FEE_NAME', width: 200 },
                { name: 'APP_FEE_FC_AMOUNT', index: 'APP_FEE_FC_AMOUNT', width: 150 },
                { name: 'APP_FEE_BC_AMOUNT', index: 'APP_FEE_BC_AMOUNT', width: 150 },

                { name: 'APP_FEE_POL_SYS_ID', index: 'APP_FEE_POL_SYS_ID', width: 150 },
                { name: 'APP_FEE_POL_DOC_NO', index: 'APP_FEE_POL_DOC_NO', width: 150 },
                { name: 'APP_FEE_RK_SYS_ID', index: 'APP_FEE_RK_SYS_ID', width: 150 },
                { name: 'APP_FEE_RK_DOC_NO', index: 'APP_FEE_RK_DOC_NO', width: 150 },
                { name: 'APP_FEE_END_NO', index: 'APP_FEE_END_NO', width: 150 },
                { name: 'APP_FEE_STATUS', index: 'APP_FEE_STATUS', width: 150 },
                { name: 'APP_FEE_SYS_ID', index: 'APP_FEE_SYS_ID', width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Payment Summary
        $scope.payment_grid = u.default_grid("#gridPremPmt", "#gridPremPmtPager", "Policy Premium Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Share Summary
        $scope.coinsurance_grid = u.default_grid("#gridCoIns", "#gridCoInsPager", "Reinsurance Share Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // FAC In Premium Summary
        $scope.facinpremium_grid = u.default_grid("#gridFACINPremSum", "#gridFACINPremSumPager", "Treaty Apportionment Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),

        // Claim Summary
        $scope.cliams_grid = u.default_grid("#gridClaimsSummary", "#gridClaimsSummaryPager", "Policy Claim Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Agent/Broker Commission
        $scope.intermCom_grid = u.default_grid("#grdIntermediaryComm", "#grdIntermediaryCommPager", "Agent/Broker Commission",
            ['Agent-Broker Code', 'Premium Amt FC', 'Premium Amt BC', 'Comm Per(%)', 'Comm. Amount FC', 'Comm. Amount BC', 'Status',
             'Pols_sysID', 'Pol_Doc No', 'Pol_end_No', 'COB', 'Office', 'Comm Date',
             'Created_By', 'Created_Date', 'Cust_Type', 'Com_sys_ID'
            ],
            [
                { name: 'CMM_AGB_CODE', index: 'CMM_AGB_CODE', width: 150 },
                { name: 'CMM_PREM_AMT_FC', index: 'CMM_PREM_AMT_FC', width: 150 },
                { name: 'CMM_PREM_AMT_BC', index: 'CMM_PREM_AMT_BC', width: 150 },

                { name: 'CMM_COM_PERC', index: 'CMM_COM_PERC', width: 150 },
                { name: 'CMM_COM_AMT_FC', index: 'CMM_COM_AMT_FC', width: 150 },
                { name: 'CMM_COM_AMT_BC', index: 'CMM_COM_AMT_BC', width: 150 },

                { name: 'CMM_STATUS', index: 'CMM_STATUS', hidden: false, width: 200 },

                { name: 'CMM_POL_SYS_ID', index: 'CMM_POL_SYS_ID', hidden: false, width: 200 },
                { name: 'CMM_POL_DOC_NO', index: 'CMM_POL_DOC_NO', hidden: false, width: 200 },
                { name: 'CMM_END_NO', index: 'CMM_END_NO', hidden: false, width: 200 },
                { name: 'CMM_COB_CODE', index: 'CMM_COB_CODE', hidden: false, width: 200 },
                { name: 'CMM_OFFICE', index: 'CMM_OFFICE', hidden: false, width: 200 },
                { name: 'CMM_COM_DATE', index: 'CMM_COM_DATE', hidden: false, width: 200 },
                { name: 'CMM_CRTE_BY', index: 'CMM_CRTE_BY', hidden: false, width: 200 },
                { name: 'CMM_CRTE_DATE', index: 'CMM_CRTE_DATE', hidden: false, width: 200 },
                { name: 'CMM_CUST_TYPE', index: 'CMM_CUST_TYPE', hidden: false, width: 200 },
                { name: 'CMM_SYS_ID', index: 'CMM_SYS_ID', hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),

        // Product Risk Grid ****
        $scope.prodRisks_grid = u.default_grid("#gridProdRisk", "#gridProdRiskPager", "Motor Risk",
            ['Code', 'Name'],
            [
                { name: 'RISK_CODE', index: 'RISK_CODE', width: 150 },
                { name: 'RISK_NAME', index: 'RISK_NAME', width: 150 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid('getCell', sel_id, 'RISK_CODE'),
                    PDT_NAME: grid.jqGrid('getCell', sel_id, 'RISK_NAME'),

                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid('getCell', sel_id, 'RISK_CODE'),
                    PDT_NAME: grid.jqGrid('getCell', sel_id, 'RISK_NAME'),

                }, "#polheaderForm");

                // hide modal on double click
                $("#prodRiskLovModal").modal('hide');

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

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getProdtRisk(prodRiskData, function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.prodRisks_grid.jqGrid('clearGridData');
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

        $("#btnQueryProductRisk").on('click', function () {
            getProductRiskLov();
        });

        /*--------------------------------------------------
       * Getting product base on Class of Business
       *------------------------------------------------*/

        $("#btn_ProductRisk").on('click', function () {

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
        $("#btn_add_cover").on('click', function () {

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

                    var rowIds = grid.jqGrid('getDataIDs');

                    //declare array to contain the codes to varify
                    var CodeArray = [];

                    // iterate through the rows in the grid and add Covers to Array
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        //get value of the cell or column in an array
                        var coverCode = grid.jqGrid('getCell', currRow, 'RCOV_CODE');

                        var RiskCode = grid.jqGrid('getCell', currRow, 'RCOV_RISK_SYS_ID');

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

                                result[i]["RCOV_RISK_SYS_ID"] = $("#BOND_SYS_ID").val();
                                result[i]["RCOV_RISK_NO"] = $("#BOND_RISK_ID").val();
                                //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                                var deftCoverCode = result[i].RCOV_CODE;
                                var newRiskCode = $("#BOND_SYS_ID").val();

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

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getRiskCoversLOV(RiskCoverData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.riskCovers_grid.jqGrid('clearGridData');
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
        $("#btnQueryRiskCoverLov").on('click', function () {

            getRiskCoversLov();
        });


        /*--------------------------------
        *Open Risk Covers LOV Modal
        *------------------------------*/
        //
        $("#btnAddNewCover").on('click', function () {

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
        $("#btn_remove_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'RCOV_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'RCOV_NO');

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

                    grid.jqGrid('setCell', row_id, 'RCOV_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'RCOV_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Cover Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_cover").on('click', function () {

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


        $("#btn_risk_cover").click(function () {
            //var grid = jQuery('#gridIndiPa');
            //var sel_row = grid.jqGrid('getGridParam', 'selrow');
            //var count = sel_row.length;
            //if (count > 0) {
            //    $("#RiskCoverModal").modal();
            //}
            //else {
            //    u.growl_warning("No Row selected");
            //}
            $("#RiskCoverModal").modal();
        });

        /*--------------------------------------------------
* PA Risk modal dialog
*------------------------------------------------*/
        //
        $("#btn_open_pa_head").on('click', function () {
            var itemobj = $("#PDT_NAME").val();
            if (itemobj == "") {
                u.growl_warning("No PA Risk is not Selected");
            }
            else if (itemobj == "PA INDIVIDUAL") {
                $("#IndividualPaRiskModal").modal('show');
            }
            else if (itemobj == "PA GROUP NAMED RISK") {
                $("#PaGroupNamedRiskModal").modal('show');
            }
            else if (itemobj == "PA GROUP UN-NAMED RISK") {
                $("#PaGroupUnNamedRiskModal").modal('show');
            }

        });


        /*--------------------------------------------------
  * add PA Group
  *------------------------------------------------*/
        //
        $("#btn_add_pa_group").on('click', function () {

            if (u.form_validation("#PAgroupForm")) {

                //if ($("input[name='PA_GRP_RISK_CLASSCODE']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#PA_GRP_RISK_NO").val("");

                if ($("#PA_GRP_RISK_NO").val() == "") {
                    RetnSequenceNo("SEQ_PA_GRP_NAMED", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#PA_GRP_RISK_NO").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the PA Group Details?", function () {

                    var rowIds = $scope.pa_group_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.pa_group_grid.jqGrid('getCell', currRow, 'PA_GRP_RISK_NO');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#PA_GRP_RISK_NO').val(), Code) < 0) {
                        var FormData = u.parse_form("#PAgroupForm");
                        FormData.PA_GRP_STATUS = "U";
                        FormData.PA_GRP_CRTE_BY = "Admin";
                        FormData.PA_GRP_CRTE_DATE = u.get_date();
                        $scope.pa_group_grid.addRowData(FormData.PA_GRP_RISK_NO, FormData);
                        u.hide_confirm();
                        u.growl_success("PA group successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("PA group header with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
* Remove record or Mark for deletion from PA Group Grid
*---------------------------------------------------*/
        //
        $("#btn_remove_pa_group").on('click', function () {

            if (u.grid_empty($scope.pa_group_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.pa_group_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PA_GRP_STATUS');

            var PAGroupRiskNo = grid.jqGrid('getCell', row_id, 'PA_GRP_RISK_NO');

            var covGrid = $scope.cover_grid;

            var covRowIds = covGrid.jqGrid('getDataIDs');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_NO');

                        if (getCovRiskID == PAGroupRiskNo) {

                            covGrid.jqGrid('delRowData', covCurrRow);
                        }
                    }

                    grid.jqGrid('delRowData', row_id);
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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_NO');

                        if (getCovRiskID == PAGroupRiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');
                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }
                    covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');
                    $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                    grid.jqGrid('setCell', row_id, 'PA_GRP_STATUS', 'D');
                    $('#' + row_id, '#gridPaGroup').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#gridPaGroup').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'PA_GRP_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
* Edit/Update Function PA Group Grid
*------------------------------*/
        //
        $("#btn_update_pa_group").on('click', function () {

            if (u.grid_empty($scope.pa_group_grid)) return u.growl_info("PA Group grid is empty");

            if (u.form_validation("#PAgroupForm")) {

                u.modal_confirmation("Are you sure you want to update the selected PA Group?", function () {

                    var grid = $scope.pa_group_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "PA_GRP_RISK_NO");

                    if (code === $("#PA_GRP_RISK_NO").val()) {
                        var data = u.parse_form("#PAgroupForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("PA Group Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        $("#export-PA-Group-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.pa_group_grid, ["ID"], "PA_Group_List_Excel");
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



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#polheaderForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            $("#POLH_SYS_ID").val("");

            if ($("#POLH_SYS_ID").val() == "") {
                RetnSequenceNo("HEAD_SEQ", getVehSeqNo);

                function getVehSeqNo(data) {
                    $("#POLH_SYS_ID").val(data);
                }
            }

            //if (!u.form_validation("#individualPAForm")) {
            //    return u.growl_warning("Please fill the fields that are marked red")
            //}

            //if (!u.form_validation("#PAgroupUnNamedForm")) {
            //    return u.growl_warning("Please fill the fields that are marked red")
            //}

            //if (u.grid_empty($scope.pa_group_grid)) {
            //    return u.growl_warning("Please add PA Group Details")
            //}

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var polhData = u.parse_form("#polheaderForm");
                if (!$scope.searched) {
                    polhData.POLH_STATUS = polhData.POLH_STATUS !== null ? polhData.POLH_STATUS : "U";
                    polhData.POLH_CRTE_BY = polhData.POLH_CRTE_BY !== null ? polhData.POLH_CRTE_BY : "Admin";
                    polhData.POLH_CRTE_DATE = polhData.POLH_CRTE_DATE !== null ? polhData.POLH_CRTE_DATE : u.get_date();
                }

                var pa_ind_data = u.parse_form("#individualPAForm");
                pa_ind_data.PA_IND_POLH_END_NO = 0;
                polhData.INS_UDW_PA_INDIVIDUAL = [pa_ind_data];

                var pa_grpun_data = u.parse_form("#PAgroupUnNamedForm");
                pa_grpun_data.PA_GRP_UN_POLH_END_NO = 0;
                polhData.INS_UDW_PA_GROUP_UNAMED = [pa_grpun_data];

                polhData.INS_UDW_PA_GROUP_NAMED = u.get_grid_data($scope.pa_group_grid);

                polhData.INS_UWD_RISK_COVERS = u.get_grid_data($scope.cover_grid);

                console.log(polhData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_policy(polhData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {
                            
                            /*--------------------------------
                             * update form status
                             *-------------------------------*/

                            var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                            var pagrpRowIds = $scope.pa_group_grid.jqGrid("getDataIDs");

                            var covRecStatus;

                            /*---------------------------------
                             * update PA group row status
                             *-------------------------------*/
                            for (var i = 0; i < pagrpRowIds.length; i++) {
                                covRecStatus = $scope.pa_group_grid.jqGrid("getCell", pagrpRowIds[i], "PA_GRP_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.pa_group_grid.jqGrid("delRowData", pagrpRowIds[i]);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.pa_group_grid.jqGrid("setCell", pagrpRowIds[i], "PA_GRP_STATUS", "A");
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
        });


        $("#btnConfirm").click(function () {
            s.confirmPolicy($("#POLH_SYS_ID").val(), function (response) {
                if (response.state) {
                    u.growl_success("Policy successfully confirmed");
                } else {
                    u.growl_error(response.message);
                }
            }, function () {
                u.growl_error("Server Error Confirming Policy");
            });
        });
        $("#btnApproval").click(function () {
            s.policyApproval({ POL_SYS_ID: $("#POLH_SYS_ID").val(), POL_END_NO: 0, TXN_TYPE: 1 }, function (response) {
                if (response.state) {
                    u.growl_success("Policy successfully Approved");
                } else {
                    u.growl_error(response.message);
                }
            }, function () {
                u.growl_error("Server Error Confirming Policy");
            });
        }); /*--------------------
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
                        s.save_policy(policy_data,
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
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#polheaderForm");
                u.form_reset("#coverForm");
                u.form_reset("#travelForm");
                u.form_reset("#travelheadform");
                $scope.cover_grid.jqGrid('clearGridData');
                $scope.pa_group_grid.jqGrid('clearGridData');
                $scope.pa_group_grid.jqGrid('clearGridData');
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

            $scope.pa_group_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");

            u.fill_form(policy, "#polheaderForm");

            u.fill_form(policy, "#individualPAForm");

            u.fill_form(policy, "#PAgroupUnNamedForm");

            u.clear_grid_data($scope.pa_group_grid);
            for (var i in policy.INS_UDW_PA_GROUP_NAMED) {
                $scope.pa_group_grid.addRowData(policy.INS_UDW_PA_GROUP_NAMED[i].PA_GRP_POLH_SYS_ID, policy.INS_UDW_PA_GROUP_NAMED[i]);
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
        u.set_datepicker("input[name='PA_GRP_UN_ISSUE_DATE']");
        u.set_datepicker("input[name='PA_GRP_UN_RETRO_DATE']");
        u.set_datepicker("input[name='PA_IND_ISSUE_DATE']");
        u.set_datepicker("input[name='PA_IND_RETRO_DATE']");
        u.set_datepicker("input[name='PA_IND_DOB']");
        u.set_datepicker("input[name='PA_GRP_DOB']");
        u.set_datepicker("input[name='CUS_DOB']");

        /*-----------------------------
* LOV code validation
*---------------------------*/
        u.lovCodeVal("form input[name='POLH_CMP_CODE']", "check_company_code", "form input[name='CMP_NAME']");
        u.lovCodeVal("form input[name='POLH_INTERMIDIARY']", "check_intermediary_code", "form input[name='INT_OFFICIAL_NAME']");
        u.lovCodeVal("form input[name='POLH_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");
        u.lovCodeVal("form input[name='POLH_CLASS_CODE']", "check_product_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='POLH_SUB_CLASS_CODE']", "check_subproduct_code", "form input[name='PDT_NAME']");
        u.lovCodeVal("form input[name='POLH_INS_SOURCE']", "check_insurance_source_code", "form input[name='INSUR_NAME']");
        u.lovCodeVal("form input[name='POLH_CHANNEL_CODE']", "check_channel_code", "form input[name='MSC_NAME']");
        u.lovCodeVal("form input[name='POLH_BIZ_SOURCE']", "check_business_source_code", "form input[name='SRB_NAME']");

        u.lovCodeVal("input[name='POLH_CUST_CODE']", "check_customer_code", "input[name='CUS_OFFICIAL_NAME']", function (code) {
            /*fetch customer details after successful validation*/
            s.get_customer(code, function (response) {
                u.fill_form(response, "#polheaderForm");
            });
        });
        u.lovCodeVal("form input[name='CUS_TYPE_CODE']", "check_customertype_code", "form input[name='CUS_TYPE_NAME']");


        /*-----------------------------
* //Policy period days
*---------------------------*/


        // RIsk Cover Rate Calculation

        $('#RCOV_GROSS_PREM_BC').prop('disabled', true);
        $('#RCOV_NET_PREM_BC').prop('disabled', true);

        $('#RCOV_NET_PREM_BC').css("background", "silver");

        $('#RCOV_GROSS_PREM_BC').css("background", "silver");

        document.getElementById("RCOV_RATE").addEventListener("focusout", rateFunction);
        document.getElementById("RCOV_SI_BC").addEventListener("focusout", rateFunction);


        function rateFunction() {
            //alert("Input field lost focus.");
            var grossPrem = "";
            var NetPrem = "";

            grossPrem = ($('#RCOV_SI_BC').val() * $('#RCOV_RATE').val() * 0.01).toFixed(2);
            NetPrem = ($('#RCOV_SI_BC').val() * $('#RCOV_RATE').val() * 0.01).toFixed(2);
            $('#RCOV_GROSS_PREM_BC').val(grossPrem);
            $('#RCOV_NET_PREM_BC').val(NetPrem);
        }



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
        $("#btn_Save_Customer").on('click', function () {

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


        //Policy Period days calculations/

        document.getElementById("POLH_POL_START_DATE").addEventListener("focusout", fxnPolPeriodDays);
        document.getElementById("POLH_POL_END_DATE").addEventListener("focusout", fxnPolPeriodDays);


        function fxnPolPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#POLH_POL_START_DATE").val();
            var EDate = $("#POLH_POL_END_DATE").val();

            //set the vehicle start date to same as policy start date
            $("#BOND_START_DATE").val(SDate);
            $("#BOND_END_DATE").val(EDate);

            //VEH_END_DATE
            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var polPeriodDays = u.get_dateDifference(StartDate, EndDate);

            if (polPeriodDays > 0) {
                $("#POLH_POL_DAYS").val(polPeriodDays);
                //$("#BOND_PERIOD_DAYS").val(polPeriodDays);
            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Policy End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#POLH_POL_END_DATE").val('');
                $("#POLH_POL_DAYS").val('');
                // 
                //$("#BOND_END_DATE").val('');
                //$("#BOND_PERIOD_DAYS").val('');
            }
            else {

            }
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

            var rowIds = grid.jqGrid('getDataIDs');

            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get the risk sys ID from the covers grid
                var getvehID = grid.jqGrid('getCell', currRow, 'RCOV_RISK_NO');

                //get Cover type of the cover
                var coverType = grid.jqGrid('getCell', currRow, 'COVER_TYPE');

                var vehID = $("#").val();

                if (getvehID != vehID) {
                    $("#" + currRow).hide();

                }
                else {

                    //
                    $("#" + currRow).show();
                    if (coverType == 'OD1') {
                        // if the cover type is own damage then the SI is added to to be considered as risk Sum insured
                        //SumSIFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_FC'));
                        //SumSIBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_BC'));
                    }

                    SumSIFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_FC'));
                    SumSIBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_SI_BC'));

                    SumGrossPremFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_GROSS_PREM_FC'));
                    SumGrossPremBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_GROSS_PREM_BC'));

                    SumNetPremFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_NET_PREM_FC'));
                    SumNetPremBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_NET_PREM_BC'));

                    SumLoadFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_LOAD_FC'));
                    SumLoadBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_LOAD_BC'));

                    SumDisFC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_DISC_FC'));
                    SumDisBC += parseFloat(grid.jqGrid('getCell', currRow, 'RCOV_DISC_BC'));
                }
            }

            grid.jqGrid('footerData', 'set', { 'RCOV_SI_FC': SumSIFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_SI_BC': SumSIFC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_GROSS_PREM_FC': SumGrossPremFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_GROSS_PREM_BC': SumGrossPremFC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_NET_PREM_FC': SumNetPremFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_NET_PREM_BC': SumNetPremFC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_LOAD_FC': SumLoadFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_LOAD_BC': SumLoadBC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_DISC_FC': SumDisFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_DISC_BC': SumDisBC.toFixed(2) });

            $('#POLH_POL_SI_FC').val(SumSIFC.toFixed(2));
            $('#POLH_POL_SI_BC').val(SumSIFC.toFixed(2));

            $('#POLH_POL_PREM_FC').val(SumGrossPremFC.toFixed(2));
            $('#POLH_POL_PREM_BC').val(SumGrossPremFC.toFixed(2));
            //
            $('#POLH_POL_LOAD_FC').val(SumLoadFC.toFixed(2));
            $('#POLH_POL_LOAD_BC').val(SumLoadFC.toFixed(2));

            $('#POLH_POL_DISC_FC').val(SumDisFC.toFixed(2));
            $('#POLH_POL_DISC_BC').val(SumDisBC.toFixed(2));

            // set risk SI and Premiums vlues,

            //var Riskgrid = $scope.bond_grid;

            //var RiskRow_id = Riskgrid.jqGrid('getGridParam', 'selrow');

            //var riskID = Riskgrid.jqGrid('getCell', RiskRow_id, 'BOND_RISK_ID');

            ////Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_TOT_PREM_FC', SumGrossPremFC.toFixed(2));
            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_TOT_PREM_BC', SumGrossPremBC.toFixed(2));

            ////Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_SI_FC', SumSIFC.toFixed(2));
            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_SI_BC', SumSIBC.toFixed(2));

            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_LOAD_FC', SumLoadFC.toFixed(2));
            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_LOAD_BC', SumLoadBC.toFixed(2));

            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_DISC_FC', SumDisFC.toFixed(2));
            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_DISC_BC', SumDisBC.toFixed(2));

            // Policy Level SI and premium Calculations 
            //SumPolhAmounts();

        };
        //Policy Level SI and premium Calculations

        // calculate sum of Risk level amounts
        //function SumPolhAmounts() {

        //    //Declare variables
        //    var polGrossPremFC = 0;
        //    var polGrossPremBC = 0;

        //    var polNetPremFC = 0;
        //    var polNetPremBC = 0;

        //    var polLoadFC = 0;
        //    var polLoadBC = 0;

        //    var polDisFC = 0;
        //    var polDisBC = 0;

        //    var polSIFC = 0;
        //    var polSIBC = 0;

        //    var polSIFC = 0;
        //    var polSIBC = 0;

        //    var polSIFC = 0;
        //    var polSIBC = 0;
        //    //
        //    var polgrid = $scope.bond_grid;

        //    var polrowIds = polgrid.jqGrid('getDataIDs');


        //    // iterate through the rows and check if it exists each of them
        //    for (var i = 0, len = polrowIds.length; i < len; i++) {

        //        var currRow = polrowIds[i];

        //        // Sum risk level Amounts for Policy Level Amounts

        //        polSIFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_SI_FC'));
        //        polSIBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_SI_BC'));

        //        polGrossPremFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_TOT_PREM_FC'));
        //        polGrossPremBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_TOT_PREM_BC'));

        //        polLoadFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_LOAD_FC'));
        //        polLoadBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_LOAD_BC'));

        //        polDisFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_DISC_FC'));
        //        polDisBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_DISC_BC'));

        //    }

        //    $('#POLH_POL_SI_FC').val(polSIBC);
        //    $('#POLH_POL_SI_BC').val(polSIBC);

        //    $('#POLH_POL_PREM_FC').val(polGrossPremBC);
        //    $('#POLH_POL_PREM_BC').val(polGrossPremBC);
        //    //
        //    $('#POLH_POL_LOAD_FC').val(polLoadFC);
        //    $('#POLH_POL_LOAD_BC').val(polLoadBC);

        //    $('#POLH_POL_DISC_FC').val(polDisFC);
        //    $('#POLH_POL_DISC_BC').val(polDisBC);

        //};


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

            if ($('#POLH_CLASS_CODE').val() == "") {

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

                var rowIds = grid.jqGrid('getDataIDs');

                //declare array to contain the codes to varify
                var CodeArray = [];

                // iterate through the rows in the grid and add Covers to Array
                for (var i = 0, len = rowIds.length; i < len; i++) {
                    var currRow = rowIds[i];

                    //get value of the cell or column in an array
                    var coverCode = grid.jqGrid('getCell', currRow, 'RCOV_CODE');

                    var RiskCode = grid.jqGrid('getCell', currRow, 'RCOV_RISK_SYS_ID');

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

                            result[i]["RCOV_RISK_SYS_ID"] = $("#BOND_SYS_ID").val();
                            result[i]["RCOV_RISK_NO"] = $("#BOND_RISK_ID").val();
                            //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                            var deftCoverCode = result[i].RCOV_CODE;
                            var newRiskCode = $("#BOND_SYS_ID").val();

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



        //View Schedule

        $("#btnViewDocument").on('click', function () {

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
                            window.open("/PolicySchedules/PolicyPASchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
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