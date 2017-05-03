using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SibaDev.Controllers.ReInsurance
{
    public class ReInsuranceController : ApiController
    {

        public object RIApportionment()
        {
            try
            {
                return null;
            }
            catch (Exception e)
            {
                return new {state = false, message = e.Message, exception = e};
            }
        }
    }
}
