using System;
using System.Collections.Generic;
using System.Linq;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class MainAccountMdl : Model
    {
      
        public static bool SaveMainAccount(MS_ACCT_MAIN_ACCOUNT mainAcct)
        {
            var db = new SibaModel();
            //Record before update
            var dbMainAcct = db.MS_ACCT_MAIN_ACCOUNT.Find(mainAcct.ACCT_CODE);
            switch (mainAcct.ACCT_STATUS)
            {
                case "A":
                    {

                        if (dbMainAcct != null)
                        {
                            //update of Main Account details
                            db.MS_ACCT_MAIN_ACCOUNT.Attach(dbMainAcct);
                            dbMainAcct.Map(mainAcct);

                            /*--------------------------------
                             * Main Account Currency update
                             *-------------------------------*/
                            //foreach (var currency in mainAcct.MS_MAIN_ACCT_CURRENCY)
                            //{
                            //    var dbcurrency = db.MS_MAIN_ACCT_CURRENCY.Find(currency.ACUR_SYS_ID);
                            //    switch (currency.ACUR_STATUS)
                            //    {
                            //        case "A":
                            //            //we have a record in the database which we have to update
                            //            if (dbcurrency != null)
                            //            {
                            //                db.MS_MAIN_ACCT_CURRENCY.Attach(dbcurrency);
                            //                dbcurrency.Map(currency);
                            //            }
                            //            break;
                            //        case "U":
                            //            //add new record to save
                            //            currency.ACUR_ACCT_CODE = mainAcct.ACCT_CODE;
                            //            currency.ACUR_STATUS = "A";
                            //            currency.ACUR_CRTE_DATE = DateTime.Now;

                            //            db.MS_MAIN_ACCT_CURRENCY.Add(currency);
                            //            break;
                            //        case "D":
                            //            if (dbcurrency != null)
                            //            {
                            //                //deletion of a record from the database 
                            //                db.MS_MAIN_ACCT_CURRENCY.Remove(db.MS_MAIN_ACCT_CURRENCY.Find(currency.ACUR_CODE));
                            //            }
                                        
                            //            break;
                            //    }
                            //}

                            /*--------------------------------
                             * Main Account-Company update
                             *-------------------------------*/
                            //foreach (var company in mainAcct.MS_MAIN_ACCT_COMPANY)
                            //{
                            //    //we have a record in the database which we have to update
                            //    var dbCompany = db.MS_MAIN_ACCT_COMPANY.Find(company.ACOM_SYS_ID);
                            //    switch (company.ACOM_STATUS)
                            //    {
                            //        case "A":
                            //            if (dbCompany != null)
                            //            {
                            //                db.MS_MAIN_ACCT_COMPANY.Attach(dbCompany);
                            //                dbCompany.Map(company);
                            //            }
                                        
                            //            break;
                            //        case "U":
                            //            //add new record to save
                            //            company.ACOM_ACCT_CODE = mainAcct.ACCT_CODE;
                            //            company.ACOM_STATUS = "A";
                            //            company.ACOM_CRTE_DATE = DateTime.Now;

                            //            db.MS_MAIN_ACCT_COMPANY.Add(company);
                            //            break;
                            //        case "D":
                                        
                            //            if (dbCompany != null)
                            //            {
                            //                //deletion of a record from the database 
                            //                db.MS_MAIN_ACCT_COMPANY.Remove(db.MS_MAIN_ACCT_COMPANY.Find(company.ACOM_CODE));
                            //            }
                                        
                            //            break;
                            //    }
                            //}

                        }

                    }
                    break;

                case "U":

                    mainAcct.ACCT_STATUS = "A";
                    mainAcct.ACCT_CRTE_DATE = DateTime.Now;

                    //mainAcct.MS_MAIN_ACCT_CURRENCY.ForEach(x => x.ACUR_STATUS = "A");
                    //mainAcct.MS_MAIN_ACCT_COMPANY.ForEach(x => x.ACOM_STATUS = "A");

                    db.MS_ACCT_MAIN_ACCOUNT.Add(mainAcct);
                    break;

                case "D":
                    {
                        /*-----------------------------------------------------------
                         * the Main Record is marked for deletion from the Database, 
                         * so it is set to D but not deleted from the data base
                         *-----------------------------------------------------*/
                        
                        /*---------------------------
                         * update of product details
                         *-------------------------*/
                        //
                        db.MS_ACCT_MAIN_ACCOUNT.Attach(dbMainAcct);
                        dbMainAcct.ACCT_STATUS = "D";
                    }

                    break;
            }


            return db.SaveChanges() > 0;

        }

        //Search for Main Accounts by code or Name
        public static IEnumerable<MS_ACCT_MAIN_ACCOUNT> Search(string q)
        {
            var db = new SibaModel();
            return (from mainAcct in db.MS_ACCT_MAIN_ACCOUNT where 
                    (mainAcct.ACCT_CODE.ToLower().Contains(q.ToLower()) || 
                    mainAcct.ACCT_NAME.ToLower().Contains(q.ToLower())) && mainAcct.ACCT_STATUS == "A" select mainAcct.ACCT_CODE).Select(GetMainAccount);
        }

        

       public static IEnumerable<MS_ACCT_MAIN_ACCOUNT> GetAllMainAcct(){
            var db = new SibaModel();
            return  (from mainAcct in db.MS_ACCT_MAIN_ACCOUNT where  mainAcct.ACCT_STATUS == "A" select mainAcct.ACCT_CODE).Select(GetMainAccount);
        }

        public static MS_ACCT_MAIN_ACCOUNT GetMainAccount(string code)
        {
            var db = new SibaModel();
            return (from mainAcct in db.MS_ACCT_MAIN_ACCOUNT where mainAcct.ACCT_CODE == code select mainAcct).ToList().Select(mact => new MS_ACCT_MAIN_ACCOUNT
                {
                    ACCT_CODE = mact.ACCT_CODE,
                    ACCT_NAME = mact.ACCT_NAME,
                    ACCT_DESC = mact.ACCT_DESC,
                    ACCT_CATEGORY = mact.ACCT_CATEGORY,
                    ACCT_MAIN = mact.ACCT_MAIN,
                    ACCT_OPEN = mact.ACCT_OPEN,
                    ACCT_TYPE = mact.ACCT_TYPE,
                    ACCT_CRTE_BY = mact.ACCT_CRTE_BY,
                    ACCT_CRTE_DATE = mact.ACCT_CRTE_DATE,
                    ACCT_MOD_BY = mact.ACCT_MOD_BY,
                    ACCT_MOD_DATE = mact.ACCT_MOD_DATE,
                    ACCT_STATUS = mact.ACCT_STATUS,
                    //MS_ACCT_CATEGORY = AcctCategoryMdl.GetAcctCategory(mact.ACCT_CATEGORY),
                    //MS_MAIN_ACCT_CURRENCY = mact.MS_MAIN_ACCT_CURRENCY != null? mact.MS_MAIN_ACCT_CURRENCY.Select(c => MainAccountCurrencyMdl.GetMainAcctCurrency(c.ACUR_SYS_ID)).ToList():null,
                    //MS_MAIN_ACCT_COMPANY = mact.MS_MAIN_ACCT_COMPANY != null? mact.MS_MAIN_ACCT_COMPANY.Select(c => MainAccountCompanyMdl.GetMainAcctCompany(c.ACOM_SYS_ID)).ToList():null
            }).Single();

        }

        public static IEnumerable<object> GetLovMainAcct()
        {
            var db = new SibaModel();
            return (from acctMain in db.MS_ACCT_MAIN_ACCOUNT where acctMain.ACCT_STATUS == "A" select new {CODE = acctMain.ACCT_CODE, NAME = acctMain.ACCT_NAME});
        }

        //find main account account if it exists
        public static IEnumerable<object> FinMainAcctLov(string q)
        {
            var db = new SibaModel();
            return (db.MS_ACCT_MAIN_ACCOUNT.Where(acctMain => string.Equals(acctMain.ACCT_CODE, q, StringComparison.CurrentCultureIgnoreCase)).ToList()
                .Select(acctMain => new {CODE = acctMain.ACCT_CODE, NAME = acctMain.ACCT_NAME}));
            
        }

    }
}