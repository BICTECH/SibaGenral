using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class SourceBusinessController : ApiController
    {
        // GET: api/SourceBusiness
        public object Get()
        {
            try
            {
                return SourceBusinessMdl.get_sourcebusinesses();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/SourceBusiness/
        public dynamic Get(string code)
        {
            try
            {
                return SourceBusinessMdl.get_sourcebusiness(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }

        [HttpGet]
        [Route("api/SourceBusiness/lov")]
        public object lov()
        {
            try
            {
                return SourceBusinessMdl.get_lov_sourcebusinesses();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/SourceBusiness/save")]
        public object save([FromBody]List<MS_SYS_SOURCE_BUSINESS> businesses)
        {
            try
            {
                foreach (var cty in businesses)
                {
                    SourceBusinessMdl.save_sourcebusiness(cty);
                }

                return new { state = true, message = "Source of Business Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/SourceBusiness/search/{query}")]
        public object search(string query)
        {
            try
            {
                return SourceBusinessMdl.search_sourcebusinesses(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/SourceBusiness/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = SourceBusinessMdl.get_sourcebusiness(code);
                return result != null ? (object)new { state = true, name = result.SRB_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
