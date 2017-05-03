(function (s, u) {
    s.add({
        save_estimation: function (estimations, success, error) {
            u.post("/api/ClaimEstimationTravel/save", estimations, success, error);
        },
        get_estimations: function (success, error) {
            u.get("/api/ClaimEstimationTravel", success, error);
        },
        search_estimation: function (query, success, error) {
            u.get("/api/ClaimEstimationTravel/search/" + query, success, error);
        },
        search_policys_est: function (query, success, error) {
            u.get("/api/policytravel/searchest/" + query, success, error);
        },
        get_policys_est: function (success, error) {
            u.get("/api/policytravel", success, error);
        },
        get_office_lov: function (success, error) {
            u.get("/api/office/lov", success, error);
        },
       
        get_polh_lov: function (success, error) {
            u.get("/api/policytravel/lov", success, error);
        },
        getRisksLOV: function (data, success, error) {
            u.post("/api/policytravel/clmrisk", data, success, error);
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