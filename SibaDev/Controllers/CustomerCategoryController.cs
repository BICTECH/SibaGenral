using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CustomerCategoryController : ApiController
    {
        // GET: api/Intermediary
        public object Get()
        {
            try
            {
                return CustomerCategoryMdl.get_custcats();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }

        // GET: api/Intermediary/5
        public dynamic Get(string code)
        {
            try
            {
                return CustomerCategoryMdl.get_custcat(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/customercategory/lov")]
        public object lov()
        {
            try
            {
                return CustomerCategoryMdl.get_lov_custcat();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/customercategory/save")]
        public object save([FromBody]List<MS_CUSTOMER_CATEGORY> custcat)
        {
            try
            {
                foreach (var are in custcat)
                {
                    CustomerCategoryMdl.save_custcat(are);
                }

                return new { state = true, message = "Customer Category Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpGet]
        [Route("api/customercategory/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CustomerCategoryMdl.search_custcats(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/customercategory/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CustomerCategoryMdl.get_custcat(code);
                return result != null ? (object)new { state = true, name = result.CUS_CAT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
