(function (s, u) {
    s.add({
        saveAcctCategory: function (txnTyepes, success, error) {
            u.post("/api/AcctCategory/Save", txnTyepes, success, error);
        },
        getAcctCategory: function (success, error) {
            u.get("/api/AcctCategory", success, error);
        },
        getAcctCategoryLov: function(success,error) {
            u.get("/api/AcctCategory/lov", success, error);
        },
        searchAcctCategory: function (query, success, error) {
            u.get("/api/AcctCategory/search/" + query, success, error);
        },
        checkAcctCategoryCode: function (code, success, error) {
            u.get("/api/AcctCategory/check/" + code, success, error);
        }
    })
})(window.service, window.utility)