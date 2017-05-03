namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_AREA")]
    public partial class MS_SYS_AREA:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_AREA()
        {
            MS_SYS_LOCATION = new HashSet<MS_SYS_LOCATION>();
        }

        [Key]
        [StringLength(15)]
        public string ARE_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string ARE_NAME { get; set; }

        [StringLength(1000)]
        public string ARE_DESC { get; set; }

        [StringLength(100)]
        public string ARE_CRTE_BY { get; set; }

        public DateTime? ARE_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string ARE_MOD_BY { get; set; }

        public DateTime? ARE_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ARE_STATUS { get; set; }

        [StringLength(15)]
        public string ARE_REG_CODE { get; set; }

        public virtual MS_SYS_REGIONS MS_SYS_REGIONS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_LOCATION> MS_SYS_LOCATION { get; set; }
    }
}
