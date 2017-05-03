using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class MotorRiskFeeController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return MotorRiskFeeMdl.get_motorriskfees();
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
                return MotorRiskFeeMdl.get_motorriskfee(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motorriskfee/lov")]
        public object lov()
        {
            try
            {
                return MotorRiskFeeMdl.get_lov_motorriskfee();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/motorriskfee/save")]
        public object save([FromBody]List<MS_MOTOR_RISK_FEES> compfee)
        {
            try
            {
                foreach (var cty in compfee)
                {
                    MotorRiskFeeMdl.save_motorriskfee(cty);
                }
                return new { state = true, message = "Motor Risk Fee Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motorriskfee/search/{query}")]
        public object search(string query)
        {
            try
            {
                return MotorRiskFeeMdl.search_motorriskfees(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motorriskfee/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = MotorRiskFeeMdl.get_motorriskfee(code);
                return result != null ? (object)new { state = true, name = result.MRF_FEE_AMOUNT } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
