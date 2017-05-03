using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ProductRiskFeeMdl : Model
    {
        public static MS_PRODUCT_RISK_FEES get_prodriskfee(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_PRODUCT_RISK_FEES where mdl.PRF_PDT_CODE == code select mdl).ToList().Select(mdl => new MS_PRODUCT_RISK_FEES
            {
                PRF_SYS_ID = mdl.PRF_SYS_ID,
                PRF_FEE_CODE = mdl.PRF_FEE_CODE,
                PRF_PDT_CODE = mdl.PRF_PDT_CODE,
                PRF_FEE_AMOUNT = mdl.PRF_FEE_AMOUNT,
                PRF_CRTE_BY = mdl.PRF_CRTE_BY,
                PRF_CRTE_DATE = mdl.PRF_CRTE_DATE,
                PRF_STATUS = mdl.PRF_STATUS
            }).Single();
        }

        public static IEnumerable<MS_PRODUCT_RISK_FEES> get_prodriskfees()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_PRODUCT_RISK_FEES where mdl.PRF_STATUS == "A" select mdl).ToList().Select(mdl => new MS_PRODUCT_RISK_FEES
            {
                PRF_SYS_ID = mdl.PRF_SYS_ID,
                PRF_FEE_CODE = mdl.PRF_FEE_CODE,
                PRF_PDT_CODE = mdl.PRF_PDT_CODE,
                PRF_FEE_AMOUNT = mdl.PRF_FEE_AMOUNT,
                PRF_CRTE_BY = mdl.PRF_CRTE_BY,
                PRF_CRTE_DATE = mdl.PRF_CRTE_DATE,
                PRF_STATUS = mdl.PRF_STATUS
            });
        }

        public static IEnumerable<object> get_lov_prodriskfee()
        {
            var db = new SibaModel();
            return (from exch in db.MS_PRODUCT_RISK_FEES where exch.PRF_STATUS == "A" select new { CODE = exch.PRF_PDT_CODE, NAME = exch.PRF_FEE_AMOUNT });
        }

        public static bool save_prodriskfee(MS_PRODUCT_RISK_FEES cty)
        {
            var db = new SibaModel();
            if (cty.PRF_STATUS == "A")
            {
                var db_motorriskfee = db.MS_PRODUCT_RISK_FEES.Find(cty.PRF_SYS_ID);
                if (db_motorriskfee != null)
                {
                    db.MS_PRODUCT_RISK_FEES.Attach(db_motorriskfee);
                    db_motorriskfee.Map(cty);
                }

            }
            else if (cty.PRF_STATUS == "U")
            {
                cty.PRF_STATUS = "A";
                db.MS_PRODUCT_RISK_FEES.Add(cty);
            }
            else if (cty.PRF_STATUS == "D")
            {
                var db_motorriskfee = db.MS_PRODUCT_RISK_FEES.Find(cty.PRF_SYS_ID);
                if (db_motorriskfee != null)
                {
                    db.MS_PRODUCT_RISK_FEES.Attach(db_motorriskfee);
                    db_motorriskfee.PRF_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_PRODUCT_RISK_FEES> search_prodriskfees(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_PRODUCT_RISK_FEES
                    where (are.PRF_PDT_CODE.ToLower().Contains(q.ToLower()) || are.PRF_PDT_CODE.ToString().Contains(q.ToLower())
                          || are.PRF_FEE_AMOUNT.ToString().Contains(q.ToLower())) && are.PRF_STATUS == "A"
                    select are).ToList();
        }

        public static IEnumerable<object> RiskFees (string riskCode)
        {
            var db = new SibaModel();
            return (from rskfee in db.MS_PRODUCT_RISK_FEES
                    where rskfee.PRF_PDT_CODE == riskCode
                    select new
                    {
                        BOND_FEE_CODE = rskfee.PRF_FEE_CODE,
                        BOND_FEE_NAME = rskfee.MS_COMPULSORY_FEES.FEE_NAME,
                        BOND_FEE_FC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        BOND_FEE_BC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        BOND_FEE_RK_NO = rskfee.PRF_SYS_ID,
                        BOND_FEE_RK_CODE = "",
                        BOND_FEE_SYS_ID = ""
                    });
        }

        public static IEnumerable<object> FireFees(string riskCode)
        {
            var db = new SibaModel();
            return (from rskfee in db.MS_PRODUCT_RISK_FEES
                    where rskfee.PRF_PDT_CODE == riskCode
                    select new
                    {
                        FIRE_FEE_CODE = rskfee.PRF_FEE_CODE,
                        FIRE_FEE_NAME = rskfee.MS_COMPULSORY_FEES.FEE_NAME,
                        FIRE_FEE_FC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        FIRE_FEE_BC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        FIRE_FEE_RK_NO = rskfee.PRF_SYS_ID,
                        FIRE_FEE_RK_CODE = "",
                        FIRE_FEE_SYS_ID = ""
                    });
        }

        public static IEnumerable<object> TravelFees(string riskCode)
        {
            var db = new SibaModel();
            return (from rskfee in db.MS_PRODUCT_RISK_FEES
                    where rskfee.PRF_PDT_CODE == riskCode
                    select new
                    {
                        TRA_FEE_CODE = rskfee.PRF_FEE_CODE,
                        TRA_FEE_NAME = rskfee.MS_COMPULSORY_FEES.FEE_NAME,
                        TRA_FEE_FC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        TRA_FEE_BC_AMOUNT = rskfee.PRF_FEE_AMOUNT,
                        TRA_FEE_RK_NO = rskfee.PRF_SYS_ID,
                        TRA_FEE_RK_CODE = "",
                        TRA_FEE_SYS_ID = "" 
                    });
        }
    }
}