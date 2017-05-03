namespace SibaDev.Models
{
    using System; 
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_POL_FEES")]
    public partial class INS_UDW_POL_FEES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int POL_FEE_SYS_ID { get; set; }

        [Required]
        [StringLength(15)]
        public string POL_FEE_CODE { get; set; }

        public decimal? POL_FEE_FC_AMOUNT { get; set; }

        public decimal? POL_FEE_BC_AMOUNT { get; set; }

        public int? POL_FEE_POL_SYS_ID { get; set; }

        public int? POL_FEE_FEE_END_NO { get; set; }

        [StringLength(15)]
        public string POL_FEE_CRTE_BY { get; set; }

        public DateTime? POL_FEE_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string POL_FEE_MOD_BY { get; set; }

        public DateTime? POL_FEE_MOD_DATE { get; set; }

        [StringLength(1)]
        public string POL_FEE_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
