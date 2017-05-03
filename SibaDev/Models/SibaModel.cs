namespace SibaDev.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using History_Entities;

    public partial class SibaModel : DbContext
    {
        public SibaModel()
            : base("name=SibaModel")
        {

        }
        public virtual DbSet<INS_RI_FAC_INW_COMPANY> INS_RI_FAC_INW_COMPANY { get; set; }
        public virtual DbSet<INS_RI_FAC_INWARD> INS_RI_FAC_INWARD { get; set; }
        public virtual DbSet<INS_RI_FAC_OUTWARD> INS_RI_FAC_OUTWARD { get; set; }

        public virtual DbSet<INS_RI_FAC_HEAD> INS_RI_FAC_HEAD { get; set; }

        //Claim entities
        public virtual DbSet<CLM_EST_DTLS> CLM_EST_DTLS { get; set; }
        public virtual DbSet<CLM_EST_EXPENSE> CLM_EST_EXPENSE { get; set; }
        public virtual DbSet<CLM_EST_HEAD> CLM_EST_HEAD { get; set; }
        public virtual DbSet<CLM_EST_RISK_DTLS> CLM_EST_RISK_DTLS { get; set; }
        public virtual DbSet<MS_CLM_CAT_EVENT> MS_CLM_CAT_EVENT { get; set; }
        public virtual DbSet<MS_CLM_CAUSE_LOSS> MS_CLM_CAUSE_LOSS { get; set; }
        public virtual DbSet<MS_CLM_EST_TYPE> MS_CLM_EST_TYPE { get; set; }
        public virtual DbSet<CLM_EST_BONDS_RISK_DTLS> CLM_EST_BONDS_RISK_DTLS { get; set; }
        public virtual DbSet<CLM_EST_FIRE_RISK_DTLS> CLM_EST_FIRE_RISK_DTLS { get; set; }
        public virtual DbSet<CLM_EST_TRAVEL_RISK_DTLS> CLM_EST_TRAVEL_RISK_DTLS { get; set; }
        //history entities
        public virtual DbSet<INS_UDW_HCOVER_DISCLOAD> INS_UDW_HCOVER_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_HPOL_FEES> INS_UDW_HPOL_FEES { get; set; }
        public virtual DbSet<INS_UDW_HRISK_DISCLOAD> INS_UDW_HRISK_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_HRISK_EXCESS> INS_UDW_HRISK_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_HVEHICLE_FEES> INS_UDW_HVEHICLE_FEES { get; set; }
        public virtual DbSet<INS_UWD_HINTERMEDIARY_COMM> INS_UWD_HINTERMEDIARY_COMM { get; set; }
        public virtual DbSet<INS_UWD_HPOLICY_HEAD> INS_UWD_HPOLICY_HEAD { get; set; }
        public virtual DbSet<INS_UWD_HRISK_COVERS> INS_UWD_HRISK_COVERS { get; set; }
        public virtual DbSet<INS_UWD_HVEHICLE_RISK> INS_UWD_HVEHICLE_RISK { get; set; }
        public virtual DbSet<INS_UDW_HTRAVEL_RISK> INS_UDW_HTRAVEL_RISK { get; set; }
        public virtual DbSet<INS_UDW_HTRAVEL_RISK_HEAD> INS_UDW_HTRAVEL_RISK_HEAD { get; set; }
        public virtual DbSet<INS_UWD_HFIRE_LOCINT> INS_UWD_HFIRE_LOCINT { get; set; }
        public virtual DbSet<INS_UWD_HFIRE_LOCRISK> INS_UWD_HFIRE_LOCRISK { get; set; }
        public virtual DbSet<INS_UDW_HBONDS> INS_UDW_HBONDS { get; set; }
        //
        public virtual DbSet<MS_UDW_ENDORSEMENTS> MS_UDW_ENDORSEMENTS { get; set; }
        public virtual DbSet<MS_UDW_ENDORSEMENTS_TYPE> MS_UDW_ENDORSEMENTS_TYPE { get; set; }
        //
        public virtual DbSet<MS_PRODUCT_RISK_FEES> MS_PRODUCT_RISK_FEES { get; set; }
        public virtual DbSet<INS_GA_ASSET_ALL_RISK> INS_GA_ASSET_ALL_RISK { get; set; }
        public virtual DbSet<INS_GA_ASSET_TRANSIT> INS_GA_ASSET_TRANSIT { get; set; }
        public virtual DbSet<INS_GA_PROF_INDEMNITY> INS_GA_PROF_INDEMNITY { get; set; }
        public virtual DbSet<INS_PREMIUM_REGISTER> INS_PREMIUM_REGISTER { get; set; }
        public virtual DbSet<INS_UDW_AGENCY_COMM> INS_UDW_AGENCY_COMM { get; set; }
        public virtual DbSet<INS_UDW_BONDS> INS_UDW_BONDS { get; set; }
        public virtual DbSet<INS_UDW_BUSINESS_SOURCE> INS_UDW_BUSINESS_SOURCE { get; set; }
        public virtual DbSet<INS_UDW_CAR_INTEREST> INS_UDW_CAR_INTEREST { get; set; }
        public virtual DbSet<INS_UDW_CAR_LOSS_OF_PROFIT> INS_UDW_CAR_LOSS_OF_PROFIT { get; set; }
        public virtual DbSet<INS_UDW_CAR_THIRD_PARTY_LOSS> INS_UDW_CAR_THIRD_PARTY_LOSS { get; set; }
        public virtual DbSet<INS_UDW_CARCON_INTEREST> INS_UDW_CARCON_INTEREST { get; set; }
        public virtual DbSet<INS_UDW_COVER_DISCLOAD> INS_UDW_COVER_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_COVER_EXCESS> INS_UDW_COVER_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_CPM_INTEREST> INS_UDW_CPM_INTEREST { get; set; }
        public virtual DbSet<INS_UDW_EAR_CPM_INTEREST> INS_UDW_EAR_CPM_INTEREST { get; set; }
        public virtual DbSet<INS_UDW_EAR_INTEREST> INS_UDW_EAR_INTEREST { get; set; }
        public virtual DbSet<INS_UDW_EAR_PERIOD_DATES> INS_UDW_EAR_PERIOD_DATES { get; set; }
        public virtual DbSet<INS_UDW_EAR_THIRD_PARTY_LOSS> INS_UDW_EAR_THIRD_PARTY_LOSS { get; set; }
        public virtual DbSet<INS_UDW_ENGINEER> INS_UDW_ENGINEER { get; set; }
        public virtual DbSet<INS_UDW_FIRE_LOCINT_COVER> INS_UDW_FIRE_LOCINT_COVER { get; set; }
        public virtual DbSet<INS_UDW_FIRE_LOCINT_DISCLOAD> INS_UDW_FIRE_LOCINT_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_FIRE_LOCINT_EXCESS> INS_UDW_FIRE_LOCINT_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_FIRE_LOCRISK_COVER> INS_UDW_FIRE_LOCRISK_COVER { get; set; }
        public virtual DbSet<INS_UDW_FIRE_LOCRISK_EXCESS> INS_UDW_FIRE_LOCRISK_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_GENERAL_ACCIDENT> INS_UDW_GENERAL_ACCIDENT { get; set; }
        public virtual DbSet<INS_UDW_LIABILITY> INS_UDW_LIABILITY { get; set; }
        public virtual DbSet<INS_UDW_PA_GROUP_NAMED> INS_UDW_PA_GROUP_NAMED { get; set; }
        public virtual DbSet<INS_UDW_PA_GROUP_UNAMED> INS_UDW_PA_GROUP_UNAMED { get; set; }
        public virtual DbSet<INS_UDW_PA_INDIVIDUAL> INS_UDW_PA_INDIVIDUAL { get; set; }
        public virtual DbSet<INS_UDW_PERSONAL_ACCIDENT> INS_UDW_PERSONAL_ACCIDENT { get; set; }
        public virtual DbSet<INS_UDW_POLICY_DISCLOAD> INS_UDW_POLICY_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_POLICY_EXCESS> INS_UDW_POLICY_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_PROPOSAL_NUM_GEN> INS_UDW_PROPOSAL_NUM_GEN { get; set; }
        public virtual DbSet<INS_UDW_RISK_ACCESSORIES> INS_UDW_RISK_ACCESSORIES { get; set; }
        public virtual DbSet<INS_UDW_RISK_DISCLOAD> INS_UDW_RISK_DISCLOAD { get; set; }
        public virtual DbSet<INS_UDW_RISK_EXCESS> INS_UDW_RISK_EXCESS { get; set; }
        public virtual DbSet<INS_UDW_TRAVEL_RISK> INS_UDW_TRAVEL_RISK { get; set; }
        public virtual DbSet<INS_UDW_TRAVEL_RISK_HEAD> INS_UDW_TRAVEL_RISK_HEAD { get; set; }
        public virtual DbSet<INS_UWD_FIRE_LOCINT> INS_UWD_FIRE_LOCINT { get; set; }
        public virtual DbSet<INS_UWD_FIRE_LOCRISK> INS_UWD_FIRE_LOCRISK { get; set; }
        public virtual DbSet<INS_UWD_POLICY_HEAD> INS_UWD_POLICY_HEAD { get; set; }
        public virtual DbSet<INS_UWD_RISK_COVERS> INS_UWD_RISK_COVERS { get; set; }
        public virtual DbSet<INS_UWD_VEHICLE_RISK> INS_UWD_VEHICLE_RISK { get; set; }
        public virtual DbSet<MS_ACCT_CATEGORY> MS_ACCT_CATEGORY { get; set; }
        public virtual DbSet<MS_ACCT_DOC_ORIGIN> MS_ACCT_DOC_ORIGIN { get; set; }
        public virtual DbSet<MS_ACCT_INS_TXN_TYPE> MS_ACCT_INS_TXN_TYPE { get; set; }
        public virtual DbSet<MS_ACCT_MAIN_ACCOUNT> MS_ACCT_MAIN_ACCOUNT { get; set; }
        public virtual DbSet<MS_ACCT_PAYMNT_ACNT_DTLS> MS_ACCT_PAYMNT_ACNT_DTLS { get; set; }
        public virtual DbSet<MS_ACCT_PAYMNT_DTLS> MS_ACCT_PAYMNT_DTLS { get; set; }
        public virtual DbSet<MS_ACCT_RCPT_ACNT_DTLS> MS_ACCT_RCPT_ACNT_DTLS { get; set; }
        public virtual DbSet<MS_ACCT_RECEIPTS_DTLS> MS_ACCT_RECEIPTS_DTLS { get; set; }
        public virtual DbSet<MS_ACCT_SERVICE_TAX> MS_ACCT_SERVICE_TAX { get; set; }
        public virtual DbSet<MS_ACCT_SUB_ACCOUNT> MS_ACCT_SUB_ACCOUNT { get; set; }
        public virtual DbSet<MS_ACCT_SUB_CURRERNCY> MS_ACCT_SUB_CURRERNCY { get; set; }
        public virtual DbSet<MS_ACCT_SUB_MAIN_ACCOUNT> MS_ACCT_SUB_MAIN_ACCOUNT { get; set; }
        public virtual DbSet<MS_ACCT_TXN_DOC> MS_ACCT_TXN_DOC { get; set; }
        public virtual DbSet<MS_ACCTS_INTEGRATION> MS_ACCTS_INTEGRATION { get; set; }
        public virtual DbSet<MS_ACT_DEF_ACNTS> MS_ACT_DEF_ACNTS { get; set; }
        public virtual DbSet<MS_ACT_DOC_NO_GEN> MS_ACT_DOC_NO_GEN { get; set; }
        public virtual DbSet<MS_ACT_PAYMENTS_HEAD> MS_ACT_PAYMENTS_HEAD { get; set; }
        public virtual DbSet<MS_ACT_PAYMNT_CONFIRMATION_LOG> MS_ACT_PAYMNT_CONFIRMATION_LOG { get; set; }
        public virtual DbSet<MS_ACT_RCPT_CONFIRMATION_LOG> MS_ACT_RCPT_CONFIRMATION_LOG { get; set; }
        public virtual DbSet<MS_ACT_RECEIPTS_HEAD> MS_ACT_RECEIPTS_HEAD { get; set; }
        public virtual DbSet<MS_ACT_TXN_DOC_ACCS_RGHTS> MS_ACT_TXN_DOC_ACCS_RGHTS { get; set; }
        public virtual DbSet<MS_ACT_TXN_DOC_ADV_PROPS> MS_ACT_TXN_DOC_ADV_PROPS { get; set; }
        public virtual DbSet<MS_COMPULSORY_FEES> MS_COMPULSORY_FEES { get; set; }
        public virtual DbSet<MS_CUSTOMER_CATEGORY> MS_CUSTOMER_CATEGORY { get; set; }
        public virtual DbSet<MS_INS_CURRENCY> MS_INS_CURRENCY { get; set; }
        public virtual DbSet<MS_INSURANCE_SOURCE> MS_INSURANCE_SOURCE { get; set; }
        public virtual DbSet<MS_INTERMEDIARY_COMM> MS_INTERMEDIARY_COMM { get; set; }
        public virtual DbSet<MS_MAIN_ACCT_COMPANY> MS_MAIN_ACCT_COMPANY { get; set; }
        public virtual DbSet<MS_MAIN_ACCT_CURRENCY> MS_MAIN_ACCT_CURRENCY { get; set; }
        public virtual DbSet<MS_MOTOR_PROD> MS_MOTOR_PROD { get; set; }
        public virtual DbSet<MS_MOTOR_PROD_RISK> MS_MOTOR_PROD_RISK { get; set; }
        public virtual DbSet<MS_MOTOR_RISK_COVER> MS_MOTOR_RISK_COVER { get; set; }
        public virtual DbSet<MS_MOTOR_RISK_FEES> MS_MOTOR_RISK_FEES { get; set; }
        //public virtual DbSet<MS_NCD_RISKS> MS_NCD_RISKS { get; set; }
        public virtual DbSet<MS_NO_CLAIM_DISCOUNT> MS_NO_CLAIM_DISCOUNT { get; set; }
        public virtual DbSet<MS_SYS_ACCEPTANCE_TYPES> MS_SYS_ACCEPTANCE_TYPES { get; set; }
        public virtual DbSet<MS_SYS_ACCOUNT_PERIODS> MS_SYS_ACCOUNT_PERIODS { get; set; }
        public virtual DbSet<MS_SYS_AREA> MS_SYS_AREA { get; set; }
        public virtual DbSet<MS_SYS_CITY> MS_SYS_CITY { get; set; }
        public virtual DbSet<MS_SYS_COMPANY> MS_SYS_COMPANY { get; set; }
        public virtual DbSet<MS_SYS_CONDS_CLAUSES> MS_SYS_CONDS_CLAUSES { get; set; }
        public virtual DbSet<MS_SYS_COUNTRY> MS_SYS_COUNTRY { get; set; }
        public virtual DbSet<MS_SYS_CUST_TYPES> MS_SYS_CUST_TYPES { get; set; }
        public virtual DbSet<MS_SYS_DOCUMENT_TYPES> MS_SYS_DOCUMENT_TYPES { get; set; }
        public virtual DbSet<MS_SYS_DOCUMENTS_TYPE_NO_TYPES> MS_SYS_DOCUMENTS_TYPE_NO_TYPES { get; set; }
        public virtual DbSet<MS_SYS_EXCHANGE_RATES> MS_SYS_EXCHANGE_RATES { get; set; }
        public virtual DbSet<MS_SYS_INTERMEDIARY> MS_SYS_INTERMEDIARY { get; set; }
        public virtual DbSet<MS_SYS_LOCATION> MS_SYS_LOCATION { get; set; }
        public virtual DbSet<MS_SYS_OCCUPANCY> MS_SYS_OCCUPANCY { get; set; }
        public virtual DbSet<MS_SYS_OFFICE> MS_SYS_OFFICE { get; set; }
        public virtual DbSet<MS_SYS_PAYMNT_MODE> MS_SYS_PAYMNT_MODE { get; set; }
        public virtual DbSet<MS_SYS_RATINGS_DEPENDENCY> MS_SYS_RATINGS_DEPENDENCY { get; set; }
        public virtual DbSet<MS_SYS_REGIONS> MS_SYS_REGIONS { get; set; }
        public virtual DbSet<MS_SYS_SOURCE_BUSINESS> MS_SYS_SOURCE_BUSINESS { get; set; }
        public virtual DbSet<MS_SYS_USERS> MS_SYS_USERS { get; set; }
        public virtual DbSet<MS_UDW_AGENCY_COMMISSION> MS_UDW_AGENCY_COMMISSION { get; set; }
        public virtual DbSet<MS_UDW_CLASS_OF_BUSINESS> MS_UDW_CLASS_OF_BUSINESS { get; set; }
        public virtual DbSet<MS_UDW_COVERS> MS_UDW_COVERS { get; set; }
        public virtual DbSet<MS_UDW_CUSTOMERS> MS_UDW_CUSTOMERS { get; set; }
        public virtual DbSet<MS_UDW_INTERMEDIARY_COMM> MS_UDW_INTERMEDIARY_COMM { get; set; }
        public virtual DbSet<MS_UDW_MAKE_MODEL> MS_UDW_MAKE_MODEL { get; set; }
        public virtual DbSet<MS_UDW_MOTOR_RISK> MS_UDW_MOTOR_RISK { get; set; }
        public virtual DbSet<MS_UDW_POLICY_HEAD> MS_UDW_POLICY_HEAD { get; set; }
        public virtual DbSet<MS_UDW_PREM_TARRIFS> MS_UDW_PREM_TARRIFS { get; set; }
        public virtual DbSet<MS_UDW_RATES> MS_UDW_RATES { get; set; }
        public virtual DbSet<MS_UDW_SHORT_PERIOD> MS_UDW_SHORT_PERIOD { get; set; }
        public virtual DbSet<MS_UDW_TRANSACTION_STRUCTURE> MS_UDW_TRANSACTION_STRUCTURE { get; set; }
        public virtual DbSet<MS_UDW_TRAVEL_RISK> MS_UDW_TRAVEL_RISK { get; set; }
        public virtual DbSet<MST_SYS_DOCUMENT_TYPE_NO> MST_SYS_DOCUMENT_TYPE_NO { get; set; }
        public virtual DbSet<MST_UWD_PRODUCT> MST_UWD_PRODUCT { get; set; }
        public virtual DbSet<MST_UWD_PRODUCT_COVERS> MST_UWD_PRODUCT_COVERS { get; set; }
        public virtual DbSet<MST_UWD_VEHICLE_RISK> MST_UWD_VEHICLE_RISK { get; set; }
        public virtual DbSet<MS_SYS_DOC_CURRENCY> MS_SYS_DOC_CURRENCY { get; set; }
        public virtual DbSet<MS_SYS_LOADINGS_DISCOUNTS> MS_SYS_LOADINGS_DISCOUNTS { get; set; }
        public virtual DbSet<MST_UWD_PRODUCT_COND_CLAUSES> MST_UWD_PRODUCT_COND_CLAUSES { get; set; }
        public virtual DbSet<MS_SYS_CHANNEL> MS_SYS_CHANNEL { get; set; }

        // FEES
        public virtual DbSet<INS_UDW_BOND_FEES> INS_UDW_BOND_FEES { get; set; }
        public virtual DbSet<INS_UDW_FIRE_FEES> INS_UDW_FIRE_FEES { get; set; }
        public virtual DbSet<INS_UDW_TRAVEL_FEES> INS_UDW_TRAVEL_FEES { get; set; }
        public virtual DbSet<INS_UDW_POL_FEES> INS_UDW_POL_FEES { get; set; }
        //
        public virtual DbSet<INS_UWD_INTERMEDIARY_COMM> INS_UWD_INTERMEDIARY_COMM { get; set; }
        public virtual DbSet<INSURANCE_LEDGER> INSURANCE_LEDGER { get; set; }
        public virtual DbSet<INSURANCE_SUB_LEDGER> INSURANCE_SUB_LEDGER { get; set; }
        public virtual DbSet<MST_UWD_PRODUCT_LOAD_DISCOUNT> MST_UWD_PRODUCT_LOAD_DISCOUNT { get; set; }
        public virtual DbSet<MS_UDW_MAKE> MS_UDW_MAKE { get; set; }
        //
        public virtual DbSet<ACCT_GL_DETAIL> ACCT_GL_DETAIL { get; set; }
        public virtual DbSet<ACCT_GL_HEAD> ACCT_GL_HEAD { get; set; }
        public virtual DbSet<ACCT_TXN_OPEN_ENTRY> ACCT_TXN_OPEN_ENTRY { get; set; }
        public virtual DbSet<ACCT_OPEN_ENTRY_MATCH_DETL> ACCT_OPEN_ENTRY_MATCH_DETL { get; set; }
        public virtual DbSet<INS_UDW_SHORT_PERIOD> INS_UDW_SHORT_PERIOD { get; set; }
        public virtual DbSet<INS_UDW_TRAVEL_TARIFF> INS_UDW_TRAVEL_TARIFF { get; set; }
        public virtual DbSet<MS_RI_GROUP_DETL> MS_RI_GROUP_DETL { get; set; }
        public virtual DbSet<MS_RI_GROUP_HEAD> MS_RI_GROUP_HEAD { get; set; }
        public virtual DbSet<MS_RI_PTTY_COMPANY> MS_RI_PTTY_COMPANY { get; set; }
        public virtual DbSet<MS_RI_PTTY_DETL> MS_RI_PTTY_DETL { get; set; }
        public virtual DbSet<MS_RI_PTTY_HEAD> MS_RI_PTTY_HEAD { get; set; }
        public virtual DbSet<MS_RI_PTTY_SUBCLASS> MS_RI_PTTY_SUBCLASS { get; set; }
        public virtual DbSet<INS_UDW_VEHICLE_FEES> INS_UDW_VEHICLE_FEES { get; set; }
        public virtual DbSet<MS_SYS_EQZONE> MS_SYS_EQZONE { get; set; }
        public virtual DbSet<MS_SYS_FIRE_RISK> MS_SYS_FIRE_RISK { get; set; }
        public virtual DbSet<INS_UDW_INSUR_SOURCE> INS_UDW_INSUR_SOURCE { get; set; }
        public virtual DbSet<INS_RI_TTY_ALLOCATION> INS_RI_TTY_ALLOCATION { get; set; }
        public virtual DbSet<INS_RI_TTY_HEAD> INS_RI_TTY_HEAD { get; set; }
        public virtual DbSet<INS_RI_TTY_SHARE> INS_RI_TTY_SHARE { get; set; }

        // No Claim Discounts
        public virtual DbSet<MS_NCD_BASIS> MS_NCD_BASIS { get; set; }
        public virtual DbSet<MS_NCD_DTLS> MS_NCD_DTLS { get; set; }
        public virtual DbSet<MS_NCD_RISKS> MS_NCD_RISKS { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_CEDANT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_SHARE_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_SHARE_SI)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_SHARE_PREM)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INW_COMPANY>()
                .Property(e => e.FINW_PAP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .HasMany(e => e.INS_RI_FAC_INW_COMPANY)
                .WithOptional(e => e.INS_RI_FAC_INWARD)
                .HasForeignKey(e => e.FINW_PAP_FINW_SYS_ID);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_CEDANT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_CEDANT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_REF_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_ACCPT_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_COMMENT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_SHARE_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_COMM_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_ORIG_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_ORIG_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_ORIG_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_ORIG_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_COMM_FC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_COMM_BC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_INWARD>()
                .Property(e => e.FINW_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
             .HasMany(e => e.INS_RI_FAC_INWARD)
             .WithOptional(e => e.INS_UWD_POLICY_HEAD)
             .HasForeignKey(e => e.FINW_POLH_SYS_ID);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_SHARE_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MEM_SHARE_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_SHARE_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_SHARE_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_SHARE_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_SHARE_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MEM_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MEM_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MEM_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MEM_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_MEM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_MEM_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_COMM)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_SHARE_SI)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_SHARE_PREM)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_RI_SHARE_COMM)
                .HasPrecision(10, 3);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_OUTWARD>()
                .Property(e => e.FOTW_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
               .HasMany(e => e.INS_RI_FAC_OUTWARD)
               .WithOptional(e => e.INS_UWD_POLICY_HEAD)
               .HasForeignKey(e => e.FOTW_POLH_SYS_ID); 

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_REF_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_COMB_LOC_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_REG)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_AREA)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_LOC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_SLIP_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_ACCUM_SI)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_EXCESS_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_EXCESS_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_EXCESS_PREM_FC)
                .HasPrecision(9, 6);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_EXCESS_PREM_BC)
                .HasPrecision(9, 6);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_EXCESS_PERC)
                .HasPrecision(9, 6);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_PERC)
                .HasPrecision(9, 6);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_COMMENTS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_FAC_HEAD>()
                .Property(e => e.FAC_CLOSE)
                .IsUnicode(false);

            //modelBuilder.Entity<INS_RI_FAC_HEAD>()
            //   .HasMany(e => e.INS_RI_TTY_ALLOCATION)
            //   .WithRequired(e => e.INS_RI_FAC_HEAD)
            //   .HasForeignKey(e => e.TTA_TTH_SYS_ID)
            //   .WillCascadeOnDelete(false);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_RK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_VEHICLE_FEES>()
                .Property(e => e.VEH_FEE_STATUS)
                .IsUnicode(false);

            /// 
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
                .Property(e => e.RCOV_ANNL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_HRISK_COVERS>()
                .Property(e => e.RCOV_ANNL_PREM_FC)
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

            modelBuilder.Entity<INS_UWD_HVEHICLE_RISK>()
                .Property(e => e.VEH_RISK_CODE)
                .IsUnicode(false);

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

            //
            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
              .Property(e => e.END_CODE)
              .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_TYPE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_TEXT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_PREM_CHANGE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_FLAG)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS>()
                .Property(e => e.END_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .Property(e => e.ET_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .Property(e => e.ET_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .Property(e => e.ET_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .Property(e => e.ET_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .Property(e => e.ET_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_ENDORSEMENTS_TYPE>()
                .HasMany(e => e.MS_UDW_ENDORSEMENTS)
                .WithOptional(e => e.MS_UDW_ENDORSEMENTS_TYPE)
                .HasForeignKey(e => e.END_ET_SYS_ID);
            //

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_TXN_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_TXN_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_REF_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_REF_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_MAIN_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_SUB_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_REF_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_REF_CURR_RATE)
                .HasPrecision(15, 6);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_MATCHED_FC_AMT)
                .HasPrecision(19, 3);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_MATCHED_BC_AMT)
                .HasPrecision(19, 3);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_REF_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_OPEN_ENTRY_MATCH_DETL>()
                .Property(e => e.MA_STATUS)
                .IsUnicode(false);

            //
            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_DOC_NO)
                .HasPrecision(38, 0);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_DOC_REF)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_MAIN_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_SUB_ACCT_LV1)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_SUB_ACCT_LV2)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_ANNALYSIS_1)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_ANNALYSIS_2)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_ANNALYSIS_3)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_ANNALYSIS_4)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_ANNALYSIS_5)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_OFFICE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_DEPT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_CURR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_CURR_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_DRCR_FLAG)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_AMT_FC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_AMT_BC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_LINE_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_DETAIL>()
                .Property(e => e.TD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_TXN_REF)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_COMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_OFFICE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_DEPT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_ANALYSIS_01)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_NALYSIS_02)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_NALYSIS_03)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_NALYSIS_04)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_NALYSIS_05)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .Property(e => e.TH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_GL_HEAD>()
                .HasMany(e => e.ACCT_GL_DETAIL)
                .WithOptional(e => e.ACCT_GL_HEAD)
                .HasForeignKey(e => e.TD_TH_SYS_ID);
            

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_R_BATCH_ID)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_MAIN_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_OFFICE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_CURR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_CURR_RATE)
                .HasPrecision(12, 6);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_ORGNL_FC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_ORGNL_BC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_ADJ_FC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_ADJ_BC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_UNPOST_ADJ_FC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_UNPOST_ADJ_BC_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<ACCT_TXN_OPEN_ENTRY>()
                .Property(e => e.OE_MOD_BY)
                .IsUnicode(false);

            //
            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_POL_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IG_REF_DOC)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_TXN_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_DOC_NUMBER)
                .IsUnicode(false);
            

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_ACCT_PERIOD_REF)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_ACCOUNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_FX_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_AMOUNT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_AMOUNT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .Property(e => e.IGL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_LEDGER>()
                .HasMany(e => e.INSURANCE_SUB_LEDGER)
                .WithOptional(e => e.INSURANCE_LEDGER)
                .HasForeignKey(e => e.ISL_IGL_SYS_ID);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_ACCT_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_FX_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_AMOUNT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_AMOUNT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_COB)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_NARRATION)
                .IsUnicode(false);
            

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_CONTROL_ACT_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_SUB_LEDGER)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INSURANCE_SUB_LEDGER>()
                .Property(e => e.ISL_STATUS)
                .IsUnicode(false);

            //
            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_COB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_INT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_PERC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_PREM_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_PREM_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_COM_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_INTERMEDIARY_COMM>()
                .Property(e => e.CMM_STATUS)
                .IsUnicode(false);
            //
            //

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_FC_AMOUNT)
                .HasPrecision(9, 2);

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_BC_AMOUNT)
                .HasPrecision(9, 2);

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POL_FEES>()
                .Property(e => e.POL_FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
               .Property(e => e.BOND_FEE_CODE)
               .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
                .Property(e => e.BOND_FEE_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
                .Property(e => e.BOND_FEE_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
                .Property(e => e.BOND_FEE_RK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
                .Property(e => e.BOND_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BOND_FEES>()
                .Property(e => e.BOND_FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
               .Property(e => e.FIRE_FEE_CODE)
               .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
                .Property(e => e.FIRE_FEE_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
                .Property(e => e.FIRE_FEE_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
                .Property(e => e.FIRE_FEE_RK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
                .Property(e => e.FIRE_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_FEES>()
                .Property(e => e.FIRE_FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_RK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_FEES>()
                .Property(e => e.TRA_FEE_STATUS)
                .IsUnicode(false);
            //
            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_LIMIT_LIABILITY)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_ALL_RISK>()
                .Property(e => e.AAR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_SUM_INSURED)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_LIMIT_LOSS)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_DENT_FROM)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_DENT_T0)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_DISTANCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_ASSET_TRANSIT>()
                .Property(e => e.TRANS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_ITEM)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_ITEM_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_AGGRET_LIMIT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_LIMIT_OCCUR)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_LIMIT_LOSS)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_ANN_TURNOVER)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_DENT_FROM)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_DENT_TO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_DISTANCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_GA_PROF_INDEMNITY>()
                .Property(e => e.PRO_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_COB)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_INS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_BUS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_TTY_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_UWD_ACCT_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_CUST_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_FX_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_FC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_BC_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_ACCT_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_PREMIUM_REGISTER>()
                .Property(e => e.PR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_COB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_AGB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_PREM_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_PREM_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_CUST_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_COM_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_COM_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_AGENCY_COMM>()
                .Property(e => e.CMM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_LOB)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_SHT_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_INS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_GROUP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_PERIOD_DAYS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_UW_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_PRINCIPAL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_SUM_INSURED)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .Property(e => e.BOND_PREMIUM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_BONDS>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.INS_UDW_BONDS)
                .HasForeignKey(e => e.RCOV_RISK_SYS_ID);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_BUSINESS_SOURCE>()
                .Property(e => e.BUSS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_INTEREST>()
                .Property(e => e.CAR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_DISC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_LOAD_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_RI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSO_RI_PREM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_RATE_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_SI_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_COVER_LEVEL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_PREM_REFUND)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_RI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_USER_PREM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_LOSS_OF_PROFIT>()
                .Property(e => e.LOSSOP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_DISC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_LOAD_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_RI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_RI_PREM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_RATE_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_SI_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_COVER_LEVEL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_PREM_REFUND)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_RI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_USER_PREM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CAR_THIRD_PARTY_LOSS>()
                .Property(e => e.CARTPL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_VALUE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CARCON_INTEREST>()
                .Property(e => e.CONVAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_DISCLOAD>()
                .Property(e => e.DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_COVER_EXCESS>()
                .Property(e => e.EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_CONAR)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_CPM_INTEREST>()
                .Property(e => e.CPM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_CPM_INTEREST>()
                .Property(e => e.EARCPM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_INTEREST>()
                .Property(e => e.EAR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_PERIOD_DATES>()
                .Property(e => e.PERIOD_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_PERIOD_DATES>()
                .Property(e => e.PERIOD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_PERIOD_DATES>()
                .Property(e => e.PERIOD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_PERIOD_DATES>()
                .Property(e => e.PERIOD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_DISC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_LOAD_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_RI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_RI_PREM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_RATE_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_SI_CHANGE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_COVER_LEVEL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_PREM_REFUND)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_RI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_USER_PREM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_EAR_THIRD_PARTY_LOSS>()
                .Property(e => e.EARTPL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_REGION_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_REGION_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_AREA_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOC_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_OCCUP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_OCCUP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_OCCUP_SECTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_EARTHQ_ZONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RIEML)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_EML)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .Property(e => e.ENG_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .HasMany(e => e.INS_UDW_CAR_LOSS_OF_PROFIT)
                .WithOptional(e => e.INS_UDW_ENGINEER)
                .HasForeignKey(e => e.LOSSOP_ENG_SYS_ID);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .HasMany(e => e.INS_UDW_CAR_THIRD_PARTY_LOSS)
                .WithOptional(e => e.INS_UDW_ENGINEER)
                .HasForeignKey(e => e.CARTPL_ENG_SYS_ID);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .HasMany(e => e.INS_UDW_CARCON_INTEREST)
                .WithRequired(e => e.INS_UDW_ENGINEER)
                .HasForeignKey(e => e.CONVAL_ENG_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .HasMany(e => e.INS_UDW_EAR_INTEREST)
                .WithOptional(e => e.INS_UDW_ENGINEER)
                .HasForeignKey(e => e.EAR_ENG_SYS_ID);

            modelBuilder.Entity<INS_UDW_ENGINEER>()
                .HasMany(e => e.INS_UDW_EAR_PERIOD_DATES)
                .WithOptional(e => e.INS_UDW_ENGINEER)
                .HasForeignKey(e => e.PERIOD_ENG_SYSID);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_COVER>()
                .Property(e => e.INT_CVR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_DISCLOAD>()
                .Property(e => e.INT_DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCINT_EXCESS>()
                .Property(e => e.INT_EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_COVER>()
                .Property(e => e.LOC_CVR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_FIRE_LOCRISK_EXCESS>()
                .Property(e => e.LOC_EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_REGION_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_REGION_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_AREA_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOC_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_EARTHQ_ZONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RISK_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .Property(e => e.GA_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .HasMany(e => e.INS_GA_ASSET_ALL_RISK)
                .WithOptional(e => e.INS_UDW_GENERAL_ACCIDENT)
                .HasForeignKey(e => e.AAR_GA_SYS_ID);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .HasMany(e => e.INS_GA_ASSET_TRANSIT)
                .WithOptional(e => e.INS_UDW_GENERAL_ACCIDENT)
                .HasForeignKey(e => e.TRANS_GA_SYS_ID);

            modelBuilder.Entity<INS_UDW_GENERAL_ACCIDENT>()
                .HasMany(e => e.INS_GA_PROF_INDEMNITY)
                .WithOptional(e => e.INS_UDW_GENERAL_ACCIDENT)
                .HasForeignKey(e => e.PRO_GA_SYS_ID);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_REGION_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_REGION_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_AREA_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOC_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_EARTHQ_ZONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_ITEM)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_ITEM_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_AGGRET_LIMIT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LIMIT_OCCUR)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_OBJECT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_OBJECT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_BRANCH_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_FLOATER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_SALARY_SLAB)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_GEO_LIMIT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_SALARY_MONTH)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_MONTHLY_BENEFITS)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LABOUR_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_ANNUAL_EST_SAL)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_WKM_PREMIUM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_LIABILITY>()
                .Property(e => e.LIA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_RISK_CLASSCODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_RISK_CLASSNAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_NAME_INSURED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_NAME_NOMINEE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_RELATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_EARNING)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_MONTHLY_INCOME)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_JOB_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_WEEKLY_BENEFIT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_NAMED>()
                .Property(e => e.PA_GRP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_RISK_CLASSCODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_RISK_CLASSNAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_ANN_SAL)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_TFE_SAL)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_ANN_BENCOV)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_LIM_EVENT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_LIM_LIFE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_OCCUPATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_EXCLUSIONS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_GROUP_UNAMED>()
                .Property(e => e.PA_GRP_UN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_RISK_CLASSCODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_RISK_CLASSNAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_NAME_INSURED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_NAME_NOMINEE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_RELATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_EARNING)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_MONTHLY_INCOME)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_JOB_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_WEEKLY_BENEFIT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PA_INDIVIDUAL>()
                .Property(e => e.PA_IND_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_CLASSCODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_CLASSNAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_NAME_INSURED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_NAME_NOMINEE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RELATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_EARNING)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_MONTHLY_INCOME)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_JOB_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_DOB)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_WEEKS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_WEEKLY_BENEFIT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_GRP_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_GRP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_EXCLUSIONS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_ANN_SALARY)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_TFE_SALARY)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_LIM_EVENTS)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_LIM_LIFE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_OCCUPATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_ANN_BENCOV)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PERSONAL_ACCIDENT>()
                .Property(e => e.PA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_DISCLOAD>()
                .Property(e => e.DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_POLICY_EXCESS>()
                .Property(e => e.EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_BRANCH)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_FORM_NO)
                .HasPrecision(38, 0);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_ASSIGNED_TO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_PROPOSAL_NUM_GEN>()
                .Property(e => e.PROP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_VALUE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_ACCESSORIES>()
                .Property(e => e.ACC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_AMT_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_AMT_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_DISCLOAD>()
                .Property(e => e.DL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_NART)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_MIN_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_MAX_AMOUNT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_RISK_EXCESS>()
                .Property(e => e.EXS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_FULL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_OCCUPATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_NATIONALITY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_NATIONAL_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_PASSPORT_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ISSUING_CTY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COUNTRY_VISIT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_ADDRESS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_BENFI_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RELATIONSHIP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CONTACT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION_DTS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DISC_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DISC_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_FC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_BC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.INS_UDW_TRAVEL_RISK)
                .HasForeignKey(e => e.RCOV_RISK_SYS_ID);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_COVERAGE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_PLAN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_VISA_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_DAYS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_WEEKS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_COUNTRY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_CONTACT)
                .HasPrecision(20, 0);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_EMB_ADDRESS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .Property(e => e.TRAH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_RISK_HEAD>()
                .HasMany(e => e.INS_UDW_TRAVEL_RISK)
                .WithOptional(e => e.INS_UDW_TRAVEL_RISK_HEAD)
                .HasForeignKey(e => e.TRA_TRAH_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_PRM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_PRM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_SUBCONST)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_PLIN_FOUND)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_PLIN_FOUND_AMT)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_ESCALATION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_ESC_PERC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .Property(e => e.LINT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
               .Property(e => e.LINT_RI_EML)
               .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
               .Property(e => e.LINT_CONS_TYPE)
               .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_COVER)
                .WithOptional(e => e.INS_UWD_FIRE_LOCINT)
                .HasForeignKey(e => e.INT_CVR_LINT_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_EXCESS)
                .WithOptional(e => e.INS_UWD_FIRE_LOCINT)
                .HasForeignKey(e => e.INT_EXS_LINT_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCINT>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.INS_UWD_FIRE_LOCINT)
                .HasForeignKey(e => e.RCOV_RISK_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
              .Property(e => e.PLOC_REG_CODE)
              .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_REG_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_AREA_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOC_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_OCCUP_SECTION)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_EQZONE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RIEML)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_CURR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_CURR_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TOT_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TOT_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_ADJ_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_ADJ_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_DISC_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_DISC_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOAD_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_LOAD_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_COMP_FEE_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_COMP_FEE_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_COMMISSION_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_COMMISSION_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_APPLICABLE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RI_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .Property(e => e.PLOC_TRISM_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_COVER)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK)
                .HasForeignKey(e => e.INT_CVR_PLOC_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_DISCLOAD)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK)
                .HasForeignKey(e => e.INT_DL_PLOC_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_EXCESS)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK)
                .HasForeignKey(e => e.INT_EXS_PLOC_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCRISK_COVER)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK)
                .HasForeignKey(e => e.LOC_CVR_PLOC_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCRISK_COVER1)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK1)
                .HasForeignKey(e => e.LOC_CVR_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_FIRE_LOCRISK>()
                .HasMany(e => e.INS_UDW_FIRE_LOCRISK_EXCESS)
                .WithOptional(e => e.INS_UWD_FIRE_LOCRISK)
                .HasForeignKey(e => e.LOC_EXS_PLOC_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_DOC_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_END_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_QUT_SER_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SER_NO)
                .HasPrecision(30, 0);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_SUB_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CHANNEL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_INS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_BIZ_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_INTERMIDIARY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_RENEW_SER_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_POL_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_DISPLAY_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .Property(e => e.POLH_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UWD_INTERMEDIARY_COMM)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.CMM_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_POL_FEES)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.POL_FEE_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_GA_ASSET_ALL_RISK)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.AAR_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_GA_ASSET_TRANSIT)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.TRANS_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_GA_PROF_INDEMNITY)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PRO_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_AGENCY_COMM)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.CMM_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_BONDS)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.BOND_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_CARCON_INTEREST)
                .WithRequired(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.CONVAL_POLH_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_CPM_INTEREST)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.CPM_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_EAR_CPM_INTEREST)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.EARCPM_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_EAR_INTEREST)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.EAR_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_EAR_PERIOD_DATES)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PERIOD_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_ENGINEER)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.ENG_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_COVER)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.INT_CVR_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_DISCLOAD)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.INT_DL_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_FIRE_LOCINT_EXCESS)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.INT_EXS_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_FIRE_LOCRISK_EXCESS)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.LOC_EXS_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_GENERAL_ACCIDENT)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.GA_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_LIABILITY)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.LIA_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_PA_GROUP_NAMED)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PA_GRP_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_PA_GROUP_UNAMED)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PA_GRP_UN_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_PA_INDIVIDUAL)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PA_IND_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_PERSONAL_ACCIDENT)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PA_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_POLICY_DISCLOAD)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.DL_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_POLICY_EXCESS)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.EXS_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_TRAVEL_RISK)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.TRA_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_TRAVEL_RISK_HEAD)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.TRAH_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UWD_FIRE_LOCINT)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.LINT_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UWD_FIRE_LOCRISK)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.PLOC_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UWD_VEHICLE_RISK)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.VEH_POLH_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.RCOV_POLH_DOC_NO);

            //modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
            //    .HasMany(e => e.INSURANCE_LEDGER)
            //    .WithOptional(e => e.INS_UWD_POLICY_HEAD)
            //    .HasForeignKey(e => e.IGL_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_BOND_FEES)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.BOND_FEE_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_FIRE_FEES)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.FIRE_FEE_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_POLICY_HEAD>()
                .HasMany(e => e.INS_UDW_TRAVEL_FEES)
                .WithOptional(e => e.INS_UWD_POLICY_HEAD)
                .HasForeignKey(e => e.TRA_FEE_POL_SYS_ID);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_GROSS_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_ANNL_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_ANNL_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_GROSS_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_NET_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_NET_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_RI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_RI_PREM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_DISC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_LOAD_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .Property(e => e.RCOV_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .HasMany(e => e.INS_UDW_COVER_DISCLOAD)
                .WithOptional(e => e.INS_UWD_RISK_COVERS)
                .HasForeignKey(e => e.DL_RCOV_SYS_ID);

            modelBuilder.Entity<INS_UWD_RISK_COVERS>()
                .HasMany(e => e.INS_UDW_COVER_EXCESS)
                .WithOptional(e => e.INS_UWD_RISK_COVERS)
                .HasForeignKey(e => e.EXS_RCOV_SYS_ID);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CURR_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_PRODUCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COVER_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_USAGE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_VEH_REG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MAKE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_BODY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CHASSIS_NO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CUBIC_CAP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_APP)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXTRA_TPPD)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_INTEREST)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_DETAILS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_PROP_DECLINED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DECLINED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_APPLICABLE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DISC_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DISC_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_FC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_BC)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .HasMany(e => e.INS_UDW_VEHICLE_FEES)
                .WithOptional(e => e.INS_UWD_VEHICLE_RISK)
                .HasForeignKey(e => e.VEH_FEE_RK_SYS_ID);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .HasMany(e => e.INS_UDW_RISK_ACCESSORIES)
                .WithOptional(e => e.INS_UWD_VEHICLE_RISK)
                .HasForeignKey(e => e.ACC_RISK_SYS_ID);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .HasMany(e => e.INS_UDW_RISK_DISCLOAD)
                .WithOptional(e => e.INS_UWD_VEHICLE_RISK)
                .HasForeignKey(e => e.DL_RISK_SYS_ID);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .HasMany(e => e.INS_UDW_RISK_EXCESS)
                .WithOptional(e => e.INS_UWD_VEHICLE_RISK)
                .HasForeignKey(e => e.EXS_RISK_SYS_ID);

            modelBuilder.Entity<INS_UWD_VEHICLE_RISK>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.INS_UWD_VEHICLE_RISK)
                .HasForeignKey(e => e.RCOV_RISK_SYS_ID);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .Property(e => e.ACAT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_CATEGORY>()
                .HasMany(e => e.MS_ACCT_MAIN_ACCOUNT)
                .WithRequired(e => e.MS_ACCT_CATEGORY)
                .HasForeignKey(e => e.ACCT_CATEGORY)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .Property(e => e.DOC_ORIGN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_DOC_ORIGIN>()
                .HasMany(e => e.MS_ACCT_TXN_DOC)
                .WithOptional(e => e.MS_ACCT_DOC_ORIGIN)
                .HasForeignKey(e => e.ATD_TXN_ORIGN);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_INS_SRCE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .Property(e => e.TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .HasMany(e => e.MS_ACCT_TXN_DOC)
                .WithOptional(e => e.MS_ACCT_INS_TXN_TYPE)
                .HasForeignKey(e => e.ATD_TXN_CODE);

            modelBuilder.Entity<MS_ACCT_INS_TXN_TYPE>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MS_ACCT_INS_TXN_TYPE)
                .HasForeignKey(e => e.INT_INS_TXN_TYPE);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_CATEGORY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_MAIN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_OPEN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .Property(e => e.ACCT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_COMPULSORY_FEES)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.FEE_MAIN_ACCOUNT);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_SERVICE_TAX)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.TX_MAIN_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_CUSTOMER_CATEGORY)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.CUS_CAT_MAIN_ACCT);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_PAYMNT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.PAD_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_RCPT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.RAD_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_SUB_MAIN_ACCOUNT)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.SUB_MAIN_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_MAIN_ACCOUNT>()
                .HasMany(e => e.MS_ACT_DEF_ACNTS)
                .WithOptional(e => e.MS_ACCT_MAIN_ACCOUNT)
                .HasForeignKey(e => e.DA_ACNT_CODE);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_AMNT_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_AMNT_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_ACNT_DTLS>()
                .Property(e => e.PAD_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_PAYMNT_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_TXN_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_DEP_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_TXN_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_ACNT_PERIOD)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_CUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_PM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_RCVD_FROM)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_PAYMNT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_PAYMNT_DTLS>()
                .Property(e => e.APD_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_DR_CR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_AMNT_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_AMNT_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RCPT_ACNT_DTLS>()
                .Property(e => e.RAD_CUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_TXN_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_DEP_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_TXN_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_ACNT_PERIOD)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_PM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_RCVD_FROM)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_RCPT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .Property(e => e.ARD_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_RECEIPTS_DTLS>()
                .HasMany(e => e.MS_ACCT_RCPT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACCT_RECEIPTS_DTLS)
                .HasForeignKey(e => e.RAD_ARD_SYS_ID);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_TAX_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_TAX_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_CUST_CAT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_TAX_PERC)
                .HasPrecision(19, 3);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_MIN_TAX_APP)
                .HasPrecision(19, 3);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_MAIN_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SERVICE_TAX>()
                .Property(e => e.TX_SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .Property(e => e.SUB_ACCT_ACTIVE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_COMPULSORY_FEES)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.FEE_SUB_ACCOUNT);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_SERVICE_TAX)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.TX_SUB_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_CUSTOMER_CATEGORY)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.CUS_CAT_SUB_ACCT);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_PAYMNT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.PAD_SUB_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_RCPT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.RAD_SUB_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_SUB_CURRERNCY)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.SUB_CURR_SUB_CODE);

            modelBuilder.Entity<MS_ACCT_SUB_ACCOUNT>()
                .HasMany(e => e.MS_ACCT_SUB_MAIN_ACCOUNT)
                .WithOptional(e => e.MS_ACCT_SUB_ACCOUNT)
                .HasForeignKey(e => e.SUB_MAIN_SUB_ACCT_CODE);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_SUB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_CURRERNCY>()
                .Property(e => e.SUB_CURR_ACTIVE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_SUB_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_ACCT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_ACCT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_ACCT_STATUS)
                .IsUnicode(false);

            

            modelBuilder.Entity<MS_ACCT_SUB_MAIN_ACCOUNT>()
                .Property(e => e.SUB_MAIN_ACTIVT_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_TXN_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_TXN_ORIGN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_PST_MODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_PAYMT_MODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_GEN_DOC_NO_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_PRNT_BFR_PST_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_PRNT_AFTR_PST_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_SLF_REV_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .Property(e => e.ATD_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_DEF_ACNTS)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.DA_ATD_CODE);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_DOC_NO_GEN)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.DNG_ATD_CODE);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_PAYMENTS_HEAD)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.APH_ATD_CODE);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_RECEIPTS_HEAD)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.ARH_ATD_CODE);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_TXN_DOC_ACCS_RGHTS)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.TDAR_ATD_CODE);

            modelBuilder.Entity<MS_ACCT_TXN_DOC>()
                .HasMany(e => e.MS_ACT_TXN_DOC_ADV_PROPS)
                .WithOptional(e => e.MS_ACCT_TXN_DOC)
                .HasForeignKey(e => e.DAP_ATD_CODE);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_CUST_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_CUST_TYPE_REF)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_INS_TXN_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_BIZ_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_INS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_OFFICE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_PRODUCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_DEBTT_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_DEBIT_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_DEBIT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_CREDIT_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_CREDIT_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_CREDIT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_DEBTT_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_DEBIT_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_DEBIT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_CREDIT_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_CREDIT_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_CREDIT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_SUB_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_SUB_ACCT_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_FWD_SUB_ACCT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_SUB_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_SUB_ACCT_DOC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_RVSE_SUB_ACCT_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACCTS_INTEGRATION>()
                .Property(e => e.INT_ACTIVE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_ACNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_MIN_AMNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_MAX_AMNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DEF_ACNTS>()
                .Property(e => e.DA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_SEPARATOR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_PREF)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_SUFX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_APND_CNTRY_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_APND_REG_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_APND_OFF_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_APND_DEP_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_DOC_NO_GEN>()
                .Property(e => e.DNG_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .Property(e => e.APH_TRANS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .HasMany(e => e.MS_ACCT_PAYMNT_ACNT_DTLS)
                .WithOptional(e => e.MS_ACT_PAYMENTS_HEAD)
                .HasForeignKey(e => e.PAD_APH_SYS_ID);

            modelBuilder.Entity<MS_ACT_PAYMENTS_HEAD>()
                .HasMany(e => e.MS_ACCT_PAYMNT_DTLS)
                .WithOptional(e => e.MS_ACT_PAYMENTS_HEAD)
                .HasForeignKey(e => e.APD_APH_SYS_ID);

            modelBuilder.Entity<MS_ACT_PAYMNT_CONFIRMATION_LOG>()
                .Property(e => e.PCL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMNT_CONFIRMATION_LOG>()
                .Property(e => e.PCL_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMNT_CONFIRMATION_LOG>()
                .Property(e => e.PCL_ACTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_PAYMNT_CONFIRMATION_LOG>()
                .Property(e => e.PCL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RCPT_CONFIRMATION_LOG>()
                .Property(e => e.RCL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RCPT_CONFIRMATION_LOG>()
                .Property(e => e.RCL_NARRATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RCPT_CONFIRMATION_LOG>()
                .Property(e => e.RCL_ACTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RCPT_CONFIRMATION_LOG>()
                .Property(e => e.RCL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_ACTIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_RCPT_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .Property(e => e.ARH_TRANS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_RECEIPTS_HEAD>()
                .HasMany(e => e.MS_ACCT_RECEIPTS_DTLS)
                .WithOptional(e => e.MS_ACT_RECEIPTS_HEAD)
                .HasForeignKey(e => e.ARD_ARH_SYS_ID);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_USR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_MIN_AMNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_MAX_AMNT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_POST_TXN_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_AMMEND_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_REVERSE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_PRNT_BFR_PST_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_PRNT_AFTR_PST_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ACCS_RGHTS>()
                .Property(e => e.TDAR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_ATD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_ALW_BCK_DATE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_ALW_FUTRE_DATE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_LOG_TRAILS_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_ACT_TXN_DOC_ADV_PROPS>()
                .Property(e => e.DAP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_AMOUNT)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_MODIFY_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_REFUND_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_MAIN_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_SUB_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_MAIN_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .Property(e => e.FEE_SUB_ACCOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .HasMany(e => e.MS_MOTOR_RISK_FEES)
                .WithOptional(e => e.MS_COMPULSORY_FEES)
                .HasForeignKey(e => e.MRF_FEE_CODE);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .HasMany(e => e.INS_UDW_VEHICLE_FEES)
                .WithOptional(e => e.MS_COMPULSORY_FEES)
                .HasForeignKey(e => e.VEH_FEE_CODE);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_INTERM_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_MAIN_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_SUB_ACCT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .Property(e => e.CUS_CAT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .HasMany(e => e.MS_ACCT_SERVICE_TAX)
                .WithOptional(e => e.MS_CUSTOMER_CATEGORY)
                .HasForeignKey(e => e.TX_CUST_CAT_CODE);
            

            modelBuilder.Entity<MS_CUSTOMER_CATEGORY>()
                .HasMany(e => e.MS_SYS_CUST_TYPES)
                .WithOptional(e => e.MS_CUSTOMER_CATEGORY)
                .HasForeignKey(e => e.CTP_CUST_TYPE);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_FULL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_ORIG_COUNTRY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_DEC_SYMBOL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_SUB_UNIT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_SYMBOL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .Property(e => e.CUR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
               .Property(e => e.CUR_BASE)
               .IsUnicode(false);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .HasMany(e => e.MS_ACCT_RCPT_ACNT_DTLS)
                .WithOptional(e => e.MS_INS_CURRENCY)
                .HasForeignKey(e => e.RAD_CUR_CODE);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .HasMany(e => e.MS_ACCT_PAYMNT_DTLS)
                .WithOptional(e => e.MS_INS_CURRENCY)
                .HasForeignKey(e => e.APD_CUR_CODE);

            modelBuilder.Entity<MS_INS_CURRENCY>()
                .HasMany(e => e.MS_ACCT_SUB_CURRERNCY)
                .WithOptional(e => e.MS_INS_CURRENCY)
                .HasForeignKey(e => e.SUB_CURR_CODE);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INSURANCE_SOURCE>()
                .Property(e => e.INS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_INT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_PROD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_DFT_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_NEW_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_RENEWAL_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_ENDORSE_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_INTERMEDIARY_COMM>()
                .Property(e => e.COM_ACTIVE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_COMPANY>()
                .Property(e => e.ACOM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_COMPANY>()
                .Property(e => e.ACOM_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_COMPANY>()
                .Property(e => e.ACOM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_COMPANY>()
                .Property(e => e.ACOM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_COMPANY>()
                .Property(e => e.ACOM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_CURRENCY>()
                .Property(e => e.ACUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_CURRENCY>()
                .Property(e => e.ACUR_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_CURRENCY>()
                .Property(e => e.ACUR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_CURRENCY>()
                .Property(e => e.ACUR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MAIN_ACCT_CURRENCY>()
                .Property(e => e.ACUR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD>()
                .Property(e => e.MTP_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD>()
                .Property(e => e.MTP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD>()
                .Property(e => e.MTP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD>()
                .Property(e => e.MTP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD>()
                .HasMany(e => e.MS_MOTOR_PROD_RISK)
                .WithOptional(e => e.MS_MOTOR_PROD)
                .HasForeignKey(e => e.MPR_MTP_SYS_ID);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .Property(e => e.MPR_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .Property(e => e.MPR_MTP_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .Property(e => e.MPR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .Property(e => e.MPR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .Property(e => e.MPR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_PROD_RISK>()
                .HasMany(e => e.MS_MOTOR_RISK_COVER)
                .WithOptional(e => e.MS_MOTOR_PROD_RISK)
                .HasForeignKey(e => e.MRC_MPR_SYS_ID);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_DFT_SI)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_DFT_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_MIN_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_MAX_RATE)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_DFT_PREM)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_DFT_YN)
                .IsUnicode(false);
            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
              .Property(e => e.MRC_NCD_YN)
              .IsUnicode(false);
            

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_SEAT_LOAD)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_AGE_LOAD)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_COVER>()
                .Property(e => e.MRC_MTP_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_FEES>()
                .Property(e => e.MRF_FEE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_FEES>()
                .Property(e => e.MRF_FEE_AMOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_FEES>()
                .Property(e => e.MRF_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_FEES>()
                .Property(e => e.MRF_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_MOTOR_RISK_FEES>()
                .Property(e => e.MRF_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_MODIFY_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_STEP_BACK_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
                .Property(e => e.NCD_STATUS)
                .IsUnicode(false);

            //modelBuilder.Entity<MS_NO_CLAIM_DISCOUNT>()
            //    .HasMany(e => e.MS_NCD_RISKS)
            //    .WithOptional(e => e.MS_NO_CLAIM_DISCOUNT)
            //    .HasForeignKey(e => e.RNCD_NCD_CODE);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .Property(e => e.ATY_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCEPTANCE_TYPES>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MS_SYS_ACCEPTANCE_TYPES)
                .HasForeignKey(e => e.INT_INS_SOURCE);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ACP_YEAR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ACP_MONTH_OPEN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ACP_MONTH_CLOSE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ACP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ATY_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_ACCOUNT_PERIODS>()
                .Property(e => e.ACP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .Property(e => e.ARE_REG_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_AREA>()
                .HasMany(e => e.MS_SYS_LOCATION)
                .WithOptional(e => e.MS_SYS_AREA)
                .HasForeignKey(e => e.LOC_ARE_CODE);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_REG_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CITY>()
                .Property(e => e.CIT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_EMAIL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_WEBSITE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_HEAD_OFFICE_ADD)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_CNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .Property(e => e.CMP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COMPANY>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_SYS_COMPANY)
                .HasForeignKey(e => e.POLH_CMP_CODE);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .Property(e => e.CCL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CONDS_CLAUSES>()
                .HasMany(e => e.MST_UWD_PRODUCT_COND_CLAUSES)
                .WithOptional(e => e.MS_SYS_CONDS_CLAUSES)
                .HasForeignKey(e => e.PCC_CLAU_CODE);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_ZIP)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_COUNTRY>()
                .Property(e => e.CNT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_CUST_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_PREFIX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_SURFIX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .Property(e => e.CTP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .HasMany(e => e.MS_SYS_INTERMEDIARY)
                .WithOptional(e => e.MS_SYS_CUST_TYPES)
                .HasForeignKey(e => e.INT_CTP_CODE);


            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .HasMany(e => e.MS_UDW_CUSTOMERS)
                .WithOptional(e => e.MS_SYS_CUST_TYPES)
                .HasForeignKey(e => e.CUS_TYPE_CODE);

            modelBuilder.Entity<MS_SYS_CUST_TYPES>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MS_SYS_CUST_TYPES)
                .HasForeignKey(e => e.INT_CUST_TYPE);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_DOC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_DOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_DOC_CATEGORY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_JRNL_CATEGORY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_TAX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_DEFF_ACCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_INTERBANK_TXN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_DOC_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.DTY_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .Property(e => e.FOREIGN_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .HasMany(e => e.MS_SYS_DOC_CURRENCY)
                .WithRequired(e => e.MS_SYS_DOCUMENT_TYPES)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_SYS_DOCUMENT_TYPES>()
                .HasMany(e => e.MS_SYS_DOCUMENTS_TYPE_NO_TYPES)
                .WithRequired(e => e.MS_SYS_DOCUMENT_TYPES)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_BRANCH)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_START)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_END)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_NEXTNO_DUE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOCUMENTS_TYPE_NO_TYPES>()
                .Property(e => e.DOCNO_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_BASE_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_BASE_RATE)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_EXCHANGE_RATE)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_FX_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_FX_RATE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .Property(e => e.EXR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EXCHANGE_RATES>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_SYS_EXCHANGE_RATES)
                .HasForeignKey(e => e.POLH_CURRENCY);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_OFFICIAL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_POSTAL_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_HOME_ADDRS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_PHONE1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_MOBILE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_AREA_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CONTACT_PERS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_EMAIL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_FAX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_BANK_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_BANK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_BANK_BRANCH)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CITY_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_ID1_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_ID2_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_TIN_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_REG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .Property(e => e.INT_CTP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .HasMany(e => e.MS_INTERMEDIARY_COMM)
                .WithOptional(e => e.MS_SYS_INTERMEDIARY)
                .HasForeignKey(e => e.COM_INT_CODE);

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .HasMany(e => e.INS_UWD_INTERMEDIARY_COMM)
                .WithOptional(e => e.MS_SYS_INTERMEDIARY)
                .HasForeignKey(e => e.CMM_INT_CODE); 

            modelBuilder.Entity<MS_SYS_INTERMEDIARY>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_SYS_INTERMEDIARY)
                .HasForeignKey(e => e.POLH_INTERMIDIARY);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_ARE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_ADDR1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_ADDR2)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOCATION>()
                .Property(e => e.LOC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OCCUPANCY>()
                .Property(e => e.MSO_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_CHANEL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_ADDRESS1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_PHYSICAL_LOCAT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_MOBILE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_FAX)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_EMAIL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_MANAGER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_CMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .Property(e => e.OFF_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.POLH_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACCT_PAYMNT_DTLS)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.APD_TXN_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACCT_PAYMNT_DTLS1)
                .WithOptional(e => e.MS_SYS_OFFICE1)
                .HasForeignKey(e => e.APD_DEP_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACCT_RECEIPTS_DTLS)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.ARD_TXN_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACCT_RECEIPTS_DTLS1)
                .WithOptional(e => e.MS_SYS_OFFICE1)
                .HasForeignKey(e => e.ARD_DEP_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.INT_OFFICE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACT_PAYMENTS_HEAD)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.APH_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
                .HasMany(e => e.MS_ACT_RECEIPTS_HEAD)
                .WithOptional(e => e.MS_SYS_OFFICE)
                .HasForeignKey(e => e.ARH_OFF_CODE);

            modelBuilder.Entity<MS_SYS_OFFICE>()
              .HasMany(e => e.CLM_EST_HEAD)
              .WithOptional(e => e.MS_SYS_OFFICE)
              .HasForeignKey(e => e.CLM_OFF_CODE);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .Property(e => e.PM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .HasMany(e => e.MS_ACCT_PAYMNT_DTLS)
                .WithOptional(e => e.MS_SYS_PAYMNT_MODE)
                .HasForeignKey(e => e.APD_PM_CODE);

            modelBuilder.Entity<MS_SYS_PAYMNT_MODE>()
                .HasMany(e => e.MS_ACCT_RECEIPTS_DTLS)
                .WithOptional(e => e.MS_SYS_PAYMNT_MODE)
                .HasForeignKey(e => e.ARD_PM_CODE);

            modelBuilder.Entity<MS_SYS_RATINGS_DEPENDENCY>()
                .Property(e => e.RDP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_RATINGS_DEPENDENCY>()
                .Property(e => e.RDP_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_RATINGS_DEPENDENCY>()
                .Property(e => e.RDP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_RATINGS_DEPENDENCY>()
                .Property(e => e.RDP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_RATINGS_DEPENDENCY>()
                .Property(e => e.RDP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_CNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .Property(e => e.REG_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .HasMany(e => e.MS_SYS_CITY)
                .WithOptional(e => e.MS_SYS_REGIONS)
                .HasForeignKey(e => e.CIT_REG_CODE);

            modelBuilder.Entity<MS_SYS_REGIONS>()
                .HasMany(e => e.MS_SYS_AREA)
                .WithOptional(e => e.MS_SYS_REGIONS)
                .HasForeignKey(e => e.ARE_REG_CODE);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .Property(e => e.SRB_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_SYS_SOURCE_BUSINESS)
                .HasForeignKey(e => e.POLH_BIZ_SOURCE);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.INS_UDW_INSUR_SOURCE)
                .HasForeignKey(e => e.POLH_INS_SOURCE);

            modelBuilder.Entity<MS_SYS_SOURCE_BUSINESS>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MS_SYS_SOURCE_BUSINESS)
                .HasForeignKey(e => e.INT_BIZ_SOURCE);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_F_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_L_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_M_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_FULL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_RESID_ADD)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_POST_ADD)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_ZIP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_COUNTRY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_LOCATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_POSITION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_GRADE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_ROLE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_REPORTS_TO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_PROFILE_IMG)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_EMAIL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_PASSWD1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_SALT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_PHONE_NUMBER1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_PHONE_NUMBER2)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_RECOV_TOKEN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .Property(e => e.USR_LGIN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_USERS>()
                .HasMany(e => e.MS_ACT_TXN_DOC_ACCS_RGHTS)
                .WithOptional(e => e.MS_SYS_USERS)
                .HasForeignKey(e => e.TDAR_USR_CODE);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_BPARTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_CPARTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_AGENCY_COMMISSION>()
                .Property(e => e.COM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .Property(e => e.COB_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_UDW_CLASS_OF_BUSINESS)
                .HasForeignKey(e => e.POLH_CLASS_CODE);

            modelBuilder.Entity<MS_UDW_CLASS_OF_BUSINESS>()
                .HasMany(e => e.MST_UWD_PRODUCT)
                .WithOptional(e => e.MS_UDW_CLASS_OF_BUSINESS)
                .HasForeignKey(e => e.PDT_CLASS);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_BASIC_COVER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_RATED)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_RATE_CHANGE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_SI_CHANGE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_USER_PREMIUM)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_PREM_REFUND)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_LEVELS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_RI_APPLICABLE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .Property(e => e.CVR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_UDW_COVERS)
                .HasForeignKey(e => e.POLH_SUB_CLASS_CODE);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .HasMany(e => e.MS_MOTOR_RISK_COVER)
                .WithOptional(e => e.MS_UDW_COVERS)
                .HasForeignKey(e => e.MRC_CVR_CODE);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .HasMany(e => e.MST_UWD_PRODUCT_COVERS)
                .WithOptional(e => e.MS_UDW_COVERS)
                .HasForeignKey(e => e.PCV_COV_CODE);

            modelBuilder.Entity<MS_UDW_COVERS>()
                .HasMany(e => e.INS_UWD_RISK_COVERS)
                .WithOptional(e => e.MS_UDW_COVERS)
                .HasForeignKey(e => e.RCOV_CODE);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_TYPE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_FIRST_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_LAST_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_OTHER_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_ADDRS1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_ADDRS2)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_BANK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_ACC_NUM)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_PHONE1)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_MOBILE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_EMAIL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_PROFESSION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_TITLE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_PIN_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_BANK_BRANCH)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .Property(e => e.CUS_OFFICIAL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MS_UDW_CUSTOMERS)
                .HasForeignKey(e => e.POLH_CUST_CODE);

            modelBuilder.Entity<MS_UDW_CUSTOMERS>()
                .HasMany(e => e.MS_UDW_INTERMEDIARY_COMM)
                .WithRequired(e => e.MS_UDW_CUSTOMERS)
                .HasForeignKey(e => e.COM_INT_CODE)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_INT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_PROD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_DFT_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_NEW_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_RENEWAL_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_ENDORSE_PERC)
                .HasPrecision(9, 2);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_INTERMEDIARY_COMM>()
                .Property(e => e.COM_ACTIVE_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_MAK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_LOAD_TONNAGE)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_CUBIC_CAPACITY)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_USAGE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_CHASSIS_NUM)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_FUEL_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_BODY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .Property(e => e.MMO_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE_MODEL>()
                .HasMany(e => e.INS_UWD_VEHICLE_RISK)
                .WithOptional(e => e.MS_UDW_MAKE_MODEL)
                .HasForeignKey(e => e.VEH_MODEL);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_ENT_TO_DRIVE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_LIMT_USE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_DOES_NOT_COV)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_O_D_E)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .Property(e => e.MRK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .HasMany(e => e.MS_MOTOR_PROD_RISK)
                .WithOptional(e => e.MS_UDW_MOTOR_RISK)
                .HasForeignKey(e => e.MPR_RISK_CODE);

            //modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
            //    .HasMany(e => e.MS_NCD_RISKS)
            //    .WithOptional(e => e.MS_UDW_MOTOR_RISK)
            //    .HasForeignKey(e => e.RNCD_MRK_CODE);

            modelBuilder.Entity<MS_UDW_MOTOR_RISK>()
                .HasMany(e => e.INS_UWD_VEHICLE_RISK)
                .WithOptional(e => e.MS_UDW_MOTOR_RISK)
                .HasForeignKey(e => e.VEH_RISK_CODE);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_QUT_SER_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SER_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_SUB_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_COMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CHANNEL_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CUST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_INS_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_BIZ_SOURCE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_INTERMIDIARY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_COMM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_DISC_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_LOAD_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_COINS_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_NET_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_NET_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_FEE_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_FEE_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_RENEW_SER_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_TXN_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_POL_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_DISPLAY_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_POLICY_HEAD>()
                .Property(e => e.POLH_CURRENCY_RATE)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_MRK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_PREM_TARRIFS>()
                .Property(e => e.TFF_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_PARTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_EXCHG_UNIT)
                .HasPrecision(6, 2);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_RATES>()
                .Property(e => e.RAT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_PRD_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_CVR_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_RATE_PERC)
                .HasPrecision(6, 2);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_TRANS_ORG)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_JRNL_ABBR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRANSACTION_STRUCTURE>()
                .Property(e => e.TST_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COVERAGE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_PLAN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_VISA_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DAYS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_WEEKS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_FULL_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_GENDER)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_OCCUPATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_NATIONALITY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_NATIONAL_ID)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_PASSPORT_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ISSUING_CTY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COUNTRY_VISIT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_ADDRESS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DESTIN_PHONE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_BENFI_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RELATIONSHIP)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CONTACT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DECLARATION_DTS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_ADJ_PREM_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DISC_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_DISC_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_LOAD_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMP_FEE_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_FC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_COMMISSION_BC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CVR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_SI_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_SI_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_FC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_TOT_PREM_BC)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_TRAVEL_RISK>()
                .Property(e => e.TRA_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_BRANCH)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_NUMBER)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_SYS_DOCUMENT_TYPE_NO>()
                .Property(e => e.DOCNO_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_CLASS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_SUB_CLASS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_RI_LEVEL)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_TERM)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .Property(e => e.PDT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.MS_ACCTS_INTEGRATION)
                .WithOptional(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.INT_PRODUCT);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.MS_INTERMEDIARY_COMM)
                .WithRequired(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.COM_PROD_CODE)
                .WillCascadeOnDelete(false);
       
            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.MS_UDW_INTERMEDIARY_COMM)
                .WithRequired(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.COM_PROD_CODE)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.MST_UWD_PRODUCT_COND_CLAUSES)
                .WithRequired(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.PCC_PDT_CODE)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.MST_UWD_PRODUCT_COVERS)
                .WithOptional(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.PCV_PDT_CODE);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
              .HasMany(e => e.MST_UWD_PRODUCT_LOAD_DISCOUNT)
              .WithRequired(e => e.MST_UWD_PRODUCT)
              .HasForeignKey(e => e.PLDI_PDT_CODE)
              .WillCascadeOnDelete(false);

            modelBuilder.Entity<MST_UWD_PRODUCT>()
                .HasMany(e => e.INS_UWD_POLICY_HEAD)
                .WithOptional(e => e.MST_UWD_PRODUCT)
                .HasForeignKey(e => e.POLH_CLASS_CODE);

            //modelBuilder.Entity<MST_UWD_PRODUCT>()
            //    .HasMany(e => e.INS_UWD_POLICY_HEAD)
            //    .WithOptional(e => e.MST_UWD_PRODUCT)
            //    .HasForeignKey(e => e.POLH_SUB_CLASS_CODE);

            //modelBuilder.Entity<MST_UWD_PRODUCT>()
            //    .HasMany(e => e.MS_MOTOR_PROD)
            //    .WithOptional(e => e.MST_UWD_PRODUCT)
            //    .HasForeignKey(e => e.MTP_PRD_CODE);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_COV_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_SI)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_DEF_RATE)
                .HasPrecision(19, 2);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_DFT)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_DISC)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_LOAD)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COVERS>()
                .Property(e => e.PCV_DEF_PREM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_POLH_DOC_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_POLH_END_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CURRENCY)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CURR_RATE)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_PRODUCT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COVER_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_USAGE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_VEH_REG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MAKE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_BODY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MANUFACTURE_YR)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CHASSIS_NO)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_APP)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_PERC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_MIN)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_MAX)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXCESS_FIX)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_EXTRA_TPPD)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_INTEREST)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_DETAILS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_PROP_DECLINED)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DECLINED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_POL_CANCELLED)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CANCELLED_REASON)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TOT_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_APPLICABLE)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RI_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TP_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_ADJ_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DISC_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_DISC_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_LOAD_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMP_FEE_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_COMMISSION_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_TXN_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RISK_STATE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_RENEWAL_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_END_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_VEHICLE_RISK>()
                .Property(e => e.VEH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOC_CURRENCY>()
                .Property(e => e.CUR_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOC_CURRENCY>()
                .Property(e => e.CUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_DOC_CURRENCY>()
                .Property(e => e.CUR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_CATG)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_MIN_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_MAX_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_DEFAULT_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_MIN_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_MAX_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_DEFAULT_AMT)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_AUTONCB)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_RTNG_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_SI_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_LOADINGS_DISCOUNTS>()
                .Property(e => e.LDI_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_CLAU_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_DDESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_COND_CLAUSES>()
                .Property(e => e.PCC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
                .Property(e => e.MSC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_CHANNEL>()
              .HasMany(e => e.INS_UWD_POLICY_HEAD)
              .WithOptional(e => e.MS_SYS_CHANNEL)
              .HasForeignKey(e => e.POLH_CHANNEL_CODE);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
              .Property(e => e.PLDI_LDI_CODE)
              .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
                .Property(e => e.PLDI_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
                .Property(e => e.PLDI_LDI_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
                .Property(e => e.PLDI_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
                .Property(e => e.PLDI_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MST_UWD_PRODUCT_LOAD_DISCOUNT>()
                .Property(e => e.PLDI_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .Property(e => e.MAK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_UDW_MAKE>()
                .HasMany(e => e.INS_UWD_VEHICLE_RISK)
                .WithOptional(e => e.MS_UDW_MAKE)
                .HasForeignKey(e => e.VEH_MAKE);

            modelBuilder.Entity<INS_UDW_SHORT_PERIOD>()
               .Property(e => e.SPD_PRD_CODE)
               .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_SHORT_PERIOD>()
                .Property(e => e.SPD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_TARIFF>()
                .Property(e => e.TRT_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_TARIFF>()
                .Property(e => e.TRT_PRM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<INS_UDW_TRAVEL_TARIFF>()
                .Property(e => e.TRT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_TARIFF>()
                .Property(e => e.TRT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_TRAVEL_TARIFF>()
                .Property(e => e.TRT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_SUB_CLASS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_GP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_EML_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_PML_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_DETL>()
                .Property(e => e.GD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_COMP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_TTY_SHARE)
                .HasPrecision(5, 3);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_TTY_COMM)
                .HasPrecision(5, 3);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_LEADER_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_TTY_TAX)
                .HasPrecision(5, 3);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_COMPANY>()
                .Property(e => e.TCP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_TTY_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_TTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_CESS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_OR_LIMIT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_TTY_LIMIT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_PROFIT_COMM)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_MGT_EXP_RATIO)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_PREM_RSVE_RATIO)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_OS_CLM_RSVE_RATIO)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_DEPOSIT_PREM)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_EST_PREM)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_CASH_CALL_LIMIT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_CLM_ADVICE_LIMIT)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_LOSS_CFWD_YEARS)
                .HasPrecision(10, 2);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .Property(e => e.TD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_DETL>()
                .HasMany(e => e.MS_RI_PTTY_COMPANY)
                .WithOptional(e => e.MS_RI_PTTY_DETL)
                .HasForeignKey(e => e.TCP_TD_SYS_ID);          

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_TTY_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_CURRENCY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_CUR_RATE)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_QS_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_QS_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_UW_BASIS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_TTY_PRME_BASIS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_RI_LEVEL)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_WAR_YN)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .Property(e => e.TH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_HEAD>()
                .HasMany(e => e.MS_RI_PTTY_DETL)
                .WithOptional(e => e.MS_RI_PTTY_HEAD)
                .HasForeignKey(e => e.TD_TH_SYS_ID);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_SCLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_TTY_LIMIT_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_TTY_LIMIT_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_PTTY_SUBCLASS>()
                .Property(e => e.TSC_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_TTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                .Property(e => e.GP_CONFIRM)
                .IsUnicode(false);         

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
               .HasMany(e => e.MS_RI_GROUP_DETL)
               .WithRequired(e => e.MS_RI_GROUP_HEAD)
               .HasForeignKey(e => e.GD_GP_CODE)
               .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_RI_GROUP_HEAD>()
                 .HasMany(e => e.MS_RI_PTTY_HEAD)
                 .WithRequired(e => e.MS_RI_GROUP_HEAD)
                 .HasForeignKey(e => e.TH_TTY_CODE)
                 .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_EQZONE>()
                .Property(e => e.EQZ_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_SYS_FIRE_RISK>()
                .Property(e => e.FRK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_UDW_INSUR_SOURCE>()
                .Property(e => e.INSUR_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_PRINCIPAL)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_SI)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_PRM)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .Property(e => e.CLM_RISK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_BONDS_RISK_DTLS>()
                .HasMany(e => e.CLM_EST_DTLS)
                .WithRequired(e => e.CLM_EST_BONDS_RISK_DTLS)
                .HasForeignKey(e => e.CLM_EST_RISK_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_AMT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_OS_AMT)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .Property(e => e.CLM_EST_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_DTLS>()
                .HasMany(e => e.CLM_EST_EXPENSE)
                .WithOptional(e => e.CLM_EST_DTLS)
                .HasForeignKey(e => e.CLM_EXP_CLM_EST_SYS_ID);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_COST)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_CLM_EST_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_EXPENSE>()
                .Property(e => e.CLM_EXP_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CONS_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_RI_EML)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_EML_SI)
                .HasPrecision(19, 2);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .Property(e => e.CLM_RISK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_FIRE_RISK_DTLS>()
                .HasMany(e => e.CLM_EST_DTLS)
                .WithRequired(e => e.CLM_EST_FIRE_RISK_DTLS)
                .HasForeignKey(e => e.CLM_EST_RISK_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_OFF_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_LOSS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_LOSS_PLACE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_REMARKS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_N0)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_CLT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_TIME_BRD)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_WART_BRCH)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_RPDT)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_CAT)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_CAT_EVNT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .Property(e => e.CLM_CLT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .HasMany(e => e.CLM_EST_BONDS_RISK_DTLS)
                .WithRequired(e => e.CLM_EST_HEAD)
                .HasForeignKey(e => e.CLM_RISK_CLM_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .HasMany(e => e.CLM_EST_DTLS)
                .WithOptional(e => e.CLM_EST_HEAD)
                .HasForeignKey(e => e.CLM_EST_CLM_SYS_ID);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .HasMany(e => e.CLM_EST_FIRE_RISK_DTLS)
                .WithRequired(e => e.CLM_EST_HEAD)
                .HasForeignKey(e => e.CLM_RISK_CLM_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .HasMany(e => e.CLM_EST_RISK_DTLS)
                .WithRequired(e => e.CLM_EST_HEAD)
                .HasForeignKey(e => e.CLM_RISK_CLM_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_HEAD>()
                .HasMany(e => e.CLM_EST_TRAVEL_RISK_DTLS)
                .WithRequired(e => e.CLM_EST_HEAD)
                .HasForeignKey(e => e.CLM_RISK_CLM_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_VEH_REG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_ENG_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_VEH_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_VEH_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_MAKE_MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CHASIS_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CLT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_NAT)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_NAT_ID)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_PASSPORT_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_COUNTRY_VISITED)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_DESTIN_ADDRSS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_PHONE_NO)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .Property(e => e.CLM_RISK_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<CLM_EST_TRAVEL_RISK_DTLS>()
                .HasMany(e => e.CLM_EST_DTLS)
                .WithRequired(e => e.CLM_EST_TRAVEL_RISK_DTLS)
                .HasForeignKey(e => e.CLM_EST_RISK_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .Property(e => e.CLM_CAT_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAT_EVENT>()
                .HasMany(e => e.CLM_EST_HEAD)
                .WithOptional(e => e.MS_CLM_CAT_EVENT)
                .HasForeignKey(e => e.CLM_CAT_EVNT_CODE);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .Property(e => e.CLM_CAUSE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_CAUSE_LOSS>()
                .HasMany(e => e.CLM_EST_HEAD)
                .WithOptional(e => e.MS_CLM_CAUSE_LOSS)
                .HasForeignKey(e => e.CLM_LOSS_CODE);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_NAME)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .Property(e => e.CLM_EST_TYPE_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .HasMany(e => e.CLM_EST_DTLS)
                .WithOptional(e => e.MS_CLM_EST_TYPE)
                .HasForeignKey(e => e.CLM_EST_TYPE);

            modelBuilder.Entity<MS_CLM_EST_TYPE>()
                .HasMany(e => e.CLM_EST_EXPENSE)
                .WithOptional(e => e.MS_CLM_EST_TYPE)
                .HasForeignKey(e => e.CLM_EXP_CLM_EST_TYPE);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
              .Property(e => e.PRF_FEE_CODE)
              .IsUnicode(false);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
                .Property(e => e.PRF_PDT_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
                .Property(e => e.PRF_FEE_AMOUNT)
                .IsUnicode(false);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
                .Property(e => e.PRF_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
                .Property(e => e.PRF_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_PRODUCT_RISK_FEES>()
                .Property(e => e.PRF_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_COMPULSORY_FEES>()
                .HasMany(e => e.MS_PRODUCT_RISK_FEES)
                .WithOptional(e => e.MS_COMPULSORY_FEES)
                .HasForeignKey(e => e.PRF_PDT_CODE);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_SLIPNO)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_CLOSE_FLAG)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_ALLOC_PERC)
                .HasPrecision(9, 6);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_LIMIT_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_LIMIT_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_COMM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_TTY_COMM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .Property(e => e.TTA_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_ALLOCATION>()
                .HasMany(e => e.INS_RI_TTY_SHARE)
                .WithRequired(e => e.INS_RI_TTY_ALLOCATION)
                .HasForeignKey(e => e.TTS_TTA_SYS_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
               .Property(e => e.TTH_REF_ID)
               .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_COMB_LOC_ID)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_CLASS_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_SC_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_POLNUM)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_INS_SRCE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_TOTAL_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_TOTAL_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_TOTAL_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_TOTAL_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_RI_SI_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_RI_SI_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_RI_PREM_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_RI_PREM_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_ADJ_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_EML_PERC)
                .HasPrecision(5, 2);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_RI_ACC_YN)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_ACC_SI_FC)
                .HasPrecision(38, 0);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_ACC_SI_BC)
                .HasPrecision(38, 0);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
                .Property(e => e.TTH_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_HEAD>()
              .HasMany(e => e.INS_RI_TTY_ALLOCATION)
              .WithOptional(e => e.INS_RI_TTY_HEAD)
              .HasForeignKey(e => e.TTA_TTH_SYS_ID);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
               .Property(e => e.TTS_RI_COMP)
               .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_TTY_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_SHARE_PERC)
                .HasPrecision(5, 3);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_SHARE_SI_FC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_SHARE_SI_BC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_SHARE_PREM_FC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_SHARE_PREM_BC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_RI_COMM_PERC)
                .HasPrecision(5, 3);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_RI_COMM_FC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_RI_COMM_BC)
                .HasPrecision(17, 2);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_RI_TAX_PERC)
                .HasPrecision(5, 3);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_TAX_FC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_TAX_BC)
                .HasPrecision(17, 3);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<INS_RI_TTY_SHARE>()
                .Property(e => e.TTS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
               .Property(e => e.CFB_RUN_BASIS)
               .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
                .Property(e => e.CFB_RUN_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
                .Property(e => e.CFB_NO_CLMS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
                .Property(e => e.CFB_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
                .Property(e => e.CFB_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_BASIS>()
                .Property(e => e.CFB_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_PRD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_FROM_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_TO_YEAR)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_PERC)
                .HasPrecision(10, 3);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_DTLS>()
                .Property(e => e.NCD_DTLS_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .Property(e => e.NCD_CODE)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .Property(e => e.NCD_DESC)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .Property(e => e.NCD_CRTE_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .Property(e => e.NCD_MOD_BY)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .Property(e => e.NCD_STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .HasMany(e => e.MS_NCD_BASIS)
                .WithOptional(e => e.MS_NCD_RISKS)
                .HasForeignKey(e => e.CFB_NCD_SYS_ID);

            modelBuilder.Entity<MS_NCD_RISKS>()
                .HasMany(e => e.MS_NCD_DTLS)
                .WithOptional(e => e.MS_NCD_RISKS)
                .HasForeignKey(e => e.NCD_DTLS_NCD_SYS_ID);
        }
    }
}
