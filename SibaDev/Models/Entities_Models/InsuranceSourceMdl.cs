using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class InsuranceSourceMdl : Model
    {
        public static INS_UDW_INSUR_SOURCE get_insource(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.INS_UDW_INSUR_SOURCE where mdl.INSUR_CODE == code select mdl).ToList().Select(mdl => new INS_UDW_INSUR_SOURCE
            {
                INSUR_CODE = mdl.INSUR_CODE,
                INSUR_NAME = mdl.INSUR_NAME,
                INSUR_DESC = mdl.INSUR_DESC,
                INSUR_CRTE_BY = mdl.INSUR_CRTE_BY,
                INSUR_CRTE_DATE = mdl.INSUR_CRTE_DATE,
                INSUR_STATUS = mdl.INSUR_STATUS
            }).Single();
        }

        public static IEnumerable<INS_UDW_INSUR_SOURCE> get_insources()
        {
            var db = new SibaModel();
            return (from mdl in db.INS_UDW_INSUR_SOURCE where mdl.INSUR_STATUS == "A" select mdl).ToList().Select(mdl => new INS_UDW_INSUR_SOURCE
            {
                INSUR_CODE = mdl.INSUR_CODE,
                INSUR_NAME = mdl.INSUR_NAME,
                INSUR_DESC = mdl.INSUR_DESC,
                INSUR_CRTE_BY = mdl.INSUR_CRTE_BY,
                INSUR_CRTE_DATE = mdl.INSUR_CRTE_DATE,
                INSUR_STATUS = mdl.INSUR_STATUS
            });
        }

        public static IEnumerable<object> get_lov_insource()
        {
            var db = new SibaModel();
            return (from mdl in db.INS_UDW_INSUR_SOURCE
                    where mdl.INSUR_STATUS == "A"
                    select new
                    { CODE = mdl.INSUR_CODE, NAME = mdl.INSUR_NAME });
        }

        public static bool save_insource(INS_UDW_INSUR_SOURCE cty)
        {
            var db = new SibaModel();
            if (cty.INSUR_STATUS == "A")
            {
                var db_insource = db.INS_UDW_INSUR_SOURCE.Find(cty.INSUR_CODE);
                if (db_insource != null)
                {
                    db.INS_UDW_INSUR_SOURCE.Attach(db_insource);
                    db_insource.Map(cty);
                }

            }
            else if (cty.INSUR_STATUS == "U")
            {
                cty.INSUR_STATUS = "A";
                db.INS_UDW_INSUR_SOURCE.Add(cty);
            }
            else if (cty.INSUR_STATUS == "D")
            {
                var db_insource = db.INS_UDW_INSUR_SOURCE.Find(cty.INSUR_CODE);
                if (db_insource != null)
                {
                    db.INS_UDW_INSUR_SOURCE.Attach(db_insource);
                    db_insource.INSUR_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<INS_UDW_INSUR_SOURCE> search_insources(string q)
        {
            var db = new SibaModel();
            return (from cty in db.INS_UDW_INSUR_SOURCE where (cty.INSUR_CODE.ToLower().Contains(q.ToLower()) || cty.INSUR_NAME.ToLower().Contains(q.ToLower())) 
                    && cty.INSUR_STATUS == "A" select cty).ToList();

        }
    }
}