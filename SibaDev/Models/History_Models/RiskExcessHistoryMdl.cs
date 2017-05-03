using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.History_Models
{
    public class RiskExcessHistoryMdl
    {
        public static IEnumerable<INS_UDW_RISK_EXCESS> GetHRiskExcesss(int riskId, int? endNo)
        {
            var db = new SibaModel();
            return (from excess in db.INS_UDW_HRISK_EXCESS
                    where excess.EXS_RISK_SYS_ID == riskId && excess.EXS_END_NO == endNo
                    select excess).ToList().Select(e => new INS_UDW_RISK_EXCESS
                    {
                        EXS_RISK_SYS_ID = e.EXS_RISK_SYS_ID,
                        EXS_AMOUNT = e.EXS_AMOUNT,
                        EXS_CODE = e.EXS_CODE,
                        EXS_CRTE_BY = e.EXS_CRTE_BY,
                        EXS_CRTE_DATE = e.EXS_CRTE_DATE,
                        EXS_MAX_AMOUNT = e.EXS_MAX_AMOUNT,
                        EXS_MIN_AMOUNT = e.EXS_MIN_AMOUNT,
                        EXS_MOD_BY = e.EXS_MOD_BY,
                        EXS_MOD_DATE = e.EXS_MOD_DATE,
                        EXS_NART = e.EXS_NART,
                        EXS_RATE = e.EXS_RATE,
                        EXS_STATUS = e.EXS_STATUS,
                        EXS_SYS_ID = e.EXS_SYS_ID,
                        EXS_TYPE = e.EXS_TYPE
                    });
            
        }
    }
}