/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/utility-services
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import Constants from '@/constants';

// converters
import itemToCountry from '@/converters/itemToCountry';
import itemToObject from '@/converters/itemToObject';

// services
import Service from '@/services/Service';

// types
import { ItemPagination } from '@/types/api/response';
import { LicenseType } from '@/types/constants/LicenseType';
import { LicensingModel } from '@/types/constants/LicensingModel';
import { Country } from '@/types/entities/Country';
import { RequestConfig } from '@/types/services/Service';
import { UtilityService } from '@/types/services/UtilityService';
import { Context } from '@/types/vo/Context';
import { Page as IPage } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';

// vo
import Page from '@/vo/Page';

const baseEndpoint = Constants.Utility.ENDPOINT_PATH;

const utilityService: UtilityService = {
  /**
   * Returns all license types. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#license-types-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * (optional) service request config
   * @param config
   *
   * array of available license types or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async listLicenseTypes(context: Context, config?: RequestConfig): Promise<IPage<LicenseType[]>> {
    const endpoint = `${baseEndpoint}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`;

    const response = await Service.get(context, endpoint, undefined, config);
    const items = response.data.items;

    const type = Constants.Utility.LICENSE_TYPE;

    const licenseTypes: string[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToObject<{ name: string }>(v).name);

    return Page((licenseTypes as LicenseType[]) || [], items as ItemPagination);
  },

  /**
   * Returns all license models. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#licensing-models-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * (optional) service request config
   * @param config
   *
   * array of available license models or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async listLicensingModels(context: Context, config?: RequestConfig): Promise<IPage<LicensingModel[]>> {
    const endpoint = `${baseEndpoint}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`;

    const response = await Service.get(context, endpoint, undefined, config);
    const items = response.data.items;

    const type = Constants.Utility.LICENSING_MODEL_TYPE;

    const licensingModels: string[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToObject<{ name: string }>(v).name);

    return Page((licensingModels as LicensingModel[]) || [], items as ItemPagination);
  },

  /**
   * Returns all countries.
   *
   * determines the vendor on whose behalf the call is performed
   * @param context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter
   *
   * (optional) service request config
   * @param config
   *
   * collection of available countries or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  async listCountries(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<IPage<Country[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const endpoint = `${baseEndpoint}/${Constants.Utility.ENDPOINT_PATH_COUNTRIES}`;

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const type = Constants.Utility.COUNTRY_TYPE;

    const countries: Country[] | undefined = items?.item.filter((v) => v.type === type).map((v) => itemToCountry(v));

    return Page(countries || [], items as ItemPagination);
  },
};

export default utilityService;
