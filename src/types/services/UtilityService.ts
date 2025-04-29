/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { LicenseType } from '@/types/constants/LicenseType';
import { LicensingModel } from '@/types/constants/LicensingModel';
import { Country } from '@/types/entities/Country';
import { RequestConfig } from '@/types/services/Service';
import { Context } from '@/types/vo/Context';
import { Page } from '@/types/vo/Page';

export interface UtilityService {
  listLicenseTypes(context: Context, config?: RequestConfig): Promise<Page<LicenseType[]>>;

  listLicensingModels(context: Context, config?: RequestConfig): Promise<Page<LicensingModel[]>>;

  listCountries(
    context: Context,
    filter?: Record<string, string | boolean | number> | string | null,
    config?: RequestConfig,
  ): Promise<Page<Country[]>>;
}
