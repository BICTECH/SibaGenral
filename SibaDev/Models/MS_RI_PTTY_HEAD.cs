namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_RI_PTTY_HEAD")]
    public partial class MS_RI_PTTY_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_RI_PTTY_HEAD()
        {
            MS_RI_PTTY_DETL = new HashSet<MS_RI_PTTY_DETL>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TH_SYS_ID { get; set; }
        

        [StringLength(15)]
        public string TH_CODE { get; set; }

        [StringLength(15)]
        public string TH_TTY_CODE { get; set; }

        public short? TH_UWYR { get; set; }

        public DateTime? TH_SART_DATE { get; set; }

        public DateTime? TH_END_DATE { get; set; }

        [StringLength(10)]
        public string TH_CURRENCY { get; set; }

        public decimal? TH_CUR_RATE { get; set; }

        [StringLength(1)]
        public string TH_QS_YN { get; set; }

        public decimal? TH_QS_PERC { get; set; }

        [StringLength(1)]
        public string TH_UW_BASIS { get; set; }

        [StringLength(1)]
        public string TH_TTY_PRME_BASIS { get; set; }

        [StringLength(1)]
        public string TH_RI_LEVEL { get; set; }

        [StringLength(1)]
        public string TH_WAR_YN { get; set; }

        [StringLength(15)]
        public string TH_CRTE_BY { get; set; }

        public DateTime? TH_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TH_MOD_BY { get; set; }

        public DateTime? TH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TH_STATUS { get; set; }

        public MS_RI_GROUP_HEAD MS_RI_GROUP_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_RI_PTTY_DETL> MS_RI_PTTY_DETL { get; set; }

    }
}
