using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class DiscountLoadingMdl : Model
    {
        public static MS_SYS_LOADINGS_DISCOUNTS get_discountloading(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_LOADINGS_DISCOUNTS where mdl.LDI_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_LOADINGS_DISCOUNTS
            {
                LDI_CODE = mdl.LDI_CODE,
                LDI_NAME = mdl.LDI_NAME,
                LDI_DESC = mdl.LDI_DESC,
                LDI_TYPE = mdl.LDI_TYPE,
                LDI_AUTONCB = mdl.LDI_AUTONCB,
                LDI_CATG = mdl.LDI_CATG,
                LDI_DEFAULT_AMT = mdl.LDI_DEFAULT_AMT,
                LDI_MAX_AMT = mdl.LDI_MAX_AMT,
                LDI_DEFAULT_PERC = mdl.LDI_DEFAULT_PERC,
                LDI_MAX_PERC = mdl.LDI_MAX_PERC,
                LDI_MIN_PERC = mdl.LDI_MIN_PERC,
                LDI_RTNG_YN = mdl.LDI_RTNG_YN,
                LDI_SI_YN = mdl.LDI_SI_YN,
                LDI_MIN_AMT = mdl.LDI_MIN_AMT,
                LDI_CRTE_BY = mdl.LDI_CRTE_BY,
                LDI_CRTE_DATE = mdl.LDI_CRTE_DATE,
                LDI_STATUS = mdl.LDI_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_LOADINGS_DISCOUNTS> get_discountloadings()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_LOADINGS_DISCOUNTS where mdl.LDI_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_LOADINGS_DISCOUNTS
            {
                LDI_CODE = mdl.LDI_CODE,
                LDI_NAME = mdl.LDI_NAME,
                LDI_DESC = mdl.LDI_DESC,
                LDI_TYPE = mdl.LDI_TYPE,
                LDI_AUTONCB = mdl.LDI_AUTONCB,
                LDI_CATG = mdl.LDI_CATG,
                LDI_DEFAULT_AMT = mdl.LDI_DEFAULT_AMT,
                LDI_MAX_AMT = mdl.LDI_MAX_AMT,
                LDI_DEFAULT_PERC = mdl.LDI_DEFAULT_PERC,
                LDI_MAX_PERC = mdl.LDI_MAX_PERC,
                LDI_MIN_PERC = mdl.LDI_MIN_PERC,
                LDI_RTNG_YN = mdl.LDI_RTNG_YN,
                LDI_SI_YN = mdl.LDI_SI_YN,
                LDI_MIN_AMT = mdl.LDI_MIN_AMT,
                LDI_CRTE_BY = mdl.LDI_CRTE_BY,
                LDI_CRTE_DATE = mdl.LDI_CRTE_DATE,
                LDI_STATUS = mdl.LDI_STATUS
            });
        }

        public static IEnumerable<object> get_dft_discload()
        {
            var db = new SibaModel();
            return (from dl in db.MS_SYS_LOADINGS_DISCOUNTS where dl.LDI_STATUS == "A" select new
            {
                
                DL_CODE = dl.LDI_CODE,
                DL_NAME = dl.LDI_NAME,
                DL_TYPE = dl.LDI_TYPE,
                DL_PERC = dl.LDI_DEFAULT_PERC,
                DL_DEFT_AMT = dl.LDI_DEFAULT_AMT,
               });
        }

        public static IEnumerable<object> get_lov_discload()
        {
            var db = new SibaModel();
            return (from prod in db.MS_SYS_LOADINGS_DISCOUNTS where prod.LDI_STATUS == "A" select new { CODE = prod.LDI_CODE, NAME = prod.LDI_NAME });
        }
        //
        public static bool save_discountloading(MS_SYS_LOADINGS_DISCOUNTS are)
        {
            var db = new SibaModel();
            if (are.LDI_STATUS == "A")
            {
                var db_discloading = db.MS_SYS_LOADINGS_DISCOUNTS.Find(are.LDI_CODE);
                if (db_discloading != null)
                {
                    db.MS_SYS_LOADINGS_DISCOUNTS.Attach(db_discloading);
                    db_discloading.Map(are);
                }

            }
            else if (are.LDI_STATUS == "U")
            {
                are.LDI_STATUS = "A";
                db.MS_SYS_LOADINGS_DISCOUNTS.Add(are);
            }
            else if (are.LDI_STATUS == "D")
            {
                var db_discloading = db.MS_SYS_LOADINGS_DISCOUNTS.Find(are.LDI_CODE);
                if (db_discloading != null)
                {
                    db.MS_SYS_LOADINGS_DISCOUNTS.Attach(db_discloading);
                    db_discloading.LDI_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_LOADINGS_DISCOUNTS> search_discountloadings(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_LOADINGS_DISCOUNTS
                    where (are.LDI_CODE.ToLower().Contains(q.ToLower()) || are.LDI_TYPE.ToLower().Contains(q.ToLower())
                          || are.LDI_NAME.ToString().Contains(q.ToLower()) || are.LDI_DESC.ToLower().Contains(q.ToLower())
                          || are.LDI_CATG.ToLower().Contains(q.ToLower()) || are.LDI_MIN_PERC.ToString().Contains(q.ToLower())
                          || are.LDI_MAX_PERC.ToString().Contains(q.ToLower()) || are.LDI_DEFAULT_PERC.ToString().Contains(q.ToLower())
                          || are.LDI_MIN_AMT.ToString().Contains(q.ToLower()) || are.LDI_MAX_AMT.ToString().Contains(q.ToLower())
                          || are.LDI_DEFAULT_AMT.ToString().Contains(q.ToLower())) && are.LDI_STATUS == "A"
                    select are).ToList();
        }
    }
}