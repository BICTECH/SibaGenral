namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_MAIN_ACCT_COMPANY")]
    public partial class MS_MAIN_ACCT_COMPANY:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ACOM_SYS_ID { get; set; }

        [StringLength(15)]
        public string ACOM_CODE { get; set; }

        [StringLength(15)]
        public string ACOM_ACCT_CODE { get; set; }

        [StringLength(100)]
        public string ACOM_CRTE_BY { get; set; }

        public DateTime? ACOM_CRTE_DATE { get; set; }

        [StringLength(100)]
        public string ACOM_MOD_BY { get; set; }

        public DateTime? ACOMT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string ACOM_STATUS { get; set; }
    }
}
