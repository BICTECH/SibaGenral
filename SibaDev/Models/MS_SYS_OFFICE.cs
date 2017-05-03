namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_OFFICE")]
    public partial class MS_SYS_OFFICE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_OFFICE()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MS_ACCT_PAYMNT_DTLS = new HashSet<MS_ACCT_PAYMNT_DTLS>();
            MS_ACCT_PAYMNT_DTLS1 = new HashSet<MS_ACCT_PAYMNT_DTLS>();
            MS_ACCT_RECEIPTS_DTLS = new HashSet<MS_ACCT_RECEIPTS_DTLS>();
            MS_ACCT_RECEIPTS_DTLS1 = new HashSet<MS_ACCT_RECEIPTS_DTLS>();
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
            MS_ACT_PAYMENTS_HEAD = new HashSet<MS_ACT_PAYMENTS_HEAD>();
            MS_ACT_RECEIPTS_HEAD = new HashSet<MS_ACT_RECEIPTS_HEAD>();
            CLM_EST_HEAD = new HashSet<CLM_EST_HEAD>();
        }

        [Key]
        [StringLength(15)]
        public string OFF_CODE { get; set; }

        [StringLength(30)]
        public string OFF_NAME { get; set; }

        [StringLength(1000)]
        public string OFF_DESC { get; set; }

        [StringLength(15)]
        public string OFF_CHANEL { get; set; }

        [StringLength(50)]
        public string OFF_ADDRESS1 { get; set; }

        [StringLength(50)]
        public string OFF_PHYSICAL_LOCAT { get; set; }

        [StringLength(20)]
        public string OFF_PHONE { get; set; }

        [StringLength(20)]
        public string OFF_MOBILE { get; set; }

        [StringLength(20)]
        public string OFF_FAX { get; set; }

        [StringLength(50)]
        public string OFF_EMAIL { get; set; }

        [StringLength(20)]
        public string OFF_MANAGER { get; set; }

        [StringLength(15)]
        public string OFF_CMP_CODE { get; set; }

        [StringLength(100)]
        public string OFF_CRTE_BY { get; set; }

        public DateTime? OFF_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string OFF_MOD_BY { get; set; }

        public DateTime? OFF_MOD_DATE { get; set; }

        [StringLength(1)]
        public string OFF_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RECEIPTS_DTLS> MS_ACCT_RECEIPTS_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RECEIPTS_DTLS> MS_ACCT_RECEIPTS_DTLS1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_PAYMENTS_HEAD> MS_ACT_PAYMENTS_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_RECEIPTS_HEAD> MS_ACT_RECEIPTS_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_HEAD> CLM_EST_HEAD { get; set; }
    }
}
