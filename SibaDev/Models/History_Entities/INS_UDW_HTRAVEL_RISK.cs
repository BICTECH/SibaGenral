namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_HTRAVEL_RISK")]
    public partial class INS_UDW_HTRAVEL_RISK:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HTRA_SYS_ID { get; set; }

        public int? TRA_SYS_ID { get; set; }

        public int? TRA_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string TRA_POLH_DOC_NO { get; set; }

        [StringLength(30)]
        public string TRA_POLH_END_NO { get; set; }

        [Required]
        [StringLength(30)]
        public string TRA_FULL_NAME { get; set; }

        public DateTime? TRA_DOB { get; set; }

        public int? TRA_AGE { get; set; }

        [StringLength(1)]
        public string TRA_GENDER { get; set; }

        [StringLength(30)]
        public string TRA_OCCUPATION { get; set; }

        [StringLength(30)]
        public string TRA_NATIONALITY { get; set; }

        [StringLength(20)]
        public string TRA_NATIONAL_ID { get; set; }

        [StringLength(20)]
        public string TRA_PASSPORT_NO { get; set; }

        [StringLength(20)]
        public string TRA_ISSUING_CTY { get; set; }

        public DateTime? TRA_EXPIRY_DATE { get; set; }

        [StringLength(30)]
        public string TRA_COUNTRY_VISIT { get; set; }

        [StringLength(30)]
        public string TRA_DESTIN_ADDRESS { get; set; }

        [StringLength(30)]
        public string TRA_DESTIN_PHONE { get; set; }

        [StringLength(30)]
        public string TRA_BENFI_NAME { get; set; }

        [StringLength(20)]
        public string TRA_RELATIONSHIP { get; set; }

        [StringLength(30)]
        public string TRA_CONTACT { get; set; }

        [StringLength(30)]
        public string TRA_DECLARATION { get; set; }

        [StringLength(100)]
        public string TRA_DECLARATION_DTS { get; set; }

        [StringLength(30)]
        public string TRA_RISK_PREM_FC { get; set; }

        [StringLength(30)]
        public string TRA_RISK_PREM_BC { get; set; }

        [StringLength(30)]
        public string TRA_ADJ_PREM_FC { get; set; }

        [StringLength(30)]
        public string TRA_ADJ_PREM_BC { get; set; }

        [StringLength(30)]
        public string TRA_DISC_FC { get; set; }

        [StringLength(30)]
        public string TRA_DISC_BC { get; set; }

        [StringLength(30)]
        public string TRA_LOAD_FC { get; set; }

        [StringLength(30)]
        public string TRA_LOAD_BC { get; set; }

        [StringLength(30)]
        public string TRA_COMP_FEE_FC { get; set; }

        [StringLength(30)]
        public string TRA_COMP_FEE_BC { get; set; }

        [StringLength(30)]
        public string TRA_COMMISSION_FC { get; set; }

        [StringLength(30)]
        public string TRA_COMMISSION_BC { get; set; }

        [StringLength(30)]
        public string TRA_TXN_STATUS { get; set; }

        [StringLength(30)]
        public string TRA_RISK_STATE { get; set; }

        [StringLength(30)]
        public string TRA_RISK_NO { get; set; }

        [Required]
        [StringLength(15)]
        public string TRA_PDT_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string TRA_CVR_CODE { get; set; }

        [StringLength(1)]
        public string TRA_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string TRA_END_TYPE { get; set; }

        public DateTime? TRA_APPROVE_DATE { get; set; }

        public DateTime? TRA_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string TRA_CRTE_BY { get; set; }

        public DateTime? TRA_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string TRA_MOD_BY { get; set; }

        public DateTime? TRA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TRA_STATUS { get; set; }

        public decimal? TRA_SI_FC { get; set; }

        public decimal? TRA_SI_BC { get; set; }

        public decimal? TRA_TOT_PREM_FC { get; set; }

        public decimal? TRA_TOT_PREM_BC { get; set; }

        [StringLength(2)]
        public string TRA_POL_CANCELLED { get; set; }

        [StringLength(100)]
        public string TRA_CANCELLED_REASON { get; set; }

        public int? TRA_TRAH_SYS_ID { get; set; }
    }
}
