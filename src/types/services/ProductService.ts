/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { ProductEntity, ProductProps } from '@/types/entities/Product';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface IProductService {
  get<T extends object = ProductProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<ProductEntity<T>>;

  list<T extends object = ProductProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<ProductEntity<T>[]>>;

  create<T extends object = ProductProps>(
    context: ContextInstance,
    product: ProductEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductEntity<T>>;

  update<T extends object = ProductProps>(
    context: ContextInstance,
    number: string,
    product: ProductEntity<T>,
    config?: RequestConfig,
  ): Promise<ProductEntity<T>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
