(function($, u, s, $scope) {
    u.add({
        paymentBasisPolicyDaysUpdate: function (pbId, pdId, coverGrid, riskGrid) {
            alert("Change is happening");
                console.log($(pbId + ", " + pdId));
                $scope.riskGrid = riskGrid;
                $scope.coverGrid = coverGrid;
            //check for a change with premium basis
            
                $(pdId).on("change paste keyup", this.premiumUpdater);

            $(pbId).on("change", function () {
                alert("pb change");
            });
            $(pbId).on("click", function () {
                alert("pb change");
            });

                
            
        },
        premiumUpdater: 
    });
})(window.jQuery, window.utility, window.service, {});