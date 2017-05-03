(function (s, u) {
    s.add({
        save_travel_tariff: function (classbusinesses, success, error) {
            u.post("/api/traveltariff/save", classbusinesses, success, error)
        },
        get_travel_tariffs: function (success, error) {
            u.get("/api/traveltariff", success, error)
        },
        search_travel_tariff: function (query, success, error) {
            u.get("/api/traveltariff/search/" + query, success, error);
        },
        check_travel_tariff_code: function (code, success, error) {
            u.get("/api/traveltariff/check/" + code, success, error);
        },
        get_product: function (success, error) {
             u.get("/api/product/lov", success, error);
        },
    })
})(window.service, window.utility)