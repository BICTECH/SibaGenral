namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.ACCT_GL_DETAIL")]
    public partial class ACCT_GL_DETAIL:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long TD_SYS_ID { get; set; }

        public long? TD_TH_SYS_ID { get; set; }

        public int? TD_SEQ_NO { get; set; }

        public decimal? TD_DOC_NO { get; set; }

        public DateTime? TD_DOC_DATE { get; set; }

        [StringLength(40)]
        public string TD_DOC_REF { get; set; }

        [StringLength(12)]
        public string TD_MAIN_ACCT_CODE { get; set; }

        [StringLength(12)]
        public string TD_SUB_ACCT_LV1 { get; set; }

        [StringLength(12)]
        public string TD_SUB_ACCT_LV2 { get; set; }

        [StringLength(12)]
        public string TD_ANNALYSIS_1 { get; set; }

        [StringLength(12)]
        public string TD_ANNALYSIS_2 { get; set; }

        [StringLength(12)]
        public string TD_ANNALYSIS_3 { get; set; }

        [StringLength(12)]
        public string TD_ANNALYSIS_4 { get; set; }

        [StringLength(12)]
        public string TD_ANNALYSIS_5 { get; set; }

        [StringLength(12)]
        public string TD_OFFICE_CODE { get; set; }

        [StringLength(12)]
        public string TD_DEPT_CODE { get; set; }

        [StringLength(12)]
        public string TD_CURR_CODE { get; set; }
        
        public decimal? TD_CURR_RATE { get; set; }

        [StringLength(2)]
        public string TD_DRCR_FLAG { get; set; }

        public decimal? TD_AMT_FC { get; set; }

        public decimal? TD_AMT_BC { get; set; }

        [StringLength(2000)]
        public string TD_LINE_NARRATION { get; set; }

        [StringLength(12)]
        public string TD_CRTE_BY { get; set; }

        public DateTime? TD_CRTE_DATE { get; set; }

        [StringLength(12)]
        public string TD_MOD_BY { get; set; }

        public DateTime? TD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TD_STATUS { get; set; }

        public virtual ACCT_GL_HEAD ACCT_GL_HEAD { get; set; }
    }
}
