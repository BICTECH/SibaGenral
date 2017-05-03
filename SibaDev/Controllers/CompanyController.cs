using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class CompanyController : ApiController
    {
        // GET: api/Company
        public object Get()
        {
            try
            {
                return CompanyMdl.get_companies();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Company/
        public dynamic Get(string code)
        {
            try
            {
                return CompanyMdl.get_company(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/company/lov")]
        public object lov()
        {
            try
            {
                return CompanyMdl.get_lov_companies();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/company/save")]
        public object save([FromBody]List<MS_SYS_COMPANY> companies)
        {
            try
            {
                foreach (var cty in companies)
                {
                    CompanyMdl.save_company(cty);
                }

                return new { state = true, message = "Company Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }


        [HttpGet]
        [Route("api/company/search/{query}")]
        public object search(string query)
        {
            try
            {
                return CompanyMdl.search_companies(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/company/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = CompanyMdl.get_company(code);
                return result != null ? (object)new { state = true, name = result.CMP_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
