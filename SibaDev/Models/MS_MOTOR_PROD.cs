namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MOTOR_PROD")]
    public partial class MS_MOTOR_PROD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_MOTOR_PROD()
        {
            MS_MOTOR_PROD_RISK = new HashSet<MS_MOTOR_PROD_RISK>();
        }

        [Required]
        [StringLength(15)]
        public string MTP_PRD_CODE { get; set; }

        [StringLength(15)]
        public string MTP_CRTE_BY { get; set; }

        public DateTime? MTP_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MTP_MOD_BY { get; set; }

        public DateTime? MTP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MTP_STATUS { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MTP_SYS_ID { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_MOTOR_PROD_RISK> MS_MOTOR_PROD_RISK { get; set; }

        //public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
