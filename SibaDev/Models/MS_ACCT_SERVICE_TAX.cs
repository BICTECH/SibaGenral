namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCT_SERVICE_TAX")]
    public partial class MS_ACCT_SERVICE_TAX:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TX_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string TX_TAX_CODE { get; set; }

        [StringLength(50)]
        public string TX_TAX_NAME { get; set; }

        [StringLength(15)]
        public string TX_CUST_CAT_CODE { get; set; }

        public DateTime? TX_FROM_DATE { get; set; }

        public DateTime? TX_TO_DATE { get; set; }

        public decimal? TX_TAX_PERC { get; set; }

        public decimal? TX_MIN_TAX_APP { get; set; }

        [StringLength(15)]
        public string TX_CRTE_BY { get; set; }

        public DateTime? TX_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TX_MOD_BY { get; set; }

        public DateTime? TX_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TX_STATUS { get; set; }

        [StringLength(15)]
        public string TX_MAIN_ACCT_CODE { get; set; }
        
        [StringLength(15)]
        public string TX_SUB_ACCT_CODE { get; set; }
        
        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_CUSTOMER_CATEGORY MS_CUSTOMER_CATEGORY { get; set; }
    }
}
