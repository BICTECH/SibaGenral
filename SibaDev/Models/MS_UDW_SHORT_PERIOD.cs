namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_SHORT_PERIOD")]
    public partial class MS_UDW_SHORT_PERIOD:Model
    {
        [Key]
        [StringLength(15)]
        public string SPD_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string SPD_PRD_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string SPD_PRD_DESCRIPTION { get; set; }

        [Required]
        [StringLength(15)]
        public string SPD_CVR_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string SPD_CVR_DESCRIPTION { get; set; }

        public int SPD_NO_OF_DAYS { get; set; }

        public decimal? SPD_RATE_PERC { get; set; }

        public DateTime? SPD_FROM_DATE { get; set; }

        public DateTime? SPD_TO_DATE { get; set; }

        [StringLength(30)]
        public string SPD_CRTE_BY { get; set; }

        public DateTime? SPD_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string SPD_MOD_BY { get; set; }

        public DateTime? SPD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SPD_STATUS { get; set; }
    }
}
