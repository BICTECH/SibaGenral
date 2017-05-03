using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class NoClaimDiscountController : ApiController
    {
        // GET: api/Product
        public object Get()
        {
            try
            {
                return NoClaimDiscountMdl.get_noclaimdiscounts();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        // GET: api/Product/
        public dynamic Get(string code)
        {
            try
            {
                return NoClaimDiscountMdl.get_noclaimdiscount(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/noclaimdiscount/lov")]
        public object lov()
        {
            try
            {
                return NoClaimDiscountMdl.get_lov_noclaimdiscounts();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/noclaimdiscount/search/{q}")]
        public object Search([FromUri] string q) => NoClaimDiscountMdl.search_noclaimdiscounts(q);


        [HttpPost]
        [Route("api/noclaimdiscount/save")]
        public object Save([FromBody] MS_NCD_RISKS noclmdiscount)
        {
            try
            {
                NoClaimDiscountMdl.save_product(noclmdiscount);
                return new { state = true, message = "No Claim Discount successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/noclaimdiscount/check/{code}")]
        public object Check(string code)
        {
            var result = NoClaimDiscountMdl.get_noclaimdiscount_code(code);
            return result != null ? (object)new { state = true, name = result.NCD_DESC } : new { state = false };
        }
    }
}
