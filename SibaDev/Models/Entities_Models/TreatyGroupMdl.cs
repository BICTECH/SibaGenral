using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.Validation;
using SibaDev.Models;
using WebGrease.Css.Extensions;

namespace SibaDev.Models
{
    public class TreatyGroupMdl : Model
    {
        public static MS_RI_GROUP_HEAD get_treatygrp(string code)
        {
            var db = new SibaModel();
            try
            {
                return (from mdl in db.MS_RI_GROUP_HEAD where mdl.GP_CODE == code select mdl).ToList().Select(mdl => new MS_RI_GROUP_HEAD
                {
                    GP_CODE = mdl.GP_CODE,
                    GP_TTY_TYPE = mdl.GP_TTY_TYPE,
                    GP_NAME = mdl.GP_NAME,
                    GP_CONFIRM = mdl.GP_CONFIRM,
                    GP_DESC = mdl.GP_DESC,            
                    GP_CRTE_BY = mdl.GP_CRTE_BY,
                    GP_CRTE_DATE = mdl.GP_CRTE_DATE,
                    GP_STATUS = mdl.GP_STATUS,
                    GP_MOD_BY = mdl.GP_MOD_BY,
                    GP_MOD_DATE = mdl.GP_MOD_DATE,

                    MS_RI_GROUP_DETL = mdl.MS_RI_GROUP_DETL != null ? mdl.MS_RI_GROUP_DETL.Select(c =>
                     new MS_RI_GROUP_DETL
                     {
                         GD_SYS_ID = c.GD_SYS_ID,
                         GD_SUB_CLASS = c.GD_SUB_CLASS,
                         GD_PML_PERC = c.GD_PML_PERC,
                         GD_GP_CODE = c.GD_GP_CODE,
                         GD_EML_YN = c.GD_EML_YN,
                         GD_STATUS = c.GD_STATUS,
                         GD_CRTE_BY = c.GD_CRTE_BY,
                         GD_CRTE_DATE = c.GD_CRTE_DATE,
                         GD_MOD_DATE = c.GD_MOD_DATE,
                         GD_MOD_BY = c.GD_MOD_BY,

                     }).ToList() : null

                }).Single();
            }
            catch (Exception e)
            {
                return null;
            }
        }



        public static IEnumerable<MS_RI_GROUP_HEAD> get_treatygrps()
        {
            var db = new SibaModel();
            return (from mdl in db.MS_RI_GROUP_HEAD where mdl.GP_STATUS == "A" select mdl.GP_CODE).ToList().Select(get_treatygrp);
        }


        public static IEnumerable<object> search_treatygrps(string q)
        {
            var db = new SibaModel();
            return (from mdl in db.MS_RI_GROUP_HEAD
                    where (mdl.GP_NAME.ToLower().Contains(q.ToLower()) || mdl.GP_CODE.ToLower().Contains(q.ToLower()) || mdl.GP_CODE.ToString().Contains(q.ToLower())) && mdl.GP_STATUS == "A"
                    select mdl.GP_CODE).ToList().Select(get_treatygrp);
        }


        public static IEnumerable<object> get_lov_treaty()
        {
            var db = new SibaModel();
            return (from area in db.MS_RI_GROUP_HEAD
                    where area.GP_STATUS == "A"
                    select new
                    { CODE = area.GP_CODE, NAME = area.GP_NAME });
        }

        public static bool save_treatygrp(MS_RI_GROUP_HEAD viewTariff)
        {
            var db = new SibaModel();
            switch (viewTariff.GP_STATUS)
            {
                case "A":
                    {
                        var dbPolh = db.MS_RI_GROUP_HEAD.Find(viewTariff.GP_CODE);

                        if (dbPolh != null)
                        {
                            db.MS_RI_GROUP_HEAD.Attach(dbPolh);
                            dbPolh.Map(viewTariff);

                            /*--------------------------------
                             * Risk Cover
                             *-------------------------------*/
                            foreach (var prodrisk in viewTariff.MS_RI_GROUP_DETL)
                            {
                                prodrisk.GD_GP_CODE = viewTariff.GP_CODE;
                                switch (prodrisk.GD_STATUS)
                                {
                                    case "A":
                                        var dbveh = db.MS_RI_GROUP_DETL.Find(prodrisk.GD_SYS_ID);
                                        db.MS_RI_GROUP_DETL.Attach(dbveh);
                                        dbveh.Map(prodrisk);
                                        break;
                                    case "U":
                                        prodrisk.GD_GP_CODE = viewTariff.GP_CODE;
                                        prodrisk.GD_STATUS = "A";
                                        db.MS_RI_GROUP_DETL.Add(prodrisk);
                                        break;
                                    case "D":
                                        db.MS_RI_PTTY_DETL.Remove(db.MS_RI_PTTY_DETL.Find(prodrisk.GD_SYS_ID));
                                        break;
                                }

                            }

                        }

                    }
                    break;
                case "U":

                    viewTariff.GP_STATUS = "A";
                    viewTariff.GP_CRTE_DATE = DateTime.Now;
                    db.MS_RI_GROUP_HEAD.Add(viewTariff);
                    ///*-----------------------------------------
                    // * updating the status of related tables
                    // *---------------------------------------*/

                    viewTariff.MS_RI_GROUP_DETL.ForEach(x => x.GD_STATUS = "A");

                    db.SaveChanges();

                    break;
                case "D":
                    {
                        /*------------------------
                        * header before update
                        *----------------------*/
                        //
                        var dbPolh = db.MS_RI_GROUP_HEAD.Find(viewTariff.GP_CODE);
                        /*------------------------
                        * update of header details
                        *----------------------*/
                        //
                        if (dbPolh != null)
                        {
                            db.MS_RI_GROUP_HEAD.Attach(dbPolh);
                            dbPolh.GP_STATUS = "D";
                        }

                    }
                    break;
            }

            return db.SaveChanges() > 0;
        }


        public static IEnumerable<object> get_treaty_subclass(string ProdCode)
        {
            var db = new SibaModel();
            try
            {
                return (from risk in db.MS_RI_GROUP_DETL
                        where risk.GD_GP_CODE == ProdCode && risk.GD_STATUS == "A"
                        select new
                        {
                            TSC_SCLASS_CODE = risk.GD_SUB_CLASS,
                            TSC_TTY_LIMIT_FC = risk.GD_PML_PERC,
                            TSC_STATUS = risk.GD_STATUS,
                            TSC_EML_YN = risk.GD_EML_YN,
                            TSC_CRET_BY = risk.GD_CRTE_BY,
                            TSC_CRET_DATE = risk.GD_CRTE_DATE
                        });

            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}