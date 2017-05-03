using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class AccountPeriodMdl : Model
    {
        public static MS_SYS_ACCOUNT_PERIODS get_accountperiod(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_ACCOUNT_PERIODS where mdl.ACP_YEAR_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_ACCOUNT_PERIODS
            {
                ACP_YEAR_CODE = mdl.ACP_YEAR_CODE,
                ACP_PERIOD_FROM = mdl.ACP_PERIOD_FROM,
                ACP_PERIOD_TO = mdl.ACP_PERIOD_TO,
                ACP_MONTH_OPEN = mdl.ACP_MONTH_OPEN,
                ACP_MONTH_CLOSE = mdl.ACP_MONTH_CLOSE,
                ACP_CRTE_BY = mdl.ACP_CRTE_BY,
                ACP_CRTE_DATE = mdl.ACP_CRTE_DATE,
                ACP_STATUS = mdl.ACP_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_ACCOUNT_PERIODS> get_accountperiods()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_ACCOUNT_PERIODS where mdl.ACP_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_ACCOUNT_PERIODS
            {
                ACP_YEAR_CODE = mdl.ACP_YEAR_CODE,
                ACP_PERIOD_FROM = mdl.ACP_PERIOD_FROM,
                ACP_PERIOD_TO = mdl.ACP_PERIOD_TO,
                ACP_MONTH_OPEN = mdl.ACP_MONTH_OPEN,
                ACP_MONTH_CLOSE = mdl.ACP_MONTH_CLOSE,
                ACP_CRTE_BY = mdl.ACP_CRTE_BY,
                ACP_CRTE_DATE = mdl.ACP_CRTE_DATE,
                ACP_STATUS = mdl.ACP_STATUS
            });
        }

        public static IEnumerable<object> get_lov_accountperiods()
        {
            var db = new SibaModel();
            return (from accountperiod in db.MS_SYS_ACCOUNT_PERIODS where accountperiod.ACP_STATUS == "A" select new { CODE = accountperiod.ACP_YEAR_CODE });
        }

        public static bool save_accountperiod(MS_SYS_ACCOUNT_PERIODS are)
        {
            var db = new SibaModel();
            if (are.ACP_STATUS == "A")
            {
                var db_accountperiod = db.MS_SYS_ACCOUNT_PERIODS.Find(are.ACP_YEAR_CODE);
                if (db_accountperiod != null)
                {
                    db.MS_SYS_ACCOUNT_PERIODS.Attach(db_accountperiod);
                    db_accountperiod.Map(are);
                }

            }
            else if (are.ACP_STATUS == "U")
            {
                are.ACP_STATUS = "A";
                db.MS_SYS_ACCOUNT_PERIODS.Add(are);
            }
            else if (are.ACP_STATUS == "D")
            {
                var db_accountperiod = db.MS_SYS_ACCOUNT_PERIODS.Find(are.ACP_YEAR_CODE);
                if (db_accountperiod != null)
                {
                    db.MS_SYS_ACCOUNT_PERIODS.Attach(db_accountperiod);
                    db_accountperiod.ACP_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_ACCOUNT_PERIODS> search_accountperiods(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_ACCOUNT_PERIODS
                    where (are.ACP_YEAR_CODE.ToLower().Contains(q.ToLower()) || are.ACP_PERIOD_FROM.ToString().Contains(q.ToLower())
                          || are.ACP_PERIOD_TO.ToString().Contains(q.ToLower()) || are.ACP_MONTH_OPEN.ToLower().Contains(q.ToLower())
                          || are.ACP_MONTH_CLOSE.ToLower().Contains(q.ToLower())) && are.ACP_STATUS == "A"
                    select are).ToList();
        }
    }
}