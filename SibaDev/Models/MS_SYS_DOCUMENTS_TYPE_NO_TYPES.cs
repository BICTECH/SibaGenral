namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_DOCUMENTS_TYPE_NO_TYPES")]
    public partial class MS_SYS_DOCUMENTS_TYPE_NO_TYPES:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DOCNO_SYS_ID { get; set; }

        public int DTY_SYS_ID { get; set; }

        [StringLength(15)]
        public string DOCNO_CODE { get; set; }

        [StringLength(30)]
        public string DOCNO_BRANCH { get; set; }

        [StringLength(150)]
        public string DOCNO_YEAR { get; set; }

        [StringLength(30)]
        public string DOCNO_NUMBER { get; set; }

        [StringLength(20)]
        public string DOCNO_START { get; set; }

        [StringLength(20)]
        public string DOCNO_END { get; set; }

        [StringLength(20)]
        public string DOCNO_NEXTNO_DUE { get; set; }

        public DateTime? DOCNO_CRTE_DATE { get; set; }

        [StringLength(30)]
        public string DOCNO_MOD_BY { get; set; }

        public DateTime? DOCNO_MOD_DATE { get; set; }

        [StringLength(1)]
        public string DOCNO_STATUS { get; set; }

        public virtual MS_SYS_DOCUMENT_TYPES MS_SYS_DOCUMENT_TYPES { get; set; }
    }
}
