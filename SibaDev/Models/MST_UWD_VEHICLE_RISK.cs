namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MST_UWD_VEHICLE_RISK")]
    public partial class MST_UWD_VEHICLE_RISK:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VEH_SYS_ID { get; set; }

        public int VEH_POLH_SYS_ID { get; set; }

        [Required]
        [StringLength(40)]
        public string VEH_POLH_DOC_NO { get; set; }

        [StringLength(40)]
        public string VEH_POLH_END_NO { get; set; }

        [Required]
        [StringLength(20)]
        public string VEH_RISK_NO { get; set; }

        public DateTime? VEH_ISSUE_DATE { get; set; }

        public DateTime? VEH_RETROS_DATE { get; set; }

        public DateTime? VEH_START_DATE { get; set; }

        public DateTime? VEH_END_DATE { get; set; }

        public int? VEH_PERIOD_DAYS { get; set; }

        public int? VEH_UW_YEAR { get; set; }

        public decimal? VEH_CURRENCY { get; set; }

        public decimal? VEH_CURR_RATE { get; set; }

        [StringLength(15)]
        public string VEH_PRODUCT_CODE { get; set; }

        [StringLength(15)]
        public string VEH_COVER_CODE { get; set; }

        [StringLength(15)]
        public string VEH_USAGE_CODE { get; set; }

        [StringLength(15)]
        public string VEH_VEH_REG_NO { get; set; }

        [StringLength(15)]
        public string VEH_MAKE { get; set; }

        [StringLength(15)]
        public string VEH_MODEL { get; set; }

        [StringLength(15)]
        public string VEH_BODY_TYPE { get; set; }

        [StringLength(30)]
        public string VEH_MANUFACTURE_YR { get; set; }

        [StringLength(15)]
        public string VEH_CHASSIS_NO { get; set; }

        public int? VEH_CUBIC_CAP { get; set; }

        public int? VEH_PASSENGERS { get; set; }

        public decimal? VEH_EXCESS_APP { get; set; }

        public decimal? VEH_EXCESS_PERC { get; set; }

        public decimal? VEH_EXCESS_MIN { get; set; }

        public decimal? VEH_EXCESS_MAX { get; set; }

        public decimal? VEH_EXCESS_FIX { get; set; }

        public decimal? VEH_EXTRA_TPPD { get; set; }

        public decimal? VEH_TP_INTEREST { get; set; }

        [StringLength(1)]
        public string VEH_TP_DETAILS { get; set; }

        [StringLength(100)]
        public string VEH_PROP_DECLINED { get; set; }

        [StringLength(1)]
        public string VEH_DECLINED_REASON { get; set; }

        [StringLength(100)]
        public string VEH_POL_CANCELLED { get; set; }

        [StringLength(100)]
        public string VEH_CANCELLED_REASON { get; set; }

        public decimal? VEH_SI_FC { get; set; }

        public decimal? VEH_SI_BC { get; set; }

        public decimal? VEH_TOT_PREM_FC { get; set; }

        public decimal? VEH_TOT_PREM_BC { get; set; }

        public decimal? VEH_RI_APPLICABLE { get; set; }

        public DateTime? VEH_RI_EFF_DATE { get; set; }

        public decimal? VEH_RI_SI_FC { get; set; }

        public decimal? VEH_RI_SI_BC { get; set; }

        public decimal? VEH_RI_PREM_FC { get; set; }

        public decimal? VEH_RI_PREM_BC { get; set; }

        public decimal? VEH_RISK_PREM_FC { get; set; }

        public decimal? VEH_RISK_PREM_BC { get; set; }

        public decimal? VEH_TP_PREM_BC { get; set; }

        public decimal? VEH_ADJ_PREM_FC { get; set; }

        public decimal? VEH_ADJ_PREM_BC { get; set; }

        public decimal? VEH_DISC_FC { get; set; }

        public decimal? VEH_DISC_BC { get; set; }

        public decimal? VEH_LOAD_FC { get; set; }

        public decimal? VEH_LOAD_BC { get; set; }

        public decimal? VEH_COMP_FEE_FC { get; set; }

        public decimal? VEH_COMP_FEE_BC { get; set; }

        public decimal? VEH_COMMISSION_FC { get; set; }

        public decimal? VEH_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string VEH_TXN_STATUS { get; set; }

        [StringLength(40)]
        public string VEH_RISK_STATE { get; set; }

        [StringLength(1)]
        public string VEH_RENEWAL_STATUS { get; set; }

        [StringLength(40)]
        public string VEH_END_TYPE { get; set; }

        public DateTime? VEH_APPROVE_DATE { get; set; }

        public DateTime? VEH_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string VEH_CRTE_BY { get; set; }

        public DateTime? VEH_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string VEH_MOD_BY { get; set; }

        public DateTime? VEH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string VEH_STATUS { get; set; }
    }
}
