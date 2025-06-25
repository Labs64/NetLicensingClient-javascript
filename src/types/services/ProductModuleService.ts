/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { Persisted } from '@/types/entities';
import { ProductModuleEntity, ProductModuleProps } from '@/types/entities/ProductModule';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface IProductModuleService {
  get<T extends object = ProductModuleProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>>;

  list<T extends object = ProductModuleProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<ProductModuleEntity<Persisted<T>>[]>>;

  create<T extends object = ProductModuleProps>(
    context: ContextInstance,
    productNumber: string | null,
    productModule: ProductModuleEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>>;

  update<T extends object = ProductModuleProps>(
    context: ContextInstance,
    number: string,
    productModule: ProductModuleEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductModuleEntity<Persisted<T>>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
