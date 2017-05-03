(function(u,s) {
    s.add({
        getAccountOrigin: function(code, success, error) {
            u.get("/api/accountorigin/" + code, success, error);
        },
        getAccountOrigins: function(success, error) {
            u.get("/api/accountorigin", success, error);
        },
        getAccountOriginLov: function(success, error) {
            u.get("/api/accountorigin/lov", success, error);
        },
        saveAccountOrigin: function(origins, success, error) {
            u.post("/api/accountorigin/save", origins, success, error);
        },
        searchAccountOrigin: function(query, success, error) {
            u.get("/api/accountorigin/search/" + query, success, error);
        },
        checkAccountOriginCode: function(code, success, error) {
            u.get("/api/accountorigin/check/" + code, success, error);
        },
        checkAccountOriginLovCode: function(code, success, error) {
            u.get("/api/accountorigin/check/" + code, success, error);
        }
    });
})(window.utility,window.service)