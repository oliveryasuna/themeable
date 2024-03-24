import type {DefaultTheme} from '@oliveryasuna/themeable-theme';

type ThemeProviderProps<TTheme extends Record<string, any> = DefaultTheme> = {theme: TTheme};

export type {
  ThemeProviderProps
};
