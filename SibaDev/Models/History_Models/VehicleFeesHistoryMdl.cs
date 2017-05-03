using SibaDev.Models.History_Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SibaDev.Models.History_Models
{
    public class VehicleFeesHistoryMdl
    {

        public static IEnumerable<INS_UDW_VEHICLE_FEES> GetHvehicleFees(int riskId, int? endNo)
        {
            var db = new SibaModel();
            return
                    (from f in db.INS_UDW_HVEHICLE_FEES where f.VEH_FEE_RK_SYS_ID == riskId && f.VEH_FEE_END_NO == endNo select f).ToList()
                        .Select(f => new INS_UDW_VEHICLE_FEES
                        {
                            VEH_FEE_RK_SYS_ID = f.VEH_FEE_RK_SYS_ID,
                            VEH_FEE_BC_AMOUNT = f.VEH_FEE_BC_AMOUNT,
                            VEH_FEE_CODE = f.VEH_FEE_CODE,
                            VEH_FEE_CRTE_BY = f.VEH_FEE_CRTE_BY,
                            VEH_FEE_CRTE_DATE = f.VEH_FEE_CRTE_DATE,
                            VEH_FEE_END_NO = f.VEH_FEE_END_NO,
                            VEH_FEE_FC_AMOUNT = f.VEH_FEE_FC_AMOUNT,
                            VEH_FEE_POL_SYS_ID = f.VEH_FEE_POL_SYS_ID,
                            VEH_FEE_RK_CODE = f.VEH_FEE_RK_CODE,
                            VEH_FEE_RK_NO = f.VEH_FEE_RK_NO,
                            VEH_FEE_STATUS = f.VEH_FEE_STATUS,
                            VEH_FEE_SYS_ID = f.VEH_FEE_SYS_ID
                        });
            
        }

        public static bool SaveVehicleFees(INS_UDW_VEHICLE_FEES fee)
        {
            var db = new SibaModel();
            using (db)
            {
                var vehicleFee = new INS_UDW_HVEHICLE_FEES();
                vehicleFee.Map(fee);
                db.INS_UDW_HVEHICLE_FEES.Add(vehicleFee);
                db.SaveChanges();
                return true;
            }
        }
    }
}