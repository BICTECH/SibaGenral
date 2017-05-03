using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class SourceBusinessMdl : Model
    {
        public static MS_SYS_SOURCE_BUSINESS get_sourcebusiness(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_SYS_SOURCE_BUSINESS where mdl.SRB_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_SOURCE_BUSINESS
                {
                    SRB_CODE = mdl.SRB_CODE,
                    SRB_NAME = mdl.SRB_NAME,
                    SRB_DESC = mdl.SRB_DESC,
                    SRB_CRTE_BY = mdl.SRB_CRTE_BY,
                    SRB_CRTE_DATE = mdl.SRB_CRTE_DATE,
                    SRB_STATUS = mdl.SRB_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_SYS_SOURCE_BUSINESS> get_sourcebusinesses()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_SOURCE_BUSINESS where mdl.SRB_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_SOURCE_BUSINESS
            {
                SRB_CODE = mdl.SRB_CODE,
                SRB_NAME = mdl.SRB_NAME,
                SRB_DESC = mdl.SRB_DESC,
                SRB_CRTE_BY = mdl.SRB_CRTE_BY,
                SRB_CRTE_DATE = mdl.SRB_CRTE_DATE,
                SRB_STATUS = mdl.SRB_STATUS
            });
        }

        public static IEnumerable<object> get_lov_sourcebusinesses()
        {
            var db = new SibaModel();
            return (from srb in db.MS_SYS_SOURCE_BUSINESS where srb.SRB_STATUS == "A" select new { CODE = srb.SRB_CODE, NAME = srb.SRB_NAME });
        }

        public static bool save_sourcebusiness(MS_SYS_SOURCE_BUSINESS cty)
        {
            var db = new SibaModel();
            if (cty.SRB_STATUS == "A")
            {
                var db_sourcebusiness = db.MS_SYS_SOURCE_BUSINESS.Find(cty.SRB_CODE);
                if (db_sourcebusiness != null)
                {
                    db.MS_SYS_SOURCE_BUSINESS.Attach(db_sourcebusiness);
                    db_sourcebusiness.Map(cty);
                }

            }
            else if (cty.SRB_STATUS == "U")
            {
                cty.SRB_STATUS = "A";
                db.MS_SYS_SOURCE_BUSINESS.Add(cty);
            }
            else if (cty.SRB_STATUS == "D")
            {
                var db_sourcebusiness = db.MS_SYS_SOURCE_BUSINESS.Find(cty.SRB_CODE);
                if (db_sourcebusiness != null)
                {
                    db.MS_SYS_SOURCE_BUSINESS.Attach(db_sourcebusiness);
                    db_sourcebusiness.SRB_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_SOURCE_BUSINESS> search_sourcebusinesses(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_SOURCE_BUSINESS
                    where (cty.SRB_CODE.ToLower().Contains(q.ToLower()) || cty.SRB_NAME.ToLower().Contains(q.ToLower())
                        || cty.SRB_DESC.ToLower().Contains(q.ToLower())) && cty.SRB_STATUS == "A"
                    select cty).ToList();
        }
    }
}