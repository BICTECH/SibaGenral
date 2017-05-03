namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_RATINGS_DEPENDENCY")]
    public partial class MS_SYS_RATINGS_DEPENDENCY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RDP_SYS_ID { get; set; }

        [StringLength(10)]
        public string RDP_CODE { get; set; }

        [StringLength(90)]
        public string RDP_DESCRIPTION { get; set; }

        [StringLength(30)]
        public string RDP_CRTE_BY { get; set; }

        public DateTime? RDP_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string RDP_MOD_BY { get; set; }

        public DateTime? RDP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string RDP_STATUS { get; set; }
    }
}
