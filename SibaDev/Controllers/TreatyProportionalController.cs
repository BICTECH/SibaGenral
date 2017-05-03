using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Models.Entities_Models;

namespace SibaDev.Controllers
{
    public class TreatyProportionalController : ApiController
    {
        // GET: TreatyProportional
        public object Get()
        {
            try
            {
                return TreatyProportionalMdl.get_treatyprops();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        public dynamic Get(string code)
        {
            try
            {
                return TreatyProportionalMdl.get_treatyprop(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpGet]
        [Route("api/treatyproportional/search/{q}")]
        public object Search(string q)
        {
            return TreatyProportionalMdl.search_treatygrps(q);
        }

        [HttpPost]
        [Route("api/treatyproportional/save")]
        public object Save([FromBody] MS_RI_PTTY_HEAD treatyprop)
        {
            try
            {
                TreatyProportionalMdl.save_treatyprop(treatyprop);
                return new { state = true, message = "Treaty Proportional Policy Successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }
    }
}