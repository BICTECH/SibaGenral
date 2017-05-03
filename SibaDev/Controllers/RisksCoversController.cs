using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers
{
    public class RisksCoversController : ApiController
    {
        //
        [HttpPost]
        [Route("api/RisksCovers/additionalCovers")]
        public Object AdditionalCovers([FromBody]RisksCoversJSON addCoversJson)
        {
            try
            {
                /*---------------------------------------------------------------
             * logic for cover premium calculation
             * 1. use product risk code to fetch default covers 
             * 2. check if the cover for the product and risk is defaulted
             * 3. fetch premium calc details from the preium tarrif table for the cover
             * 4. calc the premium for the covers
             */


                var riskCovers = RisksCoversMdl.GetAdditionalProductCovers(addCoversJson.PRD_CODE, addCoversJson.RCOV_CODE);
                var rskCoverList = new List<INS_UWD_RISK_COVERS>();

                foreach (var cover in riskCovers)
                {


                    if (cover != null)
                    {
                        var seq = RisksCoversMdl.GetRiskCoverSeq();

                        rskCoverList.Add(new INS_UWD_RISK_COVERS
                        {
                            RCOV_CODE = cover.PCV_COV_CODE,
                            MS_UDW_COVERS = new MS_UDW_COVERS
                            {
                                CVR_CODE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_CODE,
                                CVR_NAME = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_NAME,
                                CVR_TYPE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_TYPE,
                                CVR_PREM_REFUND = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_PREM_REFUND,
                                CVR_LEVELS = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_LEVELS,
                                CVR_RATED = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RATED,
                                CVR_RATE_CHANGE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RATE_CHANGE,
                                CVR_RI_APPLICABLE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RI_APPLICABLE,
                                CVR_SI_CHANGE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_SI_CHANGE,
                                CVR_USER_PREMIUM = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_USER_PREMIUM,
                                CVR_BASIC_COVER = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_BASIC_COVER
                            },
                            RCOV_DISC_BC = 0,//todo: build logic to calculate base currency discounts for default covers
                            RCOV_DISC_FC = 0,//todo: build logic to calculate foreign currency discounts for default covers
                            RCOV_LOAD_BC = 0,//todo: build logic to calculate base currency loading for default covers
                            RCOV_LOAD_FC = 0,//todo: build logic to calculate foreign currency loading for default covers

                            //RCOV_GROSS_PREM_BC = cover.PCV_DEF_PREM,
                            //RCOV_GROSS_PREM_FC = cover.PCV_DEF_PREM,
                            RCOV_GROSS_PREM_BC = Math.Round((decimal)(cover.PCV_DEF_PREM), 2),
                            RCOV_GROSS_PREM_FC = Math.Round((decimal)(cover.PCV_DEF_PREM / addCoversJson.CUR_RATE), 2),
                            RCOV_DISC_YN = "N",
                            RCOV_LOAD_YN = "N",
                            RCOV_NET_PREM_BC = Math.Round((decimal)((cover.PCV_DEF_PREM - 0 + 0) * 1), 2),
                            RCOV_NET_PREM_FC = Math.Round((decimal)((cover.PCV_DEF_PREM / addCoversJson.CUR_RATE - 0 + 0) / 1), 2),
                            //RCOV_NET_PREM_BC = cover.PCV_DEF_PREM,
                            //RCOV_NET_PREM_FC = cover.PCV_DEF_PREM,
                            RCOV_NO = 0,
                            RCOV_RATE = cover.PCV_DEF_RATE,
                            RCOV_RISK_NO = 0,
                            RCOV_RISK_SYS_ID = 0,
                            RCOV_POLH_DOC_NO = 0,
                            RCOV_RI_PREM_YN = "",
                            RCOV_RI_SI_YN = "",
                            RCOV_SI_BC = cover.PCV_SI,
                            //RCOV_SI_FC = cover.PCV_SI,
                            RCOV_SI_FC = Math.Round((decimal)(cover.PCV_SI / addCoversJson.CUR_RATE), 2),
                            RCOV_SYS_ID = Convert.ToInt32(Math.Round(seq)),
                            RCOV_STATUS = "U",
                            RCOV_TXN_STATE = "N",
                            RCOV_TYPE = "",
                            RPCOV_END_NO = 0,
                            RCOV_CRTE_BY = "",
                            RCOV_CRTE_DATE = DateTime.Now.Date,
                            RCOV_MOD_BY = "",
                            RCOV_MOD_DATE = null,

                        });
                    }

                }
                return rskCoverList;
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", Exception = e };
            }
        }


        [HttpPost]
        [Route("api/RisksCovers/defaultCovers")]
        public object getDeftCovers([FromBody]RisksCoversJSON defCoversJson)
        {
            try
            {
                /*---------------------------------------------------------------
             * logic for cover premium calculation
             * 1. use product risk code to fetch default covers 
             * 2. check if the cover for the product and risk is defaulted
             * 3. fetch premium calc details from the preium tarrif table for the cover
             * 4. calc the premium for the covers
             */

                //var MotorRisks = MotorRisksCoversMdl.get_MotorRisks(tarrifJson.PRD_CODE, tarrifJson.RISK_SYS_ID);
                var riskCovers = RisksCoversMdl.GetProductRiskCovers(defCoversJson.PRD_CODE);
                var rskCoverList = new List<INS_UWD_RISK_COVERS>();
                if (riskCovers != null)
                {
                    foreach (var cover in riskCovers)
                    {
                        if (cover.PCV_DFT == "Y")
                        {
                            //var tarrif = CoverPremiumCalculationMdl.GetCoverTarrifs(tarrifJson.PRD_CODE, tarrifJson.RSK_CODE, cover.PCV_COV_CODE);

                            //  decimal ExRate = defCoversJson.CUR_RATE;


                            //if (ExRate.ToString() == "")
                            //{
                            //    ExRate = 1;
                            //}

                            if (cover != null)
                            {
                                var seq = RisksCoversMdl.GetRiskCoverSeq();

                                rskCoverList.Add(new INS_UWD_RISK_COVERS
                                {
                                    RCOV_CODE = cover.PCV_COV_CODE,
                                    //return cover code and name
                                    MS_UDW_COVERS = new MS_UDW_COVERS
                                    {
                                        CVR_CODE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_CODE,
                                        CVR_NAME = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_NAME,
                                        CVR_TYPE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_TYPE,
                                        CVR_PREM_REFUND = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_PREM_REFUND,
                                        CVR_LEVELS = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_LEVELS,
                                        CVR_RATED = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RATED,
                                        CVR_RATE_CHANGE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RATE_CHANGE,
                                        CVR_RI_APPLICABLE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_RI_APPLICABLE,
                                        CVR_SI_CHANGE = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_SI_CHANGE,
                                        CVR_USER_PREMIUM = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_USER_PREMIUM,
                                        CVR_BASIC_COVER = CoverMdl.get_cover(cover.PCV_COV_CODE).CVR_BASIC_COVER
                                    },
                                    RCOV_DISC_BC = 0,//todo: build logic to calculate base currency discounts for default covers
                                    RCOV_DISC_FC = 0,//todo: build logic to calculate foreign currency discounts for default covers
                                    RCOV_LOAD_BC = 0,//todo: build logic to calculate base currency loading for default covers
                                    RCOV_LOAD_FC = 0,//todo: build logic to calculate foreign currency loading for default covers

                                    //RCOV_GROSS_PREM_BC = cover.PCV_DEF_PREM,
                                    //RCOV_GROSS_PREM_FC = cover.PCV_DEF_PREM,
                                    RCOV_GROSS_PREM_BC = Math.Round((decimal)(cover.PCV_DEF_PREM), 2),
                                    RCOV_GROSS_PREM_FC = Math.Round((decimal)(cover.PCV_DEF_PREM / defCoversJson.CUR_RATE), 2),
                                    RCOV_DISC_YN = "N",
                                    RCOV_LOAD_YN = "N",
                                    //RCOV_NET_PREM_BC = cover.PCV_DEF_PREM,
                                    //RCOV_NET_PREM_FC = cover.PCV_DEF_PREM,
                                    RCOV_NET_PREM_BC = Math.Round((decimal)((cover.PCV_DEF_PREM - 0 + 0) * 1), 2),
                                    RCOV_NET_PREM_FC = Math.Round((decimal)((cover.PCV_DEF_PREM / defCoversJson.CUR_RATE - 0 + 0) / 1), 2),
                                    RCOV_NO = 0,
                                    RCOV_RATE = cover.PCV_DEF_RATE,
                                    RCOV_RISK_NO = 0,
                                    RCOV_RISK_SYS_ID = 0,
                                    RCOV_POLH_DOC_NO = 0,
                                    RCOV_RI_PREM_YN = "",
                                    RCOV_RI_SI_YN = "",
                                    RCOV_SI_BC = cover.PCV_SI,
                                    //RCOV_SI_FC = cover.PCV_SI,
                                    RCOV_SI_FC = Math.Round((decimal)(cover.PCV_SI / defCoversJson.CUR_RATE), 2),
                                    RCOV_SYS_ID = Convert.ToInt32(Math.Round(seq)),
                                    RCOV_STATUS = "U",
                                    RCOV_TXN_STATE = "N",
                                    RCOV_TYPE = "",
                                    RPCOV_END_NO = 0,
                                    RCOV_CRTE_BY = "",
                                    RCOV_CRTE_DATE = DateTime.Now.Date,
                                    RCOV_MOD_BY = "",
                                    RCOV_MOD_DATE = null,

                                });
                            }

                        }

                    }
                }

                return rskCoverList;
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/RisksCovers/productRisk")]
        public object getProductRisks(ProductsRisksCoversJSON riskJson)
        {
            try
            {
                var riskLst = RisksCoversMdl.get_ProductRisk_Lov(riskJson.PRD_CODE).ToList();

                return riskLst;
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpPost]
        [Route("api/RisksCovers/RiskCoversLOV")]
        public object getRisksCoverLov(ProductsRisksCoversJSON riskCoverJson)
        {
            try
            {
                var riskCoverlist = RisksCoversMdl.GetRiskCovers(riskCoverJson.PRD_CODE).ToList();

                return riskCoverlist;
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }
    }
}