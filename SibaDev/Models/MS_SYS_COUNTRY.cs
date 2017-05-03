namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_COUNTRY")]
    public partial class MS_SYS_COUNTRY:Model
    {
        [Key]
        [StringLength(15)]
        public string CNT_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string CNT_NAME { get; set; }

        [StringLength(5)]
        public string CNT_ZIP { get; set; }

        [StringLength(100)]
        public string CNT_CRTE_BY { get; set; }

        public DateTime? CNT_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string CNT_MOD_BY { get; set; }

        public DateTime? CNT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CNT_STATUS { get; set; }
    }
}
