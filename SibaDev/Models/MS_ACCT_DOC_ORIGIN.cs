namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_DOC_ORIGIN")]
    public partial class MS_ACCT_DOC_ORIGIN:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_DOC_ORIGIN()
        {
            MS_ACCT_TXN_DOC = new HashSet<MS_ACCT_TXN_DOC>();
        }

        [Key]
        [StringLength(15)]
        public string DOC_ORIGN_CODE { get; set; }

        [StringLength(100)]
        public string DOC_ORIGN_NAME { get; set; }

        [StringLength(1000)]
        public string DOC_ORIGN_DESC { get; set; }

        [StringLength(100)]
        public string DOC_ORIGN_CRTE_BY { get; set; }

        public DateTime? DOC_ORIGN_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string DOC_ORIGN_MOD_BY { get; set; }

        public DateTime? DOC_ORIGN_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DOC_ORIGN_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_TXN_DOC> MS_ACCT_TXN_DOC { get; set; }
    }
}
