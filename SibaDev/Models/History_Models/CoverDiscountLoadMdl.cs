using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using SibaDev.Models.History_Entities;

namespace SibaDev.Models.History_Models
{
    public class CoverDiscountLoadMdl:Model
    {

        public static IEnumerable<INS_UDW_COVER_DISCLOAD> GetHcoverDiscload(int? coverId, int? endNo)
        {
            var db = new SibaModel();
            return (from hd in db.INS_UDW_HCOVER_DISCLOAD where hd.DL_RCOV_SYS_ID == coverId && hd.DL_END_NO == endNo select hd).ToList()
                        .Select(d => new INS_UDW_COVER_DISCLOAD
                        {
                            DL_RCOV_SYS_ID = d.DL_RCOV_SYS_ID,
                            DL_AMT_BC = d.DL_AMT_BC,
                            DL_AMT_FC = d.DL_AMT_FC,
                            DL_CODE = d.DL_CODE,
                            DL_CRTE_BY = d.DL_CRTE_BY,
                            DL_CRTE_DATE = d.DL_CRTE_DATE,
                            DL_MOD_BY = d.DL_MOD_BY,
                            DL_MOD_DATE = d.DL_MOD_DATE,
                            DL_PREM_BC = d.DL_PREM_BC,
                            DL_PREM_FC = d.DL_PREM_FC,
                            DL_RATE = d.DL_RATE,
                            DL_STATUS = d.DL_STATUS,
                            DL_SYS_ID = (int)d.DL_SYS_ID,
                            DL_TYPE = d.DL_TYPE,
                            
                        });
            
        }

        public static bool SaveHistoryDiscLoad(INS_UDW_COVER_DISCLOAD disc)
        {
            var db = new SibaModel();
            using (db)
            {
                var hisDiscLoad = new INS_UDW_HCOVER_DISCLOAD();
                hisDiscLoad.Map(disc);
                db.INS_UDW_HCOVER_DISCLOAD.Add(hisDiscLoad);
                db.SaveChanges();
                return true;
            }
        }
    }
}