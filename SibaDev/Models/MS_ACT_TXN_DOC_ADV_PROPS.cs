namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_TXN_DOC_ADV_PROPS")]
    public partial class MS_ACT_TXN_DOC_ADV_PROPS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DAP_SYS_ID { get; set; }

        [StringLength(15)]
        public string DAP_ATD_CODE { get; set; }

        [StringLength(1)]
        public string DAP_ALW_BCK_DATE_YN { get; set; }

        [StringLength(1)]
        public string DAP_ALW_FUTRE_DATE_YN { get; set; }

        public int? DAP_BACK_DAYS { get; set; }

        public int? DAP_FUTRE_DAYS { get; set; }

        [StringLength(1)]
        public string DAP_LOG_TRAILS_YN { get; set; }

        [StringLength(100)]
        public string DAP_CRTE_BY { get; set; }

        public DateTime? DAP_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string DAP_MOD_BY { get; set; }

        public DateTime? DAP_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DAP_STATUS { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }
    }
}
