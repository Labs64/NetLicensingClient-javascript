/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { Token, TokenProps } from '@/types/entities/Token';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface TokenService {
  get<T extends object = TokenProps>(context: Context, number: string, config?: RequestConfig): Promise<Token<T>>;

  list<T extends object = TokenProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Token<T>[]>>;

  create<T extends object = TokenProps>(context: Context, token: Token<T>, config?: RequestConfig): Promise<Token<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
