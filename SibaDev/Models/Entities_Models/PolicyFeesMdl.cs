using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;
using SibaDev.System_Contants;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class PolicyFeesMdl : Model
    {
        public static INS_UDW_POL_FEES get_fees(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_UDW_POL_FEES where r.POL_FEE_SYS_ID == code select r).ToList().Select(r => new INS_UDW_POL_FEES
                {
                    POL_FEE_SYS_ID = r.POL_FEE_SYS_ID,
                    POL_FEE_CODE = r.POL_FEE_CODE,
                    POL_FEE_BC_AMOUNT = r.POL_FEE_BC_AMOUNT,
                    POL_FEE_FC_AMOUNT = r.POL_FEE_FC_AMOUNT,
                    POL_FEE_FEE_END_NO = r.POL_FEE_FEE_END_NO,
                    POL_FEE_POL_SYS_ID = r.POL_FEE_POL_SYS_ID,
                    POL_FEE_CRTE_BY = r.POL_FEE_CRTE_BY,
                    POL_FEE_CRTE_DATE = r.POL_FEE_CRTE_DATE,
                    POL_FEE_MOD_BY = r.POL_FEE_MOD_BY,
                    POL_FEE_MOD_DATE = r.POL_FEE_MOD_DATE,
                    POL_FEE_STATUS = r.POL_FEE_STATUS,
       
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

    }
}