using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SibaDev.Models;
using System.Data.Entity.Validation;
using Newtonsoft.Json.Linq;

namespace SibaDev.Controllers
{
    public class CoverController : ApiController
    {

        // GET: api/cover
        public object Get()
        {
            try
            {
                return CoverMdl.get_covers();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        // GET: api/cover/
        public dynamic Get(string code)
        {
            try
            {
                return CoverMdl.get_cover(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/cover/lov")]
        public object lov()
        {
            try
            {
                return CoverMdl.get_lov_covers();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/cover/save")]
        public object save([FromBody]List<MS_UDW_COVERS> covers)
        {
            try
            {
                foreach (var cty in covers)
                {
                    CoverMdl.save_cover(cty);
                }

                return new { state = true, message = "Covers Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/cover/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CoverMdl.search_covers(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/cover/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CoverMdl.get_cover(code);
                return result != null ? (object)new { state = true, name = result.CVR_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

    }
}
