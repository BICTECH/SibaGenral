namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.ACCT_GL_HEAD")]
    public partial class ACCT_GL_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ACCT_GL_HEAD()
        {
            ACCT_GL_DETAIL = new HashSet<ACCT_GL_DETAIL>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long TH_SYS_ID { get; set; }

        public long? TH_BATCH_ID { get; set; }

        [StringLength(15)]
        public string TH_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string TH_DOC_NO { get; set; }

        public DateTime? TH_DOC_DATE { get; set; }

        public short? TH_ACCT_YEAR { get; set; }

        public short? TH_DOC_CAL_YEAR { get; set; }

        public byte? TH_DOC_CAL_MONTH { get; set; }

        [StringLength(40)]
        public string TH_TXN_REF { get; set; }

        public DateTime? TH_TXN_REF_DT { get; set; }

        [StringLength(15)]
        public string TH_COMP_CODE { get; set; }

        [StringLength(12)]
        public string TH_OFFICE_CODE { get; set; }

        [StringLength(12)]
        public string TH_DEPT_CODE { get; set; }

        [StringLength(2000)]
        public string TH_NARRATION { get; set; }

        [StringLength(240)]
        public string TH_ANALYSIS_01 { get; set; }

        [StringLength(240)]
        public string TH_NALYSIS_02 { get; set; }

        [StringLength(240)]
        public string TH_NALYSIS_03 { get; set; }

        [StringLength(240)]
        public string TH_NALYSIS_04 { get; set; }

        [StringLength(240)]
        public string TH_NALYSIS_05 { get; set; }

        [StringLength(12)]
        public string TH_CRTE_BY { get; set; }

        public DateTime? TH_CRTE_DATE { get; set; }

        [StringLength(12)]
        public string TH_MOD_BY { get; set; }

        public DateTime? TH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TH_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ACCT_GL_DETAIL> ACCT_GL_DETAIL { get; set; }
    }
}
