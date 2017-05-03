using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class MotorRiskController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return MotorRiskMdl.get_motorrisks();
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
                return MotorRiskMdl.get_motorrisk(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motorrisk/lov")]
        public object lov()
        {
            try
            {
                return MotorRiskMdl.get_lov_motor_risks();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/motorrisk/save")]
        public object save([FromBody]List<MS_UDW_MOTOR_RISK> motorrisks)
        {
            try
            {
                foreach (var cty in motorrisks)
                {
                    MotorRiskMdl.save_motorrisk(cty);
                }

                return new { state = true, message = "Motor Risk Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/motorrisk/search/{query}")]
        public object search(string query)
        {
            try
            {
                return MotorRiskMdl.search_motorrisks(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motorrisk/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = MotorRiskMdl.get_motorrisk(code);
                return result != null ? (object)new { state = true, name = result.MRK_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
