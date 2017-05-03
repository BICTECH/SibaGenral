using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class PaymentModeMdl:Model
    {
        public static MS_SYS_PAYMNT_MODE GetPaymntMode(string code)
        {
            var db = new SibaModel();
            return
                (from pm in db.MS_SYS_PAYMNT_MODE where pm.PM_CODE == code select pm).ToList()
                    .Select(pm => new MS_SYS_PAYMNT_MODE
                    {
                        PM_CODE = pm.PM_CODE,
                        PM_CRTE_BY = pm.PM_CRTE_BY,
                        PM_CRTE_DATE = pm.PM_CRTE_DATE,
                        PM_DESC = pm.PM_DESC,
                        PM_MOD_BY = pm.PM_MOD_BY,
                        PM_MOD_DATE = pm.PM_MOD_DATE,
                        PM_STATUS = pm.PM_STATUS,
                        PM_NAME = pm.PM_NAME
                    }).Single();
        }

        public static IEnumerable<MS_SYS_PAYMNT_MODE> GetPaymntModes()
        {
            var db = new SibaModel();
            return (from pm in db.MS_SYS_PAYMNT_MODE where pm.PM_STATUS == "A" select pm.PM_CODE).Select(GetPaymntMode);
        }

        public static IEnumerable<object> GetPaymntModeLov()
        {
            return GetPaymntModes().Select(pm => new {CODE = pm.PM_CODE, NAME = pm.PM_NAME});
        }


        public static bool Save(MS_SYS_PAYMNT_MODE mode)
        {
            var db = new SibaModel();
            var dbMode = db.MS_SYS_PAYMNT_MODE.Find(mode.PM_CODE);
            switch (mode.PM_STATUS)
            {
                case "A":
                    if (dbMode != null)
                    {
                        db.MS_SYS_PAYMNT_MODE.Attach(dbMode);
                        dbMode.Map(mode);
                        dbMode.PM_MOD_DATE = DateTime.Now;
                    }
                    break;
                case "U":
                    mode.PM_STATUS = "A";
                    mode.PM_CRTE_DATE = DateTime.Now;
                    db.MS_SYS_PAYMNT_MODE.Add(mode);
                    break;
                case "D":
                    if (dbMode != null)
                    {
                        db.MS_SYS_PAYMNT_MODE.Attach(dbMode);
                        dbMode.PM_STATUS = "D";
                        dbMode.PM_MOD_DATE = DateTime.Now;
                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }


        public static IEnumerable<object> Search(string q)
        {
            var db = new SibaModel();
            return (from pm in db.MS_SYS_PAYMNT_MODE where 
                    (pm.PM_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                    pm.PM_NAME.ToLower().Contains(q.Trim().ToLower())) && pm.PM_STATUS == "A" select pm.PM_CODE).Select(GetPaymntMode);
        } 
    }
}