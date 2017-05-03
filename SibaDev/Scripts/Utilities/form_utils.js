(function ($,u) {
    u.add({
        parse_form: function (form) {
            var obj = {};
            $(form).find("input,select,textarea").each(function () {
                var ele = this, name = $(this).attr("name");
                if ($(ele).attr("type") === "checkbox") {
                    obj[name] = $(ele).prop("checked") ? $(ele).val() : "N";
                } else if ($(ele).attr("type") === "radio") {
                    if (obj[name]) {
                        obj[name] = (obj[name].length <= 0) && $(ele).prop("checked") ? $(ele).val() : obj[name];
                    } else {
                        obj[name] = $(ele).prop("checked") ? $(ele).val() : "";
                    }
                    
                } else {
                    
                    obj[name] = $(ele).hasClass("date") ? u.dbDate($(ele).val()) : $(ele).val();
                }
            });
            console.log(obj);
            return obj;
        },

        fill_form: function (data, form) {
            var ele;
            for (var i in data) {
                if (typeof data[i] == "object" && data[i] != null) {
                    this.fill_form(data[i],form);
                } else if (!Array.isArray(data[i]) && typeof data[i] != "object") {
                    ele = $(form).find("input[name='" + i + "'], select[name='" + i + "'], textarea[name='" + i + "']");
                    //check if element is a checkbox
                    if (ele.attr("type") === "checkbox") {
                        data[i] === "Y" ? ele.prop("checked", true) : ele.prop("checked", false);
                    }else if (ele.attr("type") === "radio") {
                        $("input[name='" + i + "'][value='" + data[i] + "'] ").prop("checked", true);
                    } else {
                        ele.val($(ele).hasClass("date") ? u.dateFormatUk(data[i]) : data[i]);
                    }
                }
            }
            return 1;
        },
        form_reset: function (form) {
            if (Array.isArray(form)) {
                for (var i in form) {
                    if ($(form[i])[0]) {
                        $(form[i])[0].reset();
                    }
                }
            } else if (typeof form === "string") {
                if ($(form)[0]) {
                    $(form)[0].reset();
                }
            }
            u.clear_validation();
            
        },
        //Canlled State = Red
        form_text_Red_color: function (form) {
            
            $("input").css("color", "red");
            $("textarea").css("color", "red");
            $("select").css("color", "red");
            $("checkbox").css("color", "red");
            $("radiobox").css("color", "red");

            //(u.default_grid).css({ color: "red" });
           
        }, 
        //Confirmation State = Blue 
        form_text_Blue_color: function (form) {

            $("input").css("color", "blue");
            $("textarea").css("color", "blue");
            $("select").css("color", "blue");
            $("checkbox").css("color", "blue");
            $("radiobox").css("color", "blue");

        },
        //Approved or posted = Green 
        form_text_Green_color: function (form) {
            
            $("input").css("color", "green");
            $("textarea").css("color", "green");
            $("select").css("color", "green");
            $("checkbox").css("color", "green");
            $("radiobox").css("color", "green");
           
        },
        //Edorment State = Gold 
    form_text_Gold_color: function (form) {
            
        $("input").css("color", "goldenrod");
        $("textarea").css("color", "goldenrod");
        $("select").css("color", "goldenrod");
        $("checkbox").css("color", "goldenrod");
        $("radiobox").css("color", "goldenrod");
           
    },
        //Neutral State = Black 
        form_text_Black_color: function (form) {
            
        $("input").css("color", "black");
        $("textarea").css("color", "black");
        $("select").css("color", "black");
        $("checkbox").css("color", "black");
        $("radiobox").css("color", "black");
           
        },

        form_readonly: function(form) {
            $("form input, form textarea").not(".readonly-proof").each(function () {
                    $(this).prop("readonly", "readonly");
            });

            $("form select").not(".readonly-proof").each(function () {
                    $(this).prop("disabled", "disabled");
                });
        },
        formReadWrite: function() {
            $("form input, form textarea").not(".readonly").each(function () {
                $(this).removeProp("readonly");
            });

            $("form select").not(".readonly").each(function () {
                $(this).removeProp("disabled");
            });
        }

    });
})(window.jQuery,window.utility);

