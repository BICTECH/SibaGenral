using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class OfficeController : ApiController
    {
        // GET: api/Office
        public object Get()
        {
            try
            {
                return OfficeMdl.get_offices();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Office/
        public dynamic Get(string code)
        {
            try
            {
                return OfficeMdl.get_office(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }

        [HttpGet]
        [Route("api/office/lov")]
        public object lov()
        {
            try
            {
                return OfficeMdl.get_office_lov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/office/save")]
        public object save([FromBody]List<MS_SYS_OFFICE> offices)
        {
            try
            {
                foreach (var cty in offices)
                {
                    OfficeMdl.save_office(cty);
                }
                return new { state = true, message = "Offices Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/office/search/{query}")]
        public object search(string query)
        {
            try
            {
                return OfficeMdl.search_offices(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/office/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = OfficeMdl.get_office(code);
                return result != null ? (object)new { state = true, name = result.OFF_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
    }
}
