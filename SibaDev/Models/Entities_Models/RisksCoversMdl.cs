using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models
{
    public class RisksCoversMdl : Model
    {
        public static IEnumerable<MST_UWD_PRODUCT_COVERS> GetAdditionalProductCovers(string prodCode, string coverCode)
        {
            var db = new SibaModel();
            try
            {
                return (from cov in db.MST_UWD_PRODUCT_COVERS where cov.PCV_PDT_CODE == prodCode && cov.PCV_COV_CODE == coverCode select cov).ToList()
                .Select(cv => new MST_UWD_PRODUCT_COVERS
                {
                    PCV_STATUS = cv.PCV_STATUS,
                    PCV_SI = cv.PCV_SI,
                    PCV_PDT_CODE = cv.PCV_PDT_CODE,
                    PCV_DFT = cv.PCV_DFT,
                    PCV_COV_CODE = cv.PCV_COV_CODE,
                    PCV_DISC = cv.PCV_DISC,
                    PCV_LOAD = cv.PCV_LOAD,
                    PCV_DEF_RATE = cv.PCV_DEF_RATE,
                    PCV_CRTE_BY = cv.PCV_CRTE_BY,
                    PCV_CRTE_DATE = cv.PCV_CRTE_DATE,
                    PCV_MOD_BY = cv.PCV_MOD_BY,
                    PCV_MOD_DATE = cv.PCV_MOD_DATE,
                    PCV_SYS_ID = cv.PCV_SYS_ID,
                    PCV_DEF_PREM = cv.PCV_DEF_PREM
                });
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MST_UWD_PRODUCT_COVERS> GetProductRiskCovers(string prodCode)
        {
            var db = new SibaModel();
            return (from cov in db.MST_UWD_PRODUCT_COVERS where cov.PCV_PDT_CODE == prodCode select cov).ToList()
                    .Select(cv => new MST_UWD_PRODUCT_COVERS
                    {
                        PCV_STATUS = cv.PCV_STATUS,
                        PCV_SI = cv.PCV_SI,
                        PCV_PDT_CODE = cv.PCV_PDT_CODE,
                        PCV_DFT = cv.PCV_DFT,
                        PCV_COV_CODE = cv.PCV_COV_CODE,
                        PCV_DISC = cv.PCV_DISC,
                        PCV_LOAD = cv.PCV_LOAD,
                        PCV_DEF_RATE = cv.PCV_DEF_RATE,
                        PCV_CRTE_BY = cv.PCV_CRTE_BY,
                        PCV_CRTE_DATE = cv.PCV_CRTE_DATE,
                        PCV_MOD_BY = cv.PCV_MOD_BY,
                        PCV_MOD_DATE = cv.PCV_MOD_DATE,
                        PCV_SYS_ID = cv.PCV_SYS_ID,
                        PCV_DEF_PREM = cv.PCV_DEF_PREM
                    });

        }


        public static IEnumerable<MST_UWD_PRODUCT_COVERS> GetRiskCovers(string prodCode)
        {
            var db = new SibaModel();
            try
            {
                return (from cov in db.MST_UWD_PRODUCT_COVERS where cov.PCV_PDT_CODE == prodCode select cov).ToList()
                   .Select(cv => new MST_UWD_PRODUCT_COVERS
                   {
                       PCV_STATUS = cv.PCV_STATUS,
                       PCV_SI = cv.PCV_SI,
                       PCV_PDT_CODE = cv.PCV_PDT_CODE,
                       PCV_DFT = cv.PCV_DFT,
                       PCV_COV_CODE = cv.PCV_COV_CODE,
                       PCV_DISC = cv.PCV_DISC,
                       PCV_LOAD = cv.PCV_LOAD,
                       PCV_DEF_RATE = cv.PCV_DEF_RATE,
                       PCV_CRTE_BY = cv.PCV_CRTE_BY,
                       PCV_CRTE_DATE = cv.PCV_CRTE_DATE,
                       PCV_MOD_BY = cv.PCV_MOD_BY,
                       PCV_MOD_DATE = cv.PCV_MOD_DATE,
                       PCV_SYS_ID = cv.PCV_SYS_ID,
                       PCV_DEF_PREM = cv.PCV_DEF_PREM
                   });
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<object> get_ProductRisk_Lov(string ProdCode)
        {
            var db = new SibaModel();
            return (from risk in db.MST_UWD_PRODUCT
                        where risk.PDT_CLASS == ProdCode && risk.PDT_STATUS == "A"
                        select new
                        {
                            RISK_CODE = risk.PDT_CODE,
                            RISK_NAME = risk.PDT_NAME
                        });
        }

        public static decimal GetRiskCoverSeq()
        {
            var db = new SibaModel();
            return db.Database.SqlQuery<decimal>("SELECT COVERS_SEQ.NEXTVAL FROM DUAL").Single();
        }
    }
}