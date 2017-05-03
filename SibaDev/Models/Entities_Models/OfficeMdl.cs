using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class OfficeMdl : Model
    {
        public static MS_SYS_OFFICE get_office(string code)
        {
            var db = new SibaModel();
            return (from office in db.MS_SYS_OFFICE where office.OFF_CODE == code select office).ToList().Select(o => new MS_SYS_OFFICE
            {
                OFF_CODE = o.OFF_CODE,
                OFF_NAME = o.OFF_NAME,
                OFF_DESC = o.OFF_DESC,
                OFF_CHANEL = o.OFF_CHANEL,
                OFF_ADDRESS1 = o.OFF_ADDRESS1,
                OFF_PHYSICAL_LOCAT = o.OFF_PHYSICAL_LOCAT,
                OFF_PHONE = o.OFF_PHONE,
                OFF_MOBILE = o.OFF_MOBILE,
                OFF_FAX = o.OFF_FAX,
                OFF_EMAIL = o.OFF_EMAIL,
                OFF_MANAGER = o.OFF_MANAGER,
                OFF_CMP_CODE = o.OFF_CMP_CODE,
                OFF_CRTE_BY = o.OFF_CRTE_BY,
                OFF_CRTE_DATE = o.OFF_CRTE_DATE,
                OFF_MOD_BY = o.OFF_MOD_BY,
                OFF_MOD_DATE = o.OFF_MOD_DATE,
                OFF_STATUS = o.OFF_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_OFFICE> get_offices()
        {
            var db = new SibaModel();
            return (from o in db.MS_SYS_OFFICE where o.OFF_STATUS == "A" select o).ToList().Select(o => new MS_SYS_OFFICE
            {
                OFF_CODE = o.OFF_CODE,
                OFF_NAME = o.OFF_NAME,
                OFF_DESC = o.OFF_DESC,
                OFF_CHANEL = o.OFF_CHANEL,
                OFF_ADDRESS1 = o.OFF_ADDRESS1,
                OFF_PHYSICAL_LOCAT = o.OFF_PHYSICAL_LOCAT,
                OFF_PHONE = o.OFF_PHONE,
                OFF_MOBILE = o.OFF_MOBILE,
                OFF_FAX = o.OFF_FAX,
                OFF_EMAIL = o.OFF_EMAIL,
                OFF_MANAGER = o.OFF_MANAGER,
                OFF_CMP_CODE = o.OFF_CMP_CODE,
                OFF_CRTE_BY = o.OFF_CRTE_BY,
                OFF_CRTE_DATE = o.OFF_CRTE_DATE,
                OFF_MOD_BY = o.OFF_MOD_BY,
                OFF_MOD_DATE = o.OFF_MOD_DATE,
                OFF_STATUS = o.OFF_STATUS
            });
        }

        public static IEnumerable<object> get_office_lov()
        {
            var db = new SibaModel();
            return get_offices().Select(o => new { CODE = o.OFF_CODE, NAME = o.OFF_NAME });
        }

        public static bool save_office(MS_SYS_OFFICE office)
        {
            var db = new SibaModel();
            switch (office.OFF_STATUS)
            {
                case "A":
                    {
                        var db_office = db.MS_SYS_OFFICE.Find(office.OFF_CODE);
                        if (db_office != null)
                        {
                            db.MS_SYS_OFFICE.Attach(db_office);
                            db_office.Map(office);
                        }

                    }
                    break;
                case "U":
                    office.OFF_STATUS = "A";
                    db.MS_SYS_OFFICE.Add(office);
                    break;
                case "D":
                    {
                        var db_office = db.MS_SYS_OFFICE.Find(office.OFF_CODE);
                        if (db_office != null)
                        {
                            db.MS_SYS_OFFICE.Attach(db_office);
                            db_office.OFF_STATUS = "D";
                        }

                    }
                    break;
            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_OFFICE> search_offices(string q)
        {
            var db = new SibaModel();
            return (from office in db.MS_SYS_OFFICE
                    where (office.OFF_CODE.ToLower().Contains(q.ToLower()) || office.OFF_NAME.ToLower().Contains(q.ToLower())
                        || office.OFF_DESC.ToLower().Contains(q.ToLower()) || office.OFF_CHANEL.ToLower().Contains(q.ToLower())
                        || office.OFF_ADDRESS1.ToLower().Contains(q.ToLower()) || office.OFF_PHYSICAL_LOCAT.ToLower().Contains(q.ToLower()))
                        || office.OFF_FAX.ToLower().Contains(q.ToLower()) || office.OFF_MOBILE.ToLower().Contains(q.ToLower())
                        || office.OFF_EMAIL.ToLower().Contains(q.ToLower()) || office.OFF_MANAGER.ToLower().Contains(q.ToLower())
                        || office.OFF_CMP_CODE.ToLower().Contains(q.ToLower()) && office.OFF_STATUS == "A"
                    select office).ToList();
        }
    }
}