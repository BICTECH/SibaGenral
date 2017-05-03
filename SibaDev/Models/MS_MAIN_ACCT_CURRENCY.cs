namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MAIN_ACCT_CURRENCY")]
    public partial class MS_MAIN_ACCT_CURRENCY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ACUR_SYS_ID { get; set; }

        [StringLength(15)]
        public string ACUR_CODE { get; set; }

        [StringLength(15)]
        public string ACUR_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string ACUR_CRTE_BY { get; set; }

        public DateTime? ACUR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ACUR_MOD_BY { get; set; }

        public DateTime? ACUR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACUR_STATUS { get; set; }
    }
}
