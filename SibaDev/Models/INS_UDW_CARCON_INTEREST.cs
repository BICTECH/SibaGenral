namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_CARCON_INTEREST")]
    public partial class INS_UDW_CARCON_INTEREST:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CONVAL_SYS_ID { get; set; }

        [StringLength(15)]
        public string CONVAL_CODE { get; set; }

        [StringLength(30)]
        public string CONVAL_NAME { get; set; }

        public decimal? CONVAL_VALUE { get; set; }

        public int CONVAL_CARINT_SYS_ID { get; set; }

        public int CONVAL_ENG_SYS_ID { get; set; }

        public int CONVAL_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string CONVAL_CRTE_BY { get; set; }

        public DateTime? CONVAL_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string CONVAL_MOD_BY { get; set; }

        public DateTime? CONVAL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CONVAL_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }

        public virtual INS_UDW_ENGINEER INS_UDW_ENGINEER { get; set; }
    }
}
