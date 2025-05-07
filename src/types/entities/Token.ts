/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

// types
import { ApiKeyRoleValues } from '@/types/constants/ApiKeyRole';
import { TokenTypeValues } from '@/types/constants/TokenType';
import { Entity } from '@/types/entities/defineEntity';

export type TokenProps<T extends object = object> = {
  active?: boolean;
  number?: string;
  expirationTime?: Date;
  tokenType?: TokenTypeValues;
  licenseeNumber?: string;
  action?: string;
  apiKeyRole?: ApiKeyRoleValues;
  bundleNumber?: string;
  bundlePrice?: number;
  productNumber?: string;
  predefinedShoppingItem?: string;
  successURL?: string;
  successURLTitle?: string;
  cancelURL?: string;
  cancelURLTitle?: string;
  readonly shopURL?: string;
} & T;

export interface TokenMethods {
  setActive(active: boolean): void;

  getActive<D = undefined>(def?: D): boolean | D;

  setNumber(number: string): void;

  getNumber<D = undefined>(def?: D): string | D;

  setExpirationTime(expirationTime: Date): void;

  getExpirationTime<D = undefined>(def?: D): Date | D;

  setTokenType(tokenType: TokenTypeValues): void;

  getTokenType<D = undefined>(def?: D): TokenTypeValues | D;

  setLicenseeNumber(licenseeNumber: string): void;

  getLicenseeNumber<D = undefined>(def?: D): string | D;

  setAction(action: string): void;

  getAction<D = undefined>(def?: D): string | D;

  setApiKeyRole(apiKeyRole: ApiKeyRoleValues): void;

  getApiKeyRole<D = undefined>(def?: D): ApiKeyRoleValues | D;

  setBundleNumber(bundleNumber: string): void;

  getBundleNumber<D = undefined>(def?: D): string | D;

  setBundlePrice(bundlePrice: number): void;

  getBundlePrice<D = undefined>(def?: D): number | D;

  setProductNumber(productNumber: string): void;

  getProductNumber<D = undefined>(def?: D): string | D;

  setPredefinedShoppingItem(predefinedShoppingItem: string): void;

  getPredefinedShoppingItem<D = undefined>(def?: D): string | D;

  setSuccessURL(successURL: string): void;

  getSuccessURL<D = undefined>(def?: D): string | D;

  setSuccessURLTitle(successURLTitle: string): void;

  getSuccessURLTitle<D = undefined>(def?: D): string | D;

  setCancelURL(cancelURL: string): void;

  getCancelURL<D = undefined>(def?: D): string | D;

  setCancelURLTitle(cancelURLTitle: string): void;

  getCancelURLTitle<D = undefined>(def?: D): string | D;

  getShopURL<D = undefined>(def?: D): string | D;

  serialize(): Record<string, string>;
}

export type TokenEntity<T extends object = object> = Entity<TokenProps<T>, TokenMethods>;
