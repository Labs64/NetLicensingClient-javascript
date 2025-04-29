/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import NotificationProtocolEnum from '@/constants/NotificationProtocol';

export type NotificationProtocolKeys = keyof typeof NotificationProtocolEnum;
export type NotificationProtocol = (typeof NotificationProtocolEnum)[NotificationProtocolKeys];
