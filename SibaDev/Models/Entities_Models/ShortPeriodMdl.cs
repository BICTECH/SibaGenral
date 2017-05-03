using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ShortPeriodMdl : Model
    {
        public static INS_UDW_SHORT_PERIOD get_period(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from periods in db.INS_UDW_SHORT_PERIOD where periods.SPD_PRD_CODE == code select periods).ToList().Select(periods => new INS_UDW_SHORT_PERIOD
                {
                    SPD_PRD_CODE = periods.SPD_PRD_CODE,
                    SPD_RATE_PERC = periods.SPD_RATE_PERC,
                    SPD_NO_OF_DAYS = periods.SPD_NO_OF_DAYS,
                    SPD_CRTE_BY = periods.SPD_CRTE_BY,
                    SPD_CRTE_DATE = periods.SPD_CRTE_DATE,
                    SPD_STATUS = periods.SPD_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<INS_UDW_SHORT_PERIOD> get_periods()
        {
            var db = new SibaModel();
            return (from periods in db.INS_UDW_SHORT_PERIOD where periods.SPD_STATUS == "A" select periods).ToList().Select(periods => new INS_UDW_SHORT_PERIOD
            {
                SPD_PRD_CODE = periods.SPD_PRD_CODE,
                SPD_RATE_PERC = periods.SPD_RATE_PERC,
                SPD_NO_OF_DAYS = periods.SPD_NO_OF_DAYS,              
                SPD_CRTE_BY = periods.SPD_CRTE_BY,
                SPD_CRTE_DATE = periods.SPD_CRTE_DATE,
                SPD_STATUS = periods.SPD_STATUS
            });
        }

        public static IEnumerable<object> get_lov_periods()
        {
            var db = new SibaModel();
            return (from periods in db.INS_UDW_SHORT_PERIOD where periods.SPD_STATUS == "A" select new { CODE = periods.SPD_PRD_CODE, NAME = periods.SPD_RATE_PERC });
        }

        public static bool save_period(INS_UDW_SHORT_PERIOD cty)
        {
            var db = new SibaModel();
            if (cty.SPD_STATUS == "A")
            {
                var db_company = db.INS_UDW_SHORT_PERIOD.Find(cty.SPD_SYS_ID);
                if (db_company != null)
                {
                    db.INS_UDW_SHORT_PERIOD.Attach(db_company);
                    db_company.Map(cty);
                }

            }
            else if (cty.SPD_STATUS == "U")
            {
                cty.SPD_STATUS = "A";
                db.INS_UDW_SHORT_PERIOD.Add(cty);
            }
            else if (cty.SPD_STATUS == "D")
            {
                var db_company = db.INS_UDW_SHORT_PERIOD.Find(cty.SPD_SYS_ID);
                if (db_company != null)
                {
                    db.INS_UDW_SHORT_PERIOD.Attach(db_company);
                    db_company.SPD_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<INS_UDW_SHORT_PERIOD> search_periods(string q)
        {
            var db = new SibaModel();
            return (from cty in db.INS_UDW_SHORT_PERIOD
                    where (cty.SPD_PRD_CODE.ToLower().Contains(q.ToLower()) || cty.SPD_RATE_PERC.ToString().Contains(q.ToLower())
                     || cty.SPD_NO_OF_DAYS.ToString().Contains(q.ToLower())) 
                     && cty.SPD_STATUS == "A"
                    select cty).ToList();

        }
    }
}