(function (s, u) {
    s.add({
        save_discountloadings: function (countries, success, error) {
            u.post("/api/discountloading/save", countries, success, error);
        },
        get_discountloadings: function (success, error) {
            u.get("/api/discountloading", success, error);
        },
        search_discountloading: function (query, success, error) {
            u.get("/api/discountloading/search/" + query, success, error);
        },
        check_discountloading_code: function (code, success, error) {
            u.get("/api/discountloading/check/" + code, success, error);
        },
        discountloadingList: function (success, error) {
            u.get("/api/discountloading/discLoadList", success, error);
        }

        
    });
})(window.service, window.utility)