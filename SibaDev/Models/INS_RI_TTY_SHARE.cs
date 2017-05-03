namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.INS_RI_TTY_SHARE")]
    public partial class INS_RI_TTY_SHARE:Model
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TTS_SYS_ID { get; set; }

        public int TTS_TTA_SYS_ID { get; set; }

        public byte TTS_TTA_SEQ_NO { get; set; }

        [StringLength(5)]
        public string TTS_TTY_TYPE { get; set; }

        [Required]
        [StringLength(15)]
        public string TTS_RI_COMP { get; set; }

        public decimal? TTS_SHARE_PERC { get; set; }

        public decimal? TTS_SHARE_SI_FC { get; set; }

        public decimal? TTS_SHARE_SI_BC { get; set; }

        public decimal? TTS_SHARE_PREM_FC { get; set; }

        public decimal? TTS_SHARE_PREM_BC { get; set; }

        public decimal? TTS_RI_COMM_PERC { get; set; }

        public decimal? TTS_RI_COMM_FC { get; set; }

        public decimal? TTS_RI_COMM_BC { get; set; }

        public decimal? TTS_RI_TAX_PERC { get; set; }

        public decimal? TTS_TAX_FC { get; set; }

        public decimal? TTS_TAX_BC { get; set; }

        [StringLength(15)]
        public string TTS_CRTE_BY { get; set; }

        public DateTime? TTS_CRTE_DATE { get; set; }

        [StringLength(15)]
        public string TTS_MOD_BY { get; set; }

        public DateTime? TTS_MOD_DATE { get; set; }

        [StringLength(1)]
        public string TTS_STATUS { get; set; }

        public virtual INS_RI_TTY_ALLOCATION INS_RI_TTY_ALLOCATION { get; set; }
    }
}
