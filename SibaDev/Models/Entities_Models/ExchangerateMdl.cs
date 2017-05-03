using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ExchangerateMdl : Model
    {
        public static MS_SYS_EXCHANGE_RATES get_exchangerate(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_EXCHANGE_RATES where mdl.EXR_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_EXCHANGE_RATES
            {
                EXR_CODE = mdl.EXR_CODE,
                EXR_BASE_CURRENCY = mdl.EXR_BASE_CURRENCY,
                EXR_BASE_RATE = mdl.EXR_BASE_RATE,
                EXR_EXCHANGE_RATE = mdl.EXR_EXCHANGE_RATE,
                EXR_FX_CURRENCY = mdl.EXR_FX_CURRENCY,
                EXR_FROM_DATE = mdl.EXR_FROM_DATE,
                EXR_TO_DATE = mdl.EXR_TO_DATE,
                EXR_FX_RATE = mdl.EXR_FX_RATE,
                EXR_CRTE_BY = mdl.EXR_CRTE_BY,
                EXR_CRTE_DATE = mdl.EXR_CRTE_DATE,
                EXR_STATUS = mdl.EXR_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_EXCHANGE_RATES> get_exchangerates()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_EXCHANGE_RATES where mdl.EXR_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_EXCHANGE_RATES
            {
                EXR_CODE = mdl.EXR_CODE,
                EXR_BASE_CURRENCY = mdl.EXR_BASE_CURRENCY,
                EXR_BASE_RATE = mdl.EXR_BASE_RATE,
                EXR_EXCHANGE_RATE = mdl.EXR_EXCHANGE_RATE,
                EXR_FX_CURRENCY = mdl.EXR_FX_CURRENCY,
                EXR_FROM_DATE = mdl.EXR_FROM_DATE,
                EXR_TO_DATE = mdl.EXR_TO_DATE,
                EXR_FX_RATE = mdl.EXR_FX_RATE,
                EXR_CRTE_BY = mdl.EXR_CRTE_BY,
                EXR_CRTE_DATE = mdl.EXR_CRTE_DATE,
                EXR_STATUS = mdl.EXR_STATUS
            });
        }

        public static IEnumerable<object> get_lov_exchangerate()
        {
            var db = new SibaModel();
            return (from exch in db.MS_SYS_EXCHANGE_RATES where exch.EXR_STATUS == "A" select new { CODE = exch.EXR_CODE, NAME = exch.EXR_FX_RATE });
        }

        public static bool save_exchangerate(MS_SYS_EXCHANGE_RATES are)
        {
            var db = new SibaModel();
            if (are.EXR_STATUS == "A")
            {
                var db_currency = db.MS_SYS_EXCHANGE_RATES.Find(are.EXR_CODE);
                if (db_currency != null)
                {
                    db.MS_SYS_EXCHANGE_RATES.Attach(db_currency);
                    db_currency.Map(are);
                }

            }
            else if (are.EXR_STATUS == "U")
            {
                are.EXR_STATUS = "A";
                db.MS_SYS_EXCHANGE_RATES.Add(are);
            }
            else if (are.EXR_STATUS == "D")
            {
                var db_currency = db.MS_SYS_EXCHANGE_RATES.Find(are.EXR_CODE);
                if (db_currency != null)
                {
                    db.MS_SYS_EXCHANGE_RATES.Attach(db_currency);
                    db_currency.EXR_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_EXCHANGE_RATES> search_exchangerates(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_EXCHANGE_RATES
                    where (are.EXR_CODE.ToLower().Contains(q.ToLower()) || are.EXR_BASE_CURRENCY.ToLower().Contains(q.ToLower())
                          || are.EXR_BASE_RATE.ToString().Contains(q.ToLower()) || are.EXR_FX_CURRENCY.ToLower().Contains(q.ToLower())
                          || are.EXR_FX_RATE.ToLower().Contains(q.ToLower()) || are.EXR_FROM_DATE.ToString().Contains(q.ToLower())
                          || are.EXR_TO_DATE.ToString().Contains(q.ToLower())) && are.EXR_STATUS == "A"
                    select are).ToList();
        }
    }
}