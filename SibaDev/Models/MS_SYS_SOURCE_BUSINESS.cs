namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_SOURCE_BUSINESS")]
    public partial class MS_SYS_SOURCE_BUSINESS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_SOURCE_BUSINESS()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
        }

        [Key]
        [StringLength(15)]
        public string SRB_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string SRB_NAME { get; set; }

        [StringLength(100)]
        public string SRB_DESC { get; set; }

        [StringLength(30)]
        public string SRB_CRTE_BY { get; set; }

        public DateTime? SRB_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string SRB_MOD_BY { get; set; }

        public DateTime? SRB_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SRB_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }
    }
}
