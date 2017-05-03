namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_CUSTOMER_CATEGORY")]
    public partial class MS_CUSTOMER_CATEGORY:Model
    {

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MS_CUSTOMER_CATEGORY()
        {
            MS_SYS_CUST_TYPES = new HashSet<MS_SYS_CUST_TYPES>();
            MS_ACCT_SERVICE_TAX = new HashSet<MS_ACCT_SERVICE_TAX>();
        }

        [Key]
        [StringLength(15)]
        public string CUS_CAT_CODE { get; set; }

        [Required]
        [StringLength(250)]
        public string CUS_CAT_NAME { get; set; }

        [StringLength(1)]
        public string CUS_CAT_INTERM_YN { get; set; }

        [StringLength(15)]
        public string CUS_CAT_MAIN_ACCT { get; set; }

        [StringLength(15)]
        public string CUS_CAT_SUB_ACCT { get; set; }

        public DateTime? CUS_CAT_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CUS_CAT_CRTE_BY { get; set; }

        public DateTime? CUS_CAT_MOD_DATE { get; set; }

        [StringLength(15)]
        public string CUS_CAT_MOD_BY { get; set; }

        [StringLength(1)]
        public string CUS_CAT_STATUS { get; set; }

        public virtual MS_ACCT_MAIN_ACCOUNT MS_ACCT_MAIN_ACCOUNT { get; set; }

        public virtual MS_ACCT_SUB_ACCOUNT MS_ACCT_SUB_ACCOUNT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_SYS_CUST_TYPES> MS_SYS_CUST_TYPES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCT_SERVICE_TAX> MS_ACCT_SERVICE_TAX { get; set; }
    }
}
