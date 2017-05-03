namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_USERS")]
    public partial class MS_SYS_USERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_SYS_USERS()
        {
            MS_ACT_TXN_DOC_ACCS_RGHTS = new HashSet<MS_ACT_TXN_DOC_ACCS_RGHTS>();
        }

        [Key]
        [StringLength(15)]
        public string USR_CODE { get; set; }

        [Required]
        [StringLength(100)]
        public string USR_F_NAME { get; set; }

        [StringLength(100)]
        public string USR_L_NAME { get; set; }

        [StringLength(100)]
        public string USR_M_NAME { get; set; }

        [StringLength(100)]
        public string USR_FULL_NAME { get; set; }

        [StringLength(1)]
        public string USR_GENDER { get; set; }

        [StringLength(50)]
        public string USR_RESID_ADD { get; set; }

        [StringLength(50)]
        public string USR_POST_ADD { get; set; }

        [StringLength(5)]
        public string USR_ZIP_CODE { get; set; }

        public DateTime? USR_BIRTH_DATE { get; set; }

        public DateTime? USR_JOIN_DATE { get; set; }

        public DateTime? USR_EXIT_DATE { get; set; }

        [StringLength(20)]
        public string USR_COUNTRY { get; set; }

        [StringLength(20)]
        public string USR_LOCATION { get; set; }

        [StringLength(20)]
        public string USR_POSITION { get; set; }

        [StringLength(20)]
        public string USR_GRADE { get; set; }

        [StringLength(20)]
        public string USR_ROLE { get; set; }

        [StringLength(20)]
        public string USR_REPORTS_TO { get; set; }

        [StringLength(50)]
        public string USR_PROFILE_IMG { get; set; }

        [StringLength(40)]
        public string USR_EMAIL { get; set; }

        [StringLength(150)]
        public string USR_PASSWD1 { get; set; }

        [StringLength(150)]
        public string USR_SALT { get; set; }

        [StringLength(20)]
        public string USR_PHONE_NUMBER1 { get; set; }

        [StringLength(20)]
        public string USR_PHONE_NUMBER2 { get; set; }

        [StringLength(30)]
        public string USR_CRTE_BY { get; set; }

        public DateTime? USR_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string USR_MOD_BY { get; set; }

        public DateTime? USR_MOD_DATE { get; set; }

        [StringLength(1)]
        public string USR_STATUS { get; set; }

        [StringLength(150)]
        public string USR_RECOV_TOKEN { get; set; }

        [StringLength(1)]
        public string USR_LGIN_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACT_TXN_DOC_ACCS_RGHTS> MS_ACT_TXN_DOC_ACCS_RGHTS { get; set; }
    }
}
