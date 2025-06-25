export type Persisted<T extends object = object> = Omit<T, 'number' | 'active'> & {
  number: string;
  active: boolean;
};
