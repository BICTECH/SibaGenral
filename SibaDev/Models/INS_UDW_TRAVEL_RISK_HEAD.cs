namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_TRAVEL_RISK_HEAD")]
    public partial class INS_UDW_TRAVEL_RISK_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_TRAVEL_RISK_HEAD()
        {
            INS_UDW_TRAVEL_RISK = new HashSet<INS_UDW_TRAVEL_RISK>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TRAH_SYS_ID { get; set; }

        public int? TRAH_POLH_SYS_ID { get; set; }

        [StringLength(30)]
        public string TRAH_POLH_DOC_NO { get; set; }

        [StringLength(30)]
        public string TRAH_POLH_END_NO { get; set; }

        [Required]
        [StringLength(15)]
        public string TRAH_RISK_CODE { get; set; }

        [Required]
        [StringLength(30)]
        public string TRAH_RISK_NAME { get; set; }

        [StringLength(15)]
        public string TRAH_CURRENCY { get; set; }

        public int? TRAH_CURRENCY_RATE { get; set; }

        [StringLength(30)]
        public string TRAH_COVERAGE { get; set; }

        [StringLength(30)]
        public string TRAH_PLAN { get; set; }

        [StringLength(30)]
        public string TRAH_VISA_TYPE { get; set; }

        public DateTime? TRAH_START_DATE { get; set; }

        public DateTime? TRAH_END_DATE { get; set; }

        [StringLength(15)]
        public string TRAH_DAYS { get; set; }

        [StringLength(15)]
        public string TRAH_WEEKS { get; set; }

        [StringLength(20)]
        public string TRAH_EMB_NAME { get; set; }

        [StringLength(20)]
        public string TRAH_EMB_COUNTRY { get; set; }

        public decimal? TRAH_EMB_CONTACT { get; set; }

        [StringLength(30)]
        public string TRAH_EMB_ADDRESS { get; set; }

        [StringLength(30)]
        public string TRAH_CRTE_BY { get; set; }

        public DateTime? TRAH_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TRAH_MOD_BY { get; set; }

        public DateTime? TRAH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TRAH_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_TRAVEL_RISK> INS_UDW_TRAVEL_RISK { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
