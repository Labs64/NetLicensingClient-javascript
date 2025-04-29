/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-template-services
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
import itemToLicenseTemplate from '@/converters/itemToLicenseTemplate';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { LicenseTemplateProps, LicenseTemplate } from '@/types/entities/LicenseTemplate';
import { LicenseTemplateService } from '@/types/services/LicenseTemplateService';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page as IPage } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.LicenseTemplate.ENDPOINT_PATH;
const type = Constants.LicenseTemplate.TYPE;

const licenseTemplateService: LicenseTemplateService = {
  /**
   * Gets license template by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#get-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license template number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the license template object in promise
   * @returns {Promise}
   */
  async get<T extends object = LicenseTemplateProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicenseTemplate<T>(item);
  },

  /**
   * Returns all license templates of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#license-templates-list
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
   * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = LicenseTemplateProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<IPage<LicenseTemplate<T>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: LicenseTemplate<T>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToLicenseTemplate<T>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new license template object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#create-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product module to which the new license template is to be added
   * @param productModuleNumber
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * (optional) service request config
   * @param config
   *
   * the newly created license template object in promise
   * @returns {Promise}
   */
  async create<T extends object = LicenseTemplateProps>(
    context: Context,
    productModuleNumber: string | null,
    licenseTemplate: LicenseTemplate<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>> {
    ensureNotNull(licenseTemplate, 'licenseTemplate');

    const data = licenseTemplate.serialize();

    if (productModuleNumber) {
      data.productModuleNumber = productModuleNumber;
    }

    const response = await Service.post(context, endpoint, data, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicenseTemplate<T>(item);
  },

  /**
   * Updates license template properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#update-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * (optional) service request config
   * @param config
   *
   * updated license template in promise.
   * @returns {Promise}
   */
  async update<T extends object = LicenseTemplateProps>(
    context: Context,
    number: string,
    licenseTemplate: LicenseTemplate<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(licenseTemplate, 'licenseTemplate');

    const response = await Service.post(context, `${endpoint}/${number}`, licenseTemplate.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicenseTemplate<T>(item);
  },

  /**
   * Deletes license template.See NetLicensingAPI JavaDoc for details:
   * @see https://netlicensing.io/wiki/license-template-services#delete-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
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
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>> {
    ensureNotEmpty(number, 'number');

    return Service.delete(context, `${endpoint}/${number}`, { forceCascade: Boolean(forceCascade) }, config);
  },
};

export default licenseTemplateService;
