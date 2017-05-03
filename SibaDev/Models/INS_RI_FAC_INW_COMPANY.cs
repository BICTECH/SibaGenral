namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_FAC_INW_COMPANY")]
    public partial class INS_RI_FAC_INW_COMPANY : Model 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FINW_PAP_SYS_ID { get; set; }

        [StringLength(15)]
        public string FINW_PAP_CODE { get; set; }

        [StringLength(100)]
        public string FINW_PAP_NAME { get; set; }

        [StringLength(15)]
        public string FINW_PAP_CEDANT_CODE { get; set; }

        public decimal? FINW_PAP_SHARE_PERC { get; set; }

        public decimal? FINW_PAP_SHARE_SI { get; set; }

        public decimal? FINW_PAP_SHARE_PREM { get; set; }

        [StringLength(15)]
        public string FINW_PAP_CRTE_BY { get; set; }

        public DateTime? FINW_PAP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string FINW_PAP_MOD_BY { get; set; }

        public DateTime? FINW_PAP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FINW_PAP_STATUS { get; set; }

        public int? FINW_PAP_FINW_SYS_ID { get; set; }

        public virtual INS_RI_FAC_INWARD INS_RI_FAC_INWARD { get; set; } 
    }
}
