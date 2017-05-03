using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.AccountsEntitis;
using SibaDev.Models.AccountsEntitis.AccountsModel;
using SibaDev.Models;

namespace SibaDev.Controllers.AccountModule
{
    public class PaymentController : ApiController
    {
        //api/Payment
        public object Get()
        {
            try
            {
                return AccountPaymentMdl.GetActPayments();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        //api/Payment/5
        public object Get(int id)
        {
            try
            {
                return AccountPaymentMdl.GetActPayment(id);
            }
            catch (Exception e)
            {

                return new { state = false, message = "Server Error", exception = e };
            }
        }

        //Save Account Payment(s)
        [HttpPost]
        [Route("api/Payment/Save")]

        public object Save([FromBody] MS_ACT_PAYMENTS_HEAD receipt)
        {
            try
            {
                var newReceipt = AccountPaymentMdl.Save(receipt);
                return new { state = true, message = "Account Payment(s) successfully Saved", data = new { newReceipt.APH_SYS_ID, newReceipt.APH_STATUS } };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }




        [HttpGet]
        [Route("api/Payment/lov")]
        public object Lov()
        {
            try
            {
                return AccountPaymentMdl.GetActPaymentLov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        //GET: api/Payment/5

        [HttpGet]
        [Route("api/Payment/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return AccountPaymentMdl.Search(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }


        [HttpPost]
        [Route("api/Payment/transaction")]
        public object Transaction([FromBody] MS_ACT_PAYMNT_CONFIRMATION_LOG log)
        {
            try
            {
                var result = AccountPaymentMdl.TransactionProcessing(log);
                return new { state = true, message = log.PCL_ACTION == "Confirm" ? "Account Payment Successfully Confirmed" : "Account Payment Successfully Unconfirmed" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }
    }
}
