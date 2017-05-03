namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Linq;

    [Table("DEVSIBAINS.INS_UWD_POLICY_HEAD")]
    public partial class INS_UWD_POLICY_HEAD:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UWD_POLICY_HEAD()
        {
            //INSURANCE_LEDGER = new HashSet<INSURANCE_LEDGER>();
            INS_GA_ASSET_ALL_RISK = new HashSet<INS_GA_ASSET_ALL_RISK>();
            INS_GA_ASSET_TRANSIT = new HashSet<INS_GA_ASSET_TRANSIT>();
            INS_GA_PROF_INDEMNITY = new HashSet<INS_GA_PROF_INDEMNITY>();
            INS_UDW_AGENCY_COMM = new HashSet<INS_UDW_AGENCY_COMM>();
            INS_UDW_BONDS = new HashSet<INS_UDW_BONDS>();
            INS_UDW_CARCON_INTEREST = new HashSet<INS_UDW_CARCON_INTEREST>();
            INS_UDW_CPM_INTEREST = new HashSet<INS_UDW_CPM_INTEREST>();
            INS_UDW_EAR_CPM_INTEREST = new HashSet<INS_UDW_EAR_CPM_INTEREST>();
            INS_UDW_EAR_INTEREST = new HashSet<INS_UDW_EAR_INTEREST>();
            INS_UDW_EAR_PERIOD_DATES = new HashSet<INS_UDW_EAR_PERIOD_DATES>();
            INS_UDW_ENGINEER = new HashSet<INS_UDW_ENGINEER>();
            INS_UDW_FIRE_LOCINT_COVER = new HashSet<INS_UDW_FIRE_LOCINT_COVER>();
            INS_UDW_FIRE_LOCINT_DISCLOAD = new HashSet<INS_UDW_FIRE_LOCINT_DISCLOAD>();
            INS_UDW_FIRE_LOCINT_EXCESS = new HashSet<INS_UDW_FIRE_LOCINT_EXCESS>();
            INS_UDW_FIRE_LOCRISK_EXCESS = new HashSet<INS_UDW_FIRE_LOCRISK_EXCESS>();
            INS_UDW_GENERAL_ACCIDENT = new HashSet<INS_UDW_GENERAL_ACCIDENT>();
            INS_UDW_LIABILITY = new HashSet<INS_UDW_LIABILITY>();
            INS_UDW_PA_GROUP_NAMED = new HashSet<INS_UDW_PA_GROUP_NAMED>();
            INS_UDW_PA_GROUP_UNAMED = new HashSet<INS_UDW_PA_GROUP_UNAMED>();
            INS_UDW_PA_INDIVIDUAL = new HashSet<INS_UDW_PA_INDIVIDUAL>();
            INS_UDW_PERSONAL_ACCIDENT = new HashSet<INS_UDW_PERSONAL_ACCIDENT>();
            INS_UDW_POLICY_DISCLOAD = new HashSet<INS_UDW_POLICY_DISCLOAD>();
            INS_UDW_POLICY_EXCESS = new HashSet<INS_UDW_POLICY_EXCESS>();
            INS_UDW_TRAVEL_RISK = new HashSet<INS_UDW_TRAVEL_RISK>();
            INS_UDW_TRAVEL_RISK_HEAD = new HashSet<INS_UDW_TRAVEL_RISK_HEAD>();
            INS_UWD_FIRE_LOCINT = new HashSet<INS_UWD_FIRE_LOCINT>();
            INS_UWD_FIRE_LOCRISK = new HashSet<INS_UWD_FIRE_LOCRISK>();
            INS_UWD_VEHICLE_RISK = new HashSet<INS_UWD_VEHICLE_RISK>();
            INS_UDW_POL_FEES = new HashSet<INS_UDW_POL_FEES>();
            INS_UWD_INTERMEDIARY_COMM = new HashSet<INS_UWD_INTERMEDIARY_COMM>();
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();
            INS_UDW_BOND_FEES = new HashSet<INS_UDW_BOND_FEES>();
            INS_UDW_FIRE_FEES = new HashSet<INS_UDW_FIRE_FEES>();
            INS_UDW_TRAVEL_FEES = new HashSet<INS_UDW_TRAVEL_FEES>();

            INS_RI_FAC_INWARD = new HashSet<INS_RI_FAC_INWARD>();
            INS_RI_FAC_OUTWARD = new HashSet<INS_RI_FAC_OUTWARD>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int POLH_SYS_ID { get; set; }

        public decimal? POLH_DOC_NO { get; set; }

        public decimal? POLH_END_NO { get; set; }

        public decimal? POLH_QUT_SER_NO { get; set; }

        public decimal? POLH_POL_SER_NO { get; set; }

        [StringLength(15)]
        public string POLH_OFF_CODE { get; set; }

        [StringLength(15)]
        public string POLH_SUB_CLASS_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CMP_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CHANNEL_CODE { get; set; }

        [StringLength(15)]
        public string POLH_CUST_CODE { get; set; }

        [StringLength(15)]
        public string POLH_INS_SOURCE { get; set; }

        [StringLength(15)]
        public string POLH_BIZ_SOURCE { get; set; }

        [StringLength(15)]
        public string POLH_INTERMIDIARY { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public DateTime? POLH_POL_START_DATE { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public DateTime? POLH_POL_END_DATE { get; set; }

        public int? POLH_POL_DAYS { get; set; }

        public int? POLH_POL_UW_YEAR { get; set; }

        [DisplayFormat(DataFormatString = "{0:N2}")]
        public decimal? POLH_POL_SI_FC { get; set; }

        [DisplayFormat(DataFormatString = "{0:N2}")]
        public decimal? POLH_POL_SI_BC { get; set; }

        [DisplayFormat(DataFormatString = "{0:N2}")]
        public decimal? POLH_POL_PREM_FC { get; set; }

        [DisplayFormat(DataFormatString = "{0:N2}")]
        public decimal? POLH_POL_PREM_BC { get; set; }

        public decimal? POLH_POL_COMM_FC { get; set; }

        public decimal? POLH_POL_COMM_BC { get; set; }

        public decimal? POLH_POL_DISC_FC { get; set; }

        public decimal? POLH_POL_DISC_BC { get; set; }

        public decimal? POLH_POL_LOAD_FC { get; set; }

        public decimal? POLH_POL_LOAD_BC { get; set; }

        public decimal? POLH_COINS_SI_FC { get; set; }

        public decimal? POLH_COINS_SI_BC { get; set; }

        public decimal? POLH_COINS_PREM_FC { get; set; }

        public decimal? POLH_COINS_PREM_BC { get; set; }

        public decimal? POLH_NET_SI_FC { get; set; }

        public decimal? POLH_NET_SI_BC { get; set; }

        public decimal? POLH_NET_PREM_FC { get; set; }

        public decimal? POLH_NET_PREM_BC { get; set; }

        public decimal? POLH_FEE_FC { get; set; }

        public decimal? POLH_FEE_BC { get; set; }

        [StringLength(1)]
        public string POLH_RENEW_SER_NO { get; set; }

        [StringLength(1)]
        public string POLH_TXN_STATE { get; set; }

        [StringLength(15)]
        public string POLH_POL_STATE { get; set; }

        [StringLength(5)]
        public string POLH_END_TYPE { get; set; }

        public DateTime? POLH_APPROVE_DATE { get; set; }

        public DateTime? POLH_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string POLH_DISPLAY_NO { get; set; }

        [StringLength(30)]
        public string POLH_CRTE_BY { get; set; }

        public DateTime? POLH_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string POLH_MOD_BY { get; set; }

        public DateTime? POLH_MOD_DATE { get; set; }

        [StringLength(1)]
        public string POLH_STATUS { get; set; }

        [StringLength(20)]
        public string POLH_CURRENCY { get; set; }

        public decimal? POLH_CURRENCY_RATE { get; set; }

        [StringLength(15)]
        public string POLH_CLASS_CODE { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<INSURANCE_LEDGER> INSURANCE_LEDGER { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_ASSET_ALL_RISK> INS_GA_ASSET_ALL_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_ASSET_TRANSIT> INS_GA_ASSET_TRANSIT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_GA_PROF_INDEMNITY> INS_GA_PROF_INDEMNITY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_AGENCY_COMM> INS_UDW_AGENCY_COMM { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_BONDS> INS_UDW_BONDS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_CARCON_INTEREST> INS_UDW_CARCON_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_CPM_INTEREST> INS_UDW_CPM_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_EAR_CPM_INTEREST> INS_UDW_EAR_CPM_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_EAR_INTEREST> INS_UDW_EAR_INTEREST { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_EAR_PERIOD_DATES> INS_UDW_EAR_PERIOD_DATES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_ENGINEER> INS_UDW_ENGINEER { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCINT_COVER> INS_UDW_FIRE_LOCINT_COVER { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCINT_DISCLOAD> INS_UDW_FIRE_LOCINT_DISCLOAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCINT_EXCESS> INS_UDW_FIRE_LOCINT_EXCESS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_LOCRISK_EXCESS> INS_UDW_FIRE_LOCRISK_EXCESS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_GENERAL_ACCIDENT> INS_UDW_GENERAL_ACCIDENT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_LIABILITY> INS_UDW_LIABILITY { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_PA_GROUP_NAMED> INS_UDW_PA_GROUP_NAMED { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_PA_GROUP_UNAMED> INS_UDW_PA_GROUP_UNAMED { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_PA_INDIVIDUAL> INS_UDW_PA_INDIVIDUAL { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_PERSONAL_ACCIDENT> INS_UDW_PERSONAL_ACCIDENT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_POLICY_DISCLOAD> INS_UDW_POLICY_DISCLOAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_POLICY_EXCESS> INS_UDW_POLICY_EXCESS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_TRAVEL_RISK> INS_UDW_TRAVEL_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_TRAVEL_RISK_HEAD> INS_UDW_TRAVEL_RISK_HEAD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_FIRE_LOCINT> INS_UWD_FIRE_LOCINT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_FIRE_LOCRISK> INS_UWD_FIRE_LOCRISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }

        public virtual MS_SYS_COMPANY MS_SYS_COMPANY { get; set; }

        public virtual MS_SYS_OFFICE MS_SYS_OFFICE { get; set; }

        public virtual MS_UDW_CUSTOMERS MS_UDW_CUSTOMERS { get; set; }

        public virtual MS_SYS_INTERMEDIARY MS_SYS_INTERMEDIARY { get; set; }

        public virtual MS_SYS_EXCHANGE_RATES MS_SYS_EXCHANGE_RATES { get; set; }

        public virtual MS_SYS_SOURCE_BUSINESS MS_SYS_SOURCE_BUSINESS { get; set; }

        public virtual INS_UDW_INSUR_SOURCE INS_UDW_INSUR_SOURCE { get; set; }

        public virtual MS_UDW_COVERS MS_UDW_COVERS { get; set; }

        public virtual MS_SYS_CHANNEL MS_SYS_CHANNEL { get; set; }

        public virtual MST_UWD_PRODUCT MST_UWD_PRODUCT { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_VEHICLE_RISK> INS_UWD_VEHICLE_RISK { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_POL_FEES> INS_UDW_POL_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_INTERMEDIARY_COMM> INS_UWD_INTERMEDIARY_COMM { get; set; }

        public virtual MS_UDW_CLASS_OF_BUSINESS MS_UDW_CLASS_OF_BUSINESS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_BOND_FEES> INS_UDW_BOND_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_FIRE_FEES> INS_UDW_FIRE_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UDW_TRAVEL_FEES> INS_UDW_TRAVEL_FEES { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_RI_FAC_INWARD> INS_RI_FAC_INWARD { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_RI_FAC_OUTWARD> INS_RI_FAC_OUTWARD { get; set; } 

    }
}
