namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_NCD_RISKS")]
    public partial class MS_NCD_RISKS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_NCD_RISKS()
        {
            MS_NCD_BASIS = new HashSet<MS_NCD_BASIS>();
            MS_NCD_DTLS = new HashSet<MS_NCD_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NCD_SYS_ID { get; set; }

        [StringLength(15)]
        public string NCD_CODE { get; set; }

        [StringLength(100)]
        public string NCD_DESC { get; set; }

        [StringLength(15)]
        public string NCD_CRTE_BY { get; set; }

        public DateTime? NCD_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string NCD_MOD_BY { get; set; }

        public DateTime? NCD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string NCD_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_NCD_BASIS> MS_NCD_BASIS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_NCD_DTLS> MS_NCD_DTLS { get; set; }
    }
}
