namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_EXCHANGE_RATES")]
    public partial class MS_SYS_EXCHANGE_RATES:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_EXCHANGE_RATES()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
        }

        [Key]
        [StringLength(15)]
        public string EXR_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string EXR_BASE_CURRENCY { get; set; }

        public decimal EXR_BASE_RATE { get; set; }

        public decimal? EXR_EXCHANGE_RATE { get; set; }

        [StringLength(40)]
        public string EXR_FX_CURRENCY { get; set; }

        [StringLength(5)]
        public string EXR_FX_RATE { get; set; }

        public DateTime? EXR_FROM_DATE { get; set; }

        public DateTime? EXR_TO_DATE { get; set; }

        [StringLength(30)]
        public string EXR_CRTE_BY { get; set; }

        public DateTime? EXR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string EXR_MOD_BY { get; set; }

        public DateTime? EXR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EXR_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }
    }
}
