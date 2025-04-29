/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { Product, ProductProps } from '@/types/entities/Product';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface ProductService {
  get<T extends object = ProductProps>(context: Context, number: string, config?: RequestConfig): Promise<Product<T>>;

  list<T extends object = ProductProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Product<T>[]>>;

  create<T extends object = ProductProps>(
    context: Context,
    product: Product<T>,
    config?: RequestConfig,
  ): Promise<Product<T>>;

  update<T extends object = ProductProps>(
    context: Context,
    number: string,
    product: Product<T>,
    config?: RequestConfig,
  ): Promise<Product<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
