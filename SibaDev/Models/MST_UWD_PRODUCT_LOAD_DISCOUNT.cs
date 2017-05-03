namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MST_UWD_PRODUCT_LOAD_DISCOUNT")]
    public partial class MST_UWD_PRODUCT_LOAD_DISCOUNT:Model
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PLDI_SYS_ID { get; set; }

        [StringLength(15)]
        public string PLDI_LDI_CODE { get; set; }

        [StringLength(15)]
        public string PLDI_PDT_CODE { get; set; }

        [StringLength(50)]
        public string PLDI_LDI_NAME { get; set; }

        [StringLength(30)]
        public string PLDI_CRTE_BY { get; set; }

        public DateTime? PLDI_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PLDI_MOD_BY { get; set; }

        public DateTime? PLDI_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PLDI_STATUS { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
