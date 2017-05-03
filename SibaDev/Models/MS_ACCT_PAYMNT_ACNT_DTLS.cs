namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_PAYMNT_ACNT_DTLS")]
    public partial class MS_ACCT_PAYMNT_ACNT_DTLS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PAD_SYS_ID { get; set; }

        [StringLength(5)]
        public string PAD_DR_CR { get; set; }

        [StringLength(15)]
        public string PAD_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string PAD_SUB_ACCT_CODE { get; set; }

        public decimal? PAD_AMNT_FC { get; set; }

        public decimal? PAD_AMNT_BC { get; set; }

        [StringLength(1000)]
        public string PAD_DESC { get; set; }

        [StringLength(100)]
        public string PAD_CRTE_BY { get; set; }

        public DateTime? PAD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string PAD_MOD_BY { get; set; }

        public DateTime? PAD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PAD_STATUS { get; set; }

        [StringLength(1)]
        public string PAD_ACTIVE { get; set; }

        public int? PAD_APH_SYS_ID { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        public virtual MS_ACT_PAYMENTS_HEAD MS_ACT_PAYMENTS_HEAD { get; set; }
    }
}
