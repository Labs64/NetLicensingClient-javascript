/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { AxiosResponse } from 'axios';
import { NlicResponse } from '@/types/api/response';
import { License, LicenseProps } from '@/types/entities/License';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface LicenseService {
  get<T extends object = LicenseProps>(context: Context, number: string, config?: RequestConfig): Promise<License<T>>;

  list<T extends object = LicenseProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<License<T>[]>>;

  create<T extends object = LicenseProps>(
    context: Context,
    licenseeNumber: string | null,
    licenseTemplateNumber: string | null,
    transactionNumber: string | null,
    license: License<T>,
    config?: RequestConfig,
  ): Promise<License<T>>;

  update<T extends object = LicenseProps>(
    context: Context,
    number: string,
    transactionNumber: string | null,
    license: License<T>,
    config?: RequestConfig,
  ): Promise<License<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
