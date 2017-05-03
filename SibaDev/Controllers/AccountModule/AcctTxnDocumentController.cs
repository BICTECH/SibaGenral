using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.AccountsEntitis.AccountsModel;
using SibaDev.Models;

namespace SibaDev.Controllers.AccountModule
{
    public class AcctTxnDocumentController : ApiController
    {
        // GET: api/AcctTxnDocument
        public object Get()
        {
            try
            {
                return TxnDocMdl.GetTxnDocs();
            }
            catch (Exception e)
            {
                return e;
            }
        }

        // GET: api/AcctTxnDocument/5
        public object Get(string id)
        {
            try
            {
                return TxnDocMdl.GetTxnDoc(id);
            }
            catch (Exception e)
            {
                return e;
            }
        }

        [HttpPost]
        [Route("api/AcctTxnDocument/save")]
        public object Save([FromBody]MS_ACCT_TXN_DOC document)
        {
            try
            {
                TxnDocMdl.Save(document);
                return new {state = true, message = "Txn Document Successfully Generated"};
            }
            catch (Exception e)
            {
                return e;
            }
        }

        [HttpGet]
        [Route("api/AcctTxnDocument/Search/{query}")]
        public object Search(string query)
        {
            try
            {
                return TxnDocMdl.Search(query);
            }
            catch (Exception e)
            {
                return e;
            }
        }

        [HttpGet]
        [Route("api/AcctTxnDocument/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = TxnDocMdl.GetTxnDoc(code);
                return new {state = true, name = result.ATD_NAME};
            }
            catch (Exception)
            {
                return new {state = false};
            }
        }

        [HttpGet]
        [Route("api/AcctTxnDocument/lov")]
        public object Lov()
        {
            try
            {
                return TxnDocMdl.GeTxnDocLov();
            }
            catch (Exception e)
            {
                return e;
            }
        }
    }
}
