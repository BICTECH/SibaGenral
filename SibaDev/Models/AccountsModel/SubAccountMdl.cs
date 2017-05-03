using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using WebGrease.Css.Ast.Selectors;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class SubAccountMdl : Model
    {
      
        public static bool SaveSubAccount(MS_ACCT_SUB_ACCOUNT subAcct)
        {
            var db = new SibaModel();
            //Record before update
            var dbSubAcct = db.MS_ACCT_SUB_ACCOUNT.Find(subAcct.SUB_ACCT_CODE);
            switch (subAcct.SUB_ACCT_STATUS)
            {
                case "A":
                    {
                        

                        if (dbSubAcct != null)
                        {
                            //update of Main Account details
                            db.MS_ACCT_SUB_ACCOUNT.Attach(dbSubAcct);
                            dbSubAcct.Map(subAcct);

                            /*--------------------------------
                             * Main Account Currency update
                             *-------------------------------*/
                            foreach (var currency in subAcct.MS_ACCT_SUB_CURRERNCY)
                            {
                                var dbCurrency = db.MS_ACCT_SUB_CURRERNCY.Find(currency.SUB_CURR_SYS_ID);
                                switch (currency.SUB_CURR_STATUS)
                                {
                                    case "A":
                                        //we have a record in the database which we have to update
                                        if (dbCurrency != null)
                                        {
                                            db.MS_ACCT_SUB_CURRERNCY.Attach(dbCurrency);
                                            dbCurrency.Map(currency);
                                            dbCurrency.SUB_CURR_MOD_DATE = DateTime.Now;
                                        }
                                        
                                        break;
                                    case "U":
                                        //add new record to save
                                        currency.SUB_CURR_SUB_CODE = subAcct.SUB_ACCT_CODE;
                                        currency.SUB_CURR_STATUS = "A";
                                        db.MS_ACCT_SUB_CURRERNCY.Add(currency);
                                        break;
                                    case "D":
                                        //deletion of a record from the database 
                                        if (dbCurrency != null)
                                        {
                                            db.MS_ACCT_SUB_CURRERNCY.Attach(dbCurrency);
                                            dbCurrency.SUB_CURR_STATUS = "D";
                                            dbCurrency.SUB_CURR_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                }
                            }

                            /*--------------------------------
                             * Sub: Main Account update
                             *-------------------------------*/
                            foreach (var mainAcct in subAcct.MS_ACCT_SUB_MAIN_ACCOUNT)
                            {
                                var dbmainAcct = db.MS_ACCT_SUB_MAIN_ACCOUNT.Find(mainAcct.SUB_MAIN_ACCT_SYS_ID);
                                switch (mainAcct.SUB_MAIN_ACCT_STATUS)
                                {
                                    case "A":
                                        //we have a record in the database which we have to update
                                        if (dbmainAcct != null)
                                        {
                                            db.MS_ACCT_SUB_MAIN_ACCOUNT.Attach(dbmainAcct);
                                            dbmainAcct.Map(mainAcct);
                                            dbmainAcct.SUB_MAIN_ACCT_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                    case "U":
                                        //add new record to save
                                        mainAcct.SUB_MAIN_SUB_ACCT_CODE = subAcct.SUB_ACCT_CODE;
                                        mainAcct.SUB_MAIN_ACCT_STATUS = "A";
                                        mainAcct.SUB_MAIN_ACCT_CRTE_DATE = DateTime.Now;
                                        db.MS_ACCT_SUB_MAIN_ACCOUNT.Add(mainAcct);
                                        break;
                                    case "D":
                                        //deletion of a record from the database
                                        if (dbmainAcct != null)
                                        {
                                            db.MS_ACCT_SUB_MAIN_ACCOUNT.Attach(dbmainAcct);
                                            dbmainAcct.SUB_MAIN_ACCT_STATUS = "D";
                                            dbmainAcct.SUB_MAIN_ACCT_MOD_DATE = DateTime.Now;
                                        } 
                                        break;
                                }
                            }

                        }

                    }
                    break;

                case "U":

                    subAcct.SUB_ACCT_STATUS = "A";
                    subAcct.SUB_ACCT_CRTE_DATE = DateTime.Now;
                    /*-----------------------------------------
                     * updating the status of related tables 
                     *---------------------------------------*/
                    subAcct.MS_ACCT_SUB_CURRERNCY.ForEach(x => { x.SUB_CURR_STATUS = "A";x.SUB_CURR_CRTE_DATE = DateTime.Now; });
                    subAcct.MS_ACCT_SUB_MAIN_ACCOUNT.ForEach(x => { x.SUB_MAIN_ACCT_STATUS = "A"; x.SUB_MAIN_ACCT_CRTE_DATE = DateTime.Now; });
                    

                    db.MS_ACCT_SUB_ACCOUNT.Add(subAcct);
                    break;

                case "D":
                    {
                        if (dbSubAcct != null)
                        {
                            db.MS_ACCT_SUB_ACCOUNT.Attach(dbSubAcct);
                            dbSubAcct.SUB_ACCT_STATUS = "D";
                        }

                        
                    }

                    break;
            }


            return db.SaveChanges() > 0;

        }


        //get SubAccount record by Code
        public static MS_ACCT_SUB_ACCOUNT GetSubAccount(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from subAcct in db.MS_ACCT_SUB_ACCOUNT where subAcct.SUB_ACCT_CODE == code select subAcct).ToList().Select(sbAcct => new MS_ACCT_SUB_ACCOUNT
                {
                    SUB_ACCT_CODE =  sbAcct.SUB_ACCT_CODE,
                    SUB_ACCT_NAME = sbAcct.SUB_ACCT_NAME,
                    SUB_ACCT_DESC = sbAcct.SUB_ACCT_DESC,
                    SUB_ACCT_CRTE_BY = sbAcct.SUB_ACCT_CRTE_BY,
                    SUB_ACCT_CRTE_DATE = sbAcct.SUB_ACCT_CRTE_DATE,
                    SUB_ACCT_MOD_BY = sbAcct.SUB_ACCT_MOD_BY,
                    SUB_ACCT_MOD_DATE = sbAcct.SUB_ACCT_MOD_DATE,
                    SUB_ACCT_STATUS = sbAcct.SUB_ACCT_STATUS,
                    MS_ACCT_SUB_CURRERNCY = sbAcct.MS_ACCT_SUB_CURRERNCY != null? sbAcct.MS_ACCT_SUB_CURRERNCY.Select(sc => new MS_ACCT_SUB_CURRERNCY
                    {
                        SUB_CURR_ACTIVE_YN = sc.SUB_CURR_ACTIVE_YN,
                        SUB_CURR_CODE = sc.SUB_CURR_CODE,
                        SUB_CURR_CRTE_BY = sc.SUB_CURR_CRTE_BY,
                        SUB_CURR_CRTE_DATE = sc.SUB_CURR_CRTE_DATE,
                        SUB_CURR_MOD_BY = sc.SUB_CURR_MOD_BY,
                        SUB_CURR_MOD_DATE = sc.SUB_CURR_MOD_DATE,
                        SUB_CURR_STATUS = sc.SUB_CURR_STATUS,
                        SUB_CURR_SUB_CODE = sc.SUB_CURR_SUB_CODE,
                        SUB_CURR_SYS_ID = sc.SUB_CURR_SYS_ID,
                        MS_INS_CURRENCY = CurrencyMdl.get_currency(sc.SUB_CURR_CODE)
                    }).ToList():null,
                    MS_ACCT_SUB_MAIN_ACCOUNT = sbAcct.MS_ACCT_SUB_MAIN_ACCOUNT != null? sbAcct.MS_ACCT_SUB_MAIN_ACCOUNT.Select(sma => new MS_ACCT_SUB_MAIN_ACCOUNT
                    {
                        SUB_MAIN_ACCT_CODE = sma.SUB_MAIN_ACCT_CODE,
                        SUB_MAIN_ACCT_CRTE_BY = sma.SUB_MAIN_ACCT_CRTE_BY,
                        SUB_MAIN_ACCT_CRTE_DATE = sma.SUB_MAIN_ACCT_CRTE_DATE,
                        SUB_MAIN_ACCT_MOD_BY = sma.SUB_MAIN_ACCT_MOD_BY,
                        SUB_MAIN_ACCT_MOD_DATE = sma.SUB_MAIN_ACCT_MOD_DATE,
                        SUB_MAIN_ACCT_STATUS = sma.SUB_MAIN_ACCT_STATUS,
                        SUB_MAIN_ACCT_SYS_ID = sma.SUB_MAIN_ACCT_SYS_ID,
                        SUB_MAIN_ACTIVT_YN = sma.SUB_MAIN_ACTIVT_YN,
                        SUB_MAIN_SUB_ACCT_CODE = sma.SUB_MAIN_ACCT_CODE,
                        MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(sma.SUB_MAIN_ACCT_CODE)
                    }).ToList():null
                }).Single();
            }
            catch (Exception e)
            {
                return null;

            }

        }

        public static IEnumerable<MS_ACCT_SUB_ACCOUNT> GetSubAccounts()
        {
            var db = new SibaModel();
            return (from sa in db.MS_ACCT_SUB_ACCOUNT where sa.SUB_ACCT_STATUS == "A" select sa.SUB_ACCT_CODE).Select(GetSubAccount);
        } 
        

        //LOV for Sub accounts

        public static IEnumerable<object> GetLovSubAcct()
        {
            var db = new SibaModel();
            return (from acctSub in db.MS_ACCT_SUB_ACCOUNT
                where acctSub.SUB_ACCT_STATUS == "A"
                select new {CODE = acctSub.SUB_ACCT_CODE, NAME = acctSub.SUB_ACCT_NAME});
        }

        public static IEnumerable<MS_ACCT_SUB_ACCOUNT> SearchAccounts(string q)
        {
            var db = new SibaModel();
            return (from sa in db.MS_ACCT_SUB_ACCOUNT
                where
                    (sa.SUB_ACCT_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                     sa.SUB_ACCT_NAME.ToLower().Contains(q.Trim().ToLower())) && sa.SUB_ACCT_STATUS == "A"
                select sa.SUB_ACCT_CODE).Select(GetSubAccount);
        } 

    }
}