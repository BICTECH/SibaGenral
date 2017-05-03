namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_NO_CLAIM_DISCOUNT")]
    public partial class MS_NO_CLAIM_DISCOUNT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_NO_CLAIM_DISCOUNT()
        {
            MS_NCD_RISKS = new HashSet<MS_NCD_RISKS>();
        }

        [Key]
        [StringLength(15)]
        public string NCD_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string NCD_NAME { get; set; }

        [StringLength(200)]
        public string NCD_DESC { get; set; }

        public decimal? NCD_PERC { get; set; }

        [StringLength(1)]
        public string NCD_MODIFY_YN { get; set; }

        public int? NCD_YEAR { get; set; }

        [StringLength(1)]
        public string NCD_STEP_BACK_YN { get; set; }

        [StringLength(15)]
        public string NCD_CRTE_BY { get; set; }

        public DateTime? NCD_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string NCD_MOD_BY { get; set; }

        public DateTime? NCD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string NCD_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_NCD_RISKS> MS_NCD_RISKS { get; set; }
    }
}
