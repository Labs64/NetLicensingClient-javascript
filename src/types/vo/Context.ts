/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import type { SecurityMode } from '@/types/constants/SecurityMode';

export interface ContextConfig {
  baseUrl?: string;
  securityMode?: SecurityMode;
  username?: string;
  password?: string;
  apiKey?: string;
  publicKey?: string;
}

export interface Context extends ContextConfig {
  baseUrl: string;
  securityMode: SecurityMode;

  setBaseUrl(baseUrl: string): this;

  getBaseUrl(): string;

  setSecurityMode(securityMode: SecurityMode): this;

  getSecurityMode(): SecurityMode;

  setUsername(username: string): this;

  getUsername<D = undefined>(def?: D): string | D;

  setPassword(password: string): this;

  getPassword<D = undefined>(def?: D): string | D;

  setApiKey(apiKey: string): this;

  getApiKey<D = undefined>(def?: D): string | D;

  setPublicKey(publicKey: string): this;

  getPublicKey<D = undefined>(def?: D): string | D;
}
