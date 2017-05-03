namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_FAC_INWARD")]
    public partial class INS_RI_FAC_INWARD : Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_RI_FAC_INWARD()
        {
            INS_RI_FAC_INW_COMPANY = new HashSet<INS_RI_FAC_INW_COMPANY>();
        } 
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FINW_SYS_ID { get; set; }

        public int? FINW_POLH_SYS_ID { get; set; }

        public int? FINW_POLH_END_NO { get; set; }

        public int? FINW_RISK_SYS_ID { get; set; }

        public int? FINW_RISK_END_NO { get; set; }

        [StringLength(15)]
        public string FINW_CEDANT_CODE { get; set; }

        [StringLength(100)]
        public string FINW_CEDANT_NAME { get; set; }

        [StringLength(50)]
        public string FINW_REF_NO { get; set; }

        [StringLength(50)]
        public string FINW_ACCPT_NO { get; set; }

        [StringLength(500)]
        public string FINW_COMMENT { get; set; }

        public decimal? FINW_SHARE_PERC { get; set; }

        public decimal? FINW_COMM_PERC { get; set; }

        public decimal? FINW_SI_FC { get; set; }

        public decimal? FINW_SI_BC { get; set; }

        public decimal? FINW_PREM_FC { get; set; }

        public decimal? FINW_PREM_BC { get; set; }

        public decimal? FINW_ORIG_SI_FC { get; set; }

        public decimal? FINW_ORIG_SI_BC { get; set; }

        public decimal? FINW_ORIG_PREM_FC { get; set; }

        public decimal? FINW_ORIG_PREM_BC { get; set; }

        public decimal? FINW_COMM_FC { get; set; }

        public decimal? FINW_COMM_BC { get; set; }

        [StringLength(15)]
        public string FINW_CRTE_BY { get; set; }

        public DateTime? FINW_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string FINW_MOD_BY { get; set; }

        public DateTime? FINW_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FINW_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_RI_FAC_INW_COMPANY> INS_RI_FAC_INW_COMPANY { get; set; } 

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
