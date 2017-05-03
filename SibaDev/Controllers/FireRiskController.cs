using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class FireRiskController : ApiController
    {
        // GET: api/FireRisk
        public object Get()
        {
           try
            {
                return FireRiskMdl.get_risks();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/Country/
        public dynamic Get(string code)
        {
           try
            {
                return FireRiskMdl.get_risk(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/firerisk/lov")]
        public object lov()
        {
            try
            {
                return FireRiskMdl.get_lov_risk();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/firerisk/save")]
        public object save([FromBody]List<MS_SYS_FIRE_RISK> risks)
        {
           try
            {

                foreach (var cty in risks)
                {
                    FireRiskMdl.save_risk(cty);
                }

                return new { state = true, message = "Fire Risk Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/firerisk/search/{query}")]
        public object search(string query)
        {
            try
            {
                return FireRiskMdl.search_risks(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/firerisk/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = FireRiskMdl.get_risk(code);
                return result != null ? (object)new { state = true, name = result.FRK_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
