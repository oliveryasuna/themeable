import {describe, expect, test} from '@jest/globals';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';
import {css} from '@oliveryasuna/themeable-theme';

describe('css', ((): void => {
  const theme: DefaultTheme = {
    sizes: {
      sm: '16px',
      md: '32px',
      lg: '64px'
    },
    space: ['0px', '4px', '8px', '16px', '32px'],
    colors: {
      primary: {
        __default: 'blue'
      }
    }
  };

  test('should get value from object', ((): void => {
    expect(css({width: '$sizes.sm'})(theme)).toStrictEqual({width: '16px'});
  }));

  test('should get value from array', ((): void => {
    expect(css({padding: '$space.2'})(theme)).toStrictEqual({padding: '8px'});
  }));

  test('should get default value', ((): void => {
    expect(css({color: '$colors.primary'})(theme)).toStrictEqual({color: 'blue'});
  }));

  test('should handle alias for single property', ((): void => {
    expect(css({mt: '$space.3'})(theme)).toStrictEqual({marginTop: '16px'});
  }));

  test('should handle alias for multiple properties', ((): void => {
    expect(css({mx: '$space.4'})(theme)).toStrictEqual({marginLeft: '32px', marginRight: '32px'});
  }));
}));
