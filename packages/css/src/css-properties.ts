import type CSS from 'csstype';

type TLength = (number | string);

// TODO: Just `React.CSSProperties`?
type CssProperties = (CSS.StandardProperties<TLength> & CSS.SvgProperties<TLength> & CSS.VendorProperties<TLength>);

export type {
  TLength,
  CssProperties
};
