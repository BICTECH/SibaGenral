using System;
using System.Web.Http;
using SibaDev.JSON_Templates;
using SibaDev.Models.AccountsEntitis;
using SibaDev.Models.AccountsEntitis.AccountsModel;
using SibaDev.Models;

namespace SibaDev.Controllers.AccountModule
{
    public class ReceiptsController : ApiController
    {

        //api/Receipts
        public object Get()
        {
            try
            {
                return AccountReceiptsMdl.GetReceipts();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        //api/Receipts/5
        public object Get(int id)
        {
            try
            {
                return AccountReceiptsMdl.GetReceipt(id);
            }
            catch (Exception e)
            {

                return new { state = false, message = "Server Error", exception = e };
            }
        }

        //Save Account Receipt(s)
        [HttpPost]
        [Route("api/Receipts/Save")]
        public object Save([FromBody] ReceiptsJson json)
        {
            try
            {
                var newReceipt = AccountReceiptsMdl.Save(json);
                return new { state = true, message = "Account Receipt(s) successfully Saved", data = new {newReceipt.ARH_SYS_ID, newReceipt.ARH_STATUS} };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }




        [HttpGet]
        [Route("api/Receipts/lov")]
        public object Lov()
        {
            try
            {
                return AccountReceiptsMdl.GetReceiptLov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        //GET: api/Receipts/5

        [HttpGet]
        [Route("api/Receipts/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AccountReceiptsMdl.Search(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/receipts/transaction")]
        public object Transaction([FromBody] MS_ACT_RCPT_CONFIRMATION_LOG log)
        {
            try
            {
                var result = AccountReceiptsMdl.TransactionProcessing(log);
                return new {state = true, message = log.RCL_ACTION=="Confirm"?"Account Receipt Successfully Confirmed":"Account Receipt Successfully Unconfirmed" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }


        [HttpGet]
        [Route("api/receipts/CustomerMainAccountsLov")]
        public object GetCustomerMainAccouontsLov()
        {
            try
            {
                return AccountReceiptsMdl.GetCustomerMainAcctsLov();
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error", exception = e};
            }
        }


        [HttpGet]
        [Route("api/receipts/MainAccountCustomersLov/{mainActCode}/{custCode}")]
        public object GetMainAccountCustomers(string mainActCode,string custCode)
        {
            try
            {
                return AccountReceiptsMdl.GetMainAccountCustomerLov(mainActCode, custCode);
            }
            catch (Exception e)
            {
                return new {state = false, message = "Server Error", exception = e};
            }
        }

    }
}
