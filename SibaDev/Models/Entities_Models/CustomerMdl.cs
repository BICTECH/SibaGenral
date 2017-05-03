using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CustomerMdl : Model
    {
        public static MS_UDW_CUSTOMERS get_customer(string code)
        {
            var db = new SibaModel();
            return (from customer in db.MS_UDW_CUSTOMERS where customer.CUS_CODE == code select customer).ToList().Select(c => new MS_UDW_CUSTOMERS
            {
                CUS_CODE = c.CUS_CODE,
                CUS_TYPE_CODE = c.CUS_TYPE_CODE,
                CUS_TITLE = c.CUS_TITLE,
                CUS_FIRST_NAME = c.CUS_FIRST_NAME,
                CUS_LAST_NAME = c.CUS_LAST_NAME,
                CUS_OTHER_NAME = c.CUS_OTHER_NAME,
                CUS_OFFICIAL_NAME = c.CUS_OFFICIAL_NAME,
                CUS_ADDRS1 = c.CUS_ADDRS1,
                CUS_ADDRS2 = c.CUS_ADDRS2,
                CUS_BANK_NAME = c.CUS_BANK_NAME,
                CUS_ACC_NUM = c.CUS_ACC_NUM,
                CUS_GENDER = c.CUS_GENDER,
                CUS_DOB = c.CUS_DOB,
                CUS_EMAIL = c.CUS_EMAIL,
                CUS_PROFESSION = c.CUS_PROFESSION,
                CUS_PHONE1 = c.CUS_PHONE1,
                CUS_MOBILE = c.CUS_MOBILE,
                CUS_PIN_NO = c.CUS_PIN_NO,
                CUS_BANK_BRANCH = c.CUS_BANK_BRANCH,
                CUS_CRTE_BY = c.CUS_CRTE_BY,
                CUS_CRTE_DATE = c.CUS_CRTE_DATE,
                CUS_MOD_BY = c.CUS_MOD_BY,
                CUS_MOD_DATE = c.CUS_MOD_DATE,
                CUS_STATUS = c.CUS_STATUS,
                MS_SYS_CUST_TYPES = CustomerTypesMdl.get_customertype(c.CUS_TYPE_CODE)
            }).Single();
        }

        public static IEnumerable<MS_UDW_CUSTOMERS> get_customers()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_CUSTOMERS where mdl.CUS_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_CUSTOMERS
            {
                CUS_CODE = mdl.CUS_CODE,
                CUS_TYPE_CODE = mdl.CUS_TYPE_CODE,
                CUS_TITLE = mdl.CUS_TITLE,
                CUS_FIRST_NAME = mdl.CUS_FIRST_NAME,
                CUS_LAST_NAME = mdl.CUS_LAST_NAME,
                CUS_OTHER_NAME = mdl.CUS_OTHER_NAME,
                CUS_OFFICIAL_NAME = mdl.CUS_OFFICIAL_NAME,
                CUS_ADDRS1 = mdl.CUS_ADDRS1,
                CUS_ADDRS2 = mdl.CUS_ADDRS2,
                CUS_BANK_NAME = mdl.CUS_BANK_NAME,
                CUS_ACC_NUM = mdl.CUS_ACC_NUM,
                CUS_GENDER = mdl.CUS_GENDER,
                CUS_DOB = mdl.CUS_DOB,
                CUS_EMAIL = mdl.CUS_EMAIL,
                CUS_PROFESSION = mdl.CUS_PROFESSION,
                CUS_PHONE1 = mdl.CUS_PHONE1,
                CUS_MOBILE = mdl.CUS_MOBILE,
                CUS_PIN_NO = mdl.CUS_PIN_NO,
                CUS_BANK_BRANCH = mdl.CUS_BANK_BRANCH,
                CUS_CRTE_BY = mdl.CUS_CRTE_BY,
                CUS_CRTE_DATE = mdl.CUS_CRTE_DATE,
                CUS_MOD_BY = mdl.CUS_MOD_BY,
                CUS_MOD_DATE = mdl.CUS_MOD_DATE,
                CUS_STATUS = mdl.CUS_STATUS
            });
        }

        public static IEnumerable<object> get_customer_lov()
        {
            var db = new SibaModel();
            return get_customers().Select(c => new { CODE = c.CUS_CODE, NAME = c.CUS_LAST_NAME, ADDRS = c.CUS_ADDRS1, MOB = c.CUS_MOBILE });
        }

        public static bool save_customer(MS_UDW_CUSTOMERS customer)
        {
            var db = new SibaModel();
            if (customer.CUS_STATUS == "A")
            {
                var dbCustomer = db.MS_UDW_CUSTOMERS.Find(customer.CUS_CODE);
                if (dbCustomer != null)
                {
                    db.MS_UDW_CUSTOMERS.Attach(dbCustomer);
                    dbCustomer.Map(customer);
                }

            }
            else if (customer.CUS_STATUS == "U")
            {
                customer.CUS_STATUS = "A";
                db.MS_UDW_CUSTOMERS.Add(customer);
            }
            else if (customer.CUS_STATUS == "D")
            {
                var dbCustomer = db.MS_UDW_CUSTOMERS.Find(customer.CUS_CODE);
                if (dbCustomer != null)
                {
                    db.MS_UDW_CUSTOMERS.Attach(dbCustomer);
                    dbCustomer.CUS_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_CUSTOMERS> search_customers(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_CUSTOMERS
                    where (are.CUS_CODE.ToLower().Contains(q.ToLower()) || are.CUS_TYPE_CODE.ToLower().Contains(q.ToLower())
                    || are.CUS_FIRST_NAME.ToLower().Contains(q.ToLower()) || are.CUS_LAST_NAME.ToLower().Contains(q.ToLower())
                    || are.CUS_OTHER_NAME.ToLower().Contains(q.ToLower()) || are.CUS_ADDRS1.ToLower().Contains(q.ToLower())
                    || are.CUS_ADDRS2.ToString().Contains(q.ToLower()) || are.CUS_BANK_NAME.ToLower().Contains(q.ToLower())
                    || are.CUS_GENDER.ToString().Contains(q.ToLower()) || are.CUS_DOB.ToString().Contains(q.ToLower())
                    || are.CUS_ACC_NUM.ToLower().Contains(q.ToLower()) || are.CUS_EMAIL.ToLower().Contains(q.ToLower())
                    || are.CUS_PROFESSION.ToString().Contains(q.ToLower()) || are.CUS_TITLE.ToString().Contains(q.ToLower())
                    || are.CUS_PHONE1.ToLower().Contains(q.ToLower()) || are.CUS_MOBILE.ToLower().Contains(q.ToLower())
                    || are.CUS_PIN_NO.ToLower().Contains(q.ToLower()) || are.CUS_BANK_BRANCH.ToLower().Contains(q.ToLower())
                    || are.CUS_OFFICIAL_NAME.ToLower().Contains(q.ToLower())) && are.CUS_STATUS == "A"
                    select are).ToList();

        }

        public static IEnumerable<object> get_est_customer(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.MS_UDW_CUSTOMERS
                        where risk.CUS_CODE == ProdCode && risk.CUS_STATUS == "A"
                        select new
                        {
                            CUS_CODE = risk.CUS_CODE,
                            CUS_OFFICIAL_NAME = risk.CUS_OFFICIAL_NAME,

                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}