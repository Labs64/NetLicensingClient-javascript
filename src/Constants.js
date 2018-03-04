/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export default {
    BASIC_AUTHENTICATION: 'BASIC_AUTH',
    APIKEY_IDENTIFICATION: 'APIKEY',

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

    LicenseTemplate: {
        ENDPOINT_PATH: 'licensetemplate',
        LicenseType: {
            FEATURE: 'FEATURE',
            TIMEVOLUME: 'TIMEVOLUME',
            FLOATING: 'FLOATING',
            QUANTITY: 'QUANTITY',
        },
    },

    Product: {
        ENDPOINT_PATH: 'product',
        LicenseeSecretMode: {
            DISABLED: 'DISABLED',
            PREDEFINED: 'PREDEFINED',
            CLIENT: 'CLIENT',
        },
    },

    Token: {
        ENDPOINT_PATH: 'token',
        Type: {
            DEFAULT: 'DEFAULT',
            SHOP: 'SHOP',
            APIKEY: 'APIKEY',
        },
    },

    Transaction: {
        ENDPOINT_PATH: 'transaction',
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
    },

    License: {
        ENDPOINT_PATH: 'license',
    },

    PaymentMethod: {
        ENDPOINT_PATH: 'paymentmethod',
    },

    ProductModule: {
        ENDPOINT_PATH: 'productmodule',
    },

    Utility: {
        ENDPOINT_PATH: 'utility',
    },
};
