namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_PREM_TARRIFS")]
    public partial class MS_UDW_PREM_TARRIFS:Model
    {
        [Key]
        [StringLength(15)]
        public string TFF_CODE { get; set; }

        [StringLength(15)]
        public string TFF_CVR_CODE { get; set; }

        [StringLength(15)]
        public string TFF_PRD_CODE { get; set; }

        [StringLength(15)]
        public string TFF_MRK_CODE { get; set; }

        public int? TFF_MIN_RATE { get; set; }

        public int? TFF_MAX_RATE { get; set; }

        public int? TFF_DEFAULT_RATE { get; set; }

        public int? TFF_PP_AMT { get; set; }

        public int? TFF_MIN_AMT { get; set; }

        public int? TFF_DEFAULT_AMT { get; set; }

        [StringLength(30)]
        public string TFF_CRTE_BY { get; set; }

        public DateTime? TFF_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string TFF_MOD_BY { get; set; }

        public DateTime? TFF_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TFF_STATUS { get; set; }
    }
}
