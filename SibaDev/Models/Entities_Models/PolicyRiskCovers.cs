using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class PolicyRiskCovers : Model
    {
        public static INS_UWD_RISK_COVERS get_riskcovers(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_UWD_RISK_COVERS where r.RCOV_SYS_ID == code select r).ToList().Select(r => new INS_UWD_RISK_COVERS
                {
                    RCOV_SYS_ID = r.RCOV_SYS_ID,
                    RCOV_CODE = r.RCOV_CODE,
                    RCOV_CRTE_BY = r.RCOV_CRTE_BY,
                    RCOV_CRTE_DATE = r.RCOV_CRTE_DATE,
                    RCOV_DISC_BC = r.RCOV_DISC_BC,
                    RCOV_DISC_FC = r.RCOV_DISC_FC,
                    RCOV_DISC_YN = r.RCOV_DISC_YN,
                    RCOV_GROSS_PREM_BC = r.RCOV_GROSS_PREM_BC,
                    RCOV_GROSS_PREM_FC = r.RCOV_GROSS_PREM_FC,
                    RCOV_LOAD_BC = r.RCOV_LOAD_BC,
                    RCOV_LOAD_FC = r.RCOV_LOAD_FC,
                    RCOV_LOAD_YN = r.RCOV_LOAD_YN,
                    RCOV_MOD_BY = r.RCOV_MOD_BY,
                    RCOV_MOD_DATE = r.RCOV_MOD_DATE,
                    RCOV_NET_PREM_BC = r.RCOV_NET_PREM_BC,
                    RCOV_NET_PREM_FC = r.RCOV_NET_PREM_FC,
                    RCOV_NO = r.RCOV_NO,
                    RCOV_POLH_DOC_NO = r.RCOV_POLH_DOC_NO,
                    RCOV_RATE = r.RCOV_RATE,
                    RCOV_RISK_NO = r.RCOV_RISK_NO,
                    RCOV_RISK_SYS_ID = r.RCOV_RISK_SYS_ID,
                    RCOV_RI_PREM_YN = r.RCOV_RI_PREM_YN,
                    RCOV_RI_SI_YN = r.RCOV_RI_SI_YN,
                    RCOV_SI_BC = r.RCOV_SI_BC,
                    RCOV_SI_FC = r.RCOV_SI_FC,
                    RCOV_STATUS = r.RCOV_STATUS,
                    RCOV_TXN_STATE = r.RCOV_TXN_STATE,
                    RCOV_TYPE = r.RCOV_TYPE,
                    RPCOV_END_NO = r.RPCOV_END_NO,
                    RCOV_ANNL_PREM_BC = r.RCOV_ANNL_PREM_BC,
                    RCOV_ANNL_PREM_FC = r.RCOV_ANNL_PREM_FC,
                    MS_UDW_COVERS = CoverMdl.get_cover(r.RCOV_CODE.ToString())
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

    }
}