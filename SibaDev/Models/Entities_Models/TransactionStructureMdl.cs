using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class TransactionStructureMdl : Model
    {
        public static MS_UDW_TRANSACTION_STRUCTURE get_transactionstructure(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_UDW_TRANSACTION_STRUCTURE where mdl.TST_CODE == code select mdl).ToList().Select(mdl => new MS_UDW_TRANSACTION_STRUCTURE
                {
                    TST_CODE = mdl.TST_CODE,
                    TST_NAME = mdl.TST_NAME,
                    TST_DESC = mdl.TST_DESC,
                    TST_JRNL_ABBR = mdl.TST_JRNL_ABBR,
                    TST_TRANS_ORG = mdl.TST_TRANS_ORG,
                    TST_CRTE_BY = mdl.TST_CRTE_BY,
                    TST_CRTE_DATE = mdl.TST_CRTE_DATE,
                    TST_STATUS = mdl.TST_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_UDW_TRANSACTION_STRUCTURE> get_transactionstructures()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_TRANSACTION_STRUCTURE where mdl.TST_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_TRANSACTION_STRUCTURE
            {
                TST_CODE = mdl.TST_CODE,
                TST_NAME = mdl.TST_NAME,
                TST_DESC = mdl.TST_DESC,
                TST_JRNL_ABBR = mdl.TST_JRNL_ABBR,
                TST_TRANS_ORG = mdl.TST_TRANS_ORG,
                TST_CRTE_BY = mdl.TST_CRTE_BY,
                TST_CRTE_DATE = mdl.TST_CRTE_DATE,
                TST_STATUS = mdl.TST_STATUS
            });
        }

        public static IEnumerable<object> get_lov_transactionstructures()
        {
            var db = new SibaModel();
            return (from transactionstructure in db.MS_UDW_TRANSACTION_STRUCTURE where transactionstructure.TST_STATUS == "A" select new { CODE = transactionstructure.TST_CODE, NAME = transactionstructure.TST_NAME });
        }

        public static bool save_transactionstructure(MS_UDW_TRANSACTION_STRUCTURE are)
        {
            var db = new SibaModel();
            if (are.TST_STATUS == "A")
            {
                var db_transactionstructure = db.MS_UDW_TRANSACTION_STRUCTURE.Find(are.TST_CODE);
                if (db_transactionstructure != null)
                {
                    db.MS_UDW_TRANSACTION_STRUCTURE.Attach(db_transactionstructure);
                    db_transactionstructure.Map(are);
                }

            }
            else if (are.TST_STATUS == "U")
            {
                are.TST_STATUS = "A";
                db.MS_UDW_TRANSACTION_STRUCTURE.Add(are);
            }
            else if (are.TST_STATUS == "D")
            {
                var db_transactionstructure = db.MS_UDW_TRANSACTION_STRUCTURE.Find(are.TST_CODE);
                if (db_transactionstructure != null)
                {
                    db.MS_UDW_TRANSACTION_STRUCTURE.Attach(db_transactionstructure);
                    db_transactionstructure.TST_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_TRANSACTION_STRUCTURE> search_transactionstructures(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_TRANSACTION_STRUCTURE
                    where (are.TST_CODE.ToLower().Contains(q.ToLower()) || are.TST_NAME.ToLower().Contains(q.ToLower())
                          || are.TST_DESC.ToString().Contains(q.ToLower()) 
                          || are.TST_TRANS_ORG.ToLower().Contains(q.ToLower()) || are.TST_JRNL_ABBR.ToLower().Contains(q.ToLower())) && are.TST_STATUS == "A"
                    select are).ToList();
        }
    }
}