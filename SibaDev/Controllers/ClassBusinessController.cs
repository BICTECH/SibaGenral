using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class ClassBusinessController : ApiController
    {
        // GET: api/Company
        public object Get()
        {
            try
            {
                return ClassBusinessMdl.get_classes();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Company/
        public dynamic Get(string code)
        {
            try
            {
                return ClassBusinessMdl.get_class(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/classbusiness/lov")]
        public object lov()
        {
            try
            {
                return ClassBusinessMdl.get_lov_classes();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpPost]
        [Route("api/classbusiness/save")]
        public object save([FromBody]List<MS_UDW_CLASS_OF_BUSINESS> companies)
        {
            try
            {
                foreach (var cty in companies)
                {
                    ClassBusinessMdl.save_class(cty);
                }

                return new { state = true, message = "Class of Business Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/classbusiness/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ClassBusinessMdl.search_classes(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/classbusiness/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ClassBusinessMdl.get_class(code);
                return result != null ? (object)new { state = true, name = result.COB_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }
    }
}
