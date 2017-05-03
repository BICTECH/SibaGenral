namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CLM_EST_DTLS")]
    public partial class CLM_EST_DTLS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CLM_EST_DTLS()
        {
            CLM_EST_EXPENSE = new HashSet<CLM_EST_EXPENSE>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLM_EST_SYS_ID { get; set; }

        public int CLM_EST_RISK_SYS_ID { get; set; }

        [StringLength(15)]
        public string CLM_EST_TYPE { get; set; }

        [StringLength(30)]
        public string CLM_EST_NAME { get; set; }

        public decimal? CLM_EST_AMT { get; set; }

        public decimal? CLM_EST_OS_AMT { get; set; }

        [StringLength(15)]
        public string CLM_EST_CRTE_BY { get; set; }

        public DateTime? CLM_EST_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_EST_MOD_BY { get; set; }

        public DateTime? CLM_EST_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_EST_STATUS { get; set; }

        public int? CLM_EST_CLM_SYS_ID { get; set; }

        public virtual CLM_EST_BONDS_RISK_DTLS CLM_EST_BONDS_RISK_DTLS { get; set; }

        public virtual CLM_EST_HEAD CLM_EST_HEAD { get; set; }

        public virtual MS_CLM_EST_TYPE MS_CLM_EST_TYPE { get; set; }

        public virtual CLM_EST_FIRE_RISK_DTLS CLM_EST_FIRE_RISK_DTLS { get; set; }

        public virtual CLM_EST_TRAVEL_RISK_DTLS CLM_EST_TRAVEL_RISK_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_EXPENSE> CLM_EST_EXPENSE { get; set; }
    }
}
