import type {CssPropertyAliasDefinitions, ThemeableCssProperties} from '@oliveryasuna/themeable-css';
import {CSS_PROPERTY_ALIAS_DEFINITION_KEYS, CSS_PROPERTY_ALIAS_DEFINITIONS} from '@oliveryasuna/themeable-css';
import {getValue} from './get-value';
import type {Theme} from './theme';
import type React from 'react';

const getAliasKeys = ((alias: (keyof CssPropertyAliasDefinitions)): (keyof React.CSSProperties)[] => {
  const definitions: CssPropertyAliasDefinitions[keyof CssPropertyAliasDefinitions] = CSS_PROPERTY_ALIAS_DEFINITIONS[alias]!;

  if(Array.isArray(definitions)) {
    return definitions;
  } else {
    return [definitions];
  }
});

const css = ((args: ThemeableCssProperties) =>
    ((theme: Theme): React.CSSProperties =>
        Object.entries(args)
            .reduce(
                // TODO: Better typing.
                ((result: React.CSSProperties, [key, value]): React.CSSProperties => {
                  const keys: (keyof React.CSSProperties)[] = [];
                  let finalValue: (React.CSSProperties[keyof React.CSSProperties]) = value;

                  if(CSS_PROPERTY_ALIAS_DEFINITION_KEYS.includes(key)) {
                    keys.push(...getAliasKeys(key));
                  } else {
                    keys.push(key as (keyof React.CSSProperties));
                  }

                  if((typeof value === 'string') && value.startsWith('$')) {
                    const cssValue: any = getValue(theme, value.slice(1));

                    if(cssValue !== undefined) {
                      finalValue = cssValue;
                    }
                  }

                  result = keys.reduce(
                      ((result: React.CSSProperties, key: (keyof React.CSSProperties)) => {
                        // @ts-expect-error: TS2590 because false-positive.
                        result[key] = finalValue;

                        return result;
                      }),
                      result
                  );

                  return result;
                }),
                {}
            )));

export {
  css
};
