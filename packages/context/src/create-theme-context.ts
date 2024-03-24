import React from 'react';
import * as process from 'process';
import type {ThemeContextType} from './ThemeContext.type';
import {once} from 'lodash';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';

const createThemeContext = once(<TTheme extends Record<string, any> = DefaultTheme>(): React.Context<ThemeContextType<TTheme>> => {
  const ThemeContext = React.createContext<ThemeContextType<TTheme>>({} as ThemeContextType<TTheme>);

  if(process.env['NODE_ENV'] !== 'production') {
    ThemeContext.displayName = 'ThemeableThemeContext';
  }

  return ThemeContext;
});

export type {
  ThemeContextType
};
export {
  createThemeContext
};
