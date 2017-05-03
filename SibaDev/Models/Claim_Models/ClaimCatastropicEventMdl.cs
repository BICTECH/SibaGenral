using System;
using System.Collections.Generic;
using System.Linq;


namespace SibaDev.Models.Claim_Models
{
    public class ClaimCatastropicEventMdl 
    {
        public static MS_CLM_CAT_EVENT get_catastrophy(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_CAT_EVENT where mdl.CLM_CAT_CODE == code select mdl).ToList().Select(mdl => new MS_CLM_CAT_EVENT
            {
                CLM_CAT_CODE = mdl.CLM_CAT_CODE,
                CLM_CAT_NAME = mdl.CLM_CAT_NAME,
                CLM_CAT_DESC = mdl.CLM_CAT_DESC,
                CLM_CAT_CRTE_BY = mdl.CLM_CAT_CRTE_BY,
                CLM_CAT_CRTE_DATE = mdl.CLM_CAT_CRTE_DATE,
                CLM_CAT_STATUS = mdl.CLM_CAT_STATUS
            }).Single();
        }

        public static IEnumerable<MS_CLM_CAT_EVENT> get_catastrophys()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_CAT_EVENT where mdl.CLM_CAT_STATUS == "A" select mdl).ToList().Select(mdl => new MS_CLM_CAT_EVENT
            {
                CLM_CAT_CODE = mdl.CLM_CAT_CODE,
                CLM_CAT_NAME = mdl.CLM_CAT_NAME,
                CLM_CAT_DESC = mdl.CLM_CAT_DESC,
                CLM_CAT_CRTE_BY = mdl.CLM_CAT_CRTE_BY,
                CLM_CAT_CRTE_DATE = mdl.CLM_CAT_CRTE_DATE,
                CLM_CAT_STATUS = mdl.CLM_CAT_STATUS
            });
        }

        public static IEnumerable<object> get_lov_catastrophy()
        {
            var db = new SibaModel();
            return (from catastrophy in db.MS_CLM_CAT_EVENT
                    where catastrophy.CLM_CAT_STATUS == "A"
                    select new
                    { CODE = catastrophy.CLM_CAT_CODE, NAME = catastrophy.CLM_CAT_NAME });
        }

        public static bool save_catastrophy(MS_CLM_CAT_EVENT cat)
        {
            var db = new SibaModel();
            if (cat.CLM_CAT_STATUS == "A")
            {
                var db_catastrophy = db.MS_CLM_CAT_EVENT.Find(cat.CLM_CAT_CODE);
                if (db_catastrophy != null)
                {
                    db.MS_CLM_CAT_EVENT.Attach(db_catastrophy);
                    db_catastrophy.Map(cat);
                }

            }
            else if (cat.CLM_CAT_STATUS == "U")
            {
                cat.CLM_CAT_STATUS = "A";
                db.MS_CLM_CAT_EVENT.Add(cat);
            }
            else if (cat.CLM_CAT_STATUS == "D")
            {
                var db_catastrophy = db.MS_CLM_CAT_EVENT.Find(cat.CLM_CAT_CODE);
                if (db_catastrophy != null)
                {
                    db.MS_CLM_CAT_EVENT.Attach(db_catastrophy);
                    db_catastrophy.CLM_CAT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_CLM_CAT_EVENT> search_catastrophys(string q)
        {
            var db = new SibaModel();
            return (from cat in db.MS_CLM_CAT_EVENT where (cat.CLM_CAT_CODE.ToLower().Contains(q.ToLower()) || cat.CLM_CAT_NAME.ToLower().Contains(q.ToLower())) 
                    && cat.CLM_CAT_STATUS == "A" select cat).ToList();

        }
    }
}