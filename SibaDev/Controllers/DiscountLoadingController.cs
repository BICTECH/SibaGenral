using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class DiscountLoadingController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
            try
            {
                return DiscountLoadingMdl.get_discountloadings();
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
                return DiscountLoadingMdl.get_discountloading(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }


        [HttpPost]
        [Route("api/discountloading/save")]
        public object save([FromBody]List<MS_SYS_LOADINGS_DISCOUNTS> discountloadings)
        {
            try
            {
                foreach (var cty in discountloadings)
                {
                    DiscountLoadingMdl.save_discountloading(cty);
                }

                return new { state = true, message = "Discount & Loading Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/discountloading/lov")]
        public object Lov()
        {
            try
            {
                return DiscountLoadingMdl.get_lov_discload();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
        [HttpGet]
        [Route("api/discountloading/discLoadList")]
        public object DiscLoadList()
        {
            try
            {
                return DiscountLoadingMdl.get_dft_discload();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
        

        [HttpGet]
        [Route("api/discountloading/search/{query}")]
        public object search(string query)
        {
            try
            {
                return DiscountLoadingMdl.search_discountloadings(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/discountloading/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = DiscountLoadingMdl.get_discountloading(code);
                return result != null ? (object)new { state = true, name = result.LDI_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

    }
}
