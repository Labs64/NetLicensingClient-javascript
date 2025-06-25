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
import { BundleEntity, BundleProps } from '@/types/entities/Bundle';
import { LicenseEntity, LicenseProps } from '@/types/entities/License';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface IBundleService {
  get<T extends object = BundleProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>>;

  list<T extends object = BundleProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<BundleEntity<Persisted<T>>[]>>;

  create<T extends object = BundleProps>(
    context: ContextInstance,
    bundle: BundleEntity<T>,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>>;

  update<T extends object = BundleProps>(
    context: ContextInstance,
    number: string,
    bundle: BundleEntity<T>,
    config?: RequestConfig,
  ): Promise<BundleEntity<Persisted<T>>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  obtain<T extends object = LicenseProps>(
    context: ContextInstance,
    number: string,
    licenseeNumber: string,
    config?: RequestConfig,
  ): Promise<LicenseEntity<Persisted<T>>[]>;
}
