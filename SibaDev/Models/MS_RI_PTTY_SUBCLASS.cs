namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_PTTY_SUBCLASS")]
    public partial class MS_RI_PTTY_SUBCLASS: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TSC_SYS_ID { get; set; }

        public int? TSC_TD_SYS_ID { get; set; }

        [StringLength(15)]
        public string TSC_SCLASS_CODE { get; set; }

        public decimal? TSC_TTY_LIMIT_FC { get; set; }

        public decimal? TSC_TTY_LIMIT_BC { get; set; }

        [StringLength(15)]
        public string TSC_CRTE_BY { get; set; }

        public DateTime? TSC_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TSC_MOD_BY { get; set; }

        public DateTime? TSC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TSC_STATUS { get; set; }

        //public virtual MS_RI_PTTY_DETL MS_RI_PTTY_DETL { get; set; }

    }
}
