namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_BONDS")]
    public partial class INS_UDW_BONDS:Model
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public INS_UDW_BONDS()
        {        
            INS_UWD_RISK_COVERS = new HashSet<INS_UWD_RISK_COVERS>();         
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int BOND_SYS_ID { get; set; }

        [StringLength(50)]
        public string BOND_LOB { get; set; }

        [StringLength(500)]
        public string BOND_DESCRIPTION { get; set; }

        [StringLength(20)]
        public string BOND_SHT_DESCRIPTION { get; set; }

        [StringLength(20)]
        public string BOND_INS_TYPE { get; set; }

        [StringLength(20)]
        public string BOND_GROUP { get; set; }

        [StringLength(20)]
        public string BOND_CURRENCY { get; set; }

        public decimal? BOND_CURRENCY_RATE { get; set; }

        public DateTime? BOND_START_DATE { get; set; }

        public DateTime? BOND_END_DATE { get; set; }

        public decimal? BOND_TOT_PREM_FC { get; set; }

        public decimal? BOND_TOT_PREM_BC { get; set; }

        public decimal? BOND_SI_FC { get; set; }

        public decimal? BOND_SI_BC { get; set; }

        public decimal? BOND_RISK_PREM_FC { get; set; }

        public decimal? BOND_RISK_PREM_BC { get; set; }

        public decimal? BOND_ADJ_PREM_FC { get; set; }

        public decimal? BOND_ADJ_PREM_BC { get; set; }

        public decimal? BOND_DISC_FC { get; set; }

        public decimal? BOND_DISC_BC { get; set; }

        public decimal? BOND_LOAD_FC { get; set; }

        public decimal? BOND_LOAD_BC { get; set; }

        public decimal? BOND_COMP_FEE_FC { get; set; }

        public decimal? BOND_COMP_FEE_BC { get; set; }

        public decimal? BOND_COMMISSION_FC { get; set; }

        public decimal? BOND_COMMISSION_BC { get; set; }

        [StringLength(20)]
        public string BOND_TXN_STATUS { get; set; }

        [StringLength(20)]
        public string BOND_RISK_STATE { get; set; }

        public int? BOND_RISK_ID { get; set; }

        public int? BOND_POLH_SYS_ID { get; set; }

        public int? BOND_POLH_DOC_NO { get; set; }

        [StringLength(20)]
        public string BOND_POLH_END_NO { get; set; }

        [StringLength(15)]
        public string BOND_PDT_CODE { get; set; }

        [StringLength(15)]
        public string BOND_CVR_CODE { get; set; }

        [StringLength(1)]
        public string BOND_RENEWAL_STATUS { get; set; }

        [StringLength(15)]
        public string BOND_END_TYPE { get; set; }

        public DateTime? BOND_APPROVE_DATE { get; set; }

        public DateTime? BOND_ACCT_DATE { get; set; }

        [StringLength(30)]
        public string BOND_CRTE_BY { get; set; }

        public DateTime? BOND_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string BOND_MOD_BY { get; set; }

        public DateTime? BOND_MOD_DATE { get; set; }

        [StringLength(1)]
        public string BOND_STATUS { get; set; }

        [StringLength(10)]
        public string BOND_PERIOD_DAYS { get; set; }

        [StringLength(10)]
        public string BOND_UW_YEAR { get; set; }

        public int? BOND_RISK_NO { get; set; }

        public decimal? BOND_RI_SI_FC { get; set; }

        public decimal? BOND_RI_SI_BC { get; set; }

        public decimal? BOND_RI_PREM_FC { get; set; }

        public decimal? BOND_RI_PREM_BC { get; set; }

        [StringLength(500)]
        public string BOND_PRINCIPAL { get; set; }

        public decimal? BOND_SUM_INSURED { get; set; }

        public decimal? BOND_PREMIUM_FC { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
