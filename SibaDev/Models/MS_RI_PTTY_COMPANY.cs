namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_PTTY_COMPANY")]
    public partial class MS_RI_PTTY_COMPANY: Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TCP_SYS_ID { get; set; }

        public int? TCP_TD_SYS_ID { get; set; }

        [StringLength(15)]
        public string TCP_COMP_CODE { get; set; }

        public decimal? TCP_TTY_SHARE { get; set; }

        public decimal? TCP_TTY_COMM { get; set; }

        [StringLength(1)]
        public string TCP_LEADER_YN { get; set; }

        public decimal? TCP_TTY_TAX { get; set; }

        [StringLength(15)]
        public string TCP_CRTE_BY { get; set; }

        public DateTime? TCP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TCP_MOD_BY { get; set; }

        public DateTime? TCP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TCP_STATUS { get; set; }

        public virtual MS_RI_PTTY_DETL MS_RI_PTTY_DETL { get; set; }

    }
}
