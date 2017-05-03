namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_ACT_DOC_NO_GEN")]
    public partial class MS_ACT_DOC_NO_GEN:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DNG_SYS_ID { get; set; }

        public int? DNG_ACNT_YEAR { get; set; }

        public DateTime? DNG_FROM_DATE { get; set; }

        public DateTime? DNG_TO_DATE { get; set; }

        public int? DNG_STRT_NO { get; set; }

        public int? DNG_CUR_NO { get; set; }

        public int? DNG_NXT_NO { get; set; }

        public long? DNG_END_NO { get; set; }

        [StringLength(1)]
        public string DNG_SEPARATOR { get; set; }

        [StringLength(5)]
        public string DNG_PREF { get; set; }

        [StringLength(5)]
        public string DNG_SUFX { get; set; }

        [StringLength(1)]
        public string DNG_APND_CNTRY_YN { get; set; }

        [StringLength(1)]
        public string DNG_APND_REG_YN { get; set; }

        [StringLength(1)]
        public string DNG_APND_OFF_YN { get; set; }

        [StringLength(1)]
        public string DNG_APND_DEP_YN { get; set; }

        [StringLength(15)]
        public string DNG_ATD_CODE { get; set; }

        [StringLength(100)]
        public string DNG_CRTE_BY { get; set; }

        public DateTime? DNG_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string DNG_MOD_BY { get; set; }

        public DateTime? DNG_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DNG_STATUS { get; set; }

        public virtual MS_ACCT_TXN_DOC MS_ACCT_TXN_DOC { get; set; }
    }
}
