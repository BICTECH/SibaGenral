using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountReceiptDetailsMdl:Model
    {

        public static MS_ACCT_RECEIPTS_DTLS GetReceiptDtl(int id)
        {
            var db = new SibaModel();
            return (from rd in db.MS_ACCT_RECEIPTS_DTLS where rd.ARD_SYS_ID == id select rd).ToList()
                    .Select(rd => new MS_ACCT_RECEIPTS_DTLS
                    {
                        ARD_SYS_ID = rd.ARD_SYS_ID,
                        ARD_ACNT_PERIOD = rd.ARD_ACNT_PERIOD,
                        ARD_ACTIVE = rd.ARD_ACTIVE,
                        ARD_ARH_SYS_ID = rd.ARD_ARH_SYS_ID,
                        ARD_CRTE_BY = rd.ARD_CRTE_BY,
                        ARD_CRTE_DATE = rd.ARD_CRTE_DATE,
              
                        ARD_DEP_OFF_CODE = rd.ARD_DEP_OFF_CODE,
                        ARD_DUE_DATE = rd.ARD_DUE_DATE,
                        ARD_MOD_BY = rd.ARD_MOD_BY,
                        ARD_MOD_DATE = rd.ARD_MOD_DATE,
                        ARD_PM_CODE = rd.ARD_PM_CODE,
                        ARD_RCPT_DESC = rd.ARD_RCPT_DESC,
                        ARD_RCVD_FROM = rd.ARD_RCVD_FROM,
                        ARD_STATUS = rd.ARD_STATUS,
                        ARD_TXN_DOC_NO = rd.ARD_TXN_DOC_NO,
                        ARD_TXN_OFF_CODE = rd.ARD_TXN_OFF_CODE,
                        MS_SYS_OFFICE = OfficeMdl.get_office(rd.ARD_TXN_OFF_CODE),
                        MS_SYS_OFFICE1 = OfficeMdl.get_office(rd.ARD_DEP_OFF_CODE),
                        MS_ACCT_RCPT_ACNT_DTLS = rd.MS_ACCT_RCPT_ACNT_DTLS != null? rd.MS_ACCT_RCPT_ACNT_DTLS.Select(a => AccountReceiptsAccountDetailsMdl.GetAcntDtl(a.RAD_SYS_ID)).ToList():null
                    }).Single();
        }

        public static IEnumerable<MS_ACCT_RECEIPTS_DTLS> GetReceiptDtls(int rcptHeadId)
        {
            var db = new SibaModel();
            return (from rd in db.MS_ACCT_RECEIPTS_DTLS where rd.ARD_ARH_SYS_ID == rcptHeadId select rd.ARD_SYS_ID).Select(GetReceiptDtl);
        }
    }
}