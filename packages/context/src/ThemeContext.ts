import React from 'react';
import * as process from 'process';
import type {ThemeContextType} from './ThemeContext.type';

const ThemeContext = React.createContext<ThemeContextType>({});

if(process.env['NODE_ENV'] !== 'production') {
  ThemeContext.displayName = 'ThemeableThemeContext';
}

export type {
  ThemeContextType
};
export {
  ThemeContext
};
