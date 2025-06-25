/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-module-services
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
import itemToProductModule from '@/converters/itemToProductModule';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { Persisted } from '@/types/entities';
import { ProductModuleProps, ProductModuleEntity } from '@/types/entities/ProductModule';
import { IProductModuleService } from '@/types/services/ProductModuleService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.ProductModule.ENDPOINT_PATH;
const type = Constants.ProductModule.TYPE;

const productModuleService: IProductModuleService = {
  /**
   * Gets product module by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#get-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product module number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the product module object in promise
   * @returns {Promise}
   */
  async get<T extends object = ProductModuleProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProductModule<Persisted<T>>(item);
  },

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#product-modules-list
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
   * array of product modules entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = ProductModuleProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<ProductModuleEntity<Persisted<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: ProductModuleEntity<Persisted<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToProductModule<Persisted<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new product module object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#create-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new product module is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param productModule NetLicensing.ProductModule
   *
   * (optional) service request config
   * @param config
   *
   * the newly created product module object in promise
   * @returns {Promise}
   */
  async create<T extends object = ProductModuleProps>(
    context: ContextInstance,
    productNumber: string | null,
    productModule: ProductModuleEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>> {
    ensureNotNull(productModule, 'productModule');

    const data = productModule.serialize();

    if (productNumber) {
      data.productNumber = productNumber;
    }

    const response = await Service.post(context, endpoint, data, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProductModule<Persisted<T>>(item);
  },

  /**
   * Updates product module properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#update-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param productModule NetLicensing.ProductModule
   *
   * (optional) service request config
   * @param config
   *
   * updated product module in promise.
   * @returns {Promise}
   */
  async update<T extends object = ProductModuleProps>(
    context: ContextInstance,
    number: string,
    productModule: ProductModuleEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(productModule, 'productModule');

    const response = await Service.post(context, `${endpoint}/${number}`, productModule.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProductModule<Persisted<T>>(item);
  },

  /**
   * Deletes product module.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#delete-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
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

export default productModuleService;
