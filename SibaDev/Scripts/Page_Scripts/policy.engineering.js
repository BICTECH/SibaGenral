(function ($, s, u, $scope) {
    $(function () {


        // EAR Period
        $scope.earperiod_grid = u.default_grid("#gridEARPeriods", "#gridEARPeriodsPager", "EAR Period",
            ['Sys Id', 'Name', ' Start date', 'End date', 'Days', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'Eng Sys ID', 'Polh Sys ID'],
            [
                { name: 'PERIOD_SYS_ID', index: 'PERIOD_SYS_ID', width: 100 },
                { name: 'PERIOD_NAME', index: 'PERIOD_NAME', width: 300 },
                { name: 'PERIOD_START_DATE', index: 'PERIOD_START_DATE', width: 300 },
                { name: 'PERIOD_END_DATE', index: 'PERIOD_END_DATE', width: 300 },
                { name: 'PERIOD_DAYS', index: 'PERIOD_DAYS', width: 300 },
                { name: 'PERIOD_STATUS', index: 'PERIOD_STATUS', width: 300 },
                { name: 'PERIOD_CRTE_BY', index: 'PERIOD_CRTE_BY', width: 150 },
                { name: 'PERIOD_CRTE_DATE', index: 'PERIOD_CRTE_DATE', width: 150 },
                { name: 'PERIOD_MOD_BY', index: 'PERIOD_MOD_BY', width: 150 },
                { name: 'PERIOD_MOD_DATE', index: 'PERIOD_MOD_DATE', width: 150 },
                { name: 'PERIOD_ENG_SYSID', index: 'PERIOD_ENG_SYSID', width: 300 },
                { name: 'PERIOD_POLH_SYS_ID', index: 'PERIOD_POLH_SYS_ID', width: 300 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.earperiod_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='PERIOD_SYS_ID']").data("update", true);
                u.fill_form({
                    PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'PERIOD_SYS_ID'),
                    PERIOD_NAME: grid.jqGrid('getCell', sel_id, 'PERIOD_NAME'),
                    PERIOD_START_DATE: grid.jqGrid('getCell', sel_id, 'PERIOD_START_DATE'),
                    PERIOD_END_DATE: grid.jqGrid('getCell', sel_id, 'PERIOD_END_DATE'),
                    PERIOD_DAYS: grid.jqGrid('getCell', sel_id, 'PERIOD_DAYS'),
                    PERIOD_STATUS: grid.jqGrid('getCell', sel_id, 'PERIOD_STATUS'),
                    PERIOD_ENG_SYSID: grid.jqGrid('getCell', sel_id, 'PERIOD_ENG_SYSID'),
                    PERIOD_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'PERIOD_POLH_SYS_ID'),

                }, "#earperiodForm");
            }),


        // EAR Interest
        $scope.earinterest_grid = u.default_grid("#gridEARInterest", "#gridEARInterestPager", "EAR Interest",
            ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date', 'Modified by',
            'Modified date', 'EAR Period Sys ID', 'Eng Loc ID', 'Eng Polh Sys ID'],
            [
                { name: 'EAR_SYS_ID', index: 'EAR_SYS_ID', width: 200 },
                { name: 'EAR_RISK_TYPE', index: 'EAR_RISK_TYPE', width: 300 },
                { name: 'EAR_RISK_NAME', index: 'EAR_RISK_NAME', width: 300 },
                { name: 'EAR_DESCRIPTION', index: 'EAR_DESCRIPTION', width: 300 },
                { name: 'EAR_STATUS', index: 'EAR_STATUS', width: 300 },
                { name: 'EAR_CRTE_BY', index: 'EAR_CRTE_BY', width: 150 },
                { name: 'EAR_CRTE_DATE', index: 'EAR_CRTE_DATE', width: 150 },
                { name: 'EAR_MOD_BY', index: 'EAR_MOD_BY', width: 150 },
                { name: 'EAR_MOD_DATE', index: 'EAR_MOD_DATE', width: 150 },
                { name: 'EAR_PERIOD_SYS_ID', index: 'EAR_PERIOD_SYS_ID', width: 300 },
                { name: 'EAR_ENG_SYS_ID', index: 'EAR_ENG_SYS_ID', width: 300 },
                { name: 'EAR_POLH_SYS_ID', index: 'EAR_POLH_SYS_ID', width: 300 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.earinterest_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='EAR_SYS_ID']").data("update", true);
                u.fill_form({
                    EAR_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_SYS_ID'),
                    EAR_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'EAR_RISK_TYPE'),
                    EAR_RISK_NAME: grid.jqGrid('getCell', sel_id, 'EAR_RISK_NAME'),
                    EAR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'EAR_DESCRIPTION'),
                    EAR_STATUS: grid.jqGrid('getCell', sel_id, 'EAR_STATUS'),
                    EAR_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_PERIOD_SYS_ID'),
                    EAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_ENG_SYS_ID'),
                    EAR_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_POLH_SYS_ID'),

                }, "#earinterestForm");
            }),

            // EAR CPM
            $scope.earcpm_grid = u.default_grid("#gridEARCPMInterest", "#gridEARCPMInterestPager", "EAR Contractor Plant Machinery",
                ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'EAR Period Sys ID', 'Eng Loc ID', 'EAR Polh sys Id'],
                [
                    { name: 'EARCPM_SYS_ID', index: 'EARCPM_SYS_ID', width: 200 },
                    { name: 'EARCPM_RISK_TYPE', index: 'EARCPM_RISK_TYPE', width: 300 },
                    { name: 'EARCPM_RISK_NAME', index: 'EARCPM_RISK_NAME', width: 300 },
                    { name: 'EARCPM_DESCRIPTION', index: 'EARCPM_DESCRIPTION', width: 300 },
                    { name: 'EARCPM_STATUS', index: 'EARCPM_STATUS', width: 300 },
                    { name: 'EARCPM_CRTE_BY', index: 'EARCPM_CRTE_BY', width: 300 },
                    { name: 'EARCPM_CRTE_DATE', index: 'EARCPM_CRTE_DATE', width: 300 },
                    { name: 'EARCPM_MOD_BY', index: 'EARCPM_MOD_BY', width: 300 },
                    { name: 'EARCPM_MOD_DATE', index: 'EARCPM_MOD_DATE', width: 300 },
                    { name: 'EARCPM_PERIOD_SYS_ID', index: 'EARCPM_PERIOD_SYS_ID', width: 200 },
                    { name: 'EARCPM_ENG_SYS_ID', index: 'EARCPM_ENG_SYS_ID', width: 200 },
                    { name: 'EARCPM_POLH_SYS_ID', index: 'EARCPM_POLH_SYS_ID', width: 200 },
                ],
                //Retrive Grid data into form input fields on row click..
                function (sel_id) {
                    var grid = $scope.earcpm_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='EARCPM_SYS_ID']").data("update", true);
                    u.fill_form({
                        EARCPM_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_SYS_ID'),
                        EARCPM_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'EARCPM_RISK_TYPE'),
                        EARCPM_RISK_NAME: grid.jqGrid('getCell', sel_id, 'EARCPM_RISK_NAME'),
                        EARCPM_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'EARCPM_DESCRIPTION'),
                        EARCPM_STATUS: grid.jqGrid('getCell', sel_id, 'EARCPM_STATUS'),
                        EARCPM_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_PERIOD_SYS_ID'),
                        EARCPM_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_ENG_SYS_ID'),
                        EARCPM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_POLH_SYS_ID'),

                    }, "#earcpmForm");
                }),


        // EAR Third Party Loss Grid
        $scope.eartpl_grid = u.default_grid("#gridEARTPL", "#gridEARTPLPager", "EAR Third Party Loss Policy",
            [
              'TPL Code', 'TPL Name', 'TPL Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable',
                    'Discount FC',
                    'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Eng Sys id',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status', 'EAR sys id', 'Period Sys Id'
            ],
            [
                { name: 'EARTPL_CODE', index: 'EARTPL_CODE', width: 150 },
                { name: 'EARTPL_NAME', index: 'EARTPL_NAME', width: 150 },
                { name: 'EARTPL_TYPE', index: 'EARTPL_TYPE', width: 150 },
                { name: 'EARTPL_SI_FC', index: 'EARTPL_SI_FC', width: 150 },
                { name: 'EARTPL_SI_BC', index: 'EARTPL_SI_BC', width: 150 },
                { name: 'EARTPL_RATE', index: 'EARTPL_RATE', width: 150 },
                { name: 'EARTPL_GROSS_PREM_FC', index: 'EARTPL_GROSS_PREM_FC', width: 150 },
                { name: 'EARTPL_GROSS_PREM_BC', index: 'EARTPL_GROSS_PREM_BC', width: 150 },
                { name: 'EARTPL_NET_PREM_FC', index: 'EARTPL_NET_PREM_FC', width: 150 },
                { name: 'EARTPL_NET_PREM_BC', index: 'EARTPL_NET_PREM_BC', width: 150 },
                { name: 'EARTPL_DISC_YN', index: 'EARTPL_DISC_YN', width: 150 },
                { name: 'EARTPL_DISC_FC', index: 'EARTPL_DISC_FC', width: 150 },
                { name: 'EARTPL_DISC_BC', index: 'EARTPL_DISC_BC', width: 150 },
                { name: 'EARTPL_LOAD_YN', index: 'EARTPL_LOAD_YN', width: 150 },
                { name: 'EARTPL_LOAD_FC', index: 'EARTPL_LOAD_FC', width: 150 },
                { name: 'EARTPL_LOAD_BC', index: 'EARTPL_LOAD_BC', width: 150 },
                //
                { name: 'EARTPL_ENG_SYS_ID', index: 'EARTPL_ENG_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                { name: 'EARTPL_RISK_NO', index: 'EARTPL_RISK_NO', hidden: false, width: 150 },
                { name: 'EARTPL_POLH_DOC_NO', index: 'EARTPL_POLH_DOC_NO', width: 150 },
                { name: 'EARTPL_END_NO', index: 'EARTPL_END_NO', width: 150 },
                { name: 'EARTPL_RI_SI_YN', index: 'EARTPL_RI_SI_YN', hidden: false, width: 150 },
                { name: 'EARTPL_RI_PREM_YN', index: 'EARTPL_RI_PREM_YN', hidden: false, width: 150 },
                //
                { name: 'EARTPL_RATE_CHANGE', index: 'EARTPL_RATE_CHANGE', width: 150 },
                { name: 'EARTPL_SI_CHANGE', index: 'EARTPL_SI_CHANGE', width: 150 },
                { name: 'EARTPL_COVER_LEVEL', index: 'EARTPL_COVER_LEVEL', width: 150 },
                { name: 'EARTPL_PREM_REFUND', index: 'EARTPL_PREM_REFUND', width: 150 },
                { name: 'EARTPL_RI_YN', index: 'EARTPL_RI_YN', width: 150 },
                { name: 'EARTPL_USER_PREM', index: 'EARTPL_USER_PREM', width: 150 },
                //
                { name: 'EARTPL_TXN_STATE', index: 'EARTPL_TXN_STATE', width: 150 },
                { name: 'EARTPL_CRTE_BY', index: 'EARTPL_CRTE_BY', width: 150 },
                { name: 'EARTPL_CRTE_DATE', index: 'EARTPL_CRTE_DATE', width: 150 },
                { name: 'EARTPL_MOD_BY', index: 'EARTPL_MOD_BY', width: 150 },
                { name: 'EARTPL_MOD_DATE', index: 'EARTPL_MOD_DATE', width: 150 },
                { name: 'EARTPL_STATUS', index: 'EARTPL_STATUS', width: 150 },
                { name: 'EARTPL_SYS_ID', index: 'EARTPL_SYS_ID', width: 150 },
                { name: 'EARTPL_PERIOD_SYS_ID', index: 'EARTPL_PERIOD_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.eartpl_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='EARTPL_SYS_ID']").data("update", true);
                u.fill_form({
                    EARTPL_CODE: grid.jqGrid('getCell', sel_id, 'EARTPL_CODE'),
                    EARTPL_NAME: grid.jqGrid('getCell', sel_id, 'EARTPL_NAME'),
                    EARTPL_TYPE: grid.jqGrid('getCell', sel_id, 'EARTPL_TYPE'),
                    EARTPL_SI_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_FC'),
                    EARTPL_SI_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_BC'),
                    EARTPL_RATE: grid.jqGrid('getCell', sel_id, 'EARTPL_RATE'),
                    EARTPL_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_GROSS_PREM_FC'),

                    EARTPL_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_GROSS_PREM_BC'),
                    EARTPL_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_NET_PREM_FC'),
                    EARTPL_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_NET_PREM_BC'),
                    EARTPL_DISC_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_YN'),
                    EARTPL_DISC_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_FC'),
                    EARTPL_DISC_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_BC'),

                    EARTPL_LOAD_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_YN'),
                    EARTPL_LOAD_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_FC'),
                    EARTPL_LOAD_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_BC'),
                    EARTPL_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_ENG_SYS_ID'),
                    EARTPL_RISK_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_RISK_NO'),
                    EARTPL_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_POLH_DOC_NO'),

                    EARTPL_END_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_END_NO'),
                    EARTPL_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_SI_YN'),
                    EARTPL_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_PREM_YN'),
                    EARTPL_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'EARTPL_RATE_CHANGE'),
                    EARTPL_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_CHANGE'),
                    EARTPL_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'EARTPL_COVER_LEVEL'),

                    EARTPL_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'EARTPL_PREM_REFUND'),
                    EARTPL_RI_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_YN'),
                    EARTPL_USER_PREM: grid.jqGrid('getCell', sel_id, 'EARTPL_USER_PREM'),
                    EARTPL_TXN_STATE: grid.jqGrid('getCell', sel_id, 'EARTPL_TXN_STATE'),
                    EARTPL_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_SYS_ID'),
                    EARTPL_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_PERIOD_SYS_ID'),

                }, "#eartplForm");
            }),

                    // CAR Interest
                $scope.carinterest_grid = u.default_grid("#gridCARInterest", "#gridCARInterestPager", "CAR Interest",
                    ['Risk type', 'Risk Name', ' Description', 'Sys ID', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'Eng Sys ID', 'Polh Sys ID'],
                    [
                    { name: 'CAR_RISK_TYPE', index: 'CAR_RISK_TYPE', width: 300 },
                    { name: 'CAR_RISK_NAME', index: 'CAR_RISK_NAME', width: 300 },
                    { name: 'CAR_DESCRIPTION', index: 'CAR_DESCRIPTION', width: 500 },
                    { name: 'CAR_SYS_ID', index: 'CAR_SYS_ID', width: 200 },
                    { name: 'CAR_STATUS', index: 'CAR_STATUS', width: 200 },
                    { name: 'CAR_CRTE_BY', index: 'CAR_CRTE_BY', width: 300 },
                    { name: 'CAR_CRTE_DATE', index: 'CAR_CRTE_DATE', width: 300 },
                    { name: 'CAR_MOD_BY', index: 'CAR_MOD_BY', width: 300 },
                    { name: 'CAR_MOD_DATE', index: 'CAR_MOD_DATE', width: 300 },
                    { name: 'CAR_ENG_SYS_ID', index: 'CAR_ENG_SYS_ID', width: 300 },
                    { name: 'CAR_POLH_SYS_ID', index: 'CAR_POLH_SYS_ID', width: 300 },
                    ],
                   //Retrive Grid data into form input fields on row click..
                    function (sel_id) {
                        var grid = $scope.carinterest_grid;
                        var sel_id = grid.jqGrid('getGridParam', 'selrow');
                        $("form input[name='EAR_SYS_ID']").data("update", true);
                        u.fill_form({
                            CAR_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_SYS_ID'),
                            CAR_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CAR_RISK_TYPE'),
                            CAR_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CAR_RISK_NAME'),
                            CAR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CAR_DESCRIPTION'),
                            CAR_STATUS: grid.jqGrid('getCell', sel_id, 'CAR_STATUS'),                      
                            CAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_ENG_SYS_ID'),
                            CAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_ENG_SYS_ID'),

                        }, "#carinterestForm");
                    }),


                    // CAR CPM
            $scope.carcpm_grid = u.default_grid("#gridCARCPMInterest", "#gridCARCPMInterestPager", "CAR Contractor Plant Machinery",
                ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'Eng Loc ID', 'Polh Sys ID'],
                [
                    { name: 'CPM_SYS_ID', index: 'CPM_SYS_ID', width: 100 },
                    { name: 'CPM_RISK_TYPE', index: 'CPM_RISK_TYPE', width: 300 },
                    { name: 'CPM_RISK_NAME', index: 'CPM_RISK_NAME', width: 300 },
                    { name: 'CPM_DESCRIPTION', index: 'CPM_DESCRIPTION', width: 300 },                  
                    { name: 'CPM_STATUS', index: 'CPM_STATUS', width: 100 },
                    { name: 'CPM_CRTE_BY', index: 'CPM_CRTE_BY', width: 300 },
                    { name: 'CPM_CRTE_DATE', index: 'CPM_CRTE_DATE', width: 300 },
                    { name: 'CPM_MOD_BY', index: 'CPM_MOD_BY', width: 3000 },
                    { name: 'CPM_MOD_DATE', index: 'CPM_MOD_DATE', width: 300 },
                    { name: 'CPM_ENG_SYS_ID', index: 'CPM_ENG_SYS_ID', width: 200 },
                    { name: 'CPM_POLH_SYS_ID', index: 'CPM_POLH_SYS_ID', width: 200 },
                ],
                //Retrive Grid data into form input fields on row click..
                function (sel_id) {
                    var grid = $scope.carcpm_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='EARCPM_SYS_ID']").data("update", true);
                    u.fill_form({
                        CPM_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_SYS_ID'),
                        CPM_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CPM_RISK_TYPE'),
                        CPM_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CPM_RISK_NAME'),
                        CPM_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CPM_DESCRIPTION'),
                        CPM_STATUS: grid.jqGrid('getCell', sel_id, 'CPM_STATUS'),
                        CPM_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_ENG_SYS_ID'),
                        CPM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_POLH_SYS_ID'),
                   
                    }, "#carcpmForm");
                }),

                    // CAR Third Party Loss Grid
                    $scope.cartpl_grid = u.default_grid("#gridCARTPL", "#gridCARTPLPager", "CAR Third Party Loss Policy",
                        [
                          'Sys id', 'TPL Code', 'TPL Name', 'TPL Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable',
                    'Discount FC',
                    'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Risk id',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status'
                        ],
                        [
                            { name: 'CARTPL_SYS_ID', index: 'CARTPL_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'CARTPL_CODE', index: 'CARTPL_CODE', width: 150 },
                            { name: 'CARTPL_NAME', index: 'CARTPL_NAME', width: 150 },
                            { name: 'CARTPL_TYPE', index: 'CARTPL_TYPE', width: 150 },
                            { name: 'CARTPL_SI_FC', index: 'CARTPL_SI_FC', width: 150 },
                            { name: 'CARTPL_SI_BC', index: 'CARTPL_SI_BC', width: 150 },
                            { name: 'CARTPL_RATE', index: 'CARTPL_RATE', width: 150 },
                            { name: 'CARTPL_GROSS_PREM_FC', index: 'CARTPL_GROSS_PREM_FC', width: 150 },
                            { name: 'CARTPL_GROSS_PREM_BC', index: 'CARTPL_GROSS_PREM_BC', width: 150 },
                            { name: 'CARTPL_NET_PREM_FC', index: 'CARTPL_NET_PREM_FC', width: 150 },
                            { name: 'CARTPL_NET_PREM_BC', index: 'CARTPL_NET_PREM_BC', width: 150 },
                            { name: 'CARTPL_DISC_YN', index: 'CARTPL_DISC_YN', width: 150 },
                            { name: 'CARTPL_DISC_FC', index: 'CARTPL_DISC_FC', width: 150 },
                            { name: 'CARTPL_DISC_BC', index: 'CARTPL_DISC_BC', width: 150 },
                            { name: 'CARTPL_LOAD_YN', index: 'CARTPL_LOAD_YN', width: 150 },
                            { name: 'CARTPL_LOAD_FC', index: 'CARTPL_LOAD_FC', width: 150 },
                            { name: 'CARTPL_LOAD_BC', index: 'CARTPL_LOAD_BC', width: 150 },

                            { name: 'CARTPL_RISK_SYS_ID', index: 'CARTPL_RISK_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'CARTPL_RISK_NO', index: 'CARTPL_RISK_NO', hidden: false, width: 150 },
                            { name: 'CARTPL_POLH_DOC_NO', index: 'CARTPL_POLH_DOC_NO', width: 150 },
                            { name: 'CARTPL_END_NO', index: 'CARTPL_END_NO', width: 150 },
                            { name: 'CARTPL_RI_SI_YN', index: 'CARTPL_RI_SI_YN', hidden: false, width: 150 },
                            { name: 'CARTPL_RI_PREM_YN', index: 'CARTPL_RI_PREM_YN', hidden: false, width: 150 },
                            //
                            { name: 'CARTPL_RATE_CHANGE', index: 'CARTPL_RATE_CHANGE', width: 150 },
                            { name: 'CARTPL_SI_CHANGE', index: 'CARTPL_SI_CHANGE', width: 150 },
                            { name: 'CARTPL_COVER_LEVEL', index: 'CARTPL_COVER_LEVEL', width: 150 },
                            { name: 'CARTPL_PREM_REFUND', index: 'CARTPL_PREM_REFUND', width: 150 },
                            { name: 'CARTPL_RI_YN', index: 'CARTPL_RI_YN', width: 150 },
                            { name: 'CARTPL_USER_PREM', index: 'CARTPL_USER_PREM', width: 150 },
                            //
                            { name: 'CARTPL_TXN_STATE', index: 'CARTPL_TXN_STATE', width: 150 },
                            { name: 'CARTPL_CRTE_BY', index: 'CARTPL_CRTE_BY', width: 150 },
                            { name: 'CARTPL_CRTE_DATE', index: 'CARTPL_CRTE_DATE', width: 150 },
                            { name: 'CARTPL_MOD_BY', index: 'CARTPL_MOD_BY', width: 150 },
                            { name: 'CARTPL_MOD_DATE', index: 'CARTPL_MOD_DATE', width: 150 },
                            { name: 'CARTPL_STATUS', index: 'CARTPL_STATUS', width: 150 },
                        ],
                        //Retrive Grid data into form input fields on row click..
                        function (sel_id) {
                            var grid = $scope.eartpl_grid;
                            var sel_id = grid.jqGrid('getGridParam', 'selrow');
                            $("form input[name='CARTPL_CODE']").data("update", true);
                            u.fill_form({
                                CARTPL_CODE: grid.jqGrid('getCell', sel_id, 'CARTPL_CODE'),
                                CARTPL_NAME: grid.jqGrid('getCell', sel_id, 'CARTPL_NAME'),
                                CARTPL_TYPE: grid.jqGrid('getCell', sel_id, 'CARTPL_TYPE'),
                                CARTPL_SI_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_FC'),
                                CARTPL_SI_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_BC'),
                                CARTPL_RATE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE'),
                                CARTPL_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_FC'),
                                CARTPL_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_BC'),
                                CARTPL_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_FC'),
                                CARTPL_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_BC'),
                                CARTPL_DISC_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_YN'),
                                CARTPL_DISC_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_FC'),
                                CARTPL_DISC_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_BC'),
                                CARTPL_LOAD_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_YN'),
                                CARTPL_LOAD_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_FC'),
                                CARTPL_LOAD_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_BC'),
                                CARTPL_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_ENG_SYS_ID'),
                                CARTPL_RISK_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_RISK_NO'),
                                CARTPL_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_POLH_DOC_NO'),
                                CARTPL_END_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_END_NO'),
                                CARTPL_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_SI_YN'),
                                CARTPL_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_PREM_YN'),
                                CARTPL_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE_CHANGE'),
                                CARTPL_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_CHANGE'),
                                CARTPL_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'CARTPL_COVER_LEVEL'),
                                CARTPL_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'CARTPL_PREM_REFUND'),
                                CARTPL_RI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_YN'),
                                CARTPL_USER_PREM: grid.jqGrid('getCell', sel_id, 'CARTPL_USER_PREM'),
                                CARTPL_TXN_STATE: grid.jqGrid('getCell', sel_id, 'CARTPL_TXN_STATE'),
                                CARTPL_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_SYS_ID'),                                

                            }, "#cartplForm");
                        }),

                    // CAR Loss of Profit Grid
                    $scope.carlossop_grid = u.default_grid("#gridCARLOSSOP", "#gridCARLOSSOPPager", "CAR Third Party Loss Policy",
                        [
                         'Sys id', 'Loss of Profit Code', 'Loss of Profit Name', 'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable',
                    'Discount FC',
                    'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC','Risk id',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status'
                        ],
                        [
                            { name: 'LOSSOP_SYS_ID', index: 'LOSSOP_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'LOSSOP_CODE', index: 'LOSSOP_CODE', width: 150 },
                            { name: 'LOSSOP_NAME', index: 'LOSSOP_NAME', width: 150 },
                            { name: 'LOSSOP_TYPE', index: 'LOSSOP_TYPE', width: 150 },
                            { name: 'LOSSOP_SI_FC', index: 'LOSSOP_SI_FC', width: 150 },
                            { name: 'LOSSOP_SI_BC', index: 'LOSSOP_SI_BC', width: 150 },
                            { name: 'LOSSOP_RATE', index: 'LOSSOP_RATE', width: 150 },
                            { name: 'LOSSOP_GROSS_PREM_FC', index: 'LOSSOP_GROSS_PREM_FC', width: 150 },
                            { name: 'LOSSOP_GROSS_PREM_BC', index: 'LOSSOP_GROSS_PREM_BC', width: 150 },
                            { name: 'LOSSOP_NET_PREM_FC', index: 'LOSSOP_NET_PREM_FC', width: 150 },
                            { name: 'LOSSOP_NET_PREM_BC', index: 'LOSSOP_NET_PREM_BC', width: 150 },

                            { name: 'LOSSOP_DISC_YN', index: 'LOSSOP_DISC_YN', width: 150 },
                            { name: 'LOSSOP_DISC_FC', index: 'LOSSOP_DISC_FC', width: 150 },
                            { name: 'LOSSOP_DISC_BC', index: 'LOSSOP_DISC_BC', width: 150 },

                            { name: 'LOSSOP_LOAD_YN', index: 'LOSSOP_LOAD_YN', width: 150 },
                            { name: 'LOSSOP_LOAD_FC', index: 'LOSSOP_LOAD_FC', width: 150 },
                            { name: 'LOSSOP_LOAD_BC', index: 'LOSSOP_LOAD_BC', width: 150 },
            
                            { name: 'LOSSOP_ENG_SYS_ID', index: 'LOSSOP_ENG_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'LOSSOP_RISK_NO', index: 'LOSSOP_RISK_NO', hidden: false, width: 150 },
                            { name: 'LOSSOP_POLH_DOC_NO', index: 'LOSSOP_POLH_DOC_NO', width: 150 },
                            { name: 'LOSSOP_END_NO', index: 'LOSSOP_END_NO', width: 150 },
                            { name: 'LOSSOP_RI_SI_YN', index: 'LOSSOP_RI_SI_YN', hidden: false, width: 150 },
                            { name: 'LOSSO_RI_PREM_YN', index: 'LOSSO_RI_PREM_YN', hidden: false, width: 150 },
                            //
                            { name: 'LOSSOP_RATE_CHANGE', index: 'LOSSOP_RATE_CHANGE', width: 150 },
                            { name: 'LOSSOP_SI_CHANGE', index: 'LOSSOP_SI_CHANGE', width: 150 },
                            { name: 'LOSSOP_COVER_LEVEL', index: 'LOSSOP_COVER_LEVEL', width: 150 },
                            { name: 'LOSSOP_PREM_REFUND', index: 'LOSSOP_PREM_REFUND', width: 150 },
                            { name: 'LOSSOP_RI_YN', index: 'LOSSOP_RI_YN', width: 150 },
                            { name: 'LOSSOP_USER_PREM', index: 'LOSSOP_USER_PREM', width: 150 },
                            //
                            { name: 'LOSSOP_TXN_STATE', index: 'LOSSOP_TXN_STATE', width: 150 },
                            { name: 'LOSSOP_CRTE_BY', index: 'LOSSOP_CRTE_BY', width: 150 },
                            { name: 'LOSSOP_CRTE_DATE', index: 'LOSSOP_CRTE_DATE', width: 150 },
                            { name: 'LOSSOP_MOD_BY', index: 'LOSSOP_MOD_BY', width: 150 },
                            { name: 'LOSSOP_MOD_DATE', index: 'LOSSOP_MOD_DATE', width: 150 },
                            { name: 'LOSSOP_STATUS', index: 'LOSSOP_STATUS', width: 150 },
                        ],
                        //Retrive Grid data into form input fields on row click..
                        function (sel_id) {
                            var grid = $scope.carlossop_grid;
                            var sel_id = grid.jqGrid('getGridParam', 'selrow');
                            $("form input[name='CARTPL_CODE']").data("update", true);
                            u.fill_form({
                                LOSSOP_CODE: grid.jqGrid('getCell', sel_id, 'LOSSOP_CODE'),
                                LOSSOP_NAME: grid.jqGrid('getCell', sel_id, 'LOSSOP_NAME'),
                                LOSSOP_TYPE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TYPE'),
                                LOSSOP_SI_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_FC'),
                                LOSSOP_SI_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_BC'),
                                LOSSOP_RATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE'),
                                LOSSOP_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_FC'),
                                LOSSOP_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_BC'),
                                LOSSOP_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_FC'),
                                LOSSOP_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_BC'),
                                LOSSOP_DISC_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_YN'),
                                LOSSOP_DISC_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_FC'),
                                LOSSOP_DISC_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_BC'),
                                LOSSOP_LOAD_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_YN'),
                                LOSSOP_LOAD_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_FC'),
                                LOSSOP_LOAD_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_BC'),
                                LOSSOP_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_ENG_SYS_ID'),
                                LOSSOP_RISK_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_RISK_NO'),
                                LOSSOP_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_POLH_DOC_NO'),
                                LOSSOP_END_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_END_NO'),
                                LOSSOP_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_SI_YN'),
                                LOSSO_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'LOSSO_RI_PREM_YN'),
                                LOSSOP_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE_CHANGE'),
                                LOSSOP_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_CHANGE'),
                                LOSSOP_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'LOSSOP_COVER_LEVEL'),
                                LOSSOP_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'LOSSOP_PREM_REFUND'),
                                LOSSOP_RI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_YN'),
                                LOSSOP_USER_PREM: grid.jqGrid('getCell', sel_id, 'LOSSOP_USER_PREM'),
                                LOSSOP_TXN_STATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TXN_STATE'),
                                LOSSOP_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_SYS_ID'),                                

                            }, "#cartplForm");
                        }),



                // EAR Interest
                $scope.earinterest_grid = u.default_grid("#gridEARInterest", "#gridEARInterestPager", "EAR Interest",
                    ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date', 'Modified by',
                    'Modified date', 'EAR Period Sys ID', 'Eng Loc ID', 'Eng Polh Sys ID'],
                    [
                        { name: 'EAR_SYS_ID', index: 'EAR_SYS_ID', width: 200 },
                        { name: 'EAR_RISK_TYPE', index: 'EAR_RISK_TYPE', width: 300 },
                        { name: 'EAR_RISK_NAME', index: 'EAR_RISK_NAME', width: 300 },
                        { name: 'EAR_DESCRIPTION', index: 'EAR_DESCRIPTION', width: 300 },
                        { name: 'EAR_STATUS', index: 'EAR_STATUS', width: 300 },
                        { name: 'EAR_CRTE_BY', index: 'EAR_CRTE_BY', width: 150 },
                        { name: 'EAR_CRTE_DATE', index: 'EAR_CRTE_DATE', width: 150 },
                        { name: 'EAR_MOD_BY', index: 'EAR_MOD_BY', width: 150 },
                        { name: 'EAR_MOD_DATE', index: 'EAR_MOD_DATE', width: 150 },
                        { name: 'EAR_PERIOD_SYS_ID', index: 'EAR_PERIOD_SYS_ID', width: 300 },
                        { name: 'EAR_ENG_SYS_ID', index: 'EAR_ENG_SYS_ID', width: 300 },
                        { name: 'EAR_POLH_SYS_ID', index: 'EAR_POLH_SYS_ID', width: 300 },
                    ],
                   //Retrive Grid data into form input fields on row click..
                    function (sel_id) {
                        var grid = $scope.earinterest_grid;
                        var sel_id = grid.jqGrid('getGridParam', 'selrow');
                        $("form input[name='EAR_SYS_ID']").data("update", true);
                        u.fill_form({
                            EAR_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_SYS_ID'),
                            EAR_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'EAR_RISK_TYPE'),
                            EAR_RISK_NAME: grid.jqGrid('getCell', sel_id, 'EAR_RISK_NAME'),
                            EAR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'EAR_DESCRIPTION'),
                            EAR_STATUS: grid.jqGrid('getCell', sel_id, 'EAR_STATUS'),
                            EAR_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_PERIOD_SYS_ID'),
                            EAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_ENG_SYS_ID'),
                            EAR_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'EAR_POLH_SYS_ID'),

                        }, "#earinterestForm");
                    }),


            // EAR CPM
            $scope.earcpm_grid = u.default_grid("#gridEARCPMInterest", "#gridEARCPMInterestPager", "EAR Contractor Plant Machinery",
                ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date',
'Modified by', 'Modified date', 'EAR Period Sys ID', 'Eng Loc ID', 'EAR Polh sys Id'],
                [
                    { name: 'EARCPM_SYS_ID', index: 'EARCPM_SYS_ID', width: 200 },
                    { name: 'EARCPM_RISK_TYPE', index: 'EARCPM_RISK_TYPE', width: 300 },
                    { name: 'EARCPM_RISK_NAME', index: 'EARCPM_RISK_NAME', width: 300 },
                    { name: 'EARCPM_DESCRIPTION', index: 'EARCPM_DESCRIPTION', width: 300 },
                    { name: 'EARCPM_STATUS', index: 'EARCPM_STATUS', width: 300 },
                    { name: 'EARCPM_CRTE_BY', index: 'EARCPM_CRTE_BY', width: 300 },
                    { name: 'EARCPM_CRTE_DATE', index: 'EARCPM_CRTE_DATE', width: 300 },
                    { name: 'EARCPM_MOD_BY', index: 'EARCPM_MOD_BY', width: 300 },
                    { name: 'EARCPM_MOD_DATE', index: 'EARCPM_MOD_DATE', width: 300 },
                    { name: 'EARCPM_PERIOD_SYS_ID', index: 'EARCPM_PERIOD_SYS_ID', width: 200 },
                    { name: 'EARCPM_ENG_SYS_ID', index: 'EARCPM_ENG_SYS_ID', width: 200 },
                    { name: 'EARCPM_POLH_SYS_ID', index: 'EARCPM_POLH_SYS_ID', width: 200 },
                ],
                //Retrive Grid data into form input fields on row click..
                function (sel_id) {
                    var grid = $scope.earcpm_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='EARCPM_SYS_ID']").data("update", true);
                    u.fill_form({
                        EARCPM_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_SYS_ID'),
                        EARCPM_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'EARCPM_RISK_TYPE'),
                        EARCPM_RISK_NAME: grid.jqGrid('getCell', sel_id, 'EARCPM_RISK_NAME'),
                        EARCPM_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'EARCPM_DESCRIPTION'),
                        EARCPM_STATUS: grid.jqGrid('getCell', sel_id, 'EARCPM_STATUS'),
                        EARCPM_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_PERIOD_SYS_ID'),
                        EARCPM_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_ENG_SYS_ID'),
                        EARCPM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARCPM_POLH_SYS_ID'),

                    }, "#earcpmForm");
                }),


        // EAR Third Party Loss Grid
        $scope.eartpl_grid = u.default_grid("#gridEARTPL", "#gridEARTPLPager", "EAR Third Party Loss Policy",
            [
              'TPL Code', 'TPL Name', 'TPL Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable',
                    'Discount FC',
                    'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Eng Sys id',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status', 'EAR sys id', 'Period Sys Id'
            ],
            [
                { name: 'EARTPL_CODE', index: 'EARTPL_CODE', width: 150 },
                { name: 'EARTPL_NAME', index: 'EARTPL_NAME', width: 150 },
                { name: 'EARTPL_TYPE', index: 'EARTPL_TYPE', width: 150 },
                { name: 'EARTPL_SI_FC', index: 'EARTPL_SI_FC', width: 150 },
                { name: 'EARTPL_SI_BC', index: 'EARTPL_SI_BC', width: 150 },
                { name: 'EARTPL_RATE', index: 'EARTPL_RATE', width: 150 },
                { name: 'EARTPL_GROSS_PREM_FC', index: 'EARTPL_GROSS_PREM_FC', width: 150 },
                { name: 'EARTPL_GROSS_PREM_BC', index: 'EARTPL_GROSS_PREM_BC', width: 150 },
                { name: 'EARTPL_NET_PREM_FC', index: 'EARTPL_NET_PREM_FC', width: 150 },
                { name: 'EARTPL_NET_PREM_BC', index: 'EARTPL_NET_PREM_BC', width: 150 },
                { name: 'EARTPL_DISC_YN', index: 'EARTPL_DISC_YN', width: 150 },
                { name: 'EARTPL_DISC_FC', index: 'EARTPL_DISC_FC', width: 150 },
                { name: 'EARTPL_DISC_BC', index: 'EARTPL_DISC_BC', width: 150 },
                { name: 'EARTPL_LOAD_YN', index: 'EARTPL_LOAD_YN', width: 150 },
                { name: 'EARTPL_LOAD_FC', index: 'EARTPL_LOAD_FC', width: 150 },
                { name: 'EARTPL_LOAD_BC', index: 'EARTPL_LOAD_BC', width: 150 },
                //
                { name: 'EARTPL_ENG_SYS_ID', index: 'EARTPL_ENG_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                { name: 'EARTPL_RISK_NO', index: 'EARTPL_RISK_NO', hidden: false, width: 150 },
                { name: 'EARTPL_POLH_DOC_NO', index: 'EARTPL_POLH_DOC_NO', width: 150 },
                { name: 'EARTPL_END_NO', index: 'EARTPL_END_NO', width: 150 },
                { name: 'EARTPL_RI_SI_YN', index: 'EARTPL_RI_SI_YN', hidden: false, width: 150 },
                { name: 'EARTPL_RI_PREM_YN', index: 'EARTPL_RI_PREM_YN', hidden: false, width: 150 },
                //
                { name: 'EARTPL_RATE_CHANGE', index: 'EARTPL_RATE_CHANGE', width: 150 },
                { name: 'EARTPL_SI_CHANGE', index: 'EARTPL_SI_CHANGE', width: 150 },
                { name: 'EARTPL_COVER_LEVEL', index: 'EARTPL_COVER_LEVEL', width: 150 },
                { name: 'EARTPL_PREM_REFUND', index: 'EARTPL_PREM_REFUND', width: 150 },
                { name: 'EARTPL_RI_YN', index: 'EARTPL_RI_YN', width: 150 },
                { name: 'EARTPL_USER_PREM', index: 'EARTPL_USER_PREM', width: 150 },
                //
                { name: 'EARTPL_TXN_STATE', index: 'EARTPL_TXN_STATE', width: 150 },
                { name: 'EARTPL_CRTE_BY', index: 'EARTPL_CRTE_BY', width: 150 },
                { name: 'EARTPL_CRTE_DATE', index: 'EARTPL_CRTE_DATE', width: 150 },
                { name: 'EARTPL_MOD_BY', index: 'EARTPL_MOD_BY', width: 150 },
                { name: 'EARTPL_MOD_DATE', index: 'EARTPL_MOD_DATE', width: 150 },
                { name: 'EARTPL_STATUS', index: 'EARTPL_STATUS', width: 150 },
                { name: 'EARTPL_SYS_ID', index: 'EARTPL_SYS_ID', width: 150 },
                { name: 'EARTPL_PERIOD_SYS_ID', index: 'EARTPL_PERIOD_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.eartpl_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='EARTPL_SYS_ID']").data("update", true);
                u.fill_form({
                    EARTPL_CODE: grid.jqGrid('getCell', sel_id, 'EARTPL_CODE'),
                    EARTPL_NAME: grid.jqGrid('getCell', sel_id, 'EARTPL_NAME'),
                    EARTPL_TYPE: grid.jqGrid('getCell', sel_id, 'EARTPL_TYPE'),
                    EARTPL_SI_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_FC'),
                    EARTPL_SI_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_BC'),
                    EARTPL_RATE: grid.jqGrid('getCell', sel_id, 'EARTPL_RATE'),
                    EARTPL_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_GROSS_PREM_FC'),

                    EARTPL_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_GROSS_PREM_BC'),
                    EARTPL_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_NET_PREM_FC'),
                    EARTPL_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_NET_PREM_BC'),
                    EARTPL_DISC_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_YN'),
                    EARTPL_DISC_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_FC'),
                    EARTPL_DISC_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_DISC_BC'),

                    EARTPL_LOAD_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_YN'),
                    EARTPL_LOAD_FC: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_FC'),
                    EARTPL_LOAD_BC: grid.jqGrid('getCell', sel_id, 'EARTPL_LOAD_BC'),
                    EARTPL_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_ENG_SYS_ID'),
                    EARTPL_RISK_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_RISK_NO'),
                    EARTPL_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_POLH_DOC_NO'),

                    EARTPL_END_NO: grid.jqGrid('getCell', sel_id, 'EARTPL_END_NO'),
                    EARTPL_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_SI_YN'),
                    EARTPL_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_PREM_YN'),
                    EARTPL_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'EARTPL_RATE_CHANGE'),
                    EARTPL_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'EARTPL_SI_CHANGE'),
                    EARTPL_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'EARTPL_COVER_LEVEL'),

                    EARTPL_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'EARTPL_PREM_REFUND'),
                    EARTPL_RI_YN: grid.jqGrid('getCell', sel_id, 'EARTPL_RI_YN'),
                    EARTPL_USER_PREM: grid.jqGrid('getCell', sel_id, 'EARTPL_USER_PREM'),
                    EARTPL_TXN_STATE: grid.jqGrid('getCell', sel_id, 'EARTPL_TXN_STATE'),
                    EARTPL_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_SYS_ID'),
                    EARTPL_PERIOD_SYS_ID: grid.jqGrid('getCell', sel_id, 'EARTPL_PERIOD_SYS_ID'),

                }, "#eartplForm");
            }),

                    // CAR Interest
          $scope.carinterest_grid = u.default_grid("#gridCARInterest", "#gridCARInterestPager", "CAR Interest",
            ['Risk type', 'Risk Name', ' Description', 'Sys ID', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'Eng Sys ID', 'Polh Sys ID'],
            [
                    { name: 'CAR_RISK_TYPE', index: 'CAR_RISK_TYPE', width: 300 },
                    { name: 'CAR_RISK_NAME', index: 'CAR_RISK_NAME', width: 300 },
                    { name: 'CAR_DESCRIPTION', index: 'CAR_DESCRIPTION', width: 500 },
                    { name: 'CAR_SYS_ID', index: 'CAR_SYS_ID', width: 200 },
                    { name: 'CAR_STATUS', index: 'CAR_STATUS', width: 200 },
                    { name: 'CAR_CRTE_BY', index: 'CAR_CRTE_BY', width: 300 },
                    { name: 'CAR_CRTE_DATE', index: 'CAR_CRTE_DATE', width: 300 },
                    { name: 'CAR_MOD_BY', index: 'CAR_MOD_BY', width: 300 },
                    { name: 'CAR_MOD_DATE', index: 'CAR_MOD_DATE', width: 300 },
                    { name: 'CAR_ENG_SYS_ID', index: 'CAR_ENG_SYS_ID', width: 300 },
                    { name: 'CAR_POLH_SYS_ID', index: 'CAR_POLH_SYS_ID', width: 300 },
                    ],
                   //Retrive Grid data into form input fields on row click..
           function (sel_id) {
                        var grid = $scope.carinterest_grid;
                        var sel_id = grid.jqGrid('getGridParam', 'selrow');
                        $("form input[name='EAR_SYS_ID']").data("update", true);
                        u.fill_form({
                            CAR_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_SYS_ID'),
                            CAR_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CAR_RISK_TYPE'),
                            CAR_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CAR_RISK_NAME'),
                            CAR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CAR_DESCRIPTION'),
                            CAR_STATUS: grid.jqGrid('getCell', sel_id, 'CAR_STATUS'),                      
                            CAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_ENG_SYS_ID'),
                            CAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_ENG_SYS_ID'),

                        }, "#carinterestForm");
                    }),


                    // CAR CPM
         $scope.carcpm_grid = u.default_grid("#gridCARCPMInterest", "#gridCARCPMInterestPager", "CAR Contractor Plant Machinery",
           ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Status', 'Created by', 'Created date',
                    'Modified by', 'Modified date', 'Eng Loc ID', 'Polh Sys ID'],
           [
                    { name: 'CPM_SYS_ID', index: 'CPM_SYS_ID', width: 100 },
                    { name: 'CPM_RISK_TYPE', index: 'CPM_RISK_TYPE', width: 300 },
                    { name: 'CPM_RISK_NAME', index: 'CPM_RISK_NAME', width: 300 },
                    { name: 'CPM_DESCRIPTION', index: 'CPM_DESCRIPTION', width: 300 },                  
                    { name: 'CPM_STATUS', index: 'CPM_STATUS', width: 100 },
                    { name: 'CPM_CRTE_BY', index: 'CPM_CRTE_BY', width: 300 },
                    { name: 'CPM_CRTE_DATE', index: 'CPM_CRTE_DATE', width: 300 },
                    { name: 'CPM_MOD_BY', index: 'CPM_MOD_BY', width: 3000 },
                    { name: 'CPM_MOD_DATE', index: 'CPM_MOD_DATE', width: 300 },
                    { name: 'CPM_ENG_SYS_ID', index: 'CPM_ENG_SYS_ID', width: 200 },
                    { name: 'CPM_POLH_SYS_ID', index: 'CPM_POLH_SYS_ID', width: 200 },
                ],
                //Retrive Grid data into form input fields on row click..
         function (sel_id) {
                    var grid = $scope.carcpm_grid;
                    var sel_id = grid.jqGrid('getGridParam', 'selrow');
                    $("form input[name='EARCPM_SYS_ID']").data("update", true);
                    u.fill_form({
                        CPM_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_SYS_ID'),
                        CPM_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CPM_RISK_TYPE'),
                        CPM_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CPM_RISK_NAME'),
                        CPM_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CPM_DESCRIPTION'),
                        CPM_STATUS: grid.jqGrid('getCell', sel_id, 'CPM_STATUS'),
                        CPM_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_ENG_SYS_ID'),
                        CPM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_POLH_SYS_ID'),
                   
                    }, "#carcpmForm");
                }),


                // CAR Third Party Loss Grid
       $scope.cartpl_grid = u.default_grid("#gridCARTPL", "#gridCARTPLPager", "CAR Third Party Loss",
          [
                        'Sys id', 'TPL Code', 'TPL Name', 'TPL Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                'Discount Applicable',
                'Discount FC',
                'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Risk id',
                'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                'Record Status'
                    ],
          [
                        { name: 'CARTPL_SYS_ID', index: 'CARTPL_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                        { name: 'CARTPL_CODE', index: 'CARTPL_CODE', width: 150 },
                        { name: 'CARTPL_NAME', index: 'CARTPL_NAME', width: 150 },
                        { name: 'CARTPL_TYPE', index: 'CARTPL_TYPE', width: 150 },
                        { name: 'CARTPL_SI_FC', index: 'CARTPL_SI_FC', width: 150 },
                        { name: 'CARTPL_SI_BC', index: 'CARTPL_SI_BC', width: 150 },
                        { name: 'CARTPL_RATE', index: 'CARTPL_RATE', width: 150 },
                        { name: 'CARTPL_GROSS_PREM_FC', index: 'CARTPL_GROSS_PREM_FC', width: 150 },
                        { name: 'CARTPL_GROSS_PREM_BC', index: 'CARTPL_GROSS_PREM_BC', width: 150 },
                        { name: 'CARTPL_NET_PREM_FC', index: 'CARTPL_NET_PREM_FC', width: 150 },
                        { name: 'CARTPL_NET_PREM_BC', index: 'CARTPL_NET_PREM_BC', width: 150 },
                        { name: 'CARTPL_DISC_YN', index: 'CARTPL_DISC_YN', width: 150 },
                        { name: 'CARTPL_DISC_FC', index: 'CARTPL_DISC_FC', width: 150 },
                        { name: 'CARTPL_DISC_BC', index: 'CARTPL_DISC_BC', width: 150 },
                        { name: 'CARTPL_LOAD_YN', index: 'CARTPL_LOAD_YN', width: 150 },
                        { name: 'CARTPL_LOAD_FC', index: 'CARTPL_LOAD_FC', width: 150 },
                        { name: 'CARTPL_LOAD_BC', index: 'CARTPL_LOAD_BC', width: 150 },

                        { name: 'CARTPL_RISK_SYS_ID', index: 'CARTPL_RISK_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                        { name: 'CARTPL_RISK_NO', index: 'CARTPL_RISK_NO', hidden: false, width: 150 },
                        { name: 'CARTPL_POLH_DOC_NO', index: 'CARTPL_POLH_DOC_NO', width: 150 },
                        { name: 'CARTPL_END_NO', index: 'CARTPL_END_NO', width: 150 },
                        { name: 'CARTPL_RI_SI_YN', index: 'CARTPL_RI_SI_YN', hidden: false, width: 150 },
                        { name: 'CARTPL_RI_PREM_YN', index: 'CARTPL_RI_PREM_YN', hidden: false, width: 150 },
                        //
                        { name: 'CARTPL_RATE_CHANGE', index: 'CARTPL_RATE_CHANGE', width: 150 },
                        { name: 'CARTPL_SI_CHANGE', index: 'CARTPL_SI_CHANGE', width: 150 },
                        { name: 'CARTPL_COVER_LEVEL', index: 'CARTPL_COVER_LEVEL', width: 150 },
                        { name: 'CARTPL_PREM_REFUND', index: 'CARTPL_PREM_REFUND', width: 150 },
                        { name: 'CARTPL_RI_YN', index: 'CARTPL_RI_YN', width: 150 },
                        { name: 'CARTPL_USER_PREM', index: 'CARTPL_USER_PREM', width: 150 },
                        //
                        { name: 'CARTPL_TXN_STATE', index: 'CARTPL_TXN_STATE', width: 150 },
                        { name: 'CARTPL_CRTE_BY', index: 'CARTPL_CRTE_BY', width: 150 },
                        { name: 'CARTPL_CRTE_DATE', index: 'CARTPL_CRTE_DATE', width: 150 },
                        { name: 'CARTPL_MOD_BY', index: 'CARTPL_MOD_BY', width: 150 },
                        { name: 'CARTPL_MOD_DATE', index: 'CARTPL_MOD_DATE', width: 150 },
                        { name: 'CARTPL_STATUS', index: 'CARTPL_STATUS', width: 150 },
                    ],
                    //Retrive Grid data into form input fields on row click..
         function (sel_id) {
                        var grid = $scope.eartpl_grid;
                        var sel_id = grid.jqGrid('getGridParam', 'selrow');
                        $("form input[name='CARTPL_CODE']").data("update", true);
                        u.fill_form({
                            CARTPL_CODE: grid.jqGrid('getCell', sel_id, 'CARTPL_CODE'),
                            CARTPL_NAME: grid.jqGrid('getCell', sel_id, 'CARTPL_NAME'),
                            CARTPL_TYPE: grid.jqGrid('getCell', sel_id, 'CARTPL_TYPE'),
                            CARTPL_SI_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_FC'),
                            CARTPL_SI_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_BC'),
                            CARTPL_RATE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE'),
                            CARTPL_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_FC'),
                            CARTPL_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_BC'),
                            CARTPL_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_FC'),
                            CARTPL_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_BC'),
                            CARTPL_DISC_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_YN'),
                            CARTPL_DISC_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_FC'),
                            CARTPL_DISC_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_BC'),
                            CARTPL_LOAD_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_YN'),
                            CARTPL_LOAD_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_FC'),
                            CARTPL_LOAD_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_BC'),
                            CARTPL_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_ENG_SYS_ID'),
                            CARTPL_RISK_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_RISK_NO'),
                            CARTPL_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_POLH_DOC_NO'),
                            CARTPL_END_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_END_NO'),
                            CARTPL_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_SI_YN'),
                            CARTPL_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_PREM_YN'),
                            CARTPL_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE_CHANGE'),
                            CARTPL_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_CHANGE'),
                            CARTPL_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'CARTPL_COVER_LEVEL'),
                            CARTPL_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'CARTPL_PREM_REFUND'),
                            CARTPL_RI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_YN'),
                            CARTPL_USER_PREM: grid.jqGrid('getCell', sel_id, 'CARTPL_USER_PREM'),
                            CARTPL_TXN_STATE: grid.jqGrid('getCell', sel_id, 'CARTPL_TXN_STATE'),
                            CARTPL_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_SYS_ID'),                                

                        }, "#cartplForm");
                    }),


                    // CAR Loss of Profit Grid
      $scope.carlossop_grid = u.default_grid("#gridCARLOSSOP", "#gridCARLOSSOPPager", "CAR Loss Of Profit",
         [
                         'Sys id', 'Loss of Profit Code', 'Loss of Profit Name', 'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable',
                    'Discount FC',
                    'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC','Risk id',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status'
                        ],
         [
                            { name: 'LOSSOP_SYS_ID', index: 'LOSSOP_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'LOSSOP_CODE', index: 'LOSSOP_CODE', width: 150 },
                            { name: 'LOSSOP_NAME', index: 'LOSSOP_NAME', width: 150 },
                            { name: 'LOSSOP_TYPE', index: 'LOSSOP_TYPE', width: 150 },
                            { name: 'LOSSOP_SI_FC', index: 'LOSSOP_SI_FC', width: 150 },
                            { name: 'LOSSOP_SI_BC', index: 'LOSSOP_SI_BC', width: 150 },
                            { name: 'LOSSOP_RATE', index: 'LOSSOP_RATE', width: 150 },
                            { name: 'LOSSOP_GROSS_PREM_FC', index: 'LOSSOP_GROSS_PREM_FC', width: 150 },
                            { name: 'LOSSOP_GROSS_PREM_BC', index: 'LOSSOP_GROSS_PREM_BC', width: 150 },
                            { name: 'LOSSOP_NET_PREM_FC', index: 'LOSSOP_NET_PREM_FC', width: 150 },
                            { name: 'LOSSOP_NET_PREM_BC', index: 'LOSSOP_NET_PREM_BC', width: 150 },

                            { name: 'LOSSOP_DISC_YN', index: 'LOSSOP_DISC_YN', width: 150 },
                            { name: 'LOSSOP_DISC_FC', index: 'LOSSOP_DISC_FC', width: 150 },
                            { name: 'LOSSOP_DISC_BC', index: 'LOSSOP_DISC_BC', width: 150 },

                            { name: 'LOSSOP_LOAD_YN', index: 'LOSSOP_LOAD_YN', width: 150 },
                            { name: 'LOSSOP_LOAD_FC', index: 'LOSSOP_LOAD_FC', width: 150 },
                            { name: 'LOSSOP_LOAD_BC', index: 'LOSSOP_LOAD_BC', width: 150 },
            
                            { name: 'LOSSOP_ENG_SYS_ID', index: 'LOSSOP_ENG_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                            { name: 'LOSSOP_RISK_NO', index: 'LOSSOP_RISK_NO', hidden: false, width: 150 },
                            { name: 'LOSSOP_POLH_DOC_NO', index: 'LOSSOP_POLH_DOC_NO', width: 150 },
                            { name: 'LOSSOP_END_NO', index: 'LOSSOP_END_NO', width: 150 },
                            { name: 'LOSSOP_RI_SI_YN', index: 'LOSSOP_RI_SI_YN', hidden: false, width: 150 },
                            { name: 'LOSSO_RI_PREM_YN', index: 'LOSSO_RI_PREM_YN', hidden: false, width: 150 },
                            //
                            { name: 'LOSSOP_RATE_CHANGE', index: 'LOSSOP_RATE_CHANGE', width: 150 },
                            { name: 'LOSSOP_SI_CHANGE', index: 'LOSSOP_SI_CHANGE', width: 150 },
                            { name: 'LOSSOP_COVER_LEVEL', index: 'LOSSOP_COVER_LEVEL', width: 150 },
                            { name: 'LOSSOP_PREM_REFUND', index: 'LOSSOP_PREM_REFUND', width: 150 },
                            { name: 'LOSSOP_RI_YN', index: 'LOSSOP_RI_YN', width: 150 },
                            { name: 'LOSSOP_USER_PREM', index: 'LOSSOP_USER_PREM', width: 150 },
                            //
                            { name: 'LOSSOP_TXN_STATE', index: 'LOSSOP_TXN_STATE', width: 150 },
                            { name: 'LOSSOP_CRTE_BY', index: 'LOSSOP_CRTE_BY', width: 150 },
                            { name: 'LOSSOP_CRTE_DATE', index: 'LOSSOP_CRTE_DATE', width: 150 },
                            { name: 'LOSSOP_MOD_BY', index: 'LOSSOP_MOD_BY', width: 150 },
                            { name: 'LOSSOP_MOD_DATE', index: 'LOSSOP_MOD_DATE', width: 150 },
                            { name: 'LOSSOP_STATUS', index: 'LOSSOP_STATUS', width: 150 },
                        ],
                        //Retrive Grid data into form input fields on row click..
         function (sel_id) {
                            var grid = $scope.carlossop_grid;
                            var sel_id = grid.jqGrid('getGridParam', 'selrow');
                            $("form input[name='CARTPL_CODE']").data("update", true);
                            u.fill_form({
                                LOSSOP_CODE: grid.jqGrid('getCell', sel_id, 'LOSSOP_CODE'),
                                LOSSOP_NAME: grid.jqGrid('getCell', sel_id, 'LOSSOP_NAME'),
                                LOSSOP_TYPE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TYPE'),
                                LOSSOP_SI_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_FC'),
                                LOSSOP_SI_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_BC'),
                                LOSSOP_RATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE'),
                                LOSSOP_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_FC'),
                                LOSSOP_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_BC'),
                                LOSSOP_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_FC'),
                                LOSSOP_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_BC'),
                                LOSSOP_DISC_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_YN'),
                                LOSSOP_DISC_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_FC'),
                                LOSSOP_DISC_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_BC'),
                                LOSSOP_LOAD_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_YN'),
                                LOSSOP_LOAD_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_FC'),
                                LOSSOP_LOAD_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_BC'),
                                LOSSOP_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_ENG_SYS_ID'),
                                LOSSOP_RISK_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_RISK_NO'),
                                LOSSOP_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_POLH_DOC_NO'),
                                LOSSOP_END_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_END_NO'),
                                LOSSOP_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_SI_YN'),
                                LOSSO_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'LOSSO_RI_PREM_YN'),
                                LOSSOP_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE_CHANGE'),
                                LOSSOP_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_CHANGE'),
                                LOSSOP_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'LOSSOP_COVER_LEVEL'),
                                LOSSOP_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'LOSSOP_PREM_REFUND'),
                                LOSSOP_RI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_YN'),
                                LOSSOP_USER_PREM: grid.jqGrid('getCell', sel_id, 'LOSSOP_USER_PREM'),
                                LOSSOP_TXN_STATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TXN_STATE'),
                                LOSSOP_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_SYS_ID'),                                

                            }, "#cartplForm");
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
            },

            function (cov) {
                SumCoverAmounts();
            }

            );


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
                    $scope.lov.call_dialog("Select Insurance Source", "get_lov_insurance_source", $scope.dialog_data);
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
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_cover").on('click', function () {

            if (u.form_validation("#coverForm")) {

                if ($("input[name='RCOV_CODE']").val() === "") return u.modal_alert("Please Select Risk Cover");

                $("#RCOV_NO").val("");

                if ($("#RCOV_NO").val() == "") {
                    RetnSequenceNo("COVERS_SEQ", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#RCOV_NO").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Cover?", function () {

                    var rowIds = $scope.cover_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.cover_grid.jqGrid('getCell', currRow, 'RCOV_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("input[name='RCOV_CODE']").val(), Code) < 0) {

                        var FormData = u.parse_form("#coverForm");
                        FormData.RCOV_STATUS = "U";
                        FormData.RCOV_CRTE_BY = "Admin";
                        FormData.RCOV_CRTE_DATE = u.get_date();
                        $scope.cover_grid.addRowData(FormData.RCOV_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("Cover successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Cover with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
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

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("Cover grid is empty");

            if (u.form_validation("#coverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    var grid = $scope.cover_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "RCOV_NO");

                    if (code === $("input[name='RCOV_NO']").val()) {
                        var data = u.parse_form("#coverForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Risk Cover updated");
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



        /*--------------------------------------------------
 * Motor Risk modal dialog
 *------------------------------------------------*/
        //
        $("#btn_open_eng_risk").click(function () {
            var itemobj = $("#CVR_NAME").val();
            if (itemobj == "") {
                u.growl_warning("No Risk is not Selected");
            }
            else if (itemobj == "Erection All Risk") {
                $("#EARPeriodModal").modal('show');
            }
            else if (itemobj == "Contractor All Risk") {
                $("#ProIndemModal").modal('show');
            }
            else if (itemobj == "Other Engineering") {
                $("#otherEngModal").modal('show');
            }
            //$("#otherEngModal").modal();
        });


        $("#btn_risk_cover").click(function () {

            var grid = $scope.bond_grid;

            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'BOND_RISK_ID');

            if (RiskID == $("#BOND_RISK_ID").val()) {

                $("#RiskCoverModal").modal();
            }
            else {
                u.growl_warning("No Bond Risk selected, Please check and try again");
            };

        });




        $("#btn_open_ear").click(function () {

            var grid = $scope.earperiod_grid;

            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'PERIOD_SYS_ID');

            if (RiskID == $("#PERIOD_SYS_ID").val()) {

                $("#EARInterestModal").modal();

            }
            else {
                u.growl_warning("No EAR Period Risk selected, Please check and try again");
            };

        });


        /*--------------------------------------------------
          * Adding EAR Period Risk Details
          *------------------------------------------------*/
        //
        $("#btn_add_earperiod").on('click', function () {

            if (u.form_validation("#earperiodForm")) {

                if ($("#PERIOD_NAME").val() === "") return u.modal_alert("Please Enter Period Name");

                $("#PERIOD_SYS_ID").val("");

                if ($("#PERIOD_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#PERIOD_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Period Details?", function () {

                    var rowIds = $scope.earperiod_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.earperiod_grid.jqGrid('getCell', currRow, 'PERIOD_NAME');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#PERIOD_NAME').val(), Code) < 0) {

                        var FormData = u.parse_form("#earperiodForm");
                        FormData.PERIOD_STATUS = "U";
                        FormData.PERIOD_CRTE_BY = "Admin";
                        FormData.PERIOD_CRTE_DATE = u.get_date();
                        $scope.earperiod_grid.addRowData(FormData.PERIOD_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("EAR Period successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("BOND with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from EAR Period 
        *---------------------------------------------------*/
        //
        $("#btn_remove_earperiod").on('click', function () {

            if (u.grid_empty($scope.earperiod_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.earperiod_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'PERIOD_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'PERIOD_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'PERIOD_STATUS', 'D');
                    $('#' + row_id, '#gridEARPeriods').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridEARPeriods').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'BOND_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function EAR Period Details
        *------------------------------*/
        //
        $("#btn_update_earperiod").on('click', function () {

            if (u.grid_empty($scope.earperiod_grid)) return u.growl_info("EAR Period grid is empty");

            if (u.form_validation("#earperiodForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Period?", function () {

                    var grid = $scope.earperiod_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "PERIOD_SYS_ID");

                    if (code === $("#PERIOD_SYS_ID").val()) {
                        var data = u.parse_form("#earperiodForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("EAR Period Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel EAR Period
         *----------------------------------*/
        $("#export-earperiod-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.earperiod_grid, ["ID"], "EAR_Period_List_Excel");
        });



        /*--------------------------------------------------
          * Adding EAR Risk Details
          *------------------------------------------------*/
        //
        $("#btn_add_ear").on('click', function () {

            if (u.form_validation("#earinterestForm")) {

                if ($("#EAR_RISK_TYPE").val() === "") return u.modal_alert("Please Enter Period Name");

                $("#EAR_SYS_ID").val("");

                if ($("#EAR_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#EAR_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Details?", function () {

                    var rowIds = $scope.earinterest_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.earinterest_grid.jqGrid('getCell', currRow, 'EAR_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#EAR_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#earinterestForm");
                        FormData.EAR_STATUS = "U";
                        FormData.EAR_CRTE_BY = "Admin";
                        FormData.EAR_CRTE_DATE = u.get_date();
                        $scope.earinterest_grid.addRowData(FormData.EAR_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("EAR successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("EAR with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*----------------------------------------------------
      * Remove record or Mark for deletion from EAR Risk 
      *---------------------------------------------------*/
        //
        $("#btn_remove_ear").on('click', function () {

            if (u.grid_empty($scope.earinterest_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.earinterest_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'EAR_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'EAR_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'EAR_STATUS', 'D');
                    $('#' + row_id, '#gridEARInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridEARInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'BOND_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------
        * Edit/Update Function EAR Details
        *------------------------------*/
        //
        $("#btn_update_ear").on('click', function () {

            if (u.grid_empty($scope.earinterest_grid)) return u.growl_info("EAR Period grid is empty");

            if (u.form_validation("#earinterestForm")) {

                u.modal_confirmation("Are you sure you want to update the selected EAR?", function () {

                    var grid = $scope.earinterest_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EAR_SYS_ID");

                    if (code === $("#EAR_SYS_ID").val()) {
                        var data = u.parse_form("#earperiodForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("EAR Period Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*-----------------------------------
         * exporting of the grid to excel EAR Period
         *----------------------------------*/
        $("#export-ear-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.earinterest_grid, ["ID"], "EAR_List_Excel");
        });



        /*--------------------------------------------------
        * Adding EAR Contractor Plant Machinery Risk 
        *------------------------------------------------*/
        //
        $("#btn_add_earcpm").on('click', function () {

            if (u.form_validation("#earcpmForm")) {

                if ($("#EARCPM_RISK_TYPE").val() === "") return u.modal_alert("Please Enter EAR Contractor Plant Machinery");

                $("#EARCPM_SYS_ID").val("");

                if ($("#EARCPM_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#EARCPM_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Contractor Plant Machinery Details?", function () {

                    var rowIds = $scope.earcpm_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.earcpm_grid.jqGrid('getCell', currRow, 'EARCPM_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#EARCPM_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#earcpmForm");
                        FormData.EARCPM_STATUS = "U";
                        FormData.EEARCPM_CRTE_BY = "Admin";
                        FormData.EARCPM_CRTE_DATE = u.get_date();
                        $scope.earcpm_grid.addRowData(FormData.EARCPM_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("EAR Contractor Plant Machinery successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("EAR Contractor Plant Machinery  with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from EAR Contractor Plant Machinery 
        *---------------------------------------------------*/
        //
        $("#btn_remove_earcpm").on('click', function () {

            if (u.grid_empty($scope.earcpm_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.earcpm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'EARCPM_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'EARCPM_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'EARCPM_STATUS', 'D');
                    $('#' + row_id, '#gridEARCPMInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridEARCPMInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'EARCPM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------
        * Edit/Update Function EAR Contractor Plant Machinery
        *------------------------------*/
        //
        $("#btn_update_earcpm").on('click', function () {

            if (u.grid_empty($scope.earcpm_grid)) return u.growl_info("EAR Contractor Plant Machinery grid is empty");

            if (u.form_validation("#earcpmForm")) {

                u.modal_confirmation("Are you sure you want to update the selected EAR Contractor Plant Machinery?", function () {

                    var grid = $scope.earcpm_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EARCPM_SYS_ID");

                    if (code === $("#EARCPM_SYS_ID").val()) {
                        var data = u.parse_form("#earcpmForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("EAR Contractor Plant Machinery Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*-----------------------------------
       * exporting of the grid to excel EAR Contractor Plant Machinery
       *----------------------------------*/
        $("#export-earcpm-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.earcpm_grid, ["ID"], "EAR_CPM_List_Excel");
        });



        /*--------------------------------------------------
        * Adding EAR Third Party Loss Risk 
        *------------------------------------------------*/
        //
        $("#btn_add_eartpl").on('click', function () {

            if (u.form_validation("#eartplForm")) {

                if ($("#EARTPL_CODE").val() === "") return u.modal_alert("Please Enter EAR Third Party Loss");

                $("#EARTPL_SYS_ID").val("");

                if ($("#EARTPL_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#EARTPL_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Third Party Loss Details?", function () {

                    var rowIds = $scope.eartpl_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.eartpl_grid.jqGrid('getCell', currRow, 'EARTPL_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#EARTPL_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#eartplForm");
                        FormData.EARTPL_STATUS = "U";
                        FormData.EARTPL_CRTE_BY = "Admin";
                        FormData.EARTPL_CRTE_DATE = u.get_date();
                        $scope.eartpl_grid.addRowData(FormData.EARTPL_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("EAR Third Party Loss successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("EAR Third Party Loss  with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function EAR Third Party Loss
        *------------------------------*/
        //
        $("#btn_update_eartpl").on('click', function () {

            if (u.grid_empty($scope.eartpl_grid)) return u.growl_info("EAR Third Party Loss grid is empty");

            if (u.form_validation("#eartplForm")) {

                u.modal_confirmation("Are you sure you want to update the selected EAR Third Party Loss?", function () {

                    var grid = $scope.eartpl_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "EARTPL_SYS_ID");

                    if (code === $("#EARTPL_SYS_ID").val()) {
                        var data = u.parse_form("#eartplForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("EAR Third Party Loss Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from EAR Third Party Loss
        *---------------------------------------------------*/
        //
        $("#btn_remove_eartpl").on('click', function () {

            if (u.grid_empty($scope.eartpl_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.eartpl_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'EARTPL_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'EARTPL_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'EARTPL_STATUS', 'D');
                    $('#' + row_id, '#gridEARTPL').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridEARTPL').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'EARTPL_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel EAR Third Party Loss
        *----------------------------------*/
        $("#export-eartpl-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.eartpl_grid, ["ID"], "EAR_TPL_List_Excel");
        });



        /*--------------------------------------------------
          * Adding CAR Interest Risk Details
          *------------------------------------------------*/
        //
        $("#btn_add_car").on('click', function () {

            if (u.form_validation("#carinterestForm")) {

                if ($("#CAR_RISK_TYPE").val() === "") return u.modal_alert("Please Enter CAR risk type");

                $("#CAR_SYS_ID").val("");

                if ($("#CAR_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#CAR_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Period Details?", function () {

                    var rowIds = $scope.carinterest_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carinterest_grid.jqGrid('getCell', currRow, 'CAR_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CAR_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#carinterestForm");
                        FormData.CAR_STATUS = "U";
                        FormData.CAR_CRTE_BY = "Admin";
                        FormData.CAR_CRTE_DATE = u.get_date();
                        $scope.carinterest_grid.addRowData(FormData.CAR_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("CAR successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CAR with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function CAR Interest
        *------------------------------*/
        //
        $("#btn_update_car").on('click', function () {

            if (u.grid_empty($scope.carinterest_grid)) return u.growl_info("CAR Interest grid is empty");

            if (u.form_validation("#carinterestForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CAR Interest?", function () {

                    var grid = $scope.carinterest_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CAR_SYS_ID");

                    if (code === $("#CAR_SYS_ID").val()) {
                        var data = u.parse_form("#carinterestForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CAR Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from CAR Interest
        *---------------------------------------------------*/
        //
        $("#btn_remove_car").on('click', function () {

            if (u.grid_empty($scope.carinterest_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carinterest_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CAR_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CAR_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CAR_STATUS', 'D');
                    $('#' + row_id, '#gridCARInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CAR_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel CAR Interest
        *----------------------------------*/
        $("#export-car-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.carinterest_grid, ["ID"], "CAR_List_Excel");
        });



        /*--------------------------------------------------
        * Adding CPM Interest Risk Details
        *------------------------------------------------*/
        //
        $("#btn_add_cpm").on('click', function () {

            if (u.form_validation("#carcpmForm")) {

                if ($("#CPM_RISK_TYPE").val() === "") return u.modal_alert("Please Enter CPM risk type");

                $("#CPM_SYS_ID").val("");

                if ($("#CPM_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#CPM_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Period Details?", function () {

                    var rowIds = $scope.carcpm_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carcpm_grid.jqGrid('getCell', currRow, 'CPM_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CPM_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#carcpmForm");
                        FormData.CPM_STATUS = "U";
                        FormData.CPM_CRTE_BY = "Admin";
                        FormData.CPM_CRTE_DATE = u.get_date();
                        $scope.carcpm_grid.addRowData(FormData.CPM_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("CPM successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CPM with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function CPM Interest
        *------------------------------*/
        //
        $("#btn_update_cpm").on('click', function () {

            if (u.grid_empty($scope.carcpm_grid)) return u.growl_info("CPM Interest grid is empty");

            if (u.form_validation("#carcpmForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CPM Interest?", function () {

                    var grid = $scope.carcpm_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CPM_SYS_ID");

                    if (code === $("#CPM_SYS_ID").val()) {
                        var data = u.parse_form("#carcpmForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CPM Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from CPM Interest
        *---------------------------------------------------*/
        //
        $("#btn_remove_cpm").on('click', function () {

            if (u.grid_empty($scope.carcpm_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carcpm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CPM_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CPM_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'D');
                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel CPM Interest
        *----------------------------------*/
        $("#export-cpm-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.carcpm_grid, ["ID"], "CPM_List_Excel");
        });




        /*--------------------------------------------------
        * Adding CAR Third Party Loss Risk 
        *------------------------------------------------*/
        //
        $("#btn_add_cartpl").on('click', function () {

            if (u.form_validation("#cartplForm")) {

                if ($("#CARTPL_CODE").val() === "") return u.modal_alert("Please Enter CAR Third Party Loss");

                $("#CARTPL_SYS_ID").val("");

                if ($("#CARTPL_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#CARTPL_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the CAR Third Party Loss Details?", function () {

                    var rowIds = $scope.cartpl_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.cartpl_grid.jqGrid('getCell', currRow, 'CARTPL_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CARTPL_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#cartplForm");
                        FormData.CARTPL_STATUS = "U";
                        FormData.CARTPL_CRTE_BY = "Admin";
                        FormData.CARTPL_CRTE_DATE = u.get_date();
                        $scope.cartpl_grid.addRowData(FormData.CARTPL_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("CAR Third Party Loss successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CAR Third Party Loss  with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function EAR Third Party Loss
        *------------------------------*/
        //
        $("#btn_update_cartpl").on('click', function () {

            if (u.grid_empty($scope.cartpl_grid)) return u.growl_info("CAR Third Party Loss grid is empty");

            if (u.form_validation("#cartplForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CAR Third Party Loss?", function () {

                    var grid = $scope.cartpl_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CARTPL_SYS_ID");

                    if (code === $("#CARTPL_SYS_ID").val()) {
                        var data = u.parse_form("#cartplForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CAR Third Party Loss Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from CAR Third Party Loss
        *---------------------------------------------------*/
        //
        $("#btn_remove_cartpl").on('click', function () {

            if (u.grid_empty($scope.cartpl_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cartpl_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CARTPL_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CARTPL_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CARTPL_STATUS', 'D');
                    $('#' + row_id, '#gridCARTPL').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARTPL').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'EARTPL_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel EAR Third Party Loss
        *----------------------------------*/
        $("#export-cartpl-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cartpl_grid, ["ID"], "CAR_TPL_List_Excel");
        });



        /*--------------------------------------------------
        * Adding CAR Loss of Profit Risk 
        *------------------------------------------------*/
        //
        $("#btn_add_carlossop").on('click', function () {

            if (u.form_validation("#carlossopForm")) {

                if ($("#LOSSOP_CODE").val() === "") return u.modal_alert("Please Enter CAR Loss of Profit");

                $("#LOSSOP_SYS_ID").val("");

                if ($("#LOSSOP_SYS_ID").val() == "") {
                    RetnSequenceNo("SEQ_BONDS", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#LOSSOP_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the CAR Loss of Profit Details?", function () {

                    var rowIds = $scope.carlossop_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carlossop_grid.jqGrid('getCell', currRow, 'LOSSOP_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#LOSSOP_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#carlossopForm");
                        FormData.LOSSOP_STATUS = "U";
                        FormData.LOSSOP_CRTE_BY = "Admin";
                        FormData.LOSSOP_CRTE_DATE = u.get_date();
                        $scope.carlossop_grid.addRowData(FormData.CARTPL_CODE, FormData);
                        u.hide_confirm();
                        u.growl_success("CAR Loss of Profit successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CAR Loss of Profit  with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function CAR Loss of Profit
        *------------------------------*/
        //
        $("#btn_update_carlossop").on('click', function () {

            if (u.grid_empty($scope.carlossop_grid)) return u.growl_info("CAR Loss of Profit grid is empty");

            if (u.form_validation("#carlossopForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CAR Loss of Profit?", function () {

                    var grid = $scope.carlossop_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "LOSSOP_SYS_ID");

                    if (code === $("#LOSSOP_SYS_ID").val()) {
                        var data = u.parse_form("#carlossopForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CAR Loss of Profit Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from CAR Loss of Profit
        *---------------------------------------------------*/
        //
        $("#btn_remove_carlossop").on('click', function () {

            if (u.grid_empty($scope.carlossop_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carlossop_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'LOSSOP_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'LOSSOP_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'LOSSOP_STATUS', 'D');
                    $('#' + row_id, '#gridCARLOSSOP').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARLOSSOP').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'LOSSOP_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel CAR Loss of Profit
        *----------------------------------*/
        $("#export-lossop-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.carlossop_grid, ["ID"], "CAR_LOP_List_Excel");
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

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            if (u.grid_empty($scope.bond_grid)) {
                return u.growl_warning("Please add Bond Details");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var polhData = u.parse_form("#polheaderForm");
                if (!$scope.searched) {
                    polhData.POLH_STATUS = polhData.POLH_STATUS !== null ? polhData.POLH_STATUS : "U";
                    polhData.POLH_CRTE_BY = polhData.POLH_CRTE_BY !== null ? polhData.POLH_CRTE_BY : "Admin";
                    polhData.POLH_CRTE_DATE = polhData.POLH_CRTE_DATE !== null ? polhData.POLH_CRTE_DATE : u.get_date();
                }

                polhData.INS_UWD_RISK_COVERS = u.get_grid_data($scope.cover_grid);

                polhData.INS_UDW_BONDS = u.get_grid_data($scope.bond_grid);

                console.log(polhData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_bond(polhData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                            var bondRowIds = $scope.bond_grid.jqGrid("getDataIDs");
                            var covRecStatus;
                            /*---------------------------------
                             * update motor row status
                             *-------------------------------*/
                            for (var i = 0; i < bondRowIds.length; i++) {
                                covRecStatus = $scope.bond_grid.jqGrid("getCell", bondRowIds[i], "BOND_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.bond_grid.jqGrid("delRowData", bondRowIds[i]);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.bond_grid.jqGrid("setCell", bondRowIds[i], "BOND_STATUS", "A");
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
                        s.save_motor(policy_data,
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
                u.form_reset("#bondForm");
                $scope.cover_grid.jqGrid('clearGridData');
                $scope.bond_grid.jqGrid('clearGridData');
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
                s.search_bond(query, function (result) {
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
            $scope.bond_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");

            u.fill_form(policy, "#polheaderForm");

            u.clear_grid_data($scope.bond_grid);
            for (var i in policy.INS_UDW_BONDS) {
                $scope.bond_grid.addRowData(policy.INS_UDW_BONDS[i].BOND_POLH_SYS_ID, policy.INS_UDW_BONDS[i]);
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
        u.set_datepicker("input[name='ENG_START_DATE']");
        u.set_datepicker("input[name='ENG_END_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");
        u.set_datepicker("input[name='PERIOD_START_DATE']");
        u.set_datepicker("input[name='PERIOD_END_DATE']");


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
* //Risk Cover Rate Calculation
*---------------------------*/

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
            $("#ENG_START_DATE").val(SDate);
            $("#ENG_END_DATE").val(EDate);

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
                $("#POLH_POL_END_DATE").val('');
                $("#POLH_POL_DAYS").val('');
                // 
                $("#ENG_END_DATE").val('');
                $("#BOND_PERIOD_DAYS").val('');
            }
            else {

            }
        }

        //---//Risk period days
        document.getElementById("ENG_START_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        document.getElementById("ENG_END_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        function fxnRiskPeriodDays() {
            //alert("Input field lost focus.");
            var polStartDate = new Date($("#POLH_POL_START_DATE").val());
            var PolEndDate = new Date($("#POLH_POL_END_DATE").val());

            var riskStartDate = new Date($("#ENG_START_DATE").val());
            var riskEndDate = new Date($("#ENG_END_DATE").val());

            var riskPeriodDays = u.get_dateDifference(riskStartDate, riskEndDate);

            if (u.get_dateDifference(polStartDate, riskStartDate) < 0) {
                u.growl_warning("Risk Start date cannot be less than Policy start date");
            }
            else if (u.get_dateDifference(PolEndDate, riskEndDate) > 0) {
                u.growl_warning("Risk End date cannot be greater than Policy End date");
            }
            else {

                if (riskPeriodDays > 0) {
                    $("#ENG_MAIN_DAYS").val(riskPeriodDays);
                }
            }


            if ((riskPeriodDays <= 0)) {
                u.growl_warning("Risk End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#ENG_START_DATE").val('');
                $("#ENG_END_DATE").val('');

            }
            else if ((riskPeriodDays > 365)) {
                u.growl_warning("Risk period cannot be greater than 365 days, please check and try again");
            }


            // alert(diffDays(StartDate, EndDate));
        }


        document.getElementById("PERIOD_START_DATE").addEventListener("focusout", fxnPeriodDays);
        document.getElementById("PERIOD_END_DATE").addEventListener("focusout", fxnPeriodDays);


        function fxnPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#PERIOD_START_DATE").val();
            var EDate = $("#PERIOD_END_DATE").val();

            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var polPeriodDays = u.get_dateDifference(StartDate, EndDate);

            if (polPeriodDays > 0) {
                $("#PERIOD_DAYS").val(polPeriodDays);             
            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Period End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#PERIOD_END_DATE").val('');
                $("#PERIOD_DAYS").val('');
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

                var vehID = $("#BOND_RISK_ID").val();

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

            //grid.jqGrid('footerData', 'set', { 'RCOV_SI_FC': SumSIFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_SI_BC': SumSIBC.toFixed(2) });

            //grid.jqGrid('footerData', 'set', { 'RCOV_GROSS_PREM_FC': SumGrossPremFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_GROSS_PREM_BC': SumGrossPremBC.toFixed(2) });

            //grid.jqGrid('footerData', 'set', { 'RCOV_NET_PREM_FC': SumNetPremFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_NET_PREM_BC': SumNetPremBC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_LOAD_FC': SumLoadFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_LOAD_BC': SumLoadBC.toFixed(2) });

            grid.jqGrid('footerData', 'set', { 'RCOV_DISC_FC': SumDisFC.toFixed(2) });
            grid.jqGrid('footerData', 'set', { 'RCOV_DISC_BC': SumDisBC.toFixed(2) });


            // set risk SI and Premiums vlues,

            var Riskgrid = $scope.bond_grid;

            var RiskRow_id = Riskgrid.jqGrid('getGridParam', 'selrow');

            var riskID = Riskgrid.jqGrid('getCell', RiskRow_id, 'BOND_RISK_ID');

            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_TOT_PREM_FC', SumGrossPremFC.toFixed(2));
            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_TOT_PREM_BC', SumGrossPremBC.toFixed(2));

            //Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_SI_FC', SumSIFC.toFixed(2));
            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_SI_BC', SumSIBC.toFixed(2));

            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_LOAD_FC', SumLoadFC.toFixed(2));
            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_LOAD_BC', SumLoadBC.toFixed(2));

            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_DISC_FC', SumDisFC.toFixed(2));
            Riskgrid.jqGrid('setCell', RiskRow_id, 'BOND_DISC_BC', SumDisBC.toFixed(2));

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
            var polgrid = $scope.bond_grid;

            var polrowIds = polgrid.jqGrid('getDataIDs');


            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = polrowIds.length; i < len; i++) {

                var currRow = polrowIds[i];

                // Sum risk level Amounts for Policy Level Amounts

                polSIFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_SI_FC'));
                polSIBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_SI_BC'));

                polGrossPremFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_TOT_PREM_FC'));
                polGrossPremBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_TOT_PREM_BC'));

                polLoadFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_LOAD_FC'));
                polLoadBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_LOAD_BC'));

                polDisFC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_DISC_FC'));
                polDisBC += parseFloat(polgrid.jqGrid('getCell', currRow, 'BOND_DISC_BC'));

            }

            $('#POLH_POL_SI_FC').val(polSIBC);
            $('#POLH_POL_SI_BC').val(polSIBC);

            $('#POLH_POL_PREM_FC').val(polGrossPremBC);
            $('#POLH_POL_PREM_BC').val(polGrossPremBC);
            //
            $('#POLH_POL_LOAD_FC').val(polLoadFC);
            $('#POLH_POL_LOAD_BC').val(polLoadBC);

            $('#POLH_POL_DISC_FC').val(polDisFC);
            $('#POLH_POL_DISC_BC').val(polDisBC);

        };



    });

})(window.$, window.service, window.utility, {})