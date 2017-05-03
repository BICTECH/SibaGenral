using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class AccountGLDetailMdl:Model
    {
        public static ACCT_GL_DETAIL GetGlDetail(int id)
        {
            var db = new SibaModel();
            using (db)
            {
                return
                    (from gd in db.ACCT_GL_DETAIL where gd.TD_SYS_ID == id select gd).ToList()
                        .Select(gd => new ACCT_GL_DETAIL
                        {
                            TD_SYS_ID = gd.TD_SYS_ID,
                            TD_AMT_BC = gd.TD_AMT_BC,
                            TD_AMT_FC = gd.TD_AMT_FC,
                            TD_ANNALYSIS_1 = gd.TD_ANNALYSIS_1,
                            TD_ANNALYSIS_2 = gd.TD_ANNALYSIS_2,
                            TD_ANNALYSIS_3 = gd.TD_ANNALYSIS_3,
                            TD_ANNALYSIS_4 = gd.TD_ANNALYSIS_4,
                            TD_ANNALYSIS_5 = gd.TD_ANNALYSIS_5,
                            TD_CRTE_BY = gd.TD_CRTE_BY,
                            TD_CRTE_DATE = gd.TD_CRTE_DATE,
                            TD_CURR_CODE = gd.TD_CURR_CODE,
                            TD_CURR_RATE = gd.TD_CURR_RATE,
                            TD_DEPT_CODE = gd.TD_DEPT_CODE,
                            TD_DOC_DATE = gd.TD_DOC_DATE,
                            TD_DOC_NO = gd.TD_DOC_NO,
                            TD_DOC_REF = gd.TD_DOC_REF,
                            TD_DRCR_FLAG = gd.TD_DRCR_FLAG,
                            TD_LINE_NARRATION = gd.TD_LINE_NARRATION,
                            TD_MAIN_ACCT_CODE = gd.TD_MAIN_ACCT_CODE,
                            TD_MOD_BY = gd.TD_MOD_BY,
                            TD_MOD_DATE = gd.TD_MOD_DATE,
                            TD_OFFICE_CODE = gd.TD_OFFICE_CODE,
                            TD_SEQ_NO = gd.TD_SEQ_NO,
                            TD_STATUS = gd.TD_STATUS,
                            TD_SUB_ACCT_LV1 = gd.TD_SUB_ACCT_LV1,
                            TD_SUB_ACCT_LV2 = gd.TD_SUB_ACCT_LV2,
                            TD_TH_SYS_ID = gd.TD_TH_SYS_ID,
                            
                        })
                        .SingleOrDefault();
            }
        }
    }
}