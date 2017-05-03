using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers
{
    public class LocationController : ApiController
    {
        // GET: api/Location
        public object Get()
        {
            try
            {
                return LocationMdl.get_locations();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        // GET: api/Location/
        public dynamic Get(string code)
        {
            try
            {
                return LocationMdl.get_location(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/location/lov")]
        public object lov()
        {
            try
            {
                return LocationMdl.get_lov_location();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/location/save")]
        public object save([FromBody]List<MS_SYS_LOCATION> locations)
        {
            try
            {
                foreach (var cty in locations)
                {
                    LocationMdl.save_location(cty);
                }
                return new { state = true, message = "Locations Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/location/search/{query}")]
        public object search(string query)
        {
            try
            {
                return LocationMdl.search_locations(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/location/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = LocationMdl.get_location(code);
                return result != null ? (object)new { state = true, name = result.LOC_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/location/locationLov")]
        public IEnumerable<object> getLocations(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = LocationMdl.get_Location_Lov(riskJson.PRD_CODE).ToList();

            return riskLst;
        }
    }
}
