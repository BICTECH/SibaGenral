(function($, s, u, $scope) {
    u.add({
        userData: u.ses_get_json("user_data"),
        setup_user: function (userData) {
            if (userData["USR_STATUS"] === "A") {
                var funcGroups = [], menus = [], forms = [], reports = [];
                var transRights = [], prodRights = [], altRights = [];
                var admin = userData["MS_SYS_USR_RGHT"][0]["USRR_ADMIN_YN"];
                /*loop to process user functional groups*/
                for (var i in userData["MS_SYS_USR_RGHT"][0]["MS_SYS_USR_FUNC_GRP"]) {
                    var usrFuncGroup = userData["MS_SYS_USR_RGHT"][0]["MS_SYS_USR_FUNC_GRP"][i];

                    /*we need to check if the user functional group is active*/
                    if (usrFuncGroup["USFG_ACTIVE"] === "Y" && usrFuncGroup["MS_INS_FUNCTIONAL_GROUP"]["FGR_STATUS"] === "A") {
                        var funcGroup = usrFuncGroup["MS_INS_FUNCTIONAL_GROUP"];

                        /*loop to process functional groups menus*/
                        for (var x in funcGroup["MS_SYS_FUNC_MENU"]) {
                            var menu = funcGroup["MS_SYS_FUNC_MENU"][x];

                            /*loop to process functional group menu ui*/
                            for (var y in menu["MS_FUNC_MENU_UI"]) {
                                var ui = menu["MS_FUNC_MENU_UI"][y]["MS_SYS_UI"];

                                /*check if ui is active*/
                                if (ui["UI_ACTIVE"] === "Y" && ui["UI_STATUS"] === "A") {
                                    switch (ui["UI_TYPE"]) {
                                        case "F":
                                            /*obtain form UIs*/
                                            forms.push(ui);
                                            break;
                                        case "R":
                                            /*obtain report UIs*/
                                            reports.push(ui);
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }
                            menus.push({
                                "menuCode": menu["MEN_CODE"],
                                "menuName": menu["MEN_NAME"],
                                "menuModule": menu["MEN_MODULE"],
                                "menuForms": forms,
                                "menuReports": reports
                            });
                            forms = [];
                            reports = [];
                        }

                        funcGroups.push({
                            "funcGrpName": funcGroup["FGR_NAME"],
                            "funcGrpAccess": funcGroup["FGR_ACCESS"],
                            "funcGrpCode": funcGroup["FGR_CODE"],
                            "funcGrpModule": funcGroup["FGR_MODULE"],
                            "funcGrpMenus": menus
                        });
                    }
                    menus = [];
                }


                u.ses_set_json("user", {
                    userCode: userData["USR_CODE"],
                    userFirstName: userData["USR_F_NAME"],
                    userFullName: userData["USR_FULL_NAME"],
                    userStatus: userData["USR_STATUS"],
                    userAdmin: admin,
                    functionalGroups: funcGroups,
                    transactionalRights: transRights,
                    productRights: prodRights,
                    alteration_rights: altRights
                });
                return true;
            } else {
                return false;
            }
            
        },
        getUserSession: function() {
            return u.ses_get_json("user_data");
        } ,
        getFunctionalGroup: function (funcGrpName) {
            var userData = u.ses_get_json("user_data");
            if (userData) {
                for (var i in userData["functionalGroups"]) {
                    if (userData["functionalGroups"][i]["funcGrpName"].toLowerCase() === funcGrpName.toLowerCase()) return userData["functionalGroups"][i];
                }
            } else {
                return false;
            }
            
        },
        getFunctionalGroups: function () {
            var userData = u.ses_get_json("user_data");
            var funcGrps = [];
            if (userData) {
                for (var i in userData["functionalGroups"]) {
                    funcGrps.push(userData["functionalGroups"][i]);
                }
                return funcGrps;
            } else {
                return false;
            }
            
        },
        getFuncGrpMenu: function (funcGrpName, menuName) {
            var userData = u.ses_get_json("user_data");
            if (userData) {
                for (var i in userData["functionalGroups"]) {
                    if (userData["functionalGroups"][i]["funcGrpName"].toLowerCase() === funcGrpName.toLowerCase()) {
                        for (var x in userData["functionalGroups"][i]["funcGrpMenus"]) {
                            if (userData["functionalGroups"][i]["funcGrpMenus"][x]["menuName"].toLowerCase() === menuName.toLowerCase()) {
                                return userData["functionalGroups"][i]["funcGrpMenus"][x];
                            }
                        }
                    }
                }
            } else {
                return false;
            }
            
        },
        getFuncGrpMenus: function (funcGrps) {
            var userData = u.ses_get_json("user_data");
            var menus = [];
            if (userData) {
                for (var i in funcGrps) {
                    menus.push(funcGrps[i]["funcGrpMenus"]);
                }
                return menus;
            } else {
                return false;
            }
            
        },
        getMenuUis: function (menus) {
            var userData = u.ses_get_json("user_data");
            var uis = [];
            if (userData) {
                for (var x in menus) {
                    if (menus[x].length > 0) {
                        for (var i in menus[x]) {
                            if (menus[x][i]["menuForms"]) {
                                for (var y in menus[x][i]["menuForms"]) {
                                    uis.push(menus[x][i]["menuForms"][y]);
                                }
                            } else if (menus[x][i]["menuReports"]) {
                                for (var z in menus[x][i]["menuReports"]) {
                                    uis.push(menus[x][i]["menuReports"][z]);
                                }
                            }
                        }
                    }
                }
                return uis;
            } else {
                return false;
            }
            
        },
        isUserAdmin: function() {
            if (this.userData) {
                return this.userData["userAdmin"] === "Y";
            }
            return false;
        },
        getUserName: function () {
            if (this.userData.userFirstName) {
                return this.userData["userFirstName"];
            } else {
                return "Invalid User";
            }
            
        }
    })
})(window.jQuery, window.service, window.utility, {})

