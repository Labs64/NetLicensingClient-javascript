/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { LicenseTemplate, LicenseTemplateProps } from '@/types/entities/LicenseTemplate';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface LicenseTemplateService {
  get<T extends object = LicenseTemplateProps>(
    context: Context,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>>;

  list<T extends object = LicenseTemplateProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<LicenseTemplate<T>[]>>;

  create<T extends object = LicenseTemplateProps>(
    context: Context,
    productModuleNumber: string | null,
    licenseTemplate: LicenseTemplate<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>>;

  update<T extends object = LicenseTemplateProps>(
    context: Context,
    number: string,
    licenseTemplate: LicenseTemplate<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplate<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
