using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models
{
    public class clsMotorTariffCoverPremium
    {
        public long RCOV_SYS_ID { get; set; }

        public long? RCOV_RISK_SYS_ID { get; set; }

        public long? RCOV_RISK_NO { get; set; }

        public long? RCOV_POLH_DOC_NO { get; set; }

        public long? RPCOV_END_NO { get; set; }

       
        public string RCOV_CODE { get; set; }

        public string RCOV_NAME { get; set; }
        
        public long? RCOV_SI_FC { get; set; }

        public long? RCOV_SI_BC { get; set; }

        public long? RCOV_RATE { get; set; }

        public long? RCOV_GROSS_PREM_FC { get; set; }

        public long? RCOV_GROSS_PREM_BC { get; set; }

        public long? RCOV_NET_PREM_FC { get; set; }

        public long? RCOV_NET_PREM_BC { get; set; }

    
        public string RCOV_RI_SI_YN { get; set; }

     
        public string RCOV_RI_PREM_YN { get; set; }

 
        public string RCOV_TYPE { get; set; }

        public string RCOV_DISC_YN { get; set; }

        public long? RCOV_DISC_FC { get; set; }

        public long? RCOV_DISC_BC { get; set; }

        public string RCOV_LOAD_YN { get; set; }

        public long? RCOV_LOAD_FC { get; set; }

        public long? RCOV_LOAD_BC { get; set; }

      
        public string RCOV_TXN_STATE { get; set; }

     
        public string RCOV_CRTE_BY { get; set; }

        public DateTime? RCOV_CRTE_DATE { get; set; }

       
        public string RCOV_MOD_BY { get; set; }

        public DateTime? RCOV_MOD_DATE { get; set; }


        public string RCOV_STATUS { get; set; }
        //
        public string COVER_RATE_CHANGE { get; set; }
        public string COVER_SI_CHANGE { get; set; }
        public string COVER_LEVEL { get; set; }
        public string COVER_PREM_REFUND { get; set; }
        public string RCOV_RI_YN { get; set; }
        public string COVER_USER_PREM { get; set; }
        public string COVER_TYPE { get; set; }
            
    }
}