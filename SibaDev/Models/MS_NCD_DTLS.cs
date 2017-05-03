namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_NCD_DTLS")]
    public partial class MS_NCD_DTLS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NCD_DTLS_SYS_ID { get; set; }

        public int? NCD_DTLS_NCD_SYS_ID { get; set; }

        [StringLength(15)]
        public string NCD_DTLS_PRD_CODE { get; set; }

        [StringLength(4)]
        public string NCD_DTLS_FROM_YEAR { get; set; }

        [StringLength(4)]
        public string NCD_DTLS_TO_YEAR { get; set; }

        public decimal? NCD_DTLS_PERC { get; set; }

        [StringLength(15)]
        public string NCD_DTLS_CRTE_BY { get; set; }

        public DateTime? NCD_DTLS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string NCD_DTLS_MOD_BY { get; set; }

        public DateTime? NCD_DTLS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string NCD_DTLS_STATUS { get; set; }

        public virtual MS_NCD_RISKS MS_NCD_RISKS { get; set; }
    }
}
