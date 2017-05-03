namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACCTS_INTEGRATION")]
    public partial class MS_ACCTS_INTEGRATION:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int INT_SYS_ID { get; set; }
        
        public int? INT_TXN_SOURCE { get; set; }

        [StringLength(15)]
        public string INT_CUST_TYPE { get; set; }

        [StringLength(15)]
        public string INT_CUST_TYPE_REF { get; set; }

        [StringLength(15)]
        public string INT_INS_TXN_TYPE { get; set; }

        [StringLength(15)]
        public string INT_BIZ_SOURCE { get; set; }

        [StringLength(15)]
        public string INT_INS_SOURCE { get; set; }

        [StringLength(15)]
        public string INT_OFFICE { get; set; }

        [StringLength(15)]
        public string INT_PRODUCT { get; set; }

        [StringLength(15)]
        public string INT_FWD_DEBTT_ACCT { get; set; }

        [StringLength(200)]
        public string INT_FWD_DEBIT_NARRATION { get; set; }

        [StringLength(15)]
        public string INT_FWD_DEBIT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_FWD_CREDIT_ACCT { get; set; }

        [StringLength(200)]
        public string INT_FWD_CREDIT_NARRATION { get; set; }

        [StringLength(15)]
        public string INT_FWD_CREDIT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_RVSE_DEBTT_ACCT { get; set; }

        [StringLength(200)]
        public string INT_RVSE_DEBIT_NARRATION { get; set; }

        [StringLength(15)]
        public string INT_RVSE_DEBIT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_RVSE_CREDIT_ACCT { get; set; }

        [StringLength(200)]
        public string INT_RVSE_CREDIT_NARRATION { get; set; }

        [StringLength(15)]
        public string INT_RVSE_CREDIT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_FWD_SUB_ACCOUNT { get; set; }

        [StringLength(200)]
        public string INT_FWD_SUB_ACCT_NARRATION { get; set; }

        [StringLength(15)]
        public string INT_FWD_SUB_ACCT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_RVSE_SUB_ACCOUNT { get; set; }

        [StringLength(15)]
        public string INT_RVSE_SUB_ACCT_DOC { get; set; }

        [StringLength(15)]
        public string INT_RVSE_SUB_ACCT_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string INT_CRTE_BY { get; set; }

        public DateTime? INT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INT_MOD_BY { get; set; }

        public DateTime? INT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INT_STATUS { get; set; }

        [StringLength(1)]
        public string INT_ACTIVE_YN { get; set; }

        public virtual MS_ACCT_INS_TXN_TYPE MS_ACCT_INS_TXN_TYPE { get; set; }

        public virtual MS_SYS_CUST_TYPES MS_SYS_CUST_TYPES { get; set; }

        public virtual MS_SYS_SOURCE_BUSINESS MS_SYS_SOURCE_BUSINESS { get; set; }

        public virtual MS_SYS_ACCEPTANCE_TYPES MS_SYS_ACCEPTANCE_TYPES { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
