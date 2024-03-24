/**
 * @jest-environment jsdom
 * @jsxImportSource ../src
 */

import {describe, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import {ThemeProvider} from '@oliveryasuna/themeable-context';

describe('JSX', ((): void => {
  test('RENAME_ME', ((): void => {
    render(
        <ThemeProvider theme={{
          colors: {
            red: 'red'
          }
        }}>
          <div data-testid="themeable" sx={{color: '$colors.red', mx: '5px'}}/>
        </ThemeProvider>
    );

    console.log(screen.getByTestId('themeable').style);
  }));
}));
