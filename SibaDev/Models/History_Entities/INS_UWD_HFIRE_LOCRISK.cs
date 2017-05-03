namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_HFIRE_LOCRISK")]
    public partial class INS_UWD_HFIRE_LOCRISK:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HPLOC_SYS_ID { get; set; }

        public int? PLOC_SYS_ID { get; set; }

        public int? PLOC_POLH_SYS_ID { get; set; }

        public int? PLOC_POLH_DOC_NO { get; set; }

        public int? PLOC_POLH_END_NO { get; set; }

        [Required]
        [StringLength(15)]
        public string PLOC_AREA_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string PLOC_AREA_NAME { get; set; }

        [StringLength(15)]
        public string PLOC_LOC_CODE { get; set; }

        [StringLength(50)]
        public string PLOC_LOC_NAME { get; set; }

        [StringLength(100)]
        public string PLOC_LOC_DESC { get; set; }

        [StringLength(100)]
        public string PLOC_LOC_ADDRS { get; set; }

        [StringLength(15)]
        public string PLOC_OCCUP_CODE { get; set; }

        [StringLength(50)]
        public string PLOC_OCCUP_NAME { get; set; }

        [StringLength(50)]
        public string PLOC_OCCUP_SECTION { get; set; }

        [StringLength(30)]
        public string PLOC_EQZONE { get; set; }

        [StringLength(5)]
        public string PLOC_RIEML { get; set; }

        public int? PLOC_EML { get; set; }

        public DateTime? PLOC_START_DATE { get; set; }

        public DateTime? PLOC_END_DATE { get; set; }

        [StringLength(10)]
        public string PLOC_CURR_CODE { get; set; }

        public decimal? PLOC_CURR_RATE { get; set; }

        public int? PLOC_UW_YEAR { get; set; }

        [StringLength(1)]
        public string PLOC_POL_CANCELLED { get; set; }

        [StringLength(100)]
        public string PLOC_CANCELLED_REASON { get; set; }

        public decimal? PLOC_SI_FC { get; set; }

        public decimal? PLOC_SI_BC { get; set; }

        public decimal? PLOC_TOT_PREM_FC { get; set; }

        public decimal? PLOC_TOT_PREM_BC { get; set; }

        public decimal? PLOC_RISK_PREM_FC { get; set; }

        public decimal? PLOC_RISK_PREM_BC { get; set; }

        public decimal? PLOC_ADJ_PREM_FC { get; set; }

        public decimal? PLOC_ADJ_PREM_BC { get; set; }

        public decimal? PLOC_DISC_FC { get; set; }

        public decimal? PLOC_DISC_BC { get; set; }

        public decimal? PLOC_LOAD_FC { get; set; }

        public decimal? PLOC_LOAD_BC { get; set; }

        public decimal? PLOC_COMP_FEE_FC { get; set; }

        public decimal? PLOC_COMP_FEE_BC { get; set; }

        public decimal? PLOC_COMMISSION_FC { get; set; }

        public decimal? PLOC_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string PLOC_RI_APPLICABLE { get; set; }

        public DateTime? PLOC_RI_EFF_DATE { get; set; }

        public decimal? PLOC_RI_SI_FC { get; set; }

        public decimal? PLOC_RI_SI_BC { get; set; }

        public decimal? PLOC_RI_PREM_FC { get; set; }

        public decimal? PLOC_RI_PREM_BC { get; set; }

        [StringLength(15)]
        public string PLOC_PDT_CODE { get; set; }

        [StringLength(15)]
        public string PLOC_CVR_CODE { get; set; }

        [StringLength(1)]
        public string PLOC_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string PLOC_END_TYPE { get; set; }

        public DateTime? PLOC_APPROVE_DATE { get; set; }

        public DateTime? PLOC_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string PLOC_CRTE_BY { get; set; }

        public DateTime? PLOC_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PLOC_MOD_BY { get; set; }

        public DateTime? PLOC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PLOC_STATUS { get; set; }

        [StringLength(30)]
        public string PLOC_TXN_STATUS { get; set; }

        [StringLength(30)]
        public string PLOC_RISK_STATE { get; set; }

        public decimal? PLOC_TRISM_SI_FC { get; set; }

        public decimal? PLOC_TRISM_SI_BC { get; set; }

        public decimal? PLOC_TRISM_PREM_FC { get; set; }

        public decimal? PLOC_TRISM_PREM_BC { get; set; }

        public int? PLOC_RISK_NO { get; set; }
    }
}
