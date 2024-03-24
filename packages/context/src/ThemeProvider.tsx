import React from 'react';
import {createCacheWithTheme} from './utils';
import type {ThemeProviderProps} from './ThemeProvider.props';
import {useTheme} from './use-theme';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';
import {createThemeContext} from './create-theme-context';

const ThemeProvider = (<TTheme extends Record<string, any> = DefaultTheme>(props: React.PropsWithChildren<ThemeProviderProps<TTheme>>): React.ReactNode => {
  const ThemeContext = createThemeContext<TTheme>();

  let theme = useTheme<TTheme>();

  if(props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return (<ThemeContext.Provider value={theme} children={props.children}/>);
});

export type {
  ThemeProviderProps
};
export {
  ThemeProvider
};
