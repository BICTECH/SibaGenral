namespace SibaDev.Models.History_Entities
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model2 : DbContext
    {
        public Model2()
            : base("name=Model2")
        {
        }

        public virtual DbSet<INS_UDW_HTRAVEL_RISK> INS_UDW_HTRAVEL_RISK { get; set; }
        public virtual DbSet<INS_UDW_HTRAVEL_RISK_HEAD> INS_UDW_HTRAVEL_RISK_HEAD { get; set; }
        public virtual DbSet<INS_UWD_HFIRE_LOCINT> INS_UWD_HFIRE_LOCINT { get; set; }
        public virtual DbSet<INS_UWD_HFIRE_LOCRISK> INS_UWD_HFIRE_LOCRISK { get; set; }
        public virtual DbSet<INS_UDW_HBONDS> INS_UDW_HBONDS { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_FULL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_OCCUPATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_NATIONALITY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_NATIONAL_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_PASSPORT_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_ISSUING_CTY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_COUNTRY_VISIT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_ADDRESS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_BENFI_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RELATIONSHIP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_CONTACT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION_DTS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DISC_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_DISC_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK>()
                .Property(e => e.TRA_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_COVERAGE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_PLAN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_VISA_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_DAYS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_WEEKS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_COUNTRY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_CONTACT)
                .HasPrecision(20, 0);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_ADDRESS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HTRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_PRM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_PRM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_SUBCONST)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_PLIN_FOUND)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_PLIN_FOUND_AMT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_ESCALATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_ESC_PERC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCINT>()
                .Property(e => e.LINT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_AREA_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_SECTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_EQZONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RIEML)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_CURR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_CURR_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TOT_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TOT_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_ADJ_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_ADJ_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_DISC_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_DISC_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOAD_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_LOAD_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_COMP_FEE_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_COMP_FEE_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_COMMISSION_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_COMMISSION_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_APPLICABLE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_HFIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_LOB)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_SHT_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_INS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_GROUP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_PERIOD_DAYS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_UW_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_PRINCIPAL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_SUM_INSURED)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_HBONDS>()
                .Property(e => e.BOND_PREMIUM_FC)
                .HasPrecision(19, 2);
        }
    }
}
