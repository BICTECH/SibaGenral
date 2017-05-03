using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class OpenEntryMdl:Model
    {

        public static ACCT_TXN_OPEN_ENTRY GetOpenEntry(int id)
        {
            var db = new SibaModel();
            return (from o in db.ACCT_TXN_OPEN_ENTRY where o.OE_SYS_ID == id select o).ToList()
                    .Select(o => new ACCT_TXN_OPEN_ENTRY
                    {
                        OE_TXN_REF_ID = o.OE_TXN_REF_ID,
                        OE_R_BATCH_ID = o.OE_R_BATCH_ID,
                        OE_DOC_TYPE = o.OE_DOC_TYPE,
                        OE_DOC_NO = o.OE_DOC_NO,
                        OE_LINE_NO = o.OE_LINE_NO,
                        OE_DOC_DATE = o.OE_DOC_DATE,
                        OE_DUE_DATE = o.OE_DUE_DATE,
                        OE_CUST_CODE = o.OE_CUST_CODE,
                        OE_MAIN_ACCT_CODE = o.OE_MAIN_ACCT_CODE,
                        OE_SUB_ACCT_CODE = o.OE_SUB_ACCT_CODE,
                        OE_DR_CR = o.OE_DR_CR,
                        OE_OFFICE_CODE = o.OE_OFFICE_CODE,
                        OE_CURR_CODE = o.OE_CURR_CODE,
                        OE_CURR_RATE = o.OE_CURR_RATE,
                        OE_ORGNL_FC_AMT = o.OE_ORGNL_FC_AMT,
                        OE_ORGNL_BC_AMT = o.OE_ORGNL_BC_AMT,
                        OE_ADJ_FC_AMT = o.OE_ADJ_FC_AMT,
                        OE_ADJ_BC_AMT = o.OE_ADJ_BC_AMT,
                        OE_UNPOST_ADJ_FC_AMT = o.OE_UNPOST_ADJ_FC_AMT,
                        OE_UNPOST_ADJ_BC_AMT = o.OE_UNPOST_ADJ_BC_AMT,
                        OE_ACCT_YEAR = o.OE_ACCT_YEAR,
                        OE_DOC_CAL_MONTH = o.OE_DOC_CAL_MONTH,
                        OE_CRTE_BY = o.OE_CRTE_BY,
                        OE_CRTE_DATE = o.OE_CRTE_DATE,
                        OE_SYS_ID = o.OE_SYS_ID,
                        OE_MOD_DATE = o.OE_MOD_DATE,
                        OE_MOD_BY = o.OE_MOD_BY
                    }).SingleOrDefault();
        }

        public static ACCT_OPEN_ENTRY_MATCH_DETL GetMatchedOpenEntry(int id)
        {
            var db = new SibaModel();
            return (from m in db.ACCT_OPEN_ENTRY_MATCH_DETL where m.MA_TXN_SYS_ID == id select m).ToList()
                    .Select(m => new ACCT_OPEN_ENTRY_MATCH_DETL
                    {
                          MA_SYS_ID = m.MA_SYS_ID,
                          MA_TXN_SYS_ID = m.MA_TXN_SYS_ID,
                          MA_TXN_DOC_TYPE = m.MA_TXN_DOC_TYPE,
                          MA_TXN_DOC_NO = m.MA_TXN_DOC_NO,
                          MA_REF_SYS_ID = m.MA_REF_SYS_ID,
                          MA_REF_DOC_TYPE = m.MA_REF_DOC_TYPE,
                          MA_REF_DOC_NO = m.MA_REF_DOC_NO,
                          MA_MAIN_ACCT = m.MA_MAIN_ACCT,
                          MA_SUB_ACCT = m.MA_SUB_ACCT,
                          MA_REF_DOC_DATE = m.MA_REF_DOC_DATE,
                          MA_REF_CURRENCY = m.MA_REF_CURRENCY,
                          MA_REF_CURR_RATE = m.MA_REF_CURR_RATE,
                          MA_MATCHED_FC_AMT = m.MA_MATCHED_FC_AMT,
                          MA_MATCHED_BC_AMT = m.MA_MATCHED_BC_AMT,
                          MA_REF_DR_CR = m.MA_REF_DR_CR,
                          MA_CRTE_DATE = m.MA_CRTE_DATE,
                          MA_MOD_BY = m.MA_MOD_BY,
                          MA_MOD_DATE = m.MA_MOD_DATE,
                          MA_STATUS = m.MA_STATUS

                    }).SingleOrDefault();
        }
        public static IEnumerable<ACCT_TXN_OPEN_ENTRY> GetCustomerOpenEntries(string custCode)
        {
            var db = new SibaModel();
            return (from o in db.ACCT_TXN_OPEN_ENTRY where o.OE_CUST_CODE == custCode select o.OE_SYS_ID).Select(
                    GetOpenEntry);
        }

        public static IEnumerable<object> GetOpenEntriesMatchedDtls(int txnSysID)
        {
            var db = new SibaModel();
            return (from m in db.ACCT_OPEN_ENTRY_MATCH_DETL where m.MA_TXN_SYS_ID == txnSysID select new
            {
                MA_SYS_ID = m.MA_SYS_ID,
                MA_TXN_SYS_ID = m.MA_TXN_SYS_ID,
                MA_TXN_DOC_TYPE = m.MA_TXN_DOC_TYPE,
                MA_TXN_DOC_NO = m.MA_TXN_DOC_NO,
                MA_REF_SYS_ID = m.MA_REF_SYS_ID,
                MA_REF_DOC_TYPE = m.MA_REF_DOC_TYPE,
                MA_REF_DOC_NO = m.MA_REF_DOC_NO,
                MA_MAIN_ACCT = m.MA_MAIN_ACCT,
                MA_SUB_ACCT = m.MA_SUB_ACCT,
                MA_REF_DOC_DATE = m.MA_REF_DOC_DATE,
                MA_REF_CURRENCY = m.MA_REF_CURRENCY,
                MA_REF_CURR_RATE = m.MA_REF_CURR_RATE,
                MA_MATCHED_FC_AMT = m.MA_MATCHED_FC_AMT,
                MA_MATCHED_BC_AMT = m.MA_MATCHED_BC_AMT,
                MA_REF_DR_CR = m.MA_REF_DR_CR,
                MA_CRTE_DATE = m.MA_CRTE_DATE,
                MA_MOD_BY = m.MA_MOD_BY,
                MA_MOD_DATE = m.MA_MOD_DATE,
                MA_STATUS = m.MA_STATUS
            });
          }
    }
}