using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models.RI_Models;
using SibaDev.Models;
using SibaDev.JSON_Templates;

namespace SibaDev.Controllers.RIModule
{
    public class TreatyArrangementController : ApiController
    {
        // GET: TreatyArrangement
        [HttpGet]
        [Route("api/TreatyArrangement/search/{q}")]
        public object Search(string q)
        {
            try
            {
                return TreatyArrangementMdl.search_ttyHead(q);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }

        }

        [HttpPost]
        [Route("api/TreatyArrangement/save")]
        public object Save([FromBody] INS_RI_TTY_HEAD treaty)
        {
            try
            {
                TreatyArrangementMdl.save_treaty(treaty);
                return new { state = true, message = "Treaty successfully Saved" };
            }
            catch (Exception e)
            {
                return new { state = false, message = e };
            }
        }

        [HttpPost]
        [Route("api/TreatyArrangement/excess")]
        public IEnumerable<object> get_estimate_risk(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = TreatyArrangementMdl.get_excess(riskJson.TTA_POLH).ToList();

            return riskLst;
        }
    }
}