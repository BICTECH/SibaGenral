namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.ACCT_TXN_OPEN_ENTRY")]
    public partial class ACCT_TXN_OPEN_ENTRY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OE_SYS_ID { get; set; }
        
        public int? OE_TXN_REF_ID { get; set; }

        [StringLength(10)]
        public string OE_R_BATCH_ID { get; set; }

        [StringLength(15)]
        public string OE_DOC_TYPE { get; set; }

        //[StringLength(15)]
        //public string OE_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string OE_DOC_NO { get; set; }

        public short? OE_LINE_NO { get; set; }

        public DateTime? OE_DOC_DATE { get; set; }

        public DateTime? OE_DUE_DATE { get; set; }

        [StringLength(15)]
        public string OE_CUST_CODE { get; set; }

        [StringLength(15)]
        public string OE_MAIN_ACCT_CODE { get; set; }

        [StringLength(15)]
        public string OE_SUB_ACCT_CODE { get; set; }

        [StringLength(2)]
        public string OE_DR_CR { get; set; }

        [StringLength(15)]
        public string OE_OFFICE_CODE { get; set; }

        [StringLength(5)]
        public string OE_CURR_CODE { get; set; }

        public decimal? OE_CURR_RATE { get; set; }

        public decimal? OE_ORGNL_FC_AMT { get; set; }

        public decimal? OE_ORGNL_BC_AMT { get; set; }

        public decimal? OE_ADJ_FC_AMT { get; set; }

        public decimal? OE_ADJ_BC_AMT { get; set; }

        public decimal? OE_UNPOST_ADJ_FC_AMT { get; set; }

        public decimal? OE_UNPOST_ADJ_BC_AMT { get; set; }

        public short? OE_ACCT_YEAR { get; set; }

        public byte? OE_DOC_CAL_MONTH { get; set; }

        [StringLength(12)]
        public string OE_CRTE_BY { get; set; }

        public DateTime? OE_CRTE_DATE { get; set; }

        [StringLength(12)]
        public string OE_MOD_BY { get; set; }

        public DateTime? OE_MOD_DATE { get; set; }
    }
}
