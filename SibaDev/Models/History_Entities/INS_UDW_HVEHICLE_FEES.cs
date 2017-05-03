namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HVEHICLE_FEES")]
    public partial class INS_UDW_HVEHICLE_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long VEH_HFEE_SYS_ID { get; set; }

        public long VEH_FEE_SYS_ID { get; set; }

        public int? VEH_FEE_POL_SYS_ID { get; set; }

        public int? VEH_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string VEH_FEE_CODE { get; set; }

        public decimal? VEH_FEE_FC_AMOUNT { get; set; }

        public decimal? VEH_FEE_BC_AMOUNT { get; set; }

        [StringLength(15)]
        public string VEH_FEE_RK_CODE { get; set; }

        public int? VEH_FEE_RK_SYS_ID { get; set; }

        public long? VEH_FEE_RK_NO { get; set; }

        [StringLength(15)]
        public string VEH_FEE_CRTE_BY { get; set; }

        public DateTime? VEH_FEE_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string VEH_FEE_STATUS { get; set; }
    }
}
