namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_FIRE_LOCRISK_EXCESS")]
    public partial class INS_UDW_FIRE_LOCRISK_EXCESS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LOC_EXS_SYS_ID { get; set; }

        public int? LOC_EXS_PLOC_SYS_ID { get; set; }

        public int? LOC_EXS_POLH_SYS_ID { get; set; }

        public int? LOC_EXS_PLOC_RISK_NO { get; set; }

        public int? LOC_EXS_CODE { get; set; }

        [StringLength(20)]
        public string LOC_EXS_TYPE { get; set; }

        [StringLength(100)]
        public string LOC_EXS_NART { get; set; }

        public decimal? LOC_EXS_AMOUNT { get; set; }

        public decimal? LOC_EXS_MIN_AMOUNT { get; set; }

        public decimal? LOC_EXS_MAX_AMOUNT { get; set; }

        public short? LOC_EXS_RATE { get; set; }

        [StringLength(30)]
        public string LOC_EXS_CRTE_BY { get; set; }

        public DateTime? LOC_EXS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string LOC_EXS_MOD_BY { get; set; }

        public DateTime? LOC_EXS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LOC_EXS_STATUS { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
