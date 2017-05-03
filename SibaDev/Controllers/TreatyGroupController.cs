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
    public class TreatyGroupController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return TreatyGroupMdl.get_treatygrps();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        //GET: api/Treaty Group/      
        public dynamic Get(string code)
        {
            try
            {
                return TreatyGroupMdl.get_treatygrp(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/treatygroup/lov")]
        public object Lov()
        {
            try
            {
                return TreatyGroupMdl.get_lov_treaty();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/treatygroup/save")]
        public object Save([FromBody] MS_RI_GROUP_HEAD treaty)
        {
            try
            {
                TreatyGroupMdl.save_treatygrp(treaty);
                return new { state = true, message = "Treaty Group successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/treatygroup/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return TreatyGroupMdl.search_treatygrps(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/treatygroup/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = TreatyGroupMdl.get_treatygrp(code);
                return result != null ? (object)new { state = true, name = result.GP_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/treatygroup/treatysubclass")]
        public IEnumerable<object> get_treaty_subclass(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = TreatyGroupMdl.get_treaty_subclass(riskJson.TT_SUB_CLASS).ToList();

            return riskLst;
        }

    }
}
