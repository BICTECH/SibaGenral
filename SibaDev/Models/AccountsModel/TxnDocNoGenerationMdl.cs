using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class TxnDocNoGenerationMdl:Model
    {

        public static MS_ACT_DOC_NO_GEN GetDocNoGen(int id)
        {
            var db = new SibaModel();
            return
                (from dg in db.MS_ACT_DOC_NO_GEN where dg.DNG_SYS_ID == id select dg).ToList()
                    .Select(dg => new MS_ACT_DOC_NO_GEN
                    {
                        DNG_SYS_ID = dg.DNG_SYS_ID,
                        DNG_ACNT_YEAR = dg.DNG_ACNT_YEAR,
                        DNG_APND_CNTRY_YN = dg.DNG_APND_CNTRY_YN,
                        DNG_APND_DEP_YN = dg.DNG_APND_DEP_YN,
                        DNG_APND_OFF_YN = dg.DNG_APND_OFF_YN,
                        DNG_APND_REG_YN = dg.DNG_APND_REG_YN,
                        DNG_ATD_CODE = dg.DNG_ATD_CODE,
                        DNG_CRTE_BY = dg.DNG_CRTE_BY,
                        DNG_CRTE_DATE = dg.DNG_CRTE_DATE,
                        DNG_CUR_NO = dg.DNG_CUR_NO,
                        DNG_END_NO = dg.DNG_END_NO,
                        DNG_FROM_DATE = dg.DNG_FROM_DATE,
                        DNG_MOD_BY = dg.DNG_MOD_BY,
                        DNG_MOD_DATE = dg.DNG_MOD_DATE,
                        DNG_NXT_NO = dg.DNG_NXT_NO,
                        DNG_PREF = dg.DNG_PREF,
                        DNG_SEPARATOR = dg.DNG_SEPARATOR,
                        DNG_STATUS = dg.DNG_STATUS,
                        DNG_STRT_NO = dg.DNG_STRT_NO,
                        DNG_SUFX = dg.DNG_SUFX,
                        DNG_TO_DATE = dg.DNG_TO_DATE
                    }).Single();
        }

        public static IEnumerable<MS_ACT_DOC_NO_GEN> GetTxnDocNoGens(string txnDocCode)
        {
            var db = new SibaModel();
            return (from dg in db.MS_ACT_DOC_NO_GEN where dg.DNG_ATD_CODE == txnDocCode select dg.DNG_SYS_ID).Select(GetDocNoGen);
        }
    }
}