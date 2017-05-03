using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class NoClaimDiscountMdl : Model
    {

        public static MS_NCD_RISKS get_noclaimdiscount(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MS_NCD_RISKS where prod.NCD_CODE == code select prod).ToList().Select(prod => new MS_NCD_RISKS
                {
                    NCD_CODE = prod.NCD_CODE,
                    NCD_SYS_ID = prod.NCD_SYS_ID,
                    NCD_DESC = prod.NCD_DESC,
                    NCD_CRTE_BY = prod.NCD_CRTE_BY,
                    NCD_CRTE_DATE = prod.NCD_CRTE_DATE,
                    NCD_MOD_BY = prod.NCD_MOD_BY,
                    NCD_MOD_DATE = prod.NCD_MOD_DATE,
                    NCD_STATUS = prod.NCD_STATUS,

                    MS_NCD_DTLS = prod.MS_NCD_DTLS != null ? prod.MS_NCD_DTLS.Select(c =>
                         new MS_NCD_DTLS
                         {
                             NCD_DTLS_SYS_ID = c.NCD_DTLS_SYS_ID,
                             NCD_DTLS_NCD_SYS_ID = c.NCD_DTLS_NCD_SYS_ID,
                             NCD_DTLS_FROM_YEAR = c.NCD_DTLS_FROM_YEAR,
                             NCD_DTLS_TO_YEAR = c.NCD_DTLS_TO_YEAR,
                             NCD_DTLS_PRD_CODE = c.NCD_DTLS_PRD_CODE,
                             NCD_DTLS_PERC = c.NCD_DTLS_PERC,
                             NCD_DTLS_CRTE_BY = c.NCD_DTLS_CRTE_BY,
                             NCD_DTLS_CRTE_DATE = c.NCD_DTLS_CRTE_DATE,
                             NCD_DTLS_MOD_BY = c.NCD_DTLS_MOD_BY,
                             NCD_DTLS_MOD_DATE = c.NCD_DTLS_MOD_DATE,
                             NCD_DTLS_STATUS = c.NCD_DTLS_STATUS,

                         }).ToList() : null,

                    MS_NCD_BASIS = prod.MS_NCD_BASIS != null ? prod.MS_NCD_BASIS.Select(v =>
                        new MS_NCD_BASIS
                        {
                            CFB_SYS_ID = v.CFB_SYS_ID,
                            CFB_NCD_SYS_ID = v.CFB_NCD_SYS_ID,
                            CFB_RUN_BASIS = v.CFB_RUN_BASIS,
                            CFB_RUN_YEAR = v.CFB_RUN_YEAR,
                            CFB_NO_CLMS = v.CFB_NO_CLMS,
                            CFB_STP_BACK = v.CFB_STP_BACK,                      
                            CFB_CRTE_BY = v.CFB_CRTE_BY,
                            CFB_CRTE_DATE = v.CFB_CRTE_DATE,
                            CFB_MOD_BY = v.CFB_MOD_BY,
                            CFB_MOD_DATE = v.CFB_MOD_DATE,
                            CFB_STATUS = v.CFB_STATUS,                           

                        }).ToList() : null,

                }).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }
         
        public static MS_NCD_RISKS get_noclaimdiscount_code(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MS_NCD_RISKS where prod.NCD_CODE == code select prod).ToList().Select(prod => new MS_NCD_RISKS
                {
                    NCD_CODE = prod.NCD_CODE,
                    NCD_SYS_ID = prod.NCD_SYS_ID,
                    NCD_DESC = prod.NCD_DESC,
                    NCD_CRTE_BY = prod.NCD_CRTE_BY,
                    NCD_CRTE_DATE = prod.NCD_CRTE_DATE,
                    NCD_MOD_BY = prod.NCD_MOD_BY,
                    NCD_MOD_DATE = prod.NCD_MOD_DATE,
                    NCD_STATUS = prod.NCD_STATUS,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_NCD_RISKS> get_noclaimdiscounts()
        {
            var db = new SibaModel();
            return (from prod in db.MS_NCD_RISKS where prod.NCD_STATUS == "A" select prod.NCD_CODE).ToList().Select(get_noclaimdiscount);
        }

        public static IEnumerable<object> get_lov_noclaimdiscounts()
        {
            var db = new SibaModel();
            return (from prod in db.MS_NCD_RISKS where prod.NCD_STATUS == "A" select new { CODE = prod.NCD_CODE, NAME = prod.NCD_DESC });
        }


        public static IEnumerable<object> search_noclaimdiscounts(string q) 
        {
            var db = new SibaModel();
            return (from mdl in db.MS_NCD_RISKS
                    where (mdl.NCD_CODE.ToLower().Contains(q.ToLower())) && mdl.NCD_STATUS == "A"
                    select mdl.NCD_CODE).ToList().Select(get_noclaimdiscount);
        }

        public static bool save_product(MS_NCD_RISKS viewProd)
        {
            var db = new SibaModel();
            switch (viewProd.NCD_STATUS)
            {
                case "A":
                    {
                        //No Claim Discount before update
                        var dbProd = db.MS_NCD_RISKS.Find(viewProd.NCD_SYS_ID);

                        if (dbProd != null)
                        {
                            //update of No Claim Discount ncddetails
                            db.MS_NCD_RISKS.Attach(dbProd);
                            dbProd.Map(viewProd);

                            /*--------------------------------
                             * No Claim Discount Details update
                             *-------------------------------*/
                            foreach (var ncddetails in viewProd.MS_NCD_DTLS)
                            {
                                ncddetails.NCD_DTLS_NCD_SYS_ID = viewProd.NCD_SYS_ID;
                                switch (ncddetails.NCD_DTLS_STATUS)
                                {
                                    case "A"://we have a ncddetails in the database which we have to update
                                        var dbncddetails = db.MS_NCD_DTLS.Find(ncddetails.NCD_DTLS_SYS_ID);
                                        db.MS_NCD_DTLS.Attach(dbncddetails);
                                        dbncddetails.Map(ncddetails);                                                                               
                                        break;
                                    case "U"://add new ncddetails
                                        ncddetails.NCD_DTLS_NCD_SYS_ID = viewProd.NCD_SYS_ID;
                                        ncddetails.NCD_DTLS_STATUS = "A";
                                        ncddetails.NCD_DTLS_CRTE_DATE = DateTime.Now;
                                        db.MS_NCD_DTLS.Add(ncddetails);
                                        break;
                                    case "D"://                                       
                                        db.MS_NCD_DTLS.Attach(db.MS_NCD_DTLS.Find(ncddetails.NCD_DTLS_SYS_ID));                                  
                                        
                                        break;
                                }
                            }

                            /*-------------------------------
                             * Cover
                             *-----------------------------*/
                            foreach (var ncdbasis in viewProd.MS_NCD_BASIS)
                            {
                                ncdbasis.CFB_NCD_SYS_ID = viewProd.NCD_SYS_ID;
                                switch (ncdbasis.CFB_STATUS)
                                {
                                    case "A":
                                        //
                                        var dbncdbasis = db.MS_NCD_BASIS.Find(ncdbasis.CFB_SYS_ID);
                                        db.MS_NCD_BASIS.Attach(dbncdbasis);
                                        dbncdbasis.Map(ncdbasis);
                                        break;
                                    case "U":
                                        //
                                        ncdbasis.CFB_STATUS = "A";
                                        ncdbasis.CFB_NCD_SYS_ID = viewProd.NCD_SYS_ID;
                                        db.MS_NCD_BASIS.Add(ncdbasis);
                                        break;
                                    case "D":
                                        //deletion from the database that were not in the update ncdbasis from the view                               
                                        db.MS_NCD_BASIS.Attach(db.MS_NCD_BASIS.Find(ncdbasis.CFB_SYS_ID));
                                        break;
                                }
                            }
   
                        }

                    }
                    break;
                case "U":

                    {
                        viewProd.NCD_STATUS = "A";
                        viewProd.NCD_CRTE_DATE = DateTime.Now;
                        db.MS_NCD_RISKS.Add(viewProd);

                        viewProd.MS_NCD_DTLS.ForEach(x => x.NCD_DTLS_STATUS = "A");
                        viewProd.MS_NCD_BASIS.ForEach(x => x.CFB_STATUS = "A");                     
                    }


                    break;
                case "D":
                    {
                        /*------------------------
                        * No Claim Discount before update
                        *----------------------*/
                        //
                        var dbProd = db.MS_NCD_RISKS.Find(viewProd.NCD_SYS_ID);
                        /*------------------------
                        * update of No Claim Discount ncddetails
                        *----------------------*/
                        //
                        if (dbProd != null)
                        {
                            db.MS_NCD_RISKS.Attach(dbProd);
                            dbProd.NCD_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }

    }
}