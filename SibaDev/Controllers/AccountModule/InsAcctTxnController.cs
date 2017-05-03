using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;


namespace SibaDev.Controllers.AccountModule
{
    public class InsAcctTxnController : ApiController
    {
        // GET: api/InsAcctTxn
        public object Get()
        {
            try
            {
                return AccTxnTypeMdl.GetInsAcctTxnTypes();
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error While Fethcing Account Transaction Types", exception = e};
            }
            
        }

        // GET: api/InsAcctTxn/5
        public object Get(string id)
        {
            try
            {
                return AccTxnTypeMdl.GetInsAcctTxnType(id);
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error While Fethcing Account Transaction Type", exception = e};
            }
        }



        [HttpPost]
        [Route("api/InsAcctTxn/Save")]
        public object Save([FromBody]List<MS_ACCT_INS_TXN_TYPE> txnTyepes)
        {
            try
            {
                foreach (var result in txnTyepes.Select(AccTxnTypeMdl.save_insAcctTxnType))
                {
                    
                }

                return new { state = true, message = "Account transaction types Successfully Saved" };
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error Whiles Saving Account Transaction Types", exception = e};
            }
            
        }



        [HttpGet]
        [Route("api/InsAcctTxn/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AccTxnTypeMdl.Search(query);
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error whiles serching for Accoun Transaction Types", exception = e};
            }
        }

        [HttpGet]
        [Route("api/insaccttxn/lov")]
        public object Lov()
        {
            try
            {
                return AccTxnTypeMdl.GetAcctTxnTypeLov();
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error Whiles Fetching Account Transactions LOV", exception = e};
            }
        }

        [HttpGet]
        [Route("api/insaccttxn/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = AccTxnTypeMdl.GetInsAcctTxnType(code);
                return new {state = true, name = result.TXN_NAME};
            }
            catch (Exception e)
            {
                return new {state = false, exception=e};
            }
        }

    }
}
