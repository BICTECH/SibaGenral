(function (s, u) {
    s.add({
     
        get_lov_endorsements: function (success, error) {
            u.get("/api/Endorsements/lov", success, error);
        },
        //---------------
        save_types: function (types, success, error) {
            u.post("/api/TypeEndorse/save", types, success, error);
        },
        get_types: function (success, error) {
            u.get("/api/TypeEndorse", success, error);
        },
        search_types: function (query, success, error) {
            u.get("/api/TypeEndorse/search/" + query, success, error);
        },
        get_type_lov: function (success, error) {
            u.get("/api/TypeEndorse/lov", success, error);
        },
        check_type_lov_code: function (code, success, error) {
            u.get("/api/TypeEndorse/check/" + code, success, error);
        },
        check_type_code: function (code, success, error) {
            u.get("/api/TypeEndorse/check/" + code, success, error);
        },
        //------------------
        save_endorsements: function (endorsetypes, success, error) {
            u.post("/api/MainEndorse/save", endorsetypes, success, error);
        },
        get_endorsements: function (success, error) {
            u.get("/api/MainEndorse", success, error);
        },
        search_endorsements: function (query, success, error) {
            u.get("/api/MainEndorse/search/" + query, success, error);
        },
        get_endorsement_lov: function (success, error) {
            u.get("/api/MainEndorse/lov", success, error);
        },
        check_endorsements_lov_code: function (code, success, error) {
            u.get("/api/MainEndorse/check/" + code, success, error);
        },
        check_endorsements_code: function (code, success, error) {
            u.get("/api/MainEndorse/check/" + code, success, error);
        }
    });
})(window.service, window.utility)