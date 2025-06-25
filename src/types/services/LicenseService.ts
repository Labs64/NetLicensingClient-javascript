/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// types
import { AxiosResponse } from 'axios';
import { NlicResponse } from '@/types/api/response';
import { Persisted } from '@/types/entities';
import { LicenseEntity, LicenseProps } from '@/types/entities/License';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface ILicenseService {
  get<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseEntity<Persisted<T>>>;

  list<T extends object = LicenseProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<LicenseEntity<Persisted<T>>[]>>;

  create<T extends object = LicenseProps>(
    context: ContextInstance,
    licenseeNumber: string | null,
    licenseTemplateNumber: string | null,
    transactionNumber: string | null,
    license: LicenseEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseEntity<Persisted<T>>>;

  update<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    transactionNumber: string | null,
    license: LicenseEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseEntity<Persisted<T>>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
