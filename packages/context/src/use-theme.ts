import type {ThemeContextType} from './ThemeContext.type';
import React from 'react';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';
import {createThemeContext} from './create-theme-context';

const useTheme = (<TTheme extends Record<string, any> = DefaultTheme>(): ThemeContextType<TTheme> =>
    React.useContext<ThemeContextType<TTheme>>(createThemeContext<TTheme>()));

export {
  useTheme
};
