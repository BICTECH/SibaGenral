using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class ServiceTaxMdl:Model
    {
        public static MS_ACCT_SERVICE_TAX GetServiceTax(string code)
        {
            var _db = new SibaModel();
            using (_db)
            {
                return
                    (from st in _db.MS_ACCT_SERVICE_TAX where st.TX_TAX_CODE == code select st).ToList()
                        .Select(s => new MS_ACCT_SERVICE_TAX
                        {
                            TX_TAX_CODE = s.TX_TAX_CODE,
                            TX_SUB_ACCT_CODE = s.TX_SUB_ACCT_CODE,
                            TX_MAIN_ACCT_CODE = s.TX_MAIN_ACCT_CODE,
                            TX_CRTE_BY = s.TX_CRTE_BY,
                            TX_CRTE_DATE = s.TX_CRTE_DATE,
                            TX_CUST_CAT_CODE = s.TX_CUST_CAT_CODE,
                            TX_FROM_DATE = s.TX_FROM_DATE,
                            TX_MIN_TAX_APP = s.TX_MIN_TAX_APP,
                            TX_MOD_BY = s.TX_MOD_BY,
                            TX_MOD_DATE = s.TX_MOD_DATE,
                            TX_STATUS = s.TX_STATUS,
                            TX_SYS_ID = s.TX_SYS_ID,
                            TX_TAX_NAME = s.TX_TAX_NAME,
                            TX_TAX_PERC = s.TX_TAX_PERC,
                            TX_TO_DATE = s.TX_TO_DATE,
                            MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(s.TX_MAIN_ACCT_CODE),
                            MS_ACCT_SUB_ACCOUNT = SubAccountMdl.GetSubAccount(s.TX_SUB_ACCT_CODE),
                            MS_CUSTOMER_CATEGORY = CustomerCategoryMdl.get_custcat(s.TX_CUST_CAT_CODE)
                        }).SingleOrDefault();
            }
        }

        public static IEnumerable<MS_ACCT_SERVICE_TAX> GetAcctServiceTaxs()
        {
            var _db = new SibaModel();
            return (from o in _db.MS_ACCT_SERVICE_TAX where o.TX_STATUS == "A" select o.TX_TAX_CODE).Select(GetServiceTax);
        }

        public static IEnumerable<object> GetAcctDocOriginLov()
        {
            return GetAcctServiceTaxs().Select(o => new { CODE = o.TX_TAX_CODE, NAME = o.TX_TAX_NAME });
        } 

        public static bool Save(MS_ACCT_SERVICE_TAX tax)
        {
            var _db = new SibaModel();
            using (_db)
            {
                var dbTax = _db.MS_ACCT_SERVICE_TAX.Find(tax.TX_SYS_ID);
                switch (tax.TX_STATUS)
                {
                    case "A":
                        if (dbTax != null)
                        {
                            _db.MS_ACCT_SERVICE_TAX.Attach(dbTax);
                            dbTax.Map(tax);
                            dbTax.TX_MOD_DATE = DateTime.Now;
                        }
                        break;
                    case "U":
                        tax.TX_STATUS = "A";
                        tax.TX_CRTE_DATE = DateTime.Now;
                        _db.MS_ACCT_SERVICE_TAX.Add(tax);
                        break;
                    case "D":
                        if (dbTax != null)
                        {
                            _db.MS_ACCT_SERVICE_TAX.Attach(dbTax);
                            dbTax.TX_STATUS = "A";
                            dbTax.TX_MOD_DATE = DateTime.Now;
                        }
                        break;
                }

                return _db.SaveChanges() > 0;
            }
            
        }

        public static IEnumerable<object> Search(string q)
        {
            var _db = new SibaModel();
            return (from o in _db.MS_ACCT_SERVICE_TAX where 
                    (o.TX_TAX_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                     o.TX_TAX_NAME.ToLower().Contains(q.Trim().ToLower())) && o.TX_STATUS == "A" select o.TX_TAX_CODE).Select(GetServiceTax);
        }
    }
}