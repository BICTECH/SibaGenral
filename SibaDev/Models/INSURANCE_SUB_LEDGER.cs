namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INSURANCE_SUB_LEDGER")]
    public partial class INSURANCE_SUB_LEDGER:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ISL_SYS_ID { get; set; }

        public int? ISL_IGL_SYS_ID { get; set; }

        [StringLength(15)]
        public string ISL_ACCT_NUMBER { get; set; }

        [StringLength(3)]
        public string ISL_CURRENCY { get; set; }

        public decimal? ISL_FX_RATE { get; set; }

        public decimal? ISL_AMOUNT_FC { get; set; }

        public decimal? ISL_AMOUNT_BC { get; set; }

        [StringLength(2)]
        public string ISL_DR_CR { get; set; }

        [StringLength(15)]
        public string ISL_COB { get; set; }

        [StringLength(15)]
        public string ISL_OFFICE { get; set; }

        [StringLength(200)]
        public string ISL_NARRATION { get; set; }

        public DateTime? ISL_ACCT_DATE { get; set; }

        [StringLength(1)]
        public string ISL_CONTROL_ACT_YN { get; set; }

        [StringLength(15)]
        public string ISL_SUB_LEDGER { get; set; }

        [StringLength(15)]
        public string ISL_CRTE_BY { get; set; }

        public DateTime? ISL_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ISL_MOD_BY { get; set; }

        [Column(TypeName = "bfile")]
        public byte[] ISL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ISL_STATUS { get; set; }

        public virtual INSURANCE_LEDGER INSURANCE_LEDGER { get; set; }
    }
}
