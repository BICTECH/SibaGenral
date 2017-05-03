using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SibaDev.Models;
using SibaDev.Models.ReportsModel;

namespace SibaDev.Controllers
{
    public class PolicySchedulesController : Controller
    {

        public ActionResult PolicyBondSchedule(int id)
        {
            var policy = PolicyBondReportMdl.GetPolicySchedule(id);
            return View("rptBondSchedule", policy);
        }

        public ActionResult PolicyTravelSchedule(int id)
        {
            var policy = PolicyTravelReportMdl.GetPolicySchedule(id);
            return View("rptTravelSchedule", policy);
        }

        public ActionResult PolicyFireSchedule(int id)
        {
            var policy = PolicyFireReportMdl.GetPolicySchedule(id);
            return View("rptFireSchedule", policy);
        }

        public ActionResult PolicyGASchedule(int id)
        {
            var policy = PolicyHeaderMdl.GetPolicySchedule(id);
            return View("rptGASchedule", policy);
        }

        public ActionResult PolicyPASchedule(int id)
        {
            var policy = PolicyHeaderMdl.GetPolicySchedule(id);
            return View("rptPASchedule", policy);
        }

        public ActionResult PolicyMotorSchedule(int id)
        {
            var policy = PolicyMotorReportMdl.GetPolicySchedule(id);
            return View("frmSchedule", policy);
        }

        public ActionResult PolicyMotorCertificate(int id)
        {
            var policy = PolicyMotorReportMdl.GetPolicySchedule(id);
            return View("rptMotorCertificate", policy);
        }

        public ActionResult frmScheduletrail()
        {
            return View();
        }

    }
}