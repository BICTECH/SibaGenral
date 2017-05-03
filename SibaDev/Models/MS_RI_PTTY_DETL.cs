namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_PTTY_DETL")]
    public partial class MS_RI_PTTY_DETL: Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_RI_PTTY_DETL()
        {
            MS_RI_PTTY_COMPANY = new HashSet<MS_RI_PTTY_COMPANY>();
            //MS_RI_PTTY_SUBCLASS = new HashSet<MS_RI_PTTY_SUBCLASS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TD_SYS_ID { get; set; }

        public int? TD_TH_SYS_ID { get; set; }

        [StringLength(15)]
        public string TD_TTY_CODE { get; set; }

        public short? TD_SEQ { get; set; }

        [StringLength(2)]
        public string TD_TTY_TYPE { get; set; }

        [StringLength(2)]
        public string TD_CESS_TYPE { get; set; }

        public decimal? TD_OR_LIMIT { get; set; }

        public int? TD_NO_LINES { get; set; }

        public decimal? TD_TTY_LIMIT { get; set; }

        public decimal? TD_PROFIT_COMM { get; set; }

        public decimal? TD_MGT_EXP_RATIO { get; set; }

        public decimal? TD_PREM_RSVE_RATIO { get; set; }

        public decimal? TD_OS_CLM_RSVE_RATIO { get; set; }

        public decimal? TD_DEPOSIT_PREM { get; set; }

        public decimal? TD_EST_PREM { get; set; }

        public decimal? TD_CASH_CALL_LIMIT { get; set; }

        public decimal? TD_CLM_ADVICE_LIMIT { get; set; }

        public decimal? TD_LOSS_CFWD_YEARS { get; set; }

        [StringLength(15)]
        public string TD_CRTE_BY { get; set; }

        public DateTime? TD_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TD_MOD_BY { get; set; }

        public DateTime? TD_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TD_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_RI_PTTY_COMPANY> MS_RI_PTTY_COMPANY { get; set; }

        public virtual MS_RI_PTTY_HEAD MS_RI_PTTY_HEAD { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<MS_RI_PTTY_SUBCLASS> MS_RI_PTTY_SUBCLASS { get; set; }
    }
}
