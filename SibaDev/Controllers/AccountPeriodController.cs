using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class AccountPeriodController : ApiController
    {
        // GET: api/Account Period
        public object Get()
        {
            try
            {
                return AccountPeriodMdl.get_accountperiods();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Account/
        public dynamic Get(string code)
        {
            try
            {
                return AccountPeriodMdl.get_accountperiod(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/accountperiod/lov")]
        public object lov()
        {
            try
            {
                return AccountPeriodMdl.get_lov_accountperiods();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
   
        }

        [HttpPost]
        [Route("api/accountperiod/save")]
        public object save([FromBody]List<MS_SYS_ACCOUNT_PERIODS> accountperiods)
        {
            try
            {
                foreach (var cty in accountperiods)
                {
                    AccountPeriodMdl.save_accountperiod(cty);
                }

                return new { state = true, message = "Account Period Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/accountperiod/search/{query}")]
        public object search(string query)
        {
            try
            {
                return AccountPeriodMdl.search_accountperiods(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/accountperiod/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = AccountPeriodMdl.get_accountperiod(code);
                return result != null ? (object)new { state = true, name = result.ACP_PERIOD_FROM } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
