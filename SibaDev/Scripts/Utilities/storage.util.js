(function(w, u) {
    u.add({
        ses_get_json: function(key) {
            return JSON.parse(w.sessionStorage.getItem(key));
        },
        ses_set_json: function(key, value) {
            w.sessionStorage.setItem(key, JSON.stringify(value));
        },
        ses_get: function(key) {
            return w.sessionStorage.getItem(key);
        },
        ses_set: function(key, value) {
            w.sessionStorage.setItem(key, value);
        },
        loc_get: function(key) {
            return w.localStorage.getItem(key);
        },
        loc_set: function(key, value) {
            w.localStorage.setItem(key, value);
        },
        loc_get_json: function(key) {
            return JSON.parse(w.localStorage.getItem(key));
        },
        loc_set_json: function(key, value) {
            w.localStorage.setItem(key, JSON.stringify(value));
        },
        ses_del: function(key) {
            w.sessionStorage.removeItem(key);
        },
        loc_del: function(key) {
            w.localStorage.removeItem(key);
        },
        ses_clear: function() {
            w.sessionStorage.clear();
        },
        loc_clear: function() {
            w.localStorage.clear();
        }
    });
})(window, window.utility)