/**
 * Licensee Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/licensee-services
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// constants
import Constants from '@/constants';

// converters
import itemToLicensee from '@/converters/itemToLicensee';
import itemToObject from '@/converters/itemToObject';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { LicenseeProps, LicenseeEntity, SavedLicenseeProps } from '@/types/entities/Licensee';
import { ILicenseeService } from '@/types/services/LicenseeService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';
import { ValidationParametersInstance } from '@/types/vo/ValidationParameters';
import { ValidationResultsInstance as IValidationResults } from '@/types/vo/ValidationResults';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';
import ValidationResults from '@/vo/ValidationResults';

const endpoint = Constants.Licensee.ENDPOINT_PATH;
const endpointValidate = Constants.Licensee.ENDPOINT_PATH_VALIDATE;
const endpointTransfer = Constants.Licensee.ENDPOINT_PATH_TRANSFER;
const type = Constants.Licensee.TYPE;

const licenseeService: ILicenseeService = {
  /**
   * Gets licensee by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#get-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the licensee number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the licensee in promise
   * @returns {Promise}
   */
  async get<T extends object = LicenseeProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<SavedLicenseeProps<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicensee<SavedLicenseeProps<T>>(item);
  },

  /**
   * Returns all licensees of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#licensees-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * (optional) service request config
   * @param config
   *
   * array of licensees (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = LicenseeProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<LicenseeEntity<SavedLicenseeProps<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: LicenseeEntity<SavedLicenseeProps<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToLicensee<SavedLicenseeProps<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new licensee object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#create-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new licensee is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licensee NetLicensing.Licensee
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created licensee object in promise
   * @returns {Promise}
   */
  async create<T extends object = LicenseeProps>(
    context: ContextInstance,
    productNumber: string,
    licensee: LicenseeEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<SavedLicenseeProps<T>>> {
    ensureNotNull(licensee, 'licensee');

    const data = licensee.serialize();

    if (productNumber) {
      data.productNumber = productNumber;
    }

    const response = await Service.post(context, endpoint, data, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicensee<SavedLicenseeProps<T>>(item);
  },

  /**
   * Updates licensee properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#update-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licensee NetLicensing.Licensee
   *
   * (optional) service request config
   * @param config
   *
   * return updated licensee in promise.
   * @returns {Promise}
   */
  async update<T extends object = LicenseeProps>(
    context: ContextInstance,
    number: string,
    licensee: LicenseeEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<SavedLicenseeProps<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(licensee, 'licensee');

    const response = await Service.post(context, `${endpoint}/${number}`, licensee.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicensee<SavedLicenseeProps<T>>(item);
  },

  /**
   * Deletes licensee.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#delete-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * (optional) service request config
   * @param config
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    ensureNotEmpty(number, 'number');

    return Service.delete(context, `${endpoint}/${number}`, { forceCascade: Boolean(forceCascade) }, config);
  },

  /**
   * Validates active licenses of the licensee.
   * In the case of multiple product modules validation,
   * required parameters indexes will be added automatically.
   * See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#validate-licensee
   *
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * optional validation parameters. See ValidationParameters and licensing model documentation for
   * details.
   * @param validationParameters NetLicensing.ValidationParameters.
   *
   * (optional) service request config
   * @param config
   *
   * @returns {ValidationResults}
   */
  async validate(
    context: ContextInstance,
    number: string,
    validationParameters?: ValidationParametersInstance,
    config?: RequestConfig,
  ): Promise<IValidationResults> {
    ensureNotEmpty(number, 'number');

    const data: Record<string, string | boolean> = {};

    if (validationParameters) {
      const productNumber: string | undefined = validationParameters.productNumber;

      if (productNumber) {
        data.productNumber = productNumber;
      }

      const licenseeProperties = validationParameters.licenseeProperties;

      Object.keys(licenseeProperties).forEach((key: string) => {
        data[key] = validationParameters.getLicenseeProperty(key);
      });

      if (validationParameters.isForOfflineUse()) {
        data.forOfflineUse = true;
      }

      if (validationParameters.isDryRun()) {
        data.dryRun = true;
      }

      const parameters = validationParameters.getParameters();

      Object.keys(parameters).forEach((pmNumber, i) => {
        data[`${Constants.ProductModule.PRODUCT_MODULE_NUMBER}${i}`] = pmNumber;

        const parameter = parameters[pmNumber];

        if (parameter) {
          Object.keys(parameter).forEach((key: string) => {
            data[key + i] = parameter[key];
          });
        }
      });
    }

    const response = await Service.post(context, `${endpoint}/${number}/${endpointValidate}`, data, config);

    const validationResults = ValidationResults();

    const ttl = response.data.ttl;

    if (ttl) {
      validationResults.setTtl(ttl);
    }

    const items = response.data.items?.item.filter((v) => v.type === Constants.Validation.TYPE);

    items?.forEach((v) => {
      validationResults.setValidation(itemToObject(v));
    });

    return validationResults;
  },

  /**
   * Transfer licenses between licensees.
   * @see https://netlicensing.io/wiki/licensee-services#transfer-licenses
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the number of the licensee receiving licenses
   * @param number string
   *
   * the number of the licensee delivering licenses
   * @param sourceLicenseeNumber string
   *
   * (optional) service request config
   * @param config
   *
   * @returns {Promise}
   */
  transfer(
    context: ContextInstance,
    number: string,
    sourceLicenseeNumber: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    ensureNotEmpty(number, 'number');
    ensureNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

    const data = { sourceLicenseeNumber };

    return Service.post(context, `${endpoint}/${number}/${endpointTransfer}`, data, config);
  },
};

export default licenseeService;
