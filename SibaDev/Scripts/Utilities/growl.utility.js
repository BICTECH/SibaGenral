(function ($, u) {

    $.notifyDefaults({
        allow_dismiss: true
    });
    var settings = {
        newest_on_top: true,
        mouse_over: "pause",
        delay: 3000,
        z_index: 99999999
    };
    u.add({
        growl_info: function (msg) {
            settings.type = "info";
            var notify = $.notify({
                // option
                icon: "ion-information-circled",
                title: "<strong>Info: </strong>",
                message: msg
            }, settings);
            //notify.update()
        },
        growl_success: function (msg) {
            settings.type = "success";
            var notify = $.notify({
                // options
                icon: "ion-checkmark-round",
                title: "<strong>Success: </strong>",
                message: msg
            }, settings);
        },
        growl_warning: function (msg) {
            settings.type = "warning";
            var notify = $.notify({
                // options
                icon: "ion-alert",
                title: "<strong>Warning: </strong>",
                message: msg
            }, settings);
        },
        growl_error: function (msg) {
            settings.type = "danger";
            var notify = $.notify({
                // options
                icon: "ion-nuclear",
                title: "<strong>Error: </strong>",
                message: msg
            }, settings);
        }
    });
})(window.jQuery, window.utility);

