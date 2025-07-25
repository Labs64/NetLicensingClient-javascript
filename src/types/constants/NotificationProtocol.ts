/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import NotificationProtocol from '@/constants/NotificationProtocol';

export type NotificationProtocolKeys = keyof typeof NotificationProtocol;
export type NotificationProtocolValues = (typeof NotificationProtocol)[NotificationProtocolKeys];
