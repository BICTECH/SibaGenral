using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class RegionMdl:Model
    {
        public static MS_SYS_REGIONS get_region(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from reg in db.MS_SYS_REGIONS where reg.REG_CODE == code select reg).ToList().Select(r => new MS_SYS_REGIONS
                {
                    REG_CODE = r.REG_CODE,
                    REG_STATUS = r.REG_STATUS,
                    REG_NAME = r.REG_NAME,
                    REG_CNT_CODE = r.REG_CNT_CODE,
                    REG_CRTE_BY = r.REG_CRTE_BY,
                    REG_CRTE_DATE = r.REG_CRTE_DATE,
                    REG_DESC = r.REG_DESC,
                    REG_MOD_BY = r.REG_MOD_BY,
                    REG_MOD_DATE = r.REG_MOD_DATE,
                    //MS_SYS_COUNTRY = new MS_SYS_COUNTRY { CNT_CODE = r.MS_SYS_COUNTRY.CNT_CODE, CNT_NAME = r.MS_SYS_COUNTRY.CNT_NAME }
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

        public static IEnumerable<MS_SYS_REGIONS> get_regions()
        {
            var db = new SibaModel();
            try
            {
                  return (from region in db.MS_SYS_REGIONS where region.REG_STATUS == "A" select region).ToList().Select(region => new MS_SYS_REGIONS
                {
                    REG_CODE = region.REG_CODE,
                    REG_NAME = region.REG_NAME,
                    REG_DESC = region.REG_DESC,               
                    REG_CNT_CODE = region.REG_CNT_CODE,
                    REG_CRTE_BY = region.REG_CRTE_BY,
                    REG_CRTE_DATE = region.REG_CRTE_DATE,
                    REG_STATUS = region.REG_STATUS
                });
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<object> get_lov_regions()
        {
            var db = new SibaModel();
            return (from currency in db.MS_SYS_REGIONS where currency.REG_STATUS == "A" select new
            { CODE = currency.REG_CODE, NAME = currency.REG_NAME });
        }
        


        public static bool save_region(MS_SYS_REGIONS are)
        {
            var db = new SibaModel();
            var dbRegions = db.MS_SYS_REGIONS.Find(are.REG_CODE);
            switch (are.REG_STATUS)
            {
                case "A":
                {
                    if (dbRegions != null)
                    {
                        db.MS_SYS_REGIONS.Attach(dbRegions);
                        dbRegions.Map(are);
                }

            }
                    break;
                case "U":
                are.REG_STATUS = "A";
                db.MS_SYS_REGIONS.Add(are);
                    break;
                case "D":
            {
                   
                    if (dbRegions != null)
                {
                        db.MS_SYS_REGIONS.Attach(dbRegions);
                        dbRegions.REG_STATUS = "D";
                }

            }
                    break;
            }
            return db.SaveChanges() > 0;
        }

        public static bool update_region(MS_SYS_REGIONS regions)
        {
            var db = new SibaModel();
            var dbRegions = db.MS_SYS_REGIONS.Find(regions.REG_CODE);
            if (dbRegions != null)
            {
                db.MS_SYS_REGIONS.Attach(dbRegions);
                dbRegions.Map(regions);
                return db.SaveChanges() > 0;
            }
            return false;
        }


        public static IEnumerable<MS_SYS_REGIONS> Search(string q)
        {
            var db = new SibaModel();
            return (from reg in db.MS_SYS_REGIONS where 
                    (reg.REG_CODE.ToLower().Contains(q.ToLower()) ||  reg.REG_NAME.ToLower().Contains(q.ToLower())) && reg.REG_STATUS == "A" select reg.REG_CODE).ToList().Select(get_region);
        }

        public static IEnumerable<MS_SYS_REGIONS> search_regions(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_SYS_REGIONS
                    where (are.REG_CODE.ToLower().Contains(q.ToLower()) || are.REG_NAME.ToLower().Contains(q.ToLower())
                          || are.REG_CNT_CODE.Contains(q.ToLower())) && are.REG_STATUS == "A"
                    select are).ToList();
        }
    }
}