(function (s, u) {
    s.add({
        save_custcats: function (cuscat, success, error) {
            u.post("/api/customercategory/save", cuscat, success, error);
        },
        get_custcats: function (success, error) {
            u.get("/api/customercategory", success, error);
        },
        search_custcat: function (query, success, error) {
            u.get("/api/customercategory/search/" + query, success, error);
        },
        get_custcat_lov: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
        check_customer_code: function (code, success, error) {
            u.get("/api/customercategory/check/" + code, success, error);
        },

        chceck_main_acct_code: function(code, success, error) {
            u.get("/api/MainAccount/checkCode/" + code, success, error);
        },
        get_lov_main_acct: function (success, error) {
            u.get("/api/mainaccount/lov", success, error);
        },
        chceck_sub_acct_code: function(code, success, error) {
            u.get("/api/SubAccount/checkCode/" + code, success, error);
        },
        get_lov_sub_acct: function (success, error) {
            u.get("/api/SubAccount/lov", success, error);
        },
    });
})(window.service, window.utility)