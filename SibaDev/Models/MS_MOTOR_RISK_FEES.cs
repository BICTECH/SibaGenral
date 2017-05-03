namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MOTOR_RISK_FEES")]
    public partial class MS_MOTOR_RISK_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MRF_SYS_ID { get; set; }

        [StringLength(15)]
        public string MRF_FEE_CODE { get; set; }

        public int? MRF_MPR_SYS_ID { get; set; }

        [StringLength(15)]
        public string MRF_FEE_AMOUNT { get; set; }

        [StringLength(15)]
        public string MRF_CRTE_BY { get; set; }

        public DateTime? MRF_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MRF_MOD_BY { get; set; }

        public DateTime? MRF_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MRF_STATUS { get; set; }

        public virtual MS_COMPULSORY_FEES MS_COMPULSORY_FEES { get; set; }
    }
}
