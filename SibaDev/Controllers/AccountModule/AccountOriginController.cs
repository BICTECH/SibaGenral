using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.AccountsEntitis;
using SibaDev.Models.AccountsEntitis.AccountsModel;
using WebGrease.Css.Extensions;
using SibaDev.Models;

namespace SibaDev.Controllers.AccountModule
{
    public class AccountOriginController : ApiController
    {
        // GET: api/AccountOrigin
        public object Get()
        {
            try
            {
                return AccountOriginMdl.GetAcctDocOrigins();
            }
            catch (Exception e)
            {
                return e;
            }
        }

        // GET: api/AccountOrigin/5
        public object Get(string id)
        {
            try
            {
                return AccountOriginMdl.GetAcctDocOrigin(id);
            }
            catch (Exception e)
            {
                return e;
            }
        }

        [HttpPost]
        [Route("api/AccountOrigin/save")]
        public object Save([FromBody] IEnumerable<MS_ACCT_DOC_ORIGIN> origins)
        {
            try
            {
                foreach (var result in origins.Select(AccountOriginMdl.Save))
                {
                }
                return new {state = true, message = "Account Origin(s) successfully Saved"};
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error whiles Saving Account Origin(s)", exception = e};
            }
        }

        [HttpGet]
        [Route("api/accountorigin/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AccountOriginMdl.Search(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error whiles Searching Account Origins", exception = e };
            }
        }

        [HttpGet]
        [Route("api/AccountOrigin/lov")]
        public object Lov()
        {
            try
            {
                return AccountOriginMdl.GetAcctDocOriginLov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error whiles Fetching Account Origins LOV", exception = e };
            }
        }

        [HttpGet]
        [Route("api/accountorigin/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = AccountOriginMdl.GetAcctDocOrigin(code);
                return new {state = true, name = result.DOC_ORIGN_NAME};
            }
            catch (Exception e)
            {
                return new { state = false, exception = e };
            }
        }
    }
}
