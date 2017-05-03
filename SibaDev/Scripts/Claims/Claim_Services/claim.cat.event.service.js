(function (s, u) {
    s.add({
        save_cat: function (cats, success, error) {
            u.post("/api/ClaimCatastropicEvent/save", cats, success, error);
        },
        get_cats: function (success, error) {
            u.get("/api/ClaimCatastropicEvent", success, error);
        },
        search_cat: function (query, success, error) {
            u.get("/api/ClaimCatastropicEvent/search/" + query, success, error);
        },
        check_cat_code: function (code, success, error) {
            u.get("/api/ClaimCatastropicEvent/check/" + code, success, error);
        }
    });
})(window.service, window.utility)