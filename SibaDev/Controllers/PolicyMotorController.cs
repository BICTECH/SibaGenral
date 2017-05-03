using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Libs;
using SibaDev.Models.History_Models;
using SibaDev.JSON_Templates;
using SibaDev.Models.Entities_Models;

namespace SibaDev.Controllers
{

    public class PolicyMotorController : ApiController
    {

        // GET: api/Product
        public object Get()
        {
            try
            {
                return PolicyMotorMdl.get_policys_est();
            }
            catch (Exception e)
            {
                return new {state=false,message = "Server Error", exception=e};
            }
            
        }

        [HttpGet]
        [Route("api/policymotor/searchest/{q}")]
        public object Searchest(string q) 
        {
            try
            {
                return PolicyMotorMdl.search_policys_est(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        // GET: api/PolicyMotor/
        public dynamic Get(int id)
        {
            try
            {
                return PolicyMotorMdl.get_policy(id);
            }
            catch (Exception e)
            {
                return new {state=false,message = "Server Error", exception=e};
            }
            
        }

        [HttpGet]
        [Route("api/policymotor/search/{q}")]
        //public object Search([FromUri] string query) => PolicyMotorMdl.search_policys(query);
        public object Search(string q)
        {
            try
            {
                return PolicyMotorMdl.search_policys(q);
            }
            catch (Exception e)
            {
                return new {state=false, message = "Server Error", exception=e};
            }
            
        }

        [HttpGet]
        [Route("api/policymotor/endDeletion/{polSysId}/{endNo}")]
        public object EndDeletionData(int polSysId, int endNo)
        {

            try
            {
                var motor =  PolicyHistoryMdl.GetHPolicyHead(polSysId, endNo);
                motor.POLH_TXN_STATE = "P";
                var result = PolicyMotorMdl.SaveEndsmntCancl(motor);
             
                
                return new
                {
                    state = true,
                    message = "Endorsement Successfully canceled",
                    //data = motor
                };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        // GET: PolicyMotor
        [HttpPost]
        [Route("api/policymotor/save")]
        public object Save([FromBody] INS_UWD_POLICY_HEAD motor)
        {
            try
            {
                var result = PolicyMotorMdl.save_motor(motor);
                
                return new { state = true, message = "Motor Policy Successfully Saved", result = new {
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
                return new { state = false, message = "Server Error", exception = e};
            }
        }


        [HttpPost]
        [Route("api/policymotor/clmrisk")]
        public IEnumerable<object> get_estimate_risk(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = PolicyMotorMdl.get_estimate_risk(riskJson.CLM_EST_RISK).ToList();

            return riskLst;
        }


    }
}