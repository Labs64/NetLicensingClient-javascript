import TimeVolumePeriodEnum from '@/constants/TimeVolumePeriod';

export type TimeVolumePeriodKeys = keyof typeof TimeVolumePeriodEnum;
export type TimeVolumePeriod = (typeof TimeVolumePeriodEnum)[TimeVolumePeriodKeys];
