using System;
using System.Collections.Generic;
using System.Data.Entity.SqlServer;
using System.Linq;
using System.Web;
using SibaDev.JSON_Templates;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountReceiptsMdl:Model
    {

        public static MS_ACT_RECEIPTS_HEAD GetReceipt(int id)
        {
            var db = new SibaModel();
            return (from r in db.MS_ACT_RECEIPTS_HEAD where r.ARH_SYS_ID == id select r).ToList()
                    .Select(r => new MS_ACT_RECEIPTS_HEAD
                    {
                        ARH_SYS_ID = r.ARH_SYS_ID,
                        ARH_ACTIVE = r.ARH_ACTIVE,
                        ARH_ATD_CODE = r.ARH_ATD_CODE,
                        ARH_BATCH_NO = r.ARH_BATCH_NO,
                        ARH_CRTE_BY = r.ARH_CRTE_BY,
                        ARH_CRTE_DATE = r.ARH_CRTE_DATE,
                        ARH_DESC = r.ARH_DESC,
                        ARH_RCPT_TYPE = r.ARH_RCPT_TYPE,
                        ARH_MOD_BY = r.ARH_MOD_BY,
                        ARH_MOD_DATE = r.ARH_MOD_DATE,
                        ARH_OFF_CODE = r.ARH_OFF_CODE,
                        ARH_STATUS = r.ARH_STATUS,
                        ARH_TXN_DATE = r.ARH_TXN_DATE,
                        ARH_TRANS_STATUS = r.ARH_TRANS_STATUS,
                        MS_ACCT_TXN_DOC = new MS_ACCT_TXN_DOC {ATD_CODE = r.MS_ACCT_TXN_DOC.ATD_CODE, ATD_NAME = r.MS_ACCT_TXN_DOC.ATD_NAME},
                        MS_SYS_OFFICE = OfficeMdl.get_office(r.ARH_OFF_CODE),
                        MS_ACCT_RECEIPTS_DTLS = r.MS_ACCT_RECEIPTS_DTLS != null ? r.MS_ACCT_RECEIPTS_DTLS.Select(rd => AccountReceiptDetailsMdl.GetReceiptDtl(rd.ARD_SYS_ID)).ToList():null,
                    }).SingleOrDefault();
        }

        public static IEnumerable<MS_ACT_RECEIPTS_HEAD> GetReceipts()
        {
            var db = new SibaModel();
            return (from r in db.MS_ACT_RECEIPTS_HEAD where r.ARH_STATUS == "A" select r.ARH_SYS_ID).Select(GetReceipt);
        }

        public static IEnumerable<object> GetReceiptLov()
        {
            return GetReceipts().Select(r => new {CODE = r.ARH_SYS_ID, NAME = r.ARH_DESC});
        }

        public static MS_ACT_RECEIPTS_HEAD Save(ReceiptsJson json)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {

                var receipt = json.MS_ACT_RECEIPTS_HEAD;
                try
                {
                    var dbReceipt = db.MS_ACT_RECEIPTS_HEAD.Find(receipt.ARH_SYS_ID);
                    switch (receipt.ARH_STATUS)
                    {
                        case "A":
                            if (dbReceipt != null)
                            {
                                db.MS_ACT_RECEIPTS_HEAD.Attach(dbReceipt);
                                dbReceipt.Map(receipt);
                                dbReceipt.ARH_MOD_DATE = DateTime.Now;

                                //receipts details processing
                                foreach (var rDetails in receipt.MS_ACCT_RECEIPTS_DTLS)
                                {
                                    var dbDetails = db.MS_ACCT_RECEIPTS_DTLS.Find(rDetails.ARD_SYS_ID);
                                    switch (rDetails.ARD_STATUS)
                                    {
                                        case "A":
                                            //we have a record in the database which we have to update
                                            if (dbDetails != null)
                                            {
                                                db.MS_ACCT_RECEIPTS_DTLS.Attach(dbDetails);
                                                dbDetails.Map(rDetails);
                                                dbDetails.ARD_MOD_DATE = DateTime.Now;

                                                //receipts account details processing
                                                foreach (var aDetails in rDetails.MS_ACCT_RCPT_ACNT_DTLS)
                                                {
                                                    var dbAcntDetails = db.MS_ACCT_RCPT_ACNT_DTLS.Find(aDetails.RAD_SYS_ID);
                                                    switch (aDetails.RAD_STATUS)
                                                    {
                                                        case "A":
                                                            //we have a record in the database which we have to update
                                                            if (dbAcntDetails != null)
                                                            {
                                                                db.MS_ACCT_RCPT_ACNT_DTLS.Attach(dbAcntDetails);
                                                                dbAcntDetails.Map(aDetails);
                                                                dbAcntDetails.RAD_MOD_DATE = DateTime.Now;
                                                            }
                                                            break;
                                                        case "U":
                                                            //add new record to save
                                                            aDetails.RAD_ARD_SYS_ID = rDetails.ARD_SYS_ID;
                                                            aDetails.RAD_STATUS = "A";
                                                            aDetails.RAD_CRTE_DATE = DateTime.Now;

                                                            db.MS_ACCT_RCPT_ACNT_DTLS.Add(aDetails);
                                                            break;
                                                        case "D":
                                                            if (dbAcntDetails != null)
                                                            {
                                                                db.MS_ACCT_RCPT_ACNT_DTLS.Attach(dbAcntDetails);
                                                                dbAcntDetails.RAD_STATUS = "D";
                                                                dbAcntDetails.RAD_MOD_DATE = DateTime.Now;
                                                            }
                                                            break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "U":
                                            //add new record to save
                                            rDetails.ARD_ARH_SYS_ID = receipt.ARH_SYS_ID;
                                            rDetails.ARD_STATUS = "A";
                                            rDetails.ARD_CRTE_DATE = DateTime.Now;

                                            rDetails.MS_ACCT_RCPT_ACNT_DTLS.ForEach(x => x.RAD_STATUS ="A");

                                            db.MS_ACCT_RECEIPTS_DTLS.Add(rDetails);
                                            break;
                                        case "D":
                                            if (dbDetails != null)
                                            {
                                                db.MS_ACCT_RECEIPTS_DTLS.Attach(dbDetails);
                                                dbDetails.ARD_STATUS = "D";
                                                dbDetails.ARD_MOD_DATE = DateTime.Now;
                                            }

                                            break;
                                    }

                                    //receipt details open entry adjusted amount
                                    var totalAdjAmnt = json.ACCT_TXN_OPEN_ENTRY.Where(x => x.OE_TXN_REF_ID == rDetails.ARD_SYS_ID).ToList().Sum(x => x.OE_UNPOST_ADJ_FC_AMT);
                                    
                                    foreach (var oe in db.ACCT_TXN_OPEN_ENTRY.Where(x => x.OE_TXN_REF_ID == rDetails.ARD_SYS_ID))
                                    {
                                        db.ACCT_TXN_OPEN_ENTRY.Attach(oe);
                                        oe.OE_UNPOST_ADJ_FC_AMT = totalAdjAmnt;
                                    }
                                }




                                //update open entry tables with matching details
                                json.ACCT_TXN_OPEN_ENTRY.ForEach(oe =>
                                {
                                    var dbOpenEntry = db.ACCT_TXN_OPEN_ENTRY.Find(oe.OE_SYS_ID);
                                    db.ACCT_TXN_OPEN_ENTRY.Attach(dbOpenEntry);
                                    dbOpenEntry.Map(oe);
                                });


                                //open entry matching processing
                                json.ACCT_OPEN_ENTRY_MATCH_DETL.ForEach(md =>
                                {
                                    var dbMatchDetail = db.ACCT_OPEN_ENTRY_MATCH_DETL.Find(md.MA_SYS_ID);
                                    switch (md.MA_STATUS)
                                    {
                                        case "A":
                                            if (dbMatchDetail != null)
                                            {
                                                db.ACCT_OPEN_ENTRY_MATCH_DETL.Attach(dbMatchDetail);
                                                dbMatchDetail.Map(md);
                                            }
                                            break;
                                        case "U":
                                            md.MA_STATUS = "A";
                                            md.MA_CRTE_DATE = DateTime.Now;
                                            db.ACCT_OPEN_ENTRY_MATCH_DETL.Add(md);
                                            break;
                                        case "D":
                                            if (dbMatchDetail != null)
                                            {
                                                db.ACCT_OPEN_ENTRY_MATCH_DETL.Remove(dbMatchDetail);
                                            }
                                            break;
                                    }
                                });

                                


                            }
                            break;
                        case "U":
                            receipt.ARH_STATUS = "A";
                            receipt.ARH_CRTE_DATE = DateTime.Now;

                            receipt.MS_ACCT_RECEIPTS_DTLS.ForEach(x =>
                            {
                                x.ARD_STATUS = "A";
                                x.ARD_CRTE_DATE = DateTime.Now;
                                x.MS_ACCT_RCPT_ACNT_DTLS.ForEach(a => a.RAD_STATUS = "A");
                            });
                          //  receipt.MS_ACCT_RCPT_ACNT_DTLS.ForEach(x => { x.RAD_STATUS = "A"; x.RAD_CRTE_DATE = DateTime.Now; });

                            db.MS_ACT_RECEIPTS_HEAD.Add(receipt);
                            db.SaveChanges();

                            receipt.MS_ACCT_RECEIPTS_DTLS.ForEach(r =>
                            {
                                 
                                db.ACCT_TXN_OPEN_ENTRY.Add(new ACCT_TXN_OPEN_ENTRY
                                {
                                    OE_TXN_REF_ID = r.ARD_SYS_ID,
                                    OE_R_BATCH_ID = receipt.ARH_BATCH_NO.ToString(),
                                    OE_DOC_TYPE = receipt.ARH_ATD_CODE,
                                    OE_DOC_NO = r.ARD_TXN_DOC_NO,
                                    OE_LINE_NO = null,
                                    OE_DOC_DATE = r.ARD_DUE_DATE,
                                    OE_DUE_DATE = r.ARD_DUE_DATE,
                                    OE_CUST_CODE = "CT1",
                                    OE_MAIN_ACCT_CODE = "MAIN01",
                                    OE_SUB_ACCT_CODE = "CT1",
                                    OE_DR_CR = "DR",
                                    OE_OFFICE_CODE = r.ARD_TXN_OFF_CODE,
                                    OE_CURR_CODE = "GHS",
                                    OE_CURR_RATE = 4,
                                    OE_ORGNL_FC_AMT = 200,
                                    OE_ORGNL_BC_AMT = 800,
                                    OE_ADJ_FC_AMT = null,
                                    OE_ADJ_BC_AMT = null,
                                    OE_UNPOST_ADJ_FC_AMT = null,
                                    OE_UNPOST_ADJ_BC_AMT = null,
                                    OE_ACCT_YEAR = (short)r.ARD_DUE_DATE.Value.Year,
                                    OE_DOC_CAL_MONTH = (byte)r.ARD_DUE_DATE.Value.Month,
                                    OE_CRTE_BY = "System",
                                    OE_CRTE_DATE = DateTime.Now,
                            });
                            ////
                    });
                            

                            break;
                        case "D":
                            if (dbReceipt != null)
                            {
                                db.MS_ACT_RECEIPTS_HEAD.Attach(receipt);
                                dbReceipt.ARH_STATUS = "D";
                                dbReceipt.ARH_MOD_DATE = DateTime.Now;
                            }
                            break;
                    }
                    db.SaveChanges();
                    trans.Commit();
                    return receipt;
                }
                catch (Exception)
                {
                    trans.Rollback();
                    throw;
                }
            }
            
        }


        public static IEnumerable<object> Search(string q)
        {
            var db = new SibaModel();
            int intQuery;
            var isInt = int.TryParse(q, out intQuery);
            
            return (from r in db.MS_ACT_RECEIPTS_HEAD where 
                    (r.ARH_ATD_CODE.ToLower().Contains(q.Trim().ToLower())||
                      (isInt && (r.ARH_BATCH_NO == intQuery)) ||
                     r.ARH_OFF_CODE.ToLower().Contains(q.Trim().ToLower())) && r.ARH_STATUS == "A" select r.ARH_SYS_ID).Select(GetReceipt);
        }

        public static bool TransactionProcessing(MS_ACT_RCPT_CONFIRMATION_LOG log)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    var dbReceipt = db.MS_ACT_RECEIPTS_HEAD.Find(log.RCL_ARH_SYS_ID);
                    switch (log.RCL_ACTION)
                    {
                        case "Confirm":
                            
                            if (dbReceipt != null)
                            {
                                db.MS_ACT_RECEIPTS_HEAD.Attach(dbReceipt);

                                dbReceipt.ARH_TRANS_STATUS = "C";
                                db.SaveChanges();

                                //take log of the change in the transacitonal status of the receipt
                                db.MS_ACT_RCPT_CONFIRMATION_LOG.Add(log);
                                db.SaveChanges();
                            } else return false;
                            
                            break;
                        case "Unconfirm":
                            if (dbReceipt != null)
                            {
                                db.MS_ACT_RECEIPTS_HEAD.Attach(dbReceipt);

                                dbReceipt.ARH_TRANS_STATUS = "P";
                                db.SaveChanges();

                                //take log of the change in the transacitonal status of the receipt
                                db.MS_ACT_RCPT_CONFIRMATION_LOG.Add(log);
                                db.SaveChanges();
                            }  else return false;
                            break;
                    }
                    trans.Commit();
                    return true;
                }
                catch (Exception)
                {
                    trans.Rollback();
                    throw;
                }
            }
            
        }

        public static IEnumerable<object> GetCustomerMainAcctsLov()
        {
            var db = new SibaModel();
            var mainActList = new List<MS_ACCT_MAIN_ACCOUNT>();
            (from x in db.MS_CUSTOMER_CATEGORY select x).ForEach(c => mainActList.Add(c.MS_ACCT_MAIN_ACCOUNT));
            return mainActList.Distinct().Select(m => new {CODE = m.ACCT_CODE, NAME = m.ACCT_NAME});
        }

        public static IEnumerable<object> GetMainAccountCustomerLov(string mainActCode, string query)
        {
            var db = new SibaModel();
            var customerList = new List<MS_UDW_CUSTOMERS>();
            (from x in db.MS_CUSTOMER_CATEGORY where x.MS_ACCT_MAIN_ACCOUNT.ACCT_CODE == mainActCode select x).ToList()
                .ForEach(
                    ct => ct.MS_SYS_CUST_TYPES.ForEach(ctp => ctp.MS_UDW_CUSTOMERS.ForEach(c => customerList.Add(c))));

            return customerList.Where(c => c.CUS_CODE.ToLower().Contains(query.Trim().ToLower()) || c.CUS_OFFICIAL_NAME.ToLower().Contains(query.Trim().ToLower())).Select(
                    c =>
                        new
                        {
                            CODE = c.CUS_CODE,
                            NAME = c.CUS_OFFICIAL_NAME,
                            ADDRES = string.Concat(c.CUS_ADDRS1, c.CUS_ADDRS2),
                            MOBILE = c.CUS_MOBILE,
                            PHONE = c.CUS_PHONE1
                        });
        } 
    }
}