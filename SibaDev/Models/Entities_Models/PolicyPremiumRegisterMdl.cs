using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class PolicyPremiumRegisterMdl : Model
    {
        public static INS_PREMIUM_REGISTER get_premiumregister(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_PREMIUM_REGISTER where r.PR_SYS_ID == code select r).ToList().Select(r => new INS_PREMIUM_REGISTER
                {
                    PR_SYS_ID = r.PR_SYS_ID,
                    PR_UWD_ACCT_TYPE = r.PR_UWD_ACCT_TYPE,
                    PR_ACCT_YN = r.PR_ACCT_YN,
                    PR_BC_AMOUNT = r.PR_BC_AMOUNT,
                    PR_BUS_SOURCE = r.PR_BUS_SOURCE,
                    PR_COB = r.PR_COB,
                    PR_CRTE_BY = r.PR_CRTE_BY,
                    PR_CRTE_DATE = r.PR_CRTE_DATE,
                    PR_CURRENCY = r.PR_CURRENCY,
                    PR_CUST_ACCT = r.PR_CUST_ACCT,
                    PR_CUST_CODE = r.PR_CUST_CODE,
                    PR_END_NO = r.PR_END_NO,
                    PR_FC_AMOUNT = r.PR_FC_AMOUNT,
                    PR_FX_RATE = r.PR_FX_RATE,
                    PR_INS_SOURCE = r.PR_INS_SOURCE,
                    PR_OFFICE = r.PR_OFFICE,
                    PR_POL_SYS_ID = r.PR_POL_SYS_ID,
                    PR_POST_DATE = r.PR_POST_DATE,
                    PR_STATUS = r.PR_STATUS,
                    PR_TTY_SOURCE = r.PR_TTY_SOURCE,
                    PR_TXN_REF = r.PR_TXN_REF,
                  
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }
    }
}