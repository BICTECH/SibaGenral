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
    public class PolicyFireMdl : Model
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

                    INS_UWD_FIRE_LOCRISK = polh.INS_UWD_FIRE_LOCRISK != null ? polh.INS_UWD_FIRE_LOCRISK.Select(c =>
                         new INS_UWD_FIRE_LOCRISK
                         {
                             PLOC_SYS_ID = c.PLOC_SYS_ID,
                             PLOC_POLH_SYS_ID = c.PLOC_POLH_SYS_ID,
                             PLOC_POLH_DOC_NO = c.PLOC_POLH_DOC_NO,
                             PLOC_POLH_END_NO = c.PLOC_POLH_END_NO,
                             PLOC_RISK_NO = c.PLOC_RISK_NO,
                             PLOC_REG_CODE = c.PLOC_REG_CODE,
                             PLOC_REG_NAME = c.PLOC_REG_NAME,
                             PLOC_AREA_CODE = c.PLOC_AREA_CODE,
                             PLOC_AREA_NAME = c.PLOC_AREA_NAME,
                             PLOC_LOC_CODE = c.PLOC_LOC_CODE,
                             PLOC_LOC_NAME = c.PLOC_LOC_NAME,
                             PLOC_LOC_DESC = c.PLOC_LOC_DESC,
                             PLOC_LOC_ADDRS = c.PLOC_LOC_ADDRS,

                             PLOC_OCCUP_CODE = c.PLOC_OCCUP_CODE,
                             PLOC_OCCUP_NAME = c.PLOC_OCCUP_NAME,
                             PLOC_OCCUP_SECTION = c.PLOC_OCCUP_SECTION,
                             PLOC_EQZONE = c.PLOC_EQZONE,
                             PLOC_RIEML = c.PLOC_RIEML,
                             PLOC_EML = c.PLOC_EML,
                             PLOC_START_DATE = c.PLOC_START_DATE,
                             PLOC_END_DATE = c.PLOC_END_DATE,
                             PLOC_CURR_CODE = c.PLOC_CURR_CODE,
                             PLOC_CURR_RATE = c.PLOC_CURR_RATE,

                             PLOC_UW_YEAR = c.PLOC_UW_YEAR,
                             PLOC_POL_CANCELLED = c.PLOC_POL_CANCELLED,
                             PLOC_CANCELLED_REASON = c.PLOC_CANCELLED_REASON,
                             PLOC_SI_FC = c.PLOC_SI_FC,
                             PLOC_SI_BC = c.PLOC_SI_BC,
                             PLOC_TOT_PREM_FC = c.PLOC_TOT_PREM_FC,
                             PLOC_TOT_PREM_BC = c.PLOC_TOT_PREM_BC,
                             PLOC_RISK_PREM_FC = c.PLOC_RISK_PREM_FC,
                             PLOC_RISK_PREM_BC = c.PLOC_RISK_PREM_BC,
                             PLOC_ADJ_PREM_FC = c.PLOC_ADJ_PREM_FC,

                             PLOC_ADJ_PREM_BC = c.PLOC_ADJ_PREM_BC,
                             PLOC_DISC_FC = c.PLOC_DISC_FC,
                             PLOC_DISC_BC = c.PLOC_DISC_BC,
                             PLOC_LOAD_FC = c.PLOC_LOAD_FC,
                             PLOC_LOAD_BC = c.PLOC_LOAD_BC,
                             PLOC_COMP_FEE_FC = c.PLOC_COMP_FEE_FC,
                             PLOC_COMP_FEE_BC = c.PLOC_COMP_FEE_BC,
                             PLOC_COMMISSION_FC = c.PLOC_COMMISSION_FC,
                             PLOC_COMMISSION_BC = c.PLOC_COMMISSION_BC,
                             PLOC_RI_APPLICABLE = c.PLOC_RI_APPLICABLE,

                             PLOC_RI_EFF_DATE = c.PLOC_RI_EFF_DATE,
                             PLOC_RI_SI_FC = c.PLOC_RI_SI_FC,
                             PLOC_RI_SI_BC = c.PLOC_RI_SI_BC,
                             PLOC_RI_PREM_FC = c.PLOC_RI_PREM_FC,
                             PLOC_RI_PREM_BC = c.PLOC_RI_PREM_BC,
                             PLOC_PDT_CODE = c.PLOC_PDT_CODE,
                             PLOC_CVR_CODE = c.PLOC_CVR_CODE,
                             PLOC_RENEWAL_STATUS = c.PLOC_RENEWAL_STATUS,
                             PLOC_END_TYPE = c.PLOC_END_TYPE,
                             PLOC_APPROVE_DATE = c.PLOC_APPROVE_DATE,

                             PLOC_ACCT_DATE = c.PLOC_ACCT_DATE,
                             PLOC_CRTE_BY = c.PLOC_CRTE_BY,
                             PLOC_CRTE_DATE = c.PLOC_CRTE_DATE,
                             PLOC_MOD_BY = c.PLOC_MOD_BY,
                             PLOC_MOD_DATE = c.PLOC_MOD_DATE,
                             PLOC_STATUS = c.PLOC_STATUS,
                             PLOC_TXN_STATUS = c.PLOC_TXN_STATUS,
                             PLOC_RISK_STATE = c.PLOC_RISK_STATE,
                             PLOC_TRISM_SI_FC = c.PLOC_TRISM_SI_FC,
                             PLOC_TRISM_SI_BC = c.PLOC_TRISM_SI_BC,

                             PLOC_TRISM_PREM_FC = c.PLOC_TRISM_PREM_FC,
                             PLOC_TRISM_PREM_BC = c.PLOC_TRISM_PREM_BC,

                         }).ToList() : null,


                    INS_UWD_FIRE_LOCINT = polh.INS_UWD_FIRE_LOCINT != null ? polh.INS_UWD_FIRE_LOCINT.Select(r => get_fire_locint(r.LINT_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static INS_UWD_FIRE_LOCRISK get_fire_locrisk(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.INS_UWD_FIRE_LOCRISK where c.PLOC_SYS_ID == code select c).ToList().Select(c => new INS_UWD_FIRE_LOCRISK
                {
                    PLOC_SYS_ID = c.PLOC_SYS_ID,
                    PLOC_POLH_SYS_ID = c.PLOC_POLH_SYS_ID,
                    PLOC_POLH_DOC_NO = c.PLOC_POLH_DOC_NO,
                    PLOC_POLH_END_NO = c.PLOC_POLH_END_NO,
                    PLOC_RISK_NO = c.PLOC_RISK_NO,
                    PLOC_AREA_CODE = c.PLOC_AREA_CODE,
                    PLOC_AREA_NAME = c.PLOC_AREA_NAME,
                    PLOC_LOC_CODE = c.PLOC_LOC_CODE,
                    PLOC_LOC_NAME = c.PLOC_LOC_NAME,
                    PLOC_LOC_DESC = c.PLOC_LOC_DESC,
                    PLOC_LOC_ADDRS = c.PLOC_LOC_ADDRS,
                    PLOC_REG_CODE = c.PLOC_REG_CODE,
                    PLOC_REG_NAME = c.PLOC_REG_NAME,
                    PLOC_OCCUP_CODE = c.PLOC_OCCUP_CODE,
                    PLOC_OCCUP_NAME = c.PLOC_OCCUP_NAME,
                    PLOC_OCCUP_SECTION = c.PLOC_OCCUP_SECTION,
                    PLOC_EQZONE = c.PLOC_EQZONE,
                    PLOC_RIEML = c.PLOC_RIEML,
                    PLOC_EML = c.PLOC_EML,
                    PLOC_START_DATE = c.PLOC_START_DATE,
                    PLOC_END_DATE = c.PLOC_END_DATE,
                    PLOC_CURR_CODE = c.PLOC_CURR_CODE,
                    PLOC_CURR_RATE = c.PLOC_CURR_RATE,

                    PLOC_UW_YEAR = c.PLOC_UW_YEAR,
                    PLOC_POL_CANCELLED = c.PLOC_POL_CANCELLED,
                    PLOC_CANCELLED_REASON = c.PLOC_CANCELLED_REASON,
                    PLOC_SI_FC = c.PLOC_SI_FC,
                    PLOC_SI_BC = c.PLOC_SI_BC,
                    PLOC_TOT_PREM_FC = c.PLOC_TOT_PREM_FC,
                    PLOC_TOT_PREM_BC = c.PLOC_TOT_PREM_BC,
                    PLOC_RISK_PREM_FC = c.PLOC_RISK_PREM_FC,
                    PLOC_RISK_PREM_BC = c.PLOC_RISK_PREM_BC,
                    PLOC_ADJ_PREM_FC = c.PLOC_ADJ_PREM_FC,

                    PLOC_ADJ_PREM_BC = c.PLOC_ADJ_PREM_BC,
                    PLOC_DISC_FC = c.PLOC_DISC_FC,
                    PLOC_DISC_BC = c.PLOC_DISC_BC,
                    PLOC_LOAD_FC = c.PLOC_LOAD_FC,
                    PLOC_LOAD_BC = c.PLOC_LOAD_BC,
                    PLOC_COMP_FEE_FC = c.PLOC_COMP_FEE_FC,
                    PLOC_COMP_FEE_BC = c.PLOC_COMP_FEE_BC,
                    PLOC_COMMISSION_FC = c.PLOC_COMMISSION_FC,
                    PLOC_COMMISSION_BC = c.PLOC_COMMISSION_BC,
                    PLOC_RI_APPLICABLE = c.PLOC_RI_APPLICABLE,

                    PLOC_RI_EFF_DATE = c.PLOC_RI_EFF_DATE,
                    PLOC_RI_SI_FC = c.PLOC_RI_SI_FC,
                    PLOC_RI_SI_BC = c.PLOC_RI_SI_BC,
                    PLOC_RI_PREM_FC = c.PLOC_RI_PREM_FC,
                    PLOC_RI_PREM_BC = c.PLOC_RI_PREM_BC,
                    PLOC_PDT_CODE = c.PLOC_PDT_CODE,
                    PLOC_CVR_CODE = c.PLOC_CVR_CODE,
                    PLOC_RENEWAL_STATUS = c.PLOC_RENEWAL_STATUS,
                    PLOC_END_TYPE = c.PLOC_END_TYPE,
                    PLOC_APPROVE_DATE = c.PLOC_APPROVE_DATE,

                    PLOC_ACCT_DATE = c.PLOC_ACCT_DATE,
                    PLOC_CRTE_BY = c.PLOC_CRTE_BY,
                    PLOC_CRTE_DATE = c.PLOC_CRTE_DATE,
                    PLOC_MOD_BY = c.PLOC_MOD_BY,
                    PLOC_MOD_DATE = c.PLOC_MOD_DATE,
                    PLOC_STATUS = c.PLOC_STATUS,
                    PLOC_TXN_STATUS = c.PLOC_TXN_STATUS,
                    PLOC_RISK_STATE = c.PLOC_RISK_STATE,
                    PLOC_TRISM_SI_FC = c.PLOC_TRISM_SI_FC,
                    PLOC_TRISM_SI_BC = c.PLOC_TRISM_SI_BC,

                    PLOC_TRISM_PREM_FC = c.PLOC_TRISM_PREM_FC,
                    PLOC_TRISM_PREM_BC = c.PLOC_TRISM_PREM_BC,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

        public static INS_UWD_FIRE_LOCINT get_fire_locint(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from v in db.INS_UWD_FIRE_LOCINT where v.LINT_SYS_ID == code select v).ToList().Select(v => new INS_UWD_FIRE_LOCINT
                {
                    LINT_SYS_ID = v.LINT_SYS_ID,
                    LINT_PLOC_SYS_ID = v.LINT_PLOC_SYS_ID,
                    LINT_POLH_SYS_ID = v.LINT_POLH_SYS_ID,
                    LINT_POLH_DOC_NO = v.LINT_POLH_DOC_NO,
                    LINT_POLH_END_NO = v.LINT_POLH_END_NO,
                    LINT_RISK_CODE = v.LINT_RISK_CODE,
                    LINT_RISK_NAME = v.LINT_RISK_NAME,
                    LINT_RISK_NO = v.LINT_RISK_NO,
                    LINT_DESC = v.LINT_DESC,
                    LINT_SI_FC = v.LINT_SI_FC,
                    LINT_SI_BC = v.LINT_SI_BC,
                    LINT_PRM_FC = v.LINT_PRM_FC,
                    LINT_PRM_BC = v.LINT_PRM_BC,
                    LINT_DISC_BC = v.LINT_DISC_BC,
                    LINT_DISC_FC = v.LINT_DISC_FC,
                    LINT_LOAD_BC = v.LINT_LOAD_BC,
                    LINT_LOAD_FC = v.LINT_LOAD_FC,
                    LINT_CONS_TYPE = v.LINT_CONS_TYPE,
                    LINT_EML_SI = v.LINT_EML_SI,
                    LINT_RI_EML = v.LINT_RI_EML,
                    LINT_SUBCONST = v.LINT_SUBCONST,
                    LINT_PLIN_FOUND = v.LINT_PLIN_FOUND,
                    LINT_PLIN_FOUND_AMT = v.LINT_PLIN_FOUND_AMT,
                    LINT_ESCALATION = v.LINT_ESCALATION,
                    LINT_ESC_PERC = v.LINT_ESC_PERC,
                    LINT_TXN_STATUS = v.LINT_TXN_STATUS,
                    LINT_RISK_STATE = v.LINT_RISK_STATE,
                    LINT_STATUS = v.LINT_STATUS,
                    INS_UWD_RISK_COVERS = v.INS_UWD_RISK_COVERS != null ? v.INS_UWD_RISK_COVERS.Select(x => PolicyRiskCovers.get_riskcovers(x.RCOV_SYS_ID)).ToList() : null
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

        public static INS_UWD_POLICY_HEAD save_fire(INS_UWD_POLICY_HEAD viewPolh)
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
                                     * Fire location
                                     *-------------------------------*/
                                    foreach (var loc in viewPolh.INS_UWD_FIRE_LOCRISK)
                                    {

                                        loc.PLOC_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        switch (loc.PLOC_STATUS)
                                        {
                                            case "A":
                                                var dbloc = db.INS_UWD_FIRE_LOCRISK.Find(loc.PLOC_SYS_ID);
                                                db.INS_UWD_FIRE_LOCRISK.Attach(dbloc);

                                                dbloc.Map(loc);
                                                break;
                                            case "U":
                                                loc.PLOC_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                loc.PLOC_STATUS = "A";
                                                db.INS_UWD_FIRE_LOCRISK.Add(loc);
                                                break;
                                            case "D":
                                                db.INS_UWD_FIRE_LOCRISK.Remove(db.INS_UWD_FIRE_LOCRISK.Find(loc.PLOC_SYS_ID));
                                                break;
                                        }
                                    }

                                    /*--------------------------------
                                     * Location Interest
                                     *-------------------------------*/

                                    foreach (var bon in viewPolh.INS_UWD_FIRE_LOCINT)
                                    {
                                        bon.LINT_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                        var dbbon = db.INS_UWD_FIRE_LOCINT.Find(bon.LINT_SYS_ID);
                                        switch (bon.LINT_STATUS)
                                        {
                                            case "A":
                                                if (dbbon != null)
                                                {
                                                    db.INS_UWD_FIRE_LOCINT.Attach(dbbon);
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
                                                                cover.RCOV_RISK_SYS_ID = bon.LINT_SYS_ID;
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
                                                bon.LINT_STATUS = "A";
                                                bon.LINT_POLH_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UWD_FIRE_LOCINT.Add(bon);
                                                break;
                                            case "D":
                                                db.INS_UWD_FIRE_LOCINT.Remove(db.INS_UWD_FIRE_LOCINT.Find(bon.LINT_SYS_ID));
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

                                    foreach (var fees in viewPolh.INS_UDW_FIRE_FEES)
                                    {
                                        var dbrkfees = db.INS_UDW_FIRE_FEES.Find(fees.FIRE_FEE_SYS_ID);
                                        switch (fees.FIRE_FEE_STATUS)
                                        {
                                            case "A":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_FIRE_FEES.Attach(dbrkfees);
                                                    dbrkfees.Map(fees);
                                                }
                                                break;

                                            case "U":
                                                fees.FIRE_FEE_STATUS = "A";
                                                fees.FIRE_FEE_CRTE_DATE = DateTime.Now;
                                                fees.FIRE_FEE_POL_SYS_ID = viewPolh.POLH_SYS_ID;
                                                db.INS_UDW_FIRE_FEES.Add(fees);
                                                break;

                                            case "D":
                                                if (dbrkfees != null)
                                                {
                                                    db.INS_UDW_FIRE_FEES.Attach(dbrkfees);
                                                    dbrkfees.FIRE_FEE_STATUS = "D";
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
                            viewPolh.INS_UWD_FIRE_LOCINT.ForEach(x => {
                                x.LINT_STATUS = "A";
                                x.INS_UWD_RISK_COVERS.ForEach(c => c.RCOV_STATUS = "A");
                            });

                            viewPolh.INS_UWD_FIRE_LOCRISK.ForEach(x => x.PLOC_STATUS = "A");

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
            return (from polh in db.INS_UWD_POLICY_HEAD where polh.POLH_CLASS_CODE == "FIRE" && polh.POLH_STATUS == "A" select polh.POLH_SYS_ID).ToList().Select(get_policy_estimation);
        }

        public static IEnumerable<object> search_policys_est(string q)
        {
            var db = new SibaModel();
            return (from polh in db.INS_UWD_POLICY_HEAD
                    where (polh.POLH_SYS_ID.ToString().Contains(q.ToLower())) && polh.POLH_STATUS == "A" && polh.POLH_CLASS_CODE == "FIRE"
                    select polh.POLH_SYS_ID).Select(get_policy);
        }

        public static IEnumerable<object> get_estimate_risk(int ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_UWD_FIRE_LOCINT
                        where risk.LINT_POLH_SYS_ID == ProdCode && risk.LINT_STATUS == "A"
                        select new
                        {
                            CLM_RISK_STATUS = risk.LINT_STATUS,
                            CLM_RISK_CONS_TYPE = risk.LINT_CONS_TYPE,
                            CLM_RISK_CODE = risk.LINT_RISK_CODE,
                            CLM_RISK_NAME = risk.LINT_RISK_NAME,
                            CLM_RISK_RI_EML = risk.LINT_RI_EML,
                            CLM_RISK_EML_SI = risk.LINT_EML_SI
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

    }

}
