using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Models;

namespace SibaDev.Controllers
{
    public class ChannelController : ApiController
    {
        // GET: api/channel
        public object Get()
        {
            try
            {
                return ChannelMdl.get_channels();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        // GET: api/Company/
        public dynamic Get(string code)
        {
            try
            {
                return ChannelMdl.get_channel(code);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/channel/lov")]
        public object lov()
        {
            try
            {
                return ChannelMdl.get_lov_channels();
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
            
        }

        [HttpPost]
        [Route("api/channel/save")]
        public object save([FromBody]List<MS_SYS_CHANNEL> channel)
        {
            try
            {
                foreach (var cty in channel)
                {
                    ChannelMdl.save_class(cty);
                }

                return new { state = true, message = "Channel Successfully Created" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }


        [HttpGet]
        [Route("api/channel/search/{query}")]
        public object search(string query)
        {
            try
            {
                return ChannelMdl.search_channels(query);
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
           
        }

        [HttpGet]
        [Route("api/channel/check/{code}")]
        public object Check(string code)
        {
            try
            {
                var result = ChannelMdl.get_channel(code);
                return result != null ? (object)new { state = true, name = result.MSC_NAME } : new { state = false };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
          
        }
    }
}
