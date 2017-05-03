namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_RATES")]
    public partial class MS_UDW_RATES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RAT_SYS_ID { get; set; }

        [Required]
        [StringLength(20)]
        public string RAT_TYPE { get; set; }

        [Required]
        [StringLength(15)]
        public string RAT_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string RAT_DESC { get; set; }

        [Required]
        [StringLength(20)]
        public string RAT_PARTY_TYPE { get; set; }

        public decimal? RAT_EXCHG_UNIT { get; set; }

        public DateTime? RAT_APPLI_FROM { get; set; }

        public DateTime? RAT_APPLI_TO { get; set; }

        [StringLength(30)]
        public string RAT_CRTE_BY { get; set; }

        public DateTime? RAT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string RAT_MOD_BY { get; set; }

        public DateTime? RAT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string RAT_STATUS { get; set; }
    }
}
