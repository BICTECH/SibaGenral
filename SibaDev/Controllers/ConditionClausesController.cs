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
    public class ConditionsClausesController : ApiController
    {
        // GET: api/conditionsclauses
        public object Get()
        {
            try
            {
                return ConditionsClausesMdl.get_conditionclauses();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/conditionsclauses/
        public dynamic Get(string code)
        {
            try
            {
                return ConditionsClausesMdl.get_conditionclause(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }       
        }

        [HttpGet]
        [Route("api/conditionsclauses/lov")]
        public object lov()
        {
            try
            {
                return ConditionsClausesMdl.get_lov_conditionsclausescovers();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }

        [HttpPost]
        [Route("api/conditionsclauses/save")]
        public object save([FromBody]List<MS_SYS_CONDS_CLAUSES> ccls)
        {
            try
            {
                foreach (var cty in ccls)
                {
                    ConditionsClausesMdl.save_conditionclause(cty);
                }
                return new { state = true, message = "Conditions & Clauses Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/conditionsclauses/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ConditionsClausesMdl.search_conditionclauses(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpGet]
        [Route("api/conditionsclauses/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ConditionsClausesMdl.get_conditionclause(code);
                return result != null ? (object)new { state = true, name = result.CCL_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }
    }
}
