using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;


namespace SibaDev.Models
{
    public class AcctCategoryMdl : Model
    {
        public static MS_ACCT_CATEGORY GetAcctCategory(string code)
        {
            var db = new SibaModel();
            return (from accCategory in db.MS_ACCT_CATEGORY where accCategory.ACAT_CODE == code select accCategory).ToList().Select(accCategory => new MS_ACCT_CATEGORY
            {
                ACAT_CODE = accCategory.ACAT_CODE,
                ACAT_NAME = accCategory.ACAT_NAME,
                ACAT_DESC = accCategory.ACAT_DESC,
                ACAT_CRTE_BY = accCategory.ACAT_CRTE_BY,
                ACAT_CRTE_DATE = accCategory.ACAT_CRTE_DATE,
                ACAT_MOD_BY = accCategory.ACAT_MOD_BY,
                ACAT_MOD_DATE = accCategory.ACAT_MOD_DATE,
                ACAT_STATUS = accCategory.ACAT_STATUS
            }).Single();

        }

        public static IEnumerable<MS_ACCT_CATEGORY> GetAcctCategories()
        {
            var db = new SibaModel();
            return (from accCategory in db.MS_ACCT_CATEGORY where accCategory.ACAT_STATUS == "A" select accCategory.ACAT_CODE).Select(GetAcctCategory);
        }

        public static IEnumerable<object> GetAcctCategoryLov()
        {
            return GetAcctCategories().Select(ac => new { CODE = ac.ACAT_CODE, NAME = ac.ACAT_NAME });
        }

        

        public static bool SaveAcctCategory(MS_ACCT_CATEGORY accCat)
        {
            var db = new SibaModel();
            var dbAccCat = db.MS_ACCT_CATEGORY.Find(accCat.ACAT_CODE);
            switch (accCat.ACAT_STATUS)
            {
                case "A":

                    if (dbAccCat != null)
                    {
                        db.MS_ACCT_CATEGORY.Attach(dbAccCat);
                        dbAccCat.Map(accCat);
                    }
                    break;
                case "U":
                    accCat.ACAT_STATUS = "A";
                    accCat.ACAT_CRTE_DATE = DateTime.Now;
                    db.MS_ACCT_CATEGORY.Add(accCat);
                    break;
                case "D":

                    if (dbAccCat != null)
                    {
                        db.MS_ACCT_CATEGORY.Attach(dbAccCat);
                        dbAccCat.ACAT_STATUS = "D";
                    }
                    break;
            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_ACCT_CATEGORY> SearchAcctCategory(string q)
        {
            var db = new SibaModel();
            return (from accCategory in db.MS_ACCT_CATEGORY where
                    (accCategory.ACAT_CODE.ToLower().Contains(q.ToLower()) ||
                     accCategory.ACAT_NAME.ToLower().Contains(q.ToLower())) && accCategory.ACAT_STATUS == "A"
                select accCategory.ACAT_CODE).ToList().Select(GetAcctCategory);
        }

        //find main account account if it exists
        public static IEnumerable<object> FindAcctCategoryLov(string q)
        {
            var db = new SibaModel();
            return (from acctCat in db.MS_ACCT_CATEGORY where string.Equals(acctCat.ACAT_CODE, q, StringComparison.CurrentCultureIgnoreCase) && acctCat.ACAT_STATUS == "A" select new { CODE = acctCat.ACAT_CODE, NAME = acctCat.ACAT_NAME });

        }
    }
}