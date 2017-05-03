namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CLM_EST_HEAD")]
    public partial class CLM_EST_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CLM_EST_HEAD()
        {
            CLM_EST_BONDS_RISK_DTLS = new HashSet<CLM_EST_BONDS_RISK_DTLS>();
            CLM_EST_DTLS = new HashSet<CLM_EST_DTLS>();
            CLM_EST_FIRE_RISK_DTLS = new HashSet<CLM_EST_FIRE_RISK_DTLS>();
            CLM_EST_RISK_DTLS = new HashSet<CLM_EST_RISK_DTLS>();
            CLM_EST_TRAVEL_RISK_DTLS = new HashSet<CLM_EST_TRAVEL_RISK_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLM_SYS_ID { get; set; }

        [StringLength(15)]
        public string CLM_OFF_CODE { get; set; }

        public int CLM_POLH_SYS_ID { get; set; }

        public DateTime? CLM_LOSS_DATE { get; set; }

        public DateTime? CLM_DISC_DATE { get; set; }

        public DateTime? CLM_REP_DATE { get; set; }

        public DateTime? CLM_TXN_DATE { get; set; }

        [StringLength(15)]
        public string CLM_LOSS_CODE { get; set; }

        [StringLength(100)]
        public string CLM_LOSS_PLACE { get; set; }

        [StringLength(100)]
        public string CLM_REMARKS { get; set; }

        [StringLength(15)]
        public string CLM_N0 { get; set; }

        [StringLength(100)]
        public string CLM_CLT_CODE { get; set; }

        [StringLength(1)]
        public string CLM_TIME_BRD { get; set; }

        [StringLength(1)]
        public string CLM_WART_BRCH { get; set; }

        [StringLength(1)]
        public string CLM_RPDT { get; set; }

        [StringLength(1)]
        public string CLM_CAT { get; set; }

        [StringLength(15)]
        public string CLM_CAT_EVNT_CODE { get; set; }

        [StringLength(15)]
        public string CLM_CRTE_BY { get; set; }

        public DateTime? CLM_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_MOD_BY { get; set; }

        public DateTime? CLM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CLM_STATUS { get; set; }

        [StringLength(100)]
        public string CLM_CLT_NAME { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_BONDS_RISK_DTLS> CLM_EST_BONDS_RISK_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_DTLS> CLM_EST_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_FIRE_RISK_DTLS> CLM_EST_FIRE_RISK_DTLS { get; set; }

        public virtual MS_CLM_CAUSE_LOSS MS_CLM_CAUSE_LOSS { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }

        public virtual MS_CLM_CAT_EVENT MS_CLM_CAT_EVENT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_RISK_DTLS> CLM_EST_RISK_DTLS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_TRAVEL_RISK_DTLS> CLM_EST_TRAVEL_RISK_DTLS { get; set; }
    }
}
