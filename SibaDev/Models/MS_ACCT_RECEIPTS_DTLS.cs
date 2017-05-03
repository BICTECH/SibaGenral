namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_RECEIPTS_DTLS")]
    public partial class MS_ACCT_RECEIPTS_DTLS:Model
    {

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_RECEIPTS_DTLS()
        {
            MS_ACCT_RCPT_ACNT_DTLS = new HashSet<MS_ACCT_RCPT_ACNT_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ARD_SYS_ID { get; set; }

        public int? ARD_ARH_SYS_ID { get; set; }

        //[StringLength(5)]
        //public string ARD_RCPT_TYPE { get; set; }

        [StringLength(15)]
        public string ARD_TXN_OFF_CODE { get; set; }

        [StringLength(15)]
        public string ARD_DEP_OFF_CODE { get; set; }

        [StringLength(50)]
        public string ARD_TXN_DOC_NO { get; set; }

        [StringLength(20)]
        public string ARD_ACNT_PERIOD { get; set; }

   
        [StringLength(15)]
        public string ARD_PM_CODE { get; set; }

        public DateTime? ARD_DUE_DATE { get; set; }

        [StringLength(100)]
        public string ARD_RCVD_FROM { get; set; }

        [StringLength(1000)]
        public string ARD_RCPT_DESC { get; set; }

        [StringLength(100)]
        public string ARD_CRTE_BY { get; set; }

        public DateTime? ARD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string ARD_MOD_BY { get; set; }

        public DateTime? ARD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ARD_STATUS { get; set; }

        [StringLength(1)]
        public string ARD_ACTIVE { get; set; }

        public virtual MS_ACT_RECEIPTS_HEAD MS_ACT_RECEIPTS_HEAD { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE1 { get; set; }

        public virtual MS_SYS_PAYMNT_MODE MS_SYS_PAYMNT_MODE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RCPT_ACNT_DTLS> MS_ACCT_RCPT_ACNT_DTLS { get; set; }
    }
}
