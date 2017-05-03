using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class TxntDocDefAcntsMdl:Model
    {

        public static MS_ACT_DEF_ACNTS GetDefAcnts(int id)
        {
            var db = new SibaModel();
            return (from da in db.MS_ACT_DEF_ACNTS where da.DA_SYS_ID == id select da).ToList()
                    .Select(da => new MS_ACT_DEF_ACNTS
                    {
                        DA_SYS_ID = da.DA_SYS_ID,
                        DA_ACNT_CODE = da.DA_ACNT_CODE,
                        DA_ATD_CODE = da.DA_ATD_CODE,
                        DA_CRTE_BY = da.DA_CRTE_BY,
                        DA_CRTE_DATE = da.DA_CRTE_DATE,
                        DA_MAX_AMNT = da.DA_MAX_AMNT,
                        DA_MIN_AMNT = da.DA_MIN_AMNT,
                        DA_MOD_BY = da.DA_MOD_BY,
                        DA_MOD_DATE = da.DA_MOD_DATE,
                        DA_STATUS = da.DA_STATUS
                    }).Single();
        }

        public static IEnumerable<MS_ACT_DEF_ACNTS> GetTxnDocDefAcnts(string txnDocCode)
        {
            var db = new SibaModel();
            return (from da in db.MS_ACT_DEF_ACNTS where da.DA_ATD_CODE == txnDocCode select da.DA_SYS_ID).Select(GetDefAcnts);
        }
    }

    
}