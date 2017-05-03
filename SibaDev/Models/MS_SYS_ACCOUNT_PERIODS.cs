namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_ACCOUNT_PERIODS")]
    public partial class MS_SYS_ACCOUNT_PERIODS:Model
    {
        [Key]
        [StringLength(15)]
        public string ACP_YEAR_CODE { get; set; }

        public DateTime ACP_PERIOD_FROM { get; set; }

        public DateTime ACP_PERIOD_TO { get; set; }

        [StringLength(1)]
        public string ACP_MONTH_OPEN { get; set; }

        [StringLength(1)]
        public string ACP_MONTH_CLOSE { get; set; }

        [StringLength(30)]
        public string ACP_CRTE_BY { get; set; }

        public DateTime? ACP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ATY_MOD_BY { get; set; }

        public DateTime? ACP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACP_STATUS { get; set; }
    }
}
