using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountPaymentMdl:Model
    {

        public static MS_ACT_PAYMENTS_HEAD GetActPayment(int id)
        {
            var db = new SibaModel();
            return (from ap in db.MS_ACT_PAYMENTS_HEAD where ap.APH_SYS_ID == id select ap).ToList().Select(p => new MS_ACT_PAYMENTS_HEAD
            {
                APH_SYS_ID = p.APH_SYS_ID,
                APH_ACTIVE = p.APH_ACTIVE,
                APH_ATD_CODE = p.APH_ATD_CODE,
                APH_BATCH_NO = p.APH_BATCH_NO,
                APH_CRTE_BY = p.APH_CRTE_BY,
                APH_CRTE_DATE = p.APH_CRTE_DATE,
                APH_DESC = p.APH_DESC,
                APH_MOD_BY = p.APH_MOD_BY,
                APH_MOD_DATE = p.APH_MOD_DATE,
                APH_OFF_CODE = p.APH_OFF_CODE,
                APH_STATUS = p.APH_STATUS,
                APH_TXN_DATE = p.APH_TXN_DATE,
                APH_TRANS_STATUS = p.APH_TRANS_STATUS,
                MS_ACCT_TXN_DOC = new MS_ACCT_TXN_DOC { ATD_CODE = p.MS_ACCT_TXN_DOC.ATD_CODE, ATD_NAME = p.MS_ACCT_TXN_DOC.ATD_NAME },
                MS_SYS_OFFICE = OfficeMdl.get_office(p.APH_OFF_CODE),
                MS_ACCT_PAYMNT_DTLS = p.MS_ACCT_PAYMNT_DTLS != null?p.MS_ACCT_PAYMNT_DTLS.Select(pd => AccountPaymentDetailMdl.GetPaymntDtls(pd.APD_SYS_ID)).ToList():null,
                MS_ACCT_PAYMNT_ACNT_DTLS = p.MS_ACCT_PAYMNT_ACNT_DTLS != null? p.MS_ACCT_PAYMNT_ACNT_DTLS.Select(d => AccountPaymentAccountDetailMdl.GetPaymntAcntDtls(d.PAD_SYS_ID)).ToList():null
            }).Single();
        }

        public static IEnumerable<MS_ACT_PAYMENTS_HEAD> GetActPayments()
        {
            var db = new SibaModel();
            return (from p in db.MS_ACT_PAYMENTS_HEAD where p.APH_STATUS == "A" select p.APH_SYS_ID).Select(GetActPayment);
        }

        public static IEnumerable<object> GetActPaymentLov()
        {
            return GetActPayments().Select(p => new {CODE = p.APH_SYS_ID, NAME = p.APH_DESC});
        }


        public static MS_ACT_PAYMENTS_HEAD Save(MS_ACT_PAYMENTS_HEAD payment)
        {
            var db = new SibaModel();
            var dbReceipt = db.MS_ACT_PAYMENTS_HEAD.Find(payment.APH_SYS_ID);
            switch (payment.APH_STATUS)
            {
                case "A":
                    if (dbReceipt != null)
                    {
                        db.MS_ACT_PAYMENTS_HEAD.Attach(dbReceipt);
                        dbReceipt.Map(payment);
                        dbReceipt.APH_MOD_DATE = DateTime.Now;

                        //receipts details processing
                        foreach (var pDetails in payment.MS_ACCT_PAYMNT_DTLS)
                        {
                            var dbDetails = db.MS_ACCT_PAYMNT_DTLS.Find(pDetails.APD_SYS_ID);
                            switch (pDetails.APD_STATUS)
                            {
                                case "A":
                                    //we have a record in the database which we have to update
                                    if (dbDetails != null)
                                    {
                                        db.MS_ACCT_PAYMNT_DTLS.Attach(dbDetails);
                                        dbDetails.Map(pDetails);
                                        dbDetails.APD_MOD_DATE = DateTime.Now;
                                    }
                                    break;
                                case "U":
                                    //add new record to save
                                    pDetails.APD_APH_SYS_ID = payment.APH_SYS_ID;
                                    pDetails.APD_STATUS = "A";
                                    pDetails.APD_CRTE_DATE = DateTime.Now;

                                    db.MS_ACCT_PAYMNT_DTLS.Add(pDetails);
                                    break;
                                case "D":
                                    if (dbDetails != null)
                                    {
                                        db.MS_ACCT_PAYMNT_DTLS.Attach(dbDetails);
                                        dbDetails.APD_STATUS = "D";
                                        dbDetails.APD_MOD_DATE = DateTime.Now;
                                    }

                                    break;
                            }
                        }


                        //receipts account details processing
                        foreach (var aDetails in payment.MS_ACCT_PAYMNT_ACNT_DTLS)
                        {
                            var dbDetails = db.MS_ACCT_PAYMNT_ACNT_DTLS.Find(aDetails.PAD_SYS_ID);
                            switch (aDetails.PAD_STATUS)
                            {
                                case "A":
                                    //we have a record in the database which we have to update
                                    if (dbDetails != null)
                                    {
                                        db.MS_ACCT_PAYMNT_ACNT_DTLS.Attach(dbDetails);
                                        dbDetails.Map(aDetails);
                                        dbDetails.PAD_MOD_DATE = DateTime.Now;
                                    }
                                    break;
                                case "U":
                                    //add new record to save
                                    aDetails.PAD_APH_SYS_ID = payment.APH_SYS_ID;
                                    aDetails.PAD_STATUS = "A";
                                    aDetails.PAD_CRTE_DATE = DateTime.Now;

                                    db.MS_ACCT_PAYMNT_ACNT_DTLS.Add(aDetails);
                                    break;
                                case "D":
                                    if (dbDetails != null)
                                    {
                                        db.MS_ACCT_PAYMNT_ACNT_DTLS.Attach(dbDetails);
                                        dbDetails.PAD_STATUS = "D";
                                        dbDetails.PAD_MOD_DATE = DateTime.Now;
                                    }
                                    break;
                            }
                        }


                    }
                    break;
                case "U":
                    payment.APH_STATUS = "A";
                    payment.APH_CRTE_DATE = DateTime.Now;

                    payment.MS_ACCT_PAYMNT_DTLS.ForEach(x => { x.APD_STATUS = "A"; x.APD_CRTE_DATE = DateTime.Now; });
                    payment.MS_ACCT_PAYMNT_ACNT_DTLS.ForEach(x => { x.PAD_STATUS = "A"; x.PAD_CRTE_DATE = DateTime.Now; });

                    db.MS_ACT_PAYMENTS_HEAD.Add(payment);
                    break;
                case "D":
                    if (dbReceipt != null)
                    {
                        db.MS_ACT_PAYMENTS_HEAD.Attach(payment);
                        dbReceipt.APH_STATUS = "D";
                        dbReceipt.APH_MOD_DATE = DateTime.Now;
                    }
                    break;
            }
            db.SaveChanges();
            return payment;
        }


        public static IEnumerable<object> Search(string q)
        {
            var db = new SibaModel();
            int intQuery;
            var isInt = int.TryParse(q, out intQuery);

            return (from p in db.MS_ACT_PAYMENTS_HEAD where
                    (p.APH_ATD_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                     (isInt && (p.APH_BATCH_NO == intQuery)) ||
                     p.APH_OFF_CODE.ToLower().Contains(q.Trim().ToLower())) && p.APH_STATUS == "A" select p.APH_SYS_ID).Select(GetActPayment);
        }


        public static bool TransactionProcessing(MS_ACT_PAYMNT_CONFIRMATION_LOG log)
        {
            var db = new SibaModel();
            using (var trans = db.Database.BeginTransaction())
            {
                try
                {
                    var dbPayment = db.MS_ACT_PAYMENTS_HEAD.Find(log.PCL_APH_SYS_ID);
                    switch (log.PCL_ACTION)
                    {
                        case "Confirm":

                            if (dbPayment != null)
                            {
                                db.MS_ACT_PAYMENTS_HEAD.Attach(dbPayment);

                                dbPayment.APH_TRANS_STATUS = "C";
                                db.SaveChanges();

                                //take log of the change in the transacitonal status of the receipt
                                db.MS_ACT_PAYMNT_CONFIRMATION_LOG.Add(log);
                                db.SaveChanges();
                            }
                            else return false;

                            break;
                        case "Unconfirm":
                            if (dbPayment != null)
                            {
                                db.MS_ACT_PAYMENTS_HEAD.Attach(dbPayment);

                                dbPayment.APH_TRANS_STATUS = "P";
                                db.SaveChanges();

                                //take log of the change in the transacitonal status of the receipt
                                db.MS_ACT_PAYMNT_CONFIRMATION_LOG.Add(log);
                                db.SaveChanges();
                            }
                            else return false;
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

    }
}