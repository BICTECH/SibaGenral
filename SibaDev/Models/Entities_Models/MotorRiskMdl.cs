using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class MotorRiskMdl : Model
    {
        public static MS_UDW_MOTOR_RISK get_motorrisk(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_MOTOR_RISK where mdl.MRK_CODE == code select mdl).ToList().Select(mdl => new MS_UDW_MOTOR_RISK
            {
                MRK_CODE = mdl.MRK_CODE,
                MRK_NAME = mdl.MRK_NAME,
                MRK_DESCRIPTION = mdl.MRK_DESCRIPTION,
                MRK_DOES_NOT_COV = mdl.MRK_DOES_NOT_COV,
                MRK_ENT_TO_DRIVE = mdl.MRK_ENT_TO_DRIVE,
                MRK_LIMT_USE = mdl.MRK_LIMT_USE,
                MRK_O_D_E = mdl.MRK_O_D_E,
                MRK_CRTE_BY = mdl.MRK_CRTE_BY,
                MRK_CRTE_DATE = mdl.MRK_CRTE_DATE,
                MRK_STATUS = mdl.MRK_STATUS
                
            }).Single();
        }

        public static IEnumerable<MS_UDW_MOTOR_RISK> get_motorrisks()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_MOTOR_RISK where mdl.MRK_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_MOTOR_RISK
            {
                MRK_CODE = mdl.MRK_CODE,
                MRK_NAME = mdl.MRK_NAME,
                MRK_DESCRIPTION = mdl.MRK_DESCRIPTION,
                MRK_DOES_NOT_COV = mdl.MRK_DOES_NOT_COV,
                MRK_ENT_TO_DRIVE = mdl.MRK_ENT_TO_DRIVE,
                MRK_LIMT_USE = mdl.MRK_LIMT_USE,
                MRK_O_D_E = mdl.MRK_O_D_E,
                MRK_CRTE_BY = mdl.MRK_CRTE_BY,
                MRK_CRTE_DATE = mdl.MRK_CRTE_DATE,
                MRK_STATUS = mdl.MRK_STATUS
                
            });
        }

        public static MS_UDW_MOTOR_RISK get_motor_risk(string code)
        {
            var db = new SibaModel();
            return (from r in db.MS_UDW_MOTOR_RISK where r.MRK_CODE == code select r).ToList().Select(r => new MS_UDW_MOTOR_RISK
            {
                MRK_CODE = r.MRK_CODE,
                MRK_NAME = r.MRK_NAME,
                MRK_DESCRIPTION = r.MRK_DESCRIPTION,
                MRK_DOES_NOT_COV = r.MRK_DOES_NOT_COV,
                MRK_ENT_TO_DRIVE = r.MRK_ENT_TO_DRIVE,
                MRK_LIMT_USE = r.MRK_LIMT_USE,
                MRK_O_D_E = r.MRK_O_D_E,
                MRK_CRTE_BY = r.MRK_CRTE_BY,
                MRK_CRTE_DATE = r.MRK_CRTE_DATE,
                MRK_STATUS = r.MRK_STATUS
            }).Single();

        }

        public static IEnumerable<object> get_lov_motor_risks()
        {
            var db = new SibaModel();
            return (from motorrisk in db.MS_UDW_MOTOR_RISK where motorrisk.MRK_STATUS == "A" select new { CODE = motorrisk.MRK_CODE, NAME = motorrisk.MRK_NAME });
        }

        public static bool save_motorrisk(MS_UDW_MOTOR_RISK are)
        {
            var db = new SibaModel();
            if (are.MRK_STATUS == "A")
            {
                var db_motorrisk = db.MS_UDW_MOTOR_RISK.Find(are.MRK_CODE);
                if (db_motorrisk != null)
                {
                    db.MS_UDW_MOTOR_RISK.Attach(db_motorrisk);
                    db_motorrisk.Map(are);
                }

            }
            else if (are.MRK_STATUS == "U")
            {
                are.MRK_STATUS = "A";
                db.MS_UDW_MOTOR_RISK.Add(are);
            }
            else if (are.MRK_STATUS == "D")
            {
                var db_motorrisk = db.MS_UDW_MOTOR_RISK.Find(are.MRK_CODE);
                if (db_motorrisk != null)
                {
                    db.MS_UDW_MOTOR_RISK.Attach(db_motorrisk);
                    db_motorrisk.MRK_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_MOTOR_RISK> search_motorrisks(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_MOTOR_RISK
                    where (are.MRK_CODE.ToLower().Contains(q.ToLower()) || are.MRK_NAME.ToLower().Contains(q.ToLower())
                          || are.MRK_DESCRIPTION.ToLower().Contains(q.ToLower()) || are.MRK_ENT_TO_DRIVE.ToLower().Contains(q.ToLower())
                          || are.MRK_LIMT_USE.ToLower().Contains(q.ToLower()) || are.MRK_DOES_NOT_COV.ToLower().Contains(q.ToLower())
                          || are.MRK_O_D_E.ToLower().Contains(q.ToLower())) && are.MRK_STATUS == "A"
                    select are).ToList();
        }
    }
}