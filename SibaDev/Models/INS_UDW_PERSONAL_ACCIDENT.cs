namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PERSONAL_ACCIDENT")]
    public partial class INS_UDW_PERSONAL_ACCIDENT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PA_SYS_ID { get; set; }

        [StringLength(20)]
        public string PA_CURRENCY { get; set; }

        public decimal? PA_CURRENCY_RATE { get; set; }

        public DateTime? PA_START_DATE { get; set; }

        public DateTime? PA_END_DATE { get; set; }

        public DateTime? PA_ISSUE_DATE { get; set; }

        public DateTime? PA_RETRO_DATE { get; set; }

        public int? PA_DAYS { get; set; }

        [StringLength(50)]
        public string PA_RISK_TYPE { get; set; }

        [StringLength(15)]
        public string PA_RISK_CLASSCODE { get; set; }

        [StringLength(50)]
        public string PA_RISK_CLASSNAME { get; set; }

        [StringLength(50)]
        public string PA_NAME_INSURED { get; set; }

        [StringLength(50)]
        public string PA_NAME_NOMINEE { get; set; }

        [StringLength(50)]
        public string PA_RELATION { get; set; }

        [StringLength(20)]
        public string PA_EARNING { get; set; }

        public decimal? PA_MONTHLY_INCOME { get; set; }

        [StringLength(50)]
        public string PA_JOB_TYPE { get; set; }

        [StringLength(1)]
        public string PA_GENDER { get; set; }

        [StringLength(20)]
        public string PA_DOB { get; set; }

        public int? PA_AGE { get; set; }

        [StringLength(20)]
        public string PA_RATE { get; set; }

        [StringLength(20)]
        public string PA_WEEKS { get; set; }

        public decimal? PA_WEEKLY_BENEFIT { get; set; }

        [StringLength(100)]
        public string PA_DESCRIPTION { get; set; }

        [StringLength(20)]
        public string PA_GRP_ID { get; set; }

        [StringLength(100)]
        public string PA_GRP_NAME { get; set; }

        [StringLength(50)]
        public string PA_EXCLUSIONS { get; set; }

        public int? PA_NUM_PERSONS { get; set; }

        public decimal? PA_ANN_SALARY { get; set; }

        public decimal? PA_TFE_SALARY { get; set; }

        public decimal? PA_LIM_EVENTS { get; set; }

        public decimal? PA_LIM_LIFE { get; set; }

        [StringLength(50)]
        public string PA_OCCUPATION { get; set; }

        public decimal? PA_RISK_PREM_FC { get; set; }

        public decimal? PA_RISK_PREM_BC { get; set; }

        public decimal? PA_ADJ_PREM_FC { get; set; }

        public decimal? PA_ADJ_PREM_BC { get; set; }

        public decimal? PA_DISC_FC { get; set; }

        public decimal? PA_DISC_BC { get; set; }

        public decimal? PA_LOAD_FC { get; set; }

        public decimal? PA_LOAD_BC { get; set; }

        public decimal? PA_COMP_FEE_FC { get; set; }

        public decimal? PA_COMP_FEE_BC { get; set; }

        public decimal? PA_COMMISSION_FC { get; set; }

        public decimal? PA_COMMISSION_BC { get; set; }

        [StringLength(15)]
        public string PA_TXN_STATUS { get; set; }

        [StringLength(15)]
        public string PA_RISK_STATE { get; set; }

        [StringLength(20)]
        public string PA_RISK_NO { get; set; }

        public int? PA_RISK_ID { get; set; }

        public int? PA_POLH_SYS_ID { get; set; }

        public int? PA_POLH_DOC_NO { get; set; }

        public int? PA_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string PA_PDT_CODE { get; set; }

        [StringLength(15)]
        public string PA_CVR_CODE { get; set; }

        [StringLength(15)]
        public string PA_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string PA_END_TYPE { get; set; }

        public DateTime? PA_APPROVE_DATE { get; set; }

        public int? PA_UW_YEAR { get; set; }

        [StringLength(20)]
        public string PA_ANN_BENCOV { get; set; }

        public decimal? PA_SI_FC { get; set; }

        public decimal? PA_SI_BC { get; set; }

        public decimal? PA_TOT_PREM_FC { get; set; }

        public decimal? PA_TOT_PREM_BC { get; set; }

        public DateTime? PA_ACCT_DATE { get; set; }

        [StringLength(50)]
        public string PA_CRTE_BY { get; set; }

        public DateTime? PA_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string PA_MOD_BY { get; set; }

        public DateTime? PA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PA_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
