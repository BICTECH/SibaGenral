(function (s, u) {
    s.add({      
        save_motortariff: function (premiumtariffs, success, error) {
            u.post("/api/motortariff/save", premiumtariffs, success, error);
        },
        search_motortariff: function (query, success, error) {
            u.get("/api/motortariff/search/" + query, success, error);
        },
        get_lov_covers: function (success, error) {
            u.get("/api/cover/lov", success, error);
        },
        get_lov_products: function (success, error) {
            u.get("/api/product/lov", success, error);
        },
        get_lov_motor_risks: function (success, error) {
            u.get("/api/motorrisk/lov", success, error);
        },
        check_motor_risk: function (code, success, error) {
            u.get("/api/motorrisk/check/" + code, success, error);
        },
        check_tariff_class: function (code, success, error) {
            u.get("/api/motortariff/check/" + code, success, error);
        },
        check_cover_code: function (code, success, error) {
            u.get("/api/cover/check/" + code, success, error);
        }

    });
})(window.service, window.utility)