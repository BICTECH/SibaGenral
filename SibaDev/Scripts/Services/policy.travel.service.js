(function (s, u) {
    s.add({
        save_policy: function (companys, success, error) {
            u.post("/api/policytravel/save", companys, success, error);
        },
        get_policys: function (success, error) {
            u.get("/api/policytravel", success, error);
        },
        search_policy: function (query, success, error) {
            u.get("/api/policytravel/search/" + query, success, error);
        },
        confirmPolicy: function (polId, success, error) {
            u.get("/api/Confirmation/confirmPolicy/" + polId, success, error);
        },
        get_customer: function (code, success, error) {
            u.get("/api/customer/", code, success, error);
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
        get_lov_ins_source: function (success, error) {
            u.get("/api/insurancesource/lov", success, error);
        },
        get_lov_broker_agent: function (success, error) {
            u.get("/api/intermediary/lov", success, error);
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
            u.get("/api/makemodel/lov", success, error);
        },
        get_lov_motor_risks: function (success, error) {
            u.get("/api/motorrisk/lov", success, error);
        },
        get_lov_area: function (success, error) {
            u.get("/api/area/lov", success, error);
        },
        get_lov_location: function (success, error) {
            u.get("/api/location/lov", success, error);
        },
        get_lov_occupancy: function (success, error) {
            u.get("/api/occupancy/lov", success, error);
        },
        get_lov_Intermediary_Comm: function (code, success, error) {
            u.post("/api/IntermediaryCommission/lov/", code, success, error);
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
        check_area_code: function (code, success, error) {
            u.get("/api/area/check/" + code, success, error);
        },
        check_location_code: function (code, success, error) {
            u.get("/api/location/check/" + code, success, error);
        },
        check_occupancy_code: function (code, success, error) {
            u.get("/api/occupancy/check/" + code, success, error);
        },
        get_customer: function (code, success, error) {
            u.get("/api/Customer/" + code, success, error);
        },

        getAddRiskCovers: function (data, success, error) {
            u.post("/api/RisksCovers/additionalCovers", data, success, error);
        },
        getRiskDefaulCovers: function (data, success, error) {
            u.post("/api/RisksCovers/defaultCovers", data, success, error);
        },

        getRiskCoversLOV: function (data, success, error) {
            u.post("/api/RisksCovers/RiskCoversLOV", data, success, error);
        },

        getProdtRisk: function (data, success, error) {
           u.post("/api/RisksCovers/productRisk", data, success, error);
        },

        get_customers: function (success, error) {
            u.get("/api/customer", success, error);
        },
        search_customer: function (query, success, error) {
            u.get("/api/customer/search/" + query, success, error);
        },

        getRiskFees: function (data, success, error) {
            u.post("/api/productriskfee/TravelFees", data, success, error)
        },

    });
})(window.service, window.utility)