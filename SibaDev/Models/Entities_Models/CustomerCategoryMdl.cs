using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CustomerCategoryMdl : Model
    {
    public static MS_CUSTOMER_CATEGORY get_custcat(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CUSTOMER_CATEGORY where mdl.CUS_CAT_CODE == code select mdl).ToList().Select(mdl => new MS_CUSTOMER_CATEGORY
            {

                CUS_CAT_CODE = mdl.CUS_CAT_CODE,
                CUS_CAT_INTERM_YN = mdl.CUS_CAT_INTERM_YN,
                CUS_CAT_NAME = mdl.CUS_CAT_NAME,
                CUS_CAT_MAIN_ACCT = mdl.CUS_CAT_MAIN_ACCT,
                CUS_CAT_SUB_ACCT = mdl.CUS_CAT_SUB_ACCT,
                CUS_CAT_CRTE_DATE = mdl.CUS_CAT_CRTE_DATE,
                CUS_CAT_CRTE_BY = mdl.CUS_CAT_CRTE_BY,
                CUS_CAT_MOD_DATE = mdl.CUS_CAT_MOD_DATE,
                CUS_CAT_MOD_BY = mdl.CUS_CAT_MOD_BY,
                CUS_CAT_STATUS = mdl.CUS_CAT_STATUS,
                MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(mdl.CUS_CAT_MAIN_ACCT),
                MS_ACCT_SUB_ACCOUNT = SubAccountMdl.GetSubAccount(mdl.CUS_CAT_SUB_ACCT)
            }).Single();
        }

        public static IEnumerable<MS_CUSTOMER_CATEGORY> get_custcats()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_CUSTOMER_CATEGORY where mdl.CUS_CAT_STATUS == "A" select mdl).ToList().Select(mdl => new MS_CUSTOMER_CATEGORY
            {
              
                CUS_CAT_CODE = mdl.CUS_CAT_CODE,
                CUS_CAT_INTERM_YN = mdl.CUS_CAT_INTERM_YN,
                CUS_CAT_NAME = mdl.CUS_CAT_NAME,
                CUS_CAT_MAIN_ACCT = mdl.CUS_CAT_MAIN_ACCT,
                CUS_CAT_SUB_ACCT = mdl.CUS_CAT_SUB_ACCT,
                CUS_CAT_CRTE_DATE = mdl.CUS_CAT_CRTE_DATE,
                CUS_CAT_CRTE_BY = mdl.CUS_CAT_CRTE_BY,
                CUS_CAT_MOD_DATE = mdl.CUS_CAT_MOD_DATE,
                CUS_CAT_MOD_BY = mdl.CUS_CAT_MOD_BY,
                CUS_CAT_STATUS = mdl.CUS_CAT_STATUS,
          
            });
        }

        public static IEnumerable<object> get_lov_custcat()
        {
            var db = new SibaModel();
            return (from interm in db.MS_CUSTOMER_CATEGORY where interm.CUS_CAT_STATUS == "A" select new { CODE = interm.CUS_CAT_CODE, NAME = interm.CUS_CAT_NAME });
        }

        public static bool save_custcat(MS_CUSTOMER_CATEGORY are)
        {
            var db = new SibaModel();
            switch (are.CUS_CAT_STATUS)
            {
                case "A":
                {
                    var dbAgencycomm = db.MS_CUSTOMER_CATEGORY.Find(are.CUS_CAT_CODE);
                    if (dbAgencycomm != null)
                    {
                        db.MS_CUSTOMER_CATEGORY.Attach(dbAgencycomm);
                        dbAgencycomm.Map(are);
                    }

                }
                    break;
                case "U":
                    are.CUS_CAT_STATUS = "A";
                    db.MS_CUSTOMER_CATEGORY.Add(are);
                    break;
                case "D":
                {
                    var dbAgencycomm = db.MS_CUSTOMER_CATEGORY.Find(are.CUS_CAT_CODE);
                    if (dbAgencycomm != null)
                    {
                        db.MS_CUSTOMER_CATEGORY.Attach(dbAgencycomm);
                        dbAgencycomm.CUS_CAT_STATUS = "D";
                    }

                }
                    break;
            }
            return db.SaveChanges() > 0;
        }


        public static IEnumerable<MS_CUSTOMER_CATEGORY> search_custcats(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_CUSTOMER_CATEGORY
                    where (cty.CUS_CAT_CODE.ToLower().Contains(q.ToLower()) || cty.CUS_CAT_NAME.ToLower().Contains(q.ToLower()))
                     && cty.CUS_CAT_STATUS == "A"
                    select cty).ToList();

        }
    }
}