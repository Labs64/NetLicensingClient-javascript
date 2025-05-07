/**
 * Token
 *
 * @see https://netlicensing.io/wiki/token-services#create-token
 *
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 *
 */
// entity factory
import defineEntity from '@/entities/defineEntity';

// types
import { ApiKeyRoleValues } from '@/types/constants/ApiKeyRole';
import { TokenTypeValues } from '@/types/constants/TokenType';
import { TokenProps, TokenEntity, TokenMethods } from '@/types/entities/Token';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

const Token = function <T extends object = object>(properties: TokenProps<T> = {} as TokenProps<T>): TokenEntity<T> {
  const props: TokenProps = { ...properties };

  const methods: TokenMethods = {
    setActive(this: void, active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(this: void, def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(this: void, number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setExpirationTime(this: void, expirationTime: Date): void {
      set(props, 'expirationTime', expirationTime);
    },

    getExpirationTime<D = undefined>(this: void, def?: D): Date | D {
      return get(props, 'expirationTime', def) as Date | D;
    },

    setTokenType(this: void, tokenType: TokenTypeValues): void {
      set(props, 'tokenType', tokenType);
    },

    getTokenType<D = undefined>(this: void, def?: D): TokenTypeValues | D {
      return get(props, 'tokenType', def) as TokenTypeValues | D;
    },

    setLicenseeNumber(this: void, licenseeNumber: string): void {
      set(props, 'licenseeNumber', licenseeNumber);
    },

    getLicenseeNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'licenseeNumber', def) as string | D;
    },

    setAction(this: void, action: string): void {
      set(props, 'action', action);
    },

    getAction<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'action', def) as string | D;
    },

    setApiKeyRole(this: void, apiKeyRole: ApiKeyRoleValues): void {
      set(props, 'apiKeyRole', apiKeyRole);
    },

    getApiKeyRole<D = undefined>(this: void, def?: D): ApiKeyRoleValues | D {
      return get(props, 'apiKeyRole', def) as ApiKeyRoleValues | D;
    },

    setBundleNumber(this: void, bundleNumber: string): void {
      set(props, 'bundleNumber', bundleNumber);
    },

    getBundleNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'bundleNumber', def) as string | D;
    },

    setBundlePrice(this: void, bundlePrice: number): void {
      set(props, 'bundlePrice', bundlePrice);
    },

    getBundlePrice<D = undefined>(this: void, def?: D): number | D {
      return get(props, 'bundlePrice', def) as number | D;
    },

    setProductNumber(this: void, productNumber: string): void {
      set(props, 'productNumber', productNumber);
    },

    getProductNumber<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'productNumber', def) as string | D;
    },

    setPredefinedShoppingItem(this: void, predefinedShoppingItem: string): void {
      set(props, 'predefinedShoppingItem', predefinedShoppingItem);
    },

    getPredefinedShoppingItem<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'predefinedShoppingItem', def) as string | D;
    },

    setSuccessURL(this: void, successURL: string): void {
      set(props, 'successURL', successURL);
    },

    getSuccessURL<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'successURL', def) as string | D;
    },

    setSuccessURLTitle(this: void, successURLTitle: string): void {
      set(props, 'successURLTitle', successURLTitle);
    },

    getSuccessURLTitle<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'successURLTitle', def) as string | D;
    },

    setCancelURL(this: void, cancelURL: string): void {
      set(props, 'cancelURL', cancelURL);
    },

    getCancelURL<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'cancelURL', def) as string | D;
    },

    setCancelURLTitle(this: void, cancelURLTitle: string): void {
      set(props, 'cancelURLTitle', cancelURLTitle);
    },

    getCancelURLTitle<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'cancelURLTitle', def) as string | D;
    },

    getShopURL<D = undefined>(this: void, def?: D): string | D {
      return get(props, 'shopURL', def) as string | D;
    },

    serialize(this: void): Record<string, string> {
      return serialize(props, { ignore: ['shopURL'] });
    },
  };

  return defineEntity(props as TokenProps<T>, methods, Token);
};

export default Token;
