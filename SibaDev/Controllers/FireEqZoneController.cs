using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class FireEqZoneController : ApiController
    {
        // GET: api/FireEqZone
        public object Get()
        {
            try
            {
                return FireEqZoneMdl.get_eqzones();
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
                return FireEqZoneMdl.get_eqzone(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/fireeqzone/lov")]
        public object lov()
        {
            try
            {
                return FireEqZoneMdl.get_lov_eqzone();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/fireeqzone/save")]
        public object save([FromBody]List<MS_SYS_EQZONE> fireeqzones)
        {
            try
            {

                foreach (var cty in fireeqzones)
                {
                    FireEqZoneMdl.save_risk(cty);
                }

                return new { state = true, message = "Fire Earthquake zones Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/fireeqzone/search/{query}")]
        public object search(string query)
        {
            try
            {
                return FireEqZoneMdl.search_eqzones(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/fireeqzone/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = FireEqZoneMdl.get_eqzone(code);
                return result != null ? (object)new { state = true, name = result.EQZ_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
