/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-services
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
import itemToLicense from '@/converters/itemToLicense';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { LicenseProps, LicenseEntity, SavedLicenseProps } from '@/types/entities/License';
import { ILicenseService } from '@/types/services/LicenseService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.License.ENDPOINT_PATH;
const type = Constants.License.TYPE;

const licenseService: ILicenseService = {
  /**
   * Gets license by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#get-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the license in promise
   * @returns {Promise}
   */
  async get<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseEntity<SavedLicenseProps<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicense<SavedLicenseProps<T>>(item);
  },

  /**
   * Returns licenses of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#licenses-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|undefined
   *
   * (optional) service request config
   * @param config
   *
   * return array of licenses (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = LicenseProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<LicenseEntity<SavedLicenseProps<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: LicenseEntity<SavedLicenseProps<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToLicense<SavedLicenseProps<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new license object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#create-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent licensee to which the new license is to be added
   * @param licenseeNumber string
   *
   *  license template that the license is created from
   * @param licenseTemplateNumber string
   *
   * For privileged logins specifies transaction for the license creation. For regular logins new
   * transaction always created implicitly, and the operation will be in a separate transaction.
   * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
   * auto-generated number.
   * @param transactionNumber null|string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param license NetLicensing.License
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created license object in promise
   * @returns {Promise}
   */
  async create<T extends object = LicenseProps>(
    context: ContextInstance,
    licenseeNumber: string | null,
    licenseTemplateNumber: string | null,
    transactionNumber: string | null,
    license: LicenseEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseEntity<SavedLicenseProps<T>>> {
    ensureNotNull(license, 'license');

    const data = license.serialize();

    if (licenseeNumber) {
      data.licenseeNumber = licenseeNumber;
    }

    if (licenseTemplateNumber) {
      data.licenseTemplateNumber = licenseTemplateNumber;
    }

    if (transactionNumber) {
      data.transactionNumber = transactionNumber;
    }

    const response = await Service.post(context, endpoint, data, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicense<SavedLicenseProps<T>>(item);
  },

  /**
   * Updates license properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#update-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
   * @param number string
   *
   * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
   * operation will be in a separate transaction.
   * @param transactionNumber string|null
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param license NetLicensing.License
   *
   * (optional) service request config
   * @param config
   *
   * return updated license in promise.
   * @returns {Promise}
   */
  async update<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    transactionNumber: string | null,
    license: LicenseEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseEntity<SavedLicenseProps<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(license, 'license');

    const data = license.serialize();

    if (transactionNumber) {
      data.transactionNumber = transactionNumber;
    }

    const response = await Service.post(context, `${endpoint}/${number}`, data, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToLicense<SavedLicenseProps<T>>(item);
  },

  /**
   * Deletes license.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#delete-license
   *
   * When any license is deleted, corresponding transaction is created automatically.
   *
   *  determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
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
};

export default licenseService;
