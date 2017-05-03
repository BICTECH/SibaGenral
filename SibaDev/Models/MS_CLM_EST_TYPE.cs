namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_CLM_EST_TYPE")]
    public partial class MS_CLM_EST_TYPE:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_CLM_EST_TYPE()
        {
            CLM_EST_DTLS = new HashSet<CLM_EST_DTLS>();
            CLM_EST_EXPENSE = new HashSet<CLM_EST_EXPENSE>();
        }

        [Key]
        [StringLength(15)]
        public string CLM_EST_TYPE_CODE { get; set; }

        [StringLength(50)]
        public string CLM_EST_TYPE_NAME { get; set; }

        [StringLength(50)]
        public string CLM_EST_TYPE_DESC { get; set; }

        [StringLength(15)]
        public string CLM_EST_TYPE_CRTE_BY { get; set; }

        public DateTime? CLM_EST_TYPE_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_EST_TYPE_MOD_BY { get; set; }

        public DateTime? CLM_EST_TYPE_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_EST_TYPE_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_DTLS> CLM_EST_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_EXPENSE> CLM_EST_EXPENSE { get; set; }
    }
}
