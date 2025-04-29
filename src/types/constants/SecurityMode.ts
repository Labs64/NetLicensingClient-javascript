import SecurityModeEnum from '@/constants/SecurityMode';

export type SecurityModeKeys = keyof typeof SecurityModeEnum;
export type SecurityMode = (typeof SecurityModeEnum)[SecurityModeKeys];
