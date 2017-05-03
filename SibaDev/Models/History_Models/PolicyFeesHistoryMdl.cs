using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.History_Entities;

namespace SibaDev.Models.History_Models
{
    public class PolicyFeesHistoryMdl:Model
    {

        public static INS_UDW_POL_FEES GetHPolFees(int polId)
        {
            var db = new SibaModel();
            using (db)
            {
                return
                    (from fee in db.INS_UDW_HPOL_FEES where fee.POL_FEE_POL_SYS_ID == polId select fee).ToList()
                        .Select(f => new INS_UDW_POL_FEES
                        {
                            POL_FEE_POL_SYS_ID = f.POL_FEE_POL_SYS_ID,
                            POL_FEE_CODE = f.POL_FEE_CODE,
                            POL_FEE_BC_AMOUNT = f.POL_FEE_BC_AMOUNT,
                            POL_FEE_CRTE_BY = f.POL_FEE_CRTE_BY,
                            POL_FEE_CRTE_DATE = f.POL_FEE_CRTE_DATE,
                            POL_FEE_FC_AMOUNT = f.POL_FEE_FC_AMOUNT,
                            POL_FEE_FEE_END_NO = f.POL_FEE_FEE_END_NO,
                            POL_FEE_MOD_BY = f.POL_FEE_MOD_BY,
                            POL_FEE_MOD_DATE = f.POL_FEE_MOD_DATE,
                            POL_FEE_STATUS = f.POL_FEE_STATUS,
                            POL_FEE_SYS_ID = (int)f.POL_FEE_SYS_ID
                        }).SingleOrDefault();
            }
        }

        public static bool SaveHistoryPolicFees(INS_UDW_POL_FEES fee)
        {
            var db = new SibaModel();
            using (db)
            {
                var historyFee = new INS_UDW_HPOL_FEES();
                historyFee.Map(fee);
                db.INS_UDW_HPOL_FEES.Add(historyFee);
                db.SaveChanges();
                return true;
            }
        }
    }
}