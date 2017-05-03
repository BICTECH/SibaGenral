namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CLM_EST_BONDS_RISK_DTLS")]
    public partial class CLM_EST_BONDS_RISK_DTLS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CLM_EST_BONDS_RISK_DTLS()
        {
            CLM_EST_DTLS = new HashSet<CLM_EST_DTLS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CLM_RISK_SYS_ID { get; set; }

        public int CLM_RISK_CLM_SYS_ID { get; set; }

        [StringLength(500)]
        public string CLM_RISK_DESCRIPTION { get; set; }

        [StringLength(500)]
        public string CLM_RISK_PRINCIPAL { get; set; }

        public decimal? CLM_RISK_SI { get; set; }

        public decimal? CLM_RISK_PRM { get; set; }

        [StringLength(1)]
        public string CLM_RISK_STATUS { get; set; }

        [StringLength(15)]
        public string CLM_RISK_CRTE_BY { get; set; }

        public DateTime? CLM_RISK_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CLM_RISK_MOD_BY { get; set; }

        public DateTime? CLM_RISK_MOD_DATE { get; set; }

        public virtual CLM_EST_HEAD CLM_EST_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CLM_EST_DTLS> CLM_EST_DTLS { get; set; }
    }
}
