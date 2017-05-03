namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_FIRE_LOCINT_DISCLOAD")]
    public partial class INS_UDW_FIRE_LOCINT_DISCLOAD:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int INT_DL_SYS_ID { get; set; }

        public int? INT_DL_CODE { get; set; }

        public short? INT_DL_RATE { get; set; }

        [StringLength(20)]
        public string INT_DL_TYPE { get; set; }

        public int? INT_DL_LINT_SYS_ID { get; set; }

        public int? INT_DL_LINT_RISK_NO { get; set; }

        public int? INT_DL_PLOC_SYS_ID { get; set; }

        public int? INT_DL_POLH_SYS_ID { get; set; }

        public decimal? INT_DL_PREM_BC { get; set; }

        public decimal? INT_DL_PREM_FC { get; set; }

        public decimal? INT_DL_AMT_BC { get; set; }

        public decimal? INT_DL_AMT_FC { get; set; }

        [StringLength(30)]
        public string INT_DL_CRTE_BY { get; set; }

        public DateTime? INT_DL_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INT_DL_MOD_BY { get; set; }

        public DateTime? INT_DL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INT_DL_STATUS { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
