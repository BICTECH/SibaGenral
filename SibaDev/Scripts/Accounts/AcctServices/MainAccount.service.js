(function (s, u) {
    s.add({
        SaveMainAccount: function(data, success, error) {
            u.post("/api/MainAccount/Save", data, success, error);
        },
        delete_MainAccount: function(id, success, error) {
            u.delete("/api/MainAccount/delete/" + id, success, error);
        },
        searchMainAccount: function(query,success,error) {
            u.get("/api/mainaccount/search/" + query, success, error);
        },
        
        /*---------------
         * type services
         *-------------*/
        getMainAccountLov: function(success,error) {
            u.get("/api/mainaccount/lov", success, error);
        },
        getLovAcctCategory: function(success, error) {
            u.get("/api/AcctCategory/lov", success, error);
        },

        getLovAcctCurrency: function(success, error) {
            u.get("/api/Currency/lov", success, error);
        },
        
        getLovAcctCompany: function(success, error) {
            u.get("/api/Company/lov", success, error);
        },

        findMainAccountLov: function(query, success, error) {
            u.get("/api/MainAccount/FinMainAcctLov/" + query, success, error);
        },


        findAcctCategoryLov: function(query, success, error) {
            u.get("/api/AcctCategory/FinAcctCategoryLov/" + query, success, error);
        },


        //
        getAllMainAcct: function(success, error) {
            u.get("/api/MainAccount/searchAll", success, error);
        },

        getMainAccoutByParam: function(query, success, error) {
            u.get("/api/MainAccount/search/" + query, success, error);
        },

        //for Main Acct code LOV validation check_subMainAcct_lov_code
        check_mainAcct_lov_code: function(code, success, error) {
            u.get("/api/MainAccount/checkCode/" + code, success, error);
        },

        //for  Main Acct code at Master setup validation
        chceck_mainAcct_code: function(code, success, error) {
            u.get("/api/MainAccount/checkCode/" + code, success, error);
        }

    });
})(window.service, window.utility);