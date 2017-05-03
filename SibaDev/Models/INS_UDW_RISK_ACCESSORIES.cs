namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_RISK_ACCESSORIES")]
    public partial class INS_UDW_RISK_ACCESSORIES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ACC_SYS_ID { get; set; }

        public int? ACC_CODE { get; set; }

        public int? ACC_RISK_SYS_ID { get; set; }

        [StringLength(20)]
        public string ACC_NAME { get; set; }

        public decimal? ACC_VALUE { get; set; }

        public short? ACC_RATE { get; set; }

        public decimal? ACC_PREM_BC { get; set; }

        public decimal? ACC_PREM_FC { get; set; }

        [StringLength(30)]
        public string ACC_CRTE_BY { get; set; }

        public DateTime? ACC_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ACC_MOD_BY { get; set; }

        public DateTime? ACC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACC_STATUS { get; set; }

        public virtual INS_UWD_VEHICLE_RISK INS_UWD_VEHICLE_RISK { get; set; }
    }
}
