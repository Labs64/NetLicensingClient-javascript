/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/token-services
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
import itemToToken from '@/converters/itemToToken';

// services
import Service from '@/services/Service';

// types
import { ItemPagination, NlicResponse } from '@/types/api/response';
import { TokenProps, Token } from '@/types/entities/Token';
import { RequestConfig } from '@/types/services/Service';
import { TokenService } from '@/types/services/TokenService';
import { Context } from '@/types/vo/Context';
import { Page as IPage } from '@/types/vo/Page';

// utils
import { encode } from '@/utils/filter';
import { ensureNotEmpty, ensureNotNull } from '@/utils/validation';

// vo
import Page from '@/vo/Page';

const endpoint = Constants.Token.ENDPOINT_PATH;
const type = Constants.Token.TYPE;

const tokenService: TokenService = {
  /**
   * Gets token by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#get-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the token number
   * @param number
   *
   * (optional) service request config
   * @param config
   *
   * return the token in promise
   * @returns {Promise}
   */
  async get<T extends object = TokenProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<Token<T>> {
    ensureNotEmpty(number, 'number');

    const response = await Service.get(context, `${endpoint}/${number}`, {}, config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToToken<T>(item);
  },

  /**
   * Returns tokens of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#tokens-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|undefined|null
   *
   * (optional) service request config
   * @param config
   *
   * array of token entities or empty array if nothing found.
   * @return array
   */
  async list<T extends object = TokenProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<IPage<Token<T>[]>> {
    const data: { [Constants.FILTER]: string } = {};

    if (filter) {
      data[Constants.FILTER] = typeof filter === 'string' ? filter : encode(filter);
    }

    const response = await Service.get(context, endpoint, data, config);
    const items = response.data.items;

    const list: Token<T>[] | undefined = items?.item.filter((v) => v.type === type).map((v) => itemToToken<T>(v));

    return Page(list || [], items as ItemPagination);
  },

  /**
   * Creates new token.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#create-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context Context
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param token Token
   *
   * (optional) service request config
   * @param config
   *
   * return created token in promise
   * @returns {Promise}
   */
  async create<T extends object = TokenProps>(
    context: Context,
    token: Token<T>,
    config?: RequestConfig,
  ): Promise<Token<T>> {
    ensureNotNull(token, 'token');

    const response = await Service.post(context, endpoint, token.serialize(), config);
    const item = response.data.items?.item.find((v) => v.type === type);

    return itemToToken<T>(item);
  },

  /**
   * Delete token by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#delete-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   *  the token number
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

export default tokenService;
