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
    public class MakeModelController : ApiController
    {
        // GET: api/Country
        public object Get()
        {
            try
            {
                return MakeModelMdl.get_makemodels();
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
                return MakeModelMdl.get_makemodel(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/makemodel/lov")]
        public object lov()
        {
            try
            {
                return MakeModelMdl.get_lov_makemodel();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/makemodel/save")]
        public object save([FromBody]List<MS_UDW_MAKE_MODEL> makemodels)
        {
            try
            {
                foreach (var cty in makemodels)
                {
                    MakeModelMdl.save_makemodel(cty);
                }

                return new { state = true, message = "Make & Models Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/makemodel/search/{query}")]
        public object search(string query)
        {
            try
            {
                return MakeModelMdl.search_makemodels(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/makemodel/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = MakeModelMdl.get_makemodel(code);
                return result != null ? (object)new { state = true, name = result.MMO_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/makemodel/makeLov")]
        public IEnumerable<object> getMakes(ProductsRisksCoversJSON riskJson)
        {
            var makeLst = MakeModelMdl.get_make_Lov(riskJson.PRD_CODE).ToList();

            return makeLst;
        }
    }
}
