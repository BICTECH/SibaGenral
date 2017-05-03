using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.Claim_Models;
using SibaDev.Models;

namespace SibaDev.Controllers.Claims
{
    public class ClaimEstimationFireController : ApiController
    {
        // GET: api/ClaimEstimation

        [HttpPost]
        [Route("api/ClaimEstimationFire/save")]
        public object Save([FromBody] CLM_EST_HEAD estimations)
        {
            try
            {
                ClaimEstimationFireMdl.save_estimation(estimations);
                return new { state = true, message = "Estimation successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }


        [HttpGet]
        [Route("api/ClaimEstimationFire/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return ClaimEstimationFireMdl.search_estimations(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

    }
}
