import type {CssProperties} from './css-properties';

type CssPropertyAliases = {
  m?: CssProperties['margin'],
  mt?: CssProperties['marginTop'],
  mr?: CssProperties['marginRight'],
  mb?: CssProperties['marginBottom'],
  ml?: CssProperties['marginLeft'],
  mx?: CssProperties['marginLeft'],
  my?: CssProperties['marginTop'],

  size?: CssProperties['width'],

  p?: CssProperties['padding'],
  pt?: CssProperties['paddingTop'],
  pr?: CssProperties['paddingRight'],
  pb?: CssProperties['paddingBottom'],
  pl?: CssProperties['paddingLeft'],
  px?: CssProperties['paddingLeft'],
  py?: CssProperties['paddingTop'],

  fg?: CssProperties['color'],
  bg?: CssProperties['backgroundColor']
};

type CssPropertyAliasDefinitions = Record<string, ((keyof CssProperties) | (keyof CssProperties)[])>;

const CSS_PROPERTY_ALIAS_DEFINITIONS: Readonly<CssPropertyAliasDefinitions> = {
  // eslint-disable-next-line id-length
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],

  size: ['width', 'height'],

  // eslint-disable-next-line id-length
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],

  fg: 'color',
  bg: 'backgroundColor'
};

const CSS_PROPERTY_ALIAS_DEFINITION_KEYS: ReadonlyArray<string> = Object.keys(CSS_PROPERTY_ALIAS_DEFINITIONS);

export type {
  CssPropertyAliasDefinitions,
  CssPropertyAliases
};
export {
  CSS_PROPERTY_ALIAS_DEFINITIONS,
  CSS_PROPERTY_ALIAS_DEFINITION_KEYS
};
