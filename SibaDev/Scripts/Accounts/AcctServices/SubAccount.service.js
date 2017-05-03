(function (s, u) {
    s.add({
        saveSubAccount: function(data, success, error) {
            u.post("/api/SubAccount/Save", data, success, error);
        },
        deleteSubAccount: function(id, success, error) {
            u.delete("/api/SubAccount/delete/" + id, success, error);
        },
        getSubAccountLov: function(success, error) {
            u.get("/api/SubAccount/lov", success, error);
        },
        searchSubAccount: function(query, success, error) {
            u.get("/api/subaccount/search/" + query, success, error);
        },

        /*---------------
         * type services
         *-------------*/

        getLovMainAcct: function(success, error) {
            u.get("/api/MainAccount/lov", success, error);
        },

        getLovAcctCurrency: function(success, error) {
            u.get("/api/Currency/lov", success, error);
        },


        //for Main Acct code LOV validation check_subMainAcct_lov_code
        check_subAcct_lov_code: function(code, success, error) {
            u.get("/api/SubAccount/checkCode/" + code, success, error);
        },
        //for  Main Acct code at Master setup validation
        chceck_SubAcct_code: function(code, success, error) {
            u.get("/api/SubAccount/checkCode/" + code, success, error);
        }
    });
})(window.service, window.utility);