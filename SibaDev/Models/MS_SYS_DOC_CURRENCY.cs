namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.MS_SYS_DOC_CURRENCY")]
    public partial class MS_SYS_DOC_CURRENCY:Model
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CUR_ID { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(20)]
        public string CUR_NAME { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DTY_SYS_ID { get; set; }

        [Key]
        [Column(Order = 3)]
        [StringLength(20)]
        public string CUR_CODE { get; set; }

        [StringLength(1)]
        public string CUR_STATUS { get; set; }

        public virtual MS_SYS_DOCUMENT_TYPES MS_SYS_DOCUMENT_TYPES { get; set; }
    }
}
