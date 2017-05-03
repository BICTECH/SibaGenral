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
    public class IntermediaryCommissionController : ApiController
    {
        // GET: api/Intermediary
        public object Get()
        {
            try
            {
                return IntermediaryCommissionMdl.get_intermcomms();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }


        // GET: api/Intermediary/5
        public dynamic Get(int id)
        {
            try
            {
                return IntermediaryCommissionMdl.get_intermcomm(id);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        //Get Covers for the Risk covers LOV
        [HttpPost]
        [Route("api/intermediarycommission/lov")]
        public object lov_intermcomm(InterInsComLOV intcomJson)
        {
            try
            {
                var interCommList = IntermediaryCommissionMdl.get_intermcomms(intcomJson.PROD_CODE);
                
                return interCommList.ToList();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
        

        [HttpPost]
        [Route("api/intermediarycommission/save")]
        public object save([FromBody]List<MS_INTERMEDIARY_COMM> areas)
        {
            try
            {
                foreach (var are in areas)
                {
                    IntermediaryCommissionMdl.save_intermcomm(are);
                }

                return new { state = true, message = "Intermediary Commission Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/intermediarycommission/search/{query}")]
        public object search(string query)
        {
            try
            {
                return IntermediaryCommissionMdl.search_intermcomms(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/intermediarycommission/check/{code}")]
        public object Check(int code)
        {
            try
            {
                var result = IntermediaryCommissionMdl.get_intermcomm(code);
                return result != null ? (object)new { state = true, name = result.COM_PROD_CODE } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }
    }
}
