using System.Collections.Generic;
using System.Linq;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class Model
    {
       // public static SibaModel db = new SibaModel();
        public static procCntx procCntx = new procCntx();
        public void Map(Model o)
        {

            var t = o.GetType();
            var properties = t.GetProperties();
            foreach ( var pi in properties.Where(pi => pi.CanWrite).Where(pi => "ICollection`1" != pi.PropertyType.Name &&  pi.PropertyType.Namespace != "SibaDev.Models.Entities"))
                {

                     //pi.SetValue(this, pi.GetValue(o, null), null);

                    var hostProps = this.GetType().GetProperties();
                    foreach (var prop in hostProps.Where(h => pi.CanWrite).Where(h => "ICollection`1" != h.PropertyType.Name && h.PropertyType.Namespace != "SibaDev.Models.Entities" && h.Name == pi.Name))
                    {
                        if (pi.GetValue(o, null) != null && pi.PropertyType.Name == prop.PropertyType.Name)
                        {
                            prop.SetValue(this, pi.GetValue(o,null), null);
                        }
                    }
                }
            
        }

        private bool Same(object mdl1, object mdl2, string identifier)
        {
            var prop = mdl1.GetType().GetProperties().Single(x => x.Name == identifier);

            return prop.GetValue(mdl1, null) == prop.GetValue(mdl2, null);
        }


        //public static void CollectionUpdate(object updateMdl, ref object targetMdl, SibaModel db)
        //{
        //    dynamic db_collection = updateMdl;
        //    dynamic view_collection = targetMdl;
        //    foreach (dynamic item in view_collection)
        //    {
        //        if (item.STATUS == "A")//UPDATE
        //        {

        //            instance_clause = db.INS_PROD_CONDSCLAUSES_TEST.Find(clause.PCC_SYS_ID);
        //            db.INS_PROD_CONDSCLAUSES_TEST.Attach(instance_clause);
        //            instance_clause.Map(clause);
        //        }
        //        else if (item.STATUS == "U")//ADD
        //        {
        //            clause.IPT_SYS_ID = view_prod.IPT_SYS_ID;
        //            clause.PCC_OPTIONAL = "A";
        //            db.INS_PROD_CONDSCLAUSES_TEST.Add(clause);
        //        }
        //        else if (item.STATUS == "D")//DELETE
        //        {
        //            db.INS_PROD_CONDSCLAUSES_TEST.Remove(db.INS_PROD_CONDSCLAUSES_TEST.Find(clause.PCC_SYS_ID));
        //        }
        //    }
        //}



        //public static bool Contains(ICollection<INS_PROD_CONDSCLAUSES> clauses, INS_PROD_CONDSCLAUSES clause, string identifier)
        //{

        //    var prop = clause.GetType().GetProperties().Single(x => x.Name == identifier);

        //    return clauses.Any(mdl => prop.GetValue(mdl, null) == prop.GetValue(clause, null));
        //}

    }
}