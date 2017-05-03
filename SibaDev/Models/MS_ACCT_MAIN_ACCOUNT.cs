namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_MAIN_ACCOUNT")]
    public partial class MS_ACCT_MAIN_ACCOUNT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_MAIN_ACCOUNT()
        {
            MS_ACCT_PAYMNT_ACNT_DTLS = new HashSet<MS_ACCT_PAYMNT_ACNT_DTLS>();
            MS_ACCT_RCPT_ACNT_DTLS = new HashSet<MS_ACCT_RCPT_ACNT_DTLS>();
            MS_ACCT_SUB_MAIN_ACCOUNT = new HashSet<MS_ACCT_SUB_MAIN_ACCOUNT>();
            MS_ACT_DEF_ACNTS = new HashSet<MS_ACT_DEF_ACNTS>();
            MS_CUSTOMER_CATEGORY = new HashSet<MS_CUSTOMER_CATEGORY>();
            MS_ACCT_SERVICE_TAX = new HashSet<MS_ACCT_SERVICE_TAX>();
            MS_COMPULSORY_FEES = new HashSet<MS_COMPULSORY_FEES>();
        }

        [Key]
        [StringLength(15)]
        public string ACCT_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string ACCT_NAME { get; set; }

        [Required]
        [StringLength(1000)]
        public string ACCT_DESC { get; set; }

        [Required]
        [StringLength(15)]
        public string ACCT_CATEGORY { get; set; }

        [StringLength(1)]
        public string ACCT_MAIN { get; set; }

        [StringLength(1)]
        public string ACCT_OPEN { get; set; }

        [Required]
        [StringLength(1)]
        public string ACCT_TYPE { get; set; }

        [StringLength(15)]
        public string ACCT_CRTE_BY { get; set; }

        public DateTime? ACCT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ACCT_MOD_BY { get; set; }

        public DateTime? ACCT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACCT_STATUS { get; set; }

        public virtual MS_ACCT_CATEGORY MS_ACCT_CATEGORY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_ACNT_DTLS> MS_ACCT_PAYMNT_ACNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RCPT_ACNT_DTLS> MS_ACCT_RCPT_ACNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SUB_MAIN_ACCOUNT> MS_ACCT_SUB_MAIN_ACCOUNT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_DEF_ACNTS> MS_ACT_DEF_ACNTS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_CUSTOMER_CATEGORY> MS_CUSTOMER_CATEGORY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SERVICE_TAX> MS_ACCT_SERVICE_TAX { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_COMPULSORY_FEES> MS_COMPULSORY_FEES { get; set; }
    }
}
