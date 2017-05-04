using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class IntermediaryCommissionMdl : Model
    {
        public static MS_INTERMEDIARY_COMM get_intermcomm(int id)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_INTERMEDIARY_COMM where mdl.COM_SYS_ID == id select mdl).ToList().Select(mdl => new MS_INTERMEDIARY_COMM
            {
                COM_SYS_ID = mdl.COM_SYS_ID,
                COM_INT_CODE = mdl.COM_INT_CODE,
                COM_ACTIVE_YN = mdl.COM_ACTIVE_YN,
                COM_DFT_PERC = mdl.COM_DFT_PERC,
                COM_ENDORSE_PERC = mdl.COM_ENDORSE_PERC,
                COM_FROM_DATE = mdl.COM_FROM_DATE,
                COM_MOD_BY = mdl.COM_MOD_BY,
                COM_MOD_DATE = mdl.COM_MOD_DATE,
                COM_CRTE_BY = mdl.COM_CRTE_BY,
                COM_CRTE_DATE = mdl.COM_CRTE_DATE,
                COM_STATUS = mdl.COM_STATUS,
                COM_NEW_PERC = mdl.COM_NEW_PERC,
                COM_PROD_CODE = mdl.COM_PROD_CODE,
                COM_RENEWAL_PERC = mdl.COM_RENEWAL_PERC,
                COM_TO_DATE = mdl.COM_TO_DATE,
                MS_SYS_INTERMEDIARY = IntermediaryMdl.get_intermediary(mdl.COM_INT_CODE),
                MST_UWD_PRODUCT = new MST_UWD_PRODUCT { PDT_CODE = mdl.COM_PROD_CODE}
                //,PDT_NAME = mdl.MST_UWD_PRODUCT.PDT_NAME
            }).Single();
        }

        public static INS_UWD_INTERMEDIARY_COMM get_Insintermcomm(int id)
        {
            var db = new SibaModel();
            return (from mdl in db.INS_UWD_INTERMEDIARY_COMM where mdl.CMM_SYS_ID == id select mdl).ToList().Select(mdl => new INS_UWD_INTERMEDIARY_COMM
            {
                CMM_SYS_ID = mdl.CMM_SYS_ID,
                CMM_COB_CODE = mdl.CMM_COB_CODE,
                CMM_COM_AMT_BC = mdl.CMM_COM_AMT_BC,
                CMM_COM_AMT_FC = mdl.CMM_COM_AMT_FC,
                CMM_COM_PERC = mdl.CMM_COM_PERC,
                CMM_CRTE_BY = mdl.CMM_CRTE_BY,
                CMM_CRTE_DATE = mdl.CMM_CRTE_DATE,
                CMM_END_NO = mdl.CMM_END_NO,
                CMM_INT_CODE = mdl.CMM_INT_CODE,
                CMM_MOD_BY = mdl.CMM_MOD_BY,
                CMM_MOD_DATE = mdl.CMM_MOD_DATE,
                CMM_OFFICE = mdl.CMM_OFFICE,
                CMM_POL_SYS_ID = mdl.CMM_POL_SYS_ID,
                CMM_POST_DATE = mdl.CMM_POST_DATE,
                CMM_PREM_AMT_BC = mdl.CMM_PREM_AMT_BC,
                CMM_PREM_AMT_FC = mdl.CMM_PREM_AMT_FC,
                CMM_STATUS = mdl.CMM_STATUS,
                MS_SYS_INTERMEDIARY = IntermediaryMdl.get_intermediary(mdl.CMM_INT_CODE),
                //,PDT_NAME = mdl.MST_UWD_PRODUCT.PDT_NAME
            }).Single();
        }

        public static IEnumerable<MS_INTERMEDIARY_COMM> get_intermcomms(string pdcode)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_INTERMEDIARY_COMM where mdl.COM_STATUS == "A" && mdl.COM_PROD_CODE == pdcode select mdl.COM_SYS_ID).ToList().Select(get_intermcomm);
        }

        public static IEnumerable<MS_INTERMEDIARY_COMM> get_intermcomms()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_INTERMEDIARY_COMM where mdl.COM_STATUS == "A"  select mdl.COM_SYS_ID).Select(get_intermcomm);
        }

        public static IEnumerable<object> get_lov_intermcomm(string ProdCode)
        {
            var db = new SibaModel();
            return (from interm in db.MS_INTERMEDIARY_COMM
                    where interm.COM_STATUS == "A" && interm.COM_PROD_CODE == ProdCode
                    select new
                    {
                        COM_INT_CODE = interm.COM_INT_CODE,
                        COM_NAME = interm.MS_SYS_INTERMEDIARY.INT_OFFICIAL_NAME,
                        COM_DFT_PERC = interm.COM_DFT_PERC

                    });
        }
           

        public static bool save_intermcomm(MS_INTERMEDIARY_COMM are)
        {
            var db = new SibaModel();
            if (are.COM_STATUS == "A")
            {
                var db_agencycomm = db.MS_INTERMEDIARY_COMM.Find(are.COM_SYS_ID);
                if (db_agencycomm != null)
                {
                    db.MS_INTERMEDIARY_COMM.Attach(db_agencycomm);
                    db_agencycomm.Map(are);
                }

            }
            else if (are.COM_STATUS == "U")
            {
                are.COM_STATUS = "A";
                db.MS_INTERMEDIARY_COMM.Add(are);
            }
            else if (are.COM_STATUS == "D")
            {
                var db_agencycomm = db.MS_INTERMEDIARY_COMM.Find(are.COM_SYS_ID);
                if (db_agencycomm != null)
                {
                    db.MS_INTERMEDIARY_COMM.Attach(db_agencycomm);
                    db_agencycomm.COM_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_INTERMEDIARY_COMM> search_intermcomms(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_INTERMEDIARY_COMM
                    where (are.COM_INT_CODE.ToLower().Contains(q.ToLower()) || are.COM_PROD_CODE.ToLower().Contains(q.ToLower())
                          || are.COM_DFT_PERC.ToString().Contains(q.ToLower()) || are.COM_ENDORSE_PERC.ToString().Contains(q.ToLower())
                          || are.COM_NEW_PERC.ToString().Contains(q.ToLower()) || are.COM_RENEWAL_PERC.ToString().Contains(q.ToLower())
                          || are.COM_FROM_DATE.ToString().Contains(q.ToLower()) || are.COM_TO_DATE.ToString().Contains(q.ToLower())) && are.COM_STATUS == "A"
                    select are.COM_SYS_ID).Select(get_intermcomm);
        }
    }
}