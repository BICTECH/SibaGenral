using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class MotorTariffController : ApiController
    {
        // GET: api/cover
        public object Get()
        {
            try
            {
                return MotorTariffMdl.get_motortariffs();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        //GET: api/Premium tariff/      
        public dynamic Get(string code)
        {
            try
            {
                return MotorTariffMdl.get_motortariff(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/motortariff/lov")]
        public object lov()
        {
            try
            {
                return MotorTariffMdl.get_lov_motor_risks();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpPost]
        [Route("api/motortariff/save")]
        public object Save([FromBody] MS_MOTOR_PROD motortariff)
        {
            try
            {
                MotorTariffMdl.save_motortariff(motortariff);
                return new { state = true, message = "Motor Tariff successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpGet]
        [Route("api/motortariff/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return MotorTariffMdl.search_motortariffs(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpGet]
        [Route("api/motortariff/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = MotorTariffMdl.get_motorprod(code);
                return result != null ? (object)new { state = true, name = result.MTP_PRD_CODE } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

    }
}
