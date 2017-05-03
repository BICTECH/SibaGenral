namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_INTERMEDIARY_COMM")]
    public partial class MS_UDW_INTERMEDIARY_COMM:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int COM_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string COM_INT_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string COM_PROD_CODE { get; set; }

        public decimal? COM_DFT_PERC { get; set; }

        public decimal? COM_NEW_PERC { get; set; }

        public decimal? COM_RENEWAL_PERC { get; set; }

        public decimal? COM_ENDORSE_PERC { get; set; }

        public DateTime? COM_FROM_DATE { get; set; }

        public DateTime? COM_TO_DATE { get; set; }

        [StringLength(15)]
        public string COM_CRTE_BY { get; set; }

        public DateTime? COM_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string COM_MOD_BY { get; set; }

        public DateTime? COM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string COM_STATUS { get; set; }

        [StringLength(1)]
        public string COM_ACTIVE_YN { get; set; }

        public virtual MS_UDW_CUSTOMERS MS_UDW_CUSTOMERS { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }
    }
}
