import type {ThemeableJSX} from '@oliveryasuna/themeable-runtime';
import {jsx as themeableJsx} from '@oliveryasuna/themeable-runtime';

const jsx = themeableJsx;

declare namespace jsx {
  namespace JSX {
    export type Element = ThemeableJSX.Element;
    export type ElementType = ThemeableJSX.ElementType;
    export type ElementClass = ThemeableJSX.ElementClass;
    export type ElementAttributesProperty = ThemeableJSX.ElementAttributesProperty;
    export type ElementChildrenAttribute = ThemeableJSX.ElementChildrenAttribute;
    export type LibraryManagedAttributes<Component, Props> = ThemeableJSX.LibraryManagedAttributes<Component, Props>;
    export type IntrinsicAttributes = ThemeableJSX.IntrinsicAttributes;
    export type IntrinsicClassAttributes<T> = ThemeableJSX.IntrinsicClassAttributes<T>;
    export type IntrinsicElements = ThemeableJSX.IntrinsicElements;
  }
}

export * from '@oliveryasuna/themeable-context';
export * from '@oliveryasuna/themeable-css';
export * from '@oliveryasuna/themeable-runtime';
export * from '@oliveryasuna/themeable-theme';
export * from '@oliveryasuna/themeable-utils';
export {
  jsx
};
