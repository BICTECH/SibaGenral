namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_GA_PROF_INDEMNITY")]
    public partial class INS_GA_PROF_INDEMNITY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PRO_SYS_ID { get; set; }

        public int? PRO_POLH_SYS_ID { get; set; }

        public int? PRO_GA_SYS_ID { get; set; }

        [StringLength(50)]
        public string PRO_ITEM { get; set; }

        [StringLength(100)]
        public string PRO_ITEM_DESC { get; set; }

        public decimal? PRO_AGGRET_LIMIT { get; set; }

        public decimal? PRO_LIMIT_OCCUR { get; set; }

        public decimal? PRO_PREM_FC { get; set; }

        public decimal? PRO_LIMIT_LOSS { get; set; }

        public decimal? PRO_ANN_TURNOVER { get; set; }

        [StringLength(50)]
        public string PRO_DENT_FROM { get; set; }

        [StringLength(50)]
        public string PRO_DENT_TO { get; set; }

        [StringLength(50)]
        public string PRO_DISTANCE { get; set; }

        [StringLength(50)]
        public string PRO_CRTE_BY { get; set; }

        public DateTime? PRO_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string PRO_MOD_BY { get; set; }

        public DateTime? PRO_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PRO_STATUS { get; set; }

        public int? PRO_POLH_END_NO { get; set; }

        public int? PRO_RISK_ID { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }

        public virtual INS_UDW_GENERAL_ACCIDENT INS_UDW_GENERAL_ACCIDENT { get; set; }
    }
}
