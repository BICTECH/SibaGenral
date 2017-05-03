(function (s, u) {
    s.add({
        save_conditionclauses: function (conditionclauses, success, error) {
            u.post("/api/conditionsclauses/save", conditionclauses, success, error);
        },
        get_conditionclauses: function (success, error) {
            u.get("/api/conditionsclauses", success, error);
        },
        search_conditionclause: function (query, success, error) {
            u.get("/api/conditionsclauses/search/" + query, success, error);
        },
        check_conditionsclause_code: function (code, success, error) {
            u.get("/api/conditionsclauses/check/" + code, success, error);
        }
    });
})(window.service, window.utility)