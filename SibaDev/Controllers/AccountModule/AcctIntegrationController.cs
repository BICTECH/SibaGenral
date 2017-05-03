using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;


namespace SibaDev.Controllers.AccountModule
{
    public class AcctIntegrationController : ApiController
    {

        // GET: api/City
        public object Get()
        {
            try
            {
                return AcctIntegrationMdl.GetAcctsIntegrations();
            }
            catch (Exception e)
            {
                return new {state = false, message="Server Error", exception = e}; 
            }

        }

        // GET: api/City/5
        public dynamic Get(int id)
        {
            try
            {
                return AcctIntegrationMdl.GetAcctsIntegration(id);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpPost]
        [Route("api/AcctIntegration/Save")]
        public object Save([FromBody]List<MS_ACCTS_INTEGRATION> acctIntegration)
        {
            try
            {
                foreach (var accInt in acctIntegration)
                {
                    AcctIntegrationMdl.SaveAcctIntegration(accInt);
                }

                return new { state = true, message = "Transaction Successfully Saved" };
            }
            catch (Exception e)
            {

                return new {state = false, message="Server Error", exception = e}; 
            }
           
        }
        
        [HttpGet]
        [Route("api/AcctIntegration/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AcctIntegrationMdl.Search(query);
            }
            catch (Exception e)
            {
                return new {state = false, message="Server Error", exception = e}; 
            }
            
        }

        
        [HttpGet]
        [Route("api/AcctIntegration/lov")]
        public object Lov()
        {
            try
            {
                return AcctCategoryMdl.GetAcctCategoryLov();
            }
            catch (Exception e)
            {
                return new {state = false, message="Server Error", exception = e}; 
            }
            
        }

        //[HttpGet]
        //[Route("api/AcctIntegration/FinAcctIntegrationLov/{query}")]
        //public object FinAcctIntegrationLov(string query)
        //{
        //    return acctCategoryMdl.findAcctIntegrationLov(query);
        //}
    }
}
