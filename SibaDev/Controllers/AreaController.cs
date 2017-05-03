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
    public class AreaController : ApiController
    {
        // GET: api/Area
        public object Get()
        {
            try
            {
                return AreaMdl.get_areas();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        // GET: api/Area/5
        public dynamic Get(string code)
        {
            try
            {
                return AreaMdl.get_area(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/area/lov")]
        public object lov()
        {
          try
            {
                return AreaMdl.get_lov_areas();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpPost]
        [Route("api/area/save")]
        public object save([FromBody]List<MS_SYS_AREA> areas)
        {
            try
            {
                foreach (var are in areas)
                {
                    AreaMdl.save_area(are);
                }

                return new { state = true, message = "Areas Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }



        [HttpGet]
        [Route("api/area/search/{query}")]
        public object search(string query)
        {
            try
            {
                return AreaMdl.search_areas(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpGet]
        [Route("api/area/check/{code}")]
        public object Check(string code)
        {
           try
            {
                var result = AreaMdl.get_area(code);
                return result != null ? (object)new { state = true, name = result.ARE_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

        [HttpPost]
        [Route("api/area/areaLov")]
        public IEnumerable<object> getAreas(ProductsRisksCoversJSON riskJson)
        {
            var riskLst = AreaMdl.get_Area_Lov(riskJson.PRD_CODE).ToList();

            return riskLst;
        }

    }
}
