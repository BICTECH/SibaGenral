using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class EndorsementsController : ApiController
    {

        [HttpGet]
        [Route("api/Endorsements/lov")]
        public object Endorsementlov()
        {
            try
            {
                return EndorsementsMdl.GetEndorsementsLov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        

 
    }
}
