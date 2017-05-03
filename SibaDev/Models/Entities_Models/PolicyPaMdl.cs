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
    public class PolicyPaMdl : Model
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
                    //MS_SYS_OFFICE = new MS_SYS_OFFICE { OFF_CODE = polh.MS_SYS_OFFICE.OFF_CODE, OFF_NAME = polh.MS_SYS_OFFICE.OFF_NAME },
                    //MST_UWD_PRODUCT = new MST_UWD_PRODUCT { PDT_CODE = polh.MST_UWD_PRODUCT.PDT_CODE, PDT_NAME = polh.MST_UWD_PRODUCT.PDT_NAME },
                    //MS_SYS_COMPANY = new MS_SYS_COMPANY { CMP_CODE = polh.MS_SYS_COMPANY.CMP_CODE, CMP_NAME = polh.MS_SYS_COMPANY.CMP_NAME },
                    //MS_SYS_EXCHANGE_RATES = new MS_SYS_EXCHANGE_RATES { EXR_CODE = polh.MS_SYS_EXCHANGE_RATES.EXR_CODE, EXR_BASE_RATE = polh.MS_SYS_EXCHANGE_RATES.EXR_BASE_RATE },
                    //MS_SYS_SOURCE_BUSINESS = new MS_SYS_SOURCE_BUSINESS { SRB_CODE = polh.MS_SYS_SOURCE_BUSINESS.SRB_CODE, SRB_NAME = polh.MS_SYS_SOURCE_BUSINESS.SRB_NAME },
                    //MS_UDW_CUSTOMERS = new MS_UDW_CUSTOMERS { CUS_CODE = polh.MS_UDW_CUSTOMERS.CUS_CODE, CUS_OFFICIAL_NAME = polh.MS_UDW_CUSTOMERS.CUS_OFFICIAL_NAME },

                    INS_UDW_PA_INDIVIDUAL = polh.INS_UDW_PA_INDIVIDUAL != null ? polh.INS_UDW_PA_INDIVIDUAL.Select(c =>
                         new INS_UDW_PA_INDIVIDUAL
                         {
                             PA_IND_SYS_ID = c.PA_IND_SYS_ID,
                             PA_IND_PA_SYS_ID = c.PA_IND_PA_SYS_ID,
                             PA_IND_POLH_SYS_ID = c.PA_IND_POLH_SYS_ID,
                             PA_IND_POLH_DOC_NO = c.PA_IND_POLH_DOC_NO,
                             PA_IND_POLH_END_NO = c.PA_IND_POLH_END_NO,
                             PA_IND_RISK_CLASSCODE = c.PA_IND_RISK_CLASSCODE,
                             PA_IND_ISSUE_DATE = c.PA_IND_ISSUE_DATE,
                             PA_IND_RETRO_DATE = c.PA_IND_RETRO_DATE,
                             PA_IND_RISK_CLASSNAME = c.PA_IND_RISK_CLASSNAME,
                             PA_IND_NAME_INSURED = c.PA_IND_NAME_INSURED,
                             PA_IND_DOB = c.PA_IND_DOB,
                             PA_IND_AGE = c.PA_IND_AGE,
                             PA_IND_GENDER = c.PA_IND_GENDER,
                             PA_IND_NAME_NOMINEE = c.PA_IND_NAME_NOMINEE,
                             PA_IND_RELATION = c.PA_IND_RELATION,
                             PA_IND_EARNING = c.PA_IND_EARNING,
                             PA_IND_MONTHLY_INCOME = c.PA_IND_MONTHLY_INCOME,
                             PA_IND_JOB_TYPE = c.PA_IND_JOB_TYPE,
                             PA_IND_RATE = c.PA_IND_RATE,
                             PA_IND_WEEKS = c.PA_IND_WEEKS,
                             PA_IND_WEEKLY_BENEFIT = c.PA_IND_WEEKLY_BENEFIT,
                             PA_IND_DESCRIPTION = c.PA_IND_DESCRIPTION,
                             PA_IND_CRTE_BY = c.PA_IND_CRTE_BY,
                             PA_IND_CRTE_DATE = c.PA_IND_CRTE_DATE,
                             PA_IND_STATUS = c.PA_IND_STATUS,

                         }).ToList() : null,
                    INS_UDW_TRAVEL_RISK = polh.INS_UDW_TRAVEL_RISK != null ? polh.INS_UDW_TRAVEL_RISK.Select(c =>
                         new INS_UDW_TRAVEL_RISK
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
                                     * PA Individual
                                     *-------------------------------*/
                                    foreach (var parisk in viewPolh.INS_UDW_PA_INDIVIDUAL)
                                    {
                                        parisk.PA_IND_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (parisk.PA_IND_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_UDW_PA_INDIVIDUAL.Find(parisk.PA_IND_SYS_ID);
                                                db.INS_UDW_PA_INDIVIDUAL.Attach(dbveh);

                                                dbveh.Map(parisk);
                                                break;
                                            case "U":
                                                parisk.PA_IND_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                parisk.PA_IND_STATUS = "A";
                                                db.INS_UDW_PA_INDIVIDUAL.Add(parisk);
                                                break;
                                            case "D":
                                                db.INS_UDW_PA_INDIVIDUAL.Remove(db.INS_UDW_PA_INDIVIDUAL.Find(parisk.PA_IND_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*--------------------------------
                                     * PA Group Named
                                     *-------------------------------*/
                                    foreach (var pagrp in viewPolh.INS_UDW_PA_GROUP_NAMED)
                                    {
                                        pagrp.PA_GRP_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (pagrp.PA_GRP_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_UDW_PA_GROUP_NAMED.Find(pagrp.PA_GRP_SYS_ID);
                                                db.INS_UDW_PA_GROUP_NAMED.Attach(dbveh);

                                                dbveh.Map(pagrp);
                                                break;
                                            case "U":
                                                pagrp.PA_GRP_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                pagrp.PA_GRP_STATUS = "A";
                                                db.INS_UDW_PA_GROUP_NAMED.Add(pagrp);
                                                break;
                                            case "D":
                                                db.INS_UDW_PA_GROUP_NAMED.Remove(db.INS_UDW_PA_GROUP_NAMED.Find(pagrp.PA_GRP_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*--------------------------------
                                     * PA Group Un-Named
                                     *-------------------------------*/
                                    foreach (var pagrp in viewPolh.INS_UDW_PA_GROUP_UNAMED)
                                    {
                                        pagrp.PA_GRP_UN_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (pagrp.PA_GRP_UN_STATUS)
                                        {
                                            case "A":
                                                var dbveh = db.INS_UDW_PA_GROUP_UNAMED.Find(pagrp.PA_GRP_UN_SYS_ID);
                                                db.INS_UDW_PA_GROUP_UNAMED.Attach(dbveh);

                                                dbveh.Map(pagrp);
                                                break;
                                            case "U":
                                                pagrp.PA_GRP_UN_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                pagrp.PA_GRP_UN_STATUS = "A";
                                                db.INS_UDW_PA_GROUP_UNAMED.Add(pagrp);
                                                break;
                                            case "D":
                                                db.INS_UDW_PA_GROUP_UNAMED.Remove(db.INS_UDW_PA_GROUP_UNAMED.Find(pagrp.PA_GRP_UN_SYS_ID));
                                                break;
                                        }

                                    }

                                    /*-------------------------------
                                     * Cover
                                     *-----------------------------*/
                                    foreach (var cover in viewPolh.INS_UWD_RISK_COVERS)
                                    {
                                        cover.RCOV_POLH_DOC_NO = viewPolh.POLH_SYS_ID;
                                        switch (cover.RCOV_STATUS)
                                        {
                                            case "A":
                                                var dbcover = db.INS_UWD_RISK_COVERS.Find(cover.RCOV_SYS_ID);
                                                db.INS_UWD_RISK_COVERS.Attach(dbcover);

                                                dbcover.Map(cover);
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

                            }
                            break;
                        case "U":

                            viewPolh.POLH_STATUS = "A";
                            viewPolh.POLH_DISPLAY_NO = viewPolh.POLH_CMP_CODE + viewPolh.POLH_SUB_CLASS_CODE + viewPolh.POLH_SYS_ID;
                            viewPolh.POLH_QUT_SER_NO = viewPolh.POLH_SYS_ID;

                            /*-----------------------------------------
                             * updating the status of related tables
                             *---------------------------------------*/
                            viewPolh.INS_UWD_RISK_COVERS.ForEach(x => x.RCOV_STATUS = "A");

                            viewPolh.INS_UDW_PA_GROUP_NAMED.ForEach(x => x.PA_GRP_STATUS = "A");

                            viewPolh.INS_UDW_PA_GROUP_UNAMED.ForEach(x => x.PA_GRP_UN_STATUS = "A");

                            viewPolh.INS_UDW_PA_INDIVIDUAL.ForEach(x => x.PA_IND_STATUS = "A");

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