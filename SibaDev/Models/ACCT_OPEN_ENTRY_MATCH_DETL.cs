namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.ACCT_OPEN_ENTRY_MATCH_DETL")]
    public partial class ACCT_OPEN_ENTRY_MATCH_DETL:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MA_SYS_ID { get; set; }


        public int MA_TXN_SYS_ID { get; set; }

        [StringLength(15)]
        public string MA_TXN_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string MA_TXN_DOC_NO { get; set; }

        
        public int MA_REF_SYS_ID { get; set; }

        [StringLength(15)]
        public string MA_REF_DOC_TYPE { get; set; }

        [StringLength(15)]
        public string MA_REF_DOC_NO { get; set; }

        [StringLength(15)]
        public string MA_MAIN_ACCT { get; set; }

        [StringLength(15)]
        public string MA_SUB_ACCT { get; set; }

        public DateTime? MA_REF_DOC_DATE { get; set; }

        [StringLength(5)]
        public string MA_REF_CURRENCY { get; set; }

        public decimal? MA_REF_CURR_RATE { get; set; }

        public decimal? MA_MATCHED_FC_AMT { get; set; }

        public decimal? MA_MATCHED_BC_AMT { get; set; }

        [StringLength(2)]
        public string MA_REF_DR_CR { get; set; }

        public DateTime? MA_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string MA_MOD_BY { get; set; }

        public DateTime? MA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MA_STATUS { get; set; }
    }
}
