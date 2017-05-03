namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_ENDORSEMENTS")]
    public partial class MS_UDW_ENDORSEMENTS
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int END_SYS_ID { get; set; }

        public int? END_ET_SYS_ID { get; set; }

        [StringLength(15)]
        public string END_CODE { get; set; }

        [StringLength(15)]
        public string END_TYPE_CODE { get; set; }

        [StringLength(200)]
        public string END_NAME { get; set; }

        [StringLength(200)]
        public string END_TEXT_DESC { get; set; }

        [StringLength(1)]
        public string END_PREM_CHANGE_YN { get; set; }

        [StringLength(1)]
        public string END_FLAG { get; set; }

        [StringLength(15)]
        public string END_CRTE_BY { get; set; }

        public DateTime? END_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string END_MOD_BY { get; set; }

        public DateTime? END_MOD_DATE { get; set; }

        [StringLength(1)]
        public string END_STATUS { get; set; }

        public virtual MS_UDW_ENDORSEMENTS_TYPE MS_UDW_ENDORSEMENTS_TYPE { get; set; }
    }
}
