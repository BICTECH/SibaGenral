(function (s, u) {
    s.add({
        savePaymentModes: function(paymentModes, success, error) {
            u.post("/api/PaymentMode/save", paymentModes, success, error);
        },
        getPaymentModes: function(success, error) {
            u.get("/api/PaymentMode", success, error);
        },
        getPaymentMode: function(code, success, error) {
            u.get("/api/PaymentMode/" + code, success, error);
        },
        searchPaymentModes: function(query, success, error) {
            u.get("/api/PaymentMode/search/" + query, success, error);
        },
        getPaymentModeLov: function(success, error) {
            u.get("/api/PaymentMode/lov", success, error);
        },
        checkPaymentModeLovCode: function(code, success, error) {
            u.get("/api/PaymentMode/check/" + code, success, error);
        },
        checkPaymentModeCode: function(code, success, error) {
            u.get("/api/PaymentMode/check/" + code, success, error);
        }
    });
})(window.service, window.utility)