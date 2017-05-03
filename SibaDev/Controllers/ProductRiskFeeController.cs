using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers
{
    public class ProductRiskFeeController : ApiController
    {
        // GET: api/
        public object Get()
        {
            try
            {
                return ProductRiskFeeMdl.get_prodriskfees();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }          
        }

        // GET: api/
        public dynamic Get(string code)
        {
            try
            {
                return ProductRiskFeeMdl.get_prodriskfee(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }           
        }

        [HttpGet]
        [Route("api/productriskfee/lov")]
        public object lov()
        {
            try
            {
                return ProductRiskFeeMdl.get_lov_prodriskfee();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }          
        }

        [HttpPost]
        [Route("api/productriskfee/save")]
        public object save([FromBody]List<MS_PRODUCT_RISK_FEES> productfees)
        {
            try
            {
                foreach (var cty in productfees)
                {
                    ProductRiskFeeMdl.save_prodriskfee(cty);
                }
                return new { state = true, message = "Product Risk Fee Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }         
        }

        [HttpGet]
        [Route("api/productriskfee/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ProductRiskFeeMdl.search_prodriskfees(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }         
        }

        [HttpGet]
        [Route("api/productriskfee/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ProductRiskFeeMdl.get_prodriskfee(code);
                return result != null ? (object)new { state = true, name = result.PRF_FEE_AMOUNT } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }         
        }

        [HttpPost]
        [Route("api/productriskfee/RiskFees")]
        public IEnumerable<object> RisksFees(ProductsRisksFeesJSON riskFeesJson)
        {
            var rskFeelist = ProductRiskFeeMdl.RiskFees(riskFeesJson.PRD_CODE).ToList();

            return rskFeelist;
        }

        [HttpPost]
        [Route("api/productriskfee/FireFees")]
        public IEnumerable<object> FireFees(ProductsRisksFeesJSON riskFeesJson)
        {
            var rskFeelist = ProductRiskFeeMdl.FireFees(riskFeesJson.PRD_CODE).ToList();

            return rskFeelist;
        }

        [HttpPost]
        [Route("api/productriskfee/TravelFees")]
        public IEnumerable<object> TravelFees(ProductsRisksFeesJSON riskFeesJson)
        {
            var rskFeelist = ProductRiskFeeMdl.TravelFees(riskFeesJson.PRD_CODE).ToList();

            return rskFeelist;
        }
    }
}
