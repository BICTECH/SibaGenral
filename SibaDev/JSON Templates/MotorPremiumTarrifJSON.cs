using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.JSON_Templates
{
    public class MotorPremiumTarrifJSON
    {
        public string RSK_CODE { get; set; }
        public int RISK_SYS_ID { get; set; }
        public int POL_DAYS { get; set; }
        public decimal CUR_RATE { get; set; }
        public string PREM_BASIS { get; set; }
        public string MANF_YEAR { get; set; }
        public decimal BBE_PERC { get; set; }
        public decimal TTPD_AMNT { get; set; }
        public int SEAT_NO { get; set; }
        public string PRD_CODE { get; set; }
        public string PRD_CV_DFT { get; set; }
        
    }
}

