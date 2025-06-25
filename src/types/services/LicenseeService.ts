/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { LicenseeEntity, LicenseeProps } from '@/types/entities/Licensee';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';
import { ValidationParametersInstance } from '@/types/vo/ValidationParameters';
import { ValidationResultsInstance } from '@/types/vo/ValidationResults';
import { Persisted } from '@/types/entities';

export interface ILicenseeService {
  get<T extends object = LicenseeProps>(
    context: ContextInstance,
    number: string,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<Persisted<T>>>;

  list<T extends object = LicenseeProps>(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<LicenseeEntity<Persisted<T>>[]>>;

  create<T extends object = LicenseeProps>(
    context: ContextInstance,
    productNumber: string,
    licensee: LicenseeEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<Persisted<T>>>;

  update<T extends object = LicenseeProps>(
    context: ContextInstance,
    number: string,
    licensee: LicenseeEntity<T>,
    config?: RequestConfig,
  ): Promise<LicenseeEntity<Persisted<T>>>;

  delete(
    context: ContextInstance,
    number: string,
    forceCascade?: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  validate(
    context: ContextInstance,
    number: string,
    parameters?: ValidationParametersInstance,
    config?: RequestConfig,
  ): Promise<ValidationResultsInstance>;

  transfer(
    context: ContextInstance,
    number: string,
    sourceLicenseeNumber: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
