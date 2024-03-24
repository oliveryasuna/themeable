const OBJECT_WITH_DEFAULT_KEY = '__default';

type ObjectWithDefault<T> = (T | {__default: T});

const hasDefault = ((obj: unknown): obj is {__default: unknown} => ((typeof obj === 'object') && (obj !== null) && ('__default' in obj)));

export type {
  ObjectWithDefault
};
export {
  OBJECT_WITH_DEFAULT_KEY,
  hasDefault
};
