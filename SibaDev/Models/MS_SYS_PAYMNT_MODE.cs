namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_PAYMNT_MODE")]
    public partial class MS_SYS_PAYMNT_MODE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_PAYMNT_MODE()
        {
            MS_ACCT_PAYMNT_DTLS = new HashSet<MS_ACCT_PAYMNT_DTLS>();
            MS_ACCT_RECEIPTS_DTLS = new HashSet<MS_ACCT_RECEIPTS_DTLS>();
        }

        [Key]
        [StringLength(15)]
        public string PM_CODE { get; set; }

        [StringLength(100)]
        public string PM_NAME { get; set; }

        [StringLength(1000)]
        public string PM_DESC { get; set; }

        [StringLength(100)]
        public string PM_CRTE_BY { get; set; }

        public DateTime? PM_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string PM_MOD_BY { get; set; }

        public DateTime? PM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PM_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RECEIPTS_DTLS> MS_ACCT_RECEIPTS_DTLS { get; set; }
    }
}
