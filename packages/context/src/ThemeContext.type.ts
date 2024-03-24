import type {DefaultTheme} from '@oliveryasuna/themeable-theme';

type ThemeContextType<TTheme extends Record<string, any> = DefaultTheme> = TTheme;

export type {
  ThemeContextType
};
