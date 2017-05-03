using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SibaDev.Models;
using System.Data.Entity.Validation;
using Newtonsoft.Json.Linq;

namespace SibaDev.Controllers
{
    public class TransactionStructureController : ApiController
    {

        // GET: api/cover
        public object Get()
        {
            try
            {
                return TransactionStructureMdl.get_transactionstructures();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/cover/
        public dynamic Get(string code)
        {
            try
            {
                return TransactionStructureMdl.get_transactionstructure(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/transactionstructure/lov")]
        public object lov()
        {
            try
            {
                return TransactionStructureMdl.get_lov_transactionstructures();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpPost]
        [Route("api/transactionstructure/save")]
        public object save([FromBody]List<MS_UDW_TRANSACTION_STRUCTURE> transactionstructures)
        {
            try
            {
                foreach (var cty in transactionstructures)
                {
                    TransactionStructureMdl.save_transactionstructure(cty);
                }

                return new { state = true, message = "Transaction Structure Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/transactionstructure/search/{query}")]
        public object search(string query)
        {
            try
            {
                return TransactionStructureMdl.search_transactionstructures(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/transactionstructure/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = TransactionStructureMdl.get_transactionstructure(code);
                return result != null ? (object)new { state = true, name = result.TST_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

    }
}
