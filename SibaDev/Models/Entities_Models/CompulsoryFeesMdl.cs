using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CompulsoryFeesMdl : Model
    {
        public static MS_COMPULSORY_FEES get_CompFees(string code)
        {
            var db = new SibaModel();
            return (from comfee in db.MS_COMPULSORY_FEES where comfee.FEE_CODE == code select comfee).ToList().Select(comfee => new MS_COMPULSORY_FEES
            {
                FEE_CODE = comfee.FEE_CODE,
                FEE_NAME = comfee.FEE_NAME,
                FEE_DESC = comfee.FEE_DESC,
                FEE_CRTE_BY = comfee.FEE_CRTE_BY,
                FEE_CRTE_DATE = comfee.FEE_CRTE_DATE,
                FEE_FROM_DATE = comfee.FEE_FROM_DATE,
                FEE_MOD_BY = comfee.FEE_MOD_BY,
                FEE_MOD_DATE = comfee.FEE_MOD_DATE,
                FEE_AMOUNT = comfee.FEE_AMOUNT,
                FEE_MODIFY_YN = comfee.FEE_MODIFY_YN,
                FEE_REFUND_YN = comfee.FEE_REFUND_YN,
                FEE_STATUS = comfee.FEE_STATUS,
                FEE_TO_DATE = comfee.FEE_TO_DATE,
                MS_ACCT_MAIN_ACCOUNT = MainAccountMdl.GetMainAccount(comfee.FEE_MAIN_ACCOUNT),
                MS_ACCT_SUB_ACCOUNT = SubAccountMdl.GetSubAccount(comfee.FEE_SUB_ACCOUNT)
            }).Single();
        }

        public static IEnumerable<MS_UDW_COVERS> get_covers()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_COVERS where mdl.CVR_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_COVERS
            {
                CVR_CODE = mdl.CVR_CODE,
                CVR_NAME = mdl.CVR_NAME,
                CVR_DESCRIPTION = mdl.CVR_DESCRIPTION,
                CVR_TYPE = mdl.CVR_TYPE,
                CVR_BASIC_COVER = mdl.CVR_BASIC_COVER,
                CVR_RATED = mdl.CVR_RATED,
                CVR_RATE_CHANGE = mdl.CVR_RATE_CHANGE,
                CVR_SI_CHANGE = mdl.CVR_SI_CHANGE,
                CVR_USER_PREMIUM = mdl.CVR_USER_PREMIUM,
                CVR_PREM_REFUND = mdl.CVR_PREM_REFUND,
                CVR_LEVELS = mdl.CVR_LEVELS,
                CVR_RI_APPLICABLE = mdl.CVR_RI_APPLICABLE,
                CVR_CRTE_BY = mdl.CVR_CRTE_BY,
                CVR_CRTE_DATE = mdl.CVR_CRTE_DATE,
                CVR_STATUS = mdl.CVR_STATUS
            });
        }

        public static IEnumerable<object> get_lov_covers()
        {
            var db = new SibaModel();
            return (from cover in db.MS_UDW_COVERS where cover.CVR_STATUS == "A" select new { CODE = cover.CVR_CODE, NAME = cover.CVR_NAME });
        }

        public static bool save_cover(MS_UDW_COVERS are)
        {
            var db = new SibaModel();
            if (are.CVR_STATUS == "A")
            {
                var db_cover = db.MS_UDW_COVERS.Find(are.CVR_CODE);
                if (db_cover != null)
                {
                    db.MS_UDW_COVERS.Attach(db_cover);
                    db_cover.Map(are);
                }

            }
            else if (are.CVR_STATUS == "U")
            {
                are.CVR_STATUS = "A";
                db.MS_UDW_COVERS.Add(are);
            }
            else if (are.CVR_STATUS == "D")
            {
                var db_cover = db.MS_UDW_COVERS.Find(are.CVR_CODE);
                if (db_cover != null)
                {
                    db.MS_UDW_COVERS.Attach(db_cover);
                    db_cover.CVR_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_COVERS> search_covers(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_COVERS
                    where (are.CVR_CODE.ToLower().Contains(q.ToLower()) || are.CVR_NAME.ToLower().Contains(q.ToLower())
                          || are.CVR_DESCRIPTION.ToLower().Contains(q.ToLower()) || are.CVR_TYPE.ToLower().Contains(q.ToLower())
                          || are.CVR_BASIC_COVER.ToLower().Contains(q.ToLower()) || are.CVR_RATED.ToLower().Contains(q.ToLower())
                          || are.CVR_RATE_CHANGE.ToLower().Contains(q.ToLower()) || are.CVR_SI_CHANGE.ToLower().Contains(q.ToLower())
                          || are.CVR_USER_PREMIUM.ToLower().Contains(q.ToLower()) || are.CVR_PREM_REFUND.ToLower().Contains(q.ToLower())
                          || are.CVR_LEVELS.ToLower().Contains(q.ToLower()) || are.CVR_RI_APPLICABLE.ToLower().Contains(q.ToLower())) && are.CVR_STATUS == "A"
                    select are).ToList();
        }
    }
}