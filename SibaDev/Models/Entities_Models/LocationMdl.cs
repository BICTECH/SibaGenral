using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class LocationMdl : Model
    {
        public static MS_SYS_LOCATION get_location(string code)
        {
            var db = new SibaModel();
            return (from location in db.MS_SYS_LOCATION where location.LOC_CODE == code select location).ToList().Select(location => new MS_SYS_LOCATION
            {
                LOC_CODE = location.LOC_CODE,
                LOC_NAME = location.LOC_NAME,
                LOC_DESC = location.LOC_DESC,
                LOC_ARE_CODE = location.LOC_ARE_CODE,
                LOC_ADDR1 = location.LOC_ADDR1,
                LOC_ADDR2 = location.LOC_ADDR2,
                LOC_CRTE_BY = location.LOC_CRTE_BY,
                LOC_CRTE_DATE = location.LOC_CRTE_DATE,
                LOC_STATUS = location.LOC_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_LOCATION> get_locations()
        {
            var db = new SibaModel();
            return (from location in db.MS_SYS_LOCATION where location.LOC_STATUS == "A" select location).ToList().Select(location => new MS_SYS_LOCATION
            {
                LOC_CODE = location.LOC_CODE,
                LOC_NAME = location.LOC_NAME,
                LOC_DESC = location.LOC_DESC,
                LOC_ARE_CODE = location.LOC_ARE_CODE,
                LOC_ADDR1 = location.LOC_ADDR1,
                LOC_ADDR2 = location.LOC_ADDR2,
                LOC_CRTE_BY = location.LOC_CRTE_BY,
                LOC_CRTE_DATE = location.LOC_CRTE_DATE,
                LOC_STATUS = location.LOC_STATUS
            });
        }

        public static IEnumerable<object> get_lov_location()
        {
            var db = new SibaModel();
            return (from loc in db.MS_SYS_LOCATION
                    where loc.LOC_STATUS == "A"
                    select new
                    { CODE = loc.LOC_CODE, NAME = loc.LOC_NAME });
        }

        public static bool save_location(MS_SYS_LOCATION cty)
        {
            var db = new SibaModel();
            if (cty.LOC_STATUS == "A")
            {
                var db_location = db.MS_SYS_LOCATION.Find(cty.LOC_CODE);
                if (db_location != null)
                {
                    db.MS_SYS_LOCATION.Attach(db_location);
                    db_location.Map(cty);
                }

            }
            else if (cty.LOC_STATUS == "U")
            {
                cty.LOC_STATUS = "A";
                db.MS_SYS_LOCATION.Add(cty);
            }
            else if (cty.LOC_STATUS == "D")
            {
                var db_location = db.MS_SYS_LOCATION.Find(cty.LOC_CODE);
                if (db_location != null)
                {
                    db.MS_SYS_LOCATION.Attach(db_location);
                    db_location.LOC_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_LOCATION> search_locations(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_LOCATION
                    where (cty.LOC_CODE.ToLower().Contains(q.ToLower()) || cty.LOC_NAME.ToLower().Contains(q.ToLower())
                        || cty.LOC_DESC.ToLower().Contains(q.ToLower())
                        || cty.LOC_ARE_CODE.ToLower().Contains(q.ToLower()) || cty.LOC_ADDR1.ToLower().Contains(q.ToLower()))
                        || cty.LOC_ADDR2.ToLower().Contains(q.ToLower()) && cty.LOC_STATUS == "A"
                    select cty).ToList();
        }

        public static IEnumerable<object> get_Location_Lov(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from are in db.MS_SYS_LOCATION
                        where are.LOC_ARE_CODE == ProdCode && are.LOC_STATUS == "A"
                        select new
                        {
                            LOC_CODE = are.LOC_CODE,
                            LOC_NAME = are.LOC_NAME 
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}