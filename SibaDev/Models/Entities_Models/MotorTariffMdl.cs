using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using WebGrease.Css.Extensions;


namespace SibaDev.Models
{
    public class MotorTariffMdl : Model
    {
        public static MS_MOTOR_PROD get_motortariff(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_MOTOR_PROD where mdl.MTP_PRD_CODE == code select mdl).ToList().Select(mdl => new MS_MOTOR_PROD
                {
                   MTP_SYS_ID = mdl.MTP_SYS_ID,
                   MTP_PRD_CODE = mdl.MTP_PRD_CODE,
                   MTP_CRTE_BY = mdl.MTP_CRTE_BY,
                   MTP_CRTE_DATE = mdl.MTP_CRTE_DATE,
                   //MST_UWD_PRODUCT = ProductMdl.get_product(mdl.MTP_PRD_CODE),
                   MTP_STATUS = mdl.MTP_STATUS,
                   MTP_MOD_BY = mdl.MTP_MOD_BY,
                   MTP_MOD_DATE = mdl.MTP_MOD_DATE,
                   
                   MS_MOTOR_PROD_RISK = mdl.MS_MOTOR_PROD_RISK != null ? mdl.MS_MOTOR_PROD_RISK.Select(r => get_prodrisk(r.MPR_SYS_ID)).ToList() : null,
                   
                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static MS_MOTOR_PROD get_motorprod(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_MOTOR_PROD where mdl.MTP_PRD_CODE == code select mdl).ToList().Select(mdl => new MS_MOTOR_PROD
                {
                    MTP_SYS_ID = mdl.MTP_SYS_ID,
                    MTP_PRD_CODE = mdl.MTP_PRD_CODE,
                    MTP_CRTE_BY = mdl.MTP_CRTE_BY,
                    MTP_CRTE_DATE = mdl.MTP_CRTE_DATE,
                    MTP_STATUS = mdl.MTP_STATUS,
                    MTP_MOD_BY = mdl.MTP_MOD_BY,
                    MTP_MOD_DATE = mdl.MTP_MOD_DATE,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static MS_MOTOR_PROD_RISK get_prodrisk(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.MS_MOTOR_PROD_RISK where c.MPR_SYS_ID == code select c).ToList().Select(c => new MS_MOTOR_PROD_RISK
                {
                    MPR_SYS_ID = c.MPR_SYS_ID,
                    MPR_RISK_CODE = c.MPR_RISK_CODE,
                    MPR_MTP_PRD_CODE = c.MPR_MTP_PRD_CODE,
                    MPR_MTP_SYS_ID = c.MPR_MTP_SYS_ID,
                    MPR_STATUS = c.MPR_STATUS,
                    MPR_CRTE_BY = c.MPR_CRTE_BY,
                    MPR_CRTE_DATE = c.MPR_CRTE_DATE,
                    MPP_MOD_DATE = c.MPP_MOD_DATE,
                    MPR_MOD_BY = c.MPR_MOD_BY,
                    MS_MOTOR_RISK_COVER = c.MS_MOTOR_RISK_COVER != null ? c.MS_MOTOR_RISK_COVER.Select(r => get_riskcovers(r.MRC_RK_CVR_SYS_ID)).ToList() : null,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static MS_MOTOR_RISK_COVER get_riskcovers(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.MS_MOTOR_RISK_COVER where r.MRC_RK_CVR_SYS_ID == code select r).ToList().Select(r => new MS_MOTOR_RISK_COVER
                {
                    MRC_MPR_SYS_ID = r.MRC_MPR_SYS_ID,
                    MRC_RK_CVR_SYS_ID = r.MRC_RK_CVR_SYS_ID,
                    MRC_AGE_LOAD = r.MRC_AGE_LOAD,
                    MRC_CRTE_BY = r.MRC_CRTE_BY,
                    MRC_CRTE_DATE = r.MRC_CRTE_DATE,
                    MRC_CVR_CODE = r.MRC_CVR_CODE,
                    MRC_DFT_PREM = r.MRC_DFT_PREM,
                    MRC_DFT_RATE = r.MRC_DFT_RATE,
                    MRC_DFT_SI = r.MRC_DFT_SI,
                    MRC_DFT_YN = r.MRC_DFT_YN,
                    MRC_NCD_YN = r.MRC_NCD_YN,
                    MRC_EXCESS_LOAD = r.MRC_EXCESS_LOAD,
                    MRC_MAX_RATE = r.MRC_MAX_RATE,
                    MRC_MIN_AGE = r.MRC_MIN_AGE,
                    MRC_MIN_RATE = r.MRC_MIN_RATE,
                    MRC_MIN_SEATS = r.MRC_MIN_SEATS,
                    MRC_MOD_BY = r.MRC_MOD_BY,
                    MRC_MOD_DATE = r.MRC_MOD_DATE,               
                    MRC_SEAT_LOAD = r.MRC_SEAT_LOAD,
                    MRC_STATUS = r.MRC_STATUS,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

        public static IEnumerable<MS_MOTOR_PROD> get_motortariffs()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_MOTOR_PROD where mdl.MTP_STATUS == "A" select mdl.MTP_PRD_CODE).ToList().Select(get_motortariff);
        }

        public static IEnumerable<object> search_motortariffs(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_MOTOR_PROD
                    where (mdl.MTP_PRD_CODE.ToLower().Contains(q.ToLower())) && mdl.MTP_STATUS == "A"
                    select mdl.MTP_PRD_CODE).ToList().Select(get_motortariff);
        }

        public static IEnumerable<object> get_lov_motor_risks()
        {
            var db = new SibaModel();
            return (from motorrisk in db.MS_MOTOR_PROD_RISK where motorrisk.MPR_STATUS == "A" select new { CODE = motorrisk.MPR_SYS_ID, NAME = motorrisk.MPR_RISK_CODE });
        }

        public static bool save_motortariff(MS_MOTOR_PROD viewTariff)
        {
            var db = new SibaModel();
            switch (viewTariff.MTP_STATUS)
            {
                case "A":
                    {
                        var dbPolh = db.MS_MOTOR_PROD.Find(viewTariff.MTP_SYS_ID);

                        if (dbPolh != null)
                        {
                            db.MS_MOTOR_PROD.Attach(dbPolh);
                            dbPolh.Map(viewTariff);
                            dbPolh.MTP_MOD_DATE = DateTime.Now;

                            /*--------------------------------
                             * Motor Risk 
                             *-------------------------------*/
                            foreach (var prodrisk in viewTariff.MS_MOTOR_PROD_RISK)
                            {
                                prodrisk.MPR_MTP_SYS_ID = viewTariff.MTP_SYS_ID;
                                switch (prodrisk.MPR_STATUS)
                                {
                                    case "A":
                                        var dbveh = db.MS_MOTOR_PROD_RISK.Find(prodrisk.MPR_SYS_ID);
                                        if (dbveh != null)
                                        {
                                            db.MS_MOTOR_PROD_RISK.Attach(dbveh);
                                            dbveh.Map(prodrisk);


                                            //RISK COVERS UPDATE
                                            foreach (var cover in prodrisk.MS_MOTOR_RISK_COVER)
                                            {
                                                var dbCovers = db.MS_MOTOR_RISK_COVER.Find(cover.MRC_RK_CVR_SYS_ID);
                                                switch (cover.MRC_STATUS)
                                                {
                                                    case "A":
                                                        if (dbCovers != null)
                                                        {
                                                            db.MS_MOTOR_RISK_COVER.Attach(dbCovers);
                                                            dbCovers.Map(cover);
                                                            dbCovers.MRC_MOD_DATE = DateTime.Now;
                                                        }
                                                        break;

                                                    case "U":
                                                        cover.MRC_STATUS = "A";
                                                        cover.MRC_CRTE_DATE = DateTime.Now;
                                                        cover.MRC_MPR_SYS_ID = prodrisk.MPR_SYS_ID;
                                                        db.MS_MOTOR_RISK_COVER.Add(cover);
                                                        break;

                                                    case "D":
                                                        if (dbCovers != null)
                                                        {
                                                            db.MS_MOTOR_RISK_COVER.Attach(dbCovers);
                                                            dbCovers.MRC_STATUS = "D";
                                                            dbCovers.MRC_MOD_DATE = DateTime.Now;
                                                            db.MS_MOTOR_RISK_COVER.Remove(db.MS_MOTOR_RISK_COVER.Find(cover.MRC_RK_CVR_SYS_ID));
                                                        }
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                    case "U":
                                        prodrisk.MPR_MTP_SYS_ID = viewTariff.MTP_SYS_ID;
                                        prodrisk.MPR_STATUS = "A";
                                        db.MS_MOTOR_PROD_RISK.Add(prodrisk);
                                        break;
                                    case "D":
                                        db.MS_MOTOR_PROD_RISK.Remove(db.MS_MOTOR_PROD_RISK.Find(prodrisk.MPR_SYS_ID));
                                        break;
                                }

                            }

                        }

                    }
                    break;
                case "U":

                    viewTariff.MTP_STATUS = "A";
                    viewTariff.MTP_CRTE_DATE = DateTime.Now;
                    
                    ///*-----------------------------------------
                    // * updating the status of related tables
                    // *---------------------------------------*/

                    viewTariff.MS_MOTOR_PROD_RISK.ForEach(x => {
                        x.MPR_STATUS = "A";                 
                        x.MS_MOTOR_RISK_COVER.ForEach(c => c.MRC_STATUS = "A");
                       
                    });

                    db.MS_MOTOR_PROD.Add(viewTariff);
                    db.SaveChanges();

                    break;
                case "D":
                    {
                        /*------------------------
                        * header before update
                        *----------------------*/
                        //
                        var dbPolh = db.MS_MOTOR_PROD.Find(viewTariff.MTP_SYS_ID);
                        /*------------------------
                        * update of header details
                        *----------------------*/
                        //
                        if (dbPolh != null)
                        {
                            db.MS_MOTOR_PROD.Attach(dbPolh);
                            dbPolh.MTP_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }

    }
}