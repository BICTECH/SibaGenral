namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_INS_CURRENCY")]
    public partial class MS_INS_CURRENCY:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_INS_CURRENCY()
        {
            MS_ACCT_PAYMNT_DTLS = new HashSet<MS_ACCT_PAYMNT_DTLS>();
         
            MS_ACCT_SUB_CURRERNCY = new HashSet<MS_ACCT_SUB_CURRERNCY>();
            MS_ACCT_RCPT_ACNT_DTLS = new HashSet<MS_ACCT_RCPT_ACNT_DTLS>();
        }

        [Key]
        [StringLength(15)]
        public string CUR_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string CUR_FULL_NAME { get; set; }

        [StringLength(40)]
        public string CUR_ORIG_COUNTRY { get; set; }

        [StringLength(20)]
        public string CUR_DEC_SYMBOL { get; set; }

        [StringLength(20)]
        public string CUR_SUB_UNIT { get; set; }

        [StringLength(5)]
        public string CUR_SYMBOL { get; set; }

        [StringLength(100)]
        public string CUR_CRTE_BY { get; set; }

        public DateTime? CUR_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string CUR_MOD_BY { get; set; }

        public DateTime? CUR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CUR_STATUS { get; set; }

        [StringLength(1)]
        public string CUR_BASE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS { get; set; }

       
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SUB_CURRERNCY> MS_ACCT_SUB_CURRERNCY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RCPT_ACNT_DTLS> MS_ACCT_RCPT_ACNT_DTLS { get; set; }
    }
}
