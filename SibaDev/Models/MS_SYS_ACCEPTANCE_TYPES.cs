namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_ACCEPTANCE_TYPES")]
    public partial class MS_SYS_ACCEPTANCE_TYPES:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_ACCEPTANCE_TYPES()
        {
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
        }

        [Key]
        [StringLength(15)]
        public string ATY_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string ATY_NAME { get; set; }

        [StringLength(100)]
        public string ATY_DESCRIPTION { get; set; }

        [StringLength(30)]
        public string ATY_CRTE_BY { get; set; }

        public DateTime? ATY_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ATY_MOD_BY { get; set; }

        public DateTime? ATY_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ATY_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }
    }
}
