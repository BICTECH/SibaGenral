namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_UWD_HINTERMEDIARY_COMM")]
    public partial class INS_UWD_HINTERMEDIARY_COMM:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CMM_HSYS_ID { get; set; }

        public long CMM_SYS_ID { get; set; }

        public int? CMM_POL_SYS_ID { get; set; }

        public int? CMM_END_NO { get; set; }

        [StringLength(15)]
        public string CMM_COB_CODE { get; set; }

        [StringLength(15)]
        public string CMM_OFFICE { get; set; }

        [StringLength(15)]
        public string CMM_INT_CODE { get; set; }

        public decimal? CMM_COM_PERC { get; set; }

        public decimal? CMM_PREM_AMT_FC { get; set; }

        public decimal? CMM_PREM_AMT_BC { get; set; }

        public decimal? CMM_COM_AMT_FC { get; set; }

        public decimal? CMM_COM_AMT_BC { get; set; }

        public DateTime? CMM_POST_DATE { get; set; }

        [StringLength(15)]
        public string CMM_CRTE_BY { get; set; }

        public DateTime? CMM_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string CMM_MOD_BY { get; set; }

        public DateTime? CMM_MOD_DATE { get; set; }

        [StringLength(1)]
        public string CMM_STATUS { get; set; }
    }
}
