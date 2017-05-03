using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SibaDev.Models;
using SibaDev.Models.ReportsModel;
namespace SibaDev.Controllers
{
    public class StaticReportController : Controller
    {
        // GET: StaticReportBond
        public ActionResult PolicySchedule(int polhid)
        {
            var policy = PolicyHeaderMdl.GetPolicySchedule(polhid);
            return View("frmBondReport", policy);
        }

        public ActionResult PolicyHeaderSchedule(int id)
        {
            var policy = PolicyHeaderMdl.GetPolicySchedule(id);
            return View("rptDebitReport", policy);
        }

        public ActionResult PolicyHeadeReceipt(int id)
        {
            var policy = PolicyHeaderMdl.GetPolicySchedule(id);
            return View("rptReceiptVoucher", policy);
        }

       
    }
}