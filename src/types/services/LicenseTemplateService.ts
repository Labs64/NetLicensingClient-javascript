/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { LicenseTemplateEntity, LicenseTemplateProps } from '@/types/entities/LicenseTemplate';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface ILicenseTemplateService {
  get<T extends object = LicenseTemplateProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseTemplateEntity<T>>;

  list<T extends object = LicenseTemplateProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<LicenseTemplateEntity<T>[]>>;

  create<T extends object = LicenseTemplateProps>(
    context: ContextInstance,
    productModuleNumber: string | null,
    licenseTemplate: LicenseTemplateEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplateEntity<T>>;

  update<T extends object = LicenseTemplateProps>(
    context: ContextInstance,
    number: string,
    licenseTemplate: LicenseTemplateEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseTemplateEntity<T>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
