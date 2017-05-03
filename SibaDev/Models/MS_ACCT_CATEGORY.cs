namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_CATEGORY")]
    public partial class MS_ACCT_CATEGORY:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_ACCT_CATEGORY()
        {
            MS_ACCT_MAIN_ACCOUNT = new HashSet<MS_ACCT_MAIN_ACCOUNT>();
        }

        [Key]
        [StringLength(15)]
        public string ACAT_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string ACAT_NAME { get; set; }

        [StringLength(1000)]
        public string ACAT_DESC { get; set; }

        [StringLength(15)]
        public string ACAT_CRTE_BY { get; set; }

        public DateTime? ACAT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ACAT_MOD_BY { get; set; }

        public DateTime? ACAT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACAT_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_MAIN_ACCOUNT> MS_ACCT_MAIN_ACCOUNT { get; set; }
    }
}
