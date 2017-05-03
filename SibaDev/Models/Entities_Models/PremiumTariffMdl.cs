using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class PremiumTariffMdl : Model
    {

        public static MS_UDW_PREM_TARRIFS get_premiumtariff(string code)        {

            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_UDW_PREM_TARRIFS where mdl.TFF_CODE == code select mdl).ToList().Select(mdl => new MS_UDW_PREM_TARRIFS
                {
                    TFF_CODE = mdl.TFF_CODE,
                    TFF_CVR_CODE = mdl.TFF_CVR_CODE,
                    TFF_MRK_CODE = mdl.TFF_MRK_CODE,
                    TFF_PRD_CODE = mdl.TFF_PRD_CODE,
                    TFF_DEFAULT_AMT = mdl.TFF_DEFAULT_AMT,
                    TFF_DEFAULT_RATE = mdl.TFF_DEFAULT_RATE,
                    TFF_MAX_RATE = mdl.TFF_MAX_RATE,
                    TFF_MIN_AMT = mdl.TFF_MIN_AMT,
                    TFF_MIN_RATE = mdl.TFF_MIN_RATE,
                    TFF_PP_AMT = mdl.TFF_PP_AMT,
                    TFF_CRTE_BY = mdl.TFF_CRTE_BY,
                    TFF_CRTE_DATE = mdl.TFF_CRTE_DATE,
                    TFF_STATUS = mdl.TFF_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }


        public static object GetTarrifs(string rskCode)
        {
            var db = new SibaModel();
            return (from t in db.MS_UDW_PREM_TARRIFS where t.TFF_MRK_CODE == rskCode select t.TFF_CODE).Select(get_premiumtariff);
        }


        public static IEnumerable<MS_UDW_PREM_TARRIFS> get_premiumtariffs( )
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_PREM_TARRIFS where mdl.TFF_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_PREM_TARRIFS
            {
                TFF_CODE = mdl.TFF_CODE,
                TFF_CVR_CODE = mdl.TFF_CVR_CODE,
                TFF_MRK_CODE = mdl.TFF_MRK_CODE,
                TFF_PRD_CODE = mdl.TFF_PRD_CODE,
                TFF_DEFAULT_AMT = mdl.TFF_DEFAULT_AMT,
                TFF_DEFAULT_RATE = mdl.TFF_DEFAULT_RATE,
                TFF_MAX_RATE = mdl.TFF_MAX_RATE,
                TFF_MIN_AMT = mdl.TFF_MIN_AMT,
                TFF_MIN_RATE = mdl.TFF_MIN_RATE,
                TFF_PP_AMT = mdl.TFF_PP_AMT,
                TFF_CRTE_BY = mdl.TFF_CRTE_BY,
                TFF_CRTE_DATE = mdl.TFF_CRTE_DATE,
                TFF_STATUS = mdl.TFF_STATUS
            });
        }

        public static bool save_premiumtariff(MS_UDW_PREM_TARRIFS are)
        {
            var db = new SibaModel();
            if (are.TFF_STATUS == "A")
            {
                var db_premiumtariff = db.MS_UDW_PREM_TARRIFS.Find(are.TFF_CODE);
                if (db_premiumtariff != null)
                {
                    db.MS_UDW_PREM_TARRIFS.Attach(db_premiumtariff);
                    db_premiumtariff.Map(are);
                }

            }
            else if (are.TFF_STATUS == "U")
            {
                are.TFF_STATUS = "A";
                db.MS_UDW_PREM_TARRIFS.Add(are);
            }
            else if (are.TFF_STATUS == "D")
            {
                var db_premiumtariff = db.MS_UDW_PREM_TARRIFS.Find(are.TFF_CODE);
                if (db_premiumtariff != null)
                {
                    db.MS_UDW_PREM_TARRIFS.Attach(db_premiumtariff);
                    db_premiumtariff.TFF_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_PREM_TARRIFS> search_premiumtariffs(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_PREM_TARRIFS
                    where (are.TFF_CODE.ToString().Contains(q.ToLower()) || are.TFF_CVR_CODE.ToLower().Contains(q.ToLower()) || are.TFF_PRD_CODE.ToLower().Contains(q.ToLower())
                          || are.TFF_MRK_CODE.ToString().Contains(q.ToLower()) || are.TFF_MIN_RATE.ToString().Contains(q.ToLower())
                          || are.TFF_MAX_RATE.ToString().Contains(q.ToLower()) || are.TFF_DEFAULT_RATE.ToString().Contains(q.ToLower())
                          || are.TFF_PP_AMT.ToString().Contains(q.ToLower()) || are.TFF_MIN_AMT.ToString().Contains(q.ToLower())
                          || are.TFF_DEFAULT_AMT.ToString().Contains(q.ToLower())) && are.TFF_STATUS == "A"
                    select are).ToList();
        }
    }
}