namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_TXN_DOC")]
    public partial class MS_ACCT_TXN_DOC:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_TXN_DOC()
        {
            MS_ACT_DEF_ACNTS = new HashSet<MS_ACT_DEF_ACNTS>();
            MS_ACT_DOC_NO_GEN = new HashSet<MS_ACT_DOC_NO_GEN>();
            MS_ACT_PAYMENTS_HEAD = new HashSet<MS_ACT_PAYMENTS_HEAD>();
            MS_ACT_RECEIPTS_HEAD = new HashSet<MS_ACT_RECEIPTS_HEAD>();
            MS_ACT_TXN_DOC_ACCS_RGHTS = new HashSet<MS_ACT_TXN_DOC_ACCS_RGHTS>();
            MS_ACT_TXN_DOC_ADV_PROPS = new HashSet<MS_ACT_TXN_DOC_ADV_PROPS>();
        }

        [Key]
        [StringLength(15)]
        public string ATD_CODE { get; set; }

        [StringLength(100)]
        public string ATD_NAME { get; set; }

        [StringLength(15)]
        public string ATD_TXN_CODE { get; set; }

        [StringLength(15)]
        public string ATD_TXN_ORIGN { get; set; }

        [StringLength(10)]
        public string ATD_PST_MODE { get; set; }

        [StringLength(10)]
        public string ATD_PAYMT_MODE { get; set; }

        [StringLength(1)]
        public string ATD_GEN_DOC_NO_YN { get; set; }

        [StringLength(1)]
        public string ATD_PRNT_BFR_PST_YN { get; set; }

        [StringLength(1)]
        public string ATD_PRNT_AFTR_PST_YN { get; set; }

        [StringLength(1)]
        public string ATD_SLF_REV_YN { get; set; }

        [StringLength(100)]
        public string ATD_CRTE_BY { get; set; }

        public DateTime? ATD_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string ATD_MOD_BY { get; set; }

        public DateTime? ATD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ATD_STATUS { get; set; }

        [StringLength(1000)]
        public string ATD_DESC { get; set; }

        public virtual MS_ACCT_DOC_ORIGIN MS_ACCT_DOC_ORIGIN { get; set; }

        public virtual MS_ACCT_INS_TXN_TYPE MS_ACCT_INS_TXN_TYPE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_DEF_ACNTS> MS_ACT_DEF_ACNTS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_DOC_NO_GEN> MS_ACT_DOC_NO_GEN { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_PAYMENTS_HEAD> MS_ACT_PAYMENTS_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_RECEIPTS_HEAD> MS_ACT_RECEIPTS_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_TXN_DOC_ACCS_RGHTS> MS_ACT_TXN_DOC_ACCS_RGHTS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_TXN_DOC_ADV_PROPS> MS_ACT_TXN_DOC_ADV_PROPS { get; set; }
    }
}
