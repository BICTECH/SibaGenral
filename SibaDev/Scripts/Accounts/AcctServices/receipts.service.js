(function (s, u) {
    s.add({
        getReceipt: function(code, success, error) {
            u.get("/api/Receipts/" + code, success, error);
        },
        getReceipts: function(success, error) {
            u.get("/api/Receipts", success, error);
        },
        getReceiptLov: function(success, error) {
            u.get("/api/Receipts/lov", success, error);
        },
        saveReceipt: function(txnDoc, success, error) {
            u.post("/api/Receipts/save", txnDoc, success, error);
        },
        searchReceipt: function(query, success, error) {
            u.get("/api/Receipts/search/" + query, success, error);
        },
        checkReceiptCode: function(code, success, error) {
            u.get("/api/Receipts/check/" + code, success, error);
        },
        receiptTransaction: function(log, success, error) {
            u.post("/api/receipts/transaction", log, success, error);
        },
        customerMainAccoountsLov: function(success, error) {
            u.get("/api/receipts/CustomerMainAccountsLov", success, error);
        },
        mainAccountCustomerLov: function(obj, success, error) {
            u.get("/api/receipts/MainAccountCustomersLov/" + obj.mainActAcode + "/" + obj.query, success, error);
        },
        customerOpenEntries: function(custCode,success,error) {
            u.get("/api/openentry/customerentries/" + custCode, success, error);
        },
        matchedOpenEntryDetails: function (txnSysId, success, error) {
            u.get("/api/openentry/MatchedOpenEntryDetails/" + txnSysId, success, error);
    }
    });
})(window.service, window.utility);