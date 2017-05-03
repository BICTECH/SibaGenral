(function (s, u) {
    s.add({
        save_customers: function (customers, success, error) {
            u.post("/api/customer/save", customers, success, error);
        },
        get_customers: function (success, error) {
            u.get("/api/customer", success, error);
        },
        search_customer: function (query, success, error) {
            u.get("/api/customer/search/" + query, success, error);
        },
        get_lov_customertypes: function (success, error) {
            u.get("/api/customertypes/lov", success, error);
        },
        check_customer_code: function (code, success, error) {
            u.get("/api/customer/check/" + code, success, error);
        },
        check_customertype_code: function (code, success, error) {
            u.get("/api/customertypes/check/" + code, success, error);
        },
    });
})(window.service, window.utility)