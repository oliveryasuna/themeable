import type {ThemeableJSX} from './jsx-namespace';
import type React from 'react';
import * as ReactJSXRuntime from 'react/jsx-runtime';
import {createThemeableProps} from './create-themeable-props';
import {Themeable} from './Themeable';

const jsx = (<Props>(type: React.ElementType<Props>, props: Props, key?: string): ThemeableJSX.Element => {
  if(!props || (typeof props !== 'object') || !('sx' in props)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ReactJSXRuntime.jsx(type, props, key);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return ReactJSXRuntime.jsx(Themeable, createThemeableProps(type, props), key);
});

const jsxs = (<Props>(type: React.ElementType<Props>, props: Props, key?: string): ThemeableJSX.Element => {
  if(!props || (typeof props !== 'object') || !('sx' in props)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ReactJSXRuntime.jsxs(type, props, key);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return ReactJSXRuntime.jsxs(Themeable, createThemeableProps(type, props), key);
});

export type {ThemeableJSX as JSX} from './jsx-namespace';
export {Fragment} from 'react';
export {
  jsx,
  jsxs
};
