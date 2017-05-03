namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_REGIONS")]
    public partial class MS_SYS_REGIONS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_REGIONS()
        {
            MS_SYS_CITY = new HashSet<MS_SYS_CITY>();
            MS_SYS_AREA = new HashSet<MS_SYS_AREA>();
        }

        [Key]
        [StringLength(15)]
        public string REG_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string REG_NAME { get; set; }

        [StringLength(1000)]
        public string REG_DESC { get; set; }

        [StringLength(15)]
        public string REG_CNT_CODE { get; set; }

        [StringLength(100)]
        public string REG_CRTE_BY { get; set; }

        public DateTime? REG_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string REG_MOD_BY { get; set; }

        public DateTime? REG_MOD_DATE { get; set; }

        [StringLength(1)]
        public string REG_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_AREA> MS_SYS_AREA { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_CITY> MS_SYS_CITY { get; set; }
    }
}
