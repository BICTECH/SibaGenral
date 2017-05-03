namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_GROUP_HEAD")]
    public partial class MS_RI_GROUP_HEAD: Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_RI_GROUP_HEAD()
        {
            MS_RI_GROUP_DETL = new HashSet<MS_RI_GROUP_DETL>();
            MS_RI_PTTY_HEAD = new HashSet<MS_RI_PTTY_HEAD>();
        }
        [Key]
        [StringLength(15)]
        public string GP_CODE { get; set; }

        [Required]
        [StringLength(1)]
        public string GP_TTY_TYPE { get; set; }
        

        [Required]
        [StringLength(50)]
        public string GP_NAME { get; set; }


        [StringLength(100)]
        public string GP_DESC { get; set; }

        [StringLength(15)]
        public string GP_CRTE_BY { get; set; }

        public DateTime? GP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string GP_MOD_BY { get; set; }

        public DateTime? GP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string GP_STATUS { get; set; }

        [StringLength(1)]
        public string GP_CONFIRM { get; set; }

        public int? GP_UW_YEAR { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_RI_GROUP_DETL> MS_RI_GROUP_DETL { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_RI_PTTY_HEAD> MS_RI_PTTY_HEAD { get; set; }
    }
}
