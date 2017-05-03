using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using SibaDev.System_Contants;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.Entities_Models
{
    public class TreatyProportionalMdl: Model
    {

        public static MS_RI_PTTY_HEAD get_treatyprop(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_RI_PTTY_HEAD where mdl.TH_CODE == code select mdl).ToList().Select(mdl => new MS_RI_PTTY_HEAD
                {
                    TH_CODE = mdl.TH_CODE,
                    TH_TTY_CODE = mdl.TH_TTY_CODE,
                    TH_TTY_PRME_BASIS = mdl.TH_TTY_PRME_BASIS,
                    //MS_RI_GROUP_HEAD = TreatyGroupMdl.get_treatygrp(mdl.TH_TTY_CODE),
                    TH_UWYR = mdl.TH_UWYR,
                    TH_QS_PERC = mdl.TH_QS_PERC,
                    TH_WAR_YN = mdl.TH_WAR_YN,
                    TH_CURRENCY =mdl.TH_CURRENCY,
                    TH_CUR_RATE = mdl.TH_CUR_RATE,
                    TH_CRTE_BY = mdl.TH_CRTE_BY,
                    TH_CRTE_DATE = mdl.TH_CRTE_DATE,
                    TH_STATUS = mdl.TH_STATUS,
                    TH_MOD_BY = mdl.TH_MOD_BY,
                    TH_MOD_DATE = mdl.TH_MOD_DATE,
                    TH_END_DATE = mdl.TH_END_DATE,
                    TH_QS_YN = mdl.TH_QS_YN,
                    TH_RI_LEVEL = mdl.TH_RI_LEVEL,
                    TH_SART_DATE = mdl.TH_SART_DATE,
                    TH_UW_BASIS = mdl.TH_UW_BASIS,
                    TH_SYS_ID = mdl.TH_SYS_ID,
                    MS_RI_PTTY_DETL = mdl.MS_RI_PTTY_DETL != null ? mdl.MS_RI_PTTY_DETL.Select(r => get_details(r.TD_SYS_ID)).ToList() : null,

                }).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static MS_RI_PTTY_DETL get_details(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from c in db.MS_RI_PTTY_DETL where c.TD_SYS_ID == code select c).ToList().Select(c => new MS_RI_PTTY_DETL
                {
                   
                    TD_SYS_ID = c.TD_SYS_ID,
                    TD_CASH_CALL_LIMIT = c.TD_CASH_CALL_LIMIT,
                    TD_CESS_TYPE = c.TD_CESS_TYPE,
                    TD_CLM_ADVICE_LIMIT = c.TD_CLM_ADVICE_LIMIT,
                    TD_CRTE_BY = c.TD_CRTE_BY,
                    TD_CRTE_DATE = c.TD_CRTE_DATE,
                    TD_DEPOSIT_PREM = c.TD_DEPOSIT_PREM,
                    TD_EST_PREM = c.TD_EST_PREM,
                    TD_LOSS_CFWD_YEARS = c.TD_LOSS_CFWD_YEARS,
                    TD_MGT_EXP_RATIO = c.TD_MGT_EXP_RATIO,
                    TD_MOD_BY = c.TD_MOD_BY,
                    TD_MOD_DATE = c.TD_MOD_DATE,
                    TD_NO_LINES = c.TD_NO_LINES,
                    TD_OR_LIMIT = c.TD_OR_LIMIT,
                    TD_OS_CLM_RSVE_RATIO = c.TD_OS_CLM_RSVE_RATIO,
                    TD_PREM_RSVE_RATIO = c.TD_PREM_RSVE_RATIO,
                    TD_PROFIT_COMM = c.TD_PROFIT_COMM,
                    TD_SEQ = c.TD_SEQ,
                    TD_STATUS = c.TD_STATUS,
                    TD_TH_SYS_ID = c.TD_TH_SYS_ID,
                    TD_TTY_CODE = c.TD_TTY_CODE,
                    TD_TTY_LIMIT = c.TD_TTY_LIMIT,
                    TD_TTY_TYPE = c.TD_TTY_TYPE,
                    //MS_RI_PTTY_SUBCLASS = c.MS_RI_PTTY_SUBCLASS != null ? c.MS_RI_PTTY_SUBCLASS.Select(r => get_subclass(r.TSC_SYS_ID)).ToList() : null,
                    MS_RI_PTTY_COMPANY = c.MS_RI_PTTY_COMPANY != null ? c.MS_RI_PTTY_COMPANY.Select(r => get_company(r.TCP_SYS_ID)).ToList() : null,

                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static MS_RI_PTTY_SUBCLASS get_subclass(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.MS_RI_PTTY_SUBCLASS where r.TSC_SYS_ID == code select r).ToList().Select(r => new MS_RI_PTTY_SUBCLASS
                {
                    TSC_SYS_ID = r.TSC_SYS_ID,
                    TSC_SCLASS_CODE = r.TSC_SCLASS_CODE,
                    TSC_CRTE_BY = r.TSC_CRTE_BY,
                    TSC_CRTE_DATE = r.TSC_CRTE_DATE,
                    TSC_MOD_BY = r.TSC_MOD_BY,
                    TSC_MOD_DATE = r.TSC_MOD_DATE,
                    TSC_TD_SYS_ID = r.TSC_TD_SYS_ID,
                    TSC_TTY_LIMIT_BC = r.TSC_TTY_LIMIT_BC,
                    TSC_STATUS = r.TSC_STATUS,
                    TSC_TTY_LIMIT_FC = r.TSC_TTY_LIMIT_FC

                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static MS_RI_PTTY_COMPANY get_company(int code)
        {
            var db = new SibaModel();
            try
            {
                return (from r in db.MS_RI_PTTY_COMPANY where r.TCP_SYS_ID == code select r).ToList().Select(r => new MS_RI_PTTY_COMPANY
                {
                    TCP_SYS_ID = r.TCP_SYS_ID,
                    TCP_COMP_CODE = r.TCP_COMP_CODE,
                    TCP_CRTE_BY = r.TCP_CRTE_BY,
                    TCP_CRTE_DATE = r.TCP_CRTE_DATE,
                    TCP_MOD_BY = r.TCP_MOD_BY,
                    TCP_MOD_DATE = r.TCP_MOD_DATE,
                    TCP_LEADER_YN = r.TCP_LEADER_YN,
                    TCP_STATUS = r.TCP_STATUS,
                    TCP_TD_SYS_ID = r.TCP_TD_SYS_ID,
                    TCP_TTY_COMM = r.TCP_TTY_COMM,
                    TCP_TTY_SHARE = r.TCP_TTY_SHARE,
                    TCP_TTY_TAX = r.TCP_TTY_TAX

                }).Single();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static IEnumerable<MS_RI_PTTY_HEAD> get_treatyprops()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_RI_PTTY_HEAD where mdl.TH_STATUS == "A" select mdl.TH_CODE).ToList().Select(get_treatyprop);
        }

        public static bool save_treatyprop(MS_RI_PTTY_HEAD viewPolh)
        {
            var db = new SibaModel();

                switch (viewPolh.TH_STATUS)
                {
                    case "A":
                        {
                        var dbPolh = db.MS_RI_PTTY_HEAD.Find(viewPolh.TH_SYS_ID);
                        //policy header before update

                        if (dbPolh != null)
                            {
                                //update of policy header details
                                db.MS_RI_PTTY_HEAD.Attach(dbPolh);
                                dbPolh.Map(viewPolh);

                                /*--------------------------------
                                 * Proportional Details
                                 *----------------------*/
                                foreach (var bon in viewPolh.MS_RI_PTTY_DETL)
                                {
                                    var dbbon = db.MS_RI_PTTY_DETL.Find(bon.TD_SYS_ID);
                                    switch (bon.TD_STATUS)
                                    {
                                        case "A":
                                            if (dbbon != null)
                                            {
                                                bon.TD_TH_SYS_ID = viewPolh.TH_SYS_ID;
                                                db.MS_RI_PTTY_DETL.Attach(dbbon);
                                                dbbon.Map(bon);


                                            //SUB CLASS UPDATE
                                            //foreach (var subclass in bon.MS_RI_PTTY_SUBCLASS)
                                            //{
                                            //    var dbSubclass = db.MS_RI_PTTY_SUBCLASS.Find(subclass.TSC_SYS_ID);
                                            //    switch (subclass.TSC_STATUS)
                                            //    {
                                            //        case "A":
                                            //            if (dbSubclass != null)
                                            //            {
                                            //                db.MS_RI_PTTY_SUBCLASS.Attach(dbSubclass);
                                            //                dbSubclass.Map(subclass);
                                            //                dbSubclass.TSC_MOD_DATE = DateTime.Now;
                                            //            }
                                            //            break;

                                            //        case "U":
                                            //            subclass.TSC_STATUS = "A";
                                            //            subclass.TSC_CRTE_DATE = DateTime.Now;
                                            //            subclass.TSC_TD_SYS_ID = bon.TD_SYS_ID;
                                            //            db.MS_RI_PTTY_SUBCLASS.Add(subclass);
                                            //            break;

                                            //        case "D":
                                            //            if (dbSubclass != null)
                                            //            {
                                            //                db.MS_RI_PTTY_SUBCLASS.Attach(dbSubclass);
                                            //                dbSubclass.TSC_STATUS = "D";
                                            //                dbSubclass.TSC_MOD_DATE = DateTime.Now;
                                            //                db.MS_RI_PTTY_SUBCLASS.Remove(db.MS_RI_PTTY_SUBCLASS.Find(subclass.TSC_SYS_ID));
                                            //            }
                                            //            break;
                                            //    }
                                            //}

                                            //COMPANY UPDATE
                                            foreach (var company in bon.MS_RI_PTTY_COMPANY)
                                            {
                                                var dbCompany = db.MS_RI_PTTY_COMPANY.Find(company.TCP_SYS_ID);
                                                switch (company.TCP_STATUS)
                                                {
                                                    case "A":
                                                        if (dbCompany != null)
                                                        {
                                                            db.MS_RI_PTTY_COMPANY.Attach(dbCompany);
                                                            dbCompany.Map(company);
                                                            dbCompany.TCP_MOD_DATE = DateTime.Now;
                                                        }
                                                        break;

                                                    case "U":
                                                        company.TCP_STATUS = "A";
                                                        company.TCP_CRTE_DATE = DateTime.Now;
                                                        company.TCP_TD_SYS_ID = bon.TD_SYS_ID;
                                                        db.MS_RI_PTTY_COMPANY.Add(company);
                                                        break;

                                                    case "D":
                                                        if (dbCompany != null)
                                                        {
                                                            db.MS_RI_PTTY_COMPANY.Attach(dbCompany);
                                                            dbCompany.TCP_STATUS = "D";
                                                            dbCompany.TCP_MOD_DATE = DateTime.Now;
                                                            db.MS_RI_PTTY_COMPANY.Remove(db.MS_RI_PTTY_COMPANY.Find(company.TCP_SYS_ID));
                                                        }
                                                        break;
                                                }
                                            }


                                        }
                                            break;
                                        case "U":
                                            bon.TD_STATUS = "A";
                                            bon.TD_TH_SYS_ID = viewPolh.TH_SYS_ID;
                                        bon.MS_RI_PTTY_COMPANY.ForEach(x => x.TCP_STATUS = "A");
                                            db.MS_RI_PTTY_DETL.Add(bon);
                                            break;
                                        case "D":
                                            db.MS_RI_PTTY_DETL.Remove(db.MS_RI_PTTY_DETL.Find(bon.TD_SYS_ID));
                                            break;
                                    }


                                }

                                db.SaveChanges();
                            }
                        }
                        break;
                    case "U":

                        viewPolh.TH_STATUS = "A";

                        /*-----------------------------------------
                         * updating the status of related tables
                         *---------------------------------------*/
                        viewPolh.MS_RI_PTTY_DETL.ForEach(x => {
                            x.TD_STATUS = "A";
                            //x.MS_RI_PTTY_SUBCLASS.ForEach(c => c.TSC_STATUS = "A");
                            x.MS_RI_PTTY_COMPANY.ForEach(c => c.TCP_STATUS = "A");
                        });

                        db.MS_RI_PTTY_HEAD.Add(viewPolh);

                        db.SaveChanges();

                        break;
                    case "D":
                        {
                        /*--------------------------
                         * update of policy details
                         *------------------------*/
                        //
                        var dbPolh = db.MS_RI_PTTY_HEAD.Find(viewPolh.TH_SYS_ID);

                        if (dbPolh != null)
                            {
                                db.MS_RI_PTTY_HEAD.Attach(dbPolh);
                                dbPolh.TH_STATUS = "D";
                            }

                        }
                        break;
                }

                return db.SaveChanges() > 0;
            }


        public static IEnumerable<object> search_treatygrps(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_RI_PTTY_HEAD
                    where (mdl.TH_CODE.ToLower().Contains(q.ToLower())) && mdl.TH_STATUS == "A"
                    select mdl.TH_CODE).ToList().Select(get_treatyprop);
        }

    }
}