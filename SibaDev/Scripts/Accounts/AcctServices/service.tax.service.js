(function (u, s) {
    s.add({
        getServiceTax: function (code, success, error) {
            u.get("/api/ServiceTax/" + code, success, error);
        },
        getServiceTaxs: function (success, error) {
            u.get("/api/ServiceTax", success, error);
        },
        getServiceTaxLov: function (success, error) {
            u.get("/api/ServiceTax/lov", success, error);
        },
        saveServiceTax: function (origins, success, error) {
            u.post("/api/ServiceTax/save", origins, success, error);
        },
        searchServiceTax: function (query, success, error) {
            u.get("/api/ServiceTax/search/" + query, success, error);
        },
        checkServiceTaxCode: function (code, success, error) {
            u.get("/api/ServiceTax/check/" + code, success, error);
        },
        checkServiceTaxLovCode: function (code, success, error) {
            u.get("/api/ServiceTax/check/" + code, success, error);
        }
    });
})(window.utility, window.service)