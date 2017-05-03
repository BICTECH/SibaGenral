using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models

{
    public class ConditionsClausesMdl : Model
    {
        public static MS_SYS_CONDS_CLAUSES get_conditionclause(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_CONDS_CLAUSES where mdl.CCL_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_CONDS_CLAUSES
            {
                CCL_CODE = mdl.CCL_CODE,
                CCL_NAME = mdl.CCL_NAME,
                CCL_TYPE = mdl.CCL_TYPE,
                CCL_DESCRIPTION = mdl.CCL_DESCRIPTION,
                CCL_CRTE_BY = mdl.CCL_CRTE_BY,
                CCL_CRTE_DATE = mdl.CCL_CRTE_DATE,
                CCL_STATUS = mdl.CCL_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_CONDS_CLAUSES> get_conditionclauses()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_CONDS_CLAUSES where mdl.CCL_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_CONDS_CLAUSES
            {
                CCL_CODE = mdl.CCL_CODE,
                CCL_NAME = mdl.CCL_NAME,
                CCL_TYPE = mdl.CCL_TYPE,
                CCL_DESCRIPTION = mdl.CCL_DESCRIPTION,
                CCL_CRTE_BY = mdl.CCL_CRTE_BY,
                CCL_CRTE_DATE = mdl.CCL_CRTE_DATE,
                CCL_STATUS = mdl.CCL_STATUS
            });
        }

        public static IEnumerable<object> get_lov_conditionsclausescovers()
        {
            var db = new SibaModel();
            return (from cover in db.MS_SYS_CONDS_CLAUSES where cover.CCL_STATUS == "A" select new { CODE = cover.CCL_CODE, NAME = cover.CCL_NAME });
        }

        public static bool save_conditionclause(MS_SYS_CONDS_CLAUSES cty)
        {
            var db = new SibaModel();
            if (cty.CCL_STATUS == "A")
            {
                var db_conditionclause = db.MS_SYS_CONDS_CLAUSES.Find(cty.CCL_CODE);
                if (db_conditionclause != null)
                {
                    db.MS_SYS_CONDS_CLAUSES.Attach(db_conditionclause);
                    db_conditionclause.Map(cty);
                }

            }
            else if (cty.CCL_STATUS == "U")
            {
                cty.CCL_STATUS = "A";
                db.MS_SYS_CONDS_CLAUSES.Add(cty);
            }
            else if (cty.CCL_STATUS == "D")
            {
                var db_conditionclause = db.MS_SYS_CONDS_CLAUSES.Find(cty.CCL_CODE);
                if (db_conditionclause != null)
                {
                    db.MS_SYS_CONDS_CLAUSES.Attach(db_conditionclause);
                    db_conditionclause.CCL_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_CONDS_CLAUSES> search_conditionclauses(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_CONDS_CLAUSES
                    where (cty.CCL_CODE.ToLower().Contains(q.ToLower()) || cty.CCL_NAME.ToLower().Contains(q.ToLower())
                        || cty.CCL_DESCRIPTION.ToLower().Contains(q.ToLower())) && cty.CCL_STATUS == "A"
                    select cty).ToList();
        }
    }
}