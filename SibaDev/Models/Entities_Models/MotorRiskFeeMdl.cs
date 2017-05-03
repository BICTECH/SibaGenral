using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class MotorRiskFeeMdl : Model
    {
        public static MS_MOTOR_RISK_FEES get_motorriskfee(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_MOTOR_RISK_FEES where mdl.MRF_FEE_CODE == code select mdl).ToList().Select(mdl => new MS_MOTOR_RISK_FEES
            {
                MRF_FEE_CODE = mdl.MRF_FEE_CODE,
                MRF_MPR_SYS_ID = mdl.MRF_MPR_SYS_ID,
                MRF_FEE_AMOUNT = mdl.MRF_FEE_AMOUNT,
                MRF_CRTE_BY = mdl.MRF_CRTE_BY,
                MRF_CRTE_DATE = mdl.MRF_CRTE_DATE,
                MRF_STATUS = mdl.MRF_STATUS
            }).Single();
        }

        public static IEnumerable<MS_MOTOR_RISK_FEES> get_motorriskfees()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_MOTOR_RISK_FEES where mdl.MRF_STATUS == "A" select mdl).ToList().Select(mdl => new MS_MOTOR_RISK_FEES
            {
                MRF_FEE_CODE = mdl.MRF_FEE_CODE,
                MRF_MPR_SYS_ID = mdl.MRF_MPR_SYS_ID,
                MRF_FEE_AMOUNT = mdl.MRF_FEE_AMOUNT,              
                MRF_CRTE_BY = mdl.MRF_CRTE_BY,
                MRF_CRTE_DATE = mdl.MRF_CRTE_DATE,
                MRF_STATUS = mdl.MRF_STATUS
            });
        }

        public static IEnumerable<object> get_lov_motorriskfee()
        {
            var db = new SibaModel();
            return (from exch in db.MS_MOTOR_RISK_FEES where exch.MRF_STATUS == "A" select new { CODE = exch.MRF_FEE_CODE, NAME = exch.MRF_FEE_AMOUNT });
        }

        public static bool save_motorriskfee(MS_MOTOR_RISK_FEES are)
        {
            var db = new SibaModel();
            if (are.MRF_STATUS == "A")
            {
                var db_motorriskfee = db.MS_MOTOR_RISK_FEES.Find(are.MRF_SYS_ID);
                if (db_motorriskfee != null)
                {
                    db.MS_MOTOR_RISK_FEES.Attach(db_motorriskfee);
                    db_motorriskfee.Map(are);
                }

            }
            else if (are.MRF_STATUS == "U")
            {
                are.MRF_STATUS = "A";
                db.MS_MOTOR_RISK_FEES.Add(are);
            }
            else if (are.MRF_STATUS == "D")
            {
                var db_motorriskfee = db.MS_MOTOR_RISK_FEES.Find(are.MRF_SYS_ID);
                if (db_motorriskfee != null)
                {
                    db.MS_MOTOR_RISK_FEES.Attach(db_motorriskfee);
                    db_motorriskfee.MRF_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_MOTOR_RISK_FEES> search_motorriskfees(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_MOTOR_RISK_FEES
                    where (are.MRF_FEE_CODE.ToLower().Contains(q.ToLower()) || are.MRF_MPR_SYS_ID.ToString().Contains(q.ToLower())
                          || are.MRF_FEE_AMOUNT.ToString().Contains(q.ToLower())) && are.MRF_STATUS == "A"
                    select are).ToList();
        }
    }
}