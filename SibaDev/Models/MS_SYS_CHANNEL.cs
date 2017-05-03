namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_CHANNEL")]
    public partial class MS_SYS_CHANNEL : Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_CHANNEL()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
        }
        [Key]
        [StringLength(15)]
        public string MSC_CODE { get; set; }

        [StringLength(50)]
        public string MSC_NAME { get; set; }

        [StringLength(100)]
        public string MSC_DESC { get; set; }

        [StringLength(30)]
        public string MSC_CRTE_BY { get; set; }

        public DateTime? MSC_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MSC_MOD_BY { get; set; }

        public DateTime? MSC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MSC_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }
    }
}
