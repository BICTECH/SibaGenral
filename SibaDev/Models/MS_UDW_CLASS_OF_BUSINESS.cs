namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_CLASS_OF_BUSINESS")]
    public partial class MS_UDW_CLASS_OF_BUSINESS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_CLASS_OF_BUSINESS()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MST_UWD_PRODUCT = new HashSet<MST_UWD_PRODUCT>();
        }

        [Key]
        [StringLength(15)]
        public string COB_CODE { get; set; }

        [StringLength(50)]
        public string COB_NAME { get; set; }

        [StringLength(100)]
        public string COB_DESC { get; set; }

        [StringLength(30)]
        public string COB_CRTE_BY { get; set; }

        public DateTime? COB_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string COB_MOD_BY { get; set; }

        public DateTime? COB_MOD_DATE { get; set; }

        [StringLength(1)]
        public string COB_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT> MST_UWD_PRODUCT { get; set; }
    }
}
