using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models.Claim_Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.Claim_Models
{
    public class ClaimEstimationMdl : Model
    {

        public static CLM_EST_HEAD get_estimation(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.CLM_EST_HEAD where r.CLM_N0 == code select r).ToList().Select(r => new CLM_EST_HEAD
                {
                    CLM_LOSS_CODE = r.CLM_LOSS_CODE,
                    CLM_SYS_ID = r.CLM_SYS_ID,
                    CLM_POLH_SYS_ID = r.CLM_POLH_SYS_ID,
                    CLM_CAT = r.CLM_CAT,
                    MS_SYS_OFFICE = OfficeMdl.get_office(r.CLM_OFF_CODE),
                    MS_CLM_CAT_EVENT = ClaimCatastropicEventMdl.get_catastrophy(r.CLM_CAT_EVNT_CODE),
                    MS_CLM_CAUSE_LOSS = ClaimCauseLossMdl.get_loss(r.CLM_LOSS_CODE),
                    CLM_CAT_EVNT_CODE = r.CLM_CAT_EVNT_CODE,
                    CLM_CLT_CODE = r.CLM_CLT_CODE,
                    CLM_CLT_NAME = r.CLM_CLT_NAME,
                    CLM_LOSS_DATE = r.CLM_LOSS_DATE,
                    CLM_LOSS_PLACE = r.CLM_LOSS_PLACE,
                    CLM_CRTE_BY = r.CLM_CRTE_BY,
                    CLM_CRTE_DATE = r.CLM_CRTE_DATE,
                    CLM_DISC_DATE = r.CLM_DISC_DATE,
                    CLM_MOD_BY = r.CLM_MOD_BY,
                    CLM_MOD_DATE = r.CLM_MOD_DATE,
                    CLM_OFF_CODE = r.CLM_OFF_CODE,
                    CLM_N0 = r.CLM_N0,
                    CLM_REMARKS = r.CLM_REMARKS,
                    CLM_REP_DATE = r.CLM_REP_DATE,
                    CLM_STATUS = r.CLM_STATUS,
                    CLM_RPDT = r.CLM_RPDT,
                    CLM_TIME_BRD = r.CLM_TIME_BRD,
                    CLM_TXN_DATE = r.CLM_TXN_DATE,
                    CLM_WART_BRCH = r.CLM_WART_BRCH,

                    CLM_EST_RISK_DTLS = r.CLM_EST_RISK_DTLS != null ? r.CLM_EST_RISK_DTLS.Select(c => get_risk(c.CLM_RISK_SYS_ID)).ToList() : null,

                    CLM_EST_DTLS = r.CLM_EST_DTLS != null ? r.CLM_EST_DTLS.Select(c => get_estimate(c.CLM_EST_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static CLM_EST_RISK_DTLS get_risk(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.CLM_EST_RISK_DTLS where r.CLM_RISK_SYS_ID == code select r).ToList().Select(r => new CLM_EST_RISK_DTLS
                {
                    CLM_RISK_SYS_ID = r.CLM_RISK_SYS_ID,
                    CLM_RISK_CHASIS_NO = r.CLM_RISK_CHASIS_NO,
                    CLM_RISK_CLM_SYS_ID = r.CLM_RISK_CLM_SYS_ID,
                    CLM_RISK_ENG_NO = r.CLM_RISK_ENG_NO,
                    CLM_RISK_MAKE_MODEL = r.CLM_RISK_MAKE_MODEL,
                    CLM_RISK_VEH_NO = r.CLM_RISK_VEH_NO,
                    CLM_RISK_VEH_REG_NO = r.CLM_RISK_VEH_REG_NO,
                    CLM_RISK_VEH_TYPE = r.CLM_RISK_VEH_TYPE,
                    CLM_RISK_STATUS = r.CLM_RISK_STATUS,
                    CLM_RISK_CRTE_BY = r.CLM_RISK_CRTE_BY,
                    CLM_RISK_CRTE_DATE = r.CLM_RISK_CRTE_DATE,
                    CLM_RISK_MOD_BY = r.CLM_RISK_MOD_BY,
                    CLM_RISK_MOD_DATE = r.CLM_RISK_MOD_DATE
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static CLM_EST_DTLS get_estimate(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.CLM_EST_DTLS where r.CLM_EST_SYS_ID == code select r).ToList().Select(r => new CLM_EST_DTLS
                {
                    CLM_EST_SYS_ID = r.CLM_EST_SYS_ID,
                    CLM_EST_AMT = r.CLM_EST_AMT,
                    CLM_EST_CLM_SYS_ID = r.CLM_EST_CLM_SYS_ID,
                    CLM_EST_NAME = r.CLM_EST_NAME,
                    CLM_EST_OS_AMT = r.CLM_EST_OS_AMT,
                    CLM_EST_CRTE_BY = r.CLM_EST_CRTE_BY,
                    CLM_EST_CRTE_DATE = r.CLM_EST_CRTE_DATE,
                    CLM_EST_MOD_BY = r.CLM_EST_MOD_BY,
                    CLM_EST_MOD_DATE = r.CLM_EST_MOD_DATE,
                    CLM_EST_RISK_SYS_ID = r.CLM_EST_RISK_SYS_ID,
                    CLM_EST_TYPE = r.CLM_EST_TYPE,
                    CLM_EST_EXPENSE = r.CLM_EST_EXPENSE != null ? r.CLM_EST_EXPENSE.Select(c => get_expense(c.CLM_EXP_SYS_ID)).ToList() : null,
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static CLM_EST_EXPENSE get_expense(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.CLM_EST_EXPENSE where r.CLM_EXP_SYS_ID == code select r).ToList().Select(r => new CLM_EST_EXPENSE
                {
                    CLM_EXP_SYS_ID = r.CLM_EXP_SYS_ID,
                    CLM_EXP_CODE = r.CLM_EXP_CODE,
                    CLM_EXP_COST = r.CLM_EXP_COST,
                    CLM_EXP_CLM_EST_SYS_ID = r.CLM_EXP_CLM_EST_SYS_ID,
                    CLM_EXP_CLM_EST_TYPE = r.CLM_EXP_CLM_EST_TYPE,
                    CLM_EXP_CRTE_BY = r.CLM_EXP_CRTE_BY,
                    CLM_EXP_CRTE_DATE = r.CLM_EXP_CRTE_DATE,
                    CLM_EXP_MOD_BY = r.CLM_EXP_MOD_BY,
                    CLM_EXP_MOD_DATE = r.CLM_EXP_MOD_DATE,
                    CLM_EXP_STATUS = r.CLM_EXP_STATUS
                }).Single();
            }
            catch (Exception)
            {
                return null;
            }

        }

        public static IEnumerable<CLM_EST_HEAD> get_estimations()
        {
            var db = new SibaModel();
            return (from mdl in db.CLM_EST_HEAD where mdl.CLM_STATUS == "A" select mdl.CLM_N0).ToList().Select(get_estimation);
        }

        public static IEnumerable<object> search_estimations(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.CLM_EST_HEAD
                    where (mdl.CLM_N0.ToLower().Contains(q.ToLower()) || mdl.CLM_CLT_CODE.ToLower().Contains(q.ToLower())) && mdl.CLM_STATUS == "A"
                    select mdl.CLM_N0).ToList().Select(get_estimation);
        }

        public static bool save_estimation(CLM_EST_HEAD polhClaim)
        {
            var db = new SibaModel();
            switch (polhClaim.CLM_STATUS)
            {
                case "A":
                    {
                        //estimation before update
                        var dbProd = db.CLM_EST_HEAD.Find(polhClaim.CLM_SYS_ID);

                        if (dbProd != null)
                        {
                            //update of estimation details
                            db.CLM_EST_HEAD.Attach(dbProd);
                            dbProd.Map(polhClaim);

                            /*--------------------------------
                             * ESTIMATION RISK
                             *-------------------------------*/
                            foreach (var risk in polhClaim.CLM_EST_RISK_DTLS)
                            {
                                risk.CLM_RISK_CLM_SYS_ID = polhClaim.CLM_SYS_ID;
                                switch (risk.CLM_RISK_STATUS)
                                {
                                    case "A"://we have a risk in the database which we have to update
                                        var dbriskdtls = db.CLM_EST_RISK_DTLS.Find(risk.CLM_RISK_SYS_ID);
                                        db.CLM_EST_RISK_DTLS.Attach(dbriskdtls);
                                        dbriskdtls.Map(risk);
                                        break;
                                    case "U"://add new risk
                                        risk.CLM_RISK_CLM_SYS_ID = polhClaim.CLM_SYS_ID;
                                        risk.CLM_RISK_STATUS = "A";
                                        risk.CLM_RISK_CRTE_DATE = DateTime.Now;
                                        db.CLM_EST_RISK_DTLS.Add(risk);
                                        break;
                                    case "D"://                                       
                                        db.CLM_EST_RISK_DTLS.Attach(db.CLM_EST_RISK_DTLS.Find(risk.CLM_RISK_SYS_ID));

                                        break;
                                }
                            }

                            /*-------------------------------
                             * ESTIMATION DETAILS
                             *-----------------------------*/
                            foreach (var estimate in polhClaim.CLM_EST_DTLS)
                            {
                                estimate.CLM_EST_CLM_SYS_ID = polhClaim.CLM_SYS_ID;
                                switch (estimate.CLM_EST_STATUS)
                                {
                                    case "A":
                                        //
                                        var dbestimate = db.CLM_EST_DTLS.Find(estimate.CLM_EST_SYS_ID);

                                        if (dbestimate != null)
                                        {
                                            db.CLM_EST_DTLS.Attach(dbestimate);
                                            dbestimate.Map(estimate);

                                            //ESTIMATION EXPENSE UPDATE
                                            foreach (var expense in estimate.CLM_EST_EXPENSE)
                                            {
                                                var dbExpense = db.CLM_EST_EXPENSE.Find(expense.CLM_EXP_SYS_ID);
                                                switch (expense.CLM_EXP_STATUS)
                                                {
                                                    case "A":
                                                        if (dbExpense != null)
                                                        {
                                                            db.CLM_EST_EXPENSE.Attach(dbExpense);
                                                            dbExpense.Map(expense);
                                                            dbExpense.CLM_EXP_MOD_DATE = DateTime.Now;
                                                        }
                                                        break;

                                                    case "U":
                                                        expense.CLM_EXP_STATUS = "A";
                                                        expense.CLM_EXP_CRTE_DATE = DateTime.Now;
                                                        expense.CLM_EXP_CLM_EST_SYS_ID = estimate.CLM_EST_SYS_ID;
                                                        db.CLM_EST_EXPENSE.Add(expense);
                                                        break;

                                                    case "D":
                                                        if (dbExpense != null)
                                                        {
                                                            db.CLM_EST_EXPENSE.Attach(dbExpense);
                                                            dbExpense.CLM_EXP_STATUS = "D";
                                                            dbExpense.CLM_EXP_CRTE_DATE = DateTime.Now;
                                                            db.CLM_EST_EXPENSE.Remove(db.CLM_EST_EXPENSE.Find(expense.CLM_EXP_SYS_ID));
                                                        }
                                                        break;
                                                }
                                            }

                                        }

                                     
                                        break;
                                    case "U":
                                        //
                                        estimate.CLM_EST_CLM_SYS_ID = polhClaim.CLM_SYS_ID;
                                        estimate.CLM_EST_STATUS = "A";
                                        db.CLM_EST_DTLS.Add(estimate);
                                        break;
                                    case "D":
                                        //deletion from the database that were not in the update estimate from the view   
                                        db.CLM_EST_DTLS.Attach(db.CLM_EST_DTLS.Find(estimate.CLM_EST_SYS_ID));
                                        break;
                                }
                            }

                        }

                    }
                    break;
                case "U":

                    {

                        polhClaim.CLM_STATUS = "A";
                        polhClaim.CLM_CRTE_DATE = DateTime.Now;
                        db.CLM_EST_HEAD.Add(polhClaim);

                        polhClaim.CLM_EST_RISK_DTLS.ForEach(x => x.CLM_RISK_STATUS = "A");
                        polhClaim.CLM_EST_DTLS.ForEach(x => x.CLM_EST_STATUS = "A");
                    }


                    break;
                case "D":
                    {
                        /*------------------------
                        * Estimation before update
                        *----------------------*/
                        //
                        var dbProd = db.CLM_EST_HEAD.Find(polhClaim.CLM_SYS_ID);
                        /*------------------------
                        * update of Estimation details
                        *----------------------*/
                        //
                        if (dbProd != null)
                        {
                            db.CLM_EST_HEAD.Attach(dbProd);
                            dbProd.CLM_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }


    }
}