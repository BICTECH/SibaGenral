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
    public class getSequenceNoController : ApiController
    {
        private string getSeqName = "";
        private string outCome = "";

        public string SequenceName(JObject jsonData)
        {
            //json object passed from form
            try
            {

                using (SibaModel db = new SibaModel())
                {

                    // instance the json object as a dynamic object
                    dynamic objSeq = jsonData;

                    foreach (dynamic seqName in objSeq.seq)
                    {
                        //get the name of the sequence passed from form
                        getSeqName = seqName.oraSeqName;

                    };

                    // prepare sql statement to pass to database                   
                    string seqSql = "SELECT " + getSeqName + ".NEXTVAL from dual";

                    //call sql query directly to the data base
                    var seqNum = db.Database.SqlQuery<decimal>(seqSql).Single();

                    //find out if a value is returned
                    if (seqNum.ToString() != "")
                    {
                        outCome = seqNum.ToString();
                    }
                    else
                    {
                        outCome = "Sequence Not generated";
                    }
                }

                // return the out come of the actions above
                return outCome;

            }
            catch (Exception ex)
            {
                // if error occured return the appropriate message
                return ex.Message;
            }
        }

    }
}
