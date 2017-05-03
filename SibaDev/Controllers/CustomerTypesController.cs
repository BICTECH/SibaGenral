using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CustomerTypesController : ApiController
    {
        // GET: api/Customer types
        public object Get()
        {
            try
            {
                return CustomerTypesMdl.get_customertypes();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        // GET: api/Customer types/
        public dynamic Get(string code)
        {
            try
            {
                return CustomerTypesMdl.get_customertype(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/customertypes/lov")]
        public object lov()
        {
            try
            {
                return CustomerTypesMdl.get_lov_customertypes();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/customertypes/save")]
        public object save([FromBody]List<MS_SYS_CUST_TYPES> customertypes)
        {
            try
            {
                 foreach (var cty in customertypes)
                {
                    CustomerTypesMdl.save_customertype(cty);
                }

                return new { state = true, message = "Customer types Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/customertypes/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CustomerTypesMdl.search_customertypes(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/customertypes/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CustomerTypesMdl.get_customertype(code);
                return result != null ? (object)new { state = true, name = result.CTP_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
