import {weakMemoize} from '@oliveryasuna/themeable-utils';

const getTheme = (<TTheme extends Record<string, any>>(
    outerTheme: TTheme,
    theme: (TTheme | ((outerTheme: TTheme) => TTheme))
): TTheme => {
  if(typeof theme === 'function') {
    return theme(outerTheme);
  } else {
    return {...outerTheme, ...theme};
  }
});

const createCacheWithTheme = weakMemoize(<TTheme extends Record<string, any>>(outerTheme: TTheme): ((theme: TTheme) => TTheme) =>
    weakMemoize((theme: TTheme): TTheme => getTheme(outerTheme, theme)));

export {
  getTheme,
  createCacheWithTheme
};
