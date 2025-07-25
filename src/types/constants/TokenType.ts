/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import TokenType from '@/constants/TokenType';

export type TokenTypeKeys = keyof typeof TokenType;
export type TokenTypeValues = (typeof TokenType)[TokenTypeKeys];
