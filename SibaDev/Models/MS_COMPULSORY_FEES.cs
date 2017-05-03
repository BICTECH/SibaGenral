namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_COMPULSORY_FEES")]
    public partial class MS_COMPULSORY_FEES : Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_COMPULSORY_FEES()
        {
            MS_MOTOR_RISK_FEES = new HashSet<MS_MOTOR_RISK_FEES>();
            INS_UDW_VEHICLE_FEES = new HashSet<INS_UDW_VEHICLE_FEES>();
            MS_PRODUCT_RISK_FEES = new HashSet<MS_PRODUCT_RISK_FEES>();
        }

        [Key]
        [StringLength(15)]
        public string FEE_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string FEE_NAME { get; set; }

        [StringLength(200)]
        public string FEE_DESC { get; set; }      

        public decimal? FEE_AMOUNT { get; set; }
        
        [StringLength(1)]
        public string FEE_MODIFY_YN { get; set; }

        [StringLength(1)]
        public string FEE_REFUND_YN { get; set; }

        [StringLength(15)]
        public string FEE_MAIN_ACCOUNT { get; set; }

        [StringLength(15)]
        public string FEE_SUB_ACCOUNT { get; set; }      

        public DateTime? FEE_FROM_DATE { get; set; }

        public DateTime? FEE_TO_DATE { get; set; }

        [StringLength(15)]
        public string FEE_CRTE_BY { get; set; }

        public DateTime? FEE_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string FEE_MOD_BY { get; set; }

        public DateTime? FEE_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FEE_STATUS { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_MOTOR_RISK_FEES> MS_MOTOR_RISK_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_VEHICLE_FEES> INS_UDW_VEHICLE_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_PRODUCT_RISK_FEES> MS_PRODUCT_RISK_FEES { get; set; }
    }
}
