using System;
using System.Web.Http;
using SibaDev.Models;


namespace SibaDev.Controllers.AccountModule
{
    public class MainAccountController : ApiController
    {
        //api/MainAccount
        public object Get()
        {
            try
            {
                return MainAccountMdl.GetAllMainAcct();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        //api/MainAccount/5
        public object Get(string id)
        {
            try
            {
                return MainAccountMdl.GetMainAccount(id);
            }
            catch (Exception e)
            {

                return new { state = false, message = "Server Error", exception = e };
            }
        }
        
        //Save Main Account
        [HttpPost]
        [Route("api/MainAccount/Save")]
        
        public object Save([FromBody] MS_ACCT_MAIN_ACCOUNT acctMain)
        {
            try
            {
                MainAccountMdl.SaveMainAccount(acctMain);
                return new { state = true, message = "Transaction successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        

        [HttpGet]
        [Route("api/MainAccount/lov")]
        public object Lov()
        {
            try
            {
                return MainAccountMdl.GetLovMainAcct();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        [HttpGet]
        [Route("api/MainAccount/checkCode/{Code}")]
        public object CheckCode(string code)
        {
            try
            {
                var result = MainAccountMdl.GetMainAccount(code);

                return result != null ? (object)new { state = true, name = result.ACCT_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }


        // Find main Account by code 
        [HttpGet]
        [Route("api/MainAccount/FinMainAcctLov/{query}")]
        public object FinMainAcctLov(string query)
        {
            try
            {
                return MainAccountMdl.FinMainAcctLov(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        //GET: api/MainAccount/5

        [HttpGet]
        [Route("api/MainAccount/searchAll")]
        public object SearchAll()
        {
            try
            {
                return MainAccountMdl.GetAllMainAcct();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        //GET: api/MainAccount/5

        [HttpGet]
        [Route("api/MainAccount/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return MainAccountMdl.Search(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }
    }
}
