import TimeVolumePeriod from '@/constants/TimeVolumePeriod';

export type TimeVolumePeriodKeys = keyof typeof TimeVolumePeriod;
export type TimeVolumePeriodValues = (typeof TimeVolumePeriod)[TimeVolumePeriodKeys];
