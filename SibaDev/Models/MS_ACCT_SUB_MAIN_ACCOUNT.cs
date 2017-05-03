namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_SUB_MAIN_ACCOUNT")]
    public partial class MS_ACCT_SUB_MAIN_ACCOUNT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SUB_MAIN_ACCT_SYS_ID { get; set; }

        [StringLength(15)]
        public string SUB_MAIN_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string SUB_MAIN_SUB_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string SUB_MAIN_ACCT_CRTE_BY { get; set; }

        public DateTime? SUB_MAIN_ACCT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string SUB_MAIN_ACCT_MOD_BY { get; set; }

        public DateTime? SUB_MAIN_ACCT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SUB_MAIN_ACCT_STATUS { get; set; }

        [StringLength(1)]
        public string SUB_MAIN_ACTIVT_YN { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }
    }
}
