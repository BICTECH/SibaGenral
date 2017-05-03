namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_CONDS_CLAUSES")]
    public partial class MS_SYS_CONDS_CLAUSES:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_CONDS_CLAUSES()
        {
            MST_UWD_PRODUCT_COND_CLAUSES = new HashSet<MST_UWD_PRODUCT_COND_CLAUSES>();
        }

        [Key]
        [StringLength(15)]
        public string CCL_CODE { get; set; }

        [StringLength(30)]
        public string CCL_NAME { get; set; }

        [Required]
        [StringLength(300)]
        public string CCL_DESCRIPTION { get; set; }

        [StringLength(30)]
        public string CCL_CRTE_BY { get; set; }

        public DateTime? CCL_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string CCL_MOD_BY { get; set; }

        public DateTime? CCL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CCL_STATUS { get; set; }

        [StringLength(30)]
        public string CCL_TYPE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT_COND_CLAUSES> MST_UWD_PRODUCT_COND_CLAUSES { get; set; }
    }
}
