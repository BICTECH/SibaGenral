using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class OccupancyMdl : Model
    {
        public static MS_SYS_OCCUPANCY get_occupancy(string code)
        {

            var db = new SibaModel();
            try
            {
                return (from occup in db.MS_SYS_OCCUPANCY where occup.MSO_CODE == code select occup).ToList().Select(occup => new MS_SYS_OCCUPANCY
                {
                    MSO_CODE = occup.MSO_CODE,
                    MSO_NAME = occup.MSO_NAME,
                    MSO_DESC = occup.MSO_DESC,
                    MSO_CRTE_BY = occup.MSO_CRTE_BY,
                    MSO_CRTE_DATE = occup.MSO_CRTE_DATE,
                    MSO_STATUS = occup.MSO_STATUS,
                    MSO_MOD_BY = occup.MSO_MOD_BY,
                    MSO_MOD_DATE = occup.MSO_MOD_DATE
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_SYS_OCCUPANCY> get_occupancys()
        {
            var db = new SibaModel();
            return (from occup in db.MS_SYS_OCCUPANCY where occup.MSO_STATUS == "A" select occup).ToList().Select(occup => new MS_SYS_OCCUPANCY
            {
                MSO_CODE = occup.MSO_CODE,
                MSO_NAME = occup.MSO_NAME,
                MSO_DESC = occup.MSO_DESC,
                MSO_CRTE_BY = occup.MSO_CRTE_BY,
                MSO_CRTE_DATE = occup.MSO_CRTE_DATE,
                MSO_STATUS = occup.MSO_STATUS,
                MSO_MOD_BY = occup.MSO_MOD_BY,
                MSO_MOD_DATE = occup.MSO_MOD_DATE
            });
        }

        public static IEnumerable<object> get_lov_occupancy()
        {
            var db = new SibaModel();
            return (from occup in db.MS_SYS_OCCUPANCY where occup.MSO_STATUS == "A" select new { CODE = occup.MSO_CODE, NAME = occup.MSO_NAME });
        }

        public static bool save_occupancy(MS_SYS_OCCUPANCY cty)
        {
            var db = new SibaModel();
            if (cty.MSO_STATUS == "A")
            {
                var db_country = db.MS_SYS_COUNTRY.Find(cty.MSO_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_COUNTRY.Attach(db_country);
                    db_country.Map(cty);
                }

            }
            else if (cty.MSO_STATUS == "U")
            {
                cty.MSO_STATUS = "A";
                db.MS_SYS_OCCUPANCY.Add(cty);
            }
            else if (cty.MSO_STATUS == "D")
            {
                var db_country = db.MS_SYS_COUNTRY.Find(cty.MSO_CODE);
                if (db_country != null)
                {
                    db.MS_SYS_COUNTRY.Attach(db_country);
                    db_country.CNT_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_OCCUPANCY> search_occupancy(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_OCCUPANCY
                    where (cty.MSO_CODE.ToLower().Contains(q.ToLower()) || cty.MSO_NAME.ToLower().Contains(q.ToLower())
                        || cty.MSO_DESC.ToLower().Contains(q.ToLower())) && cty.MSO_STATUS == "A"
                    select cty).ToList();
        }
    }
}