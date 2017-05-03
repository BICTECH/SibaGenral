namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_GENERAL_ACCIDENT")]
    public partial class INS_UDW_GENERAL_ACCIDENT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_GENERAL_ACCIDENT()
        {
            INS_GA_ASSET_ALL_RISK = new HashSet<INS_GA_ASSET_ALL_RISK>();
            INS_GA_ASSET_TRANSIT = new HashSet<INS_GA_ASSET_TRANSIT>();
            INS_GA_PROF_INDEMNITY = new HashSet<INS_GA_PROF_INDEMNITY>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GA_SYS_ID { get; set; }

        public DateTime? GA_START_DATE { get; set; }

        public DateTime? GA_END_DATE { get; set; }

        [StringLength(20)]
        public string GA_CURRENCY { get; set; }

        public decimal? GA_CURRENCY_RATE { get; set; }

        [StringLength(15)]
        public string GA_REGION_CODE { get; set; }

        [StringLength(50)]
        public string GA_REGION_NAME { get; set; }

        [StringLength(15)]
        public string GA_AREA_CODE { get; set; }

        [StringLength(50)]
        public string GA_AREA_NAME { get; set; }

        [StringLength(15)]
        public string GA_LOC_CODE { get; set; }

        [StringLength(50)]
        public string GA_LOC_NAME { get; set; }

        [StringLength(100)]
        public string GA_LOC_DESC { get; set; }

        [StringLength(50)]
        public string GA_LOC_ADDRS { get; set; }

        [StringLength(15)]
        public string GA_EARTHQ_ZONE { get; set; }

        public int? GA_FIRST_LOSS { get; set; }

        public decimal? GA_TOT_PREM_FC { get; set; }

        public decimal? GA_TOT_PREM_BC { get; set; }

        public decimal? GA_SI_FC { get; set; }

        public decimal? GA_SI_BC { get; set; }

        public decimal? GA_RISK_PREM_FC { get; set; }

        public decimal? GA_RISK_PREM_BC { get; set; }

        public decimal? GA_ADJ_PREM_FC { get; set; }

        public decimal? GA_ADJ_PREM_BC { get; set; }

        public decimal? GA_DISC_FC { get; set; }

        public decimal? GA_DISC_BC { get; set; }

        public decimal? GA_LOAD_FC { get; set; }

        public decimal? GA_LOAD_BC { get; set; }

        public decimal? GA_COMP_FEE_FC { get; set; }

        public decimal? GA_COMP_FEE_BC { get; set; }

        public decimal? GA_COMMISSION_FC { get; set; }

        public decimal? GA_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string GA_TXN_STATUS { get; set; }

        [StringLength(50)]
        public string GA_RISK_STATE { get; set; }

        public int? GA_RISK_NO { get; set; }

        [StringLength(15)]
        public string GA_RISK_ID { get; set; }

        public int? GA_POLH_SYS_ID { get; set; }

        public int? GA_POLH_DOC_NO { get; set; }

        public int? GA_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string GA_PDT_CODE { get; set; }

        [StringLength(20)]
        public string GA_CVR_CODE { get; set; }

        [StringLength(1)]
        public string GA_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string GA_END_TYPE { get; set; }

        public DateTime? GA_APPROVE_DATE { get; set; }

        public DateTime? GA_ACCT_DATE { get; set; }

        [StringLength(50)]
        public string GA_CRTE_BY { get; set; }

        public DateTime? GA_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string GA_MOD_BY { get; set; }

        public DateTime? GA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string GA_STATUS { get; set; }

        public decimal? GA_RI_SI_FC { get; set; }

        public decimal? GA_RI_SI_BC { get; set; }

        public decimal? GA_RI_PREM_FC { get; set; }

        public decimal? GA_RI_PREM_BC { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_ASSET_ALL_RISK> INS_GA_ASSET_ALL_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_ASSET_TRANSIT> INS_GA_ASSET_TRANSIT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_PROF_INDEMNITY> INS_GA_PROF_INDEMNITY { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
