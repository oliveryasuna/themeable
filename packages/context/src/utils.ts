import type {Theme} from '@oliveryasuna/themeable-theme';
import {weakMemoize} from '@oliveryasuna/themeable-utils';

const getTheme = ((outerTheme: Theme, theme: (Theme | ((theme: Theme) => Theme))): Theme => {
  if(typeof theme === 'function') {
    return theme(outerTheme);
  } else {
    return {...outerTheme, ...theme};
  }
});

const createCacheWithTheme = weakMemoize((outerTheme: Theme): ((theme: Theme) => Theme) =>
    weakMemoize((theme: Theme): Theme => getTheme(outerTheme, theme)));

export {
  getTheme,
  createCacheWithTheme
};
