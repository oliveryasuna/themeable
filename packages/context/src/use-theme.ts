import type {ThemeContextType} from './ThemeContext.type';
import React from 'react';
import {ThemeContext} from './ThemeContext';

const useTheme = ((): ThemeContextType => React.useContext<ThemeContextType>(ThemeContext));

export {
  useTheme
};
