namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_RECEIPTS_HEAD")]
    public partial class MS_ACT_RECEIPTS_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACT_RECEIPTS_HEAD()
        {
            MS_ACCT_RECEIPTS_DTLS = new HashSet<MS_ACCT_RECEIPTS_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ARH_SYS_ID { get; set; }

        public DateTime? ARH_TXN_DATE { get; set; }

        public int? ARH_BATCH_NO { get; set; }

        [StringLength(1000)]
        public string ARH_DESC { get; set; }

        [StringLength(100)]
        public string ARH_CRTE_BY { get; set; }

        public DateTime? ARH_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string ARH_MOD_BY { get; set; }

        public DateTime? ARH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ARH_STATUS { get; set; }

        [StringLength(1)]
        public string ARH_ACTIVE { get; set; }

        [StringLength(15)]
        public string ARH_OFF_CODE { get; set; }

        [StringLength(15)]
        public string ARH_ATD_CODE { get; set; }

        [StringLength(2)]
        public string ARH_RCPT_TYPE { get; set; }

        [StringLength(1)]
        public string ARH_TRANS_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_RECEIPTS_DTLS> MS_ACCT_RECEIPTS_DTLS { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }
    }
}
