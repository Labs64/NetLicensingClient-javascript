/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { AxiosResponse } from 'axios';

// types
import { NlicResponse } from '@/types/api/response';
import { Licensee, LicenseeProps } from '@/types/entities/Licensee';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';
import { ValidationParameters } from '@/types/vo/ValidationParameters';
import { ValidationResults } from '@/types/vo/ValidationResults';

export interface LicenseeService {
  get<T extends object = LicenseeProps>(context: Context, number: string, config?: RequestConfig): Promise<Licensee<T>>;

  list<T extends object = LicenseeProps>(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Licensee<T>[]>>;

  create<T extends object = LicenseeProps>(
    context: Context,
    productNumber: string,
    licensee: Licensee<T>,
    config?: RequestConfig,
  ): Promise<Licensee<T>>;

  update<T extends object = LicenseeProps>(
    context: Context,
    number: string,
    licensee: Licensee<T>,
    config?: RequestConfig,
  ): Promise<Licensee<T>>;

  delete(
    context: Context,
    number: string,
    forceCascade: boolean,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;

  validate(
    context: Context,
    number: string,
    parameters?: ValidationParameters,
    config?: RequestConfig,
  ): Promise<ValidationResults>;

  transfer(
    context: Context,
    number: string,
    sourceLicenseeNumber: string,
    config?: RequestConfig,
  ): Promise<AxiosResponse<NlicResponse>>;
}
