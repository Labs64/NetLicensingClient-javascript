/**
 * JS representation of the Bundle Service. See NetLicensingAPI for details:
 * @see https://netlicensing.io/wiki/bundle-services
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
import itemToBundle from '@/converters/itemToBundle';

// services
import itemToLicense from '@/converters/itemToLicense';
import Service from '@/services/Service';

// types
import { ItemPagination } from '@/types/api/response';
import { Persisted } from '@/types/entities';
import { BundleEntity, BundleProps } from '@/types/entities/Bundle';
import { LicenseEntity, LicenseProps } from '@/types/entities/License';
import { IBundleService } from '@/types/services/BundleService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.Bundle.ENDPOINT_PATH;
const endpointObtain = Constants.Bundle.ENDPOINT_OBTAIN_PATH;
const type = Constants.Bundle.TYPE;

const bundleService: IBundleService = {
  /**
   * Gets a bundle by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#get-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the bundle number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the bundle object in promise
   * @returns {Promise}
   */
  async get<T extends object = BundleProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToBundle<Persisted<T>>(item);
  },

  /**
   * Returns bundle of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#bundles-list
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
   * array of bundle entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = BundleProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<BundleEntity<Persisted<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const bundles: BundleEntity<Persisted<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToBundle<Persisted<T>>(v));

    return Page(bundles || [], items as ItemPagination);
  },

  /**
   * Creates a new bundle with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#create-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param bundle NetLicensing.Bundle
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created bundle object in promise
   * @returns {Promise}
   */
  async create<T extends object = BundleProps>(
    context: ContextInstance,
    bundle: BundleEntity<T>,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>> {
    ensureNotNull(bundle, 'bundle');

    const response = await Service.post(context, endpoint, bundle.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToBundle<Persisted<T>>(item);
  },

  /**
   * Updates bundle properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#update-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param bundle NetLicensing.Bundle
   *
   * (optional) service request config
   * @param config
   *
   * updated bundle in promise.
   * @returns {Promise}
   */
  async update<T extends object = BundleProps>(
    context: ContextInstance,
    number: string,
    bundle: BundleEntity<T>,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(bundle, 'bundle');

    const response = await Service.post(context, `${endpoint}/${number}`, bundle.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToBundle<Persisted<T>>(item);
  },

  /**
   * Deletes bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#delete-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
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
  ): Promise<AxiosResponse> {
    ensureNotEmpty(number, 'number');

    return Service.delete(context, `${endpoint}/${number}`, { forceCascade: Boolean(forceCascade) }, config);
  },

  /**
   * Obtain bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#obtain-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * licensee number
   * @param licenseeNumber String
   *
   * (optional) service request config
   * @param config
   *
   * return array of licenses
   * @returns {Promise}
   */
  async obtain<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    licenseeNumber: string,
    config?: RequestConfig,
  ): Promise<LicenseEntity<Persisted<T>>[]> {
    ensureNotEmpty(number, 'number');
    ensureNotEmpty(licenseeNumber, 'licenseeNumber');

    const data = { [Constants.Licensee.LICENSEE_NUMBER]: licenseeNumber };

    const response = await Service.post(context, `${endpoint}/${number}/${endpointObtain}`, data, config);
    const items = response.data.items;

    const licenses = items?.item.filter((v) => v.type === Constants.License.TYPE);

    return licenses?.map((v) => itemToLicense<Persisted<T>>(v)) || [];
  },
};

export default bundleService;
