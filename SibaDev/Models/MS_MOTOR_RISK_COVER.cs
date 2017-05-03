namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MOTOR_RISK_COVER")]
    public partial class MS_MOTOR_RISK_COVER:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MRC_RK_CVR_SYS_ID { get; set; }

        [StringLength(15)]
        public string MRC_CVR_CODE { get; set; }

        public int? MRC_MPR_SYS_ID { get; set; }

        public decimal? MRC_DFT_SI { get; set; }

        public decimal? MRC_DFT_RATE { get; set; }


        [StringLength(1)]
        public string MRC_NCD_YN { get; set; }

        public decimal? MRC_MIN_RATE { get; set; }

        public decimal? MRC_MAX_RATE { get; set; }

        public decimal? MRC_DFT_PREM { get; set; }

        [StringLength(1)]
        public string MRC_DFT_YN { get; set; }

        public int? MRC_MIN_SEATS { get; set; }

        public decimal? MRC_SEAT_LOAD { get; set; }

        public int? MRC_MIN_AGE { get; set; }

        public decimal? MRC_AGE_LOAD { get; set; }

        public int? MRC_EXCESS_LOAD { get; set; }

        [StringLength(15)]
        public string MRC_CRTE_BY { get; set; }

        public DateTime? MRC_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MRC_MOD_BY { get; set; }

        public DateTime? MRC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MRC_STATUS { get; set; }

        [StringLength(15)]
        public string MRC_MTP_PRD_CODE { get; set; }

        public virtual MS_MOTOR_PROD_RISK MS_MOTOR_PROD_RISK { get; set; }

        public virtual MS_UDW_COVERS MS_UDW_COVERS { get; set; }
    }
}
