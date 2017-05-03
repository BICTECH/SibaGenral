using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class AcceptanceTypeMdl : Model
    {
        public static MS_SYS_ACCEPTANCE_TYPES get_acceptancetype(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_ACCEPTANCE_TYPES where mdl.ATY_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_ACCEPTANCE_TYPES
            {
                ATY_CODE = mdl.ATY_CODE,
                ATY_NAME = mdl.ATY_NAME,
                ATY_DESCRIPTION = mdl.ATY_DESCRIPTION,
                ATY_CRTE_BY = mdl.ATY_CRTE_BY,
                ATY_CRTE_DATE = mdl.ATY_CRTE_DATE,
                ATY_STATUS = mdl.ATY_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_ACCEPTANCE_TYPES> get_acceptancetypes()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_ACCEPTANCE_TYPES where mdl.ATY_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_ACCEPTANCE_TYPES
            {
                ATY_CODE = mdl.ATY_CODE,
                ATY_NAME = mdl.ATY_NAME,
                ATY_DESCRIPTION = mdl.ATY_DESCRIPTION,
                ATY_CRTE_BY = mdl.ATY_CRTE_BY,
                ATY_CRTE_DATE = mdl.ATY_CRTE_DATE,
                ATY_STATUS = mdl.ATY_STATUS
            });
        }

        public static bool save_acceptancetype(MS_SYS_ACCEPTANCE_TYPES are)
        {
            var db = new SibaModel();
            if (are.ATY_STATUS == "A")
            {
                var db_mdl = db.MS_SYS_ACCEPTANCE_TYPES.Find(are.ATY_CODE);
                if (db_mdl != null)
                {
                    db.MS_SYS_ACCEPTANCE_TYPES.Attach(db_mdl);
                    db_mdl.Map(are);
                }

            }
            else if (are.ATY_STATUS == "U")
            {
                are.ATY_STATUS = "A";
                db.MS_SYS_ACCEPTANCE_TYPES.Add(are);
            }
            else if (are.ATY_STATUS == "D")
            {
                var db_mdl = db.MS_SYS_ACCEPTANCE_TYPES.Find(are.ATY_CODE);
                if (db_mdl != null)
                {
                    db.MS_SYS_ACCEPTANCE_TYPES.Attach(db_mdl);
                    db_mdl.ATY_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_ACCEPTANCE_TYPES> search_acceptancetypes(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_ACCEPTANCE_TYPES
                    where (are.ATY_CODE.ToLower().Contains(q.ToLower()) || are.ATY_NAME.ToLower().Contains(q.ToLower())
                          || are.ATY_DESCRIPTION.ToString().Contains(q.ToLower())) && are.ATY_STATUS == "A"
                    select are).ToList();
        }
    }
}