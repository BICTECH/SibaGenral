namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_AGENCY_COMM")]
    public partial class INS_UDW_AGENCY_COMM
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CMM_SYS_ID { get; set; }

        public int? CMM_POL_SYS_ID { get; set; }

        public int? CMM_END_NO { get; set; }

        [StringLength(20)]
        public string CMM_COB_CODE { get; set; }

        [StringLength(20)]
        public string CMM_OFFICE { get; set; }

        [StringLength(20)]
        public string CMM_AGB_CODE { get; set; }

        public decimal? CMM_PREM_AMT_FC { get; set; }

        public decimal? CMM_PREM_AMT_BC { get; set; }

        public int? CMM_COM_PERC { get; set; }

        [StringLength(20)]
        public string CMM_CUST_TYPE { get; set; }

        public decimal? CMM_COM_AMT_FC { get; set; }

        public decimal? CMM_COM_AMT_BC { get; set; }

        public DateTime? CMM_COM_DATE { get; set; }

        [StringLength(30)]
        public string CMM_CRTE_BY { get; set; }

        public DateTime? CMM_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CMM_MOD_BY { get; set; }

        public DateTime? CMM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CMM_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
