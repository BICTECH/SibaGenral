namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_DOCUMENT_TYPES")]
    public partial class MS_SYS_DOCUMENT_TYPES:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_DOCUMENT_TYPES()
        {
            MS_SYS_DOC_CURRENCY = new HashSet<MS_SYS_DOC_CURRENCY>();
            MS_SYS_DOCUMENTS_TYPE_NO_TYPES = new HashSet<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DTY_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string DTY_DOC_TYPE { get; set; }

        [Required]
        [StringLength(40)]
        public string DTY_DOC_DESC { get; set; }

        [Required]
        [StringLength(30)]
        public string DTY_DOC_CATEGORY { get; set; }

        [StringLength(30)]
        public string DTY_JRNL_CATEGORY { get; set; }

        [StringLength(20)]
        public string DTY_TAX { get; set; }

        [StringLength(20)]
        public string DTY_DEFF_ACCT_CODE { get; set; }

        [StringLength(2)]
        public string DTY_INTERBANK_TXN { get; set; }

        [StringLength(1)]
        public string DTY_DOC_CURRENCY { get; set; }

        [StringLength(30)]
        public string DTY_CRTE_BY { get; set; }

        public DateTime? DTY_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string DTY_MOD_BY { get; set; }

        public DateTime? DTY_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DTY_STATUS { get; set; }

        [StringLength(1)]
        public string FOREIGN_CURRENCY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_DOC_CURRENCY> MS_SYS_DOC_CURRENCY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_DOCUMENTS_TYPE_NO_TYPES> MS_SYS_DOCUMENTS_TYPE_NO_TYPES { get; set; }
    }
}
