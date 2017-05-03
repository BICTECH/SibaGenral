//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using SibaDev.Models.RI_Models;
//using WebGrease.Css.Extensions;

//namespace SibaDev.Models.RI_Models
//{
//    public class FacPlacementMdl : Model
//    {

//        public static INS_RI_FAC_HEAD get_ttyHead (int code)
//        {
//            var db = new SibaModel();
//            try
//            {
//                return (from r in db.INS_RI_FAC_HEAD where r.FAC_SYS_ID == code select r).ToList().Select(r => new INS_RI_FAC_HEAD
//                {
//                    FAC_SYS_ID = r.FAC_SYS_ID,
//                    FAC_AREA = r.FAC_AREA,
//                    FAC_ACCUM_SI = r.FAC_ACCUM_SI,
//                    FAC_CLOSE = r.FAC_CLOSE,
//                    FAC_POLH_SYS_ID = r.FAC_POLH_SYS_ID,
//                    FAC_RISK_SYS_ID = r.FAC_RISK_SYS_ID,
//                    FAC_COMB_LOC_ID = r.FAC_COMB_LOC_ID,
//                    FAC_COMMENTS = r.FAC_COMMENTS,
//                    FAC_EXCESS_PERC = r.FAC_EXCESS_PERC,
//                    FAC_EXCESS_PREM_BC = r.FAC_EXCESS_PREM_BC,
//                    FAC_EXCESS_PREM_FC = r.FAC_EXCESS_PREM_FC,
//                    FAC_EXCESS_SI_BC = r.FAC_EXCESS_SI_BC,
//                    FAC_EXCESS_SI_FC = r.FAC_EXCESS_SI_FC,
//                    FAC_LOC = r.FAC_LOC,
//                    FAC_LOC_END_NO = r.FAC_LOC_END_NO,
//                    FAC_FROM_DATE = r.FAC_FROM_DATE,
//                    FAC_TO_DATE = r.FAC_TO_DATE,
//                    FAC_LOC_SYS_ID = r.FAC_LOC_SYS_ID,
//                    FAC_PERC = r.FAC_PERC,
//                    FAC_POLH_END_NO = r.FAC_POLH_END_NO,
//                    FAC_PREM_BC = r.FAC_PREM_BC,
//                    FAC_PREM_FC = r.FAC_PREM_FC,
//                    FAC_REF_ID = r.FAC_REF_ID,
//                    FAC_REG = r.FAC_REG,
//                    FAC_RISK_END_NO = r.FAC_RISK_END_NO,
//                    FAC_SI_BC = r.FAC_SI_BC,
//                    FAC_SI_FC = r.FAC_SI_FC,
//                    FAC_SLIP_NO = r.FAC_SLIP_NO,
//                    FAC_TTA_SYS_ID = r.FAC_TTA_SYS_ID,
//                    FAC_STATUS = r.FAC_STATUS,
//                    FAC_UWYR = r.FAC_UWYR,
//                    FAC_CRTE_BY = r.FAC_CRTE_BY,
//                    FAC_CRTE_DATE = r.FAC_CRTE_DATE,
//                    //INS_RI_TTY_ALLOCATION = r.INS_RI_TTY_ALLOCATION != null ? r.INS_RI_TTY_ALLOCATION.Select(c => get_allocation(c.TTA_SYS_ID)).ToList() : null,
//                }).Single();
//            }
//            catch (Exception)
//            {
//                return null;
//            }
//        }

//        public static INS_RI_TTY_ALLOCATION get_allocation(int code)
//        {
//            var db = new SibaModel();
//            try
//            {
//                return (from r in db.INS_RI_TTY_ALLOCATION where r.TTA_SYS_ID == code select r).ToList().Select(r => new INS_RI_TTY_ALLOCATION
//                {
//                    TTA_SYS_ID = r.TTA_SYS_ID,
//                    TTA_POLH_SYS_ID = r.TTA_POLH_SYS_ID,
//                    TTA_TTH_SYS_ID = r.TTA_TTH_SYS_ID,
//                    TTA_ALLOC_PERC = r.TTA_ALLOC_PERC,
//                    TTA_CLOSE_FLAG = r.TTA_CLOSE_FLAG,
//                    TTA_POLH_END_NO = r.TTA_POLH_END_NO,
//                    TTA_SEQ_NO = r.TTA_SEQ_NO,
//                    TTA_SLIPNO = r.TTA_SLIPNO,
//                    TTA_TTY_CODE = r.TTA_TTY_CODE,
//                    TTA_TTY_COMM_BC = r.TTA_TTY_COMM_BC,
//                    TTA_TTY_COMM_FC = r.TTA_TTY_COMM_FC,
//                    TTA_TTY_LIMIT_BC = r.TTA_TTY_LIMIT_BC,
//                    TTA_TTY_LIMIT_FC = r.TTA_TTY_LIMIT_FC,
//                    TTA_TTY_PREM_BC = r.TTA_TTY_PREM_BC,
//                    TTA_TTY_PREM_FC = r.TTA_TTY_PREM_FC,
//                    TTA_TTY_SI_BC = r.TTA_TTY_SI_BC,
//                    TTA_TTY_SI_FC = r.TTA_TTY_SI_FC,
//                    TTA_TTY_TYPE = r.TTA_TTY_TYPE,
//                    TTA_UW_YEAR = r.TTA_UW_YEAR,
//                    TTA_CRTE_BY = r.TTA_CRTE_BY,
//                    TTA_CRTE_DATE = r.TTA_CRTE_DATE,
//                    TTA_MOD_BY = r.TTA_MOD_BY,
//                    TTA_MOD_DATE = r.TTA_MOD_DATE,
//                    TTA_STATUS = r.TTA_STATUS,
//                    INS_RI_TTY_SHARE = r.INS_RI_TTY_SHARE != null ? r.INS_RI_TTY_SHARE.Select(c => get_share(c.TTS_SYS_ID)).ToList() : null,
//                }).Single();
//            }
//            catch (Exception)
//            {
//                return null;
//            }
//        }

//        public static INS_RI_TTY_SHARE get_share(int code)
//        {
//            var db = new SibaModel();
//            try
//            {
//                return (from r in db.INS_RI_TTY_SHARE where r.TTS_SYS_ID == code select r).ToList().Select(r => new INS_RI_TTY_SHARE
//                {
//                    TTS_SYS_ID = r.TTS_SYS_ID,
//                    TTS_TTA_SYS_ID = r.TTS_TTA_SYS_ID,
//                    TTS_TTA_SEQ_NO = r.TTS_TTA_SEQ_NO,
//                    TTS_RI_COMM_BC = r.TTS_RI_COMM_BC,
//                    TTS_RI_COMM_FC = r.TTS_RI_COMM_FC,
//                    TTS_RI_COMM_PERC = r.TTS_RI_COMM_PERC,
//                    TTS_RI_COMP = r.TTS_RI_COMP,
//                    TTS_RI_TAX_PERC = r.TTS_RI_TAX_PERC,
//                    TTS_SHARE_PERC = r.TTS_SHARE_PERC,
//                    TTS_SHARE_PREM_BC = r.TTS_SHARE_PREM_BC,
//                    TTS_SHARE_PREM_FC = r.TTS_SHARE_PREM_FC,
//                    TTS_SHARE_SI_BC = r.TTS_SHARE_SI_BC,
//                    TTS_SHARE_SI_FC = r.TTS_SHARE_SI_FC,
//                    TTS_TAX_BC = r.TTS_TAX_BC,
//                    TTS_TAX_FC = r.TTS_TAX_FC,
//                    TTS_TTY_TYPE = r.TTS_TTY_TYPE,
//                    TTS_CRTE_BY = r.TTS_CRTE_BY,
//                    TTS_CRTE_DATE = r.TTS_CRTE_DATE,
//                    TTS_MOD_BY = r.TTS_MOD_BY,
//                    TTS_MOD_DATE = r.TTS_MOD_DATE,
//                    TTS_STATUS = r.TTS_STATUS
//                }).Single();
//            }
//            catch (Exception)
//            {
//                return null;
//            }
//        }


//        public static bool save_fac(INS_RI_FAC_HEAD viewTreaty)
//        {
//            var db = new SibaModel();
//            switch (viewTreaty.FAC_STATUS)
//            {
//                case "A":
//                    {
//                        var dbPolh = db.INS_RI_FAC_HEAD.Find(viewTreaty.FAC_SYS_ID);

//                        if (dbPolh != null)
//                        {
//                            db.INS_RI_FAC_HEAD.Attach(dbPolh);
//                            dbPolh.Map(viewTreaty);
//                            dbPolh.FAC_MOD_DATE = DateTime.Now;

//                            /*--------------------------------
//                             * TREATY APPORTIONMENT 
//                             *-------------------------------*/
//                            foreach (var apport in viewTreaty.INS_RI_TTY_ALLOCATION)
//                            {
//                                apport.TTA_TTH_SYS_ID = viewTreaty.FAC_SYS_ID;
//                                switch (apport.TTA_STATUS)
//                                {
//                                    case "A":
//                                        var dbveh = db.INS_RI_TTY_ALLOCATION.Find(apport.TTA_SYS_ID);
//                                        if (dbveh != null)
//                                        {
//                                            db.INS_RI_TTY_ALLOCATION.Attach(dbveh);
//                                            dbveh.Map(apport);


//                                            //TREATY SHARE UPDATE
//                                            foreach (var cover in apport.INS_RI_TTY_SHARE)
//                                            {
//                                                var dbCovers = db.INS_RI_TTY_SHARE.Find(cover.TTS_SYS_ID);
//                                                switch (cover.TTS_STATUS)
//                                                {
//                                                    case "A":
//                                                        if (dbCovers != null)
//                                                        {
//                                                            db.INS_RI_TTY_SHARE.Attach(dbCovers);
//                                                            dbCovers.Map(cover);
//                                                            dbCovers.TTS_MOD_DATE = DateTime.Now;
//                                                        }
//                                                        break;

//                                                    case "U":
//                                                        cover.TTS_STATUS = "A";
//                                                        cover.TTS_CRTE_DATE = DateTime.Now;
//                                                        cover.TTS_TTA_SYS_ID = apport.TTA_SYS_ID;
//                                                        db.INS_RI_TTY_SHARE.Add(cover);
//                                                        break;

//                                                    case "D":
//                                                        if (dbCovers != null)
//                                                        {
//                                                            db.INS_RI_TTY_SHARE.Attach(dbCovers);
//                                                            dbCovers.TTS_STATUS = "D";
//                                                            dbCovers.TTS_MOD_DATE = DateTime.Now;
//                                                            db.INS_RI_TTY_SHARE.Remove(db.INS_RI_TTY_SHARE.Find(cover.TTS_SYS_ID));
//                                                        }
//                                                        break;
//                                                }
//                                            }
//                                        }
//                                        break;
//                                    case "U":
//                                        apport.TTA_TTH_SYS_ID = viewTreaty.FAC_SYS_ID;
//                                        apport.TTA_STATUS = "A";
//                                        db.INS_RI_TTY_ALLOCATION.Add(apport);
//                                        break;
//                                    case "D":
//                                        db.INS_RI_TTY_ALLOCATION.Remove(db.INS_RI_TTY_ALLOCATION.Find(apport.TTA_SYS_ID));
//                                        break;
//                                }

//                            }

//                        }

//                    }
//                    break;
//                case "U":

//                    viewTreaty.FAC_STATUS = "A";
//                    viewTreaty.FAC_CRTE_DATE = DateTime.Now;

//                    ///*-----------------------------------------
//                    // * updating the status of related tables
//                    // *---------------------------------------*/

//                    viewTreaty.INS_RI_TTY_ALLOCATION.ForEach(x => {
//                        x.TTA_STATUS = "A";
//                        x.INS_RI_TTY_SHARE.ForEach(c => c.TTS_STATUS = "A");

//                    });

//                    db.INS_RI_FAC_HEAD.Add(viewTreaty);
//                    db.SaveChanges();

//                    break;
//                case "D":
//                    {
//                        /*------------------------
//                        * header before update
//                        *----------------------*/
//                        //
//                        var dbPolh = db.INS_RI_FAC_HEAD.Find(viewTreaty.FAC_SYS_ID);
//                        /*------------------------
//                        * update of header details
//                        *----------------------*/
//                        //
//                        if (dbPolh != null)
//                        {
//                            db.INS_RI_FAC_HEAD.Attach(dbPolh);
//                            dbPolh.FAC_STATUS = "D";
//                        }

//                    }
//                    break;
//            }

//            return db.SaveChanges() > 0;
//        }


   
//    }
//}