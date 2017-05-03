namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_FIRE_LOCINT")]
    public partial class INS_UWD_FIRE_LOCINT:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UWD_FIRE_LOCINT()
        {
            INS_UDW_FIRE_LOCINT_COVER = new HashSet<INS_UDW_FIRE_LOCINT_COVER>();
            INS_UDW_FIRE_LOCINT_EXCESS = new HashSet<INS_UDW_FIRE_LOCINT_EXCESS>();
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LINT_SYS_ID { get; set; }

        public int? LINT_PLOC_SYS_ID { get; set; }

        public int? LINT_POLH_SYS_ID { get; set; }

        public int? LINT_POLH_DOC_NO { get; set; }

        public int? LINT_POLH_END_NO { get; set; }

        [Required]
        [StringLength(15)]
        public string LINT_RISK_CODE { get; set; }

        [Required]
        [StringLength(50)]
        public string LINT_RISK_NAME { get; set; }

        public int? LINT_RISK_NO { get; set; }

        [StringLength(100)]
        public string LINT_DESC { get; set; }

        public decimal? LINT_SI_FC { get; set; }

        public decimal? LINT_SI_BC { get; set; }

        public decimal? LINT_PRM_FC { get; set; }

        public decimal? LINT_PRM_BC { get; set; }

        [StringLength(1)]
        public string LINT_SUBCONST { get; set; }

        [StringLength(1)]
        public string LINT_PLIN_FOUND { get; set; }

        [StringLength(10)]
        public string LINT_PLIN_FOUND_AMT { get; set; }

        [StringLength(1)]
        public string LINT_ESCALATION { get; set; }

        [StringLength(10)]
        public string LINT_ESC_PERC { get; set; }

        [StringLength(1)]
        public string LINT_TXN_STATUS { get; set; }

        [StringLength(30)]
        public string LINT_RISK_STATE { get; set; }

        [StringLength(1)]
        public string LINT_STATUS { get; set; }

        [StringLength(1)]
        public string LINT_RI_EML { get; set; }

        public decimal? LINT_EML_SI { get; set; }

        public decimal? LINT_LOAD_FC { get; set; }

        public decimal? LINT_LOAD_BC { get; set; }

        public decimal? LINT_DISC_FC { get; set; }

        public decimal? LINT_DISC_BC { get; set; }

        [StringLength(100)]
        public string LINT_CONS_TYPE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCINT_COVER> INS_UDW_FIRE_LOCINT_COVER { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCINT_EXCESS> INS_UDW_FIRE_LOCINT_EXCESS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
