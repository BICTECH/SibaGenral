namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_RISK_COVERS")]
    public partial class INS_UWD_RISK_COVERS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UWD_RISK_COVERS()
        {
            INS_UDW_COVER_DISCLOAD = new HashSet<INS_UDW_COVER_DISCLOAD>();
            INS_UDW_COVER_EXCESS = new HashSet<INS_UDW_COVER_EXCESS>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int RCOV_SYS_ID { get; set; }

        public int? RCOV_RISK_SYS_ID { get; set; }

        public int? RCOV_RISK_NO { get; set; }

        public int? RCOV_POLH_DOC_NO { get; set; }

        public int? RPCOV_END_NO { get; set; }

        [StringLength(15)]
        public string RCOV_CODE { get; set; }

        public decimal? RCOV_SI_FC { get; set; }

        public decimal? RCOV_SI_BC { get; set; }

        public decimal? RCOV_RATE { get; set; }

        public decimal? RCOV_GROSS_PREM_FC { get; set; }

        public decimal? RCOV_ANNL_PREM_BC { get; set; }

        public decimal? RCOV_ANNL_PREM_FC { get; set; }

        public decimal? RCOV_GROSS_PREM_BC { get; set; }

        public decimal? RCOV_NET_PREM_FC { get; set; }

        public decimal? RCOV_NET_PREM_BC { get; set; }

        [StringLength(1)]
        public string RCOV_RI_SI_YN { get; set; }

        [StringLength(1)]
        public string RCOV_RI_PREM_YN { get; set; }

        [StringLength(30)]
        public string RCOV_TYPE { get; set; }

        [StringLength(1)]
        public string RCOV_DISC_YN { get; set; }

        public decimal? RCOV_DISC_FC { get; set; }

        public decimal? RCOV_DISC_BC { get; set; }

        [StringLength(1)]
        public string RCOV_LOAD_YN { get; set; }

        public decimal? RCOV_LOAD_FC { get; set; }

        public decimal? RCOV_LOAD_BC { get; set; }

        [StringLength(1)]
        public string RCOV_TXN_STATE { get; set; }

        [StringLength(15)]
        public string RCOV_CRTE_BY { get; set; }

        public DateTime? RCOV_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string RCOV_MOD_BY { get; set; }

        public DateTime? RCOV_MOD_DATE { get; set; }

        [StringLength(1)]
        public string RCOV_STATUS { get; set; }

        public int? RCOV_NO { get; set; }

        [StringLength(50)]
        public string RCOV_NAME { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_COVER_DISCLOAD> INS_UDW_COVER_DISCLOAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_COVER_EXCESS> INS_UDW_COVER_EXCESS { get; set; }

        public virtual INS_UWD_VEHICLE_RISK INS_UWD_VEHICLE_RISK { get; set; }

        public virtual INS_UDW_BONDS INS_UDW_BONDS { get; set; }

        public virtual INS_UDW_TRAVEL_RISK INS_UDW_TRAVEL_RISK { get; set; }

        public virtual INS_UWD_FIRE_LOCINT INS_UWD_FIRE_LOCINT { get; set; }

        public virtual MS_UDW_COVERS MS_UDW_COVERS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
