using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsModel
{
    public class AccountGLMdl:Model
    {

        public static ACCT_GL_HEAD GetGlHead(int id)
        {
            var  db = new  SibaModel();
            using (db)
            {
                return
                    (from gl in db.ACCT_GL_HEAD where gl.TH_SYS_ID == id select gl).ToList()
                        .Select(gl => new ACCT_GL_HEAD
                        {
                            TH_SYS_ID = gl.TH_SYS_ID,
                            TH_ACCT_YEAR = gl.TH_ACCT_YEAR,
                            TH_ANALYSIS_01 = gl.TH_ANALYSIS_01,
                            TH_BATCH_ID = gl.TH_BATCH_ID,
                            TH_COMP_CODE = gl.TH_COMP_CODE,
                            TH_CRTE_BY = gl.TH_CRTE_BY,
                            TH_CRTE_DATE = gl.TH_CRTE_DATE,
                            TH_DEPT_CODE = gl.TH_DEPT_CODE,
                            TH_DOC_CAL_MONTH = gl.TH_DOC_CAL_MONTH,
                            TH_DOC_CAL_YEAR = gl.TH_DOC_CAL_YEAR,
                            TH_DOC_DATE = gl.TH_DOC_DATE,
                            TH_DOC_NO = gl.TH_DOC_NO,
                            TH_DOC_TYPE = gl.TH_DOC_TYPE,
                            TH_MOD_BY = gl.TH_MOD_BY,
                            TH_MOD_DATE = gl.TH_MOD_DATE,
                            TH_NALYSIS_02 = gl.TH_NALYSIS_02,
                            TH_NALYSIS_03 = gl.TH_NALYSIS_03,
                            TH_NALYSIS_04 = gl.TH_NALYSIS_04,
                            TH_NALYSIS_05 = gl.TH_NALYSIS_05,
                            TH_NARRATION = gl.TH_NARRATION,
                            TH_OFFICE_CODE = gl.TH_OFFICE_CODE,
                            TH_STATUS = gl.TH_STATUS,
                            TH_TXN_REF = gl.TH_TXN_REF,
                            TH_TXN_REF_DT = gl.TH_TXN_REF_DT,
                            ACCT_GL_DETAIL = gl.ACCT_GL_DETAIL != null? gl.ACCT_GL_DETAIL.Select(d => AccountGLDetailMdl.GetGlDetail((int)d.TD_SYS_ID)).ToList():null
                        }).SingleOrDefault();
            }
        }
    }
}