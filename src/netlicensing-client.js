// Constants
import Constants from './Constants';
// VO
import Context from './vo/Context';

// Services
import Service from './services/Service';
import LicenseeService from './services/LicenseeService';
import LicenseService from './services/LicenseService';
import LicenseTemplateService from './services/LicenseTemplateService';
import PaymentMethodService from './services/PaymentMethodService';
import ProductModuleService from './services/ProductModuleService';
import ProductService from './services/ProductService';
import TokenService from './services/TokenService';
import TransactionService from './services/TransactionService';
import UtilityService from './services/UtilityService';

// Entities
import Country from './entities/Country';
import License from './entities/License';
import Licensee from './entities/Licensee';
import LicenseTemplate from './entities/LicenseTemplate';
import PaymentMethod from './entities/PaymentMethod';
import Product from './entities/Product';
import ProductDiscount from './entities/ProductDiscount';
import ProductModule from './entities/ProductModule';
import Token from './entities/Token';
import Transaction from './entities/Transaction';
import LicenseTransactionJoin from './entities/LicenseTransactionJoin';
import ValidationParameters from './vo/ValidationParameters';
import ValidationResults from './vo/ValidationResults';

// Utils
import CastsUtils from './util/CastsUtils';
import CheckUtils from './util/CheckUtils';
import FilterUtils from './util/FilterUtils';


// Create the default instance to be exported
const NetLicensing = {
    // Constants
    Constants,

    // Expose VO
    Context,
    ValidationParameters,
    ValidationResults,

    // Expose Services
    Service,
    LicenseeService,
    LicenseService,
    LicenseTemplateService,
    PaymentMethodService,
    ProductModuleService,
    ProductService,
    TokenService,
    TransactionService,
    UtilityService,

    // Expose Entities
    Country,
    License,
    Licensee,
    LicenseTemplate,
    PaymentMethod,
    Product,
    ProductDiscount,
    ProductModule,
    Token,
    Transaction,
    LicenseTransactionJoin,

    // Expose Utils
    CastsUtils,
    CheckUtils,
    FilterUtils,
};

module.exports = NetLicensing;

// Allow use of default import syntax in TypeScript
module.exports.default = NetLicensing;
