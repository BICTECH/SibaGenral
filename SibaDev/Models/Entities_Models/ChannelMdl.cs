using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ChannelMdl : Model
    {
        public static MS_SYS_CHANNEL get_channel(string code)
        {
            var db = new SibaModel();
            return (from channels in db.MS_SYS_CHANNEL where channels.MSC_CODE == code select channels).ToList().Select(channels => new MS_SYS_CHANNEL
            {
                MSC_CODE = channels.MSC_CODE,
                MSC_NAME = channels.MSC_NAME,
                MSC_DESC = channels.MSC_DESC,
                MSC_CRTE_BY = channels.MSC_CRTE_BY,
                MSC_CRTE_DATE = channels.MSC_CRTE_DATE,
                MSC_STATUS = channels.MSC_STATUS
            }).Single();
        }

        public static IEnumerable<MS_SYS_CHANNEL> get_channels()
        {
            var db = new SibaModel();
            return (from channels in db.MS_SYS_CHANNEL where channels.MSC_STATUS == "A" select channels).ToList().Select(channels => new MS_SYS_CHANNEL
            {
                MSC_CODE = channels.MSC_CODE,
                MSC_NAME = channels.MSC_NAME,
                MSC_DESC = channels.MSC_DESC,              
                MSC_CRTE_BY = channels.MSC_CRTE_BY,
                MSC_CRTE_DATE = channels.MSC_CRTE_DATE,
                MSC_STATUS = channels.MSC_STATUS
            });
        }

        public static IEnumerable<object> get_lov_channels()
        {
            var db = new SibaModel();
            return (from channels in db.MS_SYS_CHANNEL where channels.MSC_STATUS == "A" select new { CODE = channels.MSC_CODE, NAME = channels.MSC_NAME });
        }

        public static bool save_class(MS_SYS_CHANNEL cty)
        {
            var db = new SibaModel();
            if (cty.MSC_STATUS == "A")
            {
                var db_channel = db.MS_SYS_CHANNEL.Find(cty.MSC_CODE);
                if (db_channel != null)
                {
                    db.MS_SYS_CHANNEL.Attach(db_channel);
                    db_channel.Map(cty);
                }

            }
            else if (cty.MSC_STATUS == "U")
            {
                cty.MSC_STATUS = "A";
                db.MS_SYS_CHANNEL.Add(cty);
            }
            else if (cty.MSC_STATUS == "D")
            {
                var db_channel = db.MS_SYS_CHANNEL.Find(cty.MSC_CODE);
                if (db_channel != null)
                {
                    db.MS_SYS_CHANNEL.Attach(db_channel);
                    db_channel.MSC_STATUS = "D";
                }

            }
            return db.SaveChanges() > 0;
        }

        public static IEnumerable<MS_SYS_CHANNEL> search_channels(string q)
        {
            var db = new SibaModel();
            return (from cty in db.MS_SYS_CHANNEL
                    where (cty.MSC_CODE.ToLower().Contains(q.ToLower()) || cty.MSC_NAME.ToLower().Contains(q.ToLower())
                     || cty.MSC_DESC.ToLower().Contains(q.ToLower())) 
                     && cty.MSC_STATUS == "A"
                    select cty).ToList();

        }
    }
}