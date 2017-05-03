namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_CLM_CAT_EVENT")]
    public partial class MS_CLM_CAT_EVENT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_CLM_CAT_EVENT()
        {
            CLM_EST_HEAD = new HashSet<CLM_EST_HEAD>();
        }

        [Key]
        [StringLength(15)]
        public string CLM_CAT_CODE { get; set; }

        [StringLength(50)]
        public string CLM_CAT_NAME { get; set; }

        [StringLength(100)]
        public string CLM_CAT_DESC { get; set; }

        [StringLength(30)]
        public string CLM_CAT_CRTE_BY { get; set; }

        public DateTime? CLM_CAT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_CAT_MOD_BY { get; set; }

        public DateTime? CLM_CAT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_CAT_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_HEAD> CLM_EST_HEAD { get; set; }
    }
}
