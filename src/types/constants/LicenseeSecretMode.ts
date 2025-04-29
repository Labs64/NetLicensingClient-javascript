import LicenseeSecretModeEnum from '@/constants/LicenseeSecretMode';

export type LicenseeSecretModeKeys = keyof typeof LicenseeSecretModeEnum;
export type LicenseeSecretMode = (typeof LicenseeSecretModeEnum)[LicenseeSecretModeKeys];
