(function (s, u) {
    s.add({
        save_estimation: function (estimations, success, error) {
            u.post("/api/ClaimEstimationFire/save", estimations, success, error);
        },
        get_estimations: function (success, error) {
            u.get("/api/ClaimEstimationFire", success, error);
        },
        search_estimation: function (query, success, error) {
            u.get("/api/ClaimEstimationFire/search/" + query, success, error);
        },
        search_policys_est: function (query, success, error) {
            u.get("/api/policyfire/searchest/" + query, success, error);
        },
        get_policys_est: function (success, error) {
            u.get("/api/policyfire", success, error);
        },
        get_office_lov: function (success, error) {
            u.get("/api/office/lov", success, error);
        }, 
        get_polh_lov: function (success, error) {
            u.get("/api/policyfire/lov", success, error);
        },
        getRisksLOV: function (data, success, error) {
            u.post("/api/policyfire/clmrisk", data, success, error);
        },
        getClientsLOV: function (data, success, error) {
            u.post("/api/customer/estclient", data, success, error);
        },
        get_expense_lov: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
        get_catastrophy_lov: function (success, error) {
            u.get("/api/ClaimCatastropicEvent/lov", success, error);
        },
        get_loss_lov: function (success, error) {
            u.get("/api/ClaimCauseLoss/lov", success, error);
        },
        get_estimation_lov: function (success, error) {
            u.get("/api/ClaimEstimationType/lov", success, error);
        },

        check_estimation_code: function (code, success, error) {
            u.get("/api/ClaimEstimationType/check/" + code, success, error);
        },
        check_loss_code: function (code, success, error) {
            u.get("/api/ClaimCauseLoss/check/" + code, success, error);
        },
        check_cat_code: function (code, success, error) {
            u.get("/api/ClaimCatastropicEvent/check/" + code, success, error);
        },
        check_cover_code: function (code, success, error) {
            u.get("/api/cover/check/" + code, success, error);
        },
        check_expense_code: function (code, success, error) {
            u.get("/api/customercategory/check/" + code, success, error);
        },
        check_office_code: function (code, success, error) {
            u.get("/api/office/check/" + code, success, error);
        },
        check_polh_lov: function (code, success, error) {
            u.get("/api/policymotor/check/" + code, success, error);
        },
        check_cust_code: function (code, success, error) {
            u.get("/api/customer/check/" + code, success, error);
        },
    });
})(window.service, window.utility)