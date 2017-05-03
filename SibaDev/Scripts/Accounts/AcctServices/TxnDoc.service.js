(function (s, u) {
    s.add({
        getTxnDoc: function(code,success,error) {
            u.get("/api/AcctTxnDocument/" + code, success, error);
        },
        getTxnDocs: function(success,error) {
            u.get("/api/AcctTxnDocument", success, error);
        },
        getTxnDocLov: function(success,error) {
            u.get("/api/AcctTxnDocument/lov", success, error);
        },
        saveTxnDoc: function(txnDoc,success,error) {
            u.post("/api/AcctTxnDocument/save", txnDoc, success, error);
        },
        searchTxnDoc: function(query,success,error) {
            u.get("/api/AcctTxnDocument/search/" + query, success, error);
        },
        checkTxnDocCode: function(code,success,error) {
            u.get("/api/AcctTxnDocument/check/" + code, success, error);
        }
    })
})(window.service, window.utility);