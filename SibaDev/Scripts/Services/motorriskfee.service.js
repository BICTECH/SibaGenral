(function (s, u) {
    s.add({
        save_motorriskfees: function (motorriskfees, success, error) {
            u.post("/api/motorriskfee/save", motorriskfees, success, error)
        },
        get_motorriskfees: function (success, error) {
            u.get("/api/motorriskfee", success, error)
        },
        search_motorriskfee: function (query, success, error) {
            u.get("/api/motorriskfee/search/" + query, success, error);
        },
        check_risk_fee_code: function (code, success, error) {
            u.get("/api/motorriskfee/check/" + code, success, error)
        },
        get_lov_motor_risk: function (success, error) {
            u.get("/api/motortariff/lov", success, error);
        },
        get_lov_compulsory_fee: function (success, error) {
            u.get("/api/compulsoryfee/lov", success, error);
        },
    })
})(window.service, window.utility)