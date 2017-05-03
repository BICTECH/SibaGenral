namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_FIRE_RISK")]
    public partial class MS_SYS_FIRE_RISK : Model
    {
        [Key]
        [StringLength(15)]
        public string FRK_CODE { get; set; }

        [StringLength(100)]
        public string FRK_NAME { get; set; }

        [StringLength(1000)]
        public string FRK_DESC { get; set; }

        [StringLength(100)]
        public string FRK_CRTE_BY { get; set; }

        public DateTime? FRK_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string FRK_MOD_BY { get; set; }

        public DateTime? FRK_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FRK_STATUS { get; set; }
    }
}
