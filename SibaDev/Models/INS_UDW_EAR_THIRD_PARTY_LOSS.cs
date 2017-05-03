namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_EAR_THIRD_PARTY_LOSS")]
    public partial class INS_UDW_EAR_THIRD_PARTY_LOSS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EARTPL_SYS_ID { get; set; }

        [StringLength(15)]
        public string EARTPL_CODE { get; set; }

        [StringLength(30)]
        public string EARTPL_NAME { get; set; }

        [StringLength(20)]
        public string EARTPL_TYPE { get; set; }

        public decimal? EARTPL_SI_FC { get; set; }

        public decimal? EARTPL_SI_BC { get; set; }

        public decimal? EARTPL_RATE { get; set; }

        public decimal? EARTPL_GROSS_PREM_FC { get; set; }

        public decimal? EARTPL_GROSS_PREM_BC { get; set; }

        public decimal? EARTPL_NET_PREM_FC { get; set; }

        public decimal? EARTPL_NET_PREM_BC { get; set; }

        [StringLength(1)]
        public string EARTPL_DISC_YN { get; set; }

        public decimal? EARTPL_DISC_FC { get; set; }

        public decimal? EARTPL_DISC_BC { get; set; }

        [StringLength(1)]
        public string EARTPL_LOAD_YN { get; set; }

        public decimal? EARTPL_LOAD_FC { get; set; }

        public decimal? EARTPL_LOAD_BC { get; set; }

        public int? EARTPL_ENG_SYS_ID { get; set; }

        public int? EARTPL_RISK_NO { get; set; }

        public int? EARTPL_POLH_DOC_NO { get; set; }

        public int? EARTPL_END_NO { get; set; }

        [StringLength(1)]
        public string EARTPL_RI_SI_YN { get; set; }

        [StringLength(1)]
        public string EARTPL_RI_PREM_YN { get; set; }

        public decimal? EARTPL_RATE_CHANGE { get; set; }

        public decimal? EARTPL_SI_CHANGE { get; set; }

        [StringLength(15)]
        public string EARTPL_COVER_LEVEL { get; set; }

        public decimal? EARTPL_PREM_REFUND { get; set; }

        [StringLength(1)]
        public string EARTPL_RI_YN { get; set; }

        public decimal? EARTPL_USER_PREM { get; set; }

        [StringLength(15)]
        public string EARTPL_TXN_STATE { get; set; }

        public int? EARTPL_PERIOD_SYS_ID { get; set; }

        [StringLength(30)]
        public string EARTPL_CRTE_BY { get; set; }

        public DateTime? EARTPL_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string EARTPL_MOD_BY { get; set; }

        public DateTime? EARTPL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EARTPL_STATUS { get; set; }
    }
}
