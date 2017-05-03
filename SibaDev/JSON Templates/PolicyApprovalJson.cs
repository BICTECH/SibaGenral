using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.JSON_Templates
{
    public class PolicyApprovalJson
    {
        public int POL_SYS_ID { get; set; }
        public int POL_END_NO { get; set; }
        public int TXN_TYPE { get; set; }
    }
}