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
    public class CustomerController : ApiController
    {
        // GET: api/Customer
        public object Get()
        {
            try
            {
                return CustomerMdl.get_customers();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        // GET: api/Customer/5
        public dynamic Get(string code)
        {
            try
            {
                return CustomerMdl.get_customer(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }


        [HttpPost]
        [Route("api/customer/save")]
        public object Save([FromBody]List<MS_UDW_CUSTOMERS> Customers)
        {
            try
            {
                foreach (var customer in Customers)
                {
                    CustomerMdl.save_customer(customer);
                }

                return new { state = true, message = "Customers Successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }



        [HttpGet]
        [Route("api/customer/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return CustomerMdl.search_customers(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/customer/lov")]
        public object Lov()
        {
            try
            {
                return CustomerMdl.get_customer_lov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/Customer/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CustomerMdl.get_customer(code);
                return result != null ? (object)new { state = true, name = result.CUS_OFFICIAL_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/customer/estclient")]
        public IEnumerable<object> get_est_customer(ProductsRisksCoversJSON riskJson)
        {
            var custLst = CustomerMdl.get_est_customer(riskJson.CUST_CODE).ToList();

            return custLst;
        }
    }
}
