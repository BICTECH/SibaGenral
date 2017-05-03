using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;


namespace SibaDev.Controllers.AccountModule
{
    public class AcctCategoryController : ApiController
    {
        // GET: api/AcctCategory
        public object Get()
        {
            try
            {
                return AcctCategoryMdl.GetAcctCategories();
            }
            catch (Exception e)
            {
                return e;
            }
           
        }

        // GET: api/AcctCategory/5
        public object Get(string id)
        {
            try
            {
                return AcctCategoryMdl.GetAcctCategory(id);
            }
            catch (Exception e)
            {
                return e;
            }
           
        }

        [HttpPost]
        [Route("api/AcctCategory/Save")]
        public object Save([FromBody]List<MS_ACCT_CATEGORY> acctCategory)
        {
            try
            {
                foreach (var accTxn in acctCategory)
                {
                    AcctCategoryMdl.SaveAcctCategory(accTxn);
                }

                return new { state = true, message = "Transaction Successfully Saved" };
            }
            catch (Exception e)
            {
                return e;
            }
            
        }
        
        [HttpGet]
        [Route("api/AcctCategory/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AcctCategoryMdl.SearchAcctCategory(query);
            }
            catch (Exception e)
            {
                return e;
            }
            
        }
       

        [HttpGet]
        [Route("api/AcctCategory/lov")]
        public object Lov()
        {
            try
            {
                return AcctCategoryMdl.GetAcctCategoryLov();
            }
            catch (Exception e)
            {
                return e;
            }
            
        }

        [HttpGet]
        [Route("api/AcctCategory/FinAcctCategoryLov/{query}")]
        public object FinAcctCategoryLov(string query)
        {
            try
            {
                return AcctCategoryMdl.FindAcctCategoryLov(query);
            }
            catch (Exception e)
            {
                return e;
            }
            
        }

        [HttpGet]
        [Route("api/AcctCategory/Check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = AcctCategoryMdl.GetAcctCategory(code);
                return new {state = true, name = result.ACAT_NAME};
            }
            catch (Exception)
            {
                return new { state = false };
            }
        }
    }
}
