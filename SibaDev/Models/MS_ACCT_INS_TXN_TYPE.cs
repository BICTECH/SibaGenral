namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_INS_TXN_TYPE")]
    public partial class MS_ACCT_INS_TXN_TYPE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_INS_TXN_TYPE()
        {
            MS_ACCT_TXN_DOC = new HashSet<MS_ACCT_TXN_DOC>();
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
        }

        [Key]
        [StringLength(15)]
        public string TXN_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string TXN_NAME { get; set; }

        [StringLength(1000)]
        public string TXN_DESC { get; set; }

        [Required]
        [StringLength(15)]
        public string TXN_INS_SRCE { get; set; }

        [StringLength(15)]
        public string TXN_CRTE_BY { get; set; }

        public DateTime? TXN_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TXN_MOD_BY { get; set; }

        public DateTime? TXN_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TXN_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_TXN_DOC> MS_ACCT_TXN_DOC { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }
    }
}
