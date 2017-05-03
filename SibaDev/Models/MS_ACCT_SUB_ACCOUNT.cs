namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_SUB_ACCOUNT")]
    public partial class MS_ACCT_SUB_ACCOUNT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_SUB_ACCOUNT()
        {
            MS_ACCT_PAYMNT_ACNT_DTLS = new HashSet<MS_ACCT_PAYMNT_ACNT_DTLS>();
            MS_ACCT_RCPT_ACNT_DTLS = new HashSet<MS_ACCT_RCPT_ACNT_DTLS>();
            MS_ACCT_SUB_CURRERNCY = new HashSet<MS_ACCT_SUB_CURRERNCY>();
            MS_ACCT_SUB_MAIN_ACCOUNT = new HashSet<MS_ACCT_SUB_MAIN_ACCOUNT>();
            MS_CUSTOMER_CATEGORY = new HashSet<MS_CUSTOMER_CATEGORY>();
            MS_ACCT_SERVICE_TAX = new HashSet<MS_ACCT_SERVICE_TAX>();
            MS_COMPULSORY_FEES = new HashSet<MS_COMPULSORY_FEES>();
        }

        [Key]
        [StringLength(15)]
        public string SUB_ACCT_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string SUB_ACCT_NAME { get; set; }

        [Required]
        [StringLength(1000)]
        public string SUB_ACCT_DESC { get; set; }

        [StringLength(15)]
        public string SUB_ACCT_CRTE_BY { get; set; }

        public DateTime? SUB_ACCT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string SUB_ACCT_MOD_BY { get; set; }

        public DateTime? SUB_ACCT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SUB_ACCT_STATUS { get; set; }

        [StringLength(1)]
        public string SUB_ACCT_ACTIVE_YN { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_ACNT_DTLS> MS_ACCT_PAYMNT_ACNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RCPT_ACNT_DTLS> MS_ACCT_RCPT_ACNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SUB_CURRERNCY> MS_ACCT_SUB_CURRERNCY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SUB_MAIN_ACCOUNT> MS_ACCT_SUB_MAIN_ACCOUNT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_CUSTOMER_CATEGORY> MS_CUSTOMER_CATEGORY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SERVICE_TAX> MS_ACCT_SERVICE_TAX { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_COMPULSORY_FEES> MS_COMPULSORY_FEES { get; set; }
    }
}
