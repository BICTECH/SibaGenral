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
    public class PolicyGAMdl : Model
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
                   
                    INS_UDW_GENERAL_ACCIDENT = polh.INS_UDW_GENERAL_ACCIDENT != null ? polh.INS_UDW_GENERAL_ACCIDENT.Select(c =>
                         new INS_UDW_GENERAL_ACCIDENT
                         {
                             GA_SYS_ID = c.GA_SYS_ID,
                             GA_RISK_ID = c.GA_RISK_ID,
                             GA_POLH_SYS_ID = c.GA_POLH_SYS_ID,
                             GA_POLH_DOC_NO = c.GA_POLH_DOC_NO,
                             GA_POLH_END_NO = c.GA_POLH_END_NO,
                             GA_PDT_CODE = c.GA_PDT_CODE,
                             GA_CVR_CODE = c.GA_CVR_CODE,
                             GA_RENEWAL_STATUS = c.GA_RENEWAL_STATUS,
                             GA_END_TYPE = c.GA_END_TYPE,
                             GA_START_DATE = c.GA_START_DATE,
                             GA_END_DATE = c.GA_END_DATE,
                             GA_CURRENCY = c.GA_CURRENCY,
                             GA_CURRENCY_RATE = c.GA_CURRENCY_RATE,
                             GA_REGION_CODE = c.GA_REGION_CODE,
                             GA_REGION_NAME = c.GA_REGION_NAME,
                             GA_AREA_CODE = c.GA_AREA_CODE,
                             GA_AREA_NAME = c.GA_AREA_NAME,
                             GA_LOC_CODE = c.GA_LOC_CODE,
                             GA_LOC_NAME = c.GA_LOC_NAME,
                             GA_LOC_DESC = c.GA_LOC_DESC,
                             GA_LOC_ADDRS = c.GA_LOC_ADDRS,
                             GA_EARTHQ_ZONE = c.GA_EARTHQ_ZONE,
                             GA_FIRST_LOSS = c.GA_FIRST_LOSS,
                             GA_TOT_PREM_FC = c.GA_TOT_PREM_FC,
                             GA_TOT_PREM_BC = c.GA_TOT_PREM_BC,
                             GA_SI_FC = c.GA_SI_FC,
                             GA_SI_BC = c.GA_SI_BC,
                             GA_RISK_PREM_FC = c.GA_RISK_PREM_FC,
                             GA_RISK_PREM_BC = c.GA_RISK_PREM_BC,
                             GA_ADJ_PREM_FC = c.GA_ADJ_PREM_FC,
                             GA_ADJ_PREM_BC = c.GA_ADJ_PREM_BC,
                             GA_DISC_FC = c.GA_DISC_FC,
                             GA_DISC_BC = c.GA_DISC_BC,
                             GA_LOAD_FC = c.GA_LOAD_FC,
                             GA_LOAD_BC = c.GA_LOAD_BC,
                             GA_COMP_FEE_FC = c.GA_COMP_FEE_FC,
                             GA_COMP_FEE_BC = c.GA_COMP_FEE_BC,
                             GA_COMMISSION_FC = c.GA_COMMISSION_FC,
                             GA_COMMISSION_BC = c.GA_COMMISSION_BC,
                             GA_CRTE_BY = c.GA_CRTE_BY,
                             GA_CRTE_DATE = c.GA_CRTE_DATE,
                             GA_STATUS = c.GA_STATUS,

                         }).ToList() : null,

                    INS_GA_ASSET_ALL_RISK = polh.INS_GA_ASSET_ALL_RISK != null ? polh.INS_GA_ASSET_ALL_RISK.Select(c =>
                         new INS_GA_ASSET_ALL_RISK
                         {
                             AAR_SYS_ID = c.AAR_SYS_ID,
                             AAR_POLH_SYS_ID = c.AAR_POLH_SYS_ID,
                             AAR_GA_SYS_ID = c.AAR_GA_SYS_ID,
                             AAR_RISK_TYPE = c.AAR_RISK_TYPE,
                             AAR_RISK_NAME = c.AAR_RISK_NAME,
                             AAR_DESCRIPTION = c.AAR_DESCRIPTION,
                             AAR_LIMIT_LIABILITY = c.AAR_LIMIT_LIABILITY,
                             AAR_CRTE_BY = c.AAR_CRTE_BY,
                             AAR_CRTE_DATE = c.AAR_CRTE_DATE,
                             AAR_STATUS = c.AAR_STATUS,
                             AAR_POLH_END_NO = c.AAR_POLH_END_NO,
                             AAR_RISK_ID = c.AAR_RISK_ID,    

                         }).ToList() : null,


                    INS_GA_ASSET_TRANSIT = polh.INS_GA_ASSET_TRANSIT != null ? polh.INS_GA_ASSET_TRANSIT.Select(c =>
                         new INS_GA_ASSET_TRANSIT
                         {
                             TRANS_SYS_ID = c.TRANS_SYS_ID,
                             TRANS_GA_SYS_ID = c.TRANS_GA_SYS_ID,
                             TRANS_POLH_SYS_ID = c.TRANS_POLH_SYS_ID,
                             TRANS_RISK_TYPE = c.TRANS_RISK_TYPE,
                             TRANS_RISK_NAME = c.TRANS_RISK_NAME,
                             TRANS_DESCRIPTION = c.TRANS_DESCRIPTION,
                             TRANS_SUM_INSURED = c.TRANS_SUM_INSURED,
                             TRANS_LIMIT_LOSS = c.TRANS_LIMIT_LOSS,
                             TRANS_DENT_FROM = c.TRANS_DENT_FROM,
                             TRANS_DENT_T0 = c.TRANS_DENT_T0,
                             TRANS_DISTANCE = c.TRANS_DISTANCE,
                             TRANS_CRTE_BY = c.TRANS_CRTE_BY,
                             TRANS_CRTE_DATE = c.TRANS_CRTE_DATE,
                             TRANS_STATUS = c.TRANS_STATUS,
                             TRANS_POLH_END_NO = c.TRANS_POLH_END_NO,
                             TRANS_RISK_ID = c.TRANS_RISK_ID,

                         }).ToList() : null,


                    INS_GA_PROF_INDEMNITY = polh.INS_GA_PROF_INDEMNITY != null ? polh.INS_GA_PROF_INDEMNITY.Select(c =>
                             new INS_GA_PROF_INDEMNITY
                             {
                                 PRO_SYS_ID = c.PRO_SYS_ID,
                                 PRO_RISK_ID = c.PRO_RISK_ID,
                                 PRO_GA_SYS_ID = c.PRO_GA_SYS_ID,
                                 PRO_POLH_SYS_ID = c.PRO_POLH_SYS_ID,
                                 PRO_POLH_END_NO = c.PRO_POLH_END_NO,
                                 PRO_ITEM = c.PRO_ITEM,
                                 PRO_ITEM_DESC = c.PRO_ITEM_DESC,
                                 PRO_AGGRET_LIMIT = c.PRO_AGGRET_LIMIT,
                                 PRO_LIMIT_OCCUR = c.PRO_LIMIT_OCCUR,
                                 PRO_PREM_FC = c.PRO_PREM_FC,
                                 PRO_LIMIT_LOSS = c.PRO_LIMIT_LOSS,
                                 PRO_ANN_TURNOVER = c.PRO_ANN_TURNOVER,
                                 PRO_DENT_FROM = c.PRO_DENT_FROM,
                                 PRO_DENT_TO = c.PRO_DENT_TO,
                                 PRO_DISTANCE = c.PRO_DISTANCE,
                                 PRO_CRTE_BY = c.PRO_CRTE_BY,
                                 PRO_CRTE_DATE = c.PRO_CRTE_DATE,
                                 PRO_STATUS = c.PRO_STATUS,

                             }).ToList() : null,

                    INS_UWD_RISK_COVERS = polh.INS_UWD_RISK_COVERS != null ? polh.INS_UWD_RISK_COVERS.Select(v =>
                        new INS_UWD_RISK_COVERS
                        {
                            RCOV_SYS_ID = v.RCOV_SYS_ID,
                            RCOV_RISK_SYS_ID = v.RCOV_RISK_SYS_ID,
                            RCOV_RISK_NO = v.RCOV_RISK_NO,
                            RCOV_POLH_DOC_NO = v.RCOV_POLH_DOC_NO,
                            RPCOV_END_NO = v.RPCOV_END_NO,
                            RCOV_CODE = v.RCOV_CODE,
                            RCOV_NO = v.RCOV_NO,
                            RCOV_SI_FC = v.RCOV_SI_FC,
                            RCOV_SI_BC = v.RCOV_SI_BC,
                            RCOV_RATE = v.RCOV_RATE,
                            RCOV_GROSS_PREM_FC = v.RCOV_GROSS_PREM_FC,
                            RCOV_GROSS_PREM_BC = v.RCOV_GROSS_PREM_BC,
                            RCOV_NET_PREM_FC = v.RCOV_NET_PREM_FC,
                            RCOV_NET_PREM_BC = v.RCOV_NET_PREM_BC,
                            RCOV_RI_SI_YN = v.RCOV_RI_SI_YN,
                            RCOV_RI_PREM_YN = v.RCOV_RI_PREM_YN,
                            RCOV_TYPE = v.RCOV_TYPE,
                            RCOV_DISC_YN = v.RCOV_DISC_YN,
                            RCOV_DISC_FC = v.RCOV_DISC_FC,
                            RCOV_DISC_BC = v.RCOV_DISC_BC,
                            RCOV_LOAD_YN = v.RCOV_LOAD_YN,
                            RCOV_LOAD_FC = v.RCOV_LOAD_FC,
                            RCOV_LOAD_BC = v.RCOV_LOAD_BC,
                            RCOV_TXN_STATE = v.RCOV_TXN_STATE,
                            RCOV_CRTE_BY = v.RCOV_CRTE_BY,
                            RCOV_CRTE_DATE = v.RCOV_CRTE_DATE,
                            RCOV_MOD_BY = v.RCOV_MOD_BY,
                            RCOV_MOD_DATE = v.RCOV_MOD_DATE,
                            RCOV_STATUS = v.RCOV_STATUS,

                        }).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static INS_UDW_GENERAL_ACCIDENT get_ga_header(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UDW_GENERAL_ACCIDENT where c.GA_SYS_ID == code select c).ToList().Select(c => new INS_UDW_GENERAL_ACCIDENT
                {
                    GA_SYS_ID = c.GA_SYS_ID,
                    GA_RISK_ID = c.GA_RISK_ID,
                    GA_POLH_SYS_ID = c.GA_POLH_SYS_ID,
                    GA_POLH_DOC_NO = c.GA_POLH_DOC_NO,
                    GA_POLH_END_NO = c.GA_POLH_END_NO,
                    GA_PDT_CODE = c.GA_PDT_CODE,
                    GA_CVR_CODE = c.GA_CVR_CODE,
                    GA_RENEWAL_STATUS = c.GA_RENEWAL_STATUS,
                    GA_END_TYPE = c.GA_END_TYPE,
                    GA_START_DATE = c.GA_START_DATE,
                    GA_END_DATE = c.GA_END_DATE,
                    GA_CURRENCY = c.GA_CURRENCY,
                    GA_CURRENCY_RATE = c.GA_CURRENCY_RATE,
                    GA_REGION_CODE = c.GA_REGION_CODE,
                    GA_REGION_NAME = c.GA_REGION_NAME,
                    GA_AREA_CODE = c.GA_AREA_CODE,
                    GA_AREA_NAME = c.GA_AREA_NAME,
                    GA_LOC_CODE = c.GA_LOC_CODE,
                    GA_LOC_NAME = c.GA_LOC_NAME,
                    GA_LOC_DESC = c.GA_LOC_DESC,
                    GA_LOC_ADDRS = c.GA_LOC_ADDRS,
                    GA_EARTHQ_ZONE = c.GA_EARTHQ_ZONE,
                    GA_FIRST_LOSS = c.GA_FIRST_LOSS,
                    GA_TOT_PREM_FC = c.GA_TOT_PREM_FC,
                    GA_TOT_PREM_BC = c.GA_TOT_PREM_BC,
                    GA_SI_FC = c.GA_SI_FC,
                    GA_SI_BC = c.GA_SI_BC,
                    GA_RISK_PREM_FC = c.GA_RISK_PREM_FC,
                    GA_RISK_PREM_BC = c.GA_RISK_PREM_BC,
                    GA_ADJ_PREM_FC = c.GA_ADJ_PREM_FC,
                    GA_ADJ_PREM_BC = c.GA_ADJ_PREM_BC,
                    GA_DISC_FC = c.GA_DISC_FC,
                    GA_DISC_BC = c.GA_DISC_BC,
                    GA_LOAD_FC = c.GA_LOAD_FC,
                    GA_LOAD_BC = c.GA_LOAD_BC,
                    GA_COMP_FEE_FC = c.GA_COMP_FEE_FC,
                    GA_COMP_FEE_BC = c.GA_COMP_FEE_BC,
                    GA_COMMISSION_FC = c.GA_COMMISSION_FC,
                    GA_COMMISSION_BC = c.GA_COMMISSION_BC,
                    GA_CRTE_BY = c.GA_CRTE_BY,
                    GA_CRTE_DATE = c.GA_CRTE_DATE,
                    GA_STATUS = c.GA_STATUS,
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
                                     * General Accident Header
                                     *-------------------------------*/
                                    foreach (var gahead in viewPolh.INS_UDW_GENERAL_ACCIDENT)
                                    {
                                        gahead.GA_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (gahead.GA_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_UDW_GENERAL_ACCIDENT.Find(gahead.GA_SYS_ID);
                                                db.INS_UDW_GENERAL_ACCIDENT.Attach(dbveh);

                                                dbveh.Map(gahead);
                                                break;
                                            case "U":
                                                gahead.GA_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                gahead.GA_STATUS = "A";
                                                db.INS_UDW_GENERAL_ACCIDENT.Add(gahead);
                                                break;
                                            case "D":
                                                db.INS_UDW_GENERAL_ACCIDENT.Remove(db.INS_UDW_GENERAL_ACCIDENT.Find(gahead.GA_SYS_ID));
                                                break;
                                        }
                                    }

                                    /*--------------------------------
                                     * Asset All risk
                                     *-------------------------------*/
                                    foreach (var assets in viewPolh.INS_GA_ASSET_ALL_RISK)
                                    {
                                        assets.AAR_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (assets.AAR_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_GA_ASSET_ALL_RISK.Find(assets.AAR_SYS_ID);
                                                db.INS_GA_ASSET_ALL_RISK.Attach(dbveh);

                                                dbveh.Map(assets);
                                                break;
                                            case "U":
                                                assets.AAR_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                assets.AAR_STATUS = "A";
                                                db.INS_GA_ASSET_ALL_RISK.Add(assets);
                                                break;
                                            case "D":
                                                db.INS_GA_ASSET_ALL_RISK.Remove(db.INS_GA_ASSET_ALL_RISK.Find(assets.AAR_SYS_ID));
                                                break;
                                        }

                                    }


                                    /*--------------------------------
                                     * Goods/Cash in Transit
                                     *-------------------------------*/
                                    foreach (var transit in viewPolh.INS_GA_ASSET_TRANSIT)
                                    {
                                        transit.TRANS_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (transit.TRANS_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_GA_ASSET_TRANSIT.Find(transit.TRANS_SYS_ID);
                                                db.INS_GA_ASSET_TRANSIT.Attach(dbveh);

                                                dbveh.Map(transit);
                                                break;
                                            case "U":
                                                transit.TRANS_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                transit.TRANS_STATUS = "A";
                                                db.INS_GA_ASSET_TRANSIT.Add(transit);
                                                break;
                                            case "D":
                                                db.INS_GA_ASSET_TRANSIT.Remove(db.INS_GA_ASSET_TRANSIT.Find(transit.TRANS_SYS_ID));
                                                break;
                                        }
                                    }


                                    /*--------------------------------
                                     * Professional Indemity
                                     *-------------------------------*/
                                    foreach (var prof in viewPolh.INS_GA_PROF_INDEMNITY)
                                    {
                                        prof.PRO_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (prof.PRO_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_GA_PROF_INDEMNITY.Find(prof.PRO_SYS_ID);
                                                db.INS_GA_PROF_INDEMNITY.Attach(dbveh);

                                                dbveh.Map(prof);
                                                break;
                                            case "U":
                                                prof.PRO_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                prof.PRO_STATUS = "A";
                                                db.INS_GA_PROF_INDEMNITY.Add(prof);
                                                break;
                                            case "D":
                                                db.INS_GA_PROF_INDEMNITY.Remove(db.INS_GA_PROF_INDEMNITY.Find(prof.PRO_SYS_ID));
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
                            //viewPolh.INS_UWD_RISK_COVERS.ForEach(x => x.RCOV_STATUS = "A");

                            viewPolh.INS_GA_ASSET_ALL_RISK.ForEach(x => x.AAR_STATUS = "A");

                            viewPolh.INS_GA_ASSET_TRANSIT.ForEach(x => x.TRANS_STATUS = "A");

                            viewPolh.INS_GA_PROF_INDEMNITY.ForEach(x => x.PRO_STATUS = "A");

                            db.INS_UWD_POLICY_HEAD.Add(viewPolh);

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
    }
}