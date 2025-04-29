/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import LicenseeSecretMode from '@/constants/LicenseeSecretMode';
import LicenseType from '@/constants/LicenseType';
import NotificationEvent from '@/constants/NotificationEvent';
import NotificationProtocol from '@/constants/NotificationProtocol';
import SecurityMode from '@/constants/SecurityMode';
import TimeVolumePeriod from '@/constants/TimeVolumePeriod';
import TokenType from '@/constants/TokenType';
import TransactionSource from '@/constants/TransactionSource';
import TransactionStatus from '@/constants/TransactionStatus';

export default {
  LicenseeSecretMode,
  LicenseType,
  NotificationEvent,
  NotificationProtocol,
  SecurityMode,
  TimeVolumePeriod,
  TokenType,
  TransactionSource,
  TransactionStatus,

  // @deprecated use SecurityMode.BASIC_AUTHENTICATION instead
  BASIC_AUTHENTICATION: 'BASIC_AUTH',

  // @deprecated use SecurityMode.APIKEY_IDENTIFICATION instead
  APIKEY_IDENTIFICATION: 'APIKEY',

  // @deprecated use SecurityMode.ANONYMOUS_IDENTIFICATION instead
  ANONYMOUS_IDENTIFICATION: 'ANONYMOUS',

  FILTER: 'filter',

  Product: {
    TYPE: 'Product',
    ENDPOINT_PATH: 'product',
  },

  ProductModule: {
    TYPE: 'ProductModule',
    ENDPOINT_PATH: 'productmodule',
    PRODUCT_MODULE_NUMBER: 'productModuleNumber',
  },

  Licensee: {
    TYPE: 'Licensee',
    ENDPOINT_PATH: 'licensee',
    ENDPOINT_PATH_VALIDATE: 'validate',
    ENDPOINT_PATH_TRANSFER: 'transfer',
    LICENSEE_NUMBER: 'licenseeNumber',
  },

  LicenseTemplate: {
    TYPE: 'LicenseTemplate',
    ENDPOINT_PATH: 'licensetemplate',

    // @deprecated use LicenseType directly instead
    LicenseType,
  },

  License: {
    TYPE: 'License',
    ENDPOINT_PATH: 'license',
  },

  Validation: {
    TYPE: 'ProductModuleValidation',
  },

  Token: {
    TYPE: 'Token',
    ENDPOINT_PATH: 'token',

    // @deprecated use TokenType directly instead
    Type: TokenType,
  },

  PaymentMethod: {
    TYPE: 'PaymentMethod',
    ENDPOINT_PATH: 'paymentmethod',
  },

  Bundle: {
    TYPE: 'Bundle',
    ENDPOINT_PATH: 'bundle',
    ENDPOINT_OBTAIN_PATH: 'obtain',
  },

  Notification: {
    TYPE: 'Notification',
    ENDPOINT_PATH: 'notification',

    // @deprecated use NotificationProtocol directly instead
    Protocol: NotificationProtocol,

    // @deprecated use NotificationEvent directly instead
    Event: NotificationEvent,
  },

  Transaction: {
    TYPE: 'Transaction',
    ENDPOINT_PATH: 'transaction',

    // @deprecated use TransactionStatus directly instead
    Status: TransactionStatus,
  },

  Utility: {
    ENDPOINT_PATH: 'utility',
    ENDPOINT_PATH_LICENSE_TYPES: 'licenseTypes',
    ENDPOINT_PATH_LICENSING_MODELS: 'licensingModels',
    ENDPOINT_PATH_COUNTRIES: 'countries',
    LICENSING_MODEL_TYPE: 'LicensingModelProperties',
    LICENSE_TYPE: 'LicenseType',
    COUNTRY_TYPE: 'Country',
  },
};
