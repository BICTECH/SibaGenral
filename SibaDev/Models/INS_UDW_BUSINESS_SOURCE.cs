namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_BUSINESS_SOURCE")]
    public partial class INS_UDW_BUSINESS_SOURCE:Model
    {
        [Key]
        [StringLength(15)]
        public string BUSS_CODE { get; set; }

        [StringLength(50)]
        public string BUSS_NAME { get; set; }

        [StringLength(100)]
        public string BUSS_DESC { get; set; }

        [StringLength(50)]
        public string BUSS_CRTE_BY { get; set; }

        public DateTime? BUS_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string BUSS_MOD_BY { get; set; }

        public DateTime? BUSS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string BUSS_STATUS { get; set; }
    }
}
