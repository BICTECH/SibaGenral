namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_PAYMENTS_HEAD")]
    public partial class MS_ACT_PAYMENTS_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACT_PAYMENTS_HEAD()
        {
            MS_ACCT_PAYMNT_ACNT_DTLS = new HashSet<MS_ACCT_PAYMNT_ACNT_DTLS>();
            MS_ACCT_PAYMNT_DTLS = new HashSet<MS_ACCT_PAYMNT_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int APH_SYS_ID { get; set; }

        public DateTime? APH_TXN_DATE { get; set; }

        public int? APH_BATCH_NO { get; set; }

        [StringLength(1000)]
        public string APH_DESC { get; set; }

        [StringLength(100)]
        public string APH_CRTE_BY { get; set; }

        public DateTime? APH_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string APH_MOD_BY { get; set; }

        public DateTime? APH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string APH_STATUS { get; set; }

        [StringLength(1)]
        public string APH_ACTIVE { get; set; }

        [StringLength(15)]
        public string APH_OFF_CODE { get; set; }

        [StringLength(15)]
        public string APH_ATD_CODE { get; set; }

        [StringLength(1)]
        public string APH_TRANS_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_ACNT_DTLS> MS_ACCT_PAYMNT_ACNT_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }
    }
}
