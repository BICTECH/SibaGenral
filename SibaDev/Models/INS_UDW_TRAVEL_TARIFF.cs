namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_TRAVEL_TARIFF")]
    public partial class INS_UDW_TRAVEL_TARIFF: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TRT_SYS_ID { get; set; }

        [StringLength(15)]
        public string TRT_PRD_CODE { get; set; }

        public decimal? TRT_PRM { get; set; }

        public int? TRT_DAYS_FROM { get; set; }

        public int? TRT_DAYS_TO { get; set; }

        [StringLength(100)]
        public string TRT_CRTE_BY { get; set; }

        public DateTime? TRT_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string TRT_MOD_BY { get; set; }

        public DateTime? TRT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TRT_STATUS { get; set; }
    }
}
