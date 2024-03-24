import type {ThemeableJSX} from './jsx-namespace';
import type React from 'react';
import * as ReactJSXRuntime from 'react/jsx-runtime';
import {createThemeableProps} from './create-themeable-props';
import {Themeable} from './Themeable';

const jsxDEV = (<Props>(
    type: React.ElementType<Props>,
    props: Props,
    key: (string | undefined),
    isStaticChildren: boolean,
    source: {
      filename: string,
      lineNumber: number,
      columnNumber: number
    },
    self: any
): ThemeableJSX.Element => {
  if(!props || (typeof props !== 'object') || !('sx' in props)) {
    // @ts-expect-error: TS2339 because IDK.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ReactJSXRuntime.jsxDEV(type, props, key, isStaticChildren, source, self);
  }

  // @ts-expect-error: TS2339 because IDK.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return ReactJSXRuntime.jsxDEV(Themeable, createThemeableProps(props), key, isStaticChildren, source, self);
});

export type {ThemeableJSX as JSX} from './jsx-namespace';
export {Fragment} from 'react';
export {
  jsxDEV
};
