namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MOTOR_PROD_RISK")]
    public partial class MS_MOTOR_PROD_RISK:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_MOTOR_PROD_RISK()
        {
            MS_MOTOR_RISK_COVER = new HashSet<MS_MOTOR_RISK_COVER>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MPR_SYS_ID { get; set; }

        [StringLength(15)]
        public string MPR_RISK_CODE { get; set; }

        [StringLength(15)]
        public string MPR_MTP_PRD_CODE { get; set; }

        [StringLength(15)]
        public string MPR_CRTE_BY { get; set; }

        public DateTime? MPR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MPR_MOD_BY { get; set; }

        public DateTime? MPP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MPR_STATUS { get; set; }


        public int? MPR_MTP_SYS_ID { get; set; }

        public virtual MS_MOTOR_PROD MS_MOTOR_PROD { get; set; }

        public virtual MS_UDW_MOTOR_RISK MS_UDW_MOTOR_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_MOTOR_RISK_COVER> MS_MOTOR_RISK_COVER { get; set; }
    }
}
