namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_COMPANY")]
    public partial class MS_SYS_COMPANY:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_COMPANY()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
        }

        [Key]
        [StringLength(15)]
        public string CMP_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string CMP_NAME { get; set; }

        [StringLength(20)]
        public string CMP_PHONE { get; set; }

        [StringLength(100)]
        public string CMP_EMAIL { get; set; }

        [StringLength(100)]
        public string CMP_WEBSITE { get; set; }

        [StringLength(100)]
        public string CMP_HEAD_OFFICE_ADD { get; set; }

        [StringLength(15)]
        public string CMP_CNT_CODE { get; set; }

        [StringLength(100)]
        public string CMP_CRTE_BY { get; set; }

        public DateTime? CMP_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string CMP_MOD_BY { get; set; }

        public DateTime? CMP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CMP_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }
    }
}
