using System;
using System.Collections.Generic;
using System.Linq;
using SibaDev.Models.History_Entities;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.History_Models
{
    public class PolicyHistoryMdl
    {

        public static INS_UWD_POLICY_HEAD GetHPolicyHead(int polId, int endNo)
        {
            var db = new SibaModel();
            return (from policy in db.INS_UWD_HPOLICY_HEAD
                    where policy.POLH_SYS_ID == polId && policy.POLH_END_NO == endNo
                    select policy).ToList().Select(polh => new INS_UWD_POLICY_HEAD
                    {
                        POLH_SYS_ID = polh.POLH_SYS_ID,
                        POLH_DOC_NO = polh.POLH_DOC_NO,
                        POLH_END_NO = polh.POLH_END_NO,
                        POLH_QUT_SER_NO = polh.POLH_QUT_SER_NO,
                        POLH_POL_SER_NO = polh.POLH_POL_SER_NO,
                        //MS_SYS_COMPANY = CompanyMdl.get_company(polh.POLH_CMP_CODE),
                        //MS_SYS_OFFICE = OfficeMdl.get_office(polh.POLH_OFF_CODE),
                        //MS_UDW_CUSTOMERS = CustomerMdl.get_customer(polh.POLH_CUST_CODE),
                        //MS_SYS_SOURCE_BUSINESS = SourceBusinessMdl.get_sourcebusiness(polh.POLH_INS_SOURCE),
                        //MS_SYS_INTERMEDIARY = IntermediaryMdl.get_intermediary(polh.POLH_INTERMIDIARY),
                        //MST_UWD_PRODUCT = ProductMdl.get_product(polh.POLH_SUB_CLASS_CODE),
                        //MS_UDW_CLASS_OF_BUSINESS = ClassBusinessMdl.get_class(polh.POLH_CLASS_CODE),
                        //MS_SYS_CHANNEL = ChannelMdl.get_channel(polh.POLH_CHANNEL_CODE),
                        POLH_CLASS_CODE = polh.POLH_CLASS_CODE,
                        POLH_SUB_CLASS_CODE = polh.POLH_SUB_CLASS_CODE,
                        POLH_CHANNEL_CODE = polh.POLH_CHANNEL_CODE,
                        POLH_CMP_CODE = polh.POLH_CMP_CODE,
                        POLH_OFF_CODE = polh.POLH_OFF_CODE,
                        POLH_CUST_CODE = polh.POLH_CUST_CODE,
                        POLH_INS_SOURCE = polh.POLH_INS_SOURCE,
                        POLH_BIZ_SOURCE = polh.POLH_BIZ_SOURCE,
                        POLH_INTERMIDIARY = polh.POLH_INTERMIDIARY,
                        POLH_POL_START_DATE = polh.POLH_POL_START_DATE,
                        POLH_POL_END_DATE = polh.POLH_POL_END_DATE,
                        POLH_POL_DAYS = polh.POLH_POL_DAYS,
                        POLH_POL_UW_YEAR = polh.POLH_POL_UW_YEAR,
                        POLH_POL_SI_FC = polh.POLH_POL_SI_FC,
                        POLH_POL_SI_BC = polh.POLH_POL_SI_BC,
                        POLH_POL_PREM_FC = polh.POLH_POL_PREM_FC,
                        POLH_POL_PREM_BC = polh.POLH_POL_PREM_BC,
                        POLH_POL_COMM_FC = polh.POLH_POL_COMM_FC,
                        POLH_POL_COMM_BC = polh.POLH_POL_COMM_BC,

                        POLH_POL_DISC_FC = polh.POLH_POL_DISC_FC,
                        POLH_POL_DISC_BC = polh.POLH_POL_DISC_BC,
                        POLH_POL_LOAD_FC = polh.POLH_POL_LOAD_FC,
                        POLH_POL_LOAD_BC = polh.POLH_POL_LOAD_BC,
                        POLH_COINS_SI_FC = polh.POLH_COINS_SI_FC,
                        POLH_COINS_SI_BC = polh.POLH_COINS_SI_BC,
                        POLH_COINS_PREM_FC = polh.POLH_COINS_PREM_FC,
                        POLH_COINS_PREM_BC = polh.POLH_COINS_PREM_BC,
                        POLH_NET_SI_FC = polh.POLH_NET_SI_FC,
                        POLH_NET_SI_BC = polh.POLH_NET_SI_BC,
                        POLH_NET_PREM_FC = polh.POLH_NET_PREM_FC,
                        POLH_NET_PREM_BC = polh.POLH_NET_PREM_BC,
                        POLH_FEE_FC = polh.POLH_FEE_FC,
                        POLH_FEE_BC = polh.POLH_FEE_BC,
                        POLH_RENEW_SER_NO = polh.POLH_RENEW_SER_NO,
                        POLH_TXN_STATE = polh.POLH_TXN_STATE,
                        POLH_POL_STATE = polh.POLH_POL_STATE,
                        POLH_END_TYPE = polh.POLH_END_TYPE,
                        POLH_APPROVE_DATE = polh.POLH_APPROVE_DATE,
                        POLH_ACCT_DATE = polh.POLH_ACCT_DATE,
                        POLH_DISPLAY_NO = polh.POLH_DISPLAY_NO,
                        POLH_CRTE_BY = polh.POLH_CRTE_BY,
                        POLH_CRTE_DATE = polh.POLH_CRTE_DATE,
                        POLH_MOD_BY = polh.POLH_MOD_BY,
                        POLH_MOD_DATE = polh.POLH_MOD_DATE,
                        POLH_STATUS = polh.POLH_STATUS,
                        POLH_CURRENCY = polh.POLH_CURRENCY,
                        POLH_CURRENCY_RATE = polh.POLH_CURRENCY_RATE,
                        //INS_UDW_BONDS = polh.INS_UDW_BONDS != null ? polh.INS_UDW_BONDS.Select(r => PolicyBondMdl.get_bond(r.BOND_SYS_ID)).ToList() : null,

                        INS_UWD_VEHICLE_RISK = RiskHistoryMdl.GetPolHistoryRisk(polh.POLH_SYS_ID,polh.POLH_END_NO).ToList(),

                        //INS_UDW_TRAVEL_RISK_HEAD = polh.INS_UDW_TRAVEL_RISK_HEAD != null ? polh.INS_UDW_TRAVEL_RISK_HEAD.Select(r => PolicyTravelMdl.get_travel_head(r.TRAH_SYS_ID)).ToList() : null,
                        //INS_UDW_TRAVEL_RISK = polh.INS_UDW_TRAVEL_RISK != null ? polh.INS_UDW_TRAVEL_RISK.Select(r => PolicyTravelMdl.get_traveller(r.TRA_SYS_ID)).ToList() : null,
                        //INS_UWD_FIRE_LOCRISK = polh.INS_UWD_FIRE_LOCRISK != null ? polh.INS_UWD_FIRE_LOCRISK.Select(r => PolicyFireMdl.get_fire_locrisk(r.PLOC_SYS_ID)).ToList() : null,
                        //INS_UWD_FIRE_LOCINT = polh.INS_UWD_FIRE_LOCINT != null ? polh.INS_UWD_FIRE_LOCINT.Select(r => PolicyFireMdl.get_fire_locint(r.LINT_SYS_ID)).ToList() : null,
                        //INS_UDW_GENERAL_ACCIDENT = polh.INS_UDW_GENERAL_ACCIDENT != null ? polh.INS_UDW_GENERAL_ACCIDENT.Select(r => PolicyGAMdl.get_ga_header(r.GA_SYS_ID)).ToList() : null,
                        //INS_UWD_RISK_COVERS = polh.INS_UWD_RISK_COVERS != null ? polh.INS_UWD_RISK_COVERS.Select(r => PolicyRiskCovers.get_riskcovers(r.RCOV_SYS_ID)).ToList() : null,
                    }).FirstOrDefault();
        }

        public static bool PolicyHistoryInsert(INS_UWD_POLICY_HEAD policy)
        {
            var db = new SibaModel();
            using (db)
            {
                using (var trans = db.Database.BeginTransaction())
                {
                    try
                    {
                        //save policy header history
                        var historyPolicy = new INS_UWD_HPOLICY_HEAD();
                        historyPolicy.Map(policy);
                        db.INS_UWD_HPOLICY_HEAD.Add(historyPolicy);
                        

                        //save policy vehicle risk hsitory
                        policy.INS_UWD_VEHICLE_RISK.ForEach(r =>
                        {
                            var historyRisk = new INS_UWD_HVEHICLE_RISK();
                            historyRisk.Map(r);
                            db.INS_UWD_HVEHICLE_RISK.Add(historyRisk);

                            //save risk cover history
                            r.INS_UWD_RISK_COVERS.ForEach(c =>
                            {
                                var historyCover = new INS_UWD_HRISK_COVERS();
                                historyCover.Map(c);
                                db.INS_UWD_HRISK_COVERS.Add(historyCover);

                                //save cover discount history
                                c.INS_UDW_COVER_DISCLOAD.ForEach(d =>
                                {
                                    var hisDiscLoad = new INS_UDW_HCOVER_DISCLOAD();
                                    hisDiscLoad.Map(d);
                                    db.INS_UDW_HCOVER_DISCLOAD.Add(hisDiscLoad);
                                });
                            });

                            //save risk fee history
                            r.INS_UDW_VEHICLE_FEES.ForEach(f =>
                            {
                                var historyFee = new INS_UDW_HVEHICLE_FEES();
                                historyFee.Map(f);
                                db.INS_UDW_HVEHICLE_FEES.Add(historyFee);
                            });


                            //save risk discount history 
                            r.INS_UDW_RISK_DISCLOAD.ForEach(d =>
                            {
                                var historyDiscount = new INS_UDW_HRISK_DISCLOAD();
                                historyDiscount.Map(d);
                                db.INS_UDW_HRISK_DISCLOAD.Add(historyDiscount);
                            });

                            //save risk excess history
                            r.INS_UDW_RISK_EXCESS.ForEach(e =>
                            {
                                var historyExcess = new INS_UDW_HRISK_EXCESS();
                                historyExcess.Map(e);
                                db.INS_UDW_HRISK_EXCESS.Add(historyExcess);
                            });
                        });


                        //todo: save other product risk history
                        db.SaveChanges();
                        trans.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        trans.Rollback();
                        throw;
                    }
                }
            }
        }
    }
}