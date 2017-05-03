namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_TTY_HEAD")]
    public partial class INS_RI_TTY_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_RI_TTY_HEAD()
        {
            INS_RI_TTY_ALLOCATION = new HashSet<INS_RI_TTY_ALLOCATION>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TTH_SYS_ID { get; set; }

        public int TTH_POLH_SYS_ID { get; set; }

        public int? TTH_POLH_END_NO { get; set; }

        public int? TTH_RISK_SYS_ID { get; set; }

        public int? TTH_RISK_END_NO { get; set; }

        public int? TTH_LOC_SYS_ID { get; set; }

        public int? TTH_LOC_END_NO { get; set; }

        [StringLength(50)]
        public string TTH_REF_ID { get; set; }

        [StringLength(30)]
        public string TTH_COMB_LOC_ID { get; set; }

        [StringLength(15)]
        public string TTH_CLASS_CODE { get; set; }

        [StringLength(15)]
        public string TTH_SC_CODE { get; set; }

        [StringLength(50)]
        public string TTH_POLNUM { get; set; }

        [StringLength(15)]
        public string TTH_INS_SRCE { get; set; }

        public DateTime? TTH_FROM_DATE { get; set; }

        public DateTime? TTH_TO_DATE { get; set; }

        public short? TTH_UW_YEAR { get; set; }

        public decimal? TTH_TOTAL_SI_FC { get; set; }

        public decimal? TTH_TOTAL_SI_BC { get; set; }

        public decimal? TTH_TOTAL_PREM_FC { get; set; }

        public decimal? TTH_TOTAL_PREM_BC { get; set; }

        public decimal? TTH_RI_SI_FC { get; set; }

        public decimal? TTH_RI_SI_BC { get; set; }

        public decimal? TTH_RI_PREM_FC { get; set; }

        public decimal? TTH_RI_PREM_BC { get; set; }

        [StringLength(1)]
        public string TTH_ADJ_YN { get; set; }

        public decimal? TTH_EML_PERC { get; set; }

        [StringLength(1)]
        public string TTH_RI_ACC_YN { get; set; }

        public decimal? TTH_ACC_SI_FC { get; set; }

        public decimal? TTH_ACC_SI_BC { get; set; }

        [StringLength(15)]
        public string TTH_CRTE_BY { get; set; }

        public DateTime? TTH_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TTH_MOD_BY { get; set; }

        public DateTime? TTH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TTH_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_RI_TTY_ALLOCATION> INS_RI_TTY_ALLOCATION { get; set; }
    }
}
