using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.AccountsEntitis.AccountsModel
{
    public class TxnDocAccessRightsMdl:Model
    {

        public static MS_ACT_TXN_DOC_ACCS_RGHTS GetAccsRght(int id)
        {
            var _db = new SibaModel();
            using (_db)
            {
                return
                (from ar in _db.MS_ACT_TXN_DOC_ACCS_RGHTS where ar.TDAR_SYS_ID == id select ar).ToList()
                    .Select(ar => new MS_ACT_TXN_DOC_ACCS_RGHTS
                    {
                        TDAR_SYS_ID = ar.TDAR_SYS_ID,
                        TDAR_AMMEND_YN = ar.TDAR_AMMEND_YN,
                        TDAR_ATD_CODE = ar.TDAR_ATD_CODE,
                        TDAR_CRTE_BY = ar.TDAR_CRTE_BY,
                        TDAR_CRTE_DATE = ar.TDAR_CRTE_DATE,
                        TDAR_MAX_AMNT = ar.TDAR_MAX_AMNT,
                        TDAR_MIN_AMNT = ar.TDAR_MIN_AMNT,
                        TDAR_MOD_BY = ar.TDAR_MOD_BY,
                        TDAR_MOD_DATE = ar.TDAR_MOD_DATE,
                        TDAR_POST_TXN_YN = ar.TDAR_POST_TXN_YN,
                        TDAR_PRNT_AFTR_PST_YN = ar.TDAR_PRNT_AFTR_PST_YN,
                        TDAR_PRNT_BFR_PST_YN = ar.TDAR_PRNT_BFR_PST_YN,
                        TDAR_REVERSE_YN = ar.TDAR_REVERSE_YN,
                        TDAR_STATUS = ar.TDAR_STATUS,
                        TDAR_USR_CODE = ar.TDAR_USR_CODE,
                        //MS_SYS_USERS = UserMdl.GetUserByCode(ar.TDAR_USR_CODE)
                    }).SingleOrDefault();
            }
            
        }

        public static IEnumerable<MS_ACT_TXN_DOC_ACCS_RGHTS> GetTxnDocAccsRghts(string txnDocCode)
        {
            var _db = new SibaModel();
            return (from ar in _db.MS_ACT_TXN_DOC_ACCS_RGHTS where ar.TDAR_ATD_CODE == txnDocCode select ar.TDAR_SYS_ID).Select(GetAccsRght);
        }
    }
}