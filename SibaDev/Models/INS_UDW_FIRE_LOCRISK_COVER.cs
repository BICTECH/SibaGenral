namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_FIRE_LOCRISK_COVER")]
    public partial class INS_UDW_FIRE_LOCRISK_COVER:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LOC_CVR_SYS_ID { get; set; }

        public int? LOC_CVR_CODE { get; set; }

        [StringLength(20)]
        public string LOC_CVR_TYPE { get; set; }

        public short? LOC_CVR_RATE { get; set; }

        public int? LOC_CVR_PLOC_SYS_ID { get; set; }

        public int? LOC_CVR_PLOC_RISK_NO { get; set; }

        public int? LOC_CVR_POLH_SYS_ID { get; set; }

        public decimal? LOC_CVR_SI_FC { get; set; }

        public decimal? LOC_CVR_SI_BC { get; set; }

        public decimal? LOC_CVR_GROSS_PREM_FC { get; set; }

        public decimal? LOC_CVR_GROSS_PREM_BC { get; set; }

        public decimal? LOC_CVR_NET_PREM_FC { get; set; }

        public decimal? LOC_CVR_NET_PREM_BC { get; set; }

        [StringLength(30)]
        public string LOC_CVR_CRTE_BY { get; set; }

        public DateTime? LOC_CVR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string LOC_CVR_MOD_BY { get; set; }

        public DateTime? LOC_CVR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string LOC_CVR_STATUS { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK { get; set; }

        public virtual INS_UWD_FIRE_LOCRISK INS_UWD_FIRE_LOCRISK1 { get; set; }
    }
}
