namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MST_UWD_PRODUCT_COND_CLAUSES")]
    public partial class MST_UWD_PRODUCT_COND_CLAUSES:Model
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PCC_SYS_ID { get; set; }

        [StringLength(20)]
        public string PCC_CLAU_CODE { get; set; }

        [StringLength(15)]
        public string PCC_PDT_CODE { get; set; }

        [StringLength(1)]
        public string PCC_TYPE { get; set; }

        [StringLength(250)]
        public string PCC_DDESCRIPTION { get; set; }

        [StringLength(30)]
        public string PCC_CRTE_BY { get; set; }

        public DateTime? PCC_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PCC_MOD_BY { get; set; }

        public DateTime? PCC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PCC_STATUS { get; set; }

        public virtual MS_SYS_CONDS_CLAUSES MS_SYS_CONDS_CLAUSES { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
