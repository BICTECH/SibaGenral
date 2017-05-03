namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_RISK_EXCESS")]
    public partial class INS_UDW_RISK_EXCESS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EXS_SYS_ID { get; set; }

        public int? EXS_RISK_SYS_ID { get; set; }

        public int? EXS_CODE { get; set; }

        [StringLength(20)]
        public string EXS_TYPE { get; set; }

        [StringLength(100)]
        public string EXS_NART { get; set; }

        public decimal? EXS_AMOUNT { get; set; }

        public decimal? EXS_MIN_AMOUNT { get; set; }

        public decimal? EXS_MAX_AMOUNT { get; set; }

        public short? EXS_RATE { get; set; }

        [StringLength(30)]
        public string EXS_CRTE_BY { get; set; }

        public DateTime? EXS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string EXS_MOD_BY { get; set; }

        public DateTime? EXS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EXS_STATUS { get; set; }

        public virtual INS_UWD_VEHICLE_RISK INS_UWD_VEHICLE_RISK { get; set; }
    }
}
