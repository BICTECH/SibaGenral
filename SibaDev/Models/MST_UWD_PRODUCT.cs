namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MST_UWD_PRODUCT")]
    public partial class MST_UWD_PRODUCT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MST_UWD_PRODUCT()
        {
            MS_ACCTS_INTEGRATION = new HashSet<MS_ACCTS_INTEGRATION>();
            MS_INTERMEDIARY_COMM = new HashSet<MS_INTERMEDIARY_COMM>();
            MS_UDW_INTERMEDIARY_COMM = new HashSet<MS_UDW_INTERMEDIARY_COMM>();
            MST_UWD_PRODUCT_COND_CLAUSES = new HashSet<MST_UWD_PRODUCT_COND_CLAUSES>();
            MST_UWD_PRODUCT_COVERS = new HashSet<MST_UWD_PRODUCT_COVERS>();
            MST_UWD_PRODUCT_LOAD_DISCOUNT = new HashSet<MST_UWD_PRODUCT_LOAD_DISCOUNT>();
            INS_UWD_POLICY_HEAD = new HashSet<INS_UWD_POLICY_HEAD>();
            //MS_MOTOR_PROD = new HashSet<MS_MOTOR_PROD>();
        }

        [Key]
        [StringLength(15)]
        public string PDT_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string PDT_NAME { get; set; }

        [StringLength(100)]
        public string PDT_DESC { get; set; }

        [StringLength(15)]
        public string PDT_CLASS { get; set; }

        [StringLength(15)]
        public string PDT_SUB_CLASS { get; set; }

        [StringLength(1)]
        public string PDT_RI_LEVEL { get; set; }

        [StringLength(15)]
        public string PDT_TERM { get; set; }

        [StringLength(30)]
        public string PDT_CRTE_BY { get; set; }

        public DateTime? PDT_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string PDT_MOD_BY { get; set; }

        public DateTime? PPDT_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PDT_STATUS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_INTERMEDIARY_COMM> MS_INTERMEDIARY_COMM { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<MS_MOTOR_PROD> MS_MOTOR_PROD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MS_UDW_INTERMEDIARY_COMM> MS_UDW_INTERMEDIARY_COMM { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT_COND_CLAUSES> MST_UWD_PRODUCT_COND_CLAUSES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT_COVERS> MST_UWD_PRODUCT_COVERS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MST_UWD_PRODUCT_LOAD_DISCOUNT> MST_UWD_PRODUCT_LOAD_DISCOUNT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }

        public virtual MS_UDW_CLASS_OF_BUSINESS MS_UDW_CLASS_OF_BUSINESS { get; set; }
    }
}
