using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountPaymentAccountDetailMdl:Model
    {

        public static MS_ACCT_PAYMNT_ACNT_DTLS GetPaymntAcntDtls(int id)
        {
            var db = new SibaModel();
            return
                (from ad in db.MS_ACCT_PAYMNT_ACNT_DTLS where ad.PAD_SYS_ID == id select ad).ToList()
                    .Select(ad => new MS_ACCT_PAYMNT_ACNT_DTLS
                    {
                        PAD_SYS_ID = ad.PAD_SYS_ID,
                        PAD_ACCT_CODE = ad.PAD_ACCT_CODE,
                        PAD_ACTIVE = ad.PAD_ACTIVE,
                        PAD_AMNT_BC = ad.PAD_AMNT_BC,
                        PAD_AMNT_FC = ad.PAD_AMNT_FC,
                        PAD_APH_SYS_ID = ad.PAD_APH_SYS_ID,
                        PAD_CRTE_BY = ad.PAD_CRTE_BY,
                        PAD_CRTE_DATE = ad.PAD_CRTE_DATE,
                        PAD_DESC = ad.PAD_DESC,
                        PAD_DR_CR = ad.PAD_DR_CR,
                        PAD_MOD_BY = ad.PAD_MOD_BY,
                        PAD_MOD_DATE = ad.PAD_MOD_DATE,
                        PAD_STATUS = ad.PAD_STATUS,
                        PAD_SUB_ACCT_CODE = ad.PAD_SUB_ACCT_CODE,
                        MS_ACCT_SUB_ACCOUNT = SubAccountMdl.GetSubAccount(ad.PAD_SUB_ACCT_CODE),
                        MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(ad.PAD_ACCT_CODE)
                    }).Single();
        }
    }
}