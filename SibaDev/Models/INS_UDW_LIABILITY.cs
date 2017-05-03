namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_LIABILITY")]
    public partial class INS_UDW_LIABILITY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LIA_SYS_ID { get; set; }

        public DateTime? LIA_START_DATE { get; set; }

        public DateTime? LIA_END_DATE { get; set; }

        [StringLength(20)]
        public string LIA_CURRENCY { get; set; }

        public decimal? LIA_CURRENCY_RATE { get; set; }

        [Required]
        [StringLength(15)]
        public string LIA_REGION_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string LIA_REGION_NAME { get; set; }

        [StringLength(15)]
        public string LIA_AREA_CODE { get; set; }

        [StringLength(40)]
        public string LIA_AREA_NAME { get; set; }

        [StringLength(15)]
        public string LIA_LOC_CODE { get; set; }

        [StringLength(40)]
        public string LIA_LOC_NAME { get; set; }

        [StringLength(100)]
        public string LIA_LOC_DESC { get; set; }

        [StringLength(15)]
        public string LIA_LOC_ADDRS { get; set; }

        [StringLength(20)]
        public string LIA_EARTHQ_ZONE { get; set; }

        [StringLength(15)]
        public string LIA_TYPE { get; set; }

        [StringLength(40)]
        public string LIA_ITEM { get; set; }

        [StringLength(100)]
        public string LIA_ITEM_DESC { get; set; }

        public decimal? LIA_AGGRET_LIMIT { get; set; }

        public decimal? LIA_LIMIT_OCCUR { get; set; }

        public decimal? LIA_PREM_FC { get; set; }

        [StringLength(40)]
        public string LIA_OBJECT { get; set; }

        [StringLength(100)]
        public string LIA_OBJECT_NAME { get; set; }

        [StringLength(40)]
        public string LIA_BRANCH_ADDRS { get; set; }

        [StringLength(1)]
        public string LIA_FLOATER { get; set; }

        public decimal? LIA_SALARY_SLAB { get; set; }

        [StringLength(40)]
        public string LIA_GEO_LIMIT { get; set; }

        public int? LIA_NO_PERSONS { get; set; }

        public int? LIA_NO_YEARS { get; set; }

        public decimal? LIA_SALARY_MONTH { get; set; }

        public decimal? LIA_MONTHLY_BENEFITS { get; set; }

        [StringLength(40)]
        public string LIA_LABOUR_TYPE { get; set; }

        public decimal? LIA_ANNUAL_EST_SAL { get; set; }

        public decimal? LIA_WKM_PREMIUM { get; set; }

        public decimal? LIA_TOT_PREM_FC { get; set; }

        public decimal? LIA_TOT_PREM_BC { get; set; }

        public decimal? LIA_SI_FC { get; set; }

        public decimal? LIA_SI_BC { get; set; }

        public decimal? LIA_RISK_PREM_FC { get; set; }

        public decimal? LIA_RISK_PREM_BC { get; set; }

        public decimal? LIA_ADJ_PREM_FC { get; set; }

        public decimal? LIA_ADJ_PREM_BC { get; set; }

        public decimal? LIA_DISC_FC { get; set; }

        public decimal? LIA_DISC_BC { get; set; }

        public decimal? LIA_LOAD_FC { get; set; }

        public decimal? LIA_LOAD_BC { get; set; }

        public decimal? LIA_COMP_FEE_FC { get; set; }

        public decimal? LIA_COMP_FEE_BC { get; set; }

        public decimal? LIA_COMMISSION_FC { get; set; }

        public decimal? LIA_COMMISSION_BC { get; set; }

        public decimal? LIA_RI_SI_FC { get; set; }

        public decimal? LIA_RI_SI_BC { get; set; }

        public decimal? LIA_RI_PREM_FC { get; set; }

        public decimal? LIA_RI_PREM_BC { get; set; }

        public int? LIA_RISK_NO { get; set; }

        public int? LIA_RISK_ID { get; set; }

        public int? LIA_POLH_SYS_ID { get; set; }

        public int? LIA_POLH_DOC_NO { get; set; }

        public int? LIA_POLH_END_NO { get; set; }

        [Required]
        [StringLength(20)]
        public string LIA_PDT_CODE { get; set; }

        [Required]
        [StringLength(20)]
        public string LIA_CVR_CODE { get; set; }

        public int? LIA_UW_YEAR { get; set; }

        [StringLength(15)]
        public string LIA_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string LIA_TXN_STATUS { get; set; }

        [StringLength(15)]
        public string LIA_RISK_STATE { get; set; }

        [StringLength(15)]
        public string LIA_END_TYPE { get; set; }

        public DateTime? LIA_APPROVE_DATE { get; set; }

        public DateTime? LIA_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string LIA_CRTE_BY { get; set; }

        public DateTime? LIA_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string LIA_MOD_BY { get; set; }

        public DateTime? LIA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LIA_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
