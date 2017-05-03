using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class ExchangeRateController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return ExchangerateMdl.get_exchangerates();
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
                return ExchangerateMdl.get_exchangerate(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/exchangerate/lov")]
        public object lov()
        {
            try
            {
                return ExchangerateMdl.get_lov_exchangerate();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpPost]
        [Route("api/exchangerate/save")]
        public object save([FromBody]List<MS_SYS_EXCHANGE_RATES> exchangerates)
        {
            try
            {
                foreach (var cty in exchangerates)
                {
                    ExchangerateMdl.save_exchangerate(cty);
                }
                return new { state = true, message = "Exchange rate Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/exchangerate/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ExchangerateMdl.search_exchangerates(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/exchangerate/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ExchangerateMdl.get_exchangerate(code);
                return result != null ? (object)new { state = true, name = result.EXR_BASE_RATE } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
    }
}
