/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import SecurityModeEnum from '@/constants/SecurityMode';

// types
import type { SecurityMode } from '@/types/constants/SecurityMode';
import type { ContextConfig, Context as IContext } from '@/types/vo/Context';

class Context implements IContext {
  baseUrl: string;
  securityMode: SecurityMode;
  username?: string;
  password?: string;
  apiKey?: string;
  publicKey?: string;

  constructor(props?: ContextConfig) {
    this.baseUrl = props?.baseUrl || 'https://go.netlicensing.io/core/v2/rest';
    this.securityMode = props?.securityMode || SecurityModeEnum.BASIC_AUTHENTICATION;
    this.username = props?.username;
    this.password = props?.password;
    this.apiKey = props?.apiKey;
    this.publicKey = props?.publicKey;
  }

  setBaseUrl(baseUrl: string): this {
    this.baseUrl = baseUrl;
    return this;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  setSecurityMode(securityMode: SecurityMode): this {
    this.securityMode = securityMode;
    return this;
  }

  getSecurityMode(): SecurityMode {
    return this.securityMode;
  }

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  getUsername<D = undefined>(def?: D): string | D {
    return (this.username || def) as string | D;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  getPassword<D = undefined>(def?: D): string | D {
    return (this.password || def) as string | D;
  }

  setApiKey(apiKey: string): this {
    this.apiKey = apiKey;
    return this;
  }

  getApiKey<D = undefined>(def?: D): string | D {
    return (this.apiKey || def) as string | D;
  }

  setPublicKey(publicKey: string): this {
    this.publicKey = publicKey;
    return this;
  }

  getPublicKey<D = undefined>(def?: D): string | D {
    return (this.publicKey || def) as string | D;
  }
}

export default (props?: ContextConfig) => new Context(props);
