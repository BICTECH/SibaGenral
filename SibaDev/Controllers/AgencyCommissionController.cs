using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class AgencyCommissionController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return AgencyCommissionMdl.get_agencycomms();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/
        public dynamic Get(string code)
        {
            try
            {
                return AgencyCommissionMdl.get_agencycomm(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpPost]
        [Route("api/agencycommission/save")]
        public object save([FromBody]List<MS_UDW_AGENCY_COMMISSION> agencycomms)
        {
            try
            {
                foreach (var cty in agencycomms)
                {
                    AgencyCommissionMdl.save_agencycomm(cty);
                }

                return new { state = true, message = "Agency Commission Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }


        [HttpGet]
        [Route("api/agencycommission/search/{query}")]
        public object search(string query)
        {
            try
            {
                return AgencyCommissionMdl.search_agencycomms(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }
    }
}
