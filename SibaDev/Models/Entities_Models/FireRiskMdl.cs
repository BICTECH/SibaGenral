using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class FireRiskMdl : Model
    {
        public static MS_SYS_FIRE_RISK get_risk(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_FIRE_RISK where mdl.FRK_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_FIRE_RISK
            {
                FRK_CODE = mdl.FRK_CODE,
                FRK_NAME = mdl.FRK_NAME,
                FRK_DESC = mdl.FRK_DESC,
                FRK_CRTE_BY = mdl.FRK_CRTE_BY,
                FRK_CRTE_DATE = mdl.FRK_CRTE_DATE,
                FRK_STATUS = mdl.FRK_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_FIRE_RISK> get_risks()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_FIRE_RISK where mdl.FRK_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_FIRE_RISK
            {
                FRK_CODE = mdl.FRK_CODE,
                FRK_NAME = mdl.FRK_NAME,
                FRK_DESC = mdl.FRK_DESC,
                FRK_CRTE_BY = mdl.FRK_CRTE_BY,
                FRK_CRTE_DATE = mdl.FRK_CRTE_DATE,
                FRK_STATUS = mdl.FRK_STATUS
            });
        }

        public static IEnumerable<object> get_lov_risk()
        {
            var db = new SibaModel();
            return (from risk in db.MS_SYS_FIRE_RISK
                    where risk.FRK_STATUS == "A"
                    select new
                    { CODE = risk.FRK_CODE, NAME = risk.FRK_NAME });
        }

        public static bool save_risk(MS_SYS_FIRE_RISK cty)
        {
            var db = new SibaModel();
            if (cty.FRK_STATUS == "A")
            {
                var db_country = db.MS_SYS_FIRE_RISK.Find(cty.FRK_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_FIRE_RISK.Attach(db_country);
                    db_country.Map(cty);
                }

            }
            else if (cty.FRK_STATUS == "U")
            {
                cty.FRK_STATUS = "A";
                db.MS_SYS_FIRE_RISK.Add(cty);
            }
            else if (cty.FRK_STATUS == "D")
            {
                var db_country = db.MS_SYS_FIRE_RISK.Find(cty.FRK_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_FIRE_RISK.Attach(db_country);
                    db_country.FRK_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_FIRE_RISK> search_risks(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_FIRE_RISK where (cty.FRK_CODE.ToLower().Contains(q.ToLower()) || cty.FRK_NAME.ToLower().Contains(q.ToLower())) 
                    && cty.FRK_STATUS == "A" select cty).ToList();

        }
    }
}