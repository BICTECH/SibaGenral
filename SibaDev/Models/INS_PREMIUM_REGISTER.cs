namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_PREMIUM_REGISTER")]
    public partial class INS_PREMIUM_REGISTER:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PR_SYS_ID { get; set; }

        public int? PR_POL_SYS_ID { get; set; }

        public int? PR_END_NO { get; set; }

        [StringLength(15)]
        public string PR_OFFICE { get; set; }

        [StringLength(15)]
        public string PR_COB { get; set; }

        [StringLength(15)]
        public string PR_CUST_CODE { get; set; }

        [StringLength(15)]
        public string PR_INS_SOURCE { get; set; }

        [StringLength(15)]
        public string PR_BUS_SOURCE { get; set; }

        [StringLength(15)]
        public string PR_TTY_SOURCE { get; set; }

        [StringLength(15)]
        public string PR_UWD_ACCT_TYPE { get; set; }

        [StringLength(15)]
        public string PR_CUST_ACCT { get; set; }

        [StringLength(5)]
        public string PR_CURRENCY { get; set; }

        public decimal? PR_FX_RATE { get; set; }

        public decimal? PR_FC_AMOUNT { get; set; }

        public decimal? PR_BC_AMOUNT { get; set; }

       
        public int? PR_TXN_REF { get; set; }

        [StringLength(1)]
        public string PR_ACCT_YN { get; set; }

        public DateTime? PR_POST_DATE { get; set; }

        [StringLength(15)]
        public string PR_CRTE_BY { get; set; }

        public DateTime? PR_CRTE_DATE { get; set; }

        [StringLength(1)]
        public string PR_STATUS { get; set; }
    }
}
