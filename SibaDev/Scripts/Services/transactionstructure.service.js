(function (s, u) {
    s.add({
        save_transactionstructures: function (transactionstructures, success, error) {
            u.post("/api/transactionstructure/save", transactionstructures, success, error);
        },
        get_transactionstructures: function (success, error) {
            u.get("/api/transactionstructure", success, error);
        },
        search_transactionstructure: function (query, success, error) {
            u.get("/api/transactionstructure/search/" + query, success, error);
        }
    });
})(window.service, window.utility)