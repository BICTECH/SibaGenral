using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class AccountGlOpenEntryMdl:Model
    {
        public static ACCT_TXN_OPEN_ENTRY GetOpenEntry(int id)
        {
            var db = new  SibaModel();
            using (db)
            {
                return
                    (from oe in db.ACCT_TXN_OPEN_ENTRY where oe.OE_SYS_ID == id select oe).ToList()
                        .Select(o => new ACCT_TXN_OPEN_ENTRY
                        {
                            OE_SYS_ID = o.OE_SYS_ID,
                            OE_ACCT_YEAR = o.OE_ACCT_YEAR,
                            OE_ADJ_BC_AMT = o.OE_ADJ_BC_AMT,
                            OE_ADJ_FC_AMT = o.OE_ADJ_FC_AMT,
                            OE_CRTE_BY = o.OE_CRTE_BY,
                            OE_CRTE_DATE = o.OE_CRTE_DATE,
                            OE_CURR_CODE = o.OE_CURR_CODE,
                            OE_CURR_RATE = o.OE_CURR_RATE,
                            OE_CUST_CODE = o.OE_CUST_CODE,
                            OE_DOC_CAL_MONTH = o.OE_DOC_CAL_MONTH,
                            OE_DOC_DATE = o.OE_DOC_DATE,
                            OE_DOC_NO = o.OE_DOC_NO,
                            OE_DR_CR = o.OE_DR_CR,
                            OE_DUE_DATE = o.OE_DUE_DATE,
                            OE_LINE_NO = o.OE_LINE_NO,
                            OE_MAIN_ACCT_CODE = o.OE_MAIN_ACCT_CODE,
                            OE_MOD_BY = o.OE_MOD_BY,
                            OE_MOD_DATE = o.OE_MOD_DATE,
                            OE_OFFICE_CODE = o.OE_OFFICE_CODE,
                            OE_ORGNL_BC_AMT = o.OE_ORGNL_BC_AMT,
                            OE_ORGNL_FC_AMT = o.OE_ORGNL_FC_AMT,
                            OE_R_BATCH_ID = o.OE_R_BATCH_ID,
                            OE_SUB_ACCT_CODE = o.OE_SUB_ACCT_CODE,
                            OE_TXN_REF_ID = o.OE_TXN_REF_ID,
                            OE_UNPOST_ADJ_BC_AMT = o.OE_UNPOST_ADJ_BC_AMT,
                            OE_UNPOST_ADJ_FC_AMT = o.OE_UNPOST_ADJ_FC_AMT,
                        })
                        .SingleOrDefault();
            }
        }
    }
}