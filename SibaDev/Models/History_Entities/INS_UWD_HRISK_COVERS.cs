namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_HRISK_COVERS")]
    public partial class INS_UWD_HRISK_COVERS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RCOV_HSYS_ID { get; set; }

        public int RCOV_SYS_ID { get; set; }

        public int? RCOV_RISK_SYS_ID { get; set; }

        public int? RCOV_RISK_NO { get; set; }

        public int? RCOV_POLH_DOC_NO { get; set; }

        public int? RPCOV_END_NO { get; set; }

        [StringLength(15)]
        public string RCOV_CODE { get; set; }

        public decimal? RCOV_SI_FC { get; set; }

        public decimal? RCOV_SI_BC { get; set; }

        public decimal? RCOV_RATE { get; set; }

        public decimal? RCOV_GROSS_PREM_FC { get; set; }

        public decimal? RCOV_GROSS_PREM_BC { get; set; }

        public decimal? RCOV_ANNL_PREM_BC { get; set; }

        public decimal? RCOV_ANNL_PREM_FC { get; set; }

        public decimal? RCOV_NET_PREM_FC { get; set; }

        public decimal? RCOV_NET_PREM_BC { get; set; }

        [StringLength(1)]
        public string RCOV_RI_SI_YN { get; set; }

        [StringLength(1)]
        public string RCOV_RI_PREM_YN { get; set; }

        [StringLength(30)]
        public string RCOV_TYPE { get; set; }

        [StringLength(1)]
        public string RCOV_DISC_YN { get; set; }

        public decimal? RCOV_DISC_FC { get; set; }

        public decimal? RCOV_DISC_BC { get; set; }

        [StringLength(1)]
        public string RCOV_LOAD_YN { get; set; }

        public decimal? RCOV_LOAD_FC { get; set; }

        public decimal? RCOV_LOAD_BC { get; set; }

        [StringLength(1)]
        public string RCOV_TXN_STATE { get; set; }

        [StringLength(15)]
        public string RCOV_CRTE_BY { get; set; }

        public DateTime? RCOV_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string RCOV_MOD_BY { get; set; }

        public DateTime? RCOV_MOD_DATE { get; set; }

        [StringLength(1)]
        public string RCOV_STATUS { get; set; }

        public int? RCOV_NO { get; set; }

        [StringLength(50)]
        public string RCOV_NAME { get; set; }
    }
}
