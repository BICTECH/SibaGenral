using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Models.History_Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers
{

    public class PolicyFireController : ApiController
    {


        // GET: api/PolicyFire
        //public object Get()
        //{
        //    try
        //    {
        //        return PolicyFireMdl.get_policys();
        //    }
        //    catch (Exception e)
        //    {
        //        return new { state = false, message = "Server Error", exception = e };
        //    }
           
        //}

        //// GET: api/PolicyFire/
        //public dynamic Get(int code)
        //{
        //    try
        //    {
        //        return PolicyFireMdl.get_policy(code);
        //    }
        //    catch (Exception e)
        //    {
        //        return new { state = false, message = "Server Error", exception = e };
        //    }
            
        //}

        [HttpGet]
        [Route("api/policyfire/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyFireMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
      
        }

        // GET: PolicyMotor
        [HttpPost]
        [Route("api/policyfire/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD fire)
        {
            try
            {
                var result = PolicyFireMdl.save_fire(fire); 

                return new { state = true, message = "Fire Policy successfully Saved", result = new {

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

        public object Get()
        {
            try
            {
                return PolicyFireMdl.get_policys_est();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/policyfire/searchest/{q}")]
        public object Searchest(string q)
        {
            try
            {
                return PolicyFireMdl.search_policys_est(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpPost]
        [Route("api/policyfire/clmrisk")]
        public IEnumerable<object> get_estimate_risk(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = PolicyFireMdl.get_estimate_risk(riskJson.CLM_EST_RISK).ToList();

            return riskLst;
        }
    }
}