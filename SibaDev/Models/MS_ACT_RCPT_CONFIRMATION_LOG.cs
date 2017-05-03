namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_RCPT_CONFIRMATION_LOG")]
    public partial class MS_ACT_RCPT_CONFIRMATION_LOG:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RCL_SYS_ID { get; set; }

        public int? RCL_ARH_SYS_ID { get; set; }

        [StringLength(100)]
        public string RCL_CRTE_BY { get; set; }

        public DateTime? RCL_CRTE_DATE { get; set; }

        [StringLength(1000)]
        public string RCL_NARRATION { get; set; }

        [StringLength(20)]
        public string RCL_ACTION { get; set; }

        [StringLength(1)]
        public string RCL_STATUS { get; set; }
    }
}
