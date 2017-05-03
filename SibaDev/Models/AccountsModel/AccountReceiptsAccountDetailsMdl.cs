using System.Collections.Generic;
using System.Linq;  

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountReceiptsAccountDetailsMdl:Model
    {

        public static MS_ACCT_RCPT_ACNT_DTLS GetAcntDtl(int id)
        {
            var db = new SibaModel();
            return (from ad in db.MS_ACCT_RCPT_ACNT_DTLS where ad.RAD_SYS_ID == id select ad).ToList()
                    .Select(ad => new MS_ACCT_RCPT_ACNT_DTLS
                    {
                        RAD_SYS_ID = ad.RAD_SYS_ID,
                        RAD_ACCT_CODE = ad.RAD_ACCT_CODE,
                        RAD_ACTIVE = ad.RAD_ACTIVE,
                        RAD_AMNT_BC = ad.RAD_AMNT_BC,
                        RAD_AMNT_FC = ad.RAD_AMNT_FC,
                        RAD_CUR_CODE = ad.RAD_CUR_CODE,
                        RAD_ARD_SYS_ID = ad.RAD_ARD_SYS_ID,
                        RAD_CRTE_BY = ad.RAD_CRTE_BY,
                        RAD_CRTE_DATE = ad.RAD_CRTE_DATE,
                        RAD_DESC = ad.RAD_DESC,
                        RAD_DR_CR = ad.RAD_DR_CR,
                        RAD_MOD_BY = ad.RAD_MOD_BY,
                        RAD_MOD_DATE = ad.RAD_MOD_DATE,
                        RAD_STATUS = ad.RAD_STATUS,
                        RAD_SUB_ACCT_CODE = ad.RAD_SUB_ACCT_CODE,
                        MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(ad.RAD_ACCT_CODE),
                        MS_ACCT_SUB_ACCOUNT = SubAccountMdl.GetSubAccount(ad.RAD_SUB_ACCT_CODE)
                    }).Single();
        }

        public static IEnumerable<MS_ACCT_RCPT_ACNT_DTLS> GetRcptAcntDtls(int rcptHeaderId)
        {
            var db = new SibaModel();
            return (from ad in db.MS_ACCT_RCPT_ACNT_DTLS where ad.RAD_ARD_SYS_ID == rcptHeaderId select ad.RAD_SYS_ID).Select(GetAcntDtl);
        } 
    }
    
}