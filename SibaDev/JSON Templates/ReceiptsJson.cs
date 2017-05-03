using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.JSON_Templates
{
    public class ReceiptsJson
    {
        public MS_ACT_RECEIPTS_HEAD MS_ACT_RECEIPTS_HEAD { get; set; }
        public IEnumerable<ACCT_TXN_OPEN_ENTRY> ACCT_TXN_OPEN_ENTRY { get; set; }
        public IEnumerable<ACCT_OPEN_ENTRY_MATCH_DETL> ACCT_OPEN_ENTRY_MATCH_DETL { get; set; }
    }
}