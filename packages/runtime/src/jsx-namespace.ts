import type {JSX} from 'react';
import type {SxProp} from './sx-prop';

/**
 * Only add the `sx` prop if the `className` prop is present.
 */
type ConditionalSxProp<Props> = ('className' extends (keyof Props) ? (string extends Props['className'] ? (Props & SxProp) : Props) : Props);

declare namespace ThemeableJSX {
  export type Element = JSX.Element;
  export type ElementType = JSX.ElementType;
  export type ElementClass = JSX.ElementClass;
  export type ElementAttributesProperty = JSX.ElementAttributesProperty;
  export type ElementChildrenAttribute = JSX.ElementChildrenAttribute;
  export type LibraryManagedAttributes<Component, Props> = (ConditionalSxProp<Props> & JSX.LibraryManagedAttributes<Component, Props>);
  export type IntrinsicAttributes = JSX.IntrinsicAttributes;
  export type IntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
  export type IntrinsicElements = {
    // This is safe because all intrinsic elements have `className`.
    [Key in (keyof JSX.IntrinsicElements)]: (JSX.IntrinsicElements[Key] & SxProp)
  }
}

export type {
  ThemeableJSX
};
