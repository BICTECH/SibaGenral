using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class AgencyCommissionMdl : Model
    {
        public static MS_UDW_AGENCY_COMMISSION get_agencycomm(string code)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_AGENCY_COMMISSION where mdl.COM_CODE == code select mdl).ToList().Select(mdl => new MS_UDW_AGENCY_COMMISSION
            {
                COM_CODE = mdl.COM_CODE,
                COM_NAME = mdl.COM_NAME,
                COM_PERC = mdl.COM_PERC,
                COM_SEQNUM = mdl.COM_SEQNUM,
                COM_DESC = mdl.COM_DESC,
                COM_BPARTY_TYPE = mdl.COM_BPARTY_TYPE,
                COM_CPARTY_TYPE = mdl.COM_CPARTY_TYPE,
                COM_CRTE_BY = mdl.COM_CRTE_BY,
                COM_CRTE_DATE = mdl.COM_CRTE_DATE,
                COM_STATUS = mdl.COM_STATUS
            }).Single();
        }

        public static IEnumerable<MS_UDW_AGENCY_COMMISSION> get_agencycomms()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_UDW_AGENCY_COMMISSION where mdl.COM_STATUS == "A" select mdl).ToList().Select(mdl => new MS_UDW_AGENCY_COMMISSION
            {
                COM_CODE = mdl.COM_CODE,
                COM_NAME = mdl.COM_NAME,
                COM_PERC = mdl.COM_PERC,
                COM_SEQNUM = mdl.COM_SEQNUM,
                COM_DESC = mdl.COM_DESC,
                COM_BPARTY_TYPE = mdl.COM_BPARTY_TYPE,
                COM_CPARTY_TYPE = mdl.COM_CPARTY_TYPE,
                COM_CRTE_BY = mdl.COM_CRTE_BY,
                COM_CRTE_DATE = mdl.COM_CRTE_DATE,
                COM_STATUS = mdl.COM_STATUS
            });
        }

        public static bool save_agencycomm(MS_UDW_AGENCY_COMMISSION are)
        {
            var db = new SibaModel();
            if (are.COM_STATUS == "A")
            {
                var db_agencycomm = db.MS_UDW_AGENCY_COMMISSION.Find(are.COM_CODE);
                if (db_agencycomm != null)
                {
                    db.MS_UDW_AGENCY_COMMISSION.Attach(db_agencycomm);
                    db_agencycomm.Map(are);
                }

            }
            else if (are.COM_STATUS == "U")
            {
                are.COM_STATUS = "A";
                db.MS_UDW_AGENCY_COMMISSION.Add(are);
            }
            else if (are.COM_STATUS == "D")
            {
                var db_agencycomm = db.MS_UDW_AGENCY_COMMISSION.Find(are.COM_CODE);
                if (db_agencycomm != null)
                {
                    db.MS_UDW_AGENCY_COMMISSION.Attach(db_agencycomm);
                    db_agencycomm.COM_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_UDW_AGENCY_COMMISSION> search_agencycomms(string q)
        {
            var db = new SibaModel();
            return (from are in db.MS_UDW_AGENCY_COMMISSION
                    where (are.COM_CODE.ToLower().Contains(q.ToLower()) || are.COM_NAME.ToLower().Contains(q.ToLower())
                          || are.COM_PERC.ToString().Contains(q.ToLower()) || are.COM_SEQNUM.ToString().Contains(q.ToLower())
                          || are.COM_DESC.ToLower().Contains(q.ToLower()) || are.COM_BPARTY_TYPE.ToLower().Contains(q.ToLower())
                          || are.COM_CPARTY_TYPE.ToLower().Contains(q.ToLower())) && are.COM_STATUS == "A"
                    select are).ToList();
        }
    }
}