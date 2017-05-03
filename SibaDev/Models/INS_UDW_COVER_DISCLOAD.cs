namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_COVER_DISCLOAD")]
    public partial class INS_UDW_COVER_DISCLOAD:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DL_SYS_ID { get; set; }

        public int? DL_CODE { get; set; }

        public int? DL_RCOV_SYS_ID { get; set; }

        public decimal? DL_PREM_BC { get; set; }

        public decimal? DL_PREM_FC { get; set; }

        public short? DL_RATE { get; set; }

        [StringLength(20)]
        public string DL_TYPE { get; set; }

        public decimal? DL_AMT_BC { get; set; }

        public decimal? DL_AMT_FC { get; set; }

        [StringLength(30)]
        public string DL_CRTE_BY { get; set; }

        public DateTime? DL_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string DL_MOD_BY { get; set; }

        public DateTime? DL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DL_STATUS { get; set; }

        public virtual INS_UWD_RISK_COVERS INS_UWD_RISK_COVERS { get; set; }
    }
}
