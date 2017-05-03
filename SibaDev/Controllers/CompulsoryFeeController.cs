using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CompulsoryFeeController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return CompulsoryFeeMdl.get_compulsoryfees();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/
        public dynamic Get(string code)
        {
            try
            {
                return CompulsoryFeeMdl.get_compulsoryfee(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/compulsoryfee/lov")]
        public object lov()
        {
            try
            {
                return CompulsoryFeeMdl.get_lov_compulsoryfee();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/compulsoryfee/save")]
        public object save([FromBody]List<MS_COMPULSORY_FEES> compfee)
        {
            try
            {
                foreach (var cty in compfee)
                {
                    CompulsoryFeeMdl.save_compulsoryfee(cty);
                }
                return new { state = true, message = "Compulsory Fee Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/compulsoryfee/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CompulsoryFeeMdl.search_compulsoryfees(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/compulsoryfee/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CompulsoryFeeMdl.get_compulsoryfee(code);
                return result != null ? (object)new { state = true, name = result.FEE_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
