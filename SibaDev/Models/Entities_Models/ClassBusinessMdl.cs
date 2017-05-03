using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ClassBusinessMdl : Model
    {
        public static MS_UDW_CLASS_OF_BUSINESS get_class(string code)
        {
            var db = new SibaModel();
            return (from classes in db.MS_UDW_CLASS_OF_BUSINESS where classes.COB_CODE == code select classes).ToList().Select(classes => new MS_UDW_CLASS_OF_BUSINESS
            {
                COB_CODE = classes.COB_CODE,
                COB_NAME = classes.COB_NAME,
                COB_DESC = classes.COB_DESC,
                COB_CRTE_BY = classes.COB_CRTE_BY,
                COB_CRTE_DATE = classes.COB_CRTE_DATE,
                COB_STATUS = classes.COB_STATUS
            }).Single();
        }

        public static IEnumerable<MS_UDW_CLASS_OF_BUSINESS> get_classes()
        {
            var db = new SibaModel();
            return (from classes in db.MS_UDW_CLASS_OF_BUSINESS where classes.COB_STATUS == "A" select classes).ToList().Select(classes => new MS_UDW_CLASS_OF_BUSINESS
            {
                COB_CODE = classes.COB_CODE,
                COB_NAME = classes.COB_NAME,
                COB_DESC = classes.COB_DESC,              
                COB_CRTE_BY = classes.COB_CRTE_BY,
                COB_CRTE_DATE = classes.COB_CRTE_DATE,
                COB_STATUS = classes.COB_STATUS
            });
        }

        public static IEnumerable<object> get_lov_classes()
        {
            var db = new SibaModel();
            return (from classes in db.MS_UDW_CLASS_OF_BUSINESS where classes.COB_STATUS == "A" select new { CODE = classes.COB_CODE, NAME = classes.COB_NAME });
        }

        public static bool save_class(MS_UDW_CLASS_OF_BUSINESS cty)
        {
            var db = new SibaModel();
            if (cty.COB_STATUS == "A")
            {
                var db_company = db.MS_UDW_CLASS_OF_BUSINESS.Find(cty.COB_CODE);
                if (db_company != null)
                {
                    db.MS_UDW_CLASS_OF_BUSINESS.Attach(db_company);
                    db_company.Map(cty);
                }

            }
            else if (cty.COB_STATUS == "U")
            {
                cty.COB_STATUS = "A";
                db.MS_UDW_CLASS_OF_BUSINESS.Add(cty);
            }
            else if (cty.COB_STATUS == "D")
            {
                var db_company = db.MS_UDW_CLASS_OF_BUSINESS.Find(cty.COB_CODE);
                if (db_company != null)
                {
                    db.MS_UDW_CLASS_OF_BUSINESS.Attach(db_company);
                    db_company.COB_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_CLASS_OF_BUSINESS> search_classes(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_UDW_CLASS_OF_BUSINESS
                    where (cty.COB_CODE.ToLower().Contains(q.ToLower()) || cty.COB_NAME.ToLower().Contains(q.ToLower())
                     || cty.COB_DESC.ToLower().Contains(q.ToLower())) 
                     && cty.COB_STATUS == "A"
                    select cty).ToList();

        }
    }
}