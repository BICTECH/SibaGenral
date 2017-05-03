(function (s, u) {
    s.add({
        saveAcctIntegration: function(txnTyepes, success, error) {
            u.post("/api/AcctIntegration/Save", txnTyepes, success, error);
        },
        getAcctIntegrations: function(success, error) {
            u.get("/api/AcctIntegration", success, error);
        },

        getLovMainAcct: function(success, error) {
            u.get("/api/MainAccount/lov", success, error);
        },

        getLovSubAcct: function(success, error) {
            u.get("/api/SubAccount/lov", success, error);
        },

        searchAcctIntegration: function(query, success, error) {
            u.get("/api/AcctIntegration/search/" + query, success, error);
        }

        

    });
})(window.service, window.utility)