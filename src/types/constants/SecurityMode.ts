import SecurityMode from '@/constants/SecurityMode';

export type SecurityModeKeys = keyof typeof SecurityMode;
export type SecurityModeValues = (typeof SecurityMode)[SecurityModeKeys];
