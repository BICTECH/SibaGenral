(function (s, u) {
    s.add({
        policyApproval: function(data,success,error) {
            u.post("/api/policyapproval",data,success,error)
        }
    });
})(window.service, window.utility)