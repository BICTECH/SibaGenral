//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace SibaDev.Models
//{
//    public class CoverPremiumCalculationMdl:Model
//    {
//        public static IEnumerable<MST_UWD_PRODUCT_COVERS> GetDefaultProductCovers(string prdCode)
//        {
//            //pc.PCV_DFT == "Y" &&

//            return (from pc in db.MST_UWD_PRODUCT_COVERS where  pc.PCV_PDT_CODE == prdCode select pc).ToList().
//                Select(v => new MST_UWD_PRODUCT_COVERS {
//                    PCV_SYS_ID = v.PCV_SYS_ID,
//                    PCV_PDT_CODE = v.PCV_PDT_CODE,
//                    PCV_COV_CODE = v.PCV_COV_CODE,
//                    PCV_SI = v.PCV_SI,
//                    PCV_DEF_RATE = v.PCV_DEF_RATE,
//                    PCV_DFT = v.PCV_DFT,
//                    PCV_DISC = v.PCV_DISC,
//                    PCV_LOAD = v.PCV_LOAD,
//                    PCV_CRTE_BY = v.PCV_CRTE_BY,
//                    PCV_CRTE_DATE = v.PCV_CRTE_DATE,
//                    PCV_MOD_BY = v.PCV_MOD_BY,
//                    PCV_MOD_DATE = v.PCV_MOD_DATE,
//                    PCV_STATUS = v.PCV_STATUS,
//                    MS_UDW_COVERS = CoverMdl.get_cover(v.PCV_COV_CODE)
//                });
//        }
//        public static MS_UDW_PREM_TARRIFS GetCoverTarrifs(string prdCode, string rskCode, string cvrCode)
//        {
//            try
//            {
//                return (from pt in db.MS_UDW_PREM_TARRIFS where pt.TFF_PRD_CODE == prdCode && pt.TFF_MRK_CODE == rskCode && pt.TFF_CVR_CODE == cvrCode select pt).ToList()
//                .Select(t => new MS_UDW_PREM_TARRIFS
//                {
//                    TFF_CVR_CODE = t.TFF_CVR_CODE,
//                    TFF_CODE = t.TFF_CODE,
//                    TFF_CRTE_BY = t.TFF_CRTE_BY,
//                    TFF_CRTE_DATE = t.TFF_CRTE_DATE,
//                    TFF_DEFAULT_AMT = t.TFF_DEFAULT_AMT,
//                    TFF_DEFAULT_RATE = t.TFF_DEFAULT_RATE,
//                    TFF_MAX_RATE = t.TFF_MAX_RATE,
//                    TFF_MIN_AMT = t.TFF_MIN_AMT,
//                    TFF_MIN_RATE = t.TFF_MIN_RATE,
//                    TFF_MOD_BY = t.TFF_MOD_BY,
//                    TFF_MOD_DATE = t.TFF_MOD_DATE,
//                    TFF_MRK_CODE = t.TFF_MRK_CODE,
//                    TFF_PP_AMT = t.TFF_PP_AMT,
//                    TFF_PRD_CODE = t.TFF_PRD_CODE,
//                    TFF_STATUS = t.TFF_STATUS
//                }).Single();
//            }
//            catch (Exception)
//            {
//                return null;
//            }
            
//        }

//        public static decimal GetRiskCoverSeq()
//        {
//            return db.Database.SqlQuery<decimal>("SELECT RISK_COVERS_SEQ.NEXTVAL FROM DUAL").Single();
//        }
//    }
//}