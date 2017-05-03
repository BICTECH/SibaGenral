namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_PAYMNT_CONFIRMATION_LOG")]
    public partial class MS_ACT_PAYMNT_CONFIRMATION_LOG:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PCL_SYS_ID { get; set; }

        public int? PCL_APH_SYS_ID { get; set; }

        [StringLength(100)]
        public string PCL_CRTE_BY { get; set; }

        public DateTime? PCL_CRTE_DATE { get; set; }

        [StringLength(1000)]
        public string PCL_NARRATION { get; set; }

        [StringLength(20)]
        public string PCL_ACTION { get; set; }

        [StringLength(1)]
        public string PCL_STATUS { get; set; }
    }
}
