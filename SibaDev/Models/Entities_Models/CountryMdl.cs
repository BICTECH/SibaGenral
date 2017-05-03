using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CountryMdl : Model
    {
        public static MS_SYS_COUNTRY get_country(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_COUNTRY where mdl.CNT_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_COUNTRY
            {
                CNT_CODE = mdl.CNT_CODE,
                CNT_NAME = mdl.CNT_NAME,
                CNT_ZIP = mdl.CNT_ZIP,
                CNT_CRTE_BY = mdl.CNT_CRTE_BY,
                CNT_CRTE_DATE = mdl.CNT_CRTE_DATE,
                CNT_STATUS = mdl.CNT_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_COUNTRY> get_countries()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_COUNTRY where mdl.CNT_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_COUNTRY
            {
                CNT_CODE = mdl.CNT_CODE,
                CNT_NAME = mdl.CNT_NAME,
                CNT_ZIP = mdl.CNT_ZIP,
                CNT_CRTE_BY = mdl.CNT_CRTE_BY,
                CNT_CRTE_DATE = mdl.CNT_CRTE_DATE,
                CNT_STATUS = mdl.CNT_STATUS
            });
        }

        public static IEnumerable<object> get_lov_country()
        {
            var db = new SibaModel();
            return (from country in db.MS_SYS_COUNTRY
                    where country.CNT_STATUS == "A"
                    select new
                    { CODE = country.CNT_CODE, NAME = country.CNT_NAME });
        }

        public static bool save_country(MS_SYS_COUNTRY cty)
        {
            var db = new SibaModel();
            if (cty.CNT_STATUS == "A")
            {
                var db_country = db.MS_SYS_COUNTRY.Find(cty.CNT_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_COUNTRY.Attach(db_country);
                    db_country.Map(cty);
                }

            }
            else if (cty.CNT_STATUS == "U")
            {
                cty.CNT_STATUS = "A";
                db.MS_SYS_COUNTRY.Add(cty);
            }
            else if (cty.CNT_STATUS == "D")
            {
                var db_country = db.MS_SYS_COUNTRY.Find(cty.CNT_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_COUNTRY.Attach(db_country);
                    db_country.CNT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_COUNTRY> search_countries(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_COUNTRY where (cty.CNT_CODE.ToLower().Contains(q.ToLower()) || cty.CNT_NAME.ToLower().Contains(q.ToLower())) 
                    && cty.CNT_STATUS == "A" select cty).ToList();

        }
    }
}