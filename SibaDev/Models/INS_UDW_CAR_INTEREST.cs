namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_CAR_INTEREST")]
    public partial class INS_UDW_CAR_INTEREST:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CAR_SYS_ID { get; set; }

        public int? CAR_POLH_SYS_ID { get; set; }

        [StringLength(15)]
        public string CAR_RISK_TYPE { get; set; }

        [StringLength(15)]
        public string CAR_RISK_NAME { get; set; }

        [StringLength(15)]
        public string CAR_DESCRIPTION { get; set; }

        public int CAR_ENG_SYS_ID { get; set; }

        [StringLength(30)]
        public string CAR_CRTE_BY { get; set; }

        public DateTime? CAR_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string CAR_MOD_BY { get; set; }

        public DateTime? CAR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CAR_STATUS { get; set; }
    }
}
