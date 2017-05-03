using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class MakeMdl : Model
    {
        public static MS_UDW_MAKE get_make(string code)
        {
            var db = new SibaModel();
            return (from make in db.MS_UDW_MAKE where make.MAK_CODE == code select make).ToList().Select(make => new MS_UDW_MAKE
            {
                MAK_CODE = make.MAK_CODE,
                MAK_NAME = make.MAK_NAME,
                MAK_DESC = make.MAK_DESC,
                MAK_CRTE_BY = make.MAK_CRTE_BY,
                MAK_CRTE_DATE = make.MAK_CRTE_DATE,
                MAK_STATUS = make.MAK_STATUS
            }).Single();
        }

        public static IEnumerable<MS_UDW_MAKE> get_makes()
        {
            var db = new SibaModel();
            return (from make in db.MS_UDW_MAKE where make.MAK_STATUS == "A" select make).ToList().Select(make => new MS_UDW_MAKE
            {
                MAK_CODE = make.MAK_CODE,
                MAK_NAME = make.MAK_NAME,
                MAK_DESC = make.MAK_DESC,           
                MAK_CRTE_BY = make.MAK_CRTE_BY,
                MAK_CRTE_DATE = make.MAK_CRTE_DATE,
                MAK_STATUS = make.MAK_STATUS
            });
        }

        public static IEnumerable<object> get_lov_make()
        {
            var db = new SibaModel();
            return (from loc in db.MS_UDW_MAKE
                    where loc.MAK_STATUS == "A"
                    select new
                    { CODE = loc.MAK_CODE, NAME = loc.MAK_NAME });
        }

        public static bool save_make(MS_UDW_MAKE cty)
        {
            var db = new SibaModel();
            if (cty.MAK_STATUS == "A")
            {
                var db_make = db.MS_UDW_MAKE.Find(cty.MAK_CODE);
                if (db_make != null)
                {
                    db.MS_UDW_MAKE.Attach(db_make);
                    db_make.Map(cty);
                }

            }
            else if (cty.MAK_STATUS == "U")
            {
                cty.MAK_STATUS = "A";
                db.MS_UDW_MAKE.Add(cty);
            }
            else if (cty.MAK_STATUS == "D")
            {
                var db_make = db.MS_UDW_MAKE.Find(cty.MAK_CODE);
                if (db_make != null)
                {
                    db.MS_UDW_MAKE.Attach(db_make);
                    db_make.MAK_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_MAKE> search_makes(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_UDW_MAKE
                    where (cty.MAK_CODE.ToLower().Contains(q.ToLower()) || cty.MAK_NAME.ToLower().Contains(q.ToLower())) && cty.MAK_STATUS == "A"
                    select cty).ToList();
        }
    }
}