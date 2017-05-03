using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class AcceptancetypeController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
            try
            {
                return AcceptanceTypeMdl.get_acceptancetypes();
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
                return AcceptanceTypeMdl.get_acceptancetype(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/acceptancetype/save")]
        public object save([FromBody]List<MS_SYS_ACCEPTANCE_TYPES> countries)
        {
            try
            {
                foreach (var cty in countries)
                {
                    AcceptanceTypeMdl.save_acceptancetype(cty);
                }

                return new { state = true, message = "Acceptance type Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/acceptancetype/search/{query}")]
        public object search(string query)
        {
            try
            {
                return AcceptanceTypeMdl.search_acceptancetypes(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/acceptancetype/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = AcceptanceTypeMdl.get_acceptancetype(code);
                return result != null ? (object)new { state = true, name = result.ATY_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
