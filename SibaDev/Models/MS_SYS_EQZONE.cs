namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_EQZONE")]
    public partial class MS_SYS_EQZONE : Model
    {
        [Key]
        [StringLength(15)]
        public string EQZ_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string EQZ_NAME { get; set; }

        [StringLength(1000)]
        public string EQZ_DESC { get; set; }

        [StringLength(100)]
        public string EQZ_CRTE_BY { get; set; }

        public DateTime? EQZ_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string EQZ_MOD_BY { get; set; }

        public DateTime? EQZ_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EQZ_STATUS { get; set; }
    }
}
