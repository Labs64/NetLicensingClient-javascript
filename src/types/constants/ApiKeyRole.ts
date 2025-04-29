/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import ApiKeyRoleEnum from '@/constants/ApiKeyRole';

export type ApiKeyRoleKeys = keyof typeof ApiKeyRoleEnum;
export type ApiKeyRole = (typeof ApiKeyRoleEnum)[ApiKeyRoleKeys];
