namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_EAR_PERIOD_DATES")]
    public partial class INS_UDW_EAR_PERIOD_DATES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PERIOD_SYS_ID { get; set; }

        [StringLength(30)]
        public string PERIOD_NAME { get; set; }

        public DateTime? PERIOD_START_DATE { get; set; }

        public DateTime? PERIOD_END_DATE { get; set; }

        public int? PERIOD_DAYS { get; set; }

        public int? PERIOD_ENG_SYSID { get; set; }

        public int? PERIOD_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string PERIOD_CRTE_BY { get; set; }

        public DateTime? PERIOD_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PERIOD_MOD_BY { get; set; }

        public DateTime? PERIOD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PERIOD_STATUS { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
