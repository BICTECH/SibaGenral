namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_GROUP_DETL")]
    public partial class MS_RI_GROUP_DETL:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GD_SYS_ID { get; set; }

        [StringLength(15)]
        public string GD_GP_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string GD_SUB_CLASS { get; set; }

        [StringLength(1)]
        public string GD_EML_YN { get; set; }

        public decimal? GD_PML_PERC { get; set; }

        [StringLength(15)]
        public string GD_CRTE_BY { get; set; }

        public DateTime? GD_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string GD_MOD_BY { get; set; }

        public DateTime? GD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string GD_STATUS { get; set; }

        public virtual MS_RI_GROUP_HEAD MS_RI_GROUP_HEAD { get; set; }
    }
}
