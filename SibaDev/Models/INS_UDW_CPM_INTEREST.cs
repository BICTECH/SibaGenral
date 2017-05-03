namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_CPM_INTEREST")]
    public partial class INS_UDW_CPM_INTEREST:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CPM_SYS_ID { get; set; }

        [StringLength(15)]
        public string CPM_RISK_TYPE { get; set; }

        [StringLength(30)]
        public string CPM_RISK_NAME { get; set; }

        [StringLength(100)]
        public string CPM_DESCRIPTION { get; set; }

        [StringLength(15)]
        public string CPM_CONAR { get; set; }

        public int? CPM_ENG_SYS_ID { get; set; }

        public int? CPM_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string CPM_CRTE_BY { get; set; }

        public DateTime? CPM_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string CPM_MOD_BY { get; set; }

        public DateTime? CPM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CPM_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
