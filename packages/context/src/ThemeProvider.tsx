import React from 'react';
import {ThemeContext} from './ThemeContext';
import {createCacheWithTheme} from './utils';
import type {ThemeProviderProps} from './ThemeProvider.props';
import {useTheme} from './use-theme';

const ThemeProvider = ((props: React.PropsWithChildren<ThemeProviderProps>): React.ReactNode => {
  let theme = useTheme();

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
