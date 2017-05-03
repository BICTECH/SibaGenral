namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_FIRE_LOCINT_COVER")]
    public partial class INS_UDW_FIRE_LOCINT_COVER:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int INT_CVR_SYS_ID { get; set; }

        public int? INT_CVR_CODE { get; set; }

        [StringLength(20)]
        public string INT_CVR_TYPE { get; set; }

        public short? INT_CVR_RATE { get; set; }

        public int? INT_CVR_LINT_SYS_ID { get; set; }

        public int? INT_CVR_LINT_RISK_NO { get; set; }

        public int? INT_CVR_PLOC_SYS_ID { get; set; }

        public int? INT_CVR_POLH_SYS_ID { get; set; }

        public decimal? INT_CVR_SI_FC { get; set; }

        public decimal? INT_CVR_SI_BC { get; set; }

        public decimal? INT_CVR_GROSS_PREM_FC { get; set; }

        public decimal? INT_CVR_GROSS_PREM_BC { get; set; }

        public decimal? INT_CVR_NET_PREM_FC { get; set; }

        public decimal? INT_CVR_NET_PREM_BC { get; set; }

        [StringLength(30)]
        public string INT_CVR_CRTE_BY { get; set; }

        public DateTime? INT_CVR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INT_CVR_MOD_BY { get; set; }

        public DateTime? INT_CVR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INT_CVR_STATUS { get; set; }

        public virtual INS_UWD_FIRE_LOCINT INS_UWD_FIRE_LOCINT { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
