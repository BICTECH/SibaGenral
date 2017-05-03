namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_MAKE")]
    public partial class MS_UDW_MAKE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_MAKE()
        {
            INS_UWD_VEHICLE_RISK = new HashSet<INS_UWD_VEHICLE_RISK>();
        }
        [Key]
        [StringLength(15)]
        public string MAK_CODE { get; set; }

        [StringLength(50)]
        public string MAK_NAME { get; set; }

        [StringLength(100)]
        public string MAK_DESC { get; set; }

        [StringLength(30)]
        public string MAK_CRTE_BY { get; set; }

        public DateTime? MAK_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string MAK_MOD_BY { get; set; }

        public DateTime? MAK_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MAK_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_VEHICLE_RISK> INS_UWD_VEHICLE_RISK { get; set; }
    }
}
