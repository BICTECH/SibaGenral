namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_PAYMNT_DTLS")]
    public partial class MS_ACCT_PAYMNT_DTLS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int APD_SYS_ID { get; set; }

        public int? APD_APH_SYS_ID { get; set; }

        [StringLength(5)]
        public string APD_PAYMNT_TYPE { get; set; }

        [StringLength(15)]
        public string APD_TXN_OFF_CODE { get; set; }

        [StringLength(15)]
        public string APD_DEP_OFF_CODE { get; set; }

        [StringLength(50)]
        public string APD_TXN_DOC_NO { get; set; }

        [StringLength(20)]
        public string APD_ACNT_PERIOD { get; set; }

        [StringLength(15)]
        public string APD_CUR_CODE { get; set; }

        [StringLength(15)]
        public string APD_PM_CODE { get; set; }

        public DateTime? APD_DUE_DATE { get; set; }

        [StringLength(100)]
        public string APD_RCVD_FROM { get; set; }

        [StringLength(1000)]
        public string APD_PAYMNT_DESC { get; set; }

        [StringLength(100)]
        public string APD_CRTE_BY { get; set; }

        public DateTime? APD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string APD_MOD_BY { get; set; }

        public DateTime? APD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string APD_STATUS { get; set; }

        [StringLength(1)]
        public string APD_ACTIVE { get; set; }

        public virtual MS_ACT_PAYMENTS_HEAD MS_ACT_PAYMENTS_HEAD { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE1 { get; set; }

        public virtual MS_INS_CURRENCY MS_INS_CURRENCY { get; set; }

        public virtual MS_SYS_PAYMNT_MODE MS_SYS_PAYMNT_MODE { get; set; }
    }
}
