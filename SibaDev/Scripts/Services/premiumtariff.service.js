(function (s, u) {
    s.add({
        save_premiumtariffs: function (premiumtariffs, success, error) {
            u.post("/api/premiumtariff/save", premiumtariffs, success, error);
        },
        save_motortariff: function (premiumtariffs, success, error) {
            u.post("/api/motortariff/save", premiumtariffs, success, error);
        },
        get_premiumtariffs: function (success, error) {
            u.get("/api/premiumtariff", success, error);
        },
        get_premiumtariff: function (query, success, error) {
            u.get("/api/premiumtariff/" + query, success, error);
        },
        getRiskTarrifs: function (code,success,error) {
            u.get("/api/PremiumTariff/tarrifs/" + code, success, error); s;
        },
        search_premiumtariff: function (query, success, error) {
            u.get("/api/premiumtariff/search/" + query, success, error);
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
        check_cover_code: function (code, success, error) {
            u.get("/api/cover/check/" + code, success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        },
        check_motorrisk_code: function (code, success, error) {
            u.get("/api/motorrisk/check/" + code, success, error);
        }

    });
})(window.service, window.utility)