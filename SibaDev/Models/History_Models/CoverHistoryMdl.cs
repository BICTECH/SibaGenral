using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.History_Entities;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.History_Models
{
    public class CoverHistoryMdl:Model
    {

        public static IEnumerable<INS_UWD_RISK_COVERS> GetHriskCovers(int riskId, int? endNo)
        {
            var db = new SibaModel();
            return (from cover in db.INS_UWD_HRISK_COVERS where cover.RCOV_RISK_SYS_ID == riskId && cover.RPCOV_END_NO == endNo select cover).ToList()
                        .Select(c => new INS_UWD_RISK_COVERS
                        {
                            RCOV_RISK_SYS_ID = c.RCOV_RISK_SYS_ID,
                            RCOV_CODE = c.RCOV_CODE,
                            RCOV_CRTE_BY = c.RCOV_CRTE_BY,
                            RCOV_CRTE_DATE = c.RCOV_CRTE_DATE,
                            RCOV_DISC_BC = c.RCOV_DISC_BC,
                            RCOV_DISC_FC = c.RCOV_DISC_FC,
                            RCOV_DISC_YN = c.RCOV_DISC_YN,
                            RCOV_GROSS_PREM_BC = c.RCOV_GROSS_PREM_BC,
                            RCOV_GROSS_PREM_FC = c.RCOV_GROSS_PREM_FC,
                            RCOV_LOAD_BC = c.RCOV_LOAD_BC,
                            RCOV_LOAD_FC = c.RCOV_LOAD_FC,
                            RCOV_LOAD_YN = c.RCOV_LOAD_YN,
                            RCOV_MOD_BY = c.RCOV_MOD_BY,
                            RCOV_MOD_DATE = c.RCOV_MOD_DATE,
                            RCOV_NAME = c.RCOV_NAME,
                            RCOV_NET_PREM_BC = c.RCOV_NET_PREM_BC,
                            RCOV_NET_PREM_FC = c.RCOV_NET_PREM_FC,
                            RCOV_NO = c.RCOV_NO,
                            RCOV_POLH_DOC_NO = c.RCOV_POLH_DOC_NO,
                            RCOV_RATE = c.RCOV_RATE,
                            RCOV_RISK_NO = c.RCOV_RISK_NO,
                            RCOV_RI_PREM_YN = c.RCOV_RI_PREM_YN,
                            RCOV_RI_SI_YN = c.RCOV_RI_SI_YN,
                            RCOV_SI_BC = c.RCOV_SI_BC,
                            RCOV_SI_FC = c.RCOV_SI_FC,
                            RCOV_STATUS = c.RCOV_STATUS,
                            RCOV_SYS_ID = (int)c.RCOV_SYS_ID,
                            RCOV_TXN_STATE = c.RCOV_TXN_STATE,
                            RCOV_TYPE = c.RCOV_TYPE,
                            RPCOV_END_NO = c.RPCOV_END_NO,
                            RCOV_ANNL_PREM_BC = c.RCOV_ANNL_PREM_BC,
                            RCOV_ANNL_PREM_FC = c.RCOV_ANNL_PREM_FC,
                            INS_UDW_COVER_DISCLOAD = CoverDiscountLoadMdl.GetHcoverDiscload(c.RCOV_SYS_ID,c.RPCOV_END_NO).ToList()
                        });
        }

        public static bool SaveHistoryRiskCovers(INS_UWD_RISK_COVERS cover)
        {
            var db = new SibaModel();
            using (db)
            {
                var historyCover = new INS_UWD_HRISK_COVERS();
                historyCover.Map(cover);
                db.INS_UWD_HRISK_COVERS.Add(historyCover);
                cover.INS_UDW_COVER_DISCLOAD.ForEach(x =>
                {
                    CoverDiscountLoadMdl.SaveHistoryDiscLoad(x);
                });
                db.SaveChanges();
                return true;

            }
        }
    }
}