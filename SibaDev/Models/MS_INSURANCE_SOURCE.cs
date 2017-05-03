namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_INSURANCE_SOURCE")]
    public partial class MS_INSURANCE_SOURCE:Model
    {
        [Key]
        [StringLength(15)]
        public string INS_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string INS_NAME { get; set; }

        [Required]
        [StringLength(1000)]
        public string INS_DESC { get; set; }

        [StringLength(30)]
        public string INS_CRTE_BY { get; set; }

        public DateTime? INS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INS_MOD_BY { get; set; }

        public DateTime? INS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INS_STATUS { get; set; }
    }
}
