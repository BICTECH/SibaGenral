using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class AccountOriginMdl:Model
    {

        public static MS_ACCT_DOC_ORIGIN GetAcctDocOrigin(string code)
        {
            var db = new SibaModel();
            return (from o in db.MS_ACCT_DOC_ORIGIN where o.DOC_ORIGN_CODE == code select o).ToList()
                    .Select(o => new MS_ACCT_DOC_ORIGIN
                    {
                        DOC_ORIGN_CODE = o.DOC_ORIGN_CODE,
                        DOC_ORIGN_CRTE_BY = o.DOC_ORIGN_CRTE_BY,
                        DOC_ORIGN_CRTE_DATE = o.DOC_ORIGN_CRTE_DATE,
                        DOC_ORIGN_DESC = o.DOC_ORIGN_DESC,
                        DOC_ORIGN_MOD_BY = o.DOC_ORIGN_MOD_BY,
                        DOC_ORIGN_MOD_DATE = o.DOC_ORIGN_MOD_DATE,
                        DOC_ORIGN_NAME = o.DOC_ORIGN_NAME,
                        DOC_ORIGN_STATUS = o.DOC_ORIGN_STATUS
                    }).Single();
        }

        public static IEnumerable<MS_ACCT_DOC_ORIGIN> GetAcctDocOrigins()
        {
            var db = new SibaModel();
            return (from o in db.MS_ACCT_DOC_ORIGIN where o.DOC_ORIGN_STATUS == "A" select o.DOC_ORIGN_CODE).Select(GetAcctDocOrigin);
        } 

        public static IEnumerable<object> GetAcctDocOriginLov() => GetAcctDocOrigins().Select(o => new {CODE = o.DOC_ORIGN_CODE, NAME = o.DOC_ORIGN_NAME});

        public static bool Save(MS_ACCT_DOC_ORIGIN origin)
        {
             var db = new SibaModel();
            var dbOrigin = db.MS_ACCT_DOC_ORIGIN.Find(origin.DOC_ORIGN_CODE);
            switch (origin.DOC_ORIGN_STATUS)
            {
                case "A":
                    if (dbOrigin != null)
                    {
                        db.MS_ACCT_DOC_ORIGIN.Attach(dbOrigin);
                        dbOrigin.Map(origin);
                        dbOrigin.DOC_ORIGN_MOD_DATE = DateTime.Now;
                    }
                    break;
                case "U":
                    origin.DOC_ORIGN_STATUS = "A";
                    origin.DOC_ORIGN_CRTE_DATE = DateTime.Now;

                    db.MS_ACCT_DOC_ORIGIN.Add(origin);
                    break;
                case "D":
                    if (dbOrigin != null)
                    {
                        db.MS_ACCT_DOC_ORIGIN.Attach(dbOrigin);
                        dbOrigin.DOC_ORIGN_STATUS = "A";
                        dbOrigin.DOC_ORIGN_MOD_DATE = DateTime.Now;
                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }

        public static IEnumerable<object> Search(string q)
        {
            var db = new SibaModel();
            return (from o in db.MS_ACCT_DOC_ORIGIN
                where (o.DOC_ORIGN_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                       o.DOC_ORIGN_NAME.ToLower().Contains(q.Trim().ToLower())) && o.DOC_ORIGN_STATUS == "A" select o.DOC_ORIGN_CODE).Select(GetAcctDocOrigin);
        }
    }
}