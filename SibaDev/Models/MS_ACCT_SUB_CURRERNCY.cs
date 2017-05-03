namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_SUB_CURRERNCY")]
    public partial class MS_ACCT_SUB_CURRERNCY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SUB_CURR_SYS_ID { get; set; }

        [StringLength(15)]
        public string SUB_CURR_CODE { get; set; }

        [StringLength(15)]
        public string SUB_CURR_SUB_CODE { get; set; }

        [StringLength(15)]
        public string SUB_CURR_CRTE_BY { get; set; }

        public DateTime? SUB_CURR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string SUB_CURR_MOD_BY { get; set; }

        public DateTime? SUB_CURR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string SUB_CURR_STATUS { get; set; }

        [StringLength(1)]
        public string SUB_CURR_ACTIVE_YN { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        public virtual MS_INS_CURRENCY MS_INS_CURRENCY { get; set; }
    }
}
