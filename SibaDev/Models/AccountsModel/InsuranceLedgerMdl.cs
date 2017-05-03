using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class InsuranceLedgerMdl:Model
    {
        public static INSURANCE_LEDGER GetInsuranceLedger(int id)
        {
            var db = new SibaModel();
            using (db)
            {
                return
                    (from i in db.INSURANCE_LEDGER where i.IGL_SYS_ID == id select i).ToList()
                        .Select(i => new INSURANCE_LEDGER
                        {
                            IGL_SYS_ID = i.IGL_SYS_ID,
                            IGL_ACCOUNT_CODE = i.IGL_ACCOUNT_CODE,
                            IGL_ACCT_DATE = i.IGL_ACCT_DATE,
                            IGL_ACCT_PERIOD_REF = i.IGL_ACCT_PERIOD_REF,
                            IGL_ACCT_REF = i.IGL_ACCT_REF,
                            IGL_AMOUNT_BC = i.IGL_AMOUNT_BC,
                            IGL_AMOUNT_FC = i.IGL_AMOUNT_FC,
                            IGL_CRTE_BY = i.IGL_CRTE_BY,
                            IGL_CRTE_DATE = i.IGL_CRTE_DATE,
                            IGL_CURRENCY = i.IGL_CURRENCY,
                            IGL_CUST_CODE = i.IGL_CUST_CODE,
                            IGL_DOC_NUMBER = i.IGL_DOC_NUMBER,
                            IGL_DR_CR = i.IGL_DR_CR,
                            IGL_FX_RATE = i.IGL_FX_RATE,
                            IGL_NARRATION = i.IGL_NARRATION,
                            IGL_POL_END_NO = i.IGL_POL_END_NO,
                            IGL_POL_NUMBER = i.IGL_POL_NUMBER,
                            IGL_POL_SYS_ID = i.IGL_POL_SYS_ID,
                            IGL_POSTED_DATE = i.IGL_POSTED_DATE,
                            IGL_TXN_DOC_TYPE = i.IGL_TXN_DOC_TYPE,
                            IGL_TXN_SOURCE = i.IGL_TXN_SOURCE,
                            IG_REF_DOC =i.IG_REF_DOC,
                            IGL_STATUS = i.IGL_STATUS,
                            INSURANCE_SUB_LEDGER = i.INSURANCE_SUB_LEDGER.Select(s => GetInsuranceSubLedger(s.ISL_SYS_ID)).ToList()
                        })
                        .SingleOrDefault();
            }
        }

        public static IEnumerable<INSURANCE_LEDGER> GetPolicyInsuranceLedger(int polId)
        {
            var ledger = new INSURANCE_LEDGER();

            var db = new SibaModel();
            return (from i in db.INSURANCE_LEDGER where i.IGL_POL_SYS_ID == polId select i.IGL_SYS_ID).Select(GetInsuranceLedger).ToList();
        }

        public static INSURANCE_SUB_LEDGER GetInsuranceSubLedger(long id)
        {
            var db = new SibaModel();
            using (db)
            {
                return
                    (from s in db.INSURANCE_SUB_LEDGER where s.ISL_SYS_ID == id select s).ToList()
                        .Select(i => new INSURANCE_SUB_LEDGER
                        {
                              ISL_SYS_ID          =  i.ISL_SYS_ID        ,
                              ISL_IGL_SYS_ID      =  i.ISL_IGL_SYS_ID    ,
                              ISL_ACCT_NUMBER     =  i.ISL_ACCT_NUMBER   ,
                              ISL_CURRENCY        =  i.ISL_CURRENCY      ,
                              ISL_FX_RATE         =  i.ISL_FX_RATE       ,
                              ISL_AMOUNT_FC       =  i.ISL_AMOUNT_FC     ,
                              ISL_AMOUNT_BC       =  i.ISL_AMOUNT_BC     ,
                              ISL_DR_CR           =  i.ISL_DR_CR         ,
                              ISL_COB             =  i.ISL_COB           ,
                              ISL_OFFICE          =  i.ISL_OFFICE        ,
                              ISL_NARRATION       =  i.ISL_NARRATION     ,
                              ISL_ACCT_DATE       =  i.ISL_ACCT_DATE     ,
                              ISL_CONTROL_ACT_YN  =  i.ISL_CONTROL_ACT_YN,
                              ISL_SUB_LEDGER      =  i.ISL_SUB_LEDGER    ,
                              ISL_CRTE_BY         =  i.ISL_CRTE_BY       ,
                              ISL_CRTE_DATE       =  i.ISL_CRTE_DATE     ,
                              ISL_MOD_BY          =  i.ISL_MOD_BY        ,
                              ISL_MOD_DATE        =  i.ISL_MOD_DATE      ,
                              ISL_STATUS          =  i.ISL_STATUS        
                                                                         ,                  
                        })
                        .SingleOrDefault();
            }
        }

       
    }


}