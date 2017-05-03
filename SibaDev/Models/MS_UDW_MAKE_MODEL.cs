namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_MAKE_MODEL")]
    public partial class MS_UDW_MAKE_MODEL:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_MAKE_MODEL()
        {
            INS_UWD_VEHICLE_RISK = new HashSet<INS_UWD_VEHICLE_RISK>();
        }

        [Key]
        [StringLength(15)]
        public string MMO_CODE { get; set; }

        [Required]
        [StringLength(40)]
        public string MMO_NAME { get; set; }

        [StringLength(100)]
        public string MMO_DESC { get; set; }

        public decimal? MMO_LOAD_TONNAGE { get; set; }

        public decimal? MMO_CUBIC_CAPACITY { get; set; }

        public long? MMO_PASSENGERS { get; set; }

        [StringLength(40)]
        public string MMO_USAGE { get; set; }

        [StringLength(20)]
        public string MMO_CHASSIS_NUM { get; set; }

        [StringLength(10)]
        public string MMO_FUEL_TYPE { get; set; }

        [StringLength(25)]
        public string MMO_BODY_TYPE { get; set; }

        public int? MMO_YEAR_MFG { get; set; }

        [StringLength(30)]
        public string MMO_CRTE_BY { get; set; }

        public DateTime? MMO_CRTE_DATE { get; set; }

        [StringLength(40)]
        public string MMO_MOD_BY { get; set; }

        public DateTime? MMO_MOD_DATE { get; set; }

        [StringLength(1)]
        public string MMO_STATUS { get; set; }

        [StringLength(15)]
        public string MMO_MAK_CODE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_VEHICLE_RISK> INS_UWD_VEHICLE_RISK { get; set; }
    }
}
