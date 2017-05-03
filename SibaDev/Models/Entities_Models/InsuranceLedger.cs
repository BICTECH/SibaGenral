using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class InsuranceLedger : Model
    {
        public static INSURANCE_LEDGER get_ledger(long code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INSURANCE_LEDGER where r.IGL_SYS_ID == code select r).ToList().Select(r => new INSURANCE_LEDGER
                {
                    IGL_SYS_ID = r.IGL_SYS_ID,
                    IGL_ACCOUNT_CODE = r.IGL_ACCOUNT_CODE,
                    IGL_ACCT_DATE = r.IGL_ACCT_DATE,
                    IGL_ACCT_PERIOD_REF = r.IGL_ACCT_PERIOD_REF,
                    IGL_ACCT_REF = r.IGL_ACCT_REF,
                    IGL_AMOUNT_BC = r.IGL_AMOUNT_BC,
                    IGL_AMOUNT_FC = r.IGL_AMOUNT_FC,
                    IGL_CRTE_BY = r.IGL_CRTE_BY,
                    IGL_CRTE_DATE = r.IGL_CRTE_DATE,
                    IGL_CURRENCY = r.IGL_CURRENCY,
                    IGL_CUST_CODE = r.IGL_CUST_CODE,
                    IGL_DOC_NUMBER = r.IGL_DOC_NUMBER,
                    IGL_DR_CR = r.IGL_DR_CR,
                    IGL_FX_RATE = r.IGL_FX_RATE,
                    IGL_NARRATION = r.IGL_NARRATION,
                    IGL_POL_END_NO = r.IGL_POL_END_NO,
                    IGL_POL_NUMBER = r.IGL_POL_NUMBER,
                    IGL_TXN_DOC_TYPE = r.IGL_TXN_DOC_TYPE,
                    IGL_TXN_SOURCE = r.IGL_TXN_SOURCE,
                    IGL_STATUS = r.IGL_STATUS,
                    IGL_POL_SYS_ID = r.IGL_POL_SYS_ID,
                    IGL_POSTED_DATE =  r.IGL_POSTED_DATE
                    
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

    }
}