namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_DEF_ACNTS")]
    public partial class MS_ACT_DEF_ACNTS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DA_SYS_ID { get; set; }

        [StringLength(15)]
        public string DA_ACNT_CODE { get; set; }

        public decimal? DA_MIN_AMNT { get; set; }

        public decimal? DA_MAX_AMNT { get; set; }

        [StringLength(15)]
        public string DA_ATD_CODE { get; set; }

        [StringLength(100)]
        public string DA_CRTE_BY { get; set; }

        public DateTime? DA_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string DA_MOD_BY { get; set; }

        public DateTime? DA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DA_STATUS { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }
    }
}
