using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models
{
    // Get additional
    public class MotorRisksCoversMdl : Model
    {
        public static IEnumerable<MS_MOTOR_RISK_COVER> GetAdditionalCovers(int rskID, string CoverCode)
        {
            var db = new SibaModel();
            try
            {

                return (from cov in db.MS_MOTOR_RISK_COVER where cov.MRC_MPR_SYS_ID == rskID  && cov.MRC_CVR_CODE == CoverCode select cov).ToList()
                .Select(cv => new MS_MOTOR_RISK_COVER
                {
                    MRC_AGE_LOAD = cv.MRC_AGE_LOAD,
                    MRC_CRTE_BY = cv.MRC_CRTE_BY,
                    MRC_CRTE_DATE = cv.MRC_CRTE_DATE,
                    MRC_CVR_CODE = cv.MRC_CVR_CODE,
                    MRC_DFT_PREM = cv.MRC_DFT_PREM,
                    MRC_DFT_RATE = cv.MRC_DFT_RATE,
                    MRC_DFT_YN = cv.MRC_DFT_YN,
                    MRC_EXCESS_LOAD = cv.MRC_EXCESS_LOAD,
                    MRC_MAX_RATE = cv.MRC_MAX_RATE,
                    MRC_MIN_AGE = cv.MRC_MIN_AGE,
                    MRC_MIN_RATE = cv.MRC_MIN_RATE,
                    MRC_MIN_SEATS = cv.MRC_MIN_SEATS,
                    MRC_MOD_BY = cv.MRC_MOD_BY,
                    MRC_MOD_DATE = cv.MRC_MOD_DATE,
                    MRC_MPR_SYS_ID = cv.MRC_MPR_SYS_ID,
                    MRC_SEAT_LOAD = cv.MRC_SEAT_LOAD,
                    MRC_STATUS = cv.MRC_STATUS,
                    MRC_DFT_SI = cv.MRC_DFT_SI,
                    // cv.MS_MOTOR_PROD_RISK =
                });
            }
            catch (Exception)
            {
                return null;
            }

        }

        //get default covers
        public static IEnumerable <MS_MOTOR_RISK_COVER> GetMotorRiskCovers(int rskID)
        {
            var db = new SibaModel();
            try
            {
                
                return (from cov in db.MS_MOTOR_RISK_COVER where cov.MRC_MPR_SYS_ID == rskID select cov).ToList()
                .Select(cv => new MS_MOTOR_RISK_COVER
                {   //  
                    MRC_AGE_LOAD = cv.MRC_AGE_LOAD ,
                    MRC_CRTE_BY = cv.MRC_CRTE_BY,
                    MRC_CRTE_DATE = cv.MRC_CRTE_DATE ,
                    MRC_CVR_CODE = cv.MRC_CVR_CODE ,
                    MRC_DFT_PREM = cv.MRC_DFT_PREM ,
                    MRC_DFT_RATE = cv.MRC_DFT_RATE,                  
                    MRC_DFT_YN = cv.MRC_DFT_YN ,
                    MRC_EXCESS_LOAD = cv.MRC_EXCESS_LOAD,
                    MRC_MAX_RATE = cv.MRC_MAX_RATE,
                    MRC_MIN_AGE = cv.MRC_MIN_AGE,
                    MRC_MIN_RATE = cv.MRC_MIN_RATE ,
                    MRC_MIN_SEATS = cv.MRC_MIN_SEATS ,
                    MRC_MOD_BY = cv.MRC_MOD_BY,
                    MRC_MOD_DATE = cv.MRC_MOD_DATE ,
                    MRC_MPR_SYS_ID = cv.MRC_MPR_SYS_ID,
                    MRC_SEAT_LOAD = cv.MRC_SEAT_LOAD ,
                    MRC_STATUS = cv.MRC_STATUS ,
                    MRC_DFT_SI = cv.MRC_DFT_SI,
                   // cv.MS_MOTOR_PROD_RISK =
                });
            }
            catch (Exception)
            {
                return null;
            }
            
        }

        public static IEnumerable<object> get_MotorRisks(string ProdCode, int riskID)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.MS_MOTOR_PROD_RISK
                        where risk.MPR_MTP_PRD_CODE == ProdCode && risk.MPR_STATUS == "A"
                        select new
                        {
                            RISK_CODE = risk.MPR_RISK_CODE,
                            RISK_ID = risk.MPR_SYS_ID
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

        //Risk Fees
        public static IEnumerable<object> GetRiskFees(int rskID)
        {
            var db = new SibaModel();
            try
            {
                return (from rskfee in db.MS_MOTOR_RISK_FEES
                        where rskfee.MRF_MPR_SYS_ID == rskID
                        select new
                        {
                            VEH_FEE_CODE = rskfee.MRF_FEE_CODE,
                            VEH_FEE_NAME = rskfee.MS_COMPULSORY_FEES.FEE_NAME,
                            VEH_FEE_FC_AMOUNT = rskfee.MRF_FEE_AMOUNT,
                            VEH_FEE_BC_AMOUNT = rskfee.MRF_FEE_AMOUNT,
                            VEH_FEE_RK_NO = rskfee.MRF_MPR_SYS_ID,
                            VEH_FEE_RK_CODE = "",
                            VEH_SYS_ID = ""
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }

        // Risks LOV
        public static IEnumerable<object> get_MotorRisk_Lov(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.MS_MOTOR_PROD_RISK where risk.MPR_MTP_PRD_CODE == ProdCode && risk.MPR_STATUS == "A"
                        select new 
                        {
                            RISK_CODE = risk.MPR_RISK_CODE,
                           // MS_UDW_MOTOR_RISK = MotorRiskMdl.get_motorrisk(risk.MPR_RISK_CODE),
                            RISK_ID = risk.MPR_SYS_ID
                        });

            }
            catch (Exception)
            {
                return null;
            }       
        }

        //Risks Covers Sequence
        public static decimal GetRiskCoverSeq()
        {
            var db = new SibaModel();
            return db.Database.SqlQuery<decimal>("SELECT RISK_COVERS_SEQ.NEXTVAL FROM DUAL").Single();
        }
    }
}