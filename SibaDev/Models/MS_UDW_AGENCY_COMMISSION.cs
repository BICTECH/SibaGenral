namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_AGENCY_COMMISSION")]
    public partial class MS_UDW_AGENCY_COMMISSION:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int COM_SYS_ID { get; set; }

        [Required]
        [StringLength(10)]
        public string COM_CODE { get; set; }

        [Required]
        [StringLength(10)]
        public string COM_NAME { get; set; }

        public decimal COM_PERC { get; set; }

        public short? COM_SEQNUM { get; set; }

        [StringLength(100)]
        public string COM_DESC { get; set; }

        [StringLength(10)]
        public string COM_BPARTY_TYPE { get; set; }

        [StringLength(10)]
        public string COM_CPARTY_TYPE { get; set; }

        [StringLength(30)]
        public string COM_CRTE_BY { get; set; }

        public DateTime? COM_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string COM_MOD_BY { get; set; }

        public DateTime? COM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string COM_STATUS { get; set; }
    }
}
