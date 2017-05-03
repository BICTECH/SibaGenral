namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_EAR_CPM_INTEREST")]
    public partial class INS_UDW_EAR_CPM_INTEREST:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EARCPM_SYS_ID { get; set; }

        [StringLength(15)]
        public string EARCPM_RISK_TYPE { get; set; }

        [StringLength(30)]
        public string EARCPM_RISK_NAME { get; set; }

        [StringLength(100)]
        public string EARCPM_DESCRIPTION { get; set; }

        public int? EARCPM_PERIOD_SYS_ID { get; set; }

        public int? EARCPM_ENG_SYS_ID { get; set; }

        public int? EARCPM_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string EARCPM_CRTE_BY { get; set; }

        public DateTime? EARCPM_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string EARCPM_MOD_BY { get; set; }

        public DateTime? EARCPM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string EARCPM_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
