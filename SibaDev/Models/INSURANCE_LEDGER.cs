namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INSURANCE_LEDGER")]
    public partial class INSURANCE_LEDGER:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INSURANCE_LEDGER()
        {
            INSURANCE_SUB_LEDGER = new HashSet<INSURANCE_SUB_LEDGER>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IGL_SYS_ID { get; set; }

        public int? IGL_POL_SYS_ID { get; set; }

        public int? IGL_POL_END_NO { get; set; }

        [StringLength(50)]
        public string IGL_POL_NUMBER { get; set; }

        [StringLength(50)]
        public string IG_REF_DOC { get; set; }

        [StringLength(15)]
        public string IGL_CUST_CODE { get; set; }

        [StringLength(10)]
        public string IGL_TXN_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string IGL_DOC_NUMBER { get; set; }
        
        public int? IGL_TXN_SOURCE { get; set; }

        [StringLength(200)]
        public string IGL_NARRATION { get; set; }

        [StringLength(10)]
        public string IGL_ACCT_PERIOD_REF { get; set; }

        public int? IGL_ACCT_REF { get; set; }

        [StringLength(50)]
        public string IGL_ACCOUNT_CODE { get; set; }

        public DateTime? IGL_ACCT_DATE { get; set; }

        public DateTime? IGL_POSTED_DATE { get; set; }

        [StringLength(2)]
        public string IGL_DR_CR { get; set; }

        [StringLength(3)]
        public string IGL_CURRENCY { get; set; }

        public decimal? IGL_FX_RATE { get; set; }

        public decimal? IGL_AMOUNT_FC { get; set; }

        public decimal? IGL_AMOUNT_BC { get; set; }

        [StringLength(15)]
        public string IGL_CRTE_BY { get; set; }

        public DateTime? IGL_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string IGL_MOD_BY { get; set; }

        public DateTime? IGL_MOD_DATE { get; set; }

        [StringLength(1)]
        public string IGL_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INSURANCE_SUB_LEDGER> INSURANCE_SUB_LEDGER { get; set; }

        //public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
