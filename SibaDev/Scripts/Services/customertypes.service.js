(function (s, u) {
    s.add({
        save_customertypes: function (customertypes, success, error) {
            u.post("/api/customertypes/save", customertypes, success, error);
        },
        get_customertypes: function (success, error) {
            u.get("/api/customertypes", success, error);
        },
        get_customer_type_lov: function(success,error) {
            u.get("/api/customertypes/lov", success, error);
        },
        search_customertype: function (query, success, error) {
            u.get("/api/customertypes/search/" + query, success, error);
        },
        check_customertypes_code: function (code, success, error) {
            u.get("/api/customertypes/check/" + code, success, error);
        },
         get_custcat_lov: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
         },
         check_custcat_code: function (code, success, error) {
             u.get("/api/customercategory/check/" + code, success, error);
         },
    });
})(window.service, window.utility)