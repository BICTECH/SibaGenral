namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_RCPT_ACNT_DTLS")]
    public partial class MS_ACCT_RCPT_ACNT_DTLS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RAD_SYS_ID { get; set; }

        [StringLength(5)]
        public string RAD_DR_CR { get; set; }

        [StringLength(15)]
        public string RAD_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string RAD_SUB_ACCT_CODE { get; set; }

        public decimal? RAD_AMNT_FC { get; set; }

        public decimal? RAD_AMNT_BC { get; set; }

        [StringLength(1000)]
        public string RAD_DESC { get; set; }

        [StringLength(100)]
        public string RAD_CRTE_BY { get; set; }

        public DateTime? RAD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string RAD_MOD_BY { get; set; }

        public DateTime? RAD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string RAD_STATUS { get; set; }

        [StringLength(1)]
        public string RAD_ACTIVE { get; set; }

        [StringLength(15)]
        public string RAD_CUR_CODE { get; set; }

        public int? RAD_ARD_SYS_ID { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        public virtual MS_ACCT_RECEIPTS_DTLS MS_ACCT_RECEIPTS_DTLS { get; set; }

        public virtual MS_INS_CURRENCY MS_INS_CURRENCY { get; set; }
    }
}
