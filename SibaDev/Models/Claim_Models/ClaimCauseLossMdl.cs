using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.Claim_Models;

namespace SibaDev.Models.Claim_Models
{
    public class ClaimCauseLossMdl : Model
    {
        public static MS_CLM_CAUSE_LOSS get_loss(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_CAUSE_LOSS where mdl.CLM_CAUSE_CODE == code select mdl).ToList().Select(mdl => new MS_CLM_CAUSE_LOSS
            {
                CLM_CAUSE_CODE = mdl.CLM_CAUSE_CODE,
                CLM_CAUSE_NAME = mdl.CLM_CAUSE_NAME,
                CLM_CAUSE_DESC = mdl.CLM_CAUSE_DESC,
                CLM_CAUSE_CRTE_BY = mdl.CLM_CAUSE_CRTE_BY,
                CLM_CAUSE_CRTE_DATE = mdl.CLM_CAUSE_CRTE_DATE,
                CLM_CAUSE_STATUS = mdl.CLM_CAUSE_STATUS
            }).Single();
        }

        public static IEnumerable<MS_CLM_CAUSE_LOSS> get_losses()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CLM_CAUSE_LOSS where mdl.CLM_CAUSE_STATUS == "A" select mdl).ToList().Select(mdl => new MS_CLM_CAUSE_LOSS
            {
                CLM_CAUSE_CODE = mdl.CLM_CAUSE_CODE,
                CLM_CAUSE_NAME = mdl.CLM_CAUSE_NAME,
                CLM_CAUSE_DESC = mdl.CLM_CAUSE_DESC,
                CLM_CAUSE_CRTE_BY = mdl.CLM_CAUSE_CRTE_BY,
                CLM_CAUSE_CRTE_DATE = mdl.CLM_CAUSE_CRTE_DATE,
                CLM_CAUSE_STATUS = mdl.CLM_CAUSE_STATUS
            });
        }

        public static IEnumerable<object> get_lov_loss()
        {
            var db = new SibaModel();
            return (from loss in db.MS_CLM_CAUSE_LOSS
                    where loss.CLM_CAUSE_STATUS == "A"
                    select new
                    { CODE = loss.CLM_CAUSE_CODE, NAME = loss.CLM_CAUSE_NAME });
        }

        public static bool save_loss(MS_CLM_CAUSE_LOSS loss)
        {
            var db = new SibaModel();
            if (loss.CLM_CAUSE_STATUS == "A")
            {
                var db_loss = db.MS_CLM_CAUSE_LOSS.Find(loss.CLM_CAUSE_CODE);
                if (db_loss != null)
                {
                    db.MS_CLM_CAUSE_LOSS.Attach(db_loss);
                    db_loss.Map(loss);
                }

            }
            else if (loss.CLM_CAUSE_STATUS == "U")
            {
                loss.CLM_CAUSE_STATUS = "A";
                db.MS_CLM_CAUSE_LOSS.Add(loss);
            }
            else if (loss.CLM_CAUSE_STATUS == "D")
            {
                var db_loss = db.MS_CLM_CAUSE_LOSS.Find(loss.CLM_CAUSE_CODE);
                if (db_loss != null)
                {
                    db.MS_CLM_CAUSE_LOSS.Attach(db_loss);
                    db_loss.CLM_CAUSE_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_CLM_CAUSE_LOSS> search_losses(string q)
        {
            var db = new SibaModel();
            return (from loss in db.MS_CLM_CAUSE_LOSS
                    where (loss.CLM_CAUSE_CODE.ToLower().Contains(q.ToLower()) || loss.CLM_CAUSE_NAME.ToLower().Contains(q.ToLower()))
&& loss.CLM_CAUSE_STATUS == "A"
                    select loss).ToList();

        }
    }
}