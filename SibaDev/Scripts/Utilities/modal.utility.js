(function ($,u,$scope) {
    u.add({
        modal_response: function (resp) { 
            if (resp.state) {
               this.modal_success(resp.message);
            } else {
                this.modal_error(resp.message);
            }
        },
        modal_success: function (msg) {
            u.growl_success(msg);
        },
        hide_success: function () { 
            $("#successMsgeModal").modal("hide");
        },
        modal_alert: function (msg) {
            u.growl_info(msg);
        },
        hide_alert: function(){
            $("#AlertMssgeModal").modal("hide");
        },
        modal_warning: function (msg) {
            u.growl_warning(msg);
        },
        hide_warning: function(){
            $("#warningMssgeModal").modal("hide");
        },
        modal_error: function (msg) {
            u.growl_error(msg);
        },
        hide_error: function () {
            $("#errorMssgeModal").modal("hide");
        },
        modal_confirmation: function (msg, callback ) {
            $("#warningMssgeModal").modal();
            $("#textWarningMssge").text(msg);
            $scope.callback = callback;
            $("#btnOkWarning").one("click.confirmation", function () {
                $("#btnOkWarning").off(".confirmation");
                //$("#textWarningMssge").text("Please wait");
                $scope.callback.call(this);
            });
            $("#btnCloseWarning, .close").one("click", function() {
                $("#btnOkWarning").off(".confirmation");
            });
        },
        hide_confirm: function() {
            $("#warningMssgeModal").modal("hide");
            $("#btnOkWarning").off(".confirmation");
        },
        modal_info: function (msg) {
            u.growl_info(msg);
        },
        hide_info: function () { 
            $("#infoMssgeModal").modal("hide");
        }
    });
})(window.jQuery, window.utility, {})