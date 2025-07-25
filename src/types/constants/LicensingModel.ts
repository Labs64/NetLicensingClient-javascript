/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import LicensingModel from '@/constants/LicensingModel';

export type LicensingModelKeys = keyof typeof LicensingModel;
export type LicensingModelValues = (typeof LicensingModel)[LicensingModelKeys];
