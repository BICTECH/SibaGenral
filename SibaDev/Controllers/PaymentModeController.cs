using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.AccountsEntitis.AccountsModel;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class PaymentModeController : ApiController
    {
        // GET: api/PaymentMode
        public object Get()
        {
            try
            {
                return PaymentModeMdl.GetPaymntModes();
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }

        // GET: api/
        public dynamic Get(string id)
        {
            try
            {
                return PaymentModeMdl.GetPaymntMode(id);
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }

        [HttpGet]
        [Route("api/PaymentMode/lov")]
        public object Lov()
        {
            try
            {
                return PaymentModeMdl.GetPaymntModeLov();
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }

        [HttpPost]
        [Route("api/PaymentMode/save")]
        public object Save([FromBody]List<MS_SYS_PAYMNT_MODE> modes)
        {
            try
            {
                foreach (var result in modes.Select(PaymentModeMdl.Save))
                {
                    
                }

                return new { state = true, message = "Paymeny Mode(s) Successfully Saved" };
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }

        [HttpGet]
        [Route("api/PaymentMode/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return PaymentModeMdl.Search(query);
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }

        [HttpGet]
        [Route("api/PaymentMode/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = PaymentModeMdl.GetPaymntMode(code);
                return result != null ? (object)new { state = true, name = result.PM_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new {state = false, messaage = "Server Error", exception = e};
            }

        }
    }
}
