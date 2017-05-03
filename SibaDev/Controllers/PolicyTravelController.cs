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
    public class PolicyTravelController : ApiController
    {
        // GET: PolicyTravel
        //public object Get()
        //{
        //    try
        //    {
        //        return PolicyTravelMdl.get_policys();
        //    }
        //    catch (Exception e)
        //    {
        //        return new { state = false, message = "Server Error", exception = e };
        //    }
         
        //}

        //public dynamic Get(int code)
        //{
        //    try
        //    {
        //        return PolicyTravelMdl.get_policy(code);
        //    }
        //    catch (Exception e)
        //    {
        //        return new { state = false, message = "Server Error", exception = e };
        //    }
         
        //}

        [HttpGet]
        [Route("api/policytravel/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return PolicyTravelMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
       
        }

        [HttpPost]
        [Route("api/policytravel/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD policy)
        {
            try
            {
                var result = PolicyTravelMdl.save_policy(policy);

                return new { state = true,  message = "Travel Policy successfully Saved", result = new
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

        public object Get()
        {
            try
            {
                return PolicyTravelMdl.get_policys_est();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/policytravel/searchest/{q}")]
        public object Searchest(string q)
        {
            try
            {
                return PolicyTravelMdl.search_policys_est(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpPost]
        [Route("api/policytravel/clmrisk")]
        public IEnumerable<object> get_estimate_risk(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = PolicyTravelMdl.get_estimate_risk(riskJson.CLM_EST_RISK).ToList();

            return riskLst;
        }
    }

}
