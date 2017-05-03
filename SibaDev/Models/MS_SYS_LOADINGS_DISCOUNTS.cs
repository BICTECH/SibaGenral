namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_LOADINGS_DISCOUNTS")]
    public partial class MS_SYS_LOADINGS_DISCOUNTS:Model
    {
     

        [Key]
        [StringLength(15)]
        public string LDI_CODE { get; set; }

        [StringLength(20)]
        public string LDI_TYPE { get; set; }

        [StringLength(40)]
        public string LDI_NAME { get; set; }

        [StringLength(100)]
        public string LDI_DESC { get; set; }

        [StringLength(20)]
        public string LDI_CATG { get; set; }

        public decimal? LDI_MIN_PERC { get; set; }

        public decimal? LDI_MAX_PERC { get; set; }

        public decimal? LDI_DEFAULT_PERC { get; set; }

        public decimal? LDI_MIN_AMT { get; set; }

        public decimal? LDI_MAX_AMT { get; set; }

        public decimal? LDI_DEFAULT_AMT { get; set; }

        [StringLength(20)]
        public string LDI_AUTONCB { get; set; }

        [StringLength(20)]
        public string LDI_RTNG_YN { get; set; }

        [StringLength(20)]
        public string LDI_SI_YN { get; set; }

        [StringLength(30)]
        public string LDI_CRTE_BY { get; set; }

        public DateTime? LDI_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string LDI_MOD_BY { get; set; }

        public DateTime? LDI_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LDI_STATUS { get; set; }
    }
}
