namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CLM_EST_RISK_DTLS")]
    public partial class CLM_EST_RISK_DTLS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLM_RISK_SYS_ID { get; set; }

        public int CLM_RISK_CLM_SYS_ID { get; set; }

        [StringLength(15)]
        public string CLM_RISK_VEH_REG_NO { get; set; }

        [StringLength(30)]
        public string CLM_RISK_ENG_NO { get; set; }

        [StringLength(15)]
        public string CLM_RISK_VEH_NO { get; set; }

        [StringLength(100)]
        public string CLM_RISK_VEH_TYPE { get; set; }

        [StringLength(100)]
        public string CLM_RISK_MAKE_MODEL { get; set; }

        [StringLength(15)]
        public string CLM_RISK_CRTE_BY { get; set; }

        public DateTime? CLM_RISK_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_RISK_MOD_BY { get; set; }

        public DateTime? CLM_RISK_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_RISK_STATUS { get; set; }

        [StringLength(50)]
        public string CLM_RISK_CHASIS_NO { get; set; }

        public virtual CLM_EST_HEAD CLM_EST_HEAD { get; set; }
    }
}
