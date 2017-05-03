namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MST_UWD_PRODUCT_COVERS")]
    public partial class MST_UWD_PRODUCT_COVERS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PCV_SYS_ID { get; set; }

        [StringLength(15)]
        public string PCV_PDT_CODE { get; set; }

        [StringLength(15)]
        public string PCV_COV_CODE { get; set; }

        public decimal? PCV_SI { get; set; }

        public decimal? PCV_DEF_RATE { get; set; }

        [StringLength(1)]
        public string PCV_DFT { get; set; }

        [StringLength(1)]
        public string PCV_DISC { get; set; }

        [StringLength(15)]
        public string PCV_LOAD { get; set; }

        [StringLength(30)]
        public string PCV_CRTE_BY { get; set; }

        public DateTime? PCV_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PCV_MOD_BY { get; set; }

        public DateTime? PCV_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PCV_STATUS { get; set; }

        public decimal? PCV_DEF_PREM { get; set; }

        public virtual MS_UDW_COVERS MS_UDW_COVERS { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
