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
    public class ClaimCauseLossController : ApiController
    {
        // GET: api/ClaimCauseLoss
        public object Get()
        {
           try
            {
                return ClaimCauseLossMdl.get_losses();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/ClaimCauseLoss/
        public dynamic Get(string code)
        {
           try
            {
                return ClaimCauseLossMdl.get_loss(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimCauseLoss/lov")]
        public object lov()
        {
            try
            {
                return ClaimCauseLossMdl.get_lov_loss();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/ClaimCauseLoss/save")]
        public object save([FromBody]List<MS_CLM_CAUSE_LOSS> losses)
        {
           try
            {
                foreach (var cty in losses)
                {
                    ClaimCauseLossMdl.save_loss(cty);
                }

                return new { state = true, message = "Cause of Loss Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/ClaimCauseLoss/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ClaimCauseLossMdl.search_losses(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimCauseLoss/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = ClaimCauseLossMdl.get_loss(code);
                return result != null ? (object)new { state = true, name = result.CLM_CAUSE_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
