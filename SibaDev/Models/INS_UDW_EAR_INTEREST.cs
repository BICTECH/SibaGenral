namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_EAR_INTEREST")]
    public partial class INS_UDW_EAR_INTEREST:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EAR_SYS_ID { get; set; }

        [StringLength(15)]
        public string EAR_RISK_TYPE { get; set; }

        [StringLength(30)]
        public string EAR_RISK_NAME { get; set; }

        [StringLength(100)]
        public string EAR_DESCRIPTION { get; set; }

        public int? EAR_PERIOD_SYS_ID { get; set; }

        public int? EAR_ENG_SYS_ID { get; set; }

        public int? EAR_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string EAR_CRTE_BY { get; set; }

        public DateTime? EAR_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string EAR_MOD_BY { get; set; }

        public DateTime? EAR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EAR_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }
    }
}
