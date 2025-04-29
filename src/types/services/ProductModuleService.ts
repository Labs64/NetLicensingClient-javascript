/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { ProductModule, ProductModuleProps } from '@/types/entities/ProductModule';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface ProductModuleService {
  get<T extends object = ProductModuleProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<ProductModule<T>>;

  list<T extends object = ProductModuleProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<ProductModule<T>[]>>;

  create<T extends object = ProductModuleProps>(
    context: Context,
    productNumber: string | null,
    productModule: ProductModule<T>,
    config?: RequestConfig,
  ): Promise<ProductModule<T>>;

  update<T extends object = ProductModuleProps>(
    context: Context,
    number: string,
    productModule: ProductModule<T>,
    config?: RequestConfig,
  ): Promise<ProductModule<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
