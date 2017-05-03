using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class RegionsController : ApiController
    {
        // GET: api/Regions
        public object Get()
        {
            try
            {
                return RegionMdl.get_regions();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Regions/5

        public dynamic Get(string code)
        {
            try
            {
                return RegionMdl.get_region(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/regions/lov")]
        public object Lov()
        {
            try
            {
                return RegionMdl.get_lov_regions();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/regions/save")]
        public object Save([FromBody]List<MS_SYS_REGIONS> regions)
        {
            try
            {
                regions.ForEach(x => RegionMdl.save_region(x));
            return new { state = true, message = "Region(s) Successfully Created" };
        }
            catch (Exception)
        {
                return new { state = false, message = "Error saving Region(s)" };
            }
            
        }

        [HttpGet]
        [Route("api/regions/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return RegionMdl.Search(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/regions/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = RegionMdl.get_region(code);
                return result != null ? (object)new { state = true, name = result.REG_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/regions/search/{query}")]
        public object search(string query)
        {
            try
            {
                return RegionMdl.search_regions(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

    }
}
