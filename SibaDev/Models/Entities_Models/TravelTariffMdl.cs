using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class TravelTariffMdl : Model
    {
        public static INS_UDW_TRAVEL_TARIFF get_ttariff(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from ttariffs in db.INS_UDW_TRAVEL_TARIFF where ttariffs.TRT_PRD_CODE == code select ttariffs).ToList().Select(ttariffs => new INS_UDW_TRAVEL_TARIFF
                {
                    TRT_PRD_CODE = ttariffs.TRT_PRD_CODE,
                    TRT_PRM = ttariffs.TRT_PRM,
                    TRT_DAYS_FROM = ttariffs.TRT_DAYS_FROM,
                    TRT_DAYS_TO = ttariffs.TRT_DAYS_TO,
                    TRT_CRTE_BY = ttariffs.TRT_CRTE_BY,
                    TRT_CRTE_DATE = ttariffs.TRT_CRTE_DATE,
                    TRT_STATUS = ttariffs.TRT_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<INS_UDW_TRAVEL_TARIFF> get_ttariffs()
        {
            var db = new SibaModel();
            return (from ttariffs in db.INS_UDW_TRAVEL_TARIFF where ttariffs.TRT_STATUS == "A" select ttariffs).ToList().Select(ttariffs => new INS_UDW_TRAVEL_TARIFF
            {
                TRT_PRD_CODE = ttariffs.TRT_PRD_CODE,
                TRT_PRM = ttariffs.TRT_PRM,
                TRT_DAYS_FROM = ttariffs.TRT_DAYS_FROM,
                TRT_DAYS_TO = ttariffs.TRT_DAYS_TO,
                TRT_CRTE_BY = ttariffs.TRT_CRTE_BY,
                TRT_CRTE_DATE = ttariffs.TRT_CRTE_DATE,
                TRT_STATUS = ttariffs.TRT_STATUS
            });
        }

        public static IEnumerable<object> get_lov_ttariffs()
        {
            var db = new SibaModel();
            return (from ttariffs in db.INS_UDW_TRAVEL_TARIFF where ttariffs.TRT_STATUS == "A" select new { CODE = ttariffs.TRT_PRD_CODE, NAME = ttariffs.TRT_PRM });
        }

        public static bool save_ttariff(INS_UDW_TRAVEL_TARIFF cty)
        {
            var db = new SibaModel();
            if (cty.TRT_STATUS == "A")
            {
                var db_ttariff = db.INS_UDW_TRAVEL_TARIFF.Find(cty.TRT_SYS_ID);
                if (db_ttariff != null)
                {
                    db.INS_UDW_TRAVEL_TARIFF.Attach(db_ttariff);
                    db_ttariff.Map(cty);
                }

            }
            else if (cty.TRT_STATUS == "U")
            {
                cty.TRT_STATUS = "A";
                db.INS_UDW_TRAVEL_TARIFF.Add(cty);
            }
            else if (cty.TRT_STATUS == "D")
            {
                var db_ttariff = db.INS_UDW_TRAVEL_TARIFF.Find(cty.TRT_SYS_ID);
                if (db_ttariff != null)
                {
                    db.INS_UDW_TRAVEL_TARIFF.Attach(db_ttariff);
                    db_ttariff.TRT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<INS_UDW_TRAVEL_TARIFF> search_ttariffs(string q)
        {
            var db = new SibaModel();
            return (from cty in db.INS_UDW_TRAVEL_TARIFF
                    where (cty.TRT_PRD_CODE.ToLower().Contains(q.ToLower()) || cty.TRT_PRM.ToString().Contains(q.ToLower())
                     || cty.TRT_DAYS_FROM.ToString().Contains(q.ToLower()) || cty.TRT_DAYS_TO.ToString().Contains(q.ToLower())) 
                     && cty.TRT_STATUS == "A"
                    select cty).ToList();

        }
    }
}