/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { SecurityModeValues } from '@/types/constants/SecurityMode';

export interface ContextConfig {
  baseUrl?: string;
  securityMode?: SecurityModeValues;
  username?: string;
  password?: string;
  apiKey?: string;
  publicKey?: string;
}

export interface ContextInstance extends ContextConfig {
  baseUrl: string;
  securityMode: SecurityModeValues;

  setBaseUrl(baseUrl: string): this;

  getBaseUrl(): string;

  setSecurityMode(securityMode: SecurityModeValues): this;

  getSecurityMode(): SecurityModeValues;

  setUsername(username: string): this;

  getUsername<D = undefined>(def?: D): string | D;

  setPassword(password: string): this;

  getPassword<D = undefined>(def?: D): string | D;

  setApiKey(apiKey: string): this;

  getApiKey<D = undefined>(def?: D): string | D;

  setPublicKey(publicKey: string): this;

  getPublicKey<D = undefined>(def?: D): string | D;
}
