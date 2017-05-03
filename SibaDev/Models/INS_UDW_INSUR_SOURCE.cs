namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_INSUR_SOURCE")]
    public partial class INS_UDW_INSUR_SOURCE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_INSUR_SOURCE()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
        }
        [Key]
        [StringLength(15)]
        public string INSUR_CODE { get; set; }

        [StringLength(50)]
        public string INSUR_NAME { get; set; }

        [StringLength(100)]
        public string INSUR_DESC { get; set; }

        [StringLength(50)]
        public string INSUR_CRTE_BY { get; set; }

        public DateTime? INSUR_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string INSUR_MOD_BY { get; set; }

        public DateTime? INSUR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INSUR_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }
    }
}
