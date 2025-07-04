export type RequiredProps<Base, Keys extends keyof Base> = Required<Pick<Base, Keys>>;
