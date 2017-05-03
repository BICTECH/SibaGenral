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
    public class deftSequenceNoController : ApiController
    {

        [HttpGet]
        [Route("api/deftSequenceNo/getSequence/{seqName}")]
        public object getSequence(string seqName)
        {
            try
            {
                using (SibaModel db = new SibaModel())
                {
                    // prepare sql statement to pass to database                   
                    string seqSql = "SELECT " + seqName + ".NEXTVAL from dual";

                    //call sql query directly to the data base
                    return db.Database.SqlQuery<decimal>(seqSql).Single();

                    
                }

            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e.Message };
            }

        }
    }
}
