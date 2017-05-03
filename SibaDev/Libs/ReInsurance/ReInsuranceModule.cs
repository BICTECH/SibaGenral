using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Libs.ReInsurance
{
    public class ReInsuranceModule
    {

        public static IEnumerable<object> Apportionment(int polId)
        {
            var db = new SibaModel();
            //obtain the policy data
            var policy = db.INS_UWD_POLICY_HEAD.Find(polId);
            if (policy != null)
            {
                //obtain risks
                policy.INS_UWD_VEHICLE_RISK.ForEach(risk =>
                {
                    //obtain the treaty group
                    var grpDtls = db.MS_RI_GROUP_DETL.FirstOrDefault(d => d.GD_SUB_CLASS == policy.POLH_SUB_CLASS_CODE);
                    if (grpDtls != null)
                    {
                        var treatyGrpHead = grpDtls.MS_RI_GROUP_HEAD;
                        var treaty = treatyGrpHead.MS_RI_PTTY_HEAD.FirstOrDefault(t => t.TH_CURRENCY == policy.POLH_CURRENCY  && risk.VEH_UW_YEAR == t.TH_UWYR);
                        if (treaty != null)
                        {
                            
                                using (var trans = db.Database.BeginTransaction())
                                {
                                    try
                                    {
                                        //insert treaty proportionment header
                                        var head = new INS_RI_TTY_HEAD
                                        {
                                            TTH_ACC_SI_BC = risk.VEH_RI_SI_BC,
                                            TTH_ACC_SI_FC = risk.VEH_RI_SI_FC,
                                            TTH_ADJ_YN = null,
                                            TTH_CLASS_CODE = policy.POLH_CLASS_CODE,
                                            TTH_COMB_LOC_ID = null,
                                            TTH_CRTE_BY = "System",
                                            TTH_CRTE_DATE = DateTime.Now,
                                            TTH_EML_PERC = grpDtls.GD_PML_PERC,
                                            TTH_FROM_DATE = risk.VEH_START_DATE,
                                            TTH_INS_SRCE = policy.POLH_INS_SOURCE,
                                            TTH_LOC_END_NO = (int?) policy.POLH_END_NO,
                                            TTH_LOC_SYS_ID = null,
                                            TTH_MOD_BY = null,
                                            TTH_MOD_DATE = null,
                                            TTH_POLH_END_NO = (int?) policy.POLH_END_NO,
                                            TTH_POLH_SYS_ID = policy.POLH_SYS_ID,
                                            TTH_POLNUM = policy.POLH_DISPLAY_NO,
                                            TTH_REF_ID = risk.VEH_VEH_REG_NO,
                                            TTH_RISK_END_NO = (int?) policy.POLH_END_NO,
                                            TTH_RISK_SYS_ID = risk.VEH_SYS_ID,
                                            TTH_RI_ACC_YN = null,
                                            TTH_RI_PREM_BC = risk.VEH_RI_PREM_BC,
                                            TTH_RI_PREM_FC = risk.VEH_RISK_PREM_FC,
                                            TTH_RI_SI_BC = risk.VEH_RI_SI_BC,
                                            TTH_RI_SI_FC = risk.VEH_RI_SI_FC,
                                            TTH_SC_CODE = policy.POLH_SUB_CLASS_CODE,
                                            TTH_STATUS = "A",
                                            TTH_TOTAL_PREM_BC = risk.VEH_TOT_PREM_BC,
                                            TTH_TOTAL_PREM_FC = risk.VEH_TOT_PREM_FC,
                                            TTH_TOTAL_SI_BC = risk.VEH_SI_BC,
                                            TTH_TOTAL_SI_FC = risk.VEH_SI_FC,
                                            TTH_TO_DATE = risk.VEH_END_DATE,
                                            TTH_UW_YEAR = (short?) risk.VEH_UW_YEAR
                                        };
                                        db.INS_RI_TTY_HEAD.Add(head);
                                        db.SaveChanges();

                                    var excessSIFC = risk.VEH_SI_FC;
                                    var excessSIBC = risk.VEH_SI_BC;

                                  
                                    

                                    foreach (var detail in treaty.MS_RI_PTTY_DETL.OrderBy(d => d.TD_SEQ ))
                                        {

                                            var allocation = new INS_RI_TTY_ALLOCATION
                                            {
                                                TTA_CLOSE_FLAG = "N",
                                                TTA_CRTE_BY = "System",
                                                TTA_CRTE_DATE = DateTime.Now,
                                                TTA_MOD_BY = null,
                                                TTA_MOD_DATE = null,
                                                TTA_POLH_END_NO = (int?) policy.POLH_END_NO,
                                                TTA_POLH_SYS_ID = policy.POLH_SYS_ID,
                                                TTA_SEQ_NO = (byte?) detail.TD_SEQ,
                                                TTA_SLIPNO = null,
                                                TTA_STATUS = "A",
                                                TTA_TTH_SYS_ID = head.TTH_SYS_ID,
                                                TTA_TTY_CODE = treatyGrpHead.GP_CODE,
                                                TTA_TTY_COMM_BC = null,
                                                TTA_TTY_COMM_FC = null,
                                                TTA_UW_YEAR = (short?) risk.VEH_UW_YEAR
                                            };
                                            
                                            if (detail.TD_TTY_LIMIT >= risk.VEH_SI_FC)
                                                {
                                                    allocation.TTA_TTY_LIMIT_BC = detail.TD_TTY_LIMIT;
                                                    allocation.TTA_TTY_LIMIT_FC = detail.TD_TTY_LIMIT;
                                                    allocation.TTA_TTY_SI_BC = excessSIBC;
                                                    allocation.TTA_TTY_SI_FC = excessSIFC;
                                                    excessSIFC = 0;
                                                    excessSIBC = 0;
                                                }
                                                else
                                                {
                                                    allocation.TTA_TTY_LIMIT_BC = detail.TD_TTY_LIMIT;
                                                    allocation.TTA_TTY_LIMIT_FC = detail.TD_TTY_LIMIT;
                                                    allocation.TTA_TTY_SI_BC = detail.TD_TTY_LIMIT;
                                                    allocation.TTA_TTY_SI_FC = detail.TD_TTY_LIMIT;
                                                    excessSIFC = (excessSIFC - detail.TD_TTY_LIMIT);
                                                    excessSIBC = (excessSIBC - detail.TD_TTY_LIMIT);

                                                }
                                            allocation.TTA_ALLOC_PERC = (allocation.TTA_TTY_SI_FC/risk.VEH_SI_FC)*100;
                                            allocation.TTA_TTY_PREM_BC = risk.VEH_TOT_PREM_BC* (allocation.TTA_ALLOC_PERC/100);
                                            allocation.TTA_TTY_PREM_FC = risk.VEH_TOT_PREM_FC* (allocation.TTA_ALLOC_PERC/100);

                                            
                                           //add allocations
                                           db.INS_RI_TTY_ALLOCATION.Add(allocation);
                                        //add Excess allocations
                                       
                                        db.SaveChanges();

                                        foreach (var company in detail.MS_RI_PTTY_COMPANY)
                                                {
                                                    var share = new INS_RI_TTY_SHARE
                                                    {
                                                        TTS_CRTE_BY = "System",
                                                        TTS_CRTE_DATE = DateTime.Now,
                                                        TTS_MOD_BY = null,
                                                        TTS_MOD_DATE = null,
                                                        TTS_RI_COMM_BC = allocation.TTA_TTY_PREM_BC* (company.TCP_TTY_COMM/100),
                                                        TTS_RI_COMM_FC = allocation.TTA_TTY_PREM_FC * (company.TCP_TTY_COMM / 100),
                                                        TTS_RI_COMM_PERC = company.TCP_TTY_COMM,
                                                        TTS_RI_COMP = company.TCP_COMP_CODE,
                                                        TTS_RI_TAX_PERC = company.TCP_TTY_TAX,
                                                        TTS_SHARE_PERC = company.TCP_TTY_SHARE,
                                                        TTS_SHARE_PREM_BC = allocation.TTA_TTY_PREM_BC * (company.TCP_TTY_SHARE / 100),
                                                        TTS_SHARE_PREM_FC = allocation.TTA_TTY_PREM_FC * (company.TCP_TTY_SHARE / 100),
                                                        TTS_SHARE_SI_BC = allocation.TTA_TTY_SI_BC * (company.TCP_TTY_SHARE / 100),
                                                        TTS_SHARE_SI_FC = allocation.TTA_TTY_SI_FC * (company.TCP_TTY_SHARE / 100),
                                                        TTS_STATUS = "A",
                                                        TTS_TAX_BC = (allocation.TTA_TTY_PREM_BC * (company.TCP_TTY_COMM / 100)) *(company.TCP_TTY_TAX /100),
                                                        TTS_TAX_FC = (allocation.TTA_TTY_PREM_FC * (company.TCP_TTY_COMM / 100)) *(company.TCP_TTY_TAX /100),
                                                        TTS_TTA_SEQ_NO = (byte) detail.TD_SEQ,
                                                        TTS_TTA_SYS_ID = allocation.TTA_SYS_ID,
                                                        TTS_TTY_TYPE = detail.TD_TTY_TYPE,
                                                        
                                                    };
                                                }
                                            
                                        }

                                        trans.Commit();
                                    }
                                    catch (Exception)
                                    {
                                        trans.Rollback();
                                    }
                                }
                                


                            
                        }

                    }
                    

                });
            }
            return null;
        } 
    }
}