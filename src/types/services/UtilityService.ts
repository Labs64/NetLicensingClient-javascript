/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { LicenseTypeValues } from '@/types/constants/LicenseType';
import { LicensingModelValues } from '@/types/constants/LicensingModel';
import { CountryEntity } from '@/types/entities/Country';
import { RequestConfig } from '@/types/services/Service';
import { ContextInstance } from '@/types/vo/Context';
import { PageInstance } from '@/types/vo/Page';

export interface IUtilityService {
  listLicenseTypes(context: ContextInstance, config?: RequestConfig): Promise<PageInstance<LicenseTypeValues[]>>;

  listLicensingModels(context: ContextInstance, config?: RequestConfig): Promise<PageInstance<LicensingModelValues[]>>;

  listCountries(
    context: ContextInstance,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<PageInstance<CountryEntity[]>>;
}
