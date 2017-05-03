using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace SibaDev.Models
{
    public class AccTxnTypeMdl : Model
    {

        public static MS_ACCT_INS_TXN_TYPE GetInsAcctTxnType(string code)
        {
            var db = new SibaModel();
            return (from acctTxnType in db.MS_ACCT_INS_TXN_TYPE where acctTxnType.TXN_CODE == code select acctTxnType).ToList().Select(acctTxnType => new MS_ACCT_INS_TXN_TYPE
            {
                TXN_CODE = acctTxnType.TXN_CODE,
                TXN_NAME = acctTxnType.TXN_NAME,
                TXN_DESC = acctTxnType.TXN_DESC,
                TXN_INS_SRCE = acctTxnType.TXN_INS_SRCE,
                TXN_CRTE_BY = acctTxnType.TXN_CRTE_BY,
                TXN_CRTE_DATE = acctTxnType.TXN_CRTE_DATE,
                TXN_MOD_BY = acctTxnType.TXN_MOD_BY,
                TXN_MOD_DATE = acctTxnType.TXN_MOD_DATE,
                TXN_STATUS = acctTxnType.TXN_STATUS
            }).Single();
        }

        public static IEnumerable<MS_ACCT_INS_TXN_TYPE> GetInsAcctTxnTypes()
        {
            var db = new SibaModel();
            return (from acctTxnType in db.MS_ACCT_INS_TXN_TYPE where acctTxnType.TXN_STATUS == "A" select acctTxnType.TXN_CODE).Select(GetInsAcctTxnType);
        }

        public static IEnumerable<object> GetAcctTxnTypeLov()
        {
            return GetInsAcctTxnTypes().Select(a => new {CODE = a.TXN_CODE, NAME = a.TXN_NAME});
        }

        public static bool save_insAcctTxnType(MS_ACCT_INS_TXN_TYPE txntype)
        {
            var db = new SibaModel();
            var dbTxntype = db.MS_ACCT_INS_TXN_TYPE.Find(txntype.TXN_CODE);
            switch (txntype.TXN_STATUS)
            {
                case "A":
                {
                    
                    if (dbTxntype != null)
                    {
                        db.MS_ACCT_INS_TXN_TYPE.Attach(dbTxntype);
                        dbTxntype.Map(txntype);
                    }

                }
                    break;
                case "U":
                    txntype.TXN_STATUS = "A";
                    txntype.TXN_CRTE_DATE = DateTime.Now;
                    db.MS_ACCT_INS_TXN_TYPE.Add(txntype);
                    break;
                case "D":
                {
                    if (dbTxntype != null)
                    {
                        db.MS_ACCT_INS_TXN_TYPE.Attach(dbTxntype);
                        dbTxntype.TXN_STATUS = "D";
                    }

                }
                    break;
            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_ACCT_INS_TXN_TYPE> Search(string q)
        {
            var db = new SibaModel();
            return (from acctTxnType in db.MS_ACCT_INS_TXN_TYPE where 
                    (acctTxnType.TXN_CODE.ToLower().Contains(q.ToLower()) || 
                    acctTxnType.TXN_NAME.ToLower().Contains(q.ToLower())) && acctTxnType.TXN_STATUS == "A" select acctTxnType.TXN_CODE).Select(GetInsAcctTxnType);
            
        }
    }
}