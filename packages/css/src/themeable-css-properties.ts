import type {CssProperties} from './css-properties';
import type {CssPropertyAliases} from './css-property-aliases';

type ThemeableCssProperties = (CssProperties & CssPropertyAliases);

export type {
  ThemeableCssProperties
};
