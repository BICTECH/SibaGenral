namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_CAR_LOSS_OF_PROFIT")]
    public partial class INS_UDW_CAR_LOSS_OF_PROFIT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LOSSOP_SYS_ID { get; set; }

        [StringLength(15)]
        public string LOSSOP_CODE { get; set; }

        [StringLength(30)]
        public string LOSSOP_NAME { get; set; }

        [StringLength(20)]
        public string LOSSOP_TYPE { get; set; }

        public decimal? LOSSOP_SI_FC { get; set; }

        public decimal? LOSSOP_SI_BC { get; set; }

        public decimal? LOSSOP_RATE { get; set; }

        public decimal? LOSSOP_GROSS_PREM_FC { get; set; }

        public decimal? LOSSOP_GROSS_PREM_BC { get; set; }

        public decimal? LOSSOP_NET_PREM_FC { get; set; }

        public decimal? LOSSOP_NET_PREM_BC { get; set; }

        [StringLength(1)]
        public string LOSSOP_DISC_YN { get; set; }

        public decimal? LOSSOP_DISC_FC { get; set; }

        public decimal? LOSSOP_DISC_BC { get; set; }

        [StringLength(1)]
        public string LOSSOP_LOAD_YN { get; set; }

        public decimal? LOSSOP_LOAD_FC { get; set; }

        public decimal? LOSSOP_LOAD_BC { get; set; }

        public int? LOSSOP_ENG_SYS_ID { get; set; }

        public int? LOSSOP_RISK_NO { get; set; }

        public int? LOSSOP_POLH_DOC_NO { get; set; }

        public int? LOSSOP_END_NO { get; set; }

        [StringLength(1)]
        public string LOSSOP_RI_SI_YN { get; set; }

        [StringLength(1)]
        public string LOSSO_RI_PREM_YN { get; set; }

        public decimal? LOSSOP_RATE_CHANGE { get; set; }

        public decimal? LOSSOP_SI_CHANGE { get; set; }

        [StringLength(15)]
        public string LOSSOP_COVER_LEVEL { get; set; }

        public decimal? LOSSOP_PREM_REFUND { get; set; }

        [StringLength(15)]
        public string LOSSOP_RI_YN { get; set; }

        public decimal? LOSSOP_USER_PREM { get; set; }

        [StringLength(1)]
        public string LOSSOP_TXN_STATE { get; set; }

        [StringLength(30)]
        public string LOSSOP_CRTE_BY { get; set; }

        public DateTime? LOSSOP_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string LOSSOP_MOD_BY { get; set; }

        public DateTime? LOSSOP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LOSSOP_STATUS { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }
    }
}
