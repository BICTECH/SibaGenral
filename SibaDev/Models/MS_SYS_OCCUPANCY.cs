namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_OCCUPANCY")]
    public partial class MS_SYS_OCCUPANCY:Model
    {
        [Key]
        [StringLength(15)]
        public string MSO_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string MSO_NAME { get; set; }

        [StringLength(100)]
        public string MSO_DESC { get; set; }

        [StringLength(30)]
        public string MSO_CRTE_BY { get; set; }

        public DateTime? MSO_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string MSO_MOD_BY { get; set; }

        public DateTime? MSO_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MSO_STATUS { get; set; }
    }
}
