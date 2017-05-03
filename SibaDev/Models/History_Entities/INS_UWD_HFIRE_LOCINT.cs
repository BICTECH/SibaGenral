namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_HFIRE_LOCINT")]
    public partial class INS_UWD_HFIRE_LOCINT:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HLINT_SYS_ID { get; set; }

        public int? LINT_SYS_ID { get; set; }

        public int? LINT_PLOC_SYS_ID { get; set; }

        public int? LINT_POLH_SYS_ID { get; set; }

        public int? LINT_POLH_DOC_NO { get; set; }

        public int? LINT_POLH_END_NO { get; set; }

        [Required]
        [StringLength(15)]
        public string LINT_RISK_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string LINT_RISK_NAME { get; set; }

        public int? LINT_RISK_NO { get; set; }

        [StringLength(100)]
        public string LINT_DESC { get; set; }

        public decimal? LINT_SI_FC { get; set; }

        public decimal? LINT_SI_BC { get; set; }

        public decimal? LINT_PRM_FC { get; set; }

        public decimal? LINT_PRM_BC { get; set; }

        [StringLength(1)]
        public string LINT_SUBCONST { get; set; }

        [StringLength(1)]
        public string LINT_PLIN_FOUND { get; set; }

        [StringLength(10)]
        public string LINT_PLIN_FOUND_AMT { get; set; }

        [StringLength(1)]
        public string LINT_ESCALATION { get; set; }

        [StringLength(10)]
        public string LINT_ESC_PERC { get; set; }

        [StringLength(1)]
        public string LINT_TXN_STATUS { get; set; }

        [StringLength(30)]
        public string LINT_RISK_STATE { get; set; }

        [StringLength(1)]
        public string LINT_STATUS { get; set; }
    }
}
