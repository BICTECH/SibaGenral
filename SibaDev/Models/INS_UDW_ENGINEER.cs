namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_ENGINEER")]
    public partial class INS_UDW_ENGINEER:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_ENGINEER()
        {
            INS_UDW_CAR_LOSS_OF_PROFIT = new HashSet<INS_UDW_CAR_LOSS_OF_PROFIT>();
            INS_UDW_CAR_THIRD_PARTY_LOSS = new HashSet<INS_UDW_CAR_THIRD_PARTY_LOSS>();
            INS_UDW_CARCON_INTEREST = new HashSet<INS_UDW_CARCON_INTEREST>();
            INS_UDW_EAR_INTEREST = new HashSet<INS_UDW_EAR_INTEREST>();
            INS_UDW_EAR_PERIOD_DATES = new HashSet<INS_UDW_EAR_PERIOD_DATES>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ENG_SYS_ID { get; set; }

        public DateTime? ENG_START_DATE { get; set; }

        public DateTime? ENG_END_DATE { get; set; }

        public DateTime? ENG_MAIN_STDATE { get; set; }

        public DateTime? ENG_MAIN_ENDDATE { get; set; }

        public int? ENG_MAIN_DAYS { get; set; }

        [StringLength(15)]
        public string ENG_CURRENCY { get; set; }

        public decimal? ENG_CURRENCY_RATE { get; set; }

        [StringLength(15)]
        public string ENG_REGION_CODE { get; set; }

        [StringLength(30)]
        public string ENG_REGION_NAME { get; set; }

        [StringLength(15)]
        public string ENG_AREA_CODE { get; set; }

        [StringLength(30)]
        public string ENG_AREA_NAME { get; set; }

        [StringLength(15)]
        public string ENG_LOC_CODE { get; set; }

        [StringLength(30)]
        public string ENG_LOC_NAME { get; set; }

        [StringLength(100)]
        public string ENG_LOC_DESC { get; set; }

        [StringLength(50)]
        public string ENG_LOC_ADDRS { get; set; }

        [StringLength(15)]
        public string ENG_OCCUP_CODE { get; set; }

        [StringLength(30)]
        public string ENG_OCCUP_NAME { get; set; }

        [StringLength(50)]
        public string ENG_OCCUP_SECTION { get; set; }

        [StringLength(15)]
        public string ENG_EARTHQ_ZONE { get; set; }

        [StringLength(15)]
        public string ENG_RIEML { get; set; }

        [StringLength(15)]
        public string ENG_EML { get; set; }

        [StringLength(30)]
        public string ENG_TYPE { get; set; }

        public decimal? ENG_TOT_PREM_FC { get; set; }

        public decimal? ENG_TOT_PREM_BC { get; set; }

        public decimal? ENG_SI_FC { get; set; }

        public decimal? ENG_SI_BC { get; set; }

        public decimal? ENG_RISK_PREM_FC { get; set; }

        public decimal? ENG_RISK_PREM_BC { get; set; }

        public decimal? ENG_ADJ_PREM_FC { get; set; }

        public decimal? ENG_ADJ_PREM_BC { get; set; }

        public decimal? ENG_DISC_FC { get; set; }

        public decimal? ENG_DISC_BC { get; set; }

        public decimal? ENG_LOAD_FC { get; set; }

        public decimal? ENG_LOAD_BC { get; set; }

        public decimal? ENG_COMP_FEE_FC { get; set; }

        public decimal? ENG_COMP_FEE_BC { get; set; }

        public decimal? ENG_COMMISSION_FC { get; set; }

        public decimal? ENG_COMMISSION_BC { get; set; }

        [StringLength(15)]
        public string ENG_TXN_STATUS { get; set; }

        [StringLength(15)]
        public string ENG_RISK_STATE { get; set; }

        public decimal? ENG_RI_SI_FC { get; set; }

        public decimal? ENG_RI_SI_BC { get; set; }

        public decimal? ENG_RI_PREM_FC { get; set; }

        public decimal? ENG_RI_PREM_BC { get; set; }

        [StringLength(15)]
        public string ENG_RISK_NO { get; set; }

        public int? ENG_RISK_ID { get; set; }

        public int? ENG_POLH_SYS_ID { get; set; }

        [StringLength(15)]
        public string ENG_POLH_DOC_NO { get; set; }

        [StringLength(15)]
        public string ENG_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string ENG_PDT_CODE { get; set; }

        [StringLength(1)]
        public string ENG_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string ENG_END_TYPE { get; set; }

        public DateTime? ENG_APPROVE_DATE { get; set; }

        public DateTime? ENG_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string ENG_CRTE_BY { get; set; }

        public DateTime? ENG_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string ENG_MOD_BY { get; set; }

        public DateTime? ENG_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ENG_STATUS { get; set; }

        public short? ENG_UW_YEAR { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_CAR_LOSS_OF_PROFIT> INS_UDW_CAR_LOSS_OF_PROFIT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_CAR_THIRD_PARTY_LOSS> INS_UDW_CAR_THIRD_PARTY_LOSS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_CARCON_INTEREST> INS_UDW_CARCON_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_EAR_INTEREST> INS_UDW_EAR_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_EAR_PERIOD_DATES> INS_UDW_EAR_PERIOD_DATES { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
