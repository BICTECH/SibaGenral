namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_CUST_TYPES")]
    public partial class MS_SYS_CUST_TYPES:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_CUST_TYPES()
        {
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
            MS_UDW_CUSTOMERS = new HashSet<MS_UDW_CUSTOMERS>();
            MS_SYS_INTERMEDIARY = new HashSet<MS_SYS_INTERMEDIARY>();
        }

        [Key]
        [StringLength(15)]
        public string CTP_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string CTP_NAME { get; set; }

        [StringLength(1000)]
        public string CTP_DESC { get; set; }

        [StringLength(20)]
        public string CTP_CUST_TYPE { get; set; }

        [StringLength(5)]
        public string CTP_PREFIX { get; set; }

        [StringLength(5)]
        public string CTP_SURFIX { get; set; }

        [StringLength(100)]
        public string CTP_CRTE_BY { get; set; }

        public DateTime? CTP_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string CTP_MOD_BY { get; set; }

        public DateTime? CTP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CTP_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }

        public virtual MS_CUSTOMER_CATEGORY MS_CUSTOMER_CATEGORY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_UDW_CUSTOMERS> MS_UDW_CUSTOMERS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_INTERMEDIARY> MS_SYS_INTERMEDIARY { get; set; }
    }
}
