namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_CITY")]
    public partial class MS_SYS_CITY:Model
    {

        [Key]
        [StringLength(15)]
        public string CIT_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string CIT_NAME { get; set; }

        [StringLength(15)]
        public string CIT_REG_CODE { get; set; }

        [StringLength(100)]
        public string CIT_CRTE_BY { get; set; }

        public DateTime? CIT_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string CIT_MOD_BY { get; set; }

        public DateTime? CIT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CIT_STATUS { get; set; }

        public virtual MS_SYS_REGIONS MS_SYS_REGIONS { get; set; }
    }
}
