namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_ENDORSEMENTS_TYPE")]
    public partial class MS_UDW_ENDORSEMENTS_TYPE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_ENDORSEMENTS_TYPE()
        {
            MS_UDW_ENDORSEMENTS = new HashSet<MS_UDW_ENDORSEMENTS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ET_SYS_ID { get; set; }

        [StringLength(15)]
        public string ET_CODE { get; set; }

        [StringLength(200)]
        public string ET_NAME { get; set; }

        [StringLength(200)]
        public string ET_DESC { get; set; }

        public DateTime? ET_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string ET_MOD_BY { get; set; }

        public DateTime? ET_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ET_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_UDW_ENDORSEMENTS> MS_UDW_ENDORSEMENTS { get; set; }
    }
}
