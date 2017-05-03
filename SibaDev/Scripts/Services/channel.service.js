(function (s, u) {
    s.add({
        save_channel: function (classbusinesses, success, error) {
            u.post("/api/channel/save", classbusinesses, success, error)
        },
        get_channels: function (success, error) {
            u.get("/api/channel", success, error)
        },
        search_channel: function (query, success, error) {
            u.get("/api/channel/search/" + query, success, error);
        },
        check_channel_code: function (code, success, error) {
            u.get("/api/channel/check/" + code, success, error);
        }
    })
})(window.service, window.utility)