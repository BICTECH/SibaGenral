using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class IntermediaryMdl : Model
    {
        public static MS_SYS_INTERMEDIARY get_intermediary(string code)
        {
                var db = new SibaModel();
            try
            {
                return (from interm in db.MS_SYS_INTERMEDIARY where interm.INT_CODE == code select interm).ToList().Select(i => new MS_SYS_INTERMEDIARY
                {
                    INT_CODE = i.INT_CODE,
                    INT_CMP_CODE = i.INT_CMP_CODE,
                    //INT_BRANCH_CODE = i.INT_BRANCH_CODE,
                    INT_OFFICIAL_NAME = i.INT_OFFICIAL_NAME,
                    INT_POSTAL_ADDRS = i.INT_POSTAL_ADDRS,
                    INT_HOME_ADDRS = i.INT_HOME_ADDRS,
                    INT_PHONE = i.INT_PHONE,
                    INT_CTP_CODE = i.INT_CTP_CODE,
                    INT_PHONE1 = i.INT_PHONE1,
                    INT_MOBILE = i.INT_MOBILE,
                    INT_AREA_NAME = i.INT_AREA_NAME,
                    INT_CONTACT_PERS = i.INT_CONTACT_PERS,
                    INT_EMAIL = i.INT_EMAIL,
                    INT_FAX = i.INT_FAX,
                    INT_BANK_NUMBER = i.INT_BANK_NUMBER,
                    INT_BANK_NAME = i.INT_BANK_NAME,
                    INT_BANK_BRANCH = i.INT_BANK_BRANCH,
                    INT_CITY_NAME = i.INT_CITY_NAME,
                    INT_GENDER = i.INT_GENDER,
                    INT_ID1_NO = i.INT_ID1_NO,
                    INT_ID1_TYPE = i.INT_ID1_TYPE,
                    INT_ID2_NO = i.INT_ID2_NO,
                    INT_ID2_TYPE = i.INT_ID2_TYPE,
                    INT_TIN_NO = i.INT_TIN_NO,
                    INT_REG_NO = i.INT_REG_NO,
                    INT_CRTE_BY = i.INT_CRTE_BY,
                    INT_CRTE_DATE = i.INT_CRTE_DATE,
                    INT_MOD_BY = i.INT_MOD_BY,
                    INT_MOD_DATE = i.INT_MOD_DATE,
                    INT_STATUS = i.INT_STATUS,
                    MS_SYS_CUST_TYPES = CustomerTypesMdl.get_customertype(i.INT_CTP_CODE)
                }).Single();
            }
            catch (Exception e)
            {
                var exc = e;
                return null;
            }
                
            }

        public static IEnumerable<MS_SYS_INTERMEDIARY> get_intermediaries()
        {
            var db = new SibaModel();
            return (from i in db.MS_SYS_INTERMEDIARY where i.INT_STATUS == "A" select i).ToList().Select(i => new MS_SYS_INTERMEDIARY
            {
                INT_CODE = i.INT_CODE,
                INT_CMP_CODE = i.INT_CMP_CODE,
                INT_OFF_CODE = i.INT_OFF_CODE,
                INT_OFFICIAL_NAME = i.INT_OFFICIAL_NAME,
                INT_POSTAL_ADDRS = i.INT_POSTAL_ADDRS,
                INT_HOME_ADDRS = i.INT_HOME_ADDRS,
                INT_PHONE = i.INT_PHONE,
                INT_PHONE1 = i.INT_PHONE1,
                INT_MOBILE = i.INT_MOBILE,
                INT_AREA_NAME = i.INT_AREA_NAME,
                INT_CONTACT_PERS = i.INT_CONTACT_PERS,
                INT_EMAIL = i.INT_EMAIL,
                INT_FAX = i.INT_FAX,
                INT_BANK_NUMBER = i.INT_BANK_NUMBER,
                INT_BANK_NAME = i.INT_BANK_NAME,
                INT_BANK_BRANCH = i.INT_BANK_BRANCH,
                INT_CITY_NAME = i.INT_CITY_NAME,
                INT_GENDER = i.INT_GENDER,
                INT_ID1_NO = i.INT_ID1_NO,
                INT_ID1_TYPE = i.INT_ID1_TYPE,
                INT_ID2_NO = i.INT_ID2_NO,
                INT_ID2_TYPE = i.INT_ID2_TYPE,
                INT_TIN_NO = i.INT_TIN_NO,
                INT_REG_NO = i.INT_REG_NO,
                INT_CRTE_BY = i.INT_CRTE_BY,
                INT_CRTE_DATE = i.INT_CRTE_DATE,
                INT_MOD_BY = i.INT_MOD_BY,
                INT_MOD_DATE = i.INT_MOD_DATE,
                INT_STATUS = i.INT_STATUS
            });
        }


        public static IEnumerable<object> get_lov_intermediary()
        {
            var db = new SibaModel();
            return (from interm in db.MS_SYS_INTERMEDIARY
                    where interm.INT_STATUS == "A"
                    select new
                    { CODE = interm.INT_CODE, NAME = interm.INT_OFFICIAL_NAME });
        }

        public static bool save_intermediary(MS_SYS_INTERMEDIARY are)
        {
            var db = new SibaModel();
            if (are.INT_STATUS == "A")
            {
                var db_interm = db.MS_SYS_INTERMEDIARY.Find(are.INT_CODE);
                if (db_interm != null)
                {
                    db.MS_SYS_INTERMEDIARY.Attach(db_interm);
                    db_interm.Map(are);
                }

            }
            else if (are.INT_STATUS == "U")
            {
                are.INT_STATUS = "A";
                db.MS_SYS_INTERMEDIARY.Add(are);
            }
            else if (are.INT_STATUS == "D")
            {
                var db_interm = db.MS_SYS_INTERMEDIARY.Find(are.INT_CODE);
                if (db_interm != null)
                {
                    db.MS_SYS_INTERMEDIARY.Attach(db_interm);
                    db_interm.INT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_INTERMEDIARY> search_intermediaries(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_INTERMEDIARY
                    where (are.INT_CODE.ToLower().Contains(q.ToLower()) || are.INT_CMP_CODE.ToLower().Contains(q.ToLower())
                    ||
                     //are.INT_BRANCH_CODE.ToLower().Contains(q.ToLower()) || are.INT_OFFICIAL_NAME.ToLower().Contains(q.ToLower()) ||
                     are.INT_POSTAL_ADDRS.ToLower().Contains(q.ToLower()) || are.INT_HOME_ADDRS.ToLower().Contains(q.ToLower())
                    || are.INT_PHONE1.ToLower().Contains(q.ToLower()) || are.INT_MOBILE.ToLower().Contains(q.ToLower())
                    || are.INT_AREA_NAME.ToString().Contains(q.ToLower()) || are.INT_CONTACT_PERS.ToString().Contains(q.ToLower())
                    || are.INT_PHONE.ToString().Contains(q.ToLower()) || are.INT_EMAIL.ToString().Contains(q.ToLower())
                    || are.INT_FAX.ToLower().Contains(q.ToLower()) || are.INT_BANK_NUMBER.ToLower().Contains(q.ToLower())
                    || are.INT_BANK_NAME.ToString().Contains(q.ToLower()) || are.INT_BANK_BRANCH.ToString().Contains(q.ToLower())
                    || are.INT_CITY_NAME.ToLower().Contains(q.ToLower()) || are.INT_GENDER.ToLower().Contains(q.ToLower())
                    || are.INT_ID1_TYPE.ToLower().Contains(q.ToLower()) || are.INT_ID1_NO.ToString().Contains(q.ToLower())
                    || are.INT_ID2_TYPE.ToString().Contains(q.ToLower()) || are.INT_ID2_NO.ToString().Contains(q.ToLower())
                    || are.INT_TIN_NO.ToLower().Contains(q.ToLower()) || are.INT_REG_NO.ToString().Contains(q.ToLower())) && are.INT_STATUS == "A"
                    select are.INT_CODE).ToList().Select(get_intermediary);

        }
    }
}