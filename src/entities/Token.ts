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
import { ApiKeyRole } from '@/types/constants/ApiKeyRole';
import { TokenType } from '@/types/constants/TokenType';
import { TokenProps, Token as IToken, TokenMethods } from '@/types/entities/Token';

// utils
import { set, get } from '@/utils/helpers';
import serialize from '@/utils/serialize';

const Token = function <T extends object = object>(properties: TokenProps<T> = {} as TokenProps<T>): IToken<T> {
  const props: TokenProps = { ...properties };

  const methods: TokenMethods = {
    setActive(active: boolean): void {
      set(props, 'active', active);
    },

    getActive<D = undefined>(def?: D): boolean | D {
      return get(props, 'active', def) as boolean | D;
    },

    setNumber(number: string): void {
      set(props, 'number', number);
    },

    getNumber<D = undefined>(def?: D): string | D {
      return get(props, 'number', def) as string | D;
    },

    setExpirationTime(expirationTime: Date): void {
      set(props, 'expirationTime', expirationTime);
    },

    getExpirationTime<D = undefined>(def?: D): Date | D {
      return get(props, 'expirationTime', def) as Date | D;
    },

    setTokenType(tokenType: TokenType): void {
      set(props, 'tokenType', tokenType);
    },

    getTokenType<D = undefined>(def?: D): TokenType | D {
      return get(props, 'tokenType', def) as TokenType | D;
    },

    setLicenseeNumber(licenseeNumber: string): void {
      set(props, 'licenseeNumber', licenseeNumber);
    },

    getLicenseeNumber<D = undefined>(def?: D): string | D {
      return get(props, 'licenseeNumber', def) as string | D;
    },

    setAction(action: string): void {
      set(props, 'action', action);
    },

    getAction<D = undefined>(def?: D): string | D {
      return get(props, 'action', def) as string | D;
    },

    setApiKeyRole(apiKeyRole: ApiKeyRole): void {
      set(props, 'apiKeyRole', apiKeyRole);
    },

    getApiKeyRole<D = undefined>(def?: D): ApiKeyRole | D {
      return get(props, 'apiKeyRole', def) as ApiKeyRole | D;
    },

    setBundleNumber(bundleNumber: string): void {
      set(props, 'bundleNumber', bundleNumber);
    },

    getBundleNumber<D = undefined>(def?: D): string | D {
      return get(props, 'bundleNumber', def) as string | D;
    },

    setBundlePrice(bundlePrice: number): void {
      set(props, 'bundlePrice', bundlePrice);
    },

    getBundlePrice: function <D = undefined>(def?: D): number | D {
      return get(props, 'bundlePrice', def) as number | D;
    },

    setProductNumber(productNumber: string): void {
      set(props, 'productNumber', productNumber);
    },

    getProductNumber<D = undefined>(def?: D): string | D {
      return get(props, 'productNumber', def) as string | D;
    },

    setPredefinedShoppingItem(predefinedShoppingItem: string): void {
      set(props, 'predefinedShoppingItem', predefinedShoppingItem);
    },

    getPredefinedShoppingItem<D = undefined>(def?: D): string | D {
      return get(props, 'predefinedShoppingItem', def) as string | D;
    },

    setSuccessURL(successURL: string): void {
      set(props, 'successURL', successURL);
    },

    getSuccessURL<D = undefined>(def?: D): string | D {
      return get(props, 'successURL', def) as string | D;
    },

    setSuccessURLTitle(successURLTitle: string): void {
      set(props, 'successURLTitle', successURLTitle);
    },

    getSuccessURLTitle<D = undefined>(def?: D): string | D {
      return get(props, 'successURLTitle', def) as string | D;
    },

    setCancelURL(cancelURL: string): void {
      set(props, 'cancelURL', cancelURL);
    },

    getCancelURL<D = undefined>(def?: D): string | D {
      return get(props, 'cancelURL', def) as string | D;
    },

    setCancelURLTitle(cancelURLTitle: string): void {
      set(props, 'cancelURLTitle', cancelURLTitle);
    },

    getCancelURLTitle<D = undefined>(def?: D): string | D {
      return get(props, 'cancelURLTitle', def) as string | D;
    },

    getShopURL<D = undefined>(def?: D): string | D {
      return get(props, 'shopURL', def) as string | D;
    },

    serialize(): Record<string, string> {
      return serialize(props, { ignore: ['shopURL'] });
    },
  };

  return defineEntity(props as TokenProps<T>, methods, Token);
};

export default Token;
