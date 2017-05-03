using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.History_Entities;

namespace SibaDev.Models.History_Models
{
    public class IntermediaryCommissionHistoryMdl
    {

        public static INS_UWD_INTERMEDIARY_COMM GetHIntermediaryComm(int polId)
        {
            var db = new SibaModel();
            using (db)
            {
                return
                    (from com in db.INS_UWD_HINTERMEDIARY_COMM where com.CMM_POL_SYS_ID == polId select com).ToList()
                        .Select(c => new INS_UWD_INTERMEDIARY_COMM
                        {
                            CMM_POL_SYS_ID = c.CMM_POL_SYS_ID,
                            CMM_INT_CODE = c.CMM_INT_CODE,
                            CMM_COB_CODE = c.CMM_COB_CODE,
                            CMM_COM_AMT_BC = c.CMM_COM_AMT_BC,
                            CMM_COM_AMT_FC = c.CMM_COM_AMT_FC,
                            CMM_COM_PERC = c.CMM_COM_PERC,
                            CMM_CRTE_BY = c.CMM_CRTE_BY,
                            CMM_CRTE_DATE = c.CMM_CRTE_DATE,
                            CMM_END_NO = c.CMM_END_NO,
                            CMM_MOD_BY = c.CMM_MOD_BY,
                            CMM_MOD_DATE = c.CMM_MOD_DATE,
                            CMM_OFFICE = c.CMM_OFFICE,
                            CMM_POST_DATE = c.CMM_POST_DATE,
                            CMM_PREM_AMT_BC = c.CMM_PREM_AMT_BC,
                            CMM_PREM_AMT_FC = c.CMM_PREM_AMT_FC,
                            CMM_STATUS = c.CMM_STATUS,
                            CMM_SYS_ID = (int)c.CMM_SYS_ID
                        }).SingleOrDefault();
            }
        }

        public static bool SavePolicyCommisionHistory(INS_UWD_INTERMEDIARY_COMM commission)
        {
            var db= new SibaModel();
            using (db)
            {
                var historyCommision = new INS_UWD_HINTERMEDIARY_COMM();
                historyCommision.Map(commission);
                db.INS_UWD_HINTERMEDIARY_COMM.Add(historyCommision);
                db.SaveChanges();
                return true;
            }
        }
    }
}