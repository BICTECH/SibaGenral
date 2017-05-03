using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class PolicyGaController : ApiController
    {
        // GET: PolicyGa
        public object Get()
        {
            try
            {
                return PolicyBondMdl.get_policys();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        public dynamic Get(int code)
        {
            try
            {
                return PolicyBondMdl.get_policy(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/policyga/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyGAMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
         
        }

        [HttpPost]
        [Route("api/policyga/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD policy)
        {
            try
            {
               var result = PolicyGAMdl.save_policy(policy);

                return new { state = true, message = "General Accident Policy successfully Saved", result = new
                    {
                        result.POLH_SYS_ID,
                        result.POLH_END_NO,
                        result.POLH_STATUS,
                        result.POLH_TXN_STATE,
                        result.POLH_POL_STATE,
                        result.POLH_DISPLAY_NO,
                        result.POLH_QUT_SER_NO,
                    }
                };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

    }
}