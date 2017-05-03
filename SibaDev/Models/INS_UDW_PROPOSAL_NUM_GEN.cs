namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PROPOSAL_NUM_GEN")]
    public partial class INS_UDW_PROPOSAL_NUM_GEN:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PROP_SYS_ID { get; set; }

        [StringLength(30)]
        public string PROP_BRANCH { get; set; }

        public DateTime? PROP_DATE { get; set; }

        public decimal? PROP_FORM_NO { get; set; }

        [StringLength(30)]
        public string PROP_ASSIGNED_TO { get; set; }

        [StringLength(30)]
        public string PROP_CRTE_BY { get; set; }

        public DateTime? PROP_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PROP_MOD_BY { get; set; }

        public DateTime? PROP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PROP_STATUS { get; set; }
    }
}
