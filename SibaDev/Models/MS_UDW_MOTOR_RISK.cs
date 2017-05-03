namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_MOTOR_RISK")]
    public partial class MS_UDW_MOTOR_RISK:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_MOTOR_RISK()
        {
            //MS_MOTOR_PROD_RISK = new HashSet<MS_MOTOR_PROD_RISK>();
            //MS_NCD_RISKS = new HashSet<MS_NCD_RISKS>();
            INS_UWD_VEHICLE_RISK = new HashSet<INS_UWD_VEHICLE_RISK>();
            MS_MOTOR_PROD_RISK = new HashSet<MS_MOTOR_PROD_RISK>();
        }

        [Key]
        [StringLength(15)]
        public string MRK_CODE { get; set; }

        [Required]
        [StringLength(30)]
        public string MRK_NAME { get; set; }

        [StringLength(1000)]
        public string MRK_DESCRIPTION { get; set; }

        [StringLength(1000)]
        public string MRK_ENT_TO_DRIVE { get; set; }

        [StringLength(1000)]
        public string MRK_LIMT_USE { get; set; }

        [StringLength(1000)]
        public string MRK_DOES_NOT_COV { get; set; }

        [StringLength(1000)]
        public string MRK_O_D_E { get; set; }

        [StringLength(30)]
        public string MRK_CRTE_BY { get; set; }

        public DateTime? MRK_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string MRK_MOD_BY { get; set; }

        public DateTime? MRK_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MRK_STATUS { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<MS_MOTOR_PROD_RISK> MS_MOTOR_PROD_RISK { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<MS_NCD_RISKS> MS_NCD_RISKS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_VEHICLE_RISK> INS_UWD_VEHICLE_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_MOTOR_PROD_RISK> MS_MOTOR_PROD_RISK { get; set; }
    }
}
