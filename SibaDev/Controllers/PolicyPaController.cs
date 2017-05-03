using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class PolicyPaController : ApiController
    {
        // GET: PolicyPa
        public object Get()
        {
            try
            {
                return PolicyPaMdl.get_policys();
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
                return PolicyPaMdl.get_policy(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/policypa/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyPaMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpPost]
        [Route("api/policypa/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD pa)
        {
            try
            {
                PolicyPaMdl.save_policy(pa);
                return new { state = true, message = "Personal Accident Policy Successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

    }
}