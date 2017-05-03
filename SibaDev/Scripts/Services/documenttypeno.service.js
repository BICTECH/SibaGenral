(function (s, u) {
    s.add({
        save_documenttypenos: function (documenttypenos, success, error) {
            u.post("/api/acceptancetype/save", documenttypenos, success, error);
        },
        get_documenttypenos: function (success, error) {
            u.get("/api/acceptancetype", success, error);
        },
        search_documenttypeno: function (query, success, error) {
            u.get("/api/acceptancetype/search/" + query, success, error);
        }
    });
})(window.service, window.utility)