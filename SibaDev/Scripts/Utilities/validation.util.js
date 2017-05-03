(function($, s, u, $scope) {
    u.add({
        /**
         * function to validate the code portion of an lov. 
         * this function will check if the code entered exists in the database. 
         * for a valid check the code entered must exist in the database
         * @param id the identifier for the code field you want to validate
         * @param service the name of the service that will check if the code entered is valid
         * @param target the identifier of the form control you want to store the name in
         */
        lovCodeVal: function(id, service, target, callback) {
            var self = this;
            $(id).on("blur", function() {
                var field = this;
                var code = $(this).val();
                if (s[service]) {
                    if (!self.field_empty(field)) {
                        s[service](code,
                            function(response) {
                                if (response.state) {
                                    $(target).val(response.name);
                                    self.set_valid_higlight(field);
                                    callback ? callback.call(this, code) : (function() {})();
                                } else {
                                    $(target).val("");
                                    $(id).val("");
                                    u.growl_error("The code entered does not exist.");
                                    $(field).focus();
                                    self.set_invalid_higlight(field);
                                }
                            }, u.ajax_error);
                    }

                } else {
                    u.growl_error("The service name " + service + "does not exist please enter the correct service name or check if " +
                        "its file has been referenced correctly");
                }
            });
        },

        /**
         * function to validate a code field. 
         * this function will validate the specified the code field to make sure the 
         * code entered does not exist in the database. this validation will be mostly used
         * for setting up new entities.
         * @param string id the identifier of the code field you want validated
         * @param  string service the name of the service which will validate the value entered for the code field
         */
        codeVal: function(id, service) {
            var self = this;
            $(id).on("blur", function() {
                var field = this;
                var code = $(field).val();
                if (s[service]) {
                    if (!self.field_empty(field)) {
                        s[service](code,
                            function(response) {
                                if (!response.state) {
                                    $(field).removeClass("code-error");
                                    self.set_valid_higlight(field);
                                } else {
                                    $(id).val("");
                                    $(field).addClass("code-error");
                                    u.growl_error("The Code " + code + " already exists, please enter a different code");
                                    self.set_invalid_higlight(field);
                                }
                            }, u.ajax_error);
                    }

                } else {
                    u.growl_error("The service name " + service + "does not exist please enter the correct " +
                        "service name or check if its file has been referenced correctly");
                }
            });
        },


        form_validation: function(form) {
            $scope.invalid = false;
            var that = this;

            if (Array.isArray(form)) {
                for (var i in form) {
                    $(form[i]).find("input,select,textarea").each(function() {
                        $(this).off(".validation");
                        $(this).on("blur.validation", function() {
                            that.field_check(this, $scope);
                        });
                        that.field_check(this, $scope);
                    });
                }
            } else if (typeof form === "string") {
                $(form).find("input,select,textarea").each(function() {
                    $(this).off(".validation");
                    $(this).on("blur.validation", function() {
                        that.field_check(this, $scope);
                    });
                    that.field_check(this, $scope);
                });
            }

            return !$scope.invalid;
        },

        field_check: function(field, scope) {
            if (($(field).prop("required") && this.field_empty(field)) || $(field).hasClass("code-error")) {
                this.set_invalid_higlight(field);
                scope.invalid = true;
            } else {
                this.set_valid_higlight(field);
            }
        },
        set_valid_higlight: function(field) {
            $(field).removeClass("field-error");
            $(field).addClass("field-valid");
        },
        set_invalid_higlight: function(field) {
            $(field).removeClass("field-valid");
            $(field).addClass("field-error");
        },
        clear_validation: function() {
            $("input,select,textarea").removeClass("field-error");
            $("input,select,textarea").removeClass("field-valid");
        },
        field_empty: function(field) {
            return !/\S/.test($(field).val());
        },
        contains: function(string, substring) {

            return ~string.indexOf(substring);
        },
        percentFieldValidation: function (field) {
            $(field).on("blur", function () {
                if (parseFloat($(this).val()) > 100 || parseFloat($(this).val())<0) {
                    u.growl_warning("Percentage value cannot be more than 100% or Less than 0%");
                    $(this).val("");
                }
            })
        }
    });
})(window.jQuery, window.service, window.utility, {});