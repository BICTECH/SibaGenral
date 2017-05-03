using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Oracle.ManagedDataAccess.Client;
using WebGrease.Css.Extensions;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class TxnDocMdl:Model
    {

        public static MS_ACCT_TXN_DOC GetTxnDoc(string code)
        {
            var _db = new SibaModel();
            using (_db)
            {
                return (from d in _db.MS_ACCT_TXN_DOC where d.ATD_CODE == code select d).ToList()
                    .Select(d => new MS_ACCT_TXN_DOC
                    {
                        ATD_CODE = d.ATD_CODE,
                        ATD_CRTE_BY = d.ATD_CRTE_BY,
                        ATD_CRTE_DATE = d.ATD_CRTE_DATE,
                        ATD_GEN_DOC_NO_YN = d.ATD_GEN_DOC_NO_YN,
                        ATD_MOD_BY = d.ATD_MOD_BY,
                        ATD_MOD_DATE = d.ATD_MOD_DATE,
                        ATD_NAME = d.ATD_NAME,
                        ATD_DESC = d.ATD_DESC,
                        ATD_PAYMT_MODE = d.ATD_PAYMT_MODE,
                        ATD_PRNT_AFTR_PST_YN = d.ATD_PRNT_AFTR_PST_YN,
                        ATD_PRNT_BFR_PST_YN = d.ATD_PRNT_BFR_PST_YN,
                        ATD_PST_MODE = d.ATD_PST_MODE,
                        ATD_SLF_REV_YN = d.ATD_SLF_REV_YN,
                        ATD_STATUS = d.ATD_STATUS,
                        ATD_TXN_CODE = d.ATD_TXN_CODE,
                        ATD_TXN_ORIGN = d.ATD_TXN_ORIGN,
                        MS_ACT_TXN_DOC_ACCS_RGHTS = d.MS_ACT_TXN_DOC_ACCS_RGHTS != null ? d.MS_ACT_TXN_DOC_ACCS_RGHTS.Where(x => x.TDAR_STATUS == "A").Select(ar => TxnDocAccessRightsMdl.GetAccsRght(ar.TDAR_SYS_ID)).ToList() : null,
                        MS_ACT_TXN_DOC_ADV_PROPS = d.MS_ACT_TXN_DOC_ADV_PROPS != null ? d.MS_ACT_TXN_DOC_ADV_PROPS.Select(ap => TxnDocAdvancedPropsMdl.GetAdvProps(ap.DAP_SYS_ID)).ToList() : null,
                        MS_ACT_DEF_ACNTS = d.MS_ACT_DEF_ACNTS != null ? d.MS_ACT_DEF_ACNTS.Where(x => x.DA_STATUS == "A").Select(da => TxntDocDefAcntsMdl.GetDefAcnts(da.DA_SYS_ID)).ToList() : null,
                        MS_ACT_DOC_NO_GEN = d.MS_ACT_DOC_NO_GEN != null ? d.MS_ACT_DOC_NO_GEN.Where(x => x.DNG_STATUS == "A").Select(dg => TxnDocNoGenerationMdl.GetDocNoGen(dg.DNG_SYS_ID)).ToList() : null,
                        MS_ACCT_INS_TXN_TYPE = AccTxnTypeMdl.GetInsAcctTxnType(d.ATD_TXN_CODE),
                        MS_ACCT_DOC_ORIGIN = new MS_ACCT_DOC_ORIGIN { DOC_ORIGN_CODE = d.MS_ACCT_DOC_ORIGIN.DOC_ORIGN_CODE, DOC_ORIGN_NAME = d.MS_ACCT_DOC_ORIGIN.DOC_ORIGN_NAME }
                    }).SingleOrDefault();
            }
            
        }

        public static IEnumerable<MS_ACCT_TXN_DOC> GetTxnDocs()
        {
            var _db = new SibaModel();
            return (from d in _db.MS_ACCT_TXN_DOC where d.ATD_STATUS == "A" select d.ATD_CODE).Select(GetTxnDoc);
        }

        public static IEnumerable<object> GeTxnDocLov()
        {
            var _db = new SibaModel();
            return (from td in _db.MS_ACCT_TXN_DOC where td.ATD_STATUS == "A" select td).ToList().Select(d => new {CODE = d.ATD_CODE, NAME = d.ATD_NAME});
        }

        public static bool Save(MS_ACCT_TXN_DOC document)
        {
            try
            {
                var _db = new SibaModel();
                var dbDoc = _db.MS_ACCT_TXN_DOC.Find(document.ATD_CODE);
                switch (document.ATD_STATUS)
                {
                    case "A":
                        if (dbDoc != null)
                        {
                            _db.MS_ACCT_TXN_DOC.Attach(dbDoc);
                            dbDoc.Map(document);
                            dbDoc.ATD_MOD_DATE = DateTime.Now;

                            /*-------------------------------------------------
                             * txn document document no  generation processing
                             *-----------------------------------------------*/
                            foreach (var gen in document.MS_ACT_DOC_NO_GEN)
                            {
                                var dbGen = _db.MS_ACT_DOC_NO_GEN.Find(gen.DNG_SYS_ID);
                                var seqName = document.ATD_CODE + "_" + gen.DNG_ACNT_YEAR;
                                switch (gen.DNG_STATUS)
                                {
                                    case "A":
                                        if (dbGen != null)
                                        {
                                            _db.MS_ACT_DOC_NO_GEN.Attach(dbGen);
                                            dbGen.Map(gen);
                                            dbGen.DNG_MOD_DATE = DateTime.Now;

                                            var curNo = _db.Database.SqlQuery<int>("SELECT " + seqName + ".NEXTVAL FROM DUAL").Single();

                                            //update seqeuence for the document no. generation
                                            procCntx.SEQ_CREATOR4(seqName, curNo, gen.DNG_CUR_NO, gen.DNG_END_NO, 20, gen.DNG_NXT_NO);
                                            
                                        }
                                        break;
                                    case "U":
                                        gen.DNG_STATUS = "A";
                                        gen.DNG_ATD_CODE = document.ATD_CODE;
                                        gen.DNG_CRTE_DATE = DateTime.Now;

                                        //generate seqeuence for the document no. generation
                                        procCntx.SEQ_CREATOR3(seqName, gen.DNG_STRT_NO, gen.DNG_CUR_NO, gen.DNG_END_NO, 20, gen.DNG_NXT_NO);
                                        _db.MS_ACT_DOC_NO_GEN.Add(gen);

                                        break;
                                    case "D":
                                        if (dbGen != null)
                                        {
                                            _db.MS_ACT_DOC_NO_GEN.Attach(dbGen);
                                            dbGen.DNG_STATUS = "D";
                                            dbGen.DNG_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                }
                            }


                            /*--------------------------------------
                             * txn document default accounts setup
                             *------------------------------------*/
                            foreach (var defAcnt in document.MS_ACT_DEF_ACNTS)
                            {
                                var dbDefAcnt = _db.MS_ACT_DEF_ACNTS.Find(defAcnt.DA_SYS_ID);
                                switch (defAcnt.DA_STATUS)
                                {
                                    case "A":
                                        if (dbDefAcnt != null)
                                        {
                                            _db.MS_ACT_DEF_ACNTS.Attach(dbDefAcnt);
                                            dbDefAcnt.Map(defAcnt);
                                            dbDefAcnt.DA_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                    case "U":
                                        defAcnt.DA_STATUS = "A";
                                        defAcnt.DA_ATD_CODE = document.ATD_CODE;
                                        defAcnt.DA_CRTE_DATE = DateTime.Now;

                                        _db.MS_ACT_DEF_ACNTS.Add(defAcnt);
                                        break;
                                    case "D":
                                        if (dbDefAcnt != null)
                                        {
                                            _db.MS_ACT_DEF_ACNTS.Attach(dbDefAcnt);
                                            dbDefAcnt.DA_STATUS = "D";
                                            dbDefAcnt.DA_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                }
                            }


                            /*--------------------------------------
                             * txn document default accounts setup
                             *------------------------------------*/
                            foreach (var rights in document.MS_ACT_TXN_DOC_ACCS_RGHTS)
                            {
                                var dbRights = _db.MS_ACT_TXN_DOC_ACCS_RGHTS.Find(rights.TDAR_SYS_ID);
                                switch (rights.TDAR_STATUS)
                                {
                                    case "A":
                                        if (dbRights != null)
                                        {
                                            _db.MS_ACT_TXN_DOC_ACCS_RGHTS.Attach(dbRights);
                                            dbRights.Map(rights);
                                            dbRights.TDAR_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                    case "U":
                                        rights.TDAR_STATUS = "A";
                                        rights.TDAR_ATD_CODE = document.ATD_CODE;
                                        rights.TDAR_CRTE_DATE = DateTime.Now;

                                        _db.MS_ACT_TXN_DOC_ACCS_RGHTS.Add(rights);
                                        break;
                                    case "D":
                                        if (dbRights != null)
                                        {
                                            _db.MS_ACT_TXN_DOC_ACCS_RGHTS.Attach(dbRights);
                                            dbRights.TDAR_STATUS = "D";
                                            dbRights.TDAR_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                }
                            }


                            /*--------------------------------------
                             * txn document default accounts setup
                             *------------------------------------*/
                            foreach (var props in document.MS_ACT_TXN_DOC_ADV_PROPS)
                            {
                                var dbProps = _db.MS_ACT_TXN_DOC_ADV_PROPS.Find(props.DAP_SYS_ID);
                                switch (props.DAP_STATUS)
                                {
                                    case "A":
                                        if (dbProps != null)
                                        {
                                            _db.MS_ACT_TXN_DOC_ADV_PROPS.Attach(dbProps);
                                            dbProps.Map(props);
                                            dbProps.DAP_MOD_DATE = DateTime.Now;
                                        }
                                        break;
                                    case "U":
                                        props.DAP_STATUS = "A";
                                        props.DAP_ATD_CODE = document.ATD_CODE;
                                        props.DAP_CRTE_DATE = DateTime.Now;

                                        _db.MS_ACT_TXN_DOC_ADV_PROPS.Add(props);
                                        break;
                                    case "D":
                                        break;
                                }
                            }

                        }
                        break;
                    case "U":
                        document.ATD_STATUS = "A";
                        document.ATD_CRTE_DATE = DateTime.Now;

                        document.MS_ACT_TXN_DOC_ACCS_RGHTS.ForEach(x => { x.TDAR_STATUS = "A"; x.TDAR_CRTE_DATE = DateTime.Now; });
                        document.MS_ACT_DEF_ACNTS.ForEach(x => { x.DA_STATUS = "A"; x.DA_CRTE_DATE = DateTime.Now; });
                        document.MS_ACT_DOC_NO_GEN.ForEach(x =>
                        {
                            x.DNG_STATUS = "A";
                            x.DNG_CRTE_DATE = DateTime.Now;
                            //generate seqeuence for the document no. generation
                            var seqName = document.ATD_CODE + "_" + x.DNG_ACNT_YEAR;

                            procCntx.SEQ_CREATOR3(seqName, x.DNG_STRT_NO, x.DNG_CUR_NO, x.DNG_END_NO, 20, x.DNG_NXT_NO);

                        });
                        document.MS_ACT_TXN_DOC_ADV_PROPS.ForEach(x => x.DAP_STATUS = "A");

                        _db.MS_ACCT_TXN_DOC.Add(document);
                        break;
                    case "D":
                        if (dbDoc != null)
                        {
                            _db.MS_ACCT_TXN_DOC.Attach(dbDoc);
                            dbDoc.ATD_STATUS = "D";
                            dbDoc.ATD_MOD_DATE = DateTime.Now;
                        }
                        break;
                }

                return _db.SaveChanges() > 0;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        public static IEnumerable<object> Search(string q)
        {
            var _db = new SibaModel();
            return (from d in _db.MS_ACCT_TXN_DOC
                where
                    (d.ATD_CODE.ToLower().Contains(q.Trim().ToLower()) ||
                     d.ATD_NAME.ToLower().Contains(q.ToLower().ToLower())) && d.ATD_STATUS == "A"
                select d.ATD_CODE).Select(GetTxnDoc);
        } 
    }
}