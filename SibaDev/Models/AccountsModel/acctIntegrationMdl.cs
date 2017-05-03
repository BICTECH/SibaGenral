using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.AccountsEntitis.AccountsModel;


namespace SibaDev.Models
{
    public class AcctIntegrationMdl : Model
    {

        public static MS_ACCTS_INTEGRATION GetAcctsIntegration(int id)
        {
            var db = new SibaModel();
            return (from ai in db.MS_ACCTS_INTEGRATION where ai.INT_SYS_ID == id select ai).ToList()
                    .Select(ai => new MS_ACCTS_INTEGRATION
                    {
                        INT_SYS_ID = ai.INT_SYS_ID,
                        INT_CRTE_DATE = ai.INT_CRTE_DATE,
                        INT_ACTIVE_YN = ai.INT_ACTIVE_YN,
                        INT_BIZ_SOURCE = ai.INT_BIZ_SOURCE,
                        INT_CRTE_BY = ai.INT_CRTE_BY,
                        INT_CUST_TYPE = ai.INT_CUST_TYPE,
                        INT_CUST_TYPE_REF = ai.INT_CUST_TYPE_REF,
                        INT_FWD_CREDIT_ACCT = ai.INT_FWD_CREDIT_ACCT,
                        INT_FWD_CREDIT_DOC_TYPE = ai.INT_FWD_CREDIT_DOC_TYPE,
                        INT_FWD_CREDIT_NARRATION = ai.INT_FWD_CREDIT_NARRATION,
                        INT_FWD_DEBIT_DOC_TYPE = ai.INT_FWD_DEBIT_DOC_TYPE,
                        INT_FWD_DEBIT_NARRATION = ai.INT_FWD_DEBIT_NARRATION,
                        INT_FWD_DEBTT_ACCT = ai.INT_FWD_DEBTT_ACCT,
                        INT_FWD_SUB_ACCOUNT = ai.INT_FWD_SUB_ACCOUNT,
                        INT_FWD_SUB_ACCT_DOC_TYPE = ai.INT_FWD_SUB_ACCT_DOC_TYPE,
                        INT_FWD_SUB_ACCT_NARRATION = ai.INT_FWD_SUB_ACCT_NARRATION,
                        INT_INS_SOURCE = ai.INT_INS_SOURCE,
                        INT_INS_TXN_TYPE = ai.INT_INS_TXN_TYPE,
                        INT_MOD_BY = ai.INT_MOD_BY,
                        INT_MOD_DATE = ai.INT_MOD_DATE,
                        INT_OFFICE = ai.INT_OFFICE,
                        INT_PRODUCT = ai.INT_PRODUCT,
                        INT_RVSE_CREDIT_ACCT = ai.INT_RVSE_CREDIT_ACCT,
                        INT_RVSE_CREDIT_DOC_TYPE = ai.INT_RVSE_CREDIT_DOC_TYPE,
                        INT_RVSE_CREDIT_NARRATION = ai.INT_RVSE_CREDIT_NARRATION,
                        INT_RVSE_DEBIT_DOC_TYPE = ai.INT_RVSE_DEBIT_DOC_TYPE,
                        INT_RVSE_DEBIT_NARRATION = ai.INT_RVSE_DEBIT_NARRATION,
                        INT_RVSE_DEBTT_ACCT = ai.INT_RVSE_DEBTT_ACCT,
                        INT_RVSE_SUB_ACCOUNT = ai.INT_RVSE_SUB_ACCOUNT,
                        INT_RVSE_SUB_ACCT_DOC = ai.INT_RVSE_SUB_ACCT_DOC,
                        INT_RVSE_SUB_ACCT_DOC_TYPE = ai.INT_RVSE_SUB_ACCT_DOC_TYPE,
                        INT_STATUS = ai.INT_STATUS,
                        INT_TXN_SOURCE = ai.INT_TXN_SOURCE,
                        MS_SYS_OFFICE = OfficeMdl.get_office(ai.INT_OFFICE),
                        //MS_INS_PRODUCT = ProductMdl.get_product(ai.INT_PRODUCT),
                        //MS_INSURANCE_SOURCE = InsuranceSourceMdl.get_insurancesource(ai.INT_INS_SOURCE),
                        //MS_SYS_SOURCE_BUSINESS = ai.INT_BIZ_SOURCE != null ? SourceBusinessMdl.get_sourcebusiness(ai.INT_BIZ_SOURCE) : null,
                        //MS_SYS_CUST_TYPES = ai.INT_CUST_TYPE != null ? CustomertypesMdl.get_customertype(ai.INT_CUST_TYPE) : null,
                        MS_ACCT_INS_TXN_TYPE = ai.INT_INS_TXN_TYPE != null ? AccTxnTypeMdl.GetInsAcctTxnType(ai.INT_INS_TXN_TYPE) : null,
                        //MS_ACCT_MAIN_ACCOUNT = ai.INT_FWD_DEBTT_ACCT != null? MainAccountMdl.GetMainAccount(ai.INT_FWD_DEBTT_ACCT):null,
                        //MS_ACCT_MAIN_ACCOUNT1 = ai.INT_FWD_CREDIT_ACCT != null? MainAccountMdl.GetMainAccount(ai.INT_FWD_CREDIT_ACCT):null,
                        //MS_ACCT_MAIN_ACCOUNT2 = ai.INT_RVSE_DEBTT_ACCT != null? MainAccountMdl.GetMainAccount(ai.INT_RVSE_DEBTT_ACCT):null,
                        //MS_ACCT_MAIN_ACCOUNT3 = ai.INT_RVSE_CREDIT_ACCT != null? MainAccountMdl.GetMainAccount(ai.INT_RVSE_CREDIT_ACCT):null,
                        //MS_ACCT_TXN_DOC = ai.INT_FWD_DEBIT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_FWD_DEBIT_DOC_TYPE) : null,
                        //MS_ACCT_TXN_DOC1 = ai.INT_FWD_CREDIT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_FWD_CREDIT_DOC_TYPE) : null,
                        //MS_ACCT_TXN_DOC2 = ai.INT_RVSE_DEBIT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_RVSE_DEBIT_DOC_TYPE) : null,
                        //MS_ACCT_TXN_DOC3 = ai.INT_RVSE_CREDIT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_RVSE_CREDIT_DOC_TYPE) : null,
                        //MS_ACCT_TXN_DOC4 = ai.INT_FWD_SUB_ACCT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_FWD_SUB_ACCT_DOC_TYPE) : null,
                        //MS_ACCT_TXN_DOC5 = ai.INT_RVSE_SUB_ACCT_DOC_TYPE != null ? TxnDocMdl.GetTxnDoc(ai.INT_RVSE_SUB_ACCT_DOC_TYPE) : null,
                        //MS_ACCT_SUB_ACCOUNT = ai.INT_FWD_SUB_ACCOUNT != null? SubAccountMdl.GetSubAccount(ai.INT_FWD_SUB_ACCOUNT):null,
                        //MS_ACCT_SUB_ACCOUNT1 = ai.INT_RVSE_SUB_ACCOUNT != null? SubAccountMdl.GetSubAccount(ai.INT_RVSE_SUB_ACCOUNT):null,
                    }).Single();
        }

        public static IEnumerable<MS_ACCTS_INTEGRATION> GetAcctsIntegrations()
        {
            var db = new SibaModel();
            return (from ai in db.MS_ACCTS_INTEGRATION where ai.INT_STATUS == "A" select ai.INT_SYS_ID).Select(GetAcctsIntegration);
        }

        public static IEnumerable<object> GetAcctsIntegrationLov()
        {
            return GetAcctsIntegrations().Select(ai => new {CODE = ai.INT_SYS_ID, NAME = ai.INT_PRODUCT, INS_SRC = ai.INT_INS_SOURCE, OFF = ai.INT_OFFICE, ai.INT_BIZ_SOURCE});
        }

        public static bool SaveAcctIntegration(MS_ACCTS_INTEGRATION accInt)
        {
            var db = new SibaModel();
            var dbAccInt = db.MS_ACCTS_INTEGRATION.Find(accInt.INT_SYS_ID);
            switch (accInt.INT_STATUS)
            {
                case "A":
                {
                    if (dbAccInt != null)
                    {
                        db.MS_ACCTS_INTEGRATION.Attach(dbAccInt);
                        dbAccInt.Map(accInt);
                    }

                }
                    break;
                case "U":
                    accInt.INT_STATUS = "A";
                    accInt.INT_CRTE_DATE = DateTime.Now;
                    db.MS_ACCTS_INTEGRATION.Add(accInt);
                    break;
                case "D":
                {
                    if (dbAccInt != null)
                    {
                        db.MS_ACCTS_INTEGRATION.Attach(dbAccInt);
                        dbAccInt.INT_STATUS = "D";
                    }
                }
                   break;
            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<object> Search(string q)
        {
            var db = new SibaModel();
            return (from ai in db.MS_ACCTS_INTEGRATION
                where
                    (ai.INT_BIZ_SOURCE.ToLower().Contains(q.Trim().ToLower())) ||
                    ai.INT_INS_SOURCE.ToLower().Contains(q.Trim().ToLower()) ||
                    ai.INT_OFFICE.ToLower().Contains(q.Trim().ToLower()) && ai.INT_STATUS == "A" select ai.INT_SYS_ID).Select(GetAcctsIntegration);
        } 
    }
}