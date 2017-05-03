namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_TRANSACTION_STRUCTURE")]
    public partial class MS_UDW_TRANSACTION_STRUCTURE:Model
    {
        [Key]
        [StringLength(15)]
        public string TST_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string TST_NAME { get; set; }

        [Required]
        [StringLength(100)]
        public string TST_DESC { get; set; }

        [StringLength(20)]
        public string TST_TRANS_ORG { get; set; }

        [StringLength(5)]
        public string TST_JRNL_ABBR { get; set; }

        [StringLength(30)]
        public string TST_CRTE_BY { get; set; }

        public DateTime? TST_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TST_MOD_BY { get; set; }

        public DateTime? TST_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TST_STATUS { get; set; }
    }
}
