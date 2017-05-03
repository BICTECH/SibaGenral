(function ($,u) {
    var ajax = {};

    ajax.post = function (url, data, success, error) {
        error = error || function() {};
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            success: success,
            error: function(err) {
                u.ajax_error(err);
                error.call(this, err);
            },
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    };

    ajax.post_file = function (url, formData, success, error) {
        error = error || function () { };
        $.ajax({
            url: url,
            data: formData,
            success: success,
            error: function (err) {
                u.ajax_error(err);
                error.call(this, err);
            },
            type: "POST",
            contentType: false,
            processData: false,
            dataType: "json"
        });
    };
    ajax.get = function (url, success, error) {
        error = error || function () { };
        $.ajax({
            url: url,
            success: success,
            error: function (err) {
                u.ajax_error(err);
                error.call(this, err);
            },
            type: "GET",
            contentType: "application/json; charset=utf-8"
        });
    };
    ajax.put = function(url,data,success,error) {
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            success: success,
            error: function (err) {
                u.ajax_error(err);
                error.call(this, err) || function () { }();
            },
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });
    };
    ajax.delete = function(url, success, error) {
        $.ajax({
            url: url,
            success: success,
            error: function (err) {
                u.ajax_error(err);
                error.call(this, err) || function () { }();
            },
            type: "DELETE",
            contentType: "application/json; charset=utf-8"
        });
    };

    ajax.ajax_error = function (err) {
        if (err.status === 500) {
            u.growl_error("Oops, we seem to facing problems with our server, please try again later.");
        } else if (err.status === 404) {
            u.growl_error("Oops, the resource you are requesting cannot be found on the server.");
        } else if (err.status === 0 && err.readyState === 0) {
            u.growl_error("Oops, its see,s you are not connected to the Internet, please check your connection.");
        }
    }

    /*----------------------------------------------------------------------------
     * add ajax utility to the global utility object by using the utility manager
     *--------------------------------------------------------------------------*/
    u.add(ajax);

})(window.jQuery,window.utility);
