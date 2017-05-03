namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CLM_EST_EXPENSE")]
    public partial class CLM_EST_EXPENSE:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLM_EXP_SYS_ID { get; set; }

        [StringLength(15)]
        public string CLM_EXP_CODE { get; set; }

        public decimal? CLM_EXP_COST { get; set; }

        public int? CLM_EXP_CLM_EST_SYS_ID { get; set; }

        [StringLength(15)]
        public string CLM_EXP_CLM_EST_TYPE { get; set; }

        [StringLength(15)]
        public string CLM_EXP_CRTE_BY { get; set; }

        public DateTime? CLM_EXP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_EXP_MOD_BY { get; set; }

        public DateTime? CLM_EXP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_EXP_STATUS { get; set; }

        public virtual CLM_EST_DTLS CLM_EST_DTLS { get; set; }

        public virtual MS_CLM_EST_TYPE MS_CLM_EST_TYPE { get; set; }
    }
}
