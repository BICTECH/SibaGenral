namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_TRAVEL_FEES")]
    public partial class INS_UDW_TRAVEL_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TRA_FEE_SYS_ID { get; set; }

        public int? TRA_FEE_POL_SYS_ID { get; set; }

        public int? TRA_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string TRA_FEE_CODE { get; set; }

        public decimal? TRA_FEE_FC_AMOUNT { get; set; }

        public decimal? TRA_FEE_BC_AMOUNT { get; set; }

        public int? TRA_FEE_RK_SYS_ID { get; set; }

        [StringLength(15)]
        public string TRA_FEE_RK_CODE { get; set; }

        public int? TRA_FEE_RK_NO { get; set; }

        [StringLength(15)]
        public string TRA_FEE_CRTE_BY { get; set; }

        public DateTime? TRA_FEE_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string TRA_FEE_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
