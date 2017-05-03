(function (s, u) {
    s.add({
        saveInsAcctTxn: function(txnTyepes, success, error) {
            u.post("/api/InsAcctTxn/Save", txnTyepes, success, error);
        },
        getInsAcctTxns: function(success, error) {
            u.get("/api/InsAcctTxn", success, error);
        },
        searchInsAcctTxn: function(query, success, error) {
            u.get("/api/InsAcctTxn/search/" + query, success, error);
        },
        getInsAcctTxnLov: function(success, error) {
            u.get("/api/InsAcctTxn/lov", success, error);
        }
    });
})(window.service, window.utility)