using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class PremiumTariffController : ApiController
    {
        // GET: api/cover
        public object Get()
        {
            return PremiumTariffMdl.get_premiumtariffs();
        }

        // GET: api/Premium tariff/      
        public dynamic Get(string code)
        {
            return PremiumTariffMdl.get_premiumtariff(code);
        }

        [HttpGet]
        [Route("api/PremiumTariff/tarrifs/{code}")]
        public object Tarrifs(string code)
        {
            return PremiumTariffMdl.GetTarrifs(code);
        }


        [HttpPost]
        [Route("api/premiumtariff/save")]
        public object save([FromBody]List<MS_UDW_PREM_TARRIFS> premiumtariff)
        {
            foreach (var cty in premiumtariff)
            {
                PremiumTariffMdl.save_premiumtariff(cty);
            }

            return new { state = true, message = "Premium Tariff Successfully Created" };
        }


        [HttpGet]
        [Route("api/premiumtariff/search/{query}")]
        public object search(string query)
        {
            return PremiumTariffMdl.search_premiumtariffs(query);
        }

        //[HttpGet]
        //[Route("api/premiumtariff/check/{code}")]
        //public object Check(string code)
        //{
        //    var result = PremiumTariffMdl.get_premiumtariff(code);
        //    return result != null ? (object)new { state = true, name = result.TFF_PRD_CODE } : new { state = false };
        //}
    }
}
