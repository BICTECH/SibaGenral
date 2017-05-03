using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class TxnDocAdvancedPropsMdl:Model
    {

        public static MS_ACT_TXN_DOC_ADV_PROPS GetAdvProps(int id)
        {
            var db = new SibaModel();
            return (from ap in db.MS_ACT_TXN_DOC_ADV_PROPS where ap.DAP_SYS_ID == id select ap).ToList()
                    .Select(ap => new MS_ACT_TXN_DOC_ADV_PROPS
                    {
                        DAP_SYS_ID = ap.DAP_SYS_ID,
                        DAP_ALW_BCK_DATE_YN = ap.DAP_ALW_BCK_DATE_YN,
                        DAP_ALW_FUTRE_DATE_YN = ap.DAP_ALW_FUTRE_DATE_YN,
                        DAP_ATD_CODE = ap.DAP_ATD_CODE,
                        DAP_BACK_DAYS = ap.DAP_BACK_DAYS,
                        DAP_CRTE_BY = ap.DAP_CRTE_BY,
                        DAP_CRTE_DATE = ap.DAP_CRTE_DATE,
                        DAP_FUTRE_DAYS = ap.DAP_FUTRE_DAYS,
                        DAP_LOG_TRAILS_YN = ap.DAP_LOG_TRAILS_YN,
                        DAP_MOD_BY = ap.DAP_MOD_BY,
                        DAP_MOD_DATE = ap.DAP_MOD_DATE,
                        DAP_STATUS = ap.DAP_STATUS
                    }).Single();
        }

        public static IEnumerable<MS_ACT_TXN_DOC_ADV_PROPS> GeTxnDocAdvProps(string txnDocCode)
        {
            var db = new SibaModel();
            return (from ap in db.MS_ACT_TXN_DOC_ADV_PROPS where ap.DAP_ATD_CODE == txnDocCode select ap.DAP_SYS_ID).Select(GetAdvProps);
        } 
    }
}