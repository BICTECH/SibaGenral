namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_TTY_ALLOCATION")]
    public partial class INS_RI_TTY_ALLOCATION:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_RI_TTY_ALLOCATION()
        {
            INS_RI_TTY_SHARE = new HashSet<INS_RI_TTY_SHARE>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TTA_SYS_ID { get; set; }

        public int? TTA_TTH_SYS_ID { get; set; }

        public int? TTA_POLH_SYS_ID { get; set; }

        public int? TTA_POLH_END_NO { get; set; }

        public short? TTA_UW_YEAR { get; set; }

        [StringLength(15)]
        public string TTA_TTY_CODE { get; set; }

        [StringLength(2)]
        public string TTA_TTY_TYPE { get; set; }

        [StringLength(30)]
        public string TTA_SLIPNO { get; set; }

        public byte? TTA_SEQ_NO { get; set; }

        [StringLength(1)]
        public string TTA_CLOSE_FLAG { get; set; }

        public decimal? TTA_ALLOC_PERC { get; set; }

        public decimal? TTA_TTY_LIMIT_FC { get; set; }

        public decimal? TTA_TTY_LIMIT_BC { get; set; }

        public decimal? TTA_TTY_SI_FC { get; set; }

        public decimal? TTA_TTY_SI_BC { get; set; }

        public decimal? TTA_TTY_PREM_FC { get; set; }

        public decimal? TTA_TTY_PREM_BC { get; set; }

        public decimal? TTA_TTY_COMM_FC { get; set; }

        public decimal? TTA_TTY_COMM_BC { get; set; }

        [StringLength(15)]
        public string TTA_CRTE_BY { get; set; }

        public DateTime? TTA_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TTA_MOD_BY { get; set; }

        public DateTime? TTA_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TTA_STATUS { get; set; }

        public virtual INS_RI_TTY_HEAD INS_RI_TTY_HEAD { get; set; }

        //public virtual INS_RI_FAC_HEAD INS_RI_FAC_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_RI_TTY_SHARE> INS_RI_TTY_SHARE { get; set; }
    }
}
