(function (s, u) {
    s.add({
        save_motorrisks: function (motorrisks, success, error) {
            u.post("/api/motorrisk/save", motorrisks, success, error);
        },
        get_motorrisks: function (success, error) {
            u.get("/api/motorrisk", success, error);
        },
        search_motorrisk: function (query, success, error) {
            u.get("/api/motorrisk/search/" + query, success, error);
        },
        check_motorrisk_code: function (code, success, error) {
            u.get("/api/motorrisk/check/" + code, success, error);
        }
    });
})(window.service, window.utility)