namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_FIRE_LOCINT_EXCESS")]
    public partial class INS_UDW_FIRE_LOCINT_EXCESS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int INT_EXS_SYS_ID { get; set; }

        public int? INT_EXS_LINT_SYS_ID { get; set; }

        public int? INT_EXS_LINT_RISK_NO { get; set; }

        public int? INT_EXS_PLOC_SYS_ID { get; set; }

        public int? INT_EXS_POLH_SYS_ID { get; set; }

        public int? INT_EXS_CODE { get; set; }

        [StringLength(20)]
        public string INT_EXS_TYPE { get; set; }

        [StringLength(100)]
        public string INT_EXS_NART { get; set; }

        public decimal? INT_EXS_AMOUNT { get; set; }

        public decimal? INT_EXS_MIN_AMOUNT { get; set; }

        public decimal? INT_EXS_MAX_AMOUNT { get; set; }

        public short? INT_EXS_RATE { get; set; }

        [StringLength(30)]
        public string INT_EXS_CRTE_BY { get; set; }

        public DateTime? INT_EXS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INT_EXS_MOD_BY { get; set; }

        public DateTime? INT_EXS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INT_EXS_STATUS { get; set; }

        public virtual INS_UWD_FIRE_LOCINT INS_UWD_FIRE_LOCINT { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
