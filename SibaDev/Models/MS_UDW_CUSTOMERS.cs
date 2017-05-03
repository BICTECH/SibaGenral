namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_UDW_CUSTOMERS")]
    public partial class MS_UDW_CUSTOMERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_UDW_CUSTOMERS()
        {
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            MS_UDW_INTERMEDIARY_COMM = new HashSet<MS_UDW_INTERMEDIARY_COMM>();
        }

        [Key]
        [StringLength(15)]
        public string CUS_CODE { get; set; }


        [StringLength(15)]
        public string CUS_TYPE_CODE { get; set; }

        [Required]
        [StringLength(30)]
        public string CUS_FIRST_NAME { get; set; }

        [StringLength(30)]
        public string CUS_LAST_NAME { get; set; }

        [StringLength(30)]
        public string CUS_OTHER_NAME { get; set; }

        [StringLength(40)]
        public string CUS_ADDRS1 { get; set; }

        [StringLength(40)]
        public string CUS_ADDRS2 { get; set; }

        [StringLength(40)]
        public string CUS_BANK_NAME { get; set; }

        [StringLength(40)]
        public string CUS_ACC_NUM { get; set; }

        [StringLength(20)]
        public string CUS_PHONE1 { get; set; }

        [StringLength(20)]
        public string CUS_MOBILE { get; set; }

        [StringLength(30)]
        public string CUS_EMAIL { get; set; }

        [StringLength(30)]
        public string CUS_PROFESSION { get; set; }

        [StringLength(1)]
        public string CUS_GENDER { get; set; }

        public DateTime? CUS_DOB { get; set; }

        [StringLength(20)]
        public string CUS_TITLE { get; set; }

        [StringLength(25)]
        public string CUS_PIN_NO { get; set; }

        [StringLength(40)]
        public string CUS_BANK_BRANCH { get; set; }

        [StringLength(30)]
        public string CUS_CRTE_BY { get; set; }

        public DateTime? CUS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CUS_MOD_BY { get; set; }

        public DateTime? CUS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CUS_STATUS { get; set; }

        [StringLength(100)]
        public string CUS_OFFICIAL_NAME { get; set; }

        public virtual MS_SYS_CUST_TYPES MS_SYS_CUST_TYPES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_UDW_INTERMEDIARY_COMM> MS_UDW_INTERMEDIARY_COMM { get; set; }
    }
}
