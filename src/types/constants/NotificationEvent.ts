/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import NotificationEvent from '@/constants/NotificationEvent';

export type NotificationEventKeys = keyof typeof NotificationEvent;
export type NotificationEventValues = (typeof NotificationEvent)[NotificationEventKeys];
