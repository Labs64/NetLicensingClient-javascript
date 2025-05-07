/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import LicenseType from '@/constants/LicenseType';

export type LicenseTypeKeys = keyof typeof LicenseType;
export type LicenseTypeValues = (typeof LicenseType)[LicenseTypeKeys];
