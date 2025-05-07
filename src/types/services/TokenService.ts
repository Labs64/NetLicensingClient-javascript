/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { TokenEntity, TokenProps } from '@/types/entities/Token';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface ITokenService {
  get<T extends object = TokenProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<TokenEntity<T>>;

  list<T extends object = TokenProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<TokenEntity<T>[]>>;

  create<T extends object = TokenProps>(
    context: ContextInstance,
    token: TokenEntity<T>,
    config?: RequestConfig,
  ): Promise<TokenEntity<T>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
