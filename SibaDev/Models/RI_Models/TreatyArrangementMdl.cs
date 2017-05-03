using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.RI_Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.RI_Models
{
    public class TreatyArrangementMdl : Model
    {

        public static INS_RI_TTY_HEAD  get_ttyHead (int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_RI_TTY_HEAD where r.TTH_POLH_SYS_ID == code select r).ToList().Select(r => new INS_RI_TTY_HEAD
                {
                    TTH_RISK_SYS_ID = r.TTH_RISK_SYS_ID,
                    TTH_ACC_SI_BC = r.TTH_ACC_SI_BC,
                    TTH_ACC_SI_FC = r.TTH_ACC_SI_FC,
                    TTH_ADJ_YN = r.TTH_ADJ_YN,
                    TTH_CLASS_CODE = r.TTH_CLASS_CODE,
                    TTH_COMB_LOC_ID = r.TTH_COMB_LOC_ID,
                    TTH_CRTE_BY = r.TTH_CRTE_BY,
                    TTH_CRTE_DATE = r.TTH_CRTE_DATE,
                    TTH_EML_PERC = r.TTH_EML_PERC,
                    TTH_FROM_DATE = r.TTH_FROM_DATE,
                    TTH_INS_SRCE = r.TTH_INS_SRCE,
                    TTH_LOC_END_NO = r.TTH_LOC_END_NO,
                    TTH_LOC_SYS_ID = r.TTH_LOC_SYS_ID,
                    TTH_POLH_END_NO = r.TTH_POLH_END_NO,
                    TTH_POLH_SYS_ID = r.TTH_POLH_SYS_ID,
                    TTH_POLNUM = r.TTH_POLNUM,
                    TTH_REF_ID = r.TTH_REF_ID,
                    TTH_RISK_END_NO = r.TTH_RISK_END_NO,
                    TTH_RI_ACC_YN = r.TTH_RI_ACC_YN,
                    TTH_RI_PREM_BC = r.TTH_RI_PREM_BC,
                    TTH_RI_PREM_FC = r.TTH_RI_PREM_FC,
                    TTH_RI_SI_BC = r.TTH_RI_SI_BC,
                    TTH_RI_SI_FC = r.TTH_RI_SI_FC,
                    TTH_SC_CODE = r.TTH_SC_CODE,
                    TTH_STATUS = r.TTH_STATUS,
                    TTH_SYS_ID = r.TTH_SYS_ID,
                    TTH_TOTAL_PREM_BC = r.TTH_TOTAL_PREM_BC,
                    TTH_TOTAL_PREM_FC = r.TTH_TOTAL_PREM_FC,
                    TTH_TOTAL_SI_BC = r.TTH_TOTAL_SI_BC,
                    TTH_TOTAL_SI_FC = r.TTH_TOTAL_SI_FC,
                    TTH_TO_DATE = r.TTH_TO_DATE,
                    TTH_UW_YEAR = r.TTH_UW_YEAR,
                    INS_RI_TTY_ALLOCATION = r.INS_RI_TTY_ALLOCATION != null ? r.INS_RI_TTY_ALLOCATION.Select(c => get_allocation(c.TTA_SYS_ID)).ToList() : null,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static INS_RI_TTY_ALLOCATION get_allocation(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_RI_TTY_ALLOCATION where r.TTA_SYS_ID == code select r).ToList().Select(r => new INS_RI_TTY_ALLOCATION
                {
                    TTA_SYS_ID = r.TTA_SYS_ID,
                    TTA_POLH_SYS_ID = r.TTA_POLH_SYS_ID,
                    TTA_TTH_SYS_ID = r.TTA_TTH_SYS_ID,
                    TTA_ALLOC_PERC = r.TTA_ALLOC_PERC,
                    TTA_CLOSE_FLAG = r.TTA_CLOSE_FLAG,
                    TTA_POLH_END_NO = r.TTA_POLH_END_NO,
                    TTA_SEQ_NO = r.TTA_SEQ_NO,
                    TTA_SLIPNO = r.TTA_SLIPNO,
                    TTA_TTY_CODE = r.TTA_TTY_CODE,
                    TTA_TTY_COMM_BC = r.TTA_TTY_COMM_BC,
                    TTA_TTY_COMM_FC = r.TTA_TTY_COMM_FC,
                    TTA_TTY_LIMIT_BC = r.TTA_TTY_LIMIT_BC,
                    TTA_TTY_LIMIT_FC = r.TTA_TTY_LIMIT_FC,
                    TTA_TTY_PREM_BC = r.TTA_TTY_PREM_BC,
                    TTA_TTY_PREM_FC = r.TTA_TTY_PREM_FC,
                    TTA_TTY_SI_BC = r.TTA_TTY_SI_BC,
                    TTA_TTY_SI_FC = r.TTA_TTY_SI_FC,
                    TTA_TTY_TYPE = r.TTA_TTY_TYPE,
                    TTA_UW_YEAR = r.TTA_UW_YEAR,
                    TTA_CRTE_BY = r.TTA_CRTE_BY,
                    TTA_CRTE_DATE = r.TTA_CRTE_DATE,
                    TTA_MOD_BY = r.TTA_MOD_BY,
                    TTA_MOD_DATE = r.TTA_MOD_DATE,
                    TTA_STATUS = r.TTA_STATUS,
                    INS_RI_TTY_SHARE = r.INS_RI_TTY_SHARE != null ? r.INS_RI_TTY_SHARE.Select(c => get_share(c.TTS_SYS_ID)).ToList() : null,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static INS_RI_TTY_SHARE get_share(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.INS_RI_TTY_SHARE where r.TTS_SYS_ID == code select r).ToList().Select(r => new INS_RI_TTY_SHARE
                {
                    TTS_SYS_ID = r.TTS_SYS_ID,
                    TTS_TTA_SYS_ID = r.TTS_TTA_SYS_ID,
                    TTS_TTA_SEQ_NO = r.TTS_TTA_SEQ_NO,
                    TTS_RI_COMM_BC = r.TTS_RI_COMM_BC,
                    TTS_RI_COMM_FC = r.TTS_RI_COMM_FC,
                    TTS_RI_COMM_PERC = r.TTS_RI_COMM_PERC,
                    TTS_RI_COMP = r.TTS_RI_COMP,
                    TTS_RI_TAX_PERC = r.TTS_RI_TAX_PERC,
                    TTS_SHARE_PERC = r.TTS_SHARE_PERC,
                    TTS_SHARE_PREM_BC = r.TTS_SHARE_PREM_BC,
                    TTS_SHARE_PREM_FC = r.TTS_SHARE_PREM_FC,
                    TTS_SHARE_SI_BC = r.TTS_SHARE_SI_BC,
                    TTS_SHARE_SI_FC = r.TTS_SHARE_SI_FC,
                    TTS_TAX_BC = r.TTS_TAX_BC,
                    TTS_TAX_FC = r.TTS_TAX_FC,
                    TTS_TTY_TYPE = r.TTS_TTY_TYPE,
                    TTS_CRTE_BY = r.TTS_CRTE_BY,
                    TTS_CRTE_DATE = r.TTS_CRTE_DATE,
                    TTS_MOD_BY = r.TTS_MOD_BY,
                    TTS_MOD_DATE = r.TTS_MOD_DATE,
                    TTS_STATUS = r.TTS_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }


        public static IEnumerable<object> search_ttyHead(string q)
        {
            var db = new SibaModel();
            var result =  (from mdl in db.INS_RI_TTY_HEAD
                    where (mdl.TTH_POLH_SYS_ID.ToString().Contains(q.ToLower())) && mdl.TTH_STATUS == "A"
                    select mdl.TTH_POLH_SYS_ID).ToList().Select(get_ttyHead);

            result.ForEach(x => x.INS_RI_TTY_ALLOCATION.OrderBy(y => y.TTA_SEQ_NO));

            return result;
        }


        public static bool save_treaty(INS_RI_TTY_HEAD viewTreaty)
        {
            var db = new SibaModel();
            switch (viewTreaty.TTH_STATUS)
            {
                case "A":
                    {
                        var dbPolh = db.INS_RI_TTY_HEAD.Find(viewTreaty.TTH_SYS_ID);

                        if (dbPolh != null)
                        {
                            db.INS_RI_TTY_HEAD.Attach(dbPolh);
                            dbPolh.Map(viewTreaty);
                            dbPolh.TTH_MOD_DATE = DateTime.Now;

                            /*--------------------------------
                             * TREATY APPORTIONMENT 
                             *-------------------------------*/
                            foreach (var apport in viewTreaty.INS_RI_TTY_ALLOCATION)
                            {
                                apport.TTA_TTH_SYS_ID = viewTreaty.TTH_SYS_ID;
                                switch (apport.TTA_STATUS)
                                {
                                    case "A":
                                        var dbveh = db.INS_RI_TTY_ALLOCATION.Find(apport.TTA_SYS_ID);
                                        if (dbveh != null)
                                        {
                                            db.INS_RI_TTY_ALLOCATION.Attach(dbveh);
                                            dbveh.Map(apport);


                                            //TREATY SHARE UPDATE
                                            foreach (var cover in apport.INS_RI_TTY_SHARE)
                                            {
                                                var dbCovers = db.INS_RI_TTY_SHARE.Find(cover.TTS_SYS_ID);
                                                switch (cover.TTS_STATUS)
                                                {
                                                    case "A":
                                                        if (dbCovers != null)
                                                        {
                                                            db.INS_RI_TTY_SHARE.Attach(dbCovers);
                                                            dbCovers.Map(cover);
                                                            dbCovers.TTS_MOD_DATE = DateTime.Now;
                                                        }
                                                        break;

                                                    case "U":
                                                        cover.TTS_STATUS = "A";
                                                        cover.TTS_CRTE_DATE = DateTime.Now;
                                                        cover.TTS_TTA_SYS_ID = apport.TTA_SYS_ID;
                                                        db.INS_RI_TTY_SHARE.Add(cover);
                                                        break;

                                                    case "D":
                                                        if (dbCovers != null)
                                                        {
                                                            db.INS_RI_TTY_SHARE.Attach(dbCovers);
                                                            dbCovers.TTS_STATUS = "D";
                                                            dbCovers.TTS_MOD_DATE = DateTime.Now;
                                                            db.INS_RI_TTY_SHARE.Remove(db.INS_RI_TTY_SHARE.Find(cover.TTS_SYS_ID));
                                                        }
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                    case "U":
                                        apport.TTA_TTH_SYS_ID = viewTreaty.TTH_SYS_ID;
                                        apport.TTA_STATUS = "A";
                                        db.INS_RI_TTY_ALLOCATION.Add(apport);
                                        break;
                                    case "D":
                                        db.INS_RI_TTY_ALLOCATION.Remove(db.INS_RI_TTY_ALLOCATION.Find(apport.TTA_SYS_ID));
                                        break;
                                }

                            }

                        }

                    }
                    break;
                case "U":

                    viewTreaty.TTH_STATUS = "A";
                    viewTreaty.TTH_CRTE_DATE = DateTime.Now;

                    ///*-----------------------------------------
                    // * updating the status of related tables
                    // *---------------------------------------*/

                    viewTreaty.INS_RI_TTY_ALLOCATION.ForEach(x => {
                        x.TTA_STATUS = "A";
                        x.INS_RI_TTY_SHARE.ForEach(c => c.TTS_STATUS = "A");

                    });

                    db.INS_RI_TTY_HEAD.Add(viewTreaty);
                    db.SaveChanges();

                    break;
                case "D":
                    {
                        /*------------------------
                        * header before update
                        *----------------------*/
                        //
                        var dbPolh = db.INS_RI_TTY_HEAD.Find(viewTreaty.TTH_SYS_ID);
                        /*------------------------
                        * update of header details
                        *----------------------*/
                        //
                        if (dbPolh != null)
                        {
                            db.INS_RI_TTY_HEAD.Attach(dbPolh);
                            dbPolh.TTH_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }


        public static IEnumerable<object> get_excess(int TTA_POLH)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.INS_RI_TTY_ALLOCATION
                        join ttyhead in db.INS_RI_TTY_HEAD on risk.TTA_POLH_SYS_ID equals ttyhead.TTH_POLH_SYS_ID
                        where risk.TTA_POLH_SYS_ID == TTA_POLH && (risk.TTA_TTY_TYPE == "FX" && risk.TTA_TTY_LIMIT_FC > 0)
                        select new
                        {
                            TTA_POLH_SYS_ID = risk.TTA_POLH_SYS_ID,
                            TTA_SYS_ID = risk.TTA_SYS_ID,
                            TTA_TTH_SYS_ID = risk.TTA_TTH_SYS_ID,
                            TTA_POLH_END_NO = risk.TTA_POLH_END_NO,
                            TTA_UW_YEAR = risk.TTA_UW_YEAR,
                            TTA_TTY_SI_FC = risk.TTA_TTY_SI_FC,
                            TTA_TTY_SI_BC = risk.TTA_TTY_SI_BC,
                            TTA_TTY_PREM_FC = risk.TTA_TTY_PREM_FC,
                            TTA_TTY_PREM_BC = risk.TTA_TTY_PREM_BC,
                            TTA_SLIPNO = risk.TTA_SLIPNO,
                            TTA_TTY_CODE = risk.TTA_TTY_CODE,
                            TTA_TTY_TYPE = risk.TTA_TTY_TYPE,
                            TTA_ALLOC_PERC = risk.TTA_ALLOC_PERC,
                            TTA_CLOSE_FLAG = risk.TTA_CLOSE_FLAG,

                            TTH_TOTAL_SI_FC = ttyhead.TTH_TOTAL_SI_FC,
                            TTH_TOTAL_SI_BC = ttyhead.TTH_TOTAL_SI_BC,
                            TTH_TOTAL_PREM_FC = ttyhead.TTH_TOTAL_PREM_FC,
                            TTH_TOTAL_PREM_BC = ttyhead.TTH_TOTAL_PREM_BC,
                            TTH_FROM_DATE = ttyhead.TTH_FROM_DATE,
                            TTH_TO_DATE = ttyhead.TTH_TO_DATE,
                            TTH_REF_ID = ttyhead.TTH_REF_ID,
                            TTH_COMB_LOC_ID = ttyhead.TTH_COMB_LOC_ID,
                            TTH_RISK_SYS_ID = ttyhead.TTH_RISK_SYS_ID,
                            TTH_RISK_END_NO = ttyhead.TTH_RISK_END_NO,
                            TTH_LOC_SYS_ID = ttyhead.TTH_LOC_SYS_ID,
                            TTH_LOC_END_NO = ttyhead.TTH_LOC_END_NO,
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }


    }
}