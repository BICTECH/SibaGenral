(function (s, u) {
    s.add({
        save_fireeqzones: function (fireeqzones, success, error) {
            u.post("/api/fireeqzone/save", fireeqzones, success, error);
        },
        get_fireeqzones: function (success, error) {
            u.get("/api/fireeqzone", success, error);
        },
        search_fireeqzone: function (query, success, error) {
            u.get("/api/fireeqzone/search/" + query, success, error);
        },
        check_fireeqzone_code: function (code, success, error) {
            u.get("/api/fireeqzone/check/" + code, success, error);
        }
    });
})(window.service, window.utility)