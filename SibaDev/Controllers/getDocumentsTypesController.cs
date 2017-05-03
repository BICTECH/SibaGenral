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
    public class getDocumentsTypesController : ApiController
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



                var motorPolicyData = (from polsysID in db.MS_SYS_DOCUMENT_TYPES
                                       join vehSysID in db.MS_SYS_DOCUMENTS_TYPE_NO_TYPES on polsysID.DTY_SYS_ID equals vehSysID.DTY_SYS_ID  //cov.CVR_CODE   
                                       where polsysID.DTY_SYS_ID == polhSysID
                                       select new
                                       {
                                           POLH_DATA = (from polheaddata in db.MS_SYS_DOCUMENT_TYPES

                                                        where polheaddata.DTY_SYS_ID == polhSysID
                                                        select new
                                                        {
                                                            DTY_SYS_ID = polheaddata.DTY_SYS_ID,
                                                            DTY_TAX = polheaddata.DTY_TAX,
                                                            DTY_DEFF_ACCT_CODE = polheaddata.DTY_DEFF_ACCT_CODE,
                                                            DTY_DOC_CATEGORY = polheaddata.DTY_DOC_CATEGORY,
                                                            DTY_DOC_CURRENCY = polheaddata.DTY_DOC_CURRENCY,
                                                            DTY_DOC_DESC = polheaddata.DTY_DOC_DESC,
                                                            DTY_DOC_TYPE = polheaddata.DTY_DOC_TYPE,
                                                            DTY_INTERBANK_TXN = polheaddata.DTY_INTERBANK_TXN,
                                                            DTY_JRNL_CATEGORY = polheaddata.DTY_JRNL_CATEGORY,
                                                            DTY_STATUS = polheaddata.DTY_STATUS,
                                                         
                                                           
                                                        }).ToList(),

                                           //get Vehicle Risk Data
                                           VEH_DATA = (from vehData in db.MS_SYS_DOCUMENTS_TYPE_NO_TYPES
                                                       where vehData.DTY_SYS_ID == polhSysID
                                                       select new
                                                       {
                                                           DTY_SYS_ID = vehData.DTY_SYS_ID,
                                                           DOCNO_YEAR = vehData.DOCNO_YEAR,
                                                           //VEH_POLH_DOC_NO = vehData.VEH_POLH_DOC_NO,
                                                           DOCNO_SYS_ID = vehData.DOCNO_SYS_ID,
                                                           DOCNO_STATUS = vehData.DOCNO_STATUS,
                                                           DOCNO_START = vehData.DOCNO_START,
                                                           DOCNO_NUMBER = vehData.DOCNO_NUMBER,
                                                           DOCNO_NEXTNO_DUE = vehData.DOCNO_NEXTNO_DUE,
                                                           DOCNO_END = vehData.DOCNO_END,
                                                           DOCNO_COD = vehData.DOCNO_CODE,
                                                           DOCNO_BRANCH = vehData.DOCNO_BRANCH,
                                                        
                                                       }).ToList(),

                                           //Get Cover data
                                           COVER_DATA = (from rcovData in db.MS_SYS_DOC_CURRENCY
                                                         where rcovData.DTY_SYS_ID == polhSysID
                                                         select new
                                                         {
                                                             DTY_SYS_ID = rcovData.DTY_SYS_ID,
                                                             CUR_NAME = rcovData.CUR_NAME,
                                                             CUR_STATUS = rcovData.CUR_STATUS,
                                                             CUR_CODE = rcovData.CUR_CODE,
                                                           
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

