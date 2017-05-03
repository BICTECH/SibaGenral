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
    public class ClaimCatastropicEventController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
           try
            {
                return ClaimCatastropicEventMdl.get_catastrophys();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/ClaimCatastropicEvent/
        public dynamic Get(string code)
        {
           try
            {
                return ClaimCatastropicEventMdl.get_catastrophy(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimCatastropicEvent/lov")]
        public object lov()
        {
            try
            {
                return ClaimCatastropicEventMdl.get_lov_catastrophy();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/ClaimCatastropicEvent/save")]
        public object save([FromBody]List<MS_CLM_CAT_EVENT> cats)
        {
           try
            {
                foreach (var cty in cats)
                {
                    ClaimCatastropicEventMdl.save_catastrophy(cty);
                }

                return new { state = true, message = "Catastrophy Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/ClaimCatastropicEvent/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ClaimCatastropicEventMdl.search_catastrophys(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ClaimCatastropicEvent/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = ClaimCatastropicEventMdl.get_catastrophy(code);
                return result != null ? (object)new { state = true, name = result.CLM_CAT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
