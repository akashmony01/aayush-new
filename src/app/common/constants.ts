import {environment} from '@env';

export class Constants {
    public static APP_NAME = 'skipline';
    public static APP_NAME1 = 'skipline';
    public static APP_ANALYTICS = `${environment.API_ENDPOINT}analytics/`;
    // use this for prod or local with auth
    public static API_SKIPLINE = `${environment.API_ENDPOINT}${Constants.APP_NAME}`;
    // for local testing without auth use this
    // public static API_SKIPLINE = `${environment.API_ENDPOINT}`;
    public static API_MYCRITIC = `${environment.API_ENDPOINT}mycritic/`;
    public static API_HOSPITAL = `${environment.API_ENDPOINT}hospital/`;

    // api urls for Doctor Service
    public static API_DOCTOR = `${Constants.API_SKIPLINE}/doctor`;
    public static API_GET_DOCTORS_BY_ADMIN = `${Constants.API_DOCTOR}/admin`;
    public static API_ADD_DOCTOR_BY_ADMIN = `${Constants.API_DOCTOR}/add`;
    public static API_UPDATE_DOCTOR = `${Constants.API_DOCTOR}/update`;
    public static API_DELETE_DOCTOR = `${Constants.API_DOCTOR}/delete`;
    public static API_GET_APPOINTMNETS_DOCTORID_DATE = `${Constants.API_DOCTOR}/getAppointmentDataByDoctorAndDate`;
    public static API_GET_DOCTOR_BY_DOCTOR_ADMIN_ID = `${Constants.API_DOCTOR}/getDoctorByDoctorAdminId`;

    // api urls for Product Service
    public static API_PRODUCT = `${Constants.API_SKIPLINE}/product`;
    public static API_PRODUCT_ALL = `${Constants.API_PRODUCT}/getAllProductsByAdminId`;
    public static API_PRODUCT_ADD = `${Constants.API_PRODUCT}/add`;

    // api urls for Cart Service
    public static API_CART = `${Constants.API_SKIPLINE}/cart`;
    public static API_GENERATE_CART = `${Constants.API_CART}/addCart`;
    public static API_ADD_CARTITEMS = `${Constants.API_CART}/addCartItem`;
    public static API_GET_CART = `${Constants.API_CART}/getOrderByAppointmentId`;
    public static API_GET_INVOICE = `${Constants.API_CART}/getOrderByUniqueId`;
    public static API_EDIT_CART = `${Constants.API_CART}/updateCart`;
    public static API_EDIT_CARTITEMS = `${Constants.API_CART}/updateCartItem`;

    //api urls for Messaging Log
    public static MESSAGELOG = `${Constants.API_SKIPLINE}/messagingLog`;

    // api urls for Category Service
    public static API_CATEGORY = `${Constants.API_SKIPLINE}/category`;
    public static API_CATEGORY_GETPRODUCTS = `${Constants.API_CATEGORY}/admin`;

    // api urls for Customer Service
    public static API_CATEGORY_ALL = `${Constants.API_CATEGORY}/admin`;
    public static API_PRODUCT_CATEGORY_ADD = `${Constants.API_CATEGORY}/add`;

    // api urls for Customer Service
    public static API_CUSTOMER = `${Constants.API_SKIPLINE}/customer`;
    public static API_CUSTOMER_HISTORY = `${Constants.API_CUSTOMER}/getCustomerHistoryByCustomerId`;
    public static API_SEARCH_CUSTOMER_BY_PHONE = `${Constants.API_CUSTOMER}/getCustomersByPhoneNumber`;
    public static API_SEARCH_CUSTOMER_BY_AADHAAR_PHONE_NAME = `${Constants.API_CUSTOMER}/getCustomersByAadhaarPhoneName`;
    public static API_CUSTOMER_APPT_CLAIM_HISTORY = `${Constants.API_CUSTOMER}/getCustomerAppointmentAndClaimHistoryByPhoneNumber`;
    public static API_CUSTOMER_BY_ADMIN_ID = `${Constants.API_CUSTOMER}/getCustomersByAdminId`;
    public static API_SEND_PROMOTIONS = `${Constants.API_CUSTOMER}/sendPromotion`;
    public static API_CUSTOMER_PORTAL = `${Constants.API_CUSTOMER}/getCustomerHistory`;
    public static API_CUSTOMER_VALIDATION = `${Constants.API_CUSTOMER}/customerValidation`;
    public static API_ADD_CUSTOMER = `${Constants.API_CUSTOMER}/addNewCustomer`;
    public static API_GET_PATIENT_SNAPSHOT_BY_PATIENT_ID = `${Constants.API_CUSTOMER}/customerSnapshot`;
    public static API_ADD_PATIENT_VITALS_BY_APPT_ID = `${Constants.API_CUSTOMER}/addPatientVitals`;
    public static API_ADD_PRE_EXISTING_CONDITION = `${Constants.API_CUSTOMER}/addPreExistingCondition`;
    public static API_DELETE_PRE_EXISTING_CONDITION = `${Constants.API_CUSTOMER}/preExistingCondition/delete`;
    public static API_DELETE_PATIENT_VITALS_ID = `${Constants.API_CUSTOMER}/deletePatientVitals/delete`;
    public static API_GET_PATIENT_VITALS_BY_APPT_ID = `${Constants.API_CUSTOMER}/patientVitals/appointmentId`;
    public static API_GET_PATIENT_VISIT_SYMPTOMS = `${Constants.API_CUSTOMER}/patientSymptoms/appointmentId`;

    public static API_GET_ALL_VACCINATIONS_LIST = `${Constants.API_CUSTOMER}/vaccinations/getAllVaccinationsList`;
    public static API_GET_ALL_VACCINATIONS_LIST_BY_PATIENT_ID = `${Constants.API_CUSTOMER}/vaccinations/getVaccinationsByPatient`;
    public static API_ADD_PATIENT_VACCINATION = `${Constants.API_CUSTOMER}/addVaccination`;
    public static API_DELETE_PATIENT_VACCINATION = `${Constants.API_CUSTOMER}/vaccinationRecord/delete`;
    public static API_GET_ALL_MEDICATIONS_LIST = `${Constants.API_CUSTOMER}/medication/getAllMedicationList`;
    public static API_ADD_PATIENT_MEDICATION = `${Constants.API_CUSTOMER}/medications/addPatientMedicationHistory`;
    public static API_DELETE_PATIENT_MEDICATION = `${Constants.API_CUSTOMER}/medications/historyDelete`;
    public static API_GET_PATIENT_MEDICATION_BY_APPOINTMENT_ID = `${Constants.API_CUSTOMER}/medications/getHistoryByAppointment`;
    public static API_GET_PATIENT_MEDICATION_BY_PATIENT_ID = `${Constants.API_CUSTOMER}/medications/getHistoryByPatient`;
    public static API_ADD_PATIENT_MEDICATION_ALLERGIES = `${Constants.API_CUSTOMER}/allergies/addPatientMedicationAllergies`;
    public static API_GET_PATIENT_MEDICATION_ALLERGIES_BY_PATIENT_ID = `${Constants.API_CUSTOMER}/allergies/getMedicationAllergiesByPatient`;
    public static API_DELETE_PATIENT_MEDICATION_ALLERGIES = `${Constants.API_CUSTOMER}/allergies/deleteMedicationAllergies`;




    // api urls for Appointment Service
    public static API_APPOINTMENT = `${Constants.API_SKIPLINE}/appointment`;
    public static API_GET_ALL_APPOINTMENTS = `${Constants.API_APPOINTMENT}/getAllAppointmentData`;
    public static API_GET_APPOINTMENTS = `${Constants.API_APPOINTMENT}/v2/getAppointmentDataByDate`;
    public static API_GET_WEEK_APPOINTMENTS = `${Constants.API_APPOINTMENT}/getWeekAppointments`;
    public static API_UPDATE_APPOINTMENT = `${Constants.API_APPOINTMENT}/updateAppointment`;
    public static API_UPDATE_APPOINTMENT_V2 = `${Constants.API_APPOINTMENT}/v2/updateAppointment`;
    public static API_UPDATE_APPOINTMENT_BY_DOCTOR = `${Constants.API_APPOINTMENT}/updateAppointmentByDoctor`;
    public static API_UPDATE_APPOINTMENT_STATUS = `${Constants.API_APPOINTMENT}/updateAppointmentStatus`;
    public static API_ADD_APPOINTMENT = `${Constants.API_APPOINTMENT}/newAddAppointment`;
    public static API_ADD_APPOINTMENT_V2 = `${Constants.API_APPOINTMENT}/v2/addAppointment`;
    public static API_DELETE_APPOINTMENT = `${Constants.API_APPOINTMENT}/deleteAppointment`;
    public static API_ONLINE_APPOINTMENTS = `${Constants.API_APPOINTMENT}/getOpenAptSlotsByDate` ;
    public static API_OPENSLOTS_QUEUE = `${Constants.API_APPOINTMENT}/getOpenAptSlotsByQueue` ;
    public static API_ONLINE_ADD_APPOINTMENT = `${Constants.API_APPOINTMENT}/addOnlineAppointment`;
    public static API_GET_SYMPTOMS_BY_APPT_ID = `${Constants.API_CUSTOMER}/patientVitals/appointmentId`;
    public static API_DELETE_SYMPTOMS = `${Constants.API_APPOINTMENT}/medicalSymptom/delete`;
    public static API_ADD_PATIENT_SYMPTOMS = `${Constants.API_APPOINTMENT}/addAllAppointmentSymptoms`;

    // api urls for Dashboard Service
    public static API_DASHBOARD = `${Constants.API_SKIPLINE}/dashboard`;
    public static API_DASHBOARD_GRAPH_DATA = `${Constants.API_DASHBOARD}/dashboardGraphData`;
    public static API_DASHBOARD_DAYS_DATA = `${Constants.API_DASHBOARD}/dashboardDaysData`;
    public static API_DASHBOARD_DATA = `${Constants.API_DASHBOARD}/dashboardData`;
    public static API_DASHBOARD_TOTAL_AMOUNT_COLLECTED = `${Constants.API_APPOINTMENT}/totalAmountCollected`;
    public static API_DASHBOARD_DAYS_AMOUNT_COLLECTED = `${Constants.API_APPOINTMENT}/daysAmountCollected`;

    // api urls for Topline Dashboard Service
    public static API_DASHBOARD_ADMIN = `${Constants.APP_ANALYTICS}dashboard/v2/getAdmins`;
    public static API_TOPLINE_DASHBOARD = `${Constants.APP_ANALYTICS}hospitaltoplinemetrics`;
    public static API_TOPLINE_DASHBOARD_TOTAL_APPOINTMENTS = `${Constants.API_TOPLINE_DASHBOARD}/totalAppointments`;
    public static API_TOPLINE_DASHBOARD_COMPLETED_APPOINTMENTS = `${Constants.API_TOPLINE_DASHBOARD}/completedAppointments`;
    public static API_TOPLINE_DASHBOARD_CANCELLED_APPOINTMENTS = `${Constants.API_TOPLINE_DASHBOARD}/cancelledAppointments`;
    public static API_TOPLINE_DASHBOARD_NOSHOW_APPOINTMENTS = `${Constants.API_TOPLINE_DASHBOARD}/noshowAppointments`;
    public static API_TOPLINE_DASHBOARD_ACTIVE_APPOINTMENTS = `${Constants.API_TOPLINE_DASHBOARD}/activeAppointments`;
    public static API_TOPLINE_DASHBOARD_TOP_REASONS = `${Constants.API_TOPLINE_DASHBOARD}/topReasons`;
    public static API_TOPLINE_DASHBOARD_DOCTORS = `${Constants.API_TOPLINE_DASHBOARD}/doctors`;
    public static API_TOPLINE_DASHBOARD_GENDER = `${Constants.API_TOPLINE_DASHBOARD}/gender`;
    public static API_TOPLINE_DASHBOARD_AGE = `${Constants.API_TOPLINE_DASHBOARD}/age`;

    // api urls for Performance Dashboard Service
    public static API_COMPARISON_DASHBOARD = `${Constants.APP_ANALYTICS}comparisonmetrics`;
    public static API_COMPARISON_DASHBOARD_TOTAL_APPOINTMENTS = `${Constants.API_COMPARISON_DASHBOARD}/totalAppointments`;
    public static API_COMPARISON_DASHBOARD_COMPLETED_APPOINTMENTS = `${Constants.API_COMPARISON_DASHBOARD}/completedAppointments`;
    public static API_COMPARISON_DASHBOARD_CANCELLED_APPOINTMENTS = `${Constants.API_COMPARISON_DASHBOARD}/cancelledAppointments`;
    public static API_COMPARISON_DASHBOARD_NOSHOW_APPOINTMENTS = `${Constants.API_COMPARISON_DASHBOARD}/noshowAppointments`;
    public static API_COMPARISON_DASHBOARD_ACTIVE_APPOINTMENTS = `${Constants.API_COMPARISON_DASHBOARD}/activeAppointments`;
    public static API_COMPARISON_DASHBOARD_AGE = `${Constants.API_COMPARISON_DASHBOARD}/age`;

    // api urls for Performance Dashboard Service
    public static API_PERFORMANCE_DASHBOARD = `${Constants.APP_ANALYTICS}performancedash`;
    public static API_PERFORMANCE_DASHBOARD_TOP_APPOINTMENTS = `${Constants.API_PERFORMANCE_DASHBOARD}/top5Appointments`;
    public static API_PERFORMANCE_DASHBOARD_BOTTOM_APPOINTMENTS = `${Constants.API_PERFORMANCE_DASHBOARD}/bottom5Appointments`;
    public static API_PERFORMANCE_DASHBOARD_TOP_DOCTORS = `${Constants.API_PERFORMANCE_DASHBOARD}/topTreatingDoctors`;
    public static API_PERFORMANCE_DASHBOARD_BOTTOM_DOCTORS = `${Constants.API_PERFORMANCE_DASHBOARD}/bottomTreatingDoctors`;
    public static API_PERFORMANCE_DASHBOARD_TOP_REASONS = `${Constants.API_PERFORMANCE_DASHBOARD}/topReasons`;
    public static API_PERFORMANCE_DASHBOARD_BOTTOM_REASONS = `${Constants.API_PERFORMANCE_DASHBOARD}/bottomReasons`;
    public static API_PERFORMANCE_DASHBOARD_GOOD_FEEDBACK = `${Constants.API_PERFORMANCE_DASHBOARD}/goodFeedback`;
    public static API_PERFORMANCE_DASHBOARD_BAD_FEEDBACK = `${Constants.API_PERFORMANCE_DASHBOARD}/badFeedback`;

    // api urls for Forgot Service
    public static API_FORGOT_PASSWORD = `${environment.API_ENDPOINT}identity/api/forgotPassword`;
    public static API_UPDATE_PASSWORD = `${environment.API_ENDPOINT}identity/api/updatePassword`;
    public static API_SEND_SVEFN_EMAIL = `${environment.API_ENDPOINT}identity/api/sendEmailSvefn`;

    // api urls for Queue Service
    public static API_QUEUE = `${Constants.API_SKIPLINE}/queue`;
    public static API_QUEUE_GETALLQUEUESBY_ADMINID = `${Constants.API_QUEUE}/getAllQueuesByAdminId`;
    public static API_ADD_QUEUE = `${Constants.API_QUEUE}/addQueue`;
    public static API_ADD_QUEUE_V2 = `${Constants.API_QUEUE}/v2/add`;
    public static API_UPDATE_QUEUE = `${Constants.API_QUEUE}/update`;
    public static API_UPDATE_QUEUE_V2 = `${Constants.API_QUEUE}/v2/update`;
    public static API_INACTIVATE_QUEUE = `${Constants.API_QUEUE}/inActivateQueue`;
    public static API_GETALLQUEUES = `${Constants.API_QUEUE}/getQueuesByAdminId`;
    public static API_GET_QUEUE_SCHEDULE = `${Constants.API_QUEUE}/schedule`;

    // api urls for Admin Service
    public static API_ADMIN = `${Constants.API_SKIPLINE}/admin`;
    public static API_ADMIN_FLAGS = `${Constants.API_ADMIN}/getAdminFlags`;
    public static API_ADMIN_UPDATEFLAGS = `${Constants.API_ADMIN}/updateAdminFlags`;
    public static API_CREATE_NEWADMIN = `${Constants.API_ADMIN}/register`;
    public static API_CREATE_NEWADMIN_V2 = `${Constants.API_ADMIN}/v2/register`;
    public static API_GET_ALL_ROLES = `${Constants.API_ADMIN}/getAllRoles`;
    public static API_UPDATE_DYNAMIC_TEMPLATE = `${Constants.API_ADMIN}/updateDynamicTemplate`;
    public static API_GET_ALL_ADMIN_BY_ROLE = `${Constants.API_ADMIN}/getAllAdminsByRole`;

    public static API_UPDATE_STATUSSCREEN = `${Constants.API_ADMIN}/updateStatusScreen1`;
    public static API_ENABLE_REMINDERS = `${Constants.API_ADMIN}/enableReminders`;
    public static API_UPDATE_SUBSCRIPTION = `${Constants.API_ADMIN}/updateSubscription`;

    // api url for login
    public static API_LOGIN = `${environment.API_ENDPOINT}identity/api/login`;

    // api urls for Feedback Dashboard
    public static API_CREATE_NEWADMIN_MYCRITIC = `${Constants.API_HOSPITAL}admin/register`;

    public static API_FEEDBACK_DASHBOARD = `${Constants.API_MYCRITIC}dashboard`;
    public static API_FEEDBACK_OPTIONS = `${Constants.API_MYCRITIC}opinion`;
    public static API_FEEDBACK_ADMINS = `${Constants.API_MYCRITIC}hospital`;

    public static API_FEEDBACK_GET_ADMINS_FOR_ORG = `${Constants.API_HOSPITAL}admin/getAdminsWRTOrgId`;
    public static API_FEEDBACK_USP_RESPONSES = `${Constants.API_FEEDBACK_DASHBOARD}/uspResponses`;
    public static API_FEEDBACK_GET_DASHBOARDCOMMENTS = `${Constants.API_FEEDBACK_DASHBOARD}/getDashboardComments`;
    public static API_FEEDBACK_GET_ALLOPINIONCOUNTS = `${Constants.API_FEEDBACK_DASHBOARD}/uspOpinionResponses`;
    public static API_FEEDBACK_GET_DAYSOPINIONCOUNTS = `${Constants.API_FEEDBACK_DASHBOARD}/uspOpinionResponses`;
    public static API_FEEDBACK_USP_GRAPHRESPONSES = `${Constants.API_FEEDBACK_DASHBOARD}/uspGraphResponses`;

    public static API_FEEDBACK_GETCUSTOMOPINIONS = `${Constants.API_FEEDBACK_OPTIONS}/getCustomOpinions`;
    public static API_FEEDBACK_SAVECUSTOMOPINIONS = `${Constants.API_FEEDBACK_OPTIONS}/saveCustomOpinions`;
    public static API_ADD_OPINION = `${Constants.API_FEEDBACK_OPTIONS}/add`;

    public static API_ZOOM = `${Constants.API_SKIPLINE}/zoom`;
    public static API_ZOOM_GET = `${Constants.API_ZOOM}/meeting`;
    public static API_ZOOM_CREATE_MEETING = `${Constants.API_ZOOM}/meeting/create`;

    // api urls for lab & pharmacy Service
    public static API_LAB_REQUEST = `${Constants.API_SKIPLINE}/lab/request`;
    public static API_LAB_REPORT = `${Constants.API_SKIPLINE}/lab/report`;
    public static API_PHARMACY_REQUEST = `${Constants.API_SKIPLINE}/prescription/request`;
    public static API_CREATE_PRESCRIPTION = `${Constants.API_PHARMACY_REQUEST}/create`;
    public static API_UPDATE_PRESCRIPTION = `${Constants.API_PHARMACY_REQUEST}/update`;
    public static API_UPLOAD_PRESCRIPTION_FILE = `${Constants.API_PHARMACY_REQUEST}/file/upload`;
    public static API_GET_PRESCRIPTION_PHARMACY_ID = `${Constants.API_PHARMACY_REQUEST}/pharmacy`;
    public static API_GET_PRESCRIPTION_CUSTOMER_ID = `${Constants.API_PHARMACY_REQUEST}/customerId`;
    public static API_GET_PRESCRIPTION_APPOINTMENT_ID = `${Constants.API_PHARMACY_REQUEST}/appointment`;

    public static API_CREATE_LAB_REQUEST = `${Constants.API_LAB_REQUEST}/create`;
    public static API_UPDATE_LAB_REQUEST = `${Constants.API_LAB_REQUEST}/update`;
    public static API_UPLOAD_LAB_REQUEST_FILE = `${Constants.API_LAB_REQUEST}/file/upload`;
    public static API_UPLOAD_LAB_REPORT_FILE = `${Constants.API_LAB_REPORT}/file/upload`;
    public static API_GET_LAB_REQUESTS_LAB_ID = `${Constants.API_LAB_REQUEST}/lab`;
    public static API_GET_LAB_REQUESTS_CUSTOMER_ID = `${Constants.API_LAB_REQUEST}/customerId`;
    public static API_GET_LAB_REQUESTS_APPOINTMENT_ID = `${Constants.API_LAB_REQUEST}/appointment`;


    public static API_BLOB = `${Constants.API_SKIPLINE}/blob`;
    public static API_GET_ALL_FILES = `${Constants.API_BLOB}/files`;
    public static API_GET_ALL_FILES_NO_AUTH = `${Constants.API_BLOB}/customer/files`;
    public static API_UPLOAD_FILE = `${Constants.API_BLOB}/upload`;
    public static API_UPLOAD_MULTIPLE_FILES = `${Constants.API_BLOB}/upload/multiple`;
    public static API_DELETE_FILE = `${Constants.API_BLOB}/delete`;
    public static API_DOWNLOAD_FILE =  `${Constants.API_BLOB}/download`;
    public static RENAME_FILES =  false;
    public static UPLOAD_ACCEPTABLE_FILE_TYPES = ['application/doc', 'application/docx', 'application/msword', 'image/jpg', 'image/jpeg', 'image/png', 'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ];

    // api url for OTPs
    public static API_OTP = `${Constants.API_SKIPLINE}/textMessage` ;
    public static GET_OTP = `${Constants.API_OTP}/getOTP`;
    public static VERIFY_OTP = `${Constants.API_OTP}/verifyOTP`;
    public static RESEND_OTP = `${Constants.API_OTP}/resendOTP`;

    // api url for time slot
    public static TIME_SLOT = `${Constants.API_SKIPLINE}/appointment/getOpenAptSlotsByQueue`;
    // navigation paths - dashboard
    public static NAV_ANALYTICS_DASHBOARD = '/analytics';
    public static NAV_DASHBOARD = '/dashboard';
    public static NAV_FEEDBACKDASHBOARD = `${Constants.NAV_DASHBOARD}/feedback-dashboard`;

    // navigation paths - appointments
    public static NAV_LOGIN = '/login';
    public static NAV_LANDING_PAGE = '/home';
    public static NAV_APPOINTMENTS = '/tabs/appointments';
    public static NAV_DOCTOR_PAGE = '/doctor';
    public static NAV_NEW_PATIENT = '/tabs/new-patient';
    public static NAV_ADD_APPOINTMENT = '/add-appointment';
    public static NAV_QUEUE_DETAILS = `${Constants.NAV_DASHBOARD}/queue-details`;
    public static NAV_EDIT_QUEUE = `${Constants.NAV_DASHBOARD}/edit-queue`;
    public static NAV_ADD_APPOINT = `/tabs/dashboard/add-appointment`;
    public static NAV_EDIT_APPOINTMENT = `/edit-appointment`
    public static NAV_ANALYTICS_TOPLINE = `/analytics`
    public static NAV_ANALYTICS_PERFORMANCE = `/analytics-performance`;
    public static NAV_ANALYTICS_COMPARISON = `/analytics-comparison`;
    public static NAV_EDIT_APPOINT = `${Constants.NAV_DASHBOARD}/edit-appointment`;
    public static NAV_CART_ITEMS = `${Constants.NAV_DASHBOARD}/cart-items`;
    public static NAV_CART_MODEL = `${Constants.NAV_DASHBOARD}/cart-model`;

    // navigation paths - seach
    public static NAV_SEARCH = '/tabs/search';
    public static NAV_PATIENT_DETAILS = '/tabs/search/patient-history';
    public static NAV_CUSTOMER_HISTORY = '/tabs/search/customer-history';

   // navigation paths - dashboard
    public static NAV_TOPLINE_DASHBOARD = '/tabs/topline';
    public static NAV_PERFORMANCE_DASHBOARD = '/tabs/performance'
    // navigation paths - doctor
    public static NAV_DOCTOR = 'doctor';
    public static NAV_PATIENTFULLINFORMATION = `/patient-full-info`;

    // navigation paths - settings
    public static NAV_SETTINGS = 'settings';
    public static NAV_PHARMASIST = '/tabs/pharmasist';
    public static NAV_DIAGNOSTIC_LAB = '/tabs/diagnostic';
    public static NAV_CHANGE_PASSWORD = `${Constants.NAV_SETTINGS}/changePassword`;
    public static NAV_DYN_TEMPLATE = `${Constants.NAV_SETTINGS}/dynamicTemplate`;
    public static NAV_SEND_PROMOS = `${Constants.NAV_SETTINGS}/sendPromotions`;
    public static NAV_PRODUCTS = `${Constants.NAV_SETTINGS}/products`;
    public static NAV_MESSAGELOG = `${Constants.NAV_SETTINGS}/messagelog`;
    public static NAV_ADD_QUEUE = `${Constants.NAV_SETTINGS}/add-queue`;
    public static NAV_ADD_DOCTOR = `${Constants.NAV_SETTINGS}/add-doctor`;
    public static NAV_FEEDBACK_OPTIONS = `${Constants.NAV_SETTINGS}/feedback-options`;
    public static DOCTOR_LIST_PAGE = `${Constants.NAV_SETTINGS}/doctors`;
    public static NAV_PROFILE_OPTIONS = `${Constants.NAV_SETTINGS}/profile`;
    public static NAV_FORGOT_PASSWORD = 'forgot-password';
    public static NAV_CUSTOMER_PORTAL = 'customer-portal';
    public static NAV_CUSTOMER_LOGIN  = 'customer-login';

    public static NAV_THEME_SETTINGS = `${Constants.NAV_SETTINGS}/theme-settings`;
    public static NAV_ADMIN_FLAGS = `${Constants.NAV_SETTINGS}/admin-flags`;
    public static NAV_APPOINTMENTDETAILS = '/appointment-details';

    // patterns
    public static DATE_FORMAT = 'yyyy-MM-dd';
    public static DATE_T_FORMAT = 'yyyy-MM-ddT';
    public static DATETIME_T_FORMAT = 'yyyy-MM-ddTHH:mm:ss';
    public static DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';
    public static PATTERN_MOBILE = '^((\\+91-?)|0)?[0-9]{10}$';

    // local storage
    public static USER_ACCESS = 'user-access';
    public static LANGUAGE_SELECTION = 'language';
    public static APPOINTMENT = 'appointment';
    public static QUEUE = 'queue';
    public static CUSTOMER_LIST = 'customerlist';
    public static CUSTOMER_COUNT = 'noofcustomers';
    public static APPDATA = 'appdata';
    public static SUPER_ADMIN_ROLE = 'SUPERADMIN';
    public static DOCTOR_ROLE = 'DOCTOR';
    public static ANALYTICS_ADMIN_ROLE = 'ANALYTICS_ADMIN';
    public static PHONENUMBER = 'phonenumber';
    public static APPOINTMENTDETAILS = 'appointmentdetails';
    public static PATIENTDETAILS = 'patientdetails';
    public static CUSTOMERSLIST = 'customerslist';

    public static INFO_MESSAGE_FOR_EMPTY_SCHEDULE = 'Looks like the schedule for this queue is not set. Initializing with default values. ' +
        'Please update the times accordingly and save the changes.';
    public static DEFAULT_LANGUAGE = 'english';
    public static TELUGU_LANGUAGE = 'telugu';
    public static APPOINTMENT_STATUS_ACTIVE = 'ACTIVE';
    public static APPOINTMENT_STATUS_COMPLETED = 'COMPLETED';
    public static APPOINTMENT_STATUS_CANCELLED = 'CANCELLED';
    public static APPOINTMENT_STATUS_NO_SHOW = 'NOSHOW';
    public static LANGUAGE_RADIO_BUTTON = [
        {
            id: '1',
            name: 'radio_list',
            value: 'radio_1',
            text: 'One',
            disabled: false,
            checked: false,
            color: 'primary'
        }, {
            id: '2',
            name: 'radio_list',
            value: 'radio_2',
            text: 'Two',
            disabled: false,
            checked: true,
            color: 'secondary'
        },
    ];

}

