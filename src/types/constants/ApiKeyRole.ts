/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import ApiKeyRole from '@/constants/ApiKeyRole';

export type ApiKeyRoleKeys = keyof typeof ApiKeyRole;
export type ApiKeyRoleValues = (typeof ApiKeyRole)[ApiKeyRoleKeys];
