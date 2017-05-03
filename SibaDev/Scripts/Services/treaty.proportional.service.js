(function (s, u) {
    s.add({
        save_treatyprop: function (premiumtariffs, success, error) {
            u.post("/api/treatyproportional/save", premiumtariffs, success, error);
        },
        get_treatygroups: function (success, error) {
            u.get("/api/treatyproportional", success, error);
        },
        search_treaty: function (query, success, error) {
            u.get("/api/treatyproportional/search/" + query, success, error);
        },
        search_treatygrp: function (query, success, error) {
            u.get("/api/treatygroup/search/" + query, success, error);
        },
        get_treatygrps: function (success, error) {
            u.get("/api/treatygroup", success, error);
        },
        get_lov_treatygroup: function (success, error) {
            u.get("/api/treatygroup/lov", success, error);
        },
        get_lov_currency: function (success, error) {
            u.get("/api/exchangerate/lov", success, error);
        },
        get_lov_product: function (success, error) {
            u.get("/api/product/lov", success, error);
        },
        get_lov_company: function (success, error) {
            u.get("/api/company/lov", success, error);
        },
        check_treaty_code: function (code, success, error) {
            u.get("/api/treatyproportional/check/" + code, success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/treatygroup/check/" + code, success, error);
        },
        getProdtRisk: function (data, success, error) {
            u.post("/api/treatygroup/treatysubclass", data, success, error);
        },
        check_exrates_code: function (code, success, error) {
            u.get("/api/exchangerate/check/" + code, success, error);
        }

    });
})(window.service, window.utility)