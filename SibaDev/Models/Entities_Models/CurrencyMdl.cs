using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CurrencyMdl : Model
    {
        public static MS_INS_CURRENCY get_currency(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_INS_CURRENCY where mdl.CUR_CODE == code select mdl).ToList().Select(mdl => new MS_INS_CURRENCY
            {
                CUR_CODE = mdl.CUR_CODE,
                CUR_BASE = mdl.CUR_BASE,
                CUR_FULL_NAME = mdl.CUR_FULL_NAME,
                CUR_SYMBOL = mdl.CUR_SYMBOL,
                CUR_DEC_SYMBOL = mdl.CUR_DEC_SYMBOL,
                CUR_ORIG_COUNTRY = mdl.CUR_ORIG_COUNTRY,
                CUR_SUB_UNIT = mdl.CUR_SUB_UNIT,
                CUR_CRTE_BY = mdl.CUR_CRTE_BY,
                CUR_CRTE_DATE = mdl.CUR_CRTE_DATE,
                CUR_STATUS = mdl.CUR_STATUS
            }).Single();
        }

        public static IEnumerable<MS_INS_CURRENCY> get_currencys()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_INS_CURRENCY where mdl.CUR_STATUS == "A" select mdl).ToList().Select(mdl => new MS_INS_CURRENCY
            {
                CUR_CODE = mdl.CUR_CODE,
                CUR_BASE = mdl.CUR_BASE,
                CUR_FULL_NAME = mdl.CUR_FULL_NAME,
                CUR_SYMBOL = mdl.CUR_SYMBOL,
                CUR_DEC_SYMBOL = mdl.CUR_DEC_SYMBOL,
                CUR_ORIG_COUNTRY = mdl.CUR_ORIG_COUNTRY,
                CUR_SUB_UNIT = mdl.CUR_SUB_UNIT,
                CUR_CRTE_BY = mdl.CUR_CRTE_BY,
                CUR_CRTE_DATE = mdl.CUR_CRTE_DATE,
                CUR_STATUS = mdl.CUR_STATUS
            });
        }

        public static IEnumerable<object> get_lov_currencys()
        {
            var db = new SibaModel();
            return (from currency in db.MS_INS_CURRENCY where currency.CUR_STATUS == "A" select new { CODE = currency.CUR_CODE, NAME = currency.CUR_FULL_NAME });
        }

        public static bool save_currency(MS_INS_CURRENCY are)
        {
            var db = new SibaModel();
            if (are.CUR_STATUS == "A")
            {
                var db_currency = db.MS_INS_CURRENCY.Find(are.CUR_CODE);
                if (db_currency != null)
                {
                    db.MS_INS_CURRENCY.Attach(db_currency);
                    db_currency.Map(are);
                }

            }
            else if (are.CUR_STATUS == "U")
            {
                are.CUR_STATUS = "A";
                db.MS_INS_CURRENCY.Add(are);
            }
            else if (are.CUR_STATUS == "D")
            {
                var db_currency = db.MS_INS_CURRENCY.Find(are.CUR_CODE);
                if (db_currency != null)
                {
                    db.MS_INS_CURRENCY.Attach(db_currency);
                    db_currency.CUR_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_INS_CURRENCY> search_currencys(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_INS_CURRENCY
                    where (are.CUR_CODE.ToLower().Contains(q.ToLower()) || are.CUR_BASE.ToLower().Contains(q.ToLower()) || are.CUR_FULL_NAME.ToLower().Contains(q.ToLower())
                          || are.CUR_ORIG_COUNTRY.ToLower().Contains(q.ToLower()) || are.CUR_DEC_SYMBOL.ToLower().Contains(q.ToLower())
                          || are.CUR_SUB_UNIT.ToLower().Contains(q.ToLower()) || are.CUR_SYMBOL.ToLower().Contains(q.ToLower())) && are.CUR_STATUS == "A"
                    select are).ToList();
        }
    }
}