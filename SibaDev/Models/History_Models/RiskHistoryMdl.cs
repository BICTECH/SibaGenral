using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.History_Models
{
    public class RiskHistoryMdl:Model
    {

        public static IEnumerable<INS_UWD_VEHICLE_RISK> GetPolHistoryRisk(int? polId, decimal? endNo)
        {
            var db = new  SibaModel();
            return (from risk in db.INS_UWD_HVEHICLE_RISK
                        where risk.VEH_POLH_SYS_ID == polId && risk.VEH_POLH_END_NO == endNo
                        select risk).ToList().Select(c => new INS_UWD_VEHICLE_RISK
                        {
                            VEH_SYS_ID = c.VEH_SYS_ID,
                            VEH_POLH_SYS_ID = c.VEH_POLH_SYS_ID,
                            VEH_POLH_DOC_NO = c.VEH_POLH_DOC_NO,
                            VEH_POLH_END_NO = c.VEH_POLH_END_NO,
                            VEH_RISK_NO = c.VEH_RISK_NO,
                            VEH_RISK_CODE = c.VEH_RISK_CODE,
                            VEH_ISSUE_DATE = c.VEH_ISSUE_DATE,
                            VEH_RETROS_DATE = c.VEH_RETROS_DATE,
                            VEH_START_DATE = c.VEH_START_DATE,
                            VEH_END_DATE = c.VEH_END_DATE,
                            VEH_PERIOD_DAYS = c.VEH_PERIOD_DAYS,

                            VEH_CURRENCY = c.VEH_CURRENCY,
                            VEH_CURR_RATE = c.VEH_CURR_RATE,
                            VEH_PRODUCT_CODE = c.VEH_PRODUCT_CODE,
                            VEH_COVER_CODE = c.VEH_COVER_CODE,
                            VEH_USAGE_CODE = c.VEH_USAGE_CODE,
                            VEH_VEH_REG_NO = c.VEH_VEH_REG_NO,
                            VEH_MAKE = c.VEH_MAKE,
                            VEH_MODEL = c.VEH_MODEL,
                            VEH_BODY_TYPE = c.VEH_BODY_TYPE,
                            VEH_MANUFACTURE_YR = c.VEH_MANUFACTURE_YR,

                            VEH_CHASSIS_NO = c.VEH_CHASSIS_NO,
                            VEH_CUBIC_CAP = c.VEH_CUBIC_CAP,
                            VEH_PASSENGERS = c.VEH_PASSENGERS,
                            VEH_EXCESS_APP = c.VEH_EXCESS_APP,
                            VEH_EXCESS_PERC = c.VEH_EXCESS_PERC,
                            VEH_EXCESS_MIN = c.VEH_EXCESS_MIN,
                            VEH_EXCESS_MAX = c.VEH_EXCESS_MAX,
                            VEH_EXCESS_FIX = c.VEH_EXCESS_FIX,
                            VEH_EXTRA_TPPD = c.VEH_EXTRA_TPPD,
                            VEH_TP_INTEREST = c.VEH_TP_INTEREST,

                            VEH_TP_DETAILS = c.VEH_TP_DETAILS,
                            VEH_PROP_DECLINED = c.VEH_PROP_DECLINED,
                            VEH_DECLINED_REASON = c.VEH_DECLINED_REASON,
                            VEH_POL_CANCELLED = c.VEH_POL_CANCELLED,
                            VEH_CANCELLED_REASON = c.VEH_CANCELLED_REASON,
                            VEH_SI_FC = c.VEH_SI_FC,
                            VEH_SI_BC = c.VEH_SI_BC,
                            VEH_TOT_PREM_FC = c.VEH_TOT_PREM_FC,
                            VEH_TOT_PREM_BC = c.VEH_TOT_PREM_BC,
                            VEH_RI_APPLICABLE = c.VEH_RI_APPLICABLE,

                            VEH_RI_EFF_DATE = c.VEH_RI_EFF_DATE,
                            VEH_RI_SI_FC = c.VEH_RI_SI_FC,
                            VEH_RI_SI_BC = c.VEH_RI_SI_BC,
                            VEH_RI_PREM_FC = c.VEH_RI_PREM_FC,
                            VEH_RI_PREM_BC = c.VEH_RI_PREM_BC,
                            VEH_RISK_PREM_FC = c.VEH_RISK_PREM_FC,
                            VEH_TP_PREM_BC = c.VEH_TP_PREM_BC,
                            VEH_ADJ_PREM_FC = c.VEH_ADJ_PREM_FC,
                            VEH_ADJ_PREM_BC = c.VEH_ADJ_PREM_BC,
                            VEH_DISC_FC = c.VEH_DISC_FC,

                            VEH_DISC_BC = c.VEH_DISC_BC,
                            VEH_LOAD_FC = c.VEH_LOAD_FC,
                            VEH_LOAD_BC = c.VEH_LOAD_BC,
                            VEH_COMP_FEE_FC = c.VEH_COMP_FEE_FC,
                            VEH_COMP_FEE_BC = c.VEH_COMP_FEE_BC,
                            VEH_COMMISSION_FC = c.VEH_COMMISSION_FC,
                            VEH_COMMISSION_BC = c.VEH_COMMISSION_BC,
                            VEH_TXN_STATUS = c.VEH_TXN_STATUS,
                            VEH_RISK_STATE = c.VEH_RISK_STATE,
                            VEH_RENEWAL_STATUS = c.VEH_RENEWAL_STATUS,

                            VEH_END_TYPE = c.VEH_END_TYPE,
                            VEH_APPROVE_DATE = c.VEH_APPROVE_DATE,
                            VEH_ACCT_DATE = c.VEH_ACCT_DATE,
                            VEH_CRTE_BY = c.VEH_CRTE_BY,
                            VEH_CRTE_DATE = c.VEH_CRTE_DATE,
                            VEH_MOD_BY = c.VEH_MOD_BY,
                            VEH_MOD_DATE = c.VEH_MOD_DATE,
                            VEH_STATUS = c.VEH_STATUS,
                            INS_UWD_RISK_COVERS = CoverHistoryMdl.GetHriskCovers(c.VEH_SYS_ID,c.VEH_POLH_END_NO).ToList(),
                            INS_UDW_VEHICLE_FEES = VehicleFeesHistoryMdl.GetHvehicleFees(c.VEH_SYS_ID, c.VEH_POLH_END_NO).ToList(),
                            INS_UDW_RISK_EXCESS = RiskExcessHistoryMdl.GetHRiskExcesss(c.VEH_SYS_ID, c.VEH_POLH_END_NO).ToList(),
                            INS_UDW_RISK_DISCLOAD = RiskDiscountLoadHistoryMdl.GetHRiskDiscload(c.VEH_SYS_ID,c.VEH_POLH_END_NO).ToList()
                        });
            
        } 
    }
}