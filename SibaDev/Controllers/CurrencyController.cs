using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CurrencyController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return CurrencyMdl.get_currencys();
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
                return CurrencyMdl.get_currency(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/currency/lov")]
        public object lov()
        {
            try
            {
                return CurrencyMdl.get_lov_currencys();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        //[HttpGet]
        //[Route("api/fxcurrency/lov")]
        //public object fxlov()
        //{
        //    return CurrencyMdl.get_lov_fxcurrencys();
        //}

        [HttpPost]
        [Route("api/currency/save")]
        public object save([FromBody]List<MS_INS_CURRENCY> currencys)
        {
            try
            {
                foreach (var cty in currencys)
                {
                    CurrencyMdl.save_currency(cty);
                }
                return new { state = true, message = "Currency Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }            
        }

        [HttpGet]
        [Route("api/currency/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CurrencyMdl.search_currencys(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/currency/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CurrencyMdl.get_currency(code);
                return result != null ? (object)new { state = true, name = result.CUR_FULL_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
