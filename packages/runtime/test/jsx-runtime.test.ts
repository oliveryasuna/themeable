/**
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import {jsx} from '@oliveryasuna/themeable-runtime';

describe('jsx-runtime', ((): void => {
  test('jsx', ((): void => {
    render(
        jsx(
            'div',
            {
              'data-testid': 'test-id',
              sx: {
                color: 'red',
                mx: '5px'
              },
              children: 'Hello, World!'
            }
        )
    );


    expect(screen.getByTestId('test-id').style.color).toBe('red');
    expect(screen.getByTestId('test-id').style.marginLeft).toBe('5px');
    expect(screen.getByTestId('test-id').style.marginRight).toBe('5px');
  }));
}));
