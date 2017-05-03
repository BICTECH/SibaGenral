namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_VEHICLE_RISK")]
    public partial class INS_UWD_VEHICLE_RISK:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UWD_VEHICLE_RISK()
        {
            INS_UDW_RISK_ACCESSORIES = new HashSet<INS_UDW_RISK_ACCESSORIES>();
            INS_UDW_RISK_DISCLOAD = new HashSet<INS_UDW_RISK_DISCLOAD>();
            INS_UDW_RISK_EXCESS = new HashSet<INS_UDW_RISK_EXCESS>();
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
            INS_UDW_VEHICLE_FEES = new HashSet<INS_UDW_VEHICLE_FEES>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int VEH_SYS_ID { get; set; }

        public int? VEH_POLH_SYS_ID { get; set; }

        public int? VEH_POLH_DOC_NO { get; set; }

        public int? VEH_POLH_END_NO { get; set; }

        public int? VEH_RISK_NO { get; set; }

        public DateTime? VEH_ISSUE_DATE { get; set; }

        public DateTime? VEH_RETROS_DATE { get; set; }

        public DateTime? VEH_START_DATE { get; set; }

        public DateTime? VEH_END_DATE { get; set; }

        public int? VEH_PERIOD_DAYS { get; set; }

        public int? VEH_UW_YEAR { get; set; }

        [StringLength(5)]
        public string VEH_CURRENCY { get; set; }

        public decimal? VEH_CURR_RATE { get; set; }

        [StringLength(15)]
        public string VEH_PRODUCT_CODE { get; set; }

        [StringLength(15)]
        public string VEH_COVER_CODE { get; set; }

        [StringLength(15)]
        public string VEH_USAGE_CODE { get; set; }

        [StringLength(15)]
        public string VEH_VEH_REG_NO { get; set; }

        [StringLength(15)]
        public string VEH_MAKE { get; set; }

        [StringLength(15)]
        public string VEH_MODEL { get; set; }

        [StringLength(15)]
        public string VEH_BODY_TYPE { get; set; }

        public int? VEH_MANUFACTURE_YR { get; set; }

        [StringLength(30)]
        public string VEH_CHASSIS_NO { get; set; }

        [StringLength(15)]
        public string VEH_CUBIC_CAP { get; set; }

        public int? VEH_PASSENGERS { get; set; }

        [StringLength(5)]
        public string VEH_EXCESS_APP { get; set; }

        public long? VEH_EXCESS_PERC { get; set; }

        public long? VEH_EXCESS_MIN { get; set; }

        public long? VEH_EXCESS_MAX { get; set; }

        public long? VEH_EXCESS_FIX { get; set; }

        [StringLength(1)]
        public string VEH_EXTRA_TPPD { get; set; }

        [StringLength(1)]
        public string VEH_TP_INTEREST { get; set; }

        [StringLength(30)]
        public string VEH_TP_DETAILS { get; set; }

        [StringLength(1)]
        public string VEH_PROP_DECLINED { get; set; }

        [StringLength(30)]
        public string VEH_DECLINED_REASON { get; set; }

        [StringLength(1)]
        public string VEH_POL_CANCELLED { get; set; }

        [StringLength(30)]
        public string VEH_CANCELLED_REASON { get; set; }

        public decimal? VEH_SI_FC { get; set; }

        public decimal? VEH_SI_BC { get; set; }

        public decimal? VEH_TOT_PREM_FC { get; set; }

        public decimal? VEH_TOT_PREM_BC { get; set; }

        [StringLength(1)]
        public string VEH_RI_APPLICABLE { get; set; }

        public DateTime? VEH_RI_EFF_DATE { get; set; }

        public decimal? VEH_RI_SI_FC { get; set; }

        public decimal? VEH_RI_SI_BC { get; set; }

        public decimal? VEH_RI_PREM_FC { get; set; }

        public decimal? VEH_RI_PREM_BC { get; set; }

        public decimal? VEH_RISK_PREM_FC { get; set; }

        public decimal? VEH_TP_PREM_BC { get; set; }

        public decimal? VEH_ADJ_PREM_FC { get; set; }

        public decimal? VEH_ADJ_PREM_BC { get; set; }

        public decimal? VEH_DISC_FC { get; set; }

        public decimal? VEH_DISC_BC { get; set; }

        public decimal? VEH_LOAD_FC { get; set; }

        public decimal? VEH_LOAD_BC { get; set; }

        public decimal? VEH_COMP_FEE_FC { get; set; }

        public decimal? VEH_COMP_FEE_BC { get; set; }

        public decimal? VEH_COMMISSION_FC { get; set; }

        public decimal? VEH_COMMISSION_BC { get; set; }

        [StringLength(1)]
        public string VEH_TXN_STATUS { get; set; }

        [StringLength(1)]
        public string VEH_RISK_STATE { get; set; }

        [StringLength(1)]
        public string VEH_RENEWAL_STATUS { get; set; }

        [StringLength(1)]
        public string VEH_END_TYPE { get; set; }

        public DateTime? VEH_APPROVE_DATE { get; set; }

        public DateTime? VEH_ACCT_DATE { get; set; }

        [StringLength(15)]
        public string VEH_CRTE_BY { get; set; }

        public DateTime? VEH_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string VEH_MOD_BY { get; set; }

        public DateTime? VEH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string VEH_STATUS { get; set; }

        [StringLength(15)]
        public string VEH_RISK_CODE { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_RISK_ACCESSORIES> INS_UDW_RISK_ACCESSORIES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_RISK_DISCLOAD> INS_UDW_RISK_DISCLOAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_RISK_EXCESS> INS_UDW_RISK_EXCESS { get; set; }


        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }


        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_VEHICLE_FEES> INS_UDW_VEHICLE_FEES { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }

        public virtual MS_UDW_MOTOR_RISK MS_UDW_MOTOR_RISK { get; set; }

        public virtual MS_UDW_MAKE_MODEL MS_UDW_MAKE_MODEL { get; set; }

        public virtual MS_UDW_MAKE MS_UDW_MAKE { get; set; }
    }
}
