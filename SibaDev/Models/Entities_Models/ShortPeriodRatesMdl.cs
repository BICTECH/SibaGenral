using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SibaDev.Models;

namespace SibaDev.Models
{
    public class ShortPeriodRatesMdl : Model
    {

        public static MS_UDW_SHORT_PERIOD GetShortPeriodRates(string prdCode, int polDays)
        {
            var db = new SibaModel();
            return (from spd in db.MS_UDW_SHORT_PERIOD where spd.SPD_PRD_CODE == prdCode && spd.SPD_NO_OF_DAYS == polDays select spd).ToList()
                .Select(sp => new MS_UDW_SHORT_PERIOD
                {
                    SPD_PRD_CODE =sp.SPD_PRD_CODE,
                    SPD_NO_OF_DAYS = sp.SPD_NO_OF_DAYS,
                    SPD_CVR_CODE = sp.SPD_CVR_CODE,
                    SPD_RATE_PERC = sp.SPD_RATE_PERC,
                    SPD_CODE = sp.SPD_CODE,
                    SPD_FROM_DATE = sp.SPD_FROM_DATE,
                    SPD_TO_DATE = sp.SPD_TO_DATE,
                    SPD_STATUS = sp.SPD_STATUS                    
                }).Single();
        }

    }
}