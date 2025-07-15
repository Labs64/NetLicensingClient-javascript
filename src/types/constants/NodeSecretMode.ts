import NodeSecretMode from '@/constants/NodeSecretMode';

export type NodeSecretModeKeys = keyof typeof NodeSecretMode;
export type NodeSecretModeValues = (typeof NodeSecretMode)[NodeSecretModeKeys];
