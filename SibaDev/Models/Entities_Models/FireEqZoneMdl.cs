using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class FireEqZoneMdl : Model
    {
        public static MS_SYS_EQZONE get_eqzone(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_EQZONE where mdl.EQZ_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_EQZONE
            {
                EQZ_CODE = mdl.EQZ_CODE,
                EQZ_NAME = mdl.EQZ_NAME,
                EQZ_DESC = mdl.EQZ_DESC,
                EQZ_CRTE_BY = mdl.EQZ_CRTE_BY,
                EQZ_CRTE_DATE = mdl.EQZ_CRTE_DATE,
                EQZ_STATUS = mdl.EQZ_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_EQZONE> get_eqzones()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_EQZONE where mdl.EQZ_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_EQZONE
            {
                EQZ_CODE = mdl.EQZ_CODE,
                EQZ_NAME = mdl.EQZ_NAME,
                EQZ_DESC = mdl.EQZ_DESC,
                EQZ_CRTE_BY = mdl.EQZ_CRTE_BY,
                EQZ_CRTE_DATE = mdl.EQZ_CRTE_DATE,
                EQZ_STATUS = mdl.EQZ_STATUS
            });
        }

        public static IEnumerable<object> get_lov_eqzone()
        {
            var db = new SibaModel();
            return (from risk in db.MS_SYS_EQZONE
                    where risk.EQZ_STATUS == "A"
                    select new
                    { CODE = risk.EQZ_CODE, NAME = risk.EQZ_NAME });
        }

        public static bool save_risk(MS_SYS_EQZONE cty)
        {
            var db = new SibaModel();
            if (cty.EQZ_STATUS == "A")
            {
                var db_eqzone = db.MS_SYS_EQZONE.Find(cty.EQZ_CODE);
                if (db_eqzone != null)
                {
                    db.MS_SYS_EQZONE.Attach(db_eqzone);
                    db_eqzone.Map(cty);
                }

            }
            else if (cty.EQZ_STATUS == "U")
            {
                cty.EQZ_STATUS = "A";
                db.MS_SYS_EQZONE.Add(cty);
            }
            else if (cty.EQZ_STATUS == "D")
            {
                var db_eqzone = db.MS_SYS_EQZONE.Find(cty.EQZ_CODE);
                if (db_eqzone != null)
                {
                    db.MS_SYS_EQZONE.Attach(db_eqzone);
                    db_eqzone.EQZ_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_EQZONE> search_eqzones(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_EQZONE
                    where (cty.EQZ_CODE.ToLower().Contains(q.ToLower()) || cty.EQZ_NAME.ToLower().Contains(q.ToLower()))
                    && cty.EQZ_STATUS == "A"
                    select cty).ToList();
        }
    }
}