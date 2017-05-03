using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;


namespace SibaDev.Models
{
    public class EndorsementsMdl : Model
    {
        public static MS_UDW_ENDORSEMENTS GetEndorsement(string code)
        {
            var db = new SibaModel();
            return (from endorement in db.MS_UDW_ENDORSEMENTS where endorement.END_CODE == code select endorement).ToList().Select(endorement => new MS_UDW_ENDORSEMENTS
            {
                END_CODE = endorement.END_CODE,
                END_NAME = endorement.END_NAME,
                END_TEXT_DESC = endorement.END_TEXT_DESC,
                END_TYPE_CODE = endorement.END_TYPE_CODE,
                END_PREM_CHANGE_YN = endorement.END_PREM_CHANGE_YN,
                END_FLAG = endorement.END_FLAG,
                END_CRTE_BY = endorement.END_CRTE_BY,
                END_CRTE_DATE = endorement.END_CRTE_DATE,
                END_MOD_BY = endorement.END_MOD_BY,
                END_MOD_DATE = endorement.END_MOD_DATE,
                END_STATUS = endorement.END_STATUS
      
            }).Single();                              

        }

        public static IEnumerable<MS_UDW_ENDORSEMENTS> GetEndorsements()
        {
            var db = new SibaModel();
            return (from endorement in db.MS_UDW_ENDORSEMENTS where endorement.END_STATUS == "A" select endorement.END_CODE).Select(GetEndorsement);
        }

        public static IEnumerable<object> GetEndorsementsLov()
        {
            return GetEndorsements().Select(endse => new { CODE = endse.END_CODE, NAME = endse.END_NAME, END_TEXT_DESC= endse.END_TEXT_DESC });
        }

        

        public static bool SaveEndorsement(MS_ACCT_CATEGORY accCat)
        {
            var db = new SibaModel();
            var dbAccCat = db.MS_ACCT_CATEGORY.Find(accCat.ACAT_CODE);
            switch (accCat.ACAT_STATUS)
            {
                case "A":

                    if (dbAccCat != null)
                    {
                        db.MS_ACCT_CATEGORY.Attach(dbAccCat);
                        dbAccCat.Map(accCat);
                    }
                    break;
                case "U":
                    accCat.ACAT_STATUS = "A";
                    accCat.ACAT_CRTE_DATE = DateTime.Now;
                    db.MS_ACCT_CATEGORY.Add(accCat);
                    break;
                case "D":

                    if (dbAccCat != null)
                    {
                        db.MS_ACCT_CATEGORY.Attach(dbAccCat);
                        dbAccCat.ACAT_STATUS = "D";
                    }
                    break;
            }
            return db.SaveChanges() > 0;
        }

       
    }
}