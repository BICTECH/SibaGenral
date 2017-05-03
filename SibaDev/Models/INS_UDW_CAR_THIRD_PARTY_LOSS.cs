namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_CAR_THIRD_PARTY_LOSS")]
    public partial class INS_UDW_CAR_THIRD_PARTY_LOSS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CARTPL_SYS_ID { get; set; }

        [StringLength(15)]
        public string CARTPL_CODE { get; set; }

        [StringLength(30)]
        public string CARTPL_NAME { get; set; }

        [StringLength(15)]
        public string CARTPL_TYPE { get; set; }

        public decimal? CARTPL_SI_FC { get; set; }

        public decimal? CARTPL_SI_BC { get; set; }

        public decimal? CARTPL_RATE { get; set; }

        public decimal? CARTPL_GROSS_PREM_FC { get; set; }

        public decimal? CARTPL_GROSS_PREM_BC { get; set; }

        public decimal? CARTPL_NET_PREM_FC { get; set; }

        public decimal? CARTPL_NET_PREM_BC { get; set; }

        [StringLength(1)]
        public string CARTPL_DISC_YN { get; set; }

        public decimal? CARTPL_DISC_FC { get; set; }

        public decimal? CARTPL_DISC_BC { get; set; }

        [StringLength(1)]
        public string CARTPL_LOAD_YN { get; set; }

        public decimal? CARTPL_LOAD_FC { get; set; }

        public decimal? CARTPL_LOAD_BC { get; set; }

        public int? CARTPL_ENG_SYS_ID { get; set; }

        public int? CARTPL_RISK_NO { get; set; }

        public int? CARTPL_POLH_DOC_NO { get; set; }

        public int? CARTPL_END_NO { get; set; }

        [StringLength(1)]
        public string CARTPL_RI_SI_YN { get; set; }

        [StringLength(1)]
        public string CARTPL_RI_PREM_YN { get; set; }

        public decimal? CARTPL_RATE_CHANGE { get; set; }

        public decimal? CARTPL_SI_CHANGE { get; set; }

        [StringLength(15)]
        public string CARTPL_COVER_LEVEL { get; set; }

        public decimal? CARTPL_PREM_REFUND { get; set; }

        [StringLength(1)]
        public string CARTPL_RI_YN { get; set; }

        public decimal? CARTPL_USER_PREM { get; set; }

        [StringLength(15)]
        public string CARTPL_TXN_STATE { get; set; }

        [StringLength(30)]
        public string CARTPL_CRTE_BY { get; set; }

        public DateTime? CARTPL_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string CARTPL_MOD_BY { get; set; }

        public DateTime? CARTPL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CARTPL_STATUS { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }
    }
}
