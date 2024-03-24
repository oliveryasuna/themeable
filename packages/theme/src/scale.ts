type ScaleArray<T> = T[];

type ScaleObject<T> = {
  [index: number]: T,
  // eslint-disable-next-line no-use-before-define
  [key: string]: ValueOrNestedScale<T>
};
type NestedScaleObject<T> = (ScaleObject<T> & {
  __default?: T,
});

type Scale<T> = (ScaleArray<T> | ScaleObject<T>);
type NestedScale<T> = (ScaleArray<T> | NestedScaleObject<T>);

type ValueOrScale<T> = (T | Scale<T>);
type ValueOrNestedScale<T> = (T | NestedScale<T>);

export type {
  ScaleArray,
  ScaleObject,
  NestedScaleObject,
  Scale,
  NestedScale,
  ValueOrScale,
  ValueOrNestedScale
};
