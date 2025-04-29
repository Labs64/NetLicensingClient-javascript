/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { AxiosResponse } from 'axios';
import { NlicResponse } from '@/types/api/response';
import { Bundle, BundleProps } from '@/types/entities/Bundle';
import { License, LicenseProps } from '@/types/entities/License';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface BundleService {
  get<T extends object = BundleProps>(context: Context, number: string, config?: RequestConfig): Promise<Bundle<T>>;

  list<T extends object = BundleProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Bundle<T>[]>>;

  create<T extends object = BundleProps>(
    context: Context,
    bundle: Bundle<T>,
    config?: RequestConfig,
  ): Promise<Bundle<T>>;

  update<T extends object = BundleProps>(
    context: Context,
    number: string,
    bundle: Bundle<T>,
    config?: RequestConfig,
  ): Promise<Bundle<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  obtain<T extends object = LicenseProps>(
    context: Context,
    number: string,
    licenseeNumber: string,
    config?: RequestConfig,
  ): Promise<License<T>[]>;
}
