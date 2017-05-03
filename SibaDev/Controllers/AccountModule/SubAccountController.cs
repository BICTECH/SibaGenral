using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using SibaDev.Models;


namespace SibaDev.Controllers.AccountModule
{
    public class SubAccountController : ApiController
    {

        // GET: api/SubAccont
        public object Get()
        {
            try
            {
                return SubAccountMdl.GetSubAccounts();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        // GET: api/SubAccont/5
        public object Get(string id)
        {
            try
            {
                return SubAccountMdl.GetSubAccount(id);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/SubAccount/lov")]
        public object Lov()
        {
            try
            {
                return SubAccountMdl.GetLovSubAcct();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }
        

        [HttpPost]
        [Route("api/SubAccount/Save")]
        
        public object Save([FromBody] MS_ACCT_SUB_ACCOUNT subAccount)
        {
            try
            {
                SubAccountMdl.SaveSubAccount(subAccount);
                return new { state = true, message = "Transaction successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/SubAccount/checkCode/{Code}")]
        public object CheckCode(string code)
        {
            try
            {
                var result = SubAccountMdl.GetSubAccount(code);

                return result != null ? (object)new { state = true, name = result.SUB_ACCT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/subaccount/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return SubAccountMdl.SearchAccounts(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

    }
}
