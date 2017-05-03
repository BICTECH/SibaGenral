(function (s, u) {
    s.add({
        save_productfees: function (productfees, success, error) {
            u.post("/api/productriskfee/save", productfees, success, error)
        },
        get_productfees: function (success, error) {
            u.get("/api/productriskfee", success, error)
        },
        search_productfee: function (query, success, error) {
            u.get("/api/productriskfee/search/" + query, success, error);
        },
        check_risk_fee_code: function (code, success, error) {
            u.get("/api/productriskfee/check/" + code, success, error)
        },
        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error)
        },
        check_comp_code: function (code, success, error) {
            u.get("/api/compulsoryfee/check/" + code, success, error)
        },
        get_lov_product: function (success, error) {
            u.get("/api/product/lov", success, error);
        },
        get_lov_compulsory_fee: function (success, error) {
            u.get("/api/compulsoryfee/lov", success, error);
        },
    })
})(window.service, window.utility)