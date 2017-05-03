namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_GA_ASSET_ALL_RISK")]
    public partial class INS_GA_ASSET_ALL_RISK:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AAR_SYS_ID { get; set; }

        public int? AAR_POLH_SYS_ID { get; set; }

        public int? AAR_GA_SYS_ID { get; set; }

        [StringLength(30)]
        public string AAR_RISK_TYPE { get; set; }

        [StringLength(50)]
        public string AAR_RISK_NAME { get; set; }

        [StringLength(100)]
        public string AAR_DESCRIPTION { get; set; }

        public decimal? AAR_LIMIT_LIABILITY { get; set; }

        [StringLength(50)]
        public string AAR_CRTE_BY { get; set; }

        public DateTime? AAR_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string AAR_MOD_BY { get; set; }

        public DateTime? AAR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string AAR_STATUS { get; set; }

        public int? AAR_POLH_END_NO { get; set; }

        public int? AAR_RISK_ID { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }

        public virtual INS_UDW_GENERAL_ACCIDENT INS_UDW_GENERAL_ACCIDENT { get; set; }
    }
}
