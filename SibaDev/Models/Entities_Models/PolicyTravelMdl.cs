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
    public class PolicyTravelMdl : Model
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
                   
                    INS_UDW_TRAVEL_RISK_HEAD = polh.INS_UDW_TRAVEL_RISK_HEAD != null ? polh.INS_UDW_TRAVEL_RISK_HEAD.Select(c =>
                         new INS_UDW_TRAVEL_RISK_HEAD
                         {
                             TRAH_SYS_ID = c.TRAH_SYS_ID,
                             TRAH_POLH_SYS_ID = c.TRAH_POLH_SYS_ID,
                             TRAH_POLH_DOC_NO = c.TRAH_POLH_DOC_NO,
                             TRAH_POLH_END_NO = c.TRAH_POLH_END_NO,
                             TRAH_RISK_CODE = c.TRAH_RISK_CODE,
                             TRAH_RISK_NAME = c.TRAH_RISK_NAME,
                             TRAH_CURRENCY = c.TRAH_CURRENCY,
                             TRAH_COVERAGE = c.TRAH_COVERAGE,
                             TRAH_CURRENCY_RATE = c.TRAH_CURRENCY_RATE,
                             TRAH_DAYS = c.TRAH_DAYS,
                             TRAH_END_DATE = c.TRAH_END_DATE,
                             TRAH_PLAN = c.TRAH_PLAN,
                             TRAH_START_DATE = c.TRAH_START_DATE,
                             TRAH_VISA_TYPE = c.TRAH_VISA_TYPE,
                             TRAH_WEEKS = c.TRAH_WEEKS,
                             TRAH_EMB_ADDRESS = c.TRAH_EMB_ADDRESS,
                             TRAH_EMB_CONTACT = c.TRAH_EMB_CONTACT,
                             TRAH_EMB_COUNTRY = c.TRAH_EMB_COUNTRY,
                             TRAH_EMB_NAME = c.TRAH_EMB_NAME,
                             TRAH_CRTE_BY = c.TRAH_CRTE_BY,
                             TRAH_CRTE_DATE = c.TRAH_CRTE_DATE,
                             TRAH_MOD_BY = c.TRAH_MOD_BY,
                             TRAH_MOD_DATE = c.TRAH_MOD_DATE,
                             TRAH_STATUS = c.TRAH_STATUS,

                         }).ToList() : null,

                    INS_UDW_TRAVEL_RISK = polh.INS_UDW_TRAVEL_RISK != null ? polh.INS_UDW_TRAVEL_RISK.Select(r => get_traveller(r.TRA_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static INS_UDW_TRAVEL_RISK_HEAD get_travel_head(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_TRAVEL_RISK_HEAD where c.TRAH_SYS_ID == code select c).ToList().Select(c => new INS_UDW_TRAVEL_RISK_HEAD
                {
                    TRAH_SYS_ID = c.TRAH_SYS_ID,
                    TRAH_POLH_SYS_ID = c.TRAH_POLH_SYS_ID,
                    TRAH_POLH_DOC_NO = c.TRAH_POLH_DOC_NO,
                    TRAH_POLH_END_NO = c.TRAH_POLH_END_NO,
                    TRAH_RISK_CODE = c.TRAH_RISK_CODE,
                    TRAH_RISK_NAME = c.TRAH_RISK_NAME,
                    TRAH_CURRENCY = c.TRAH_CURRENCY,
                    TRAH_COVERAGE = c.TRAH_COVERAGE,
                    TRAH_CURRENCY_RATE = c.TRAH_CURRENCY_RATE,
                    TRAH_DAYS = c.TRAH_DAYS,
                    TRAH_END_DATE = c.TRAH_END_DATE,
                    TRAH_PLAN = c.TRAH_PLAN,
                    TRAH_START_DATE = c.TRAH_START_DATE,
                    TRAH_VISA_TYPE = c.TRAH_VISA_TYPE,
                    TRAH_WEEKS = c.TRAH_WEEKS,
                    TRAH_EMB_ADDRESS = c.TRAH_EMB_ADDRESS,
                    TRAH_EMB_CONTACT = c.TRAH_EMB_CONTACT,
                    TRAH_EMB_COUNTRY = c.TRAH_EMB_COUNTRY,
                    TRAH_EMB_NAME = c.TRAH_EMB_NAME,
                    TRAH_CRTE_BY = c.TRAH_CRTE_BY,
                    TRAH_CRTE_DATE = c.TRAH_CRTE_DATE,
                    TRAH_MOD_BY = c.TRAH_MOD_BY,
                    TRAH_MOD_DATE = c.TRAH_MOD_DATE,
                    TRAH_STATUS = c.TRAH_STATUS,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }


        public static INS_UDW_TRAVEL_RISK get_traveller(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_TRAVEL_RISK where c.TRA_SYS_ID == code select c).ToList().Select(c => new INS_UDW_TRAVEL_RISK
                {
                    TRA_SYS_ID = c.TRA_SYS_ID,
                    TRA_POLH_SYS_ID = c.TRA_POLH_SYS_ID,
                    TRA_POLH_DOC_NO = c.TRA_POLH_DOC_NO,
                    TRA_POLH_END_NO = c.TRA_POLH_END_NO,
                    TRA_FULL_NAME = c.TRA_FULL_NAME,
                    TRA_DOB = c.TRA_DOB,
                    TRA_AGE = c.TRA_AGE,
                    TRA_GENDER = c.TRA_GENDER,
                    TRA_OCCUPATION = c.TRA_OCCUPATION,
                    TRA_NATIONALITY = c.TRA_NATIONALITY,
                    TRA_NATIONAL_ID = c.TRA_NATIONAL_ID,
                    TRA_PASSPORT_NO = c.TRA_PASSPORT_NO,
                    TRA_ISSUING_CTY = c.TRA_ISSUING_CTY,
                    TRA_EXPIRY_DATE = c.TRA_EXPIRY_DATE,
                    TRA_COUNTRY_VISIT = c.TRA_COUNTRY_VISIT,
                    TRA_DESTIN_ADDRESS = c.TRA_DESTIN_ADDRESS,
                    TRA_DESTIN_PHONE = c.TRA_DESTIN_PHONE,
                    TRA_BENFI_NAME = c.TRA_BENFI_NAME,
                    TRA_RELATIONSHIP = c.TRA_RELATIONSHIP,
                    TRA_CONTACT = c.TRA_CONTACT,
                    TRA_DECLARATION = c.TRA_DECLARATION,
                    TRA_DECLARATION_DTS = c.TRA_DECLARATION_DTS,
                    TRA_RISK_PREM_FC = c.TRA_RISK_PREM_FC,
                    TRA_RISK_PREM_BC = c.TRA_RISK_PREM_BC,
                    TRA_ADJ_PREM_FC = c.TRA_ADJ_PREM_FC,
                    TRA_ADJ_PREM_BC = c.TRA_ADJ_PREM_BC,
                    TRA_DISC_FC = c.TRA_DISC_FC,
                    TRA_DISC_BC = c.TRA_DISC_BC,
                    TRA_LOAD_FC = c.TRA_LOAD_FC,
                    TRA_LOAD_BC = c.TRA_LOAD_BC,
                    TRA_COMP_FEE_FC = c.TRA_COMP_FEE_FC,
                    TRA_COMP_FEE_BC = c.TRA_COMP_FEE_BC,
                    TRA_COMMISSION_FC = c.TRA_COMMISSION_FC,
                    TRA_COMMISSION_BC = c.TRA_COMMISSION_BC,
                    TRA_TXN_STATUS = c.TRA_TXN_STATUS,
                    TRA_RISK_STATE = c.TRA_RISK_STATE,
                    TRA_RISK_NO = c.TRA_RISK_NO,
                    TRA_PDT_CODE = c.TRA_PDT_CODE,
                    TRA_CVR_CODE = c.TRA_CVR_CODE,
                    TRA_RENEWAL_STATUS = c.TRA_RENEWAL_STATUS,
                    TRA_END_TYPE = c.TRA_END_TYPE,
                    TRA_APPROVE_DATE = c.TRA_APPROVE_DATE,
                    TRA_ACCT_DATE = c.TRA_ACCT_DATE,
                    TRA_CRTE_BY = c.TRA_CRTE_BY,
                    TRA_CRTE_DATE = c.TRA_CRTE_DATE,
                    TRA_MOD_BY = c.TRA_MOD_BY,
                    TRA_MOD_DATE = c.TRA_MOD_DATE,
                    TRA_STATUS = c.TRA_STATUS,
                    TRA_SI_FC = c.TRA_SI_FC,
                    TRA_SI_BC = c.TRA_SI_BC,
                    TRA_TOT_PREM_FC = c.TRA_TOT_PREM_FC,
                    TRA_TOT_PREM_BC = c.TRA_TOT_PREM_BC,
                    TRA_POL_CANCELLED = c.TRA_POL_CANCELLED,
                    TRA_CANCELLED_REASON = c.TRA_CANCELLED_REASON,
                    INS_UWD_RISK_COVERS = c.INS_UWD_RISK_COVERS != null ? c.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }


        public static IEnumerable<INS_UWD_POLICY_HEAD> get_policys()
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy);
        }


        public static IEnumerable<object> search_policys(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A"
                    select polh.POLH_SYS_ID).ToList().Select(get_policy);
        }


        public static INS_UWD_POLICY_HEAD save_policy(INS_UWD_POLICY_HEAD viewPolh)
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
                                    db.INS_UWD_POLICY_HEAD.Attach(dbPolh);
                                    dbPolh.Map(viewPolh);

                                    /*--------------------------------
                                    * travel head
                                    *-------------------------------*/
                                    foreach (var trah in viewPolh.INS_UDW_TRAVEL_RISK_HEAD)
                                    {
                                        trah.TRAH_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (trah.TRAH_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_UDW_TRAVEL_RISK_HEAD.Find(trah.TRAH_SYS_ID);
                                                db.INS_UDW_TRAVEL_RISK_HEAD.Attach(dbveh);

                                                dbveh.Map(trah);
                                                break;
                                            case "U":
                                                trah.TRAH_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                trah.TRAH_STATUS = "A";
                                                db.INS_UDW_TRAVEL_RISK_HEAD.Add(trah);
                                                break;
                                            case "D":
                                                db.INS_UDW_TRAVEL_RISK_HEAD.Remove(db.INS_UDW_TRAVEL_RISK_HEAD.Find(trah.TRAH_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*--------------------------------
                                    * travel 
                                    *-------------------------------*/

                                    foreach (var bon in viewPolh.INS_UDW_TRAVEL_RISK)
                                    {
                                        var dbbon = db.INS_UDW_TRAVEL_RISK.Find(bon.TRA_SYS_ID);
                                        switch (bon.TRA_STATUS)
                                        {
                                            case "A":
                                                if (dbbon != null)
                                                {
                                                    db.INS_UDW_TRAVEL_RISK.Attach(dbbon);
                                                    dbbon.Map(bon);

                                                    /*--------------------------------
                                                    * Risk Covers
                                                    *-------------------------------*/

                                                    foreach (var cover in bon.INS_UWD_RISK_COVERS)
                                                    {
                                                        var dbcovers = db.INS_UWD_RISK_COVERS.Find(cover.RCOV_SYS_ID);
                                                        switch (cover.RCOV_STATUS)
                                                        {
                                                            case "A":
                                                                if (dbcovers != null)
                                                                {
                                                                    db.INS_UWD_RISK_COVERS.Attach(dbcovers);
                                                                    dbcovers.Map(cover);
                                                                    dbcovers.RCOV_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;

                                                            case "U":
                                                                cover.RCOV_STATUS = "A";
                                                                cover.RCOV_MOD_DATE = DateTime.Now;
                                                                cover.RCOV_RISK_SYS_ID = bon.TRA_SYS_ID;
                                                                db.INS_UWD_RISK_COVERS.Add(cover);
                                                                break;

                                                            case "D":
                                                                if (dbcovers != null)
                                                                {
                                                                    db.INS_UWD_RISK_COVERS.Attach(dbcovers);
                                                                    dbcovers.RCOV_STATUS = "D";
                                                                    dbcovers.RCOV_MOD_DATE = DateTime.Now;
                                                                }
                                                                break;
                                                        }
                                                    }

                                                }
                                                break;
                                            case "U":
                                                bon.TRA_STATUS = "A";
                                                bon.TRA_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_TRAVEL_RISK.Add(bon);
                                                break;
                                            case "D":
                                                db.INS_UDW_TRAVEL_RISK.Remove(db.INS_UDW_TRAVEL_RISK.Find(bon.TRA_SYS_ID));
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

                                    foreach (var fees in viewPolh.INS_UDW_TRAVEL_FEES)
                                    {
                                        var dbrkfees = db.INS_UDW_TRAVEL_FEES.Find(fees.TRA_FEE_SYS_ID);
                                        switch (fees.TRA_FEE_STATUS)
                                        {
                                            case "A":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_TRAVEL_FEES.Attach(dbrkfees);
                                                    dbrkfees.Map(fees);
                                                }
                                                break;

                                            case "U":
                                                fees.TRA_FEE_STATUS = "A";
                                                fees.TRA_FEE_CRTE_DATE = DateTime.Now;
                                                fees.TRA_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_TRAVEL_FEES.Add(fees);
                                                break;

                                            case "D":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_TRAVEL_FEES.Attach(dbrkfees);
                                                    dbrkfees.TRA_FEE_STATUS = "D";
                                                }
                                                break;
                                        }
                                    }

                                    db.SaveChanges();
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
                            viewPolh.INS_UDW_TRAVEL_RISK.ForEach(x => {
                                x.TRA_STATUS = "A";
                                x.INS_UWD_RISK_COVERS.ForEach(c => c.RCOV_STATUS = "A");
                            });

                            viewPolh.INS_UDW_TRAVEL_RISK_HEAD.ForEach(x => x.TRAH_STATUS = "A");

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
                            db.SaveChanges();

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
                catch (Exception)
                {
                    trans.Rollback();
                    throw;
                }
            }

        }


        public static INS_UWD_POLICY_HEAD get_policy_estimation(int code)
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
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "TRA" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_estimation);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "TRA"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UDW_TRAVEL_RISK
                        where risk.TRA_POLH_SYS_ID == ProdCode && risk.TRA_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.TRA_STATUS,
                            CLM_RISK_CLT_NAME = risk.TRA_FULL_NAME,
                            CLM_RISK_NAT = risk.TRA_NATIONALITY,
                            CLM_RISK_NAT_ID = risk.TRA_NATIONAL_ID,
                            CLM_RISK_PASSPORT_NO = risk.TRA_PASSPORT_NO,
                            CLM_RISK_COUNTRY_VISITED = risk.TRA_COUNTRY_VISIT,
                            CLM_RISK_DESTIN_ADDRSS = risk.TRA_DESTIN_ADDRESS,
                            CLM_RISK_PHONE_NO = risk.TRA_DESTIN_PHONE
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}