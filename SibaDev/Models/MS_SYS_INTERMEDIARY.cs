namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_INTERMEDIARY")]
    public partial class MS_SYS_INTERMEDIARY:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_INTERMEDIARY()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MS_INTERMEDIARY_COMM = new HashSet<MS_INTERMEDIARY_COMM>();
            INS_UWD_INTERMEDIARY_COMM = new HashSet<INS_UWD_INTERMEDIARY_COMM>();
        }

        [Key]
        [StringLength(5)]
        public string INT_CODE { get; set; }
        
        [StringLength(15)]
        public string INT_CMP_CODE { get; set; }

        [Required]
        [StringLength(15)]
        public string INT_OFF_CODE { get; set; }

        [StringLength(100)]
        public string INT_OFFICIAL_NAME { get; set; }

        [StringLength(40)]
        public string INT_POSTAL_ADDRS { get; set; }

        [StringLength(40)]
        public string INT_HOME_ADDRS { get; set; }

        [StringLength(20)]
        public string INT_PHONE1 { get; set; }

        [StringLength(20)]
        public string INT_MOBILE { get; set; }

        [StringLength(30)]
        public string INT_AREA_NAME { get; set; }

        [StringLength(100)]
        public string INT_CONTACT_PERS { get; set; }

        [StringLength(20)]
        public string INT_PHONE { get; set; }

        [StringLength(40)]
        public string INT_EMAIL { get; set; }

        [StringLength(20)]
        public string INT_FAX { get; set; }

        [StringLength(30)]
        public string INT_BANK_NUMBER { get; set; }

        [StringLength(50)]
        public string INT_BANK_NAME { get; set; }

        [StringLength(40)]
        public string INT_BANK_BRANCH { get; set; }

        [StringLength(30)]
        public string INT_CITY_NAME { get; set; }

        [StringLength(1)]
        public string INT_GENDER { get; set; }

        [StringLength(15)]
        public string INT_ID1_TYPE { get; set; }

        public int? INT_ID1_NO { get; set; }

        [StringLength(15)]
        public string INT_ID2_TYPE { get; set; }

        public int? INT_ID2_NO { get; set; }

        [StringLength(25)]
        public string INT_TIN_NO { get; set; }

        [StringLength(20)]
        public string INT_REG_NO { get; set; }

        [StringLength(30)]
        public string INT_CRTE_BY { get; set; }

        public DateTime? INT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string INT_MOD_BY { get; set; }

        public DateTime? INT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string INT_STATUS { get; set; }

        [StringLength(15)]
        public string INT_CTP_CODE { get; set; }

        public virtual MS_SYS_CUST_TYPES MS_SYS_CUST_TYPES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_INTERMEDIARY_COMM> MS_INTERMEDIARY_COMM { get; set; } 

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_INTERMEDIARY_COMM> INS_UWD_INTERMEDIARY_COMM { get; set; } 
    }
}
