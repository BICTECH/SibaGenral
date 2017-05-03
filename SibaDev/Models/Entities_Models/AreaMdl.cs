using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class AreaMdl : Model
    {
        public static MS_SYS_AREA get_area(string code)
        {
            var db = new SibaModel();
            return (from area in db.MS_SYS_AREA where area.ARE_CODE == code select area).ToList().Select(area => new MS_SYS_AREA
            {
                ARE_CODE = area.ARE_CODE,
                ARE_NAME = area.ARE_NAME,
                ARE_DESC = area.ARE_DESC,
                ARE_REG_CODE = area.ARE_REG_CODE,
                ARE_CRTE_BY = area.ARE_CRTE_BY,
                ARE_CRTE_DATE = area.ARE_CRTE_DATE,
                ARE_STATUS = area.ARE_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_AREA> get_areas()
        {
            var db = new SibaModel();
            return (from area in db.MS_SYS_AREA where area.ARE_STATUS == "A" select area).ToList().Select(area => new MS_SYS_AREA
            {
                ARE_CODE = area.ARE_CODE,
                ARE_NAME = area.ARE_NAME,
                ARE_DESC = area.ARE_DESC,
                ARE_REG_CODE = area.ARE_REG_CODE,
                ARE_CRTE_BY = area.ARE_CRTE_BY,
                ARE_CRTE_DATE = area.ARE_CRTE_DATE,
                ARE_STATUS = area.ARE_STATUS
            });
        }

        public static IEnumerable<object> get_lov_areas()
        {
            var db = new SibaModel();
            return (from area in db.MS_SYS_AREA
                    where area.ARE_STATUS == "A"
                    select new
                    { CODE = area.ARE_CODE, NAME = area.ARE_NAME });
        }

        public static bool save_area(MS_SYS_AREA are)
        {
            var db = new SibaModel();
            if (are.ARE_STATUS == "A")
            {
                var db_area = db.MS_SYS_AREA.Find(are.ARE_CODE);
                if (db_area != null)
                {
                    db.MS_SYS_AREA.Attach(db_area);
                    db_area.Map(are);
                }

            }
            else if (are.ARE_STATUS == "U")
            {
                are.ARE_STATUS = "A";
                db.MS_SYS_AREA.Add(are);
            }
            else if (are.ARE_STATUS == "D")
            {
                var db_area = db.MS_SYS_AREA.Find(are.ARE_CODE);
                if (db_area != null)
                {
                    db.MS_SYS_AREA.Attach(db_area);
                    db_area.ARE_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_AREA> search_areas(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_AREA where (are.ARE_CODE.ToLower().Contains(q.ToLower()) || are.ARE_NAME.ToLower().Contains(q.ToLower())
                    || are.ARE_DESC.ToLower().Contains(q.ToLower()) || are.ARE_REG_CODE.ToLower().Contains(q.ToLower())
                    ) && are.ARE_STATUS == "A" select are).ToList();

        }

        public static IEnumerable<object> get_Area_Lov(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from are in db.MS_SYS_AREA
                        where are.ARE_REG_CODE == ProdCode && are.ARE_STATUS == "A"
                        select new
                        {
                            ARE_CODE = are.ARE_CODE,
                            ARE_NAME = are.ARE_NAME
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}