namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PA_INDIVIDUAL")]
    public partial class INS_UDW_PA_INDIVIDUAL:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PA_IND_SYS_ID { get; set; }

        public int? PA_IND_PA_SYS_ID { get; set; }

        public int? PA_IND_POLH_SYS_ID { get; set; }

        public int? PA_IND_POLH_DOC_NO { get; set; }

        public int? PA_IND_POLH_END_NO { get; set; }

        [StringLength(50)]
        public string PA_IND_RISK_CLASSCODE { get; set; }

        public DateTime? PA_IND_ISSUE_DATE { get; set; }

        public DateTime? PA_IND_RETRO_DATE { get; set; }

        [StringLength(50)]
        public string PA_IND_RISK_CLASSNAME { get; set; }

        [StringLength(100)]
        public string PA_IND_NAME_INSURED { get; set; }

        public DateTime? PA_IND_DOB { get; set; }

        public byte? PA_IND_AGE { get; set; }

        [StringLength(1)]
        public string PA_IND_GENDER { get; set; }

        [StringLength(100)]
        public string PA_IND_NAME_NOMINEE { get; set; }

        [StringLength(20)]
        public string PA_IND_RELATION { get; set; }

        public decimal? PA_IND_EARNING { get; set; }

        public decimal? PA_IND_MONTHLY_INCOME { get; set; }

        [StringLength(50)]
        public string PA_IND_JOB_TYPE { get; set; }

        public decimal? PA_IND_RATE { get; set; }

        public short? PA_IND_WEEKS { get; set; }

        public decimal? PA_IND_WEEKLY_BENEFIT { get; set; }

        [StringLength(100)]
        public string PA_IND_DESCRIPTION { get; set; }

        [StringLength(10)]
        public string PA_IND_CRTE_BY { get; set; }

        public DateTime? PA_IND_CRTE_DATE { get; set; }

        [StringLength(10)]
        public string PA_IND_MOD_BY { get; set; }

        public DateTime? PA_IND_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PA_IND_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
