namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_TXN_DOC_ACCS_RGHTS")]
    public partial class MS_ACT_TXN_DOC_ACCS_RGHTS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TDAR_SYS_ID { get; set; }

        [StringLength(15)]
        public string TDAR_USR_CODE { get; set; }

        public decimal? TDAR_MIN_AMNT { get; set; }

        public decimal? TDAR_MAX_AMNT { get; set; }

        [StringLength(1)]
        public string TDAR_POST_TXN_YN { get; set; }

        [StringLength(1)]
        public string TDAR_AMMEND_YN { get; set; }

        [StringLength(1)]
        public string TDAR_REVERSE_YN { get; set; }

        [StringLength(1)]
        public string TDAR_PRNT_BFR_PST_YN { get; set; }

        [StringLength(1)]
        public string TDAR_PRNT_AFTR_PST_YN { get; set; }

        [StringLength(15)]
        public string TDAR_ATD_CODE { get; set; }

        public DateTime? TDAR_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string TDAR_CRTE_BY { get; set; }

        [StringLength(100)]
        public string TDAR_MOD_BY { get; set; }

        public DateTime? TDAR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TDAR_STATUS { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }

        public virtual MS_SYS_USERS MS_SYS_USERS { get; set; }
    }
}
