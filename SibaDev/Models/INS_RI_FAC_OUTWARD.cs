namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_FAC_OUTWARD")]
    public partial class INS_RI_FAC_OUTWARD : Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FOTW_SYS_ID { get; set; }

        public int? FOTW_POLH_SYS_ID { get; set; }

        public int? FOTW_POLH_END_NO { get; set; }

        public int? FOTW_RISK_SYS_ID { get; set; }

        public int? FOTW_RISK_END_NO { get; set; }

        public decimal? FOTW_SHARE_PERC { get; set; }

        public decimal? FOTW_MEM_SHARE_PERC { get; set; }

        public decimal? FOTW_SHARE_SI_FC { get; set; }

        public decimal? FOTW_SHARE_SI_BC { get; set; }

        public decimal? FOTW_SHARE_PREM_FC { get; set; }

        public decimal? FOTW_SHARE_PREM_BC { get; set; }

        public decimal? FOTW_MEM_SI_FC { get; set; }

        public decimal? FOTW_MEM_SI_BC { get; set; }

        public decimal? FOTW_MEM_PREM_FC { get; set; }

        public decimal? FOTW_MEM_PREM_BC { get; set; }

        [StringLength(15)]
        public string FOTW_RI_MEM_CODE { get; set; }

        [StringLength(100)]
        public string FOTW_RI_MEM_NAME { get; set; }

        public decimal? FOTW_RI_PERC { get; set; }

        public decimal? FOTW_RI_COMM { get; set; }

        public decimal? FOTW_RI_SHARE_SI { get; set; }

        public decimal? FOTW_RI_SHARE_PREM { get; set; }

        public decimal? FOTW_RI_SHARE_COMM { get; set; }

        [StringLength(15)]
        public string FOTW_CRTE_BY { get; set; }

        public DateTime? FOTW_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string FOTW_MOD_BY { get; set; }

        public DateTime? FOTW_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FOTW_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
