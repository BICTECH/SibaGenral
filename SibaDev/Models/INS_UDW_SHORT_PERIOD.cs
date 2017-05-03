namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_SHORT_PERIOD")]
    public partial class INS_UDW_SHORT_PERIOD: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SPD_SYS_ID { get; set; }

        [StringLength(15)]
        public string SPD_PRD_CODE { get; set; }

        public int? SPD_NO_OF_DAYS { get; set; }

        public int? SPD_RATE_PERC { get; set; }

        [StringLength(100)]
        public string SPD_CRTE_BY { get; set; }

        public DateTime? SPD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string SPD_MOD_BY { get; set; }

        public DateTime? SPD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SPD_STATUS { get; set; }
    }
}
