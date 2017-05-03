namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_GA_ASSET_TRANSIT")]
    public partial class INS_GA_ASSET_TRANSIT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TRANS_SYS_ID { get; set; }

        public int? TRANS_GA_SYS_ID { get; set; }

        public int? TRANS_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string TRANS_RISK_TYPE { get; set; }

        [StringLength(50)]
        public string TRANS_RISK_NAME { get; set; }

        [StringLength(100)]
        public string TRANS_DESCRIPTION { get; set; }

        public decimal? TRANS_SUM_INSURED { get; set; }

        public decimal? TRANS_LIMIT_LOSS { get; set; }

        [StringLength(30)]
        public string TRANS_DENT_FROM { get; set; }

        [StringLength(30)]
        public string TRANS_DENT_T0 { get; set; }

        [StringLength(30)]
        public string TRANS_DISTANCE { get; set; }

        [StringLength(50)]
        public string TRANS_CRTE_BY { get; set; }

        public DateTime? TRANS_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string TRANS_MOD_BY { get; set; }

        public DateTime? TRANS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TRANS_STATUS { get; set; }

        public int? TRANS_POLH_END_NO { get; set; }

        public int? TRANS_RISK_ID { get; set; }

        public virtual INS_UDW_GENERAL_ACCIDENT INS_UDW_GENERAL_ACCIDENT { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
