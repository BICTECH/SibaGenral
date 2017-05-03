using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.Claim_Models;

namespace SibaDev.Models.Claim_Models
{
    public class ClaimEstimationTypeMdl : Model
    {
        public static MS_CLM_EST_TYPE get_estimation(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_EST_TYPE where mdl.CLM_EST_TYPE_CODE == code select mdl).ToList().Select(mdl => new MS_CLM_EST_TYPE
            {
                CLM_EST_TYPE_CODE = mdl.CLM_EST_TYPE_CODE,
                CLM_EST_TYPE_NAME = mdl.CLM_EST_TYPE_NAME,
                CLM_EST_TYPE_DESC = mdl.CLM_EST_TYPE_DESC,
                CLM_EST_TYPE_CRTE_BY = mdl.CLM_EST_TYPE_CRTE_BY,
                CLM_EST_TYPE_CRTE_DATE = mdl.CLM_EST_TYPE_CRTE_DATE,
                CLM_EST_TYPE_STATUS = mdl.CLM_EST_TYPE_STATUS
            }).Single();
        }

        public static IEnumerable<MS_CLM_EST_TYPE> get_estimations()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_EST_TYPE where mdl.CLM_EST_TYPE_STATUS == "A" select mdl).ToList().Select(mdl => new MS_CLM_EST_TYPE
            {
                CLM_EST_TYPE_CODE = mdl.CLM_EST_TYPE_CODE,
                CLM_EST_TYPE_NAME = mdl.CLM_EST_TYPE_NAME,
                CLM_EST_TYPE_DESC = mdl.CLM_EST_TYPE_DESC,
                CLM_EST_TYPE_CRTE_BY = mdl.CLM_EST_TYPE_CRTE_BY,
                CLM_EST_TYPE_CRTE_DATE = mdl.CLM_EST_TYPE_CRTE_DATE,
                CLM_EST_TYPE_STATUS = mdl.CLM_EST_TYPE_STATUS
            });
        }

        public static IEnumerable<object> get_lov_estimation()
        {
            var db = new SibaModel();
            return (from estimation in db.MS_CLM_EST_TYPE
                    where estimation.CLM_EST_TYPE_STATUS == "A"
                    select new
                    { CODE = estimation.CLM_EST_TYPE_CODE, NAME = estimation.CLM_EST_TYPE_NAME });
        }

        public static bool save_estimation(MS_CLM_EST_TYPE estimation)
        {
            var db = new SibaModel();
            if (estimation.CLM_EST_TYPE_STATUS == "A")
            {
                var db_estimation = db.MS_CLM_EST_TYPE.Find(estimation.CLM_EST_TYPE_CODE);
                if (db_estimation != null)
                {
                    db.MS_CLM_EST_TYPE.Attach(db_estimation);
                    db_estimation.Map(estimation);
                }

            }
            else if (estimation.CLM_EST_TYPE_STATUS == "U")
            {
                estimation.CLM_EST_TYPE_STATUS = "A";
                db.MS_CLM_EST_TYPE.Add(estimation);
            }
            else if (estimation.CLM_EST_TYPE_STATUS == "D")
            {
                var db_estimation = db.MS_CLM_EST_TYPE.Find(estimation.CLM_EST_TYPE_CODE);
                if (db_estimation != null)
                {
                    db.MS_CLM_EST_TYPE.Attach(db_estimation);
                    db_estimation.CLM_EST_TYPE_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_CLM_EST_TYPE> search_estimations(string q)
        {
            var db = new SibaModel();
            return (from estimation in db.MS_CLM_EST_TYPE
                    where (estimation.CLM_EST_TYPE_CODE.ToLower().Contains(q.ToLower()) || estimation.CLM_EST_TYPE_NAME.ToLower().Contains(q.ToLower()))
&& estimation.CLM_EST_TYPE_STATUS == "A"
                    select estimation).ToList();

        }
    }
}