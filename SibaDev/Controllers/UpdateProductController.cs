using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SibaDev.Models;
using Newtonsoft.Json.Linq;
using System.Data.Entity.Validation;

namespace SibaDev.Controllers
{
    public class UpdateProductController : ApiController
    {

        public string productsUpadate(JObject jsonData)
        {
            using (SibaModel db = new SibaModel())
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState).ToString();
                }

                try
                {
                    int prodSysID = 0;
                    //Policy Header update
                    //INS_UWD_POLICY_HEAD polHead = new INS_UWD_POLICY_HEAD();

                    MST_UWD_PRODUCT product = new MST_UWD_PRODUCT();

                    dynamic objPro = jsonData;

                    foreach (dynamic proddata in objPro.prod)
                    {

                        prodSysID = Convert.ToInt32(proddata.PDT_SYS_D);
                        

                        //var getPolSysID = from polSysID in db.INS_UWD_POLICY_HEAD
                        //                   where polSysID.POLH_SYS_ID == polHeadSysID
                        //            select polSysID.POLH_SYS_ID;

                        var prodToUpdate = db.MST_UWD_PRODUCT.Find(prodSysID);
                        Console.WriteLine("xxxxxxxxxxxx " + prodSysID);
                        if (prodToUpdate != null)
                        {
                            // polhToUpdate.POLH_SYS_ID = polheaddata.POLH_SYS_ID;
                            prodToUpdate.PDT_CLASS= proddata.PDT_CLASS;
                            prodToUpdate.PDT_CODE = proddata.PDT_CODE;
                            prodToUpdate.PDT_DESC = proddata.PDT_DESC;
                            prodToUpdate.PDT_NAME = proddata.PDT_NAME;
                            prodToUpdate.PDT_RI_LEVEL = proddata.PDT_RI_LEVEL;

                            prodToUpdate.PDT_SUB_CLASS = proddata.PDT_SUB_CLASS;
                            prodToUpdate.PDT_TERM = proddata.PDT_TERM;

                            prodToUpdate.PDT_STATUS = "A";


                            db.MST_UWD_PRODUCT.Attach(product);
                        }


                    };


                    //====================== Product Covers Section =========================================

                    List<MST_UWD_PRODUCT_COVERS> updateProCovList = new List<MST_UWD_PRODUCT_COVERS>();

                    List<MST_UWD_PRODUCT_COVERS> AddNewProCovList = new List<MST_UWD_PRODUCT_COVERS>();

                    MST_UWD_PRODUCT_COVERS proCov = new MST_UWD_PRODUCT_COVERS();


                    //To access to the properties in "dot" notation use a dynamic object
                    dynamic objproCov = jsonData;

                    // Loop over the array (Prod = json object for product data from view
                    foreach (dynamic proCovData in objproCov.prodCov)
                    {
                        int proSysID = Convert.ToInt32(proCovData.PDT_SYS_ID);
                        string CovStatus = proCovData.PCV_STATUS;

                        var proCovToUpdate = db.MST_UWD_PRODUCT_COVERS.Find(proSysID);

                        if (proCovToUpdate != null && CovStatus == "A")
                        {
                            //vehToUpdate.VEH_SYS_ID = vehData.VEH_SYS_ID;
                           // proCovToUpdate.PDT_SYS_ID= proCovData.PDT_SYS_ID;
                            proCovToUpdate.PCV_PDT_CODE = proCovData.PCV_PDT_CODE;
                            proCovToUpdate.PCV_LOAD= proCovData.PCV_LOAD;
                            proCovToUpdate.PCV_DISC = proCovData.PCV_DISC;
                            proCovToUpdate.PCV_DFT = proCovData.PCV_DFT;
                          
                            proCovToUpdate.PCV_DEF_RATE = proCovData.PCV_DEF_RATE;

                            proCovToUpdate.PCV_COV_CODE = proCovData.PCV_COV_CODE;

                            proCovToUpdate.PCV_STATUS = "A";


                            db.Entry(proCov).State = EntityState.Modified;
                            db.MST_UWD_PRODUCT_COVERS.Attach(proCov);
                        }

                        //Delelete Vehicle Risk if it is marked for deletion
                        else if (proCovToUpdate != null && CovStatus == "D")
                        {

                            db.MST_UWD_PRODUCT_COVERS.Remove(proCovToUpdate);

                        }

                        //check if Vehicle is newlly added, then add to the Entity
                        else if (proCovToUpdate == null && CovStatus == "U")
                        {
                            MST_UWD_PRODUCT_COVERS addProCov = new MST_UWD_PRODUCT_COVERS
                            {
                                PCV_COV_CODE = proCovData.PCV_COV_CODE,
                                PCV_DFT = proCovData.PCV_DFT,
                                PCV_DEF_RATE = proCovData.PCV_DEF_RATE,
                                PCV_DISC = proCovData.PCV_DISC,
                                PCV_LOAD = proCovData.PCV_LOAD,
                                PCV_PDT_CODE = proCovData.PCV_PDT_CODE,
                                PCV_SI = proCovData.PCV_SI,
                                PCV_STATUS= "A",
                              
                            };

                            AddNewProCovList.Add(addProCov);
                        }

                        foreach (MST_UWD_PRODUCT_COVERS proList in AddNewProCovList)
                        {
                            db.MST_UWD_PRODUCT_COVERS.Add(proList);
                        }


                    };



                    ////====================== Product Conditions And Clauses =====================
                    List<MST_UWD_PRODUCT_COND_CLAUSES> updateProductClaList = new List<MST_UWD_PRODUCT_COND_CLAUSES>();

                    List<MST_UWD_PRODUCT_COND_CLAUSES> AddNewProClaList = new List<MST_UWD_PRODUCT_COND_CLAUSES>();

                    MST_UWD_PRODUCT_COND_CLAUSES productClause = new MST_UWD_PRODUCT_COND_CLAUSES();


                    //To access to the properties in "dot" notation use a dynamic object
                    dynamic objRcovers = jsonData;

                    // Loop over the array (Prod = json object for product data from view

                    foreach (dynamic claData in objRcovers.prodClau)
                    {

                        int ClaSysID = Convert.ToInt32(claData.PDT_SYS_ID);
                        string ClauStatus = claData.PCC_STATUS;

                        var ClausesToUpdate = db.MST_UWD_PRODUCT_COND_CLAUSES.Find(ClaSysID);

                        if (ClausesToUpdate != null && ClauStatus == "A")
                        {
                            //ClausesToUpdate.RCOV_SYS_ID = rcovData.RCOV_SYS_ID;
                           // ClausesToUpdate.PCC_SYS_ID = claData.PCC_SYS_ID;
                            ClausesToUpdate.PCC_TYPE = claData.PCC_TYPE;
                            ClausesToUpdate.PCC_PDT_CODE = claData.PCC_PDT_CODE;
                            ClausesToUpdate.PCC_DDESCRIPTION = claData.PCC_DDESCRIPTION;
                          
                            ClausesToUpdate.PCC_CRTE_BY = claData.PCC_CRTE_BY;
                            ClausesToUpdate.PCC_CRTE_DATE = System.DateTime.Now;
                            ClausesToUpdate.PCC_MOD_BY = claData.PCC_MOD_BY;
                            ClausesToUpdate.PCC_CRTE_DATE = System.DateTime.Now;
                            ClausesToUpdate.PCC_STATUS = "A";

                            db.Entry(productClause).State = EntityState.Modified;
                            db.MST_UWD_PRODUCT_COND_CLAUSES.Attach(productClause);
                        }

                        //Delelete Vehicle Risk if it is marked for deletion
                        else if (ClausesToUpdate != null && ClauStatus == "D")
                        {

                            db.MST_UWD_PRODUCT_COND_CLAUSES.Remove(ClausesToUpdate);

                        }

                        //check if Vehicle is newlly added, then add to the Entity
                        else if (ClausesToUpdate == null && ClauStatus == "U")
                        {
                            MST_UWD_PRODUCT_COND_CLAUSES addProCluas = new MST_UWD_PRODUCT_COND_CLAUSES()
                            {
                              //  PCC_SYS_ID = claData.PCC_SYS_ID,
                               // PDT_SYS_ID = claData.PDT_SYS_ID,
                                PCC_DDESCRIPTION = claData.PCC_DDESCRIPTION,
                               PCC_TYPE = claData.PCC_TYPE,
                                PCC_CRTE_BY = claData.PCC_CRTE_BY,
                                PCC_MOD_BY = claData.PCC_MOD_BY,
                                PCC_STATUS = "A",
                                PCC_PDT_CODE = claData.PCC_PDT_CODE,
                                PCC_CRTE_DATE = System.DateTime.Now,
                                PCC_MOD_DATE = System.DateTime.Now,
                               
                            };

                            AddNewProClaList.Add(addProCluas);


                        }
                        foreach (MST_UWD_PRODUCT_COND_CLAUSES addedProCla in AddNewProClaList)
                        {
                            db.MST_UWD_PRODUCT_COND_CLAUSES.Add(addedProCla);
                        }


                    };

                    string status = "";

                    int dbState = db.SaveChanges();

                    if (dbState > 0)
                    {
                        //success
                        status = "S";
                    }
                    else
                    {
                        //Failed to update
                        System.Console.WriteLine("UUUUUUUUUUUUUUU " + prodSysID);
                        status = "F";

                    }

                    return status;
                }
                catch (DbEntityValidationException ex)
                {
                    string errorMessages = string.Join("; ", ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage));
                    throw new DbEntityValidationException(errorMessages);
                }

            }

        }
    }
}

