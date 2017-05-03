using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SibaDev.Controllers
{
    public class RIHomeController : Controller
    {
        // GET: RI 
        public ActionResult frmProportionalTreatySetup ()
        {
            return View();
        }

        public ActionResult frmTreatyGroup()
        {
            return View();
        }

        public ActionResult frmTreatyArrangement()
        {
            return View();
        }

        public ActionResult frmFACPlacement()
        {
            return View();
        }
    }
}