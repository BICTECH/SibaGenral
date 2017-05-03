using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.Models.AccountsModel;

namespace SibaDev.Controllers.AccountModule
{
    public class ServiceTaxController : ApiController
    {
        // GET: api/ServiceTax
        public object Get()
        {
            try
            {
                return ServiceTaxMdl.GetAcctServiceTaxs();
            }
            catch (Exception e)
            {
                return e;
            }
        }

        // GET: api/ServiceTax/5
        public object Get(string id)
        {
            try
            {
                return ServiceTaxMdl.GetServiceTax(id);
            }
            catch (Exception e)
            {
                return e;
            }
        }

        [HttpPost]
        [Route("api/ServiceTax/save")]
        public object Save([FromBody] IEnumerable<MS_ACCT_SERVICE_TAX> taxs)
        {
            try
            {
                foreach (var result in taxs.Select(ServiceTaxMdl.Save))
                {
                }
                return new { state = true, message = "Account Origin(s) successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error whiles Saving Account Origin(s)", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ServiceTax/search/{query}")]
        public object Search(string query)
        {
            try
            {
                return ServiceTaxMdl.Search(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error whiles Searching Account Origins", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ServiceTax/lov")]
        public object Lov()
        {
            try
            {
                return ServiceTaxMdl.GetAcctDocOriginLov();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error whiles Fetching Account Origins LOV", exception = e };
            }
        }

        [HttpGet]
        [Route("api/ServiceTax/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ServiceTaxMdl.GetServiceTax(code);
                return new { state = true, name = result.TX_TAX_NAME };
            }
            catch (Exception e)
            {
                return new { state = false, exception = e };
            }
        }
    }
}
