using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net;
using System.Net.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class OccupancyController : ApiController
    {
        // GET: Occupancy
        public object Get()
        {
            try
            {
                return OccupancyMdl.get_occupancys();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        public dynamic Get(string code)
        {
            try
            {
                return OccupancyMdl.get_occupancy(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpPost]
        [Route("api/occupancy/save")]
        public object Save([FromBody] MS_SYS_OCCUPANCY occupancies)
        {
            try
            {
                OccupancyMdl.save_occupancy(occupancies);
                return new { state = true, message = "Occupancy successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/occupancy/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = OccupancyMdl.get_occupancy(code);
                return result != null ? (object)new { state = true, name = result.MSO_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/occupancy/lov")]
        public object lov()
        {
            try
            {
                return OccupancyMdl.get_lov_occupancy();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/occupancy/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return OccupancyMdl.search_occupancy(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
    }
}