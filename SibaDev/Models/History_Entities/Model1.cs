

namespace SibaDev.Models.History_Entities
{
    using SibaDev.Models;
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
            var sibamodel = new SibaModel();
        }

        public virtual DbSet<INS_UDW_HCOVER_DISCLOAD> INS_UDW_HCOVER_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_HPOL_FEES> INS_UDW_HPOL_FEES { get; set; }
        public virtual DbSet<INS_UDW_HRISK_DISCLOAD> INS_UDW_HRISK_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_HRISK_EXCESS> INS_UDW_HRISK_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_HVEHICLE_FEES> INS_UDW_HVEHICLE_FEES { get; set; }
        public virtual DbSet<INS_UWD_HINTERMEDIARY_COMM> INS_UWD_HINTERMEDIARY_COMM { get; set; }
        public virtual DbSet<INS_UWD_HPOLICY_HEAD> INS_UWD_HPOLICY_HEAD { get; set; }
        public virtual DbSet<INS_UWD_HRISK_COVERS> INS_UWD_HRISK_COVERS { get; set; }
        public virtual DbSet<INS_UWD_HVEHICLE_RISK> INS_UWD_HVEHICLE_RISK { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HCOVER_DISCLOAD>()
                .Property(e => e.DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_FC_AMOUNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_BC_AMOUNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HPOL_FEES>()
                .Property(e => e.POL_FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_DISCLOAD>()
                .Property(e => e.DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HRISK_EXCESS>()
                .Property(e => e.EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_RK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HVEHICLE_FEES>()
                .Property(e => e.VEH_FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_COB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_INT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_PERC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_PREM_AMT_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_PREM_AMT_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_AMT_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_AMT_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HINTERMEDIARY_COMM>()
                .Property(e => e.CMM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_DOC_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_END_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_QUT_SER_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_SER_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_SUB_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CHANNEL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_INS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_BIZ_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_INTERMIDIARY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_RENEW_SER_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_POL_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_DISPLAY_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HPOLICY_HEAD>()
                .Property(e => e.POLH_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_RI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_RI_PREM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_DISC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_LOAD_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CURR_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_PRODUCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_COVER_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_USAGE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_VEH_REG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_MAKE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_BODY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CHASSIS_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CUBIC_CAP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_APP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_EXTRA_TPPD)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TP_INTEREST)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TP_DETAILS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_PROP_DECLINED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_DECLINED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RI_APPLICABLE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TP_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_STATUS)
                .IsUnicode(false);
        }
    }
}
