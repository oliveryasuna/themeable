import type {Scale} from './scale';
import type CSS from 'csstype';
import type {TLength} from '@oliveryasuna/themeable-css';

type DefaultTheme = {
  borders?: Scale<CSS.Property.Border<NonNullable<unknown>>>,
  borderStyles?: Scale<CSS.Property.Border<NonNullable<unknown>>>,
  borderWidths?: Scale<CSS.Property.BorderWidth<TLength>>,
  borderRadii?: Scale<CSS.Property.BorderRadius<TLength>>,
  colors?: Scale<CSS.Property.Color>,
  fonts?: Scale<CSS.Property.FontFamily>,
  fontSizes?: Scale<CSS.Property.FontSize<TLength>>,
  fontWeights?: Scale<CSS.Property.FontWeight>,
  letterSpacings?: Scale<CSS.Property.LetterSpacing<TLength>>,
  lineHeights?: Scale<CSS.Property.LineHeight<TLength>>,
  shadows?: Scale<CSS.Property.BoxShadow>,
  sizes?: Scale<CSS.Property.Width<NonNullable<unknown>> | CSS.Property.Height<NonNullable<unknown>>>,
  space?: Scale<CSS.Property.Margin<NonNullable<unknown>>>,
  zIndices?: Scale<CSS.Property.ZIndex>
};

export type {
  DefaultTheme
};
