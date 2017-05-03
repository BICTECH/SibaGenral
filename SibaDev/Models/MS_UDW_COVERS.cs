namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_COVERS")]
    public partial class MS_UDW_COVERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_COVERS()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MS_MOTOR_RISK_COVER = new HashSet<MS_MOTOR_RISK_COVER>();
            MST_UWD_PRODUCT_COVERS = new HashSet<MST_UWD_PRODUCT_COVERS>();
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
        }

        [Key]
        [StringLength(15)]
        public string CVR_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string CVR_NAME { get; set; }

        [StringLength(100)]
        public string CVR_DESCRIPTION { get; set; }

        [StringLength(50)]
        public string CVR_TYPE { get; set; }

        [StringLength(1)]
        public string CVR_BASIC_COVER { get; set; }

        [StringLength(1)]
        public string CVR_RATED { get; set; }

        [StringLength(1)]
        public string CVR_RATE_CHANGE { get; set; }

        [StringLength(1)]
        public string CVR_SI_CHANGE { get; set; }

        [StringLength(1)]
        public string CVR_USER_PREMIUM { get; set; }

        [StringLength(1)]
        public string CVR_PREM_REFUND { get; set; }

        [StringLength(1)]
        public string CVR_LEVELS { get; set; }

        [StringLength(1)]
        public string CVR_RI_APPLICABLE { get; set; }

        [StringLength(30)]
        public string CVR_CRTE_BY { get; set; }

        public DateTime? CVR_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string CVR_MOD_BY { get; set; }

        public DateTime? CVR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CVR_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_MOTOR_RISK_COVER> MS_MOTOR_RISK_COVER { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT_COVERS> MST_UWD_PRODUCT_COVERS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }
    }
}
