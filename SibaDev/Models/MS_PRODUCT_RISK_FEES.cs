namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_PRODUCT_RISK_FEES")]
    public partial class MS_PRODUCT_RISK_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PRF_SYS_ID { get; set; }

        [StringLength(15)]
        public string PRF_FEE_CODE { get; set; }

        [StringLength(15)]
        public string PRF_PDT_CODE { get; set; }

        [StringLength(15)]
        public string PRF_FEE_AMOUNT { get; set; }

        [StringLength(15)]
        public string PRF_CRTE_BY { get; set; }

        public DateTime? PRF_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string PRF_MOD_BY { get; set; }

        public DateTime? PRF_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PRF_STATUS { get; set; }

        public virtual MS_COMPULSORY_FEES MS_COMPULSORY_FEES { get; set; }
    }
}
