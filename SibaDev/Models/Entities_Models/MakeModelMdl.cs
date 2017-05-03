using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class MakeModelMdl : Model
    {
        public static MS_UDW_MAKE_MODEL get_makemodel(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_MAKE_MODEL where mdl.MMO_CODE == code select mdl).ToList().Select(mdl => new MS_UDW_MAKE_MODEL
            {
                MMO_CODE = mdl.MMO_CODE,
                MMO_MAK_CODE = mdl.MMO_MAK_CODE,
                MMO_NAME = mdl.MMO_NAME,
                MMO_DESC = mdl.MMO_DESC,
                MMO_LOAD_TONNAGE = mdl.MMO_LOAD_TONNAGE,
                MMO_CUBIC_CAPACITY = mdl.MMO_CUBIC_CAPACITY,
                MMO_PASSENGERS = mdl.MMO_PASSENGERS,
                MMO_CHASSIS_NUM = mdl.MMO_CHASSIS_NUM,
                MMO_FUEL_TYPE = mdl.MMO_FUEL_TYPE,
                MMO_BODY_TYPE = mdl.MMO_BODY_TYPE,
                MMO_YEAR_MFG = mdl.MMO_YEAR_MFG,
                MMO_USAGE = mdl.MMO_USAGE,
                MMO_CRTE_BY = mdl.MMO_CRTE_BY,
                MMO_CRTE_DATE = mdl.MMO_CRTE_DATE,
                MMO_STATUS = mdl.MMO_STATUS
            }).Single();
        }

        public static IEnumerable<MS_UDW_MAKE_MODEL> get_makemodels()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_MAKE_MODEL where mdl.MMO_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_MAKE_MODEL
            {
                MMO_CODE = mdl.MMO_CODE,
                MMO_MAK_CODE = mdl.MMO_MAK_CODE,
                MMO_NAME = mdl.MMO_NAME,
                MMO_DESC = mdl.MMO_DESC,
                MMO_LOAD_TONNAGE = mdl.MMO_LOAD_TONNAGE,
                MMO_CUBIC_CAPACITY = mdl.MMO_CUBIC_CAPACITY,
                MMO_PASSENGERS = mdl.MMO_PASSENGERS,
                MMO_CHASSIS_NUM = mdl.MMO_CHASSIS_NUM,
                MMO_FUEL_TYPE = mdl.MMO_FUEL_TYPE,
                MMO_BODY_TYPE = mdl.MMO_BODY_TYPE,
                MMO_YEAR_MFG = mdl.MMO_YEAR_MFG,
                MMO_USAGE = mdl.MMO_USAGE,
                MMO_CRTE_BY = mdl.MMO_CRTE_BY,
                MMO_CRTE_DATE = mdl.MMO_CRTE_DATE,
                MMO_STATUS = mdl.MMO_STATUS
            });
        }

        public static IEnumerable<object> get_lov_makemodel()
        {
            var db = new SibaModel();
            return (from makemodel in db.MS_UDW_MAKE_MODEL where makemodel.MMO_STATUS == "A" select new { CODE = makemodel.MMO_CODE, NAME = makemodel.MMO_NAME });
        }

        public static bool save_makemodel(MS_UDW_MAKE_MODEL are)
        {
            var db = new SibaModel();
            if (are.MMO_STATUS == "A")
            {
                var db_makemodel = db.MS_UDW_MAKE_MODEL.Find(are.MMO_CODE);
                if (db_makemodel != null)
                {
                    db.MS_UDW_MAKE_MODEL.Attach(db_makemodel);
                    db_makemodel.Map(are);
                }

            }
            else if (are.MMO_STATUS == "U")
            {
                are.MMO_STATUS = "A";
                db.MS_UDW_MAKE_MODEL.Add(are);
            }
            else if (are.MMO_STATUS == "D")
            {
                var db_makemodel = db.MS_UDW_MAKE_MODEL.Find(are.MMO_CODE);
                if (db_makemodel != null)
                {
                    db.MS_UDW_MAKE_MODEL.Attach(db_makemodel);
                    db_makemodel.MMO_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_MAKE_MODEL> search_makemodels(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_MAKE_MODEL
                    where (are.MMO_CODE.ToLower().Contains(q.ToLower()) || are.MMO_NAME.ToLower().Contains(q.ToLower())
                          || are.MMO_DESC.ToString().Contains(q.ToLower()) || are.MMO_LOAD_TONNAGE.ToString().Contains(q.ToLower())
                          || are.MMO_CUBIC_CAPACITY.ToString().Contains(q.ToLower()) || are.MMO_PASSENGERS.ToString().Contains(q.ToLower())
                          || are.MMO_CHASSIS_NUM.ToString().Contains(q.ToLower()) || are.MMO_FUEL_TYPE.ToString().Contains(q.ToLower())
                          || are.MMO_BODY_TYPE.ToString().Contains(q.ToLower()) || are.MMO_YEAR_MFG.ToString().Contains(q.ToLower())
                          || are.MMO_USAGE.ToString().Contains(q.ToLower()) || are.MMO_MAK_CODE.ToString().Contains(q.ToLower())) && are.MMO_STATUS == "A"
                    select are).ToList();
        }

        public static IEnumerable<object> get_make_Lov(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from are in db.MS_UDW_MAKE_MODEL
                        where are.MMO_MAK_CODE == ProdCode && are.MMO_STATUS == "A"
                        select new
                        {
                            MMO_CODE = are.MMO_CODE,
                            MMO_NAME = are.MMO_NAME
                        });
            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}