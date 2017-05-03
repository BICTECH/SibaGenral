namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_LOCATION")]
    public partial class MS_SYS_LOCATION:Model
    {
        [Key]
        [StringLength(15)]
        public string LOC_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string LOC_NAME { get; set; }

        [StringLength(1000)]
        public string LOC_DESC { get; set; }

        [StringLength(15)]
        public string LOC_ARE_CODE { get; set; }

        [StringLength(100)]
        public string LOC_ADDR1 { get; set; }

        [StringLength(100)]
        public string LOC_ADDR2 { get; set; }

        [StringLength(100)]
        public string LOC_CRTE_BY { get; set; }

        public DateTime? LOC_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string LOC_MOD_BY { get; set; }

        public DateTime? LOC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LOC_STATUS { get; set; }

        public virtual MS_SYS_AREA MS_SYS_AREA { get; set; }
    }
}
