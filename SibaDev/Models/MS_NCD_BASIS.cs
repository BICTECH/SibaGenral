namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_NCD_BASIS")]
    public partial class MS_NCD_BASIS:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CFB_SYS_ID { get; set; }

        public int? CFB_NCD_SYS_ID { get; set; }

        [StringLength(1)]
        public string CFB_RUN_BASIS { get; set; }

        [StringLength(4)]
        public string CFB_RUN_YEAR { get; set; }

        [StringLength(4)]
        public string CFB_NO_CLMS { get; set; }

        public short? CFB_STP_BACK { get; set; }

        [StringLength(15)]
        public string CFB_CRTE_BY { get; set; }

        public DateTime? CFB_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CFB_MOD_BY { get; set; }

        public DateTime? CFB_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CFB_STATUS { get; set; }

        public virtual MS_NCD_RISKS MS_NCD_RISKS { get; set; }
    }
}
