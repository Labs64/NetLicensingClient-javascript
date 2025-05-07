import LicenseeSecretMode from '@/constants/LicenseeSecretMode';

export type LicenseeSecretModeKeys = keyof typeof LicenseeSecretMode;
export type LicenseeSecretModeValues = (typeof LicenseeSecretMode)[LicenseeSecretModeKeys];
