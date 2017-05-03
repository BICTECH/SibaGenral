using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CustomerTypesMdl : Model
    {
        public static MS_SYS_CUST_TYPES get_customertype(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_CUST_TYPES where mdl.CTP_CODE == code select mdl).ToList().Select(mdl => new MS_SYS_CUST_TYPES
            {
                CTP_CODE = mdl.CTP_CODE,
                CTP_NAME = mdl.CTP_NAME,
                CTP_DESC = mdl.CTP_DESC,
                CTP_CUST_TYPE = mdl.CTP_CUST_TYPE,
                CTP_PREFIX = mdl.CTP_PREFIX,
                CTP_SURFIX = mdl.CTP_SURFIX,
                CTP_CRTE_BY = mdl.CTP_CRTE_BY,
                CTP_CRTE_DATE = mdl.CTP_CRTE_DATE,
                CTP_STATUS = mdl.CTP_STATUS,
                MS_CUSTOMER_CATEGORY = CustomerCategoryMdl.get_custcat(mdl.CTP_CUST_TYPE)
            }).Single();
        }

        public static IEnumerable<MS_SYS_CUST_TYPES> get_customertypes()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_SYS_CUST_TYPES where mdl.CTP_STATUS == "A" select mdl).ToList().Select(mdl => new MS_SYS_CUST_TYPES
            {
                CTP_CODE = mdl.CTP_CODE,
                CTP_NAME = mdl.CTP_NAME,
                CTP_DESC = mdl.CTP_DESC,
                CTP_CUST_TYPE = mdl.CTP_CUST_TYPE,
                CTP_PREFIX = mdl.CTP_PREFIX,
                CTP_SURFIX = mdl.CTP_SURFIX,
                CTP_CRTE_BY = mdl.CTP_CRTE_BY,
                CTP_CRTE_DATE = mdl.CTP_CRTE_DATE,
                CTP_STATUS = mdl.CTP_STATUS
            });
        }

        public static IEnumerable<object> get_lov_customertypes()
        {
            var db = new SibaModel();
            return (from customertype in db.MS_SYS_CUST_TYPES where customertype.CTP_STATUS == "A" select new { CODE = customertype.CTP_CODE, NAME = customertype.CTP_NAME });
        }

        public static bool save_customertype(MS_SYS_CUST_TYPES are)
        {
            var db = new SibaModel();
            if (are.CTP_STATUS == "A")
            {
                var db_currency = db.MS_SYS_CUST_TYPES.Find(are.CTP_CODE);
                if (db_currency != null)
                {
                    db.MS_SYS_CUST_TYPES.Attach(db_currency);
                    db_currency.Map(are);
                }

            }
            else if (are.CTP_STATUS == "U")
            {
                are.CTP_STATUS = "A";
                db.MS_SYS_CUST_TYPES.Add(are);
            }
            else if (are.CTP_STATUS == "D")
            {
                var db_currency = db.MS_SYS_CUST_TYPES.Find(are.CTP_CODE);
                if (db_currency != null)
                {
                    db.MS_SYS_CUST_TYPES.Attach(db_currency);
                    db_currency.CTP_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }
         
        public static IEnumerable<MS_SYS_CUST_TYPES> search_customertypes(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_CUST_TYPES
                    where (are.CTP_CODE.ToLower().Contains(q.ToLower()) || are.CTP_NAME.ToLower().Contains(q.ToLower())
                          || are.CTP_DESC.ToLower().Contains(q.ToLower()) || are.CTP_CUST_TYPE.ToLower().Contains(q.ToLower())
                          || are.CTP_PREFIX.ToLower().Contains(q.ToLower()) || are.CTP_SURFIX.ToLower().Contains(q.ToLower())) && are.CTP_STATUS == "A"
                    select are).ToList();
        }
    }
}