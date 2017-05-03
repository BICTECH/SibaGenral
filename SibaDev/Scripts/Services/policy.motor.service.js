(function (s, u) {
    s.add({
        save_motor: function (companys, success, error) {
            u.post("/api/policymotor/save", companys, success, error);
        },

        get_motors: function (success, error) {
            u.get("/api/policymotor", success, error);
        },

        search_motor: function (query, success, error) {
            u.get("/api/policymotor/search/" + query, success, error);
        },
        //
        get_customer: function (code, success, error) {
            u.get("/api/customer/", code, success, error);
        },

        motor_end_deletion: function (sysID,endNo, success, error) {
            u.get("/api/policymotor/endDeletion/" + sysID + "/" + endNo, success, error);
        },

        confirmMotor: function (polId, success,error) {
            u.get("/api/Confirmation/confirmPolicy/" + polId, success, error);
        },

        unConfirm_Motor: function (polId, success, error) {
            u.get("/api/Confirmation/confirmPolicy/" + polId, success, error);
        },

        get_lov_company: function (success, error) {
            u.get("/api/company/lov", success, error);
        },
        get_lov_channel: function (success, error) {
            u.get("/api/channel/lov", success, error);
        },
        get_lov_office: function (success, error) {
            u.get("/api/office/lov", success, error);
        },
        get_lov_product_type: function (success, error) {
            u.get("/api/classbusiness/lov", success, error);
        },
        get_lov_cover_type: function (success, error) {
            u.get("/api/cover/lov", success, error);
        },
        get_lov_broker_agent: function (success, error) {
            u.get("/api/intermediary/lov", success, error);
        },
        get_lov_ins_source: function (success, error) {
            u.get("/api/insurancesource/lov", success, error);
        },
        //Toni
        get_lov_Intermediary_Type: function (success, error) {
            u.get("/api/IntermediaryType/lov", success, error);
        },
        //Toni 
        get_lov_Intermediary_Comm: function (code, success, error) {
            u.post("/api/IntermediaryCommission/lov/", code, success, error);
           // u.get("/api/IntermediaryComm/lov", success, error);
        },
        
        
        get_lov_business_source: function (success, error) {
            u.get("/api/SourceBusiness/lov", success, error);
        },
        get_lov_customer: function (success, error) {
            u.get("/api/Customer/lov", success, error);
        },
        get_lov_currency: function (success, error) {
            u.get("/api/exchangerate/lov", success, error);
        },
        get_lov_makemodel: function (success, error) {
            u.get("/api/make/lov", success, error);
        },
        get_lov_motor_risks: function (success, error) {
            u.get("/api/motorrisk/lov", success, error);
        },

        get_lov_cedent: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
        get_lov_com: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
        get_lov_member_com: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },

        check_company_code: function (code, success, error) {
            u.get("/api/company/check/" + code, success, error);
        },
        check_intermediary_code: function (code, success, error) {
            u.get("/api/intermediary/check/" + code, success, error);
        },
        check_office_code: function (code, success, error) {
            u.get("/api/office/check/" + code, success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/classbusiness/check/" + code, success, error);
        },
        check_channel_code: function (code, success, error) {
            u.get("/api/channel/check/" + code, success, error);
        },
        check_insurance_source_code: function (code, success, error) {
            u.get("/api/insurancesource/check/" + code, success, error);
        },
        check_subproduct_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        },
        check_business_source_code: function (code, success, error) {
            u.get("/api/SourceBusiness/check/" + code, success, error);
        },
        check_customer_code: function (code, success, error) {
            u.get("/api/Customer/check/" + code, success, error);
        },
        get_customer: function (code, success, error) {
            u.get("/api/Customer/" + code, success, error);
        },

        getAddRiskCovers: function (data, success, error) {
            u.post("/api/MotorRisksCovers/additionalCovers", data, success, error);
        },
        getRiskDefaulCovers: function (data,success,error) {
            u.post("/api/MotorRisksCovers/defaultCovers", data, success, error);
        },       

        getMotorRisk: function (data,success,error) {
            u.post("/api/MotorRisksCovers/motorRisk", data, success, error);
        },

            getRiskCoversLOV: function (data,success,error) {
                u.post("/api/MotorRisksCovers/RiskCoversLOV", data, success, error);
            },

            getRiskFees: function (data,success,error) {
                u.post("/api/MotorRisksCovers/RiskFees", data, success, error)
            },

            getProdtRisk: function (data, success, error) {
                u.post("/api/RisksCovers/productRisk", data, success, error)
                u.post("/api/MotorRisksCovers/RiskFees", data, success, error);
            },

            getModel: function (data, success, error) {
                u.post("/api/makemodel/makeLov", data, success, error);
            },
        
           
           
    });
})(window.service, window.utility)