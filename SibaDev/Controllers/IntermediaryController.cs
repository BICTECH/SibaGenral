using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class IntermediaryController : ApiController
    {
        // GET: api/Intermediary
        public object Get()
        {
            try
            {
                return IntermediaryMdl.get_intermediaries();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Intermediary/5
        public dynamic Get(string code)
        {
            try
            {
                return IntermediaryMdl.get_intermediary(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
       
        }

        [HttpGet]
        [Route("api/intermediary/lov")]
        public object lov()
        {
            try
            {
                return IntermediaryMdl.get_lov_intermediary();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
      
        }

        [HttpPost]
        [Route("api/intermediary/save")]
        public object save([FromBody]List<MS_SYS_INTERMEDIARY> areas)
        {
            try
            {
                foreach (var are in areas)
                {
                    IntermediaryMdl.save_intermediary(are);
                }

                return new { state = true, message = "Intermediary Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/intermediary/search/{query}")]
        public object search(string query)
        {
            try
            {
                return IntermediaryMdl.search_intermediaries(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }

        [HttpGet]
        [Route("api/intermediary/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = IntermediaryMdl.get_intermediary(code);
                return result != null ? (object)new { state = true, name = result.INT_OFFICIAL_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }
    }
}
