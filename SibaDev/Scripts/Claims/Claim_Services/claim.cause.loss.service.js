(function (s, u) {
    s.add({
        save_loss: function (losses, success, error) {
            u.post("/api/ClaimCauseLoss/save", losses, success, error);
        },
        get_losses: function (success, error) {
            u.get("/api/ClaimCauseLoss", success, error);
        },
        search_loss: function (query, success, error) {
            u.get("/api/ClaimCauseLoss/search/" + query, success, error);
        },
        check_cat_code: function (code, success, error) {
            u.get("/api/ClaimCauseLoss/check/" + code, success, error);
        }
    });
})(window.service, window.utility)