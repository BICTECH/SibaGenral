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
    public class ClaimEstimationTypeController : ApiController
    {
        // GET: api/ClaimEstimationType
        public object Get()
        {
           try
            {
                return ClaimEstimationTypeMdl.get_estimations();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/ClaimEstimationType/
        public dynamic Get(string code)
        {
           try
            {
                return ClaimEstimationTypeMdl.get_estimation(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimEstimationType/lov")]
        public object lov()
        {
            try
            {
                return ClaimEstimationTypeMdl.get_lov_estimation();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/ClaimEstimationType/save")]
        public object save([FromBody]List<MS_CLM_EST_TYPE> estimates)
        {
           try
            {
                foreach (var cty in estimates)
                {
                    ClaimEstimationTypeMdl.save_estimation(cty);
                }

                return new { state = true, message = "Estimation Type Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/ClaimEstimationType/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ClaimEstimationTypeMdl.search_estimations(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimEstimationType/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = ClaimEstimationTypeMdl.get_estimation(code);
                return result != null ? (object)new { state = true, name = result.CLM_EST_TYPE_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
