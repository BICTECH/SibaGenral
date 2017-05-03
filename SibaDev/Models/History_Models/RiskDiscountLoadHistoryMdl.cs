using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.History_Entities;

namespace SibaDev.Models.History_Models
{
    public class RiskDiscountLoadHistoryMdl
    {

        public static IEnumerable<INS_UDW_RISK_DISCLOAD> GetHRiskDiscload(int riskId, int? endNo)
        {
            var db = new SibaModel();
            return
                    (from hd in db.INS_UDW_HRISK_DISCLOAD where hd.DL_RISK_SYS_ID == riskId && hd.DL_END_NO == endNo select hd).ToList()
                        .Select(d => new INS_UDW_RISK_DISCLOAD
                        {
                            DL_AMT_FC = d.DL_AMT_FC,
                            DL_AMT_BC = d.DL_AMT_BC,
                            DL_SYS_ID = (int)d.DL_SYS_ID,
                            DL_STATUS = d.DL_STATUS,
                            DL_PREM_FC = d.DL_PREM_FC,
                            DL_MOD_DATE = d.DL_MOD_DATE,
                            DL_CODE = d.DL_CODE,
                            DL_MOD_BY = d.DL_MOD_BY,
                            DL_TYPE = d.DL_TYPE,
                            DL_CRTE_DATE = d.DL_CRTE_DATE,
                            DL_RATE = d.DL_RATE,
                            DL_CRTE_BY = d.DL_CRTE_BY,
                            DL_PREM_BC = d.DL_PREM_BC,
                            DL_RISK_SYS_ID = d.DL_RISK_SYS_ID
                        });
            
        }

        public static bool SaveRiskDiscLoad(INS_UDW_HRISK_DISCLOAD disccload)
        {
            var db = new SibaModel();
            using (db)
            {
                var dbDiscLoad = new INS_UDW_HRISK_DISCLOAD();
                dbDiscLoad.Map(disccload);
                db.INS_UDW_HRISK_DISCLOAD.Add(dbDiscLoad);
                db.SaveChanges();
                return true;
            }
        }
    }
}