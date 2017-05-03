using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity.Validation;
using System.Web.Http.Description;
using SibaDev.Models;
using Newtonsoft.Json.Linq;


namespace SibaDev.Controllers
{


    public class getMotorScheduleController : ApiController
    {


        public IHttpActionResult MotorData(JObject jsonData)
        {
            //Internal assignment

            int polhSysID = 0;

            //Declaring Json Dynamic Data
            dynamic objCov = jsonData;

            //Retrieving and assigning Parameters
            foreach (dynamic polhSysData in objCov.sysID)
            {

                polhSysID = Convert.ToInt32(polhSysData.parampolhSysID);
            }

            using (SibaModel db = new SibaModel())
            {
                var motorPolicyData = (from polsysID in db.INS_UWD_POLICY_HEAD
                                           //join vehSysID in db.INS_UWD_VEHICLE_RISK on polsysID.POLH_SYS_ID equals vehSysID.VEH_POLH_SYS_ID  //cov.CVR_CODE   
                                       where polsysID.POLH_SYS_ID == polhSysID
                                       select new
                                       {


                                           POLH_DATA = (from polhData in db.INS_UWD_POLICY_HEAD
                                                            where polhData.POLH_SYS_ID == polhSysID
                                                        select new
                                                        {
                                                            POLH_CUST_CODE = polhData.POLH_CUST_CODE,
                                                            POLH_DISPLAY_NO = polhData.POLH_DISPLAY_NO,
                                                            POLH_POL_STATE = polhData.POLH_POL_START_DATE,
                                                            POLH_POL_END_DATE = polhData.POLH_POL_END_DATE,                                                            
                                                            POLH_POL_SI_FC = polhData.POLH_POL_SI_FC,
                                                            POLH_POL_PREM_FC = polhData.POLH_POL_PREM_FC,

                                                        }).ToList(),

                                           VEH_DATA = (from vehData in db.INS_UDW_BONDS
                                                       where vehData.BOND_POLH_SYS_ID == polhSysID
                                                       select new
                                                       {
                                                           //BOND_LOB = vehData.BOND_LOB,
                                                           BOND_DESCRIPTION = vehData.BOND_DESCRIPTION,
                                                           //BOND_SHT_DESCRIPTION = vehData.BOND_SHT_DESCRIPTION,
                                                           //BOND_INS_TYPE = vehData.BOND_INS_TYPE,
                                                           //BOND_GROUP = vehData.BOND_GROUP,
                                                           BOND_CURRENCY = vehData.BOND_CURRENCY,
                                                           BOND_CURRENCY_RATE = vehData.BOND_CURRENCY_RATE,
                                                           BOND_START_DATE = vehData.BOND_START_DATE,
                                                           BOND_END_DATE = vehData.BOND_END_DATE,
                                                           BOND_UW_YEAR = vehData.BOND_UW_YEAR,

                                                       }).ToList(),
                                       }).ToList();



                if (motorPolicyData == null)
                {
                    return NotFound();
                }
                else
                {

                    return Ok(motorPolicyData);
                }

            }
        }
    }
}
