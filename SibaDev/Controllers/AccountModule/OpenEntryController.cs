using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.AccountsModel;

namespace SibaDev.Controllers.AccountModule
{
    public class OpenEntryController : ApiController
    {
        // GET: api/OpenEntry
        [HttpGet]
        [Route("api/openentry/customerentries/{custCode}")]
        public object CustomerOpenEntries(string custCode)
        {
            try
            {
                return OpenEntryMdl.GetCustomerOpenEntries(custCode);
            }
            catch (Exception e)
            {
                return new {statee = false, message = "Server Error", exception = e};
            }
        }

        // GET: api/OpenEntry
        [HttpGet]
        [Route("api/openentry/MatchedOpenEntryDetails/{txnSysId}")]

        public object MatchedOpenEntryDetails(int txnSysId)
        {
            try
            {
                return OpenEntryMdl.GetOpenEntriesMatchedDtls(txnSysId);
            }
            catch (Exception e)
            {
                return new { statee = false, message = "Server Error", exception = e };
            }
        }



    }
}
