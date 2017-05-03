namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UDW_PA_GROUP_UNAMED")]
    public partial class INS_UDW_PA_GROUP_UNAMED:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PA_GRP_UN_SYS_ID { get; set; }

        public int? PA_GRP_UN_PA_SYS_ID { get; set; }

        public int? PA_GRP_UN_POLH_SYS_ID { get; set; }

        public int? PA_GRP_UN_POLH_DOC_NO { get; set; }

        public int? PA_GRP_UN_POLH_END_NO { get; set; }

        [StringLength(50)]
        public string PA_GRP_UN_RISK_CLASSCODE { get; set; }

        [StringLength(50)]
        public string PA_GRP_UN_RISK_CLASSNAME { get; set; }

        public int? PA_GRP_UN_PERS { get; set; }

        public DateTime? PA_GRP_UN_ISSUE_DATE { get; set; }

        public DateTime? PA_GRP_UN_RETRO_DATE { get; set; }

        public decimal? PA_GRP_UN_ANN_SAL { get; set; }

        public decimal? PA_GRP_UN_TFE_SAL { get; set; }

        public decimal? PA_GRP_UN_ANN_BENCOV { get; set; }

        public decimal? PA_GRP_UN_LIM_EVENT { get; set; }

        public decimal? PA_GRP_UN_LIM_LIFE { get; set; }

        [StringLength(100)]
        public string PA_GRP_UN_OCCUPATION { get; set; }

        [StringLength(100)]
        public string PA_GRP_UN_EXCLUSIONS { get; set; }

        [StringLength(100)]
        public string PA_GRP_UN_DESCRIPTION { get; set; }

        [StringLength(50)]
        public string PA_GRP_UN_CRTE_BY { get; set; }

        public DateTime? PA_GRP_UN_CRTE_DATE { get; set; }

        [StringLength(50)]
        public string PA_GRP_UN_MOD_BY { get; set; }

        public DateTime? PA_GRP_UN_MOD_DATE { get; set; }

        [StringLength(1)]
        public string PA_GRP_UN_STATUS { get; set; }

        public virtual INS_UWD_POLICY_HEAD INS_UWD_POLICY_HEAD { get; set; }
    }
}
