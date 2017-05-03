using SibaDev.Libs;
using SibaDev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SibaDev.Libs.ReInsurance;

namespace SibaDev.Controllers
{
    public class ConfirmationController : ApiController
    {
        [HttpGet]
        [Route("api/Confirmation/confirmPolicy/{polId}")]
        public object Confirm(int polId)
        {
            var db = new SibaModel();
            try
            {

                var polHead = PolicyTravelMdl.get_policy(polId);
                            
                var premRegs = (from pr in db.INS_PREMIUM_REGISTER where pr.PR_POL_SYS_ID == polId select pr);
                if (premRegs.Any())
                {
                    var premReg = premRegs.Single();
                    var acntInts = (from a in db.MS_ACCTS_INTEGRATION where a.INT_PRODUCT == premReg.PR_COB && a.INT_TXN_SOURCE == premReg.PR_TXN_REF select a);
                    if (acntInts.Any())
                    {
                        var acntInt = acntInts.SingleOrDefault();
                        var polFees = (from f in db.INS_UDW_POL_FEES where f.POL_FEE_POL_SYS_ID == polId select f).ToList();
                        var commissions = (from c in db.INS_UWD_INTERMEDIARY_COMM where c.CMM_POL_SYS_ID == polId select c).ToList();
                        var vehrisk = (from u in db.INS_UWD_VEHICLE_RISK where u.VEH_POLH_SYS_ID == polId select u).ToList();
                        var acntMod = new PolicyApprovalMdl();
                        var result = acntMod.ForwardTransaction(polHead, vehrisk, premReg, acntInt, polFees, commissions);
                        return result;
                    }
                    
                    else return new { state = false, message = "The Account is not properly setup" };
                }

                else
                    return new {state = false, message = "No record found in the premium register" };
            }
            catch (Exception e)
            {
                return new { state = false, message = "Server Error", exception = e };
            }
        }

    }
}
