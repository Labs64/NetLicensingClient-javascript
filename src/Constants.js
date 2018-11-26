/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export default {
    BASIC_AUTHENTICATION: 'BASIC_AUTH',
    APIKEY_IDENTIFICATION: 'APIKEY',

    ACTIVE: 'active',
    NUMBER: 'number',
    NAME: 'name',
    VERSION: 'version',
    DELETED: 'deleted',
    CASCADE: 'forceCascade',
    PRICE: 'price',
    DISCOUNT: 'discount',
    CURRENCY: 'currency',
    IN_USE: 'inUse',
    FILTER: 'filter',
    BASE_URL: 'baseUrl',
    USERNAME: 'username',
    PASSWORD: 'password',
    SECURITY_MODE: 'securityMode',

    LicensingModel: {
        VALID: 'valid',
        TryAndBuy: {
            NAME: 'TryAndBuy',
        },
        Rental: {
            NAME: 'Rental',
            RED_THRESHOLD: 'redThreshold',
            YELLOW_THRESHOLD: 'yellowThreshold',
        },
        Subscription: {
            NAME: 'Subscription',
        },
        Floating: {
            NAME: 'Floating',
        },
        MultiFeature: {
            NAME: 'MultiFeature',
        },
        PayPerUse: {
            NAME: 'PayPerUse',
        },
        PricingTable: {
            NAME: 'PricingTable',
        },
        Quota: {
            NAME: 'Quota',
        },
    },

    Vendor: {
        VENDOR_NUMBER: 'vendorNumber',
        VENDOR_TYPE: 'Vendor',
    },

    Product: {
        ENDPOINT_PATH: 'product',
        PRODUCT_NUMBER: 'productNumber',
        LICENSEE_AUTO_CREATE: 'licenseeAutoCreate',
        DESCRIPTION: 'description',
        LICENSING_INFO: 'licensingInfo',
        DISCOUNTS: 'discounts',
        PROP_LICENSEE_SECRET_MODE: 'licenseeSecretMode',
        PROP_VAT_MODE: 'vatMode',

        Discount: {
            TOTAL_PRICE: 'totalPrice',
            AMOUNT_FIX: 'amountFix',
            AMOUNT_PERCENT: 'amountPercent',
        },

        LicenseeSecretMode: {
            DISABLED: 'DISABLED',
            PREDEFINED: 'PREDEFINED',
            CLIENT: 'CLIENT',
        },
    },

    ProductModule: {
        ENDPOINT_PATH: 'productmodule',
        PRODUCT_MODULE_NUMBER: 'productModuleNumber',
        PRODUCT_MODULE_NAME: 'productModuleName',
        LICENSING_MODEL: 'licensingModel',
    },

    LicenseTemplate: {
        ENDPOINT_PATH: 'licensetemplate',
        LICENSE_TEMPLATE_NUMBER: 'licenseTemplateNumber',
        LICENSE_TYPE: 'licenseType',
        AUTOMATIC: 'automatic',
        HIDDEN: 'hidden',
        HIDE_LICENSES: 'hideLicenses',
        LicenseType: {
            FEATURE: 'FEATURE',
            TIMEVOLUME: 'TIMEVOLUME',
            FLOATING: 'FLOATING',
            QUANTITY: 'QUANTITY',
        },
    },

    Token: {
        ENDPOINT_PATH: 'token',
        EXPIRATION_TIME: 'expirationTime',
        TOKEN_TYPE: 'tokenType',
        API_KEY: 'apiKey',
        TOKEN_PROP_EMAIL: 'email',
        TOKEN_PROP_VENDORNUMBER: 'vendorNumber',
        TOKEN_PROP_SHOP_URL: 'shopURL',
        Type: {
            DEFAULT: 'DEFAULT',
            SHOP: 'SHOP',
            APIKEY: 'APIKEY',
        },
    },

    Transaction: {
        ENDPOINT_PATH: 'transaction',
        TRANSACTION_NUMBER: 'transactionNumber',
        GRAND_TOTAL: 'grandTotal',
        STATUS: 'status',
        SOURCE: 'source',
        DATE_CREATED: 'datecreated',
        DATE_CLOSED: 'dateclosed',
        VAT: 'vat',
        VAT_MODE: 'vatMode',
        LICENSE_TRANSACTION_JOIN: 'licenseTransactionJoin',
        SOURCE_SHOP_ONLY: 'shopOnly',
        Status: {
            CANCELLED: 'CANCELLED',
            CLOSED: 'CLOSED',
            PENDING: 'PENDING',
        },
    },

    Licensee: {
        ENDPOINT_PATH: 'licensee',
        ENDPOINT_PATH_VALIDATE: 'validate',
        ENDPOINT_PATH_TRANSFER: 'transfer',
        LICENSEE_NUMBER: 'licenseeNumber',
        SOURCE_LICENSEE_NUMBER: 'sourceLicenseeNumber',
        PROP_LICENSEE_NAME: 'licenseeName',
        PROP_LICENSEE_SECRET: 'licenseeSecret',
        PROP_MARKED_FOR_TRANSFER: 'markedForTransfer',
    },

    License: {
        ENDPOINT_PATH: 'license',
        LICENSE_NUMBER: 'licenseNumber',
        HIDDEN: 'hidden',
    },


    PaymentMethod: {
        ENDPOINT_PATH: 'paymentmethod',
    },


    Utility: {
        ENDPOINT_PATH: 'utility',
        ENDPOINT_PATH_LICENSE_TYPES:
            'licenseTypes',
        ENDPOINT_PATH_LICENSING_MODELS:
            'licensingModels',
        LICENSING_MODEL_PROPERTIES:
            'LicensingModelProperties',
        LICENSE_TYPE:
            'LicenseType',
    },


    APIKEY: {
        ROLE_APIKEY_LICENSEE: 'ROLE_APIKEY_LICENSEE',
        ROLE_APIKEY_ANALYTICS:
            'ROLE_APIKEY_ANALYTICS',
        ROLE_APIKEY_OPERATION:
            'ROLE_APIKEY_OPERATION',
        ROLE_APIKEY_MAINTENANCE:
            'ROLE_APIKEY_MAINTENANCE',
        ROLE_APIKEY_ADMIN:
            'ROLE_APIKEY_ADMIN',
    }
    ,
};
