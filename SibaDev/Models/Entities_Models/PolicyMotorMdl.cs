using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using SibaDev.System_Contants;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class PolicyMotorMdl : Model
    {
        
        public static INS_UWD_POLICY_HEAD get_policy(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_SYS_ID == code select polh).ToList().Select(polh => new INS_UWD_POLICY_HEAD
                {
                    POLH_SYS_ID = polh.POLH_SYS_ID,
                    POLH_DOC_NO = polh.POLH_DOC_NO,
                    POLH_END_NO = polh.POLH_END_NO,
                    POLH_QUT_SER_NO = polh.POLH_QUT_SER_NO,
                    POLH_POL_SER_NO = polh.POLH_POL_SER_NO,
                    MS_SYS_COMPANY = CompanyMdl.get_company(polh.POLH_CMP_CODE),
                    MS_SYS_OFFICE = OfficeMdl.get_office(polh.POLH_OFF_CODE),
                    MS_UDW_CUSTOMERS = CustomerMdl.get_customer(polh.POLH_CUST_CODE),
                    MS_SYS_SOURCE_BUSINESS = SourceBusinessMdl.get_sourcebusiness(polh.POLH_BIZ_SOURCE),
                    INS_UDW_INSUR_SOURCE = InsuranceSourceMdl.get_insource(polh.POLH_INS_SOURCE),
                    MS_SYS_INTERMEDIARY = IntermediaryMdl.get_intermediary(polh.POLH_INTERMIDIARY),
                    MST_UWD_PRODUCT = ProductMdl.get_product(polh.POLH_SUB_CLASS_CODE),
                    MS_UDW_CLASS_OF_BUSINESS = ClassBusinessMdl.get_class(polh.POLH_CLASS_CODE),
                    MS_SYS_CHANNEL = ChannelMdl.get_channel(polh.POLH_CHANNEL_CODE),
                    POLH_CLASS_CODE = polh.POLH_CLASS_CODE,
                    POLH_SUB_CLASS_CODE = polh.POLH_SUB_CLASS_CODE,
                    POLH_CHANNEL_CODE = polh.POLH_CHANNEL_CODE,
                    POLH_CMP_CODE = polh.POLH_CMP_CODE,
                    POLH_OFF_CODE = polh.POLH_OFF_CODE,
                    POLH_CUST_CODE = polh.POLH_CUST_CODE,
                    POLH_INS_SOURCE = polh.POLH_INS_SOURCE,
                    POLH_BIZ_SOURCE = polh.POLH_BIZ_SOURCE,
                    POLH_INTERMIDIARY = polh.POLH_INTERMIDIARY,
                    POLH_POL_START_DATE = polh.POLH_POL_START_DATE,
                    POLH_POL_END_DATE = polh.POLH_POL_END_DATE,
                    POLH_POL_DAYS = polh.POLH_POL_DAYS,
                    POLH_POL_UW_YEAR = polh.POLH_POL_UW_YEAR,
                    POLH_POL_SI_FC = polh.POLH_POL_SI_FC,
                    POLH_POL_SI_BC = polh.POLH_POL_SI_BC,
                    POLH_POL_PREM_FC = polh.POLH_POL_PREM_FC,
                    POLH_POL_PREM_BC = polh.POLH_POL_PREM_BC,
                    POLH_POL_COMM_FC = polh.POLH_POL_COMM_FC,
                    POLH_POL_COMM_BC = polh.POLH_POL_COMM_BC,

                    POLH_POL_DISC_FC = polh.POLH_POL_DISC_FC,
                    POLH_POL_DISC_BC = polh.POLH_POL_DISC_BC,
                    POLH_POL_LOAD_FC = polh.POLH_POL_LOAD_FC,
                    POLH_POL_LOAD_BC = polh.POLH_POL_LOAD_BC,
                    POLH_COINS_SI_FC = polh.POLH_COINS_SI_FC,
                    POLH_COINS_SI_BC = polh.POLH_COINS_SI_BC,
                    POLH_COINS_PREM_FC = polh.POLH_COINS_PREM_FC,
                    POLH_COINS_PREM_BC = polh.POLH_COINS_PREM_BC,
                    POLH_NET_SI_FC = polh.POLH_NET_SI_FC,
                    POLH_NET_SI_BC = polh.POLH_NET_SI_BC,
                    POLH_NET_PREM_FC = polh.POLH_NET_PREM_FC,
                    POLH_NET_PREM_BC = polh.POLH_NET_PREM_BC,


                    POLH_FEE_FC = polh.POLH_FEE_FC,
                    POLH_FEE_BC = polh.POLH_FEE_BC,
                    POLH_RENEW_SER_NO = polh.POLH_RENEW_SER_NO,
                    POLH_TXN_STATE = polh.POLH_TXN_STATE,
                    POLH_POL_STATE = polh.POLH_POL_STATE,
                    POLH_END_TYPE = polh.POLH_END_TYPE,
                    POLH_APPROVE_DATE = polh.POLH_APPROVE_DATE,
                    POLH_ACCT_DATE = polh.POLH_ACCT_DATE,
                    POLH_DISPLAY_NO = polh.POLH_DISPLAY_NO,
                    POLH_CRTE_BY = polh.POLH_CRTE_BY,
                    POLH_CRTE_DATE = polh.POLH_CRTE_DATE,
                    POLH_MOD_BY = polh.POLH_MOD_BY,
                    POLH_MOD_DATE = polh.POLH_MOD_DATE,
                    POLH_STATUS = polh.POLH_STATUS,
                    POLH_CURRENCY = polh.POLH_CURRENCY,
                    POLH_CURRENCY_RATE = polh.POLH_CURRENCY_RATE,
                    INS_UWD_VEHICLE_RISK = polh.INS_UWD_VEHICLE_RISK != null ? polh.INS_UWD_VEHICLE_RISK.Select(r => get_motor(r.VEH_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                var exception = e;
                return null;
            }
        }    

        public static INS_UWD_VEHICLE_RISK get_motor(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UWD_VEHICLE_RISK where c.VEH_SYS_ID == code select c).ToList().Select(c => new INS_UWD_VEHICLE_RISK
                {
                    VEH_SYS_ID = c.VEH_SYS_ID,
                    VEH_POLH_SYS_ID = c.VEH_POLH_SYS_ID,
                    VEH_POLH_DOC_NO = c.VEH_POLH_DOC_NO,
                    VEH_POLH_END_NO = c.VEH_POLH_END_NO,
                    VEH_RISK_NO = c.VEH_RISK_NO,
                    VEH_RISK_CODE = c.VEH_RISK_CODE,
                    VEH_ISSUE_DATE = c.VEH_ISSUE_DATE,
                    VEH_RETROS_DATE = c.VEH_RETROS_DATE,
                    VEH_START_DATE = c.VEH_START_DATE,
                    VEH_END_DATE = c.VEH_END_DATE,
                    VEH_PERIOD_DAYS = c.VEH_PERIOD_DAYS,

                    VEH_CURRENCY = c.VEH_CURRENCY,
                    VEH_CURR_RATE = c.VEH_CURR_RATE,
                    VEH_PRODUCT_CODE = c.VEH_PRODUCT_CODE,
                    VEH_COVER_CODE = c.VEH_COVER_CODE,
                    VEH_USAGE_CODE = c.VEH_USAGE_CODE,
                    VEH_VEH_REG_NO = c.VEH_VEH_REG_NO,
                    VEH_MAKE = c.VEH_MAKE,
                    VEH_MODEL = c.VEH_MODEL,
                    VEH_BODY_TYPE = c.VEH_BODY_TYPE,
                    VEH_MANUFACTURE_YR = c.VEH_MANUFACTURE_YR,

                    VEH_CHASSIS_NO = c.VEH_CHASSIS_NO,
                    VEH_CUBIC_CAP = c.VEH_CUBIC_CAP,
                    VEH_PASSENGERS = c.VEH_PASSENGERS,
                    VEH_EXCESS_APP = c.VEH_EXCESS_APP,
                    VEH_EXCESS_PERC = c.VEH_EXCESS_PERC,
                    VEH_EXCESS_MIN = c.VEH_EXCESS_MIN,
                    VEH_EXCESS_MAX = c.VEH_EXCESS_MAX,
                    VEH_EXCESS_FIX = c.VEH_EXCESS_FIX,
                    VEH_EXTRA_TPPD = c.VEH_EXTRA_TPPD,
                    VEH_TP_INTEREST = c.VEH_TP_INTEREST,

                    VEH_TP_DETAILS = c.VEH_TP_DETAILS,
                    VEH_PROP_DECLINED = c.VEH_PROP_DECLINED,
                    VEH_DECLINED_REASON = c.VEH_DECLINED_REASON,
                    VEH_POL_CANCELLED = c.VEH_POL_CANCELLED,
                    VEH_CANCELLED_REASON = c.VEH_CANCELLED_REASON,
                    VEH_SI_FC = c.VEH_SI_FC,
                    VEH_SI_BC = c.VEH_SI_BC,
                    VEH_TOT_PREM_FC = c.VEH_TOT_PREM_FC,
                    VEH_TOT_PREM_BC = c.VEH_TOT_PREM_BC,
                    VEH_RI_APPLICABLE = c.VEH_RI_APPLICABLE,

                    VEH_RI_EFF_DATE = c.VEH_RI_EFF_DATE,
                    VEH_RI_SI_FC = c.VEH_RI_SI_FC,
                    VEH_RI_SI_BC = c.VEH_RI_SI_BC,
                    VEH_RI_PREM_FC = c.VEH_RI_PREM_FC,
                    VEH_RI_PREM_BC = c.VEH_RI_PREM_BC,
                    VEH_RISK_PREM_FC = c.VEH_RISK_PREM_FC,
                    VEH_TP_PREM_BC = c.VEH_TP_PREM_BC,
                    VEH_ADJ_PREM_FC = c.VEH_ADJ_PREM_FC,
                    VEH_ADJ_PREM_BC = c.VEH_ADJ_PREM_BC,
                    VEH_DISC_FC = c.VEH_DISC_FC,

                    VEH_DISC_BC = c.VEH_DISC_BC,
                    VEH_LOAD_FC = c.VEH_LOAD_FC,
                    VEH_LOAD_BC = c.VEH_LOAD_BC,
                    VEH_COMP_FEE_FC = c.VEH_COMP_FEE_FC,
                    VEH_COMP_FEE_BC = c.VEH_COMP_FEE_BC,
                    VEH_COMMISSION_FC = c.VEH_COMMISSION_FC,
                    VEH_COMMISSION_BC = c.VEH_COMMISSION_BC,
                    VEH_TXN_STATUS = c.VEH_TXN_STATUS,
                    VEH_RISK_STATE = c.VEH_RISK_STATE,
                    VEH_RENEWAL_STATUS = c.VEH_RENEWAL_STATUS,

                    VEH_END_TYPE = c.VEH_END_TYPE,
                    VEH_APPROVE_DATE = c.VEH_APPROVE_DATE,
                    VEH_ACCT_DATE = c.VEH_ACCT_DATE,
                    VEH_CRTE_BY = c.VEH_CRTE_BY,
                    VEH_CRTE_DATE = c.VEH_CRTE_DATE,
                    VEH_MOD_BY = c.VEH_MOD_BY,
                    VEH_MOD_DATE = c.VEH_MOD_DATE,
                    VEH_STATUS = c.VEH_STATUS,                  
                    INS_UWD_RISK_COVERS = c.INS_UWD_RISK_COVERS != null ? c.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null,
                    MS_UDW_MOTOR_RISK = MotorRiskMdl.get_motor_risk(c.VEH_RISK_CODE.ToString()),
                    MS_UDW_MAKE = MakeMdl.get_make(c.VEH_MAKE.ToString()),
                    MS_UDW_MAKE_MODEL = MakeModelMdl.get_makemodel(c.VEH_MODEL.ToString())
                }).Single();
            }
            catch (Exception e)
            {
                var exception = e;
                return null;
            }

        }

        public static IEnumerable<INS_UWD_POLICY_HEAD> get_policys()
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy);
        }

        public static INS_UWD_POLICY_HEAD get_policy_est(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_SYS_ID == code select polh).ToList().Select(polh => new INS_UWD_POLICY_HEAD
                {
                    POLH_SYS_ID = polh.POLH_SYS_ID,
                    POLH_DOC_NO = polh.POLH_DOC_NO,
                    POLH_END_NO = polh.POLH_END_NO,
                    POLH_QUT_SER_NO = polh.POLH_QUT_SER_NO,
                    POLH_POL_SER_NO = polh.POLH_POL_SER_NO,
                    POLH_CLASS_CODE = polh.POLH_CLASS_CODE,
                    POLH_SUB_CLASS_CODE = polh.POLH_SUB_CLASS_CODE,
                    POLH_CHANNEL_CODE = polh.POLH_CHANNEL_CODE,
                    POLH_CMP_CODE = polh.POLH_CMP_CODE,
                    POLH_OFF_CODE = polh.POLH_OFF_CODE,
                    POLH_CUST_CODE = polh.POLH_CUST_CODE,
                    POLH_INS_SOURCE = polh.POLH_INS_SOURCE,
                    POLH_BIZ_SOURCE = polh.POLH_BIZ_SOURCE,
                    POLH_INTERMIDIARY = polh.POLH_INTERMIDIARY,
                    POLH_POL_START_DATE = polh.POLH_POL_START_DATE,
                    POLH_POL_END_DATE = polh.POLH_POL_END_DATE,
                    POLH_POL_DAYS = polh.POLH_POL_DAYS,
                    POLH_POL_UW_YEAR = polh.POLH_POL_UW_YEAR,
                    POLH_POL_SI_FC = polh.POLH_POL_SI_FC,
                    POLH_POL_SI_BC = polh.POLH_POL_SI_BC,
                    POLH_POL_PREM_FC = polh.POLH_POL_PREM_FC,
                    POLH_POL_PREM_BC = polh.POLH_POL_PREM_BC,
                    POLH_POL_COMM_FC = polh.POLH_POL_COMM_FC,
                    POLH_POL_COMM_BC = polh.POLH_POL_COMM_BC,

                    POLH_POL_DISC_FC = polh.POLH_POL_DISC_FC,
                    POLH_POL_DISC_BC = polh.POLH_POL_DISC_BC,
                    POLH_POL_LOAD_FC = polh.POLH_POL_LOAD_FC,
                    POLH_POL_LOAD_BC = polh.POLH_POL_LOAD_BC,
                    POLH_COINS_SI_FC = polh.POLH_COINS_SI_FC,
                    POLH_COINS_SI_BC = polh.POLH_COINS_SI_BC,
                    POLH_COINS_PREM_FC = polh.POLH_COINS_PREM_FC,
                    POLH_COINS_PREM_BC = polh.POLH_COINS_PREM_BC,
                    POLH_NET_SI_FC = polh.POLH_NET_SI_FC,
                    POLH_NET_SI_BC = polh.POLH_NET_SI_BC,
                    POLH_NET_PREM_FC = polh.POLH_NET_PREM_FC,
                    POLH_NET_PREM_BC = polh.POLH_NET_PREM_BC,

                    POLH_FEE_FC = polh.POLH_FEE_FC,
                    POLH_FEE_BC = polh.POLH_FEE_BC,
                    POLH_RENEW_SER_NO = polh.POLH_RENEW_SER_NO,
                    POLH_TXN_STATE = polh.POLH_TXN_STATE,
                    POLH_POL_STATE = polh.POLH_POL_STATE,
                    POLH_END_TYPE = polh.POLH_END_TYPE,
                    POLH_APPROVE_DATE = polh.POLH_APPROVE_DATE,
                    POLH_ACCT_DATE = polh.POLH_ACCT_DATE,
                    POLH_DISPLAY_NO = polh.POLH_DISPLAY_NO,
                    POLH_CRTE_BY = polh.POLH_CRTE_BY,
                    POLH_CRTE_DATE = polh.POLH_CRTE_DATE,
                    POLH_MOD_BY = polh.POLH_MOD_BY,
                    POLH_MOD_DATE = polh.POLH_MOD_DATE,
                    POLH_STATUS = polh.POLH_STATUS,
                    POLH_CURRENCY = polh.POLH_CURRENCY,
                    POLH_CURRENCY_RATE = polh.POLH_CURRENCY_RATE,

                }).Single();
            }
            catch (Exception e)
            {
                var exception = e;
                return null;
            }
        }

        public static IEnumerable<INS_UWD_POLICY_HEAD> get_policys_est()
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "MOTO" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_est);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "MOTO"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> search_policys(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static INS_UWD_POLICY_HEAD save_motor(INS_UWD_POLICY_HEAD viewPolh)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    var dbPolh = db.INS_UWD_POLICY_HEAD.Find(viewPolh.POLH_SYS_ID);
                    switch (viewPolh.POLH_STATUS)
                    {
                        case "A":
                            {
                                //policy header before update
                                if (dbPolh != null)
                                {
                                    //update of policy header details
                                    //db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                                    dbPolh.Map(viewPolh);

                                    /*----------------
                                     * motor Risks update
                                     *--------------*/
                                    foreach (var veh in viewPolh.INS_UWD_VEHICLE_RISK)
                                    {
                                        var dbveh = db.INS_UWD_VEHICLE_RISK.Find(veh.VEH_SYS_ID);
                                        veh.VEH_POLH_END_NO = Convert.ToInt32(dbPolh.POLH_END_NO);

                                        switch (veh.VEH_STATUS)
                                        {
                                            case "A":
                                                if (dbveh != null)
                                                {
                                                    db.INS_UWD_VEHICLE_RISK.Attach(dbveh);
                                                    dbveh.Map(veh);
                                                    /*----------------
                                                     * Risk Covers update
                                                     *--------------*/
                                                    foreach (var cover in veh.INS_UWD_RISK_COVERS)
                                                    {
                                                        var dbcover = db.INS_UWD_RISK_COVERS.Find(cover.RCOV_SYS_ID);
                                                        cover.RPCOV_END_NO = Convert.ToInt32(dbPolh.POLH_END_NO);

                                                        switch (cover.RCOV_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcover != null)
                                                                {
                                                                    db.INS_UWD_RISK_COVERS.Attach(dbcover);
                                                                    dbcover.Map(cover);
                                                                }

                                                                break;

                                                            case "U":

                                                                cover.RCOV_STATUS = "A";

                                                                db.INS_UWD_RISK_COVERS.Add(cover);
                                                                break;

                                                            case "D":

                                                                db.INS_UWD_RISK_COVERS.Remove(db.INS_UWD_RISK_COVERS.Find(cover.RCOV_SYS_ID));
                                                                break;
                                                        }

                                                    }
                                                }

                                                break;

                                            case "U":
                                               
                                                veh.VEH_STATUS = "A";
                                                veh.VEH_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UWD_VEHICLE_RISK.Add(veh);
                                                break;
                                       
                                            case "D":
                                               
                                                db.INS_UWD_VEHICLE_RISK.Remove(db.INS_UWD_VEHICLE_RISK.Find(veh.VEH_SYS_ID));
                                                break;
                                        }

                                    }
                         

                                    // Vehicle Fees
                                    foreach (var fee in viewPolh.INS_UDW_POL_FEES)
                                    {
                                        var dbFee = db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID);
                                        switch (fee.POL_FEE_STATUS)
                                        {
                                            case "A":
                                                if (dbFee != null)
                                                {
                                                    db.INS_UDW_POL_FEES.Attach(dbFee);
                                                    dbFee.Map(fee);
                                                }

                                                break;
                                            case "U":
                                                fee.POL_FEE_STATUS = "A";
                                                fee.POL_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_POL_FEES.Add(fee);

                                                break;
                                            case "D":
                                                db.INS_UDW_POL_FEES.Remove(db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID));
                                                break;
                                        }

                                    }


                                    /*----------------
                                    * FAC Inward/Co-insurance Member
                                    *--------------*/
                                    foreach (var facIn in viewPolh.INS_RI_FAC_INWARD)
                                    {
                                        var dbFacIn = db.INS_RI_FAC_INWARD.Find(facIn.FINW_SYS_ID);
                                        switch (facIn.FINW_STATUS)
                                        {
                                            case "A":
                                                if (dbFacIn != null)
                                                {
                                                    db.INS_RI_FAC_INWARD.Attach(dbFacIn);
                                                    dbFacIn.Map(facIn);

                                                 /*----------------
                                                 * Participating Companies
                                                 *--------------*/
                                                    foreach (var pap in facIn.INS_RI_FAC_INW_COMPANY)
                                                    {
                                                        var dbcover = db.INS_RI_FAC_INW_COMPANY.Find(pap.FINW_PAP_SYS_ID);
                                                       
                                                        switch (pap.FINW_PAP_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcover != null)
                                                                {
                                                                    db.INS_RI_FAC_INW_COMPANY.Attach(dbcover);
                                                                    dbcover.Map(pap);
                                                                }

                                                                break;

                                                            case "U":

                                                                pap.FINW_PAP_STATUS = "A";
                                                                db.INS_RI_FAC_INW_COMPANY.Add(pap);
                                                                break;

                                                            case "D":

                                                                db.INS_RI_FAC_INW_COMPANY.Remove(db.INS_RI_FAC_INW_COMPANY.Find(pap.FINW_PAP_SYS_ID));
                                                                break;
                                                        }

                                                    }


                                                } 

                                                break;
                                            case "U":
                                                facIn.FINW_STATUS = "A"; 
                                                facIn.FINW_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_RI_FAC_INWARD.Add(facIn);

                                                break;
                                            case "D":
                                                db.INS_RI_FAC_INWARD.Remove(db.INS_RI_FAC_INWARD.Find(facIn.FINW_SYS_ID));
                                                break;
                                        }

                                    }


                                    /*-------------------------------
                                    * FAC Outward/Co-insurance Leader
                                    *--------------------------------*/
                                    foreach (var facout in viewPolh.INS_RI_FAC_OUTWARD)
                                    {
                                        var dbFacOut = db.INS_RI_FAC_OUTWARD.Find(facout.FOTW_SYS_ID);
                                        switch (facout.FOTW_STATUS)
                                        {
                                            case "A":
                                                if (dbFacOut != null)
                                                {
                                                    db.INS_RI_FAC_OUTWARD.Attach(dbFacOut);
                                                    dbFacOut.Map(facout);
                                                }

                                                break;
                                            case "U":
                                                facout.FOTW_STATUS = "A";
                                                facout.FOTW_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_RI_FAC_OUTWARD.Add(dbFacOut);

                                                break;
                                            case "D":
                                                db.INS_RI_FAC_OUTWARD.Remove(db.INS_RI_FAC_OUTWARD.Find(facout.FOTW_SYS_ID));
                                                break;
                                        }

                                    }



                                }
                            }
                            break;
                        case "U":

                            viewPolh.POLH_STATUS = "A";
                            viewPolh.POLH_DISPLAY_NO = viewPolh.POLH_CMP_CODE + viewPolh.POLH_SUB_CLASS_CODE + viewPolh.POLH_SYS_ID;
                            viewPolh.POLH_QUT_SER_NO = viewPolh.POLH_SYS_ID;

                            /*-----------------------------------------
                             * updating the status of related tables
                             *---------------------------------------*/
                            viewPolh.INS_UWD_VEHICLE_RISK.ForEach(x => {
                                x.VEH_STATUS = "A";
                                x.INS_UWD_RISK_COVERS.ForEach(c => c.RCOV_STATUS = "A");
                            });

                            db.INS_UWD_POLICY_HEAD.Add(viewPolh);

                            db.SaveChanges();

                            /*---------------------------------
                             * create premium register record
                             *-------------------------------*/

                            db.INS_PREMIUM_REGISTER.Add(new INS_PREMIUM_REGISTER
                            {
                                PR_ACCT_YN = "Y",
                                PR_BC_AMOUNT = viewPolh.POLH_POL_PREM_BC,
                                PR_BUS_SOURCE = viewPolh.POLH_BIZ_SOURCE,
                                PR_COB = viewPolh.POLH_CLASS_CODE,
                                PR_CRTE_BY = viewPolh.POLH_CRTE_BY,
                                PR_CRTE_DATE = DateTime.Now.Date,
                                PR_CURRENCY = viewPolh.POLH_CURRENCY,
                                PR_CUST_ACCT = CustomerMdl.get_customer(viewPolh.POLH_CUST_CODE).CUS_TYPE_CODE,
                                PR_CUST_CODE = viewPolh.POLH_CUST_CODE,
                                PR_END_NO = (int?)viewPolh.POLH_END_NO,
                                PR_FC_AMOUNT = viewPolh.POLH_POL_PREM_FC,
                                PR_FX_RATE = viewPolh.POLH_CURRENCY_RATE,
                                PR_INS_SOURCE = viewPolh.POLH_INS_SOURCE,
                                PR_OFFICE = viewPolh.POLH_OFF_CODE,
                                PR_POL_SYS_ID = viewPolh.POLH_SYS_ID,
                                PR_POST_DATE = null,
                                PR_STATUS = "A",
                                PR_TTY_SOURCE = null,
                                PR_TXN_REF = (int)SystemConstants.UnderwritingPremium,
                                PR_UWD_ACCT_TYPE = viewPolh.POLH_INS_SOURCE
                            });
                            

                            break;
                        case "D":
                            {
                                /*--------------------------
                                 * update of policy details
                                 *------------------------*/
                                //
                                if (dbPolh != null)
                                {
                                    db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                                    dbPolh.POLH_STATUS = "D";
                                }

                            }
                            break;
                    }
                    db.SaveChanges();
                    trans.Commit();
                    return new INS_UWD_POLICY_HEAD
                    {
                        POLH_SYS_ID = viewPolh.POLH_SYS_ID,
                        POLH_END_NO = viewPolh.POLH_END_NO,
                        POLH_STATUS = viewPolh.POLH_STATUS,
                        POLH_POL_STATE = viewPolh.POLH_POL_STATE,
                        POLH_TXN_STATE = viewPolh.POLH_TXN_STATE,
                        POLH_DISPLAY_NO = viewPolh.POLH_DISPLAY_NO,
                        POLH_QUT_SER_NO = viewPolh.POLH_QUT_SER_NO
                    };
                }
                catch (Exception e)
                {
                    trans.Rollback();

                    throw;
                }
            }

        }


        public static INS_UWD_POLICY_HEAD SaveEndsmntCancl(INS_UWD_POLICY_HEAD viewPolh)
        {
            var db = new SibaModel();
            var dbPolh = db.INS_UWD_POLICY_HEAD.Find(viewPolh.POLH_SYS_ID);
            if (dbPolh != null)
            {
                //update of policy header details
                //db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                dbPolh.Map(viewPolh);

                /*----------------
                 * motor update
                 *--------------*/
                foreach (var veh in viewPolh.INS_UWD_VEHICLE_RISK)
                {
                    var dbveh = db.INS_UWD_VEHICLE_RISK.Find(veh.VEH_SYS_ID);
                    switch (veh.VEH_STATUS)
                    {
                        case "A":
                            if (dbveh != null)
                            {
                                db.INS_UWD_VEHICLE_RISK.Attach(dbveh);
                                dbveh.Map(veh);
                            }

                            break;
                        case "U":
                            veh.VEH_STATUS = "A";
                            veh.VEH_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UWD_VEHICLE_RISK.Add(veh);

                            break;
                        case "D":
                            db.INS_UWD_VEHICLE_RISK.Remove(db.INS_UWD_VEHICLE_RISK.Find(veh.VEH_SYS_ID));
                            break;
                    }


                }

                foreach (var fee in viewPolh.INS_UDW_POL_FEES)
                {
                    var dbFee = db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID);
                    switch (fee.POL_FEE_STATUS)
                    {
                        case "A":
                            if (dbFee != null)
                            {
                                db.INS_UDW_POL_FEES.Attach(dbFee);
                                dbFee.Map(fee);
                            }

                            break;
                        case "U":
                            fee.POL_FEE_STATUS = "A";
                            fee.POL_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                            db.INS_UDW_POL_FEES.Add(fee);

                            break;
                        case "D":
                            db.INS_UDW_POL_FEES.Remove(db.INS_UDW_POL_FEES.Find(fee.POL_FEE_SYS_ID));
                            break;
                    }


                }



            }
            db.SaveChanges();
            return viewPolh;

        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UWD_VEHICLE_RISK
                        where risk.VEH_POLH_SYS_ID == ProdCode && risk.VEH_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.VEH_STATUS,
                            CLM_RISK_VEH_REG_NO = risk.VEH_VEH_REG_NO,
                            CLM_RISK_CHASIS_NO = risk.VEH_CHASSIS_NO,
                            CLM_RISK_VEH_NO = risk.VEH_RISK_NO,
                            CLM_RISK_VEH_TYPE = risk.VEH_BODY_TYPE,
                            CLM_RISK_MAKE_MODEL = risk.VEH_MODEL,
                            CLM_EST_CRTE_BY = risk.VEH_CRTE_BY,
                            CLM_EST_CRTE_DATE = risk.VEH_CRTE_DATE
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }
    }

}
