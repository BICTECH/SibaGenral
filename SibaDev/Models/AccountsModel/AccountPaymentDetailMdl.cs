using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountPaymentDetailMdl:Model
    {

        public static MS_ACCT_PAYMNT_DTLS GetPaymntDtls(int id)
        {
            var db = new SibaModel();
            return
                (from pd in db.MS_ACCT_PAYMNT_DTLS where pd.APD_SYS_ID == id select pd).ToList()
                    .Select(pd => new MS_ACCT_PAYMNT_DTLS
                    {
                        APD_SYS_ID = pd.APD_SYS_ID,
                        APD_ACNT_PERIOD = pd.APD_ACNT_PERIOD,
                        APD_ACTIVE = pd.APD_ACTIVE,
                        APD_APH_SYS_ID = pd.APD_APH_SYS_ID,
                        APD_CRTE_BY = pd.APD_CRTE_BY,
                        APD_CRTE_DATE = pd.APD_CRTE_DATE,
                        APD_CUR_CODE = pd.APD_CUR_CODE,
                        APD_DEP_OFF_CODE = pd.APD_DEP_OFF_CODE,
                        APD_DUE_DATE = pd.APD_DUE_DATE,
                        APD_MOD_BY = pd.APD_MOD_BY,
                        APD_MOD_DATE = pd.APD_MOD_DATE,
                        APD_PM_CODE = pd.APD_PM_CODE,
                        APD_PAYMNT_DESC = pd.APD_PAYMNT_DESC,
                        APD_PAYMNT_TYPE = pd.APD_PAYMNT_TYPE,
                        APD_RCVD_FROM = pd.APD_RCVD_FROM,
                        APD_STATUS = pd.APD_STATUS,
                        APD_TXN_DOC_NO = pd.APD_TXN_DOC_NO,
                        APD_TXN_OFF_CODE = pd.APD_TXN_OFF_CODE,
                        MS_SYS_PAYMNT_MODE = PaymentModeMdl.GetPaymntMode(pd.APD_PM_CODE),
                        MS_SYS_OFFICE = OfficeMdl.get_office(pd.APD_TXN_OFF_CODE),
                        MS_SYS_OFFICE1 = OfficeMdl.get_office(pd.APD_DEP_OFF_CODE),
                        MS_INS_CURRENCY = CurrencyMdl.get_currency(pd.APD_CUR_CODE)
                    })
                    .Single();
        }
    }
}