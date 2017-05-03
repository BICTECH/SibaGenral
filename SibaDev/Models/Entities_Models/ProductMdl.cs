using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class ProductMdl : Model
    {

        public static MST_UWD_PRODUCT get_product(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MST_UWD_PRODUCT where prod.PDT_CODE == code select prod).ToList().Select(prod => new MST_UWD_PRODUCT
                {
                    PDT_CODE = prod.PDT_CODE,
                    PDT_NAME = prod.PDT_NAME,
                    PDT_DESC = prod.PDT_DESC,
                    PDT_CLASS = prod.PDT_CLASS,
                    MS_UDW_CLASS_OF_BUSINESS = ClassBusinessMdl.get_class(prod.PDT_CLASS),
                    PDT_SUB_CLASS = prod.PDT_SUB_CLASS,
                    PDT_RI_LEVEL = prod.PDT_RI_LEVEL,
                    PDT_TERM = prod.PDT_TERM,
                    PDT_CRTE_BY = prod.PDT_CRTE_BY,
                    PDT_CRTE_DATE = prod.PDT_CRTE_DATE,
                    PDT_MOD_BY = prod.PDT_MOD_BY,
                    PPDT_MOD_DATE = prod.PPDT_MOD_DATE,
                    PDT_STATUS = prod.PDT_STATUS,

                    MST_UWD_PRODUCT_COND_CLAUSES = prod.MST_UWD_PRODUCT_COND_CLAUSES != null ? prod.MST_UWD_PRODUCT_COND_CLAUSES.Select(c =>
                         new MST_UWD_PRODUCT_COND_CLAUSES
                         {
                             PCC_SYS_ID = c.PCC_SYS_ID,
                             PCC_PDT_CODE = c.PCC_PDT_CODE,
                             PCC_TYPE = c.PCC_TYPE,
                             PCC_CLAU_CODE = c.PCC_CLAU_CODE,
                             PCC_DDESCRIPTION = c.PCC_DDESCRIPTION,
                             PCC_CRTE_BY = c.PCC_CRTE_BY,
                             PCC_CRTE_DATE = c.PCC_CRTE_DATE,
                             PCC_MOD_BY = c.PCC_MOD_BY,
                             PCC_MOD_DATE = c.PCC_MOD_DATE,
                             PCC_STATUS = c.PCC_STATUS,

                         }).ToList() : null,

                    MST_UWD_PRODUCT_COVERS = prod.MST_UWD_PRODUCT_COVERS != null ? prod.MST_UWD_PRODUCT_COVERS.Select(v =>
                        new MST_UWD_PRODUCT_COVERS
                        {
                            PCV_SYS_ID = v.PCV_SYS_ID,
                            PCV_PDT_CODE = v.PCV_PDT_CODE,
                            PCV_COV_CODE = v.PCV_COV_CODE,
                            PCV_SI = v.PCV_SI,
                            PCV_DEF_RATE = v.PCV_DEF_RATE,
                            PCV_DFT = v.PCV_DFT,
                            PCV_DISC = v.PCV_DISC,
                            PCV_LOAD = v.PCV_LOAD,
                            PCV_CRTE_BY = v.PCV_CRTE_BY,
                            PCV_CRTE_DATE = v.PCV_CRTE_DATE,
                            PCV_MOD_BY = v.PCV_MOD_BY,
                            PCV_MOD_DATE = v.PCV_MOD_DATE,
                            PCV_STATUS = v.PCV_STATUS,
                            PCV_DEF_PREM = v.PCV_DEF_PREM,

                        }).ToList() : null,

                    MST_UWD_PRODUCT_LOAD_DISCOUNT = prod.MST_UWD_PRODUCT_LOAD_DISCOUNT != null ? prod.MST_UWD_PRODUCT_LOAD_DISCOUNT.Select(v =>
                        new MST_UWD_PRODUCT_LOAD_DISCOUNT
                        {
                            PLDI_SYS_ID = v.PLDI_SYS_ID,
                            PLDI_LDI_CODE = v.PLDI_LDI_CODE,
                            PLDI_PDT_CODE = v.PLDI_PDT_CODE,
                            PLDI_LDI_NAME = v.PLDI_LDI_NAME,
                            PLDI_CRTE_BY = v.PLDI_CRTE_BY,
                            PLDI_CRTE_DATE = v.PLDI_CRTE_DATE,
                            PLDI_MOD_BY = v.PLDI_MOD_BY,
                            PLDI_MOD_DATE = v.PLDI_MOD_DATE,
                            PLDI_STATUS = v.PLDI_STATUS,

                        }).ToList() : null,

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static MST_UWD_PRODUCT get_sub_product(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from prod in db.MST_UWD_PRODUCT where prod.PDT_CODE == code select prod).ToList().Select(prod => new MST_UWD_PRODUCT
                {
                    PDT_CODE = prod.PDT_CODE,
                    PDT_NAME = prod.PDT_NAME,
                    PDT_DESC = prod.PDT_DESC,
                    PDT_CLASS = prod.PDT_CLASS,
                    PDT_SUB_CLASS = prod.PDT_SUB_CLASS,
                    PDT_RI_LEVEL = prod.PDT_RI_LEVEL,
                    PDT_TERM = prod.PDT_TERM,
                    PDT_CRTE_BY = prod.PDT_CRTE_BY,
                    PDT_CRTE_DATE = prod.PDT_CRTE_DATE,
                    PDT_MOD_BY = prod.PDT_MOD_BY,
                    PPDT_MOD_DATE = prod.PPDT_MOD_DATE,
                    PDT_STATUS = prod.PDT_STATUS,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MST_UWD_PRODUCT> get_products()
        {
            var db = new SibaModel();
            return (from prod in db.MST_UWD_PRODUCT where prod.PDT_STATUS == "A" select prod.PDT_CODE).ToList().Select(get_product);
        }

        public static IEnumerable<object> get_lov_products()
        {
            var db = new SibaModel();
            return (from prod in db.MST_UWD_PRODUCT where prod.PDT_STATUS == "A" select new { CODE = prod.PDT_CODE, NAME = prod.PDT_NAME });
        }


        public static IEnumerable<object> search_products(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.MST_UWD_PRODUCT
                    where (mdl.PDT_CODE.ToLower().Contains(q.ToLower())) && mdl.PDT_STATUS == "A"
                    select mdl.PDT_CODE).ToList().Select(get_product);
        }

        public static bool save_product(MST_UWD_PRODUCT viewProd)
        {
            var db = new SibaModel();
            switch (viewProd.PDT_STATUS)
            {
                case "A":
                    {
                        //product before update
                        var dbProd = db.MST_UWD_PRODUCT.Find(viewProd.PDT_CODE);

                        if (dbProd != null)
                        {
                            //update of product details
                            db.MST_UWD_PRODUCT.Attach(dbProd);
                            dbProd.Map(viewProd);

                            /*--------------------------------
                             * condition clauses update
                             *-------------------------------*/
                            foreach (var clause in viewProd.MST_UWD_PRODUCT_COND_CLAUSES)
                            {
                                clause.PCC_PDT_CODE = viewProd.PDT_CODE;
                                switch (clause.PCC_STATUS)
                                {
                                    case "A"://we have a clause in the database which we have to update
                                        var dbconclause = db.MST_UWD_PRODUCT_COND_CLAUSES.Find(clause.PCC_SYS_ID);
                                        db.MST_UWD_PRODUCT_COND_CLAUSES.Attach(dbconclause);
                                        dbconclause.Map(clause);                                                                               
                                        break;
                                    case "U"://add new clause
                                        clause.PCC_PDT_CODE = viewProd.PDT_CODE;
                                        clause.PCC_STATUS = "A";
                                        clause.PCC_CRTE_DATE = DateTime.Now;
                                        db.MST_UWD_PRODUCT_COND_CLAUSES.Add(clause);
                                        break;
                                    case "D"://                                       
                                        db.MST_UWD_PRODUCT_COND_CLAUSES.Attach(db.MST_UWD_PRODUCT_COND_CLAUSES.Find(clause.PCC_SYS_ID));                                  
                                        
                                        break;
                                }
                            }

                            /*-------------------------------
                             * Cover
                             *-----------------------------*/
                            foreach (var cover in viewProd.MST_UWD_PRODUCT_COVERS)
                            {
                                cover.PCV_PDT_CODE = viewProd.PDT_CODE;
                                switch (cover.PCV_STATUS)
                                {
                                    case "A":
                                        //
                                        var dbcover = db.MST_UWD_PRODUCT_COVERS.Find(cover.PCV_SYS_ID);
                                        db.MST_UWD_PRODUCT_COVERS.Attach(dbcover);
                                        dbcover.Map(cover);
                                        break;
                                    case "U":
                                        //
                                        cover.PCV_STATUS = "A";
                                        db.MST_UWD_PRODUCT_COVERS.Add(cover);
                                        break;
                                    case "D":
                                        //deletion from the database that were not in the update clauses from the view                               
                                        db.MST_UWD_PRODUCT_COVERS.Attach(db.MST_UWD_PRODUCT_COVERS.Find(cover.PCV_SYS_ID));
                                        break;
                                }
                            }

                            /*-------------------------------
                             * Discount & Loading
                             *-----------------------------*/
                            foreach (var discload in viewProd.MST_UWD_PRODUCT_LOAD_DISCOUNT)
                            {
                                discload.PLDI_PDT_CODE = viewProd.PDT_CODE;
                                switch (discload.PLDI_STATUS)
                                {
                                    case "A":
                                        //
                                        var dbdiscload = db.MST_UWD_PRODUCT_LOAD_DISCOUNT.Find(discload.PLDI_SYS_ID);
                                        db.MST_UWD_PRODUCT_LOAD_DISCOUNT.Attach(dbdiscload);
                                        dbdiscload.Map(discload);
                                        break;
                                    case "U":
                                        //
                                        discload.PLDI_STATUS = "A";
                                        db.MST_UWD_PRODUCT_LOAD_DISCOUNT.Add(discload);
                                        break;
                                    case "D":
                                        //deletion from the database that were not in the update clauses from the view                               
                                        db.MST_UWD_PRODUCT_LOAD_DISCOUNT.Attach(db.MST_UWD_PRODUCT_LOAD_DISCOUNT.Find(discload.PLDI_SYS_ID));
                                        break;
                                }
                            }
                        }

                    }
                    break;
                case "U":

                    {

                        viewProd.PDT_STATUS = "A";
                        viewProd.PDT_CRTE_DATE = DateTime.Now;
                        db.MST_UWD_PRODUCT.Add(viewProd);

                        viewProd.MST_UWD_PRODUCT_COND_CLAUSES.ForEach(x => x.PCC_STATUS = "A");
                        viewProd.MST_UWD_PRODUCT_COVERS.ForEach(x => x.PCV_STATUS = "A");
                       viewProd.MST_UWD_PRODUCT_LOAD_DISCOUNT.ForEach(x => x.PLDI_STATUS = "A");
                    }


                    break;
                case "D":
                    {
                        /*------------------------
                        * product before update
                        *----------------------*/
                        //
                        var dbProd = db.MST_UWD_PRODUCT.Find(viewProd.PDT_CODE);
                        /*------------------------
                        * update of product details
                        *----------------------*/
                        //
                        if (dbProd != null)
                        {
                            db.MST_UWD_PRODUCT.Attach(dbProd);
                            dbProd.PDT_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }

    }
}