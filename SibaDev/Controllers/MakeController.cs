using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class MakeController : ApiController
    {
        // GET: api/Make
        public object Get()
        {
            try
            {
                return MakeMdl.get_makes();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Make/
        public dynamic Get(string code)
        {
            try
            {
                return MakeMdl.get_make(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/make/lov")]
        public object lov()
        {
            try
            {
                return MakeMdl.get_lov_make();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/make/save")]
        public object save([FromBody]List<MS_UDW_MAKE> motors)
        {
            try
            {
                foreach (var cty in motors)
                {
                    MakeMdl.save_make(cty);
                }
                return new { state = true, message = "Motor Brand Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/make/search/{query}")]
        public object search(string query)
        {
            try
            {
                return MakeMdl.search_makes(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/make/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = MakeMdl.get_make(code);
                return result != null ? (object)new { state = true, name = result.MAK_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }
    }
}
