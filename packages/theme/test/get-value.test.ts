import {describe, expect, test} from '@jest/globals';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';
import {getValue} from '@oliveryasuna/themeable-theme';

describe('getValue', ((): void => {
      const theme: DefaultTheme = {
        borders: {
          0: 'none',
          1: '2px solid black',
          '3px': '3px solid black',
          '4px': '4px solid black',
          foo: {
            __default: '5px solid black',
            1: '6px solid black',
            '7px': '7px solid black'
          }
        }
      };

      test('should return value by index', ((): void => {
        expect(getValue(theme, 'borders.0')).toBe('none');
        expect(getValue(theme, 'borders.1')).toBe('2px solid black');
      }));

      test('should return value by key', ((): void => {
        expect(getValue(theme, 'borders.3px')).toBe('3px solid black');
        expect(getValue(theme, 'borders.4px')).toBe('4px solid black');
      }));

      test('should return default of nested', ((): void => {
        expect(getValue(theme, 'borders.foo')).toBe('5px solid black');
      }));

      test('should return value of nested by index', ((): void => {
        expect(getValue(theme, 'borders.foo.1')).toBe('6px solid black');
      }));

      test('should return value of nested by key', ((): void => {
        expect(getValue(theme, 'borders.foo.7px')).toBe('7px solid black');
      }));

      test('should return undefined if not found', ((): void => {
        expect(getValue(theme, 'borders.2')).toBeUndefined();
      }));
    })
);
