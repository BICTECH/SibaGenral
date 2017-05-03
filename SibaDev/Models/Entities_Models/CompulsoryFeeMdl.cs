using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CompulsoryFeeMdl : Model
    {
        public static MS_COMPULSORY_FEES get_compulsoryfee(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_COMPULSORY_FEES where mdl.FEE_CODE == code select mdl).ToList().Select(mdl => new MS_COMPULSORY_FEES
            {
                FEE_CODE = mdl.FEE_CODE,
                FEE_NAME = mdl.FEE_NAME,
                FEE_DESC = mdl.FEE_DESC,
                FEE_AMOUNT = mdl.FEE_AMOUNT,
                FEE_MODIFY_YN = mdl.FEE_MODIFY_YN,
                FEE_REFUND_YN = mdl.FEE_REFUND_YN,
                FEE_MAIN_ACCOUNT = mdl.FEE_MAIN_ACCOUNT,
                FEE_SUB_ACCOUNT = mdl.FEE_SUB_ACCOUNT,
                FEE_FROM_DATE = mdl.FEE_FROM_DATE,
                FEE_TO_DATE = mdl.FEE_TO_DATE,
                FEE_CRTE_BY = mdl.FEE_CRTE_BY,
                FEE_CRTE_DATE = mdl.FEE_CRTE_DATE,
                FEE_STATUS = mdl.FEE_STATUS
            }).Single();
        }

        public static IEnumerable<MS_COMPULSORY_FEES> get_compulsoryfees()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_COMPULSORY_FEES where mdl.FEE_STATUS == "A" select mdl).ToList().Select(mdl => new MS_COMPULSORY_FEES
            {
                FEE_CODE = mdl.FEE_CODE,
                FEE_NAME = mdl.FEE_NAME,
                FEE_DESC = mdl.FEE_DESC,
                FEE_AMOUNT = mdl.FEE_AMOUNT,
                FEE_MODIFY_YN = mdl.FEE_MODIFY_YN,
                FEE_REFUND_YN = mdl.FEE_REFUND_YN,
                FEE_MAIN_ACCOUNT = mdl.FEE_MAIN_ACCOUNT,
                FEE_SUB_ACCOUNT = mdl.FEE_SUB_ACCOUNT,
                FEE_FROM_DATE = mdl.FEE_FROM_DATE,
                FEE_TO_DATE = mdl.FEE_TO_DATE,
                FEE_CRTE_BY = mdl.FEE_CRTE_BY,
                FEE_CRTE_DATE = mdl.FEE_CRTE_DATE,
                FEE_STATUS = mdl.FEE_STATUS
            });
        }

        public static IEnumerable<object> get_lov_compulsoryfee()
        {
            var db = new SibaModel();
            return (from exch in db.MS_COMPULSORY_FEES where exch.FEE_STATUS == "A" select new { CODE = exch.FEE_CODE, NAME = exch.FEE_NAME });
        }

        public static bool save_compulsoryfee(MS_COMPULSORY_FEES are)
        {
            var db = new SibaModel();
            if (are.FEE_STATUS == "A")
            {
                var db_currency = db.MS_COMPULSORY_FEES.Find(are.FEE_CODE);
                if (db_currency != null)
                {
                    db.MS_COMPULSORY_FEES.Attach(db_currency);
                    db_currency.Map(are);
                }

            }
            else if (are.FEE_STATUS == "U")
            {
                are.FEE_STATUS = "A";
                db.MS_COMPULSORY_FEES.Add(are);
            }
            else if (are.FEE_STATUS == "D")
            {
                var db_currency = db.MS_COMPULSORY_FEES.Find(are.FEE_CODE);
                if (db_currency != null)
                {
                    db.MS_COMPULSORY_FEES.Attach(db_currency);
                    db_currency.FEE_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_COMPULSORY_FEES> search_compulsoryfees(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_COMPULSORY_FEES
                    where (are.FEE_CODE.ToLower().Contains(q.ToLower()) || are.FEE_NAME.ToLower().Contains(q.ToLower())
                          || are.FEE_DESC.ToString().Contains(q.ToLower()) || are.FEE_MODIFY_YN.ToLower().Contains(q.ToLower())
                          || are.FEE_SUB_ACCOUNT.ToLower().Contains(q.ToLower()) || are.FEE_REFUND_YN.ToString().Contains(q.ToLower())
                          || are.FEE_MAIN_ACCOUNT.ToString().Contains(q.ToLower())) && are.FEE_STATUS == "A"
                    select are).ToList();
        }
    }
}