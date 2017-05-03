namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_FAC_HEAD")]
    public partial class INS_RI_FAC_HEAD : Model
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public INS_RI_FAC_HEAD()
        //{
        //    INS_RI_TTY_ALLOCATION = new HashSet<INS_RI_TTY_ALLOCATION>();
        //}

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FAC_SYS_ID { get; set; }

        public int FAC_TTA_SYS_ID { get; set; }

        public int? FAC_POLH_SYS_ID { get; set; }

        public int? FAC_POLH_END_NO { get; set; }

        public int? FAC_RISK_SYS_ID { get; set; }

        public int? FAC_RISK_END_NO { get; set; }

        public int? FAC_LOC_SYS_ID { get; set; }

        public int? FAC_LOC_END_NO { get; set; }

        [StringLength(50)]
        public string FAC_REF_ID { get; set; }

        [StringLength(30)]
        public string FAC_COMB_LOC_ID { get; set; }

        public short FAC_UWYR { get; set; }

        [StringLength(10)]
        public string FAC_REG { get; set; }

        [StringLength(10)]
        public string FAC_AREA { get; set; }

        [StringLength(10)]
        public string FAC_LOC { get; set; }

        [StringLength(25)]
        public string FAC_SLIP_NO { get; set; }

        public DateTime? FAC_FROM_DATE { get; set; }

        public DateTime? FAC_TO_DATE { get; set; }

        public decimal? FAC_ACCUM_SI { get; set; }

        public decimal? FAC_EXCESS_SI_FC { get; set; }

        public decimal? FAC_EXCESS_SI_BC { get; set; }

        public decimal? FAC_EXCESS_PREM_FC { get; set; }

        public decimal? FAC_EXCESS_PREM_BC { get; set; }

        public decimal? FAC_EXCESS_PERC { get; set; }

        public decimal? FAC_PERC { get; set; }

        public decimal? FAC_SI_FC { get; set; }

        public decimal? FAC_SI_BC { get; set; }

        public decimal? FAC_PREM_FC { get; set; }

        public decimal? FAC_PREM_BC { get; set; }

        [StringLength(40)]
        public string FAC_COMMENTS { get; set; }

        [StringLength(15)]
        public string FAC_CRTE_BY { get; set; }

        public DateTime? FAC_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string FAC_MOD_BY { get; set; }

        public DateTime? FAC_MOD_DATE { get; set; }

        [StringLength(1)]
        public string FAC_STATUS { get; set; }

        [StringLength(1)]
        public string FAC_CLOSE { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<INS_RI_TTY_ALLOCATION> INS_RI_TTY_ALLOCATION { get; set; }
    }
}
