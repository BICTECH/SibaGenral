namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_HPOLICY_HEAD")]
    public partial class INS_UWD_HPOLICY_HEAD:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int POLH_HSYS_ID { get; set; }

        public int POLH_SYS_ID { get; set; }

        public decimal? POLH_DOC_NO { get; set; }

        public decimal? POLH_END_NO { get; set; }

        public decimal? POLH_QUT_SER_NO { get; set; }

        public decimal? POLH_POL_SER_NO { get; set; }

        [StringLength(15)]
        public string POLH_OFF_CODE { get; set; }

        [StringLength(15)]
        public string POLH_SUB_CLASS_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CMP_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CHANNEL_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CUST_CODE { get; set; }

        [StringLength(15)]
        public string POLH_INS_SOURCE { get; set; }

        [StringLength(15)]
        public string POLH_BIZ_SOURCE { get; set; }

        [StringLength(15)]
        public string POLH_INTERMIDIARY { get; set; }

        public DateTime? POLH_POL_START_DATE { get; set; }

        public DateTime? POLH_POL_END_DATE { get; set; }

        public int? POLH_POL_DAYS { get; set; }

        public int? POLH_POL_UW_YEAR { get; set; }

        public decimal? POLH_POL_SI_FC { get; set; }

        public decimal? POLH_POL_SI_BC { get; set; }

        public decimal? POLH_POL_PREM_FC { get; set; }

        public decimal? POLH_POL_PREM_BC { get; set; }

        public decimal? POLH_POL_COMM_FC { get; set; }

        public decimal? POLH_POL_COMM_BC { get; set; }

        public decimal? POLH_POL_DISC_FC { get; set; }

        public decimal? POLH_POL_DISC_BC { get; set; }

        public decimal? POLH_POL_LOAD_FC { get; set; }

        public decimal? POLH_POL_LOAD_BC { get; set; }

        public decimal? POLH_COINS_SI_FC { get; set; }

        public decimal? POLH_COINS_SI_BC { get; set; }

        public decimal? POLH_COINS_PREM_FC { get; set; }

        public decimal? POLH_COINS_PREM_BC { get; set; }

        public decimal? POLH_NET_SI_FC { get; set; }

        public decimal? POLH_NET_SI_BC { get; set; }

        public decimal? POLH_NET_PREM_FC { get; set; }

        public decimal? POLH_NET_PREM_BC { get; set; }

        public decimal? POLH_FEE_FC { get; set; }

        public decimal? POLH_FEE_BC { get; set; }

        [StringLength(1)]
        public string POLH_RENEW_SER_NO { get; set; }

        [StringLength(1)]
        public string POLH_TXN_STATE { get; set; }

        [StringLength(15)]
        public string POLH_POL_STATE { get; set; }

        [StringLength(5)]
        public string POLH_END_TYPE { get; set; }

        public DateTime? POLH_APPROVE_DATE { get; set; }

        public DateTime? POLH_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string POLH_DISPLAY_NO { get; set; }

        [StringLength(30)]
        public string POLH_CRTE_BY { get; set; }

        public DateTime? POLH_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string POLH_MOD_BY { get; set; }

        public DateTime? POLH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string POLH_STATUS { get; set; }

        [StringLength(20)]
        public string POLH_CURRENCY { get; set; }

        public decimal? POLH_CURRENCY_RATE { get; set; }

        [StringLength(15)]
        public string POLH_CLASS_CODE { get; set; }
    }
}
