using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CountryController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
           try
            {
                return CountryMdl.get_countries();
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
                return CountryMdl.get_country(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/country/lov")]
        public object lov()
        {
            try
            {
                return CountryMdl.get_lov_country();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/country/save")]
        public object save([FromBody]List<MS_SYS_COUNTRY> countries)
        {
           try
            {
                foreach (var cty in countries)
                {
                    CountryMdl.save_country(cty);
                }

                return new { state = true, message = "Countries Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/country/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CountryMdl.search_countries(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/country/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = CountryMdl.get_country(code);
                return result != null ? (object)new { state = true, name = result.CNT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
