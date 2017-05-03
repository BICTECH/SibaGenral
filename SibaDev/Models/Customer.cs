namespace SibaDev.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DEVSIBAINS.CUSTOMER")]
    public partial class CUSTOMER
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CUSTOMER_ID { get; set; }

        [StringLength(1024)]
        public string CUSTOMER_NAME { get; set; }

        [Required]
        [StringLength(512)]
        public string EMAIL { get; set; }

        [StringLength(100)]
        public string PHONE { get; set; }

        [StringLength(1000)]
        public string ADDRESS { get; set; }
    }
}
