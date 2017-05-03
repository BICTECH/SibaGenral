using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity.Validation;
using System.Web.Http.Description;
using SibaDev.Models;
using Newtonsoft.Json.Linq;

namespace SibaDev.Controllers
{
    public class updateCoversController : ApiController
    {
        public string createCover(JObject jsonData)
        {
            using (SibaModel db = new SibaModel())
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState).ToString();
                }

                try
                {

                    MS_UDW_COVERS covers = new MS_UDW_COVERS();

                    dynamic objCov = jsonData;

                    foreach (dynamic covData in objCov.cov)
                    {
                        string covCode = Convert.ToString(covData.CVR_CODE);
                        var coverToUpdate = db.MS_UDW_COVERS.Find(covCode);

                        if (coverToUpdate != null)
                        {
                            coverToUpdate.CVR_CODE = covData.CVR_CODE;
                            coverToUpdate.CVR_NAME = covData.CVR_NAME;
                            coverToUpdate.CVR_DESCRIPTION = covData.CVR_DESCRIPTION;
                            coverToUpdate.CVR_TYPE = covData.CVR_TYPE;
                            coverToUpdate.CVR_BASIC_COVER = covData.CVR_BASIC_COVER;
                            coverToUpdate.CVR_RATED = covData.CVR_RATED;
                            coverToUpdate.CVR_RATE_CHANGE = covData.CVR_RATE_CHANGE;
                            coverToUpdate.CVR_SI_CHANGE = covData.CVR_SI_CHANGE;
                            coverToUpdate.CVR_USER_PREMIUM = covData.CVR_USER_PREMIUM;
                            coverToUpdate.CVR_PREM_REFUND = covData.CVR_PREM_REFUND;
                            coverToUpdate.CVR_LEVELS = covData.CVR_LEVELS;
                            coverToUpdate.CVR_RI_APPLICABLE = covData.CVR_RI_APPLICABLE;
                            coverToUpdate.CVR_CRTE_BY = covData.CVR_CRTE_BY;
                            coverToUpdate.CVR_CRTE_DATE = System.DateTime.Now;
                            coverToUpdate.CVR_MOD_BY = covData.CVR_MOD_BY;
                            coverToUpdate.CVR_MOD_DATE = System.DateTime.Now;
                            coverToUpdate.CVR_STATUS = covData.CVR_STATUS;

                            //  db.Entry(coverToUpdate).State = EntityState.Modified;
                            db.MS_UDW_COVERS.Attach(coverToUpdate);

                        }


                    };



                    db.SaveChanges();

                    return "Updated successfully";

                }
                catch (Exception ex)
                {
                    return (ex.Message);

                }


            }

        }
    }
}
