/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-services
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
import itemToProduct from '@/converters/itemToProduct';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { Persisted } from '@/types/entities';
import { ProductProps, ProductEntity } from '@/types/entities/Product';
import { IProductService } from '@/types/services/ProductService';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.Product.ENDPOINT_PATH;
const type = Constants.Product.TYPE;

const productService: IProductService = {
  /**
   * Gets product by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#get-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product number
   * @param number string
   *
   * (optional) service request config
   * @param config
   *
   * return the product object in promise
   * @returns {Promise}
   */
  async get<T extends object = ProductProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<ProductEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProduct<Persisted<T>>(item);
  },

  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#products-list
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
   * array of product entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  async list<T extends object = ProductProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<ProductEntity<Persisted<T>>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: ProductEntity<Persisted<T>>[] | undefined = items?.item
      .filter((v) => v.type === type)
      .map((v) => itemToProduct<Persisted<T>>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new product with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#create-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param product NetLicensing.Product
   *
   * (optional) service request config
   * @param config
   *
   * return the newly created product object in promise
   * @returns {Promise}
   */
  async create<T extends object = ProductProps>(
    context: ContextInstance,
    product: ProductEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductEntity<Persisted<T>>> {
    ensureNotNull(product, 'product');

    const response = await Service.post(context, endpoint, product.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProduct<Persisted<T>>(item);
  },

  /**
   * Updates product properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#update-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param product NetLicensing.Product
   *
   * (optional) service request config
   * @param config
   *
   * updated product in promise.
   * @returns {Promise}
   */
  async update<T extends object = ProductProps>(
    context: ContextInstance,
    number: string,
    product: ProductEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductEntity<Persisted<T>>> {
    ensureNotEmpty(number, 'number');
    ensureNotNull(product, 'product');

    const response = await Service.post(context, `${endpoint}/${number}`, product.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToProduct<Persisted<T>>(item);
  },

  /**
   * Deletes product.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#delete-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
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

export default productService;
