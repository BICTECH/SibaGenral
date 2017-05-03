using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class InsuranceSourceController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
           try
            {
                return InsuranceSourceMdl.get_insources();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/InsuranceSource/
        public dynamic Get(string code)
        {
           try
            {
                return InsuranceSourceMdl.get_insource(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/insurancesource/lov")]
        public object lov()
        {
            try
            {
                return InsuranceSourceMdl.get_lov_insource();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/insurancesource/save")]
        public object save([FromBody]List<INS_UDW_INSUR_SOURCE> insource)
        {
           try
            {
                foreach (var cty in insource)
                {
                    InsuranceSourceMdl.save_insource(cty);
                }

                return new { state = true, message = "Insurance Source Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/insurancesource/search/{query}")]
        public object search(string query)
        {
            try
            {
                return InsuranceSourceMdl.search_insources(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/insurancesource/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = InsuranceSourceMdl.get_insource(code);
                return result != null ? (object)new { state = true, name = result.INSUR_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
