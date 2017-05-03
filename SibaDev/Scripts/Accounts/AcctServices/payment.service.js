(function (s, u) {
    s.add({
        getPayment: function(code, success, error) {
            u.get("/api/Payment/" + code, success, error);
        },
        getPayments: function(success, error) {
            u.get("/api/Payment", success, error);
        },
        getPaymentLov: function(success, error) {
            u.get("/api/Payment/lov", success, error);
        },
        savePayment: function(payment, success, error) {
            u.post("/api/Payment/save", payment, success, error);
        },
        searchPayment: function(query, success, error) {
            u.get("/api/Payment/search/" + query, success, error);
        },
        checkPaymentCode: function(code, success, error) {
            u.get("/api/Payment/check/" + code, success, error);
        },
        paymentTransaction: function(log, success, error) {
            u.post("/api/Payment/transaction", log, success, error);
        }
    });
})(window.service, window.utility);