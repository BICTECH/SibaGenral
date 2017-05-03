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
    public class MotorRisksCoversController : ApiController
    {

        //
        [HttpPost]
        [Route("api/MotorRisksCovers/additionalCovers")]
        public IEnumerable<INS_UWD_RISK_COVERS> AdditionalCovers(MotorRisksCoversJSON addCoversJson)
        {
            /*---------------------------------------------------------------
             * logic for cover premium calculation
             * 1. use product risk code to fetch default covers 
             * 2. check if the cover for the product and risk is defaulted
             * 3. fetch premium calc details from the preium tarrif table for the cover
             * 4. calc the premium for the covers
             */


            var riskCovers = MotorRisksCoversMdl.GetAdditionalCovers(addCoversJson.PROD_RISK_SYS_ID, addCoversJson.RCOV_CODE);
            var rskCoverList = new List<INS_UWD_RISK_COVERS>();

            foreach (var cover in riskCovers)
            {


                if (cover != null)
                {
                    var seq = MotorRisksCoversMdl.GetRiskCoverSeq();

                    rskCoverList.Add(new INS_UWD_RISK_COVERS
                    {
                        RCOV_CODE = cover.MRC_CVR_CODE,
                        MS_UDW_COVERS = new MS_UDW_COVERS
                        {
                            CVR_CODE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_CODE,
                            CVR_NAME = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_NAME,
                            CVR_TYPE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_TYPE,
                            CVR_PREM_REFUND = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_PREM_REFUND,
                            CVR_LEVELS = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_LEVELS,
                            CVR_RATED = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RATED,
                            CVR_RATE_CHANGE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RATE_CHANGE,
                            CVR_RI_APPLICABLE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RI_APPLICABLE,
                            CVR_SI_CHANGE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_SI_CHANGE,
                            CVR_USER_PREMIUM = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_USER_PREMIUM,
                            CVR_BASIC_COVER = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_BASIC_COVER
                        },
                        RCOV_DISC_BC = 0,//todo: build logic to calculate base currency discounts for default covers
                        RCOV_DISC_FC = 0,//todo: build logic to calculate foreign currency discounts for default covers
                        RCOV_LOAD_BC = 0,//todo: build logic to calculate base currency loading for default covers
                        RCOV_LOAD_FC = 0,//todo: build logic to calculate foreign currency loading for default covers

                        RCOV_GROSS_PREM_BC = Math.Round((decimal)(cover.MRC_DFT_PREM), 2),
                        RCOV_GROSS_PREM_FC = Math.Round((decimal)(cover.MRC_DFT_PREM / addCoversJson.CUR_RATE), 2),
                        RCOV_DISC_YN = "N",
                        RCOV_LOAD_YN = "N",
                        RCOV_NET_PREM_BC = Math.Round((decimal)((cover.MRC_DFT_PREM - 0 + 0) * 1), 2),
                        RCOV_NET_PREM_FC = Math.Round((decimal)((cover.MRC_DFT_PREM / addCoversJson.CUR_RATE - 0 + 0) / 1), 2),
                        RCOV_NO = 0,
                        RCOV_RATE = cover.MRC_DFT_RATE,
                        RCOV_RISK_NO = 0,
                        RCOV_RISK_SYS_ID = 0,
                        RCOV_POLH_DOC_NO = 0,
                        RCOV_RI_PREM_YN = "",
                        RCOV_RI_SI_YN = "",
                        RCOV_SI_BC = cover.MRC_DFT_SI,
                        RCOV_SI_FC = Math.Round((decimal)(cover.MRC_DFT_SI / addCoversJson.CUR_RATE), 2),
                        RCOV_SYS_ID = (int)seq,
                        RCOV_STATUS = "",
                        RCOV_TXN_STATE = "U",
                        RCOV_TYPE = "",
                        RPCOV_END_NO = 0,
                        RCOV_CRTE_BY = "",
                        RCOV_CRTE_DATE = DateTime.Now.Date,
                        RCOV_MOD_BY = "",
                        RCOV_MOD_DATE = null

                    });
                }



            }
            return rskCoverList;
        }

        [HttpPost]
        [Route("api/MotorRisksCovers/defaultCovers")]
        public IEnumerable<INS_UWD_RISK_COVERS> getDeftCovers(MotorRisksCoversJSON defCoversJson)
        {
            /*---------------------------------------------------------------
             * logic for cover premium calculation
             * 1. use product risk code to fetch default covers 
             * 2. check if the cover for the product and risk is defaulted
             * 3. fetch premium calc details from the preium tarrif table for the cover
             * 4. calc the premium for the covers
             */

            //var MotorRisks = MotorRisksCoversMdl.get_MotorRisks(tarrifJson.PRD_CODE, tarrifJson.RISK_SYS_ID);
            var riskCovers = MotorRisksCoversMdl.GetMotorRiskCovers(defCoversJson.PROD_RISK_SYS_ID);
            var rskCoverList = new List<INS_UWD_RISK_COVERS>();

            foreach (var cover in riskCovers)
            {
                if (cover.MRC_DFT_YN == "Y")
                {
                    //var tarrif = CoverPremiumCalculationMdl.GetCoverTarrifs(tarifJson.PRD_CODE, tarrifJson.RSK_CODE, cover.PCV_COV_CODE);

                    var ExRate = defCoversJson.CUR_RATE;
                    var annlPremium = cover.MRC_DFT_PREM;

                    // var Premium = 0.00;
                    switch (defCoversJson.PREM_BASIS)
                    {
                        case "PR":
                            cover.MRC_DFT_PREM = cover.MRC_DFT_PREM * (decimal)(defCoversJson.POL_DAYS / 365.00);
                            break;
                        case "SP":
                            //obtain the 
                            var db = new SibaModel();
                            var period = db.MS_UDW_SHORT_PERIOD.Where(p => p.SPD_NO_OF_DAYS == defCoversJson.POL_DAYS && p.SPD_PRD_CODE == defCoversJson.PRD_CODE).ToList().FirstOrDefault();
                            if (period != null)
                            {
                                cover.MRC_DFT_PREM = cover.MRC_DFT_PREM * (decimal)(period.SPD_RATE_PERC / (decimal)100.00);
                            }

                            break;
                            //case "FP":
                            //    break;
                    }

                    if (ExRate.ToString() == "")
                    {
                        ExRate = 1;
                    }

                    if (cover != null)
                    {
                        var seq = MotorRisksCoversMdl.GetRiskCoverSeq();

                        rskCoverList.Add(new INS_UWD_RISK_COVERS
                        {
                            RCOV_CODE = cover.MRC_CVR_CODE,
                            //return cover code and name
                            MS_UDW_COVERS = new MS_UDW_COVERS
                            {
                                CVR_CODE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_CODE,
                                CVR_NAME = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_NAME,
                                CVR_TYPE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_TYPE,
                                CVR_PREM_REFUND = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_PREM_REFUND,
                                CVR_LEVELS = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_LEVELS,
                                CVR_RATED = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RATED,
                                CVR_RATE_CHANGE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RATE_CHANGE,
                                CVR_RI_APPLICABLE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_RI_APPLICABLE,
                                CVR_SI_CHANGE = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_SI_CHANGE,
                                CVR_USER_PREMIUM = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_USER_PREMIUM,
                                CVR_BASIC_COVER = CoverMdl.get_cover(cover.MRC_CVR_CODE).CVR_BASIC_COVER
                            },
                            RCOV_DISC_BC = 0,//todo: build logic to calculate base currency discounts for default covers
                            RCOV_DISC_FC = 0,//todo: build logic to calculate foreign currency discounts for default covers
                            RCOV_LOAD_BC = 0,//todo: build logic to calculate base currency loading for default covers
                            RCOV_LOAD_FC = 0,//todo: build logic to calculate foreign currency loading for default covers
                            RCOV_ANNL_PREM_BC = Math.Round((decimal)(annlPremium), 2),
                            RCOV_ANNL_PREM_FC = Math.Round((decimal)(annlPremium / defCoversJson.CUR_RATE), 2),
                            RCOV_GROSS_PREM_BC = Math.Round((decimal)(cover.MRC_DFT_PREM), 2),
                            RCOV_GROSS_PREM_FC = Math.Round((decimal)(cover.MRC_DFT_PREM / defCoversJson.CUR_RATE), 2),
                            RCOV_DISC_YN = "N",
                            RCOV_LOAD_YN = "N",
                            RCOV_NET_PREM_BC = Math.Round((decimal)((cover.MRC_DFT_PREM - 0 + 0) * 1), 2),
                            RCOV_NET_PREM_FC = Math.Round((decimal)((cover.MRC_DFT_PREM / defCoversJson.CUR_RATE - 0 + 0) / 1), 2),
                            RCOV_NO = 0,
                            RCOV_RATE = cover.MRC_DFT_RATE,
                            RCOV_RISK_NO = 0,
                            RCOV_RISK_SYS_ID = 0,
                            RCOV_POLH_DOC_NO = 0,
                            RCOV_RI_PREM_YN = "",
                            RCOV_RI_SI_YN = "",
                            RCOV_SI_BC = cover.MRC_DFT_SI,
                            RCOV_SI_FC = Math.Round((decimal)(cover.MRC_DFT_SI / defCoversJson.CUR_RATE), 2),
                            RCOV_SYS_ID = (int)seq,
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
            return rskCoverList;
        }

        //Get Risks for Risk LOV
        [HttpPost]
        [Route("api/MotorRisksCovers/RiskFees")]
        public IEnumerable<object> getRisksFees(MotorRisksJSON riskFeeJson)
        {
            var riskFees = MotorRisksCoversMdl.GetRiskFees(riskFeeJson.MRF_MPR_SYS_ID);

            return riskFees;
        }


        //Get Risks for Risk LOV
        [HttpPost]
        [Route("api/MotorRisksCovers/motorRisk")]
        public IEnumerable<object> getMotoRisks(MotorRisksJSON riskJson)
        {

            var riskLst = MotorTarrifMdl.get_MotorRisk_Lov(riskJson.PRD_CODE).ToList();

            return riskLst;
        }

        //Get Covers for the Risk covers LOV
        [HttpPost]
        [Route("api/MotorRisksCovers/RiskCoversLOV")]
        public object getRisksCoverLov(RisksCoversLovJSON riskCoverJson)
        {
            try
            {
                var riskCoverLst = MotorTarrifMdl.GetMotorRiskCovers(riskCoverJson.PROD_RISK_SYS_ID).ToList();

                return riskCoverLst;
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

    }
}
