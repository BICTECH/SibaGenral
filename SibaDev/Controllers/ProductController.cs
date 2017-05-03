using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class ProductController : ApiController
    {
        // GET: api/Product
        public object Get()
        {
            try
            {
                return ProductMdl.get_products();
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
                return ProductMdl.get_product(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/product/lov")]
        public object lov()
        {
            try
            {
                return ProductMdl.get_lov_products();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/product/search/{q}")]
        public object Search([FromUri] string q) => ProductMdl.search_products(q);


        [HttpPost]
        [Route("api/product/save")]
        public object Save([FromBody] MST_UWD_PRODUCT product)
        {
            try
            {
                ProductMdl.save_product(product);
                return new { state = true, message = "Product successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/product/check/{code}")]
        public object Check(string code)
        {
            var result = ProductMdl.get_sub_product(code);
            return result != null ? (object)new { state = true, name = result.PDT_NAME } : new { state = false };
        }
    }
}
