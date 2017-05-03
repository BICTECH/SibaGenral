using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class CompanyMdl : Model
    {
        public static MS_SYS_COMPANY get_company(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from company in db.MS_SYS_COMPANY where company.CMP_CODE == code select company).ToList().Select(company => new MS_SYS_COMPANY
                {
                    CMP_CODE = company.CMP_CODE,
                    CMP_NAME = company.CMP_NAME,
                    CMP_PHONE = company.CMP_PHONE,
                    CMP_EMAIL = company.CMP_EMAIL,
                    CMP_WEBSITE = company.CMP_WEBSITE,
                    CMP_HEAD_OFFICE_ADD = company.CMP_HEAD_OFFICE_ADD,
                    CMP_CNT_CODE = company.CMP_CNT_CODE,
                    CMP_CRTE_BY = company.CMP_CRTE_BY,
                    CMP_CRTE_DATE = company.CMP_CRTE_DATE,
                    CMP_STATUS = company.CMP_STATUS
                }).Single();
            }
            catch (Exception e)
            {
                var exception = e;
                return null;
            }
            
        }

        public static IEnumerable<MS_SYS_COMPANY> get_companies()
        {
            var db = new SibaModel();
            return (from company in db.MS_SYS_COMPANY where company.CMP_STATUS == "A" select company).ToList().Select(company => new MS_SYS_COMPANY
            {
                CMP_CODE = company.CMP_CODE,
                CMP_NAME = company.CMP_NAME,
                CMP_PHONE = company.CMP_PHONE,
                CMP_EMAIL = company.CMP_EMAIL,
                CMP_WEBSITE = company.CMP_WEBSITE,
                CMP_HEAD_OFFICE_ADD = company.CMP_HEAD_OFFICE_ADD,
                CMP_CNT_CODE = company.CMP_CNT_CODE,
                CMP_CRTE_BY = company.CMP_CRTE_BY,
                CMP_CRTE_DATE = company.CMP_CRTE_DATE,
                CMP_STATUS = company.CMP_STATUS
            });
        }

        public static IEnumerable<object> get_lov_companies()
        {
            var db = new SibaModel();
            return (from company in db.MS_SYS_COMPANY where company.CMP_STATUS == "A" select new { CODE = company.CMP_CODE, NAME = company.CMP_NAME });
        }

        public static bool save_company(MS_SYS_COMPANY cty)
        {
            var db = new SibaModel();
            if (cty.CMP_STATUS == "A")
            {
                var db_company = db.MS_SYS_COMPANY.Find(cty.CMP_CODE);
                if (db_company != null)
                {
                    db.MS_SYS_COMPANY.Attach(db_company);
                    db_company.Map(cty);
                }

            }
            else if (cty.CMP_STATUS == "U")
            {
                cty.CMP_STATUS = "A";
                db.MS_SYS_COMPANY.Add(cty);
            }
            else if (cty.CMP_STATUS == "D")
            {
                var db_company = db.MS_SYS_COMPANY.Find(cty.CMP_CODE);
                if (db_company != null)
                {
                    db.MS_SYS_COMPANY.Attach(db_company);
                    db_company.CMP_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_COMPANY> search_companies(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_COMPANY
                    where (cty.CMP_CODE.ToLower().Contains(q.ToLower()) || cty.CMP_NAME.ToLower().Contains(q.ToLower())
                     || cty.CMP_PHONE.ToLower().Contains(q.ToLower()) || cty.CMP_EMAIL.ToLower().Contains(q.ToLower())
                     || cty.CMP_WEBSITE.ToLower().Contains(q.ToLower()) || cty.CMP_HEAD_OFFICE_ADD.ToLower().Contains(q.ToLower())) 
                     && cty.CMP_STATUS == "A"
                    select cty).ToList();

        }
    }
}